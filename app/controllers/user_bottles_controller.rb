class UserBottlesController < ApplicationController

    def create
        user_bottle = UserBottles.create(ub_param)
        render json: user_bottle
      end
    

    
      private
    
      def ub_param
        params.require(:user_bottle).permit(:user_id, :bottle_id, :count)
      end


end
