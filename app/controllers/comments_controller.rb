class CommentsController < ApplicationController
    before_action :set_comments, only: [:show, :update, :destroy]

    def index
        render json: Comment.all, status: :ok
    end
    
    def show
        render json: @comment, status: :ok
    end

    private

    def set_comments
        @comment = Comment.find(params[:id])
    end
end
