class UsersController < ApplicationController

    def create
        user = User.create(user_param)
        render json: user
      end
    
      def show
        user = User.find(params[:id])
        render json: user
      end
    
      def destroy
        user = User.find(params[:id])
        user.destroy
      end
    
      private
    
      def user_param
        params.require(:user).permit(:email, :name)
      end


end
