# frozen_string_literal: true

module SessionConcern
  private

  def current_user
    return @current_user if @current_user.present?

    # session の存在チェック -> token のチェック の順番で行う
    if user_id = session[:user_id]
      @current_user = User.find_by(id: user_id)
    elsif user_id = cookies.signed[:user_id]
      user = User.find_by(id: user_id)

      return unless user&.authenticated?(:remember, cookies[:remember_token])

      log_in user
      @current_user = user
    end
  end

  # ログインしていないければ、ログイン画面に強制リダイレクトさせる
  def require_sign_in!
    redirect_to login_path unless current_user
  end

  # ログイン済みであればログイン画面やユーザー登録画面は表示する必要がないから
  def redirect_to_dashboard_if_logged_in
    return unless current_user

    redirect_to root_path
  end

  def log_in(user)
    session[:user_id] = user.id
  end

  # ログアウト処理
  # cookie や session を全て削除し、current_user もリセットしておく
  def log_out
    forget(current_user)
    session.delete(:user_id)
    @current_user = nil
  end

  # ブラウザを閉じても ログイン中のユーザーを記憶しておくための処理
  # remember_digest に token の hash 値を保存した後に、
  # cookie に user_id と token を記憶させておく
  # @param [User] user userモデル
  def remember(user)
    user.remember
    cookies.permanent.signed[:user_id] = user.id
    cookies.permanent[:remember_token] = user.remember_token
  end

  # ログアウト処理の一貫
  # remember_digest を初期化し、cookie も削除する
  def forget(user)
    user.forget
    cookies.delete(:user_id)
    cookies.delete(:remember_token)
  end
end
