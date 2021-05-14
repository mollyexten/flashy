class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    # Find the user based on the provided username
    @user = User.find_by(username: login_params[:username])
    # Use bcrypt helper method .authenticate to check if provided password matches encoded password_digest from database
    if @user
      if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      # Use encode method to create a token with the user's id and username inside the token
      token = encode({id: @user.id})
      render json: {user: @user.attributes.except("password_digest"), token: token}, status: :ok
      else
        render json: { errors: 'unauthorized' }, status: :unauthorized
      end
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end
  
  # GET /auth/verify
  def verify
    render json: @current_user.attributes.except("password_digest"), status: :ok
  end


  private

  def login_params
    params.require(:authentication).permit(:username, :password)
  end
end