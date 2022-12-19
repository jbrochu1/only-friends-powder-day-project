class MountainsController < ApplicationController
    before_action :set_mountain, only: [:show, :update, :destroy]

    def index
        render json: Mountain.all, status: :ok
    end
    
    def show
        render json: @mountain, status: :ok
    end

    private

    def set_mountain
        @mountain = Mountain.find(params[:id])
    end
end
