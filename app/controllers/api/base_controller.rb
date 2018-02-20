class Api::BaseController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :require_login


  def require_login
    authenticate_token || render_unauthorized("Access denied")
  end

  def current_user
    @current_user ||= authenticate_token
  end

  protected

  def render_unauthorized(message)
    errors = {
      errors: [
        {
          detail: message
        }
      ]
    }
    render json: errors, status: :unauthorized
  end

  def respond_with_errors(object)
    errors = ErrorSerializer.serialize(object)

    render json: { errors: errors }, status: :unprocessable_entity
  end

  private

  def authenticate_token
    authenticate_with_http_token do |token, options| 
      User.find_by(token: token)
    end
  end
end
