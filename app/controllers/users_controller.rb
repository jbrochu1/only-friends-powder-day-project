class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    def show
        # user = User.find(session[:user_id])
        render json: current_user, status: :ok
    end

    # CREATES NEW USER
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private

    # SETS THE PARAMETERS THAT USERS CAN MANIPULATE
    def user_params
        params.permit(:username, :email, :password)
    end

end
