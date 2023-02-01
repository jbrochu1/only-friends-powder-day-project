class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    def show
        render json: current_user, status: :ok
    end

    # CREATES NEW USER
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    # SETS THE PARAMETERS THAT USERS CAN MANIPULATE
    def user_params
        params.permit(:username, :email, :password, :first_name, :last_name, :age, :avatar, :neighborhood)
    end

end
