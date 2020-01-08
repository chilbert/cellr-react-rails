class UserBottlesController < ApplicationController

    def index
        user_bottles = UserBottle.all
        render jason: user_bottles        
    end

    def create
        user_bottles = UserBottle.create(ub_param)
        render json: user_bottle
    end

    def update 
        user_bottle = UserBottle.find(params[:id])
        user_bottle.update_attributes(ub_param)
    end

    def destroy
        user_bottle = UserBottle.find(params[:id])
        user_bottle.destroy
    end
    

      private
    
      def ub_param
        params.require(:user_bottle).permit(:user_id, :bottle_id, :count)
      end

end
