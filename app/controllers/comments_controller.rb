class CommentsController < ApplicationController
    before_action :set_comments, only: [:show, :update, :destroy]

    def index
        render json: Comment.all, status: :ok
    end
    
    def show
        render json: @comment, status: :ok
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    end

    private

    def set_comments
        @comment = Comment.find(params[:id])
    end

    def comment_params
        params.permit(:trip_id, :user_id, :comment, :date)
    end
end
