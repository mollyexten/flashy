class ApplicationController < ActionController::API
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  # Encode token with the built-in Rails secret key
  def encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, SECRET_KEY)
  end
  
  # Decode token when user logs out
  def decode(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new decoded
  end

  # As long as the user exists, any controller that calls this method will get present user data
  def authorize_request
    # Grabs the header and splits out the token from the header
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    begin
      # Decode helper method pulls user info from the token
      @decoded = decode(header)
      # Set isntance variable current_user using user_id from token data
      @current_user = User.find(@decoded[:id])
    # If the user can't be found or the token isn't valid, we raise an unauthorized error
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end

end
