class ApplicationController < ActionController::API
    # skip_before_action :verify_authenticity_token
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

    before_action :authorized_user

    def current_user
        user = User.find_by(id: session[:user_id])
        return user
    end

    def authorized_user
        return render json: { error: "User not authorized" }, status: :unauthorized unless current_user
    end

    private

    def not_found_response(exception)
        render json: { error: "#{exception.model} not found" }, status: :not_found
    end

    def unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

   
end
