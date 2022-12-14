class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    # '/login' -> CREATES USER SESSION
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          cookies[:user_id] = user.id
          render json: user, status: :ok
        else 
          render json: {errors: "Invalid Input Data"}, status: :unauthorized
        end
    end

    # '/logout' -> ENDS USER SESSION
    def destroy
        session.delete(:user_id)
        head :no_content
    end 
end
