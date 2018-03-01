class Api::AccountsController < Api::BaseController
  skip_before_action :require_login, only: [:create], raise: false
  def create
    user_params = params.require(:user).permit(:email, :password)
    user = User.create(
      email: user_params[:email],
      password: user_params[:password]
    )
    if user.valid?
      user.save
      user.regenerate_token
      render json: { token: user.token }
    else
      respond_with_errors(user)
    end
  end
end
