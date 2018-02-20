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

  protected

  def jog_params
    params.require('data').permit('attributes' => ['distance', 'time', 'created_at'])
  end
end
