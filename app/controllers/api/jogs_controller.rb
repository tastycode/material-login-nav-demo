class Api::JogsController < Api::BaseController
  def create
    jog = Jog.new(jog_params)
    jog.user = current_user
    if jog.valid?
      jog.save
      render json: jog
    else
      respond_with_errors(jog)
    end
  end

  def update
    jog = Jog.find_by(id: params[:id], user: current_user)
    jog.assign_attributes(jog_params)
    if jog.valid?
      jog.save
      render json: jog
    else
      respond_with_errors(jog)
    end
  end

  def index
    jogs = current_user.jogs
    render json: jogs
  end

  protected

  def jog_params
    params.require('data').permit('attributes' => ['distance', 'time', 'created_at'])
  end
end
