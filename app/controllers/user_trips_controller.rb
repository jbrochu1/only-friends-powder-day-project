class UserTripsController < ApplicationController

    before_action :set_user_trip, only: [:show, :update, :destroy]

    def index
        render json: UserTrip.all, status: :ok
    end
    
    def show
        render json: @user_trip, status: :ok
    end

    def create
        usertrip = UserTrip.create!(usertrip_params)
        # UserTrip.create!(user_id: params[:user_id], trip_id: trip.id)
        render json: usertrip, status: :created
    end

    def destroy
        @user_trip.destroy
        head :no_content
    end 

    private

    def set_user_trip
        @user_trip = UserTrip.find(params[:id])
    end

    def usertrip_params
        params.permit(:user_id, :trip_id)
    end

end
