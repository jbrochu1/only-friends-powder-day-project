class TripsController < ApplicationController

    before_action :set_trip, only: [:show, :update, :destroy]


    def index
        render json: Trip.all, status: :ok
    end
    
    def show
        render json: @trip, status: :ok
    end

    private

    def set_trip
        @trip = Trip.find(params[:id])
    end

end
