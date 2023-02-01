class TripsController < ApplicationController

    before_action :set_trip, only: [:show, :update, :destroy]

    def index
        render json: Trip.all, status: :ok
    end
    
    def show
        render json: @trip, status: :ok
    end

    def create
        trip = Trip.create!(trip_params)
        UserTrip.create!(user_id: params[:user_id], trip_id: trip.id)
        render json: trip, status: :created
    end

    def update
        @trip.update!(trip_params)
        render json: @trip, status: :accepted
    end

    def destroy
        @trip.destroy
        head :no_content
    end

    private

    def set_trip
        @trip = Trip.find(params[:id])
    end

    def trip_params
        params.permit(:user_id, :trip_start, :trip_end, :mountain_id)
    end

end
