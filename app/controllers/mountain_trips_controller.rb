class MountainTripsController < ApplicationController
    before_action :set_mountain_trip, only: [:show, :update, :destroy]

    def index
        render json: MountainTrip.all, status: :ok
    end
    
    def show
        render json: @mountain_trip, status: :ok
    end

    private

    def set_mountain_trip
        @mountain_trip = MountainTrip.find(params[:id])
    end
end
