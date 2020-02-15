# frozen_string_literal: true

module Graphql
  module ErrorHandler
    extend ActiveSupport::Concern

    included do
      rescue_from(ActiveRecord::RecordNotFound) do |error|
        raise GraphQL::ExecutionError.new(error.message)
      end

      rescue_from(ActiveRecord::RecordInvalid, ActiveRecord::RecordNotDestroyed) do |error|
        message = error.record.errors.full_messages.join(', ')
        raise GraphQL::ExecutionError.new(message)
      end
    end
  end
end
