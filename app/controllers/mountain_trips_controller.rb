class MountainTripsController < ApplicationController
    before_action :set_mountain_trip, only: [:show, :update, :destroy]

    def index
        render json: MountainTrip.all, status: :ok
    end
    
    def show
        render json: @mountain_trip, status: :ok
    end

    def create
        mtn_trip = MountainTrip.create!(mtn_trip_params)
        render json: mtn_trip, status: :created
    end

    private

    def set_mountain_trip
        @mountain_trip = MountainTrip.find(params[:id])
    end

    def mtn_trip_params
        params.permit(:mountain_id, :trip_id)
    end
end
