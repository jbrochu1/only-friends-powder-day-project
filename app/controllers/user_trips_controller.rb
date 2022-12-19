class UserTripsController < ApplicationController

    before_action :set_user_trip, only: [:show, :update, :destroy]

    def index
        render json: UserTrip.all, status: :ok
    end
    
    def show
        render json: @user_trip, status: :ok
    end

    private

    def set_user_trip
        @user_trip = UserTrip.find(params[:id])
    end

end
