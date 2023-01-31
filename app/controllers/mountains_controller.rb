class MountainsController < ApplicationController
    before_action :set_mountain, only: [:show, :update, :destroy]

    def index
        render json: Mountain.all, status: :ok
    end
    
    def show
        render json: @mountain, status: :ok
    end

    def create
        mountain = Mountain.create!(mountain_params)
        render json: mountain, status: :created
    end

    private

    def set_mountain
        @mountain = Mountain.find(params[:id])
    end

    def mountain_params
        params.permit(:name, :image, :elevation, :ski_pass, :blackout_dates)
    end
end
