# Glenfiddich

タスクマネジメントツール(プロトタイプ版)

# Dependency

- ruby
  - 2.6.5
- Rails
  - 6.0.0
- MySQL
  - 5.7

# Setup

- リポジトリを close (local 上の好きな場所で問題ない)

```
$ cd your_workspace/
$ git clone git@github.com:nr27bypphy/Glenfiddich.git
```

- clone した project 配下で イメージを build

```
$ docker-compose build
```

- 各サービスを起動

```
$ docker-compose up
```

- db を作成

```
$ docker-compose run web rake db:create
```

#### 運用時

- サーバーを止める時

```
$ docker-compose down
```

- rails サーバーを再起動

```
$ docker-compose up --build
```

- その他 rails コマンドの実行

```
#docker-compose run {サービス名} {任意のコマンド}
$ docker-compose run web bundle install
```

# Usage

今後追記予定
