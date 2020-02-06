class UserWineriesController < ApplicationController

    def index
        user_wineries = UserWinery.all
        render json: user_wineries       
    end

    def create
        user_wineries = UserWinery.create(uw_param)
        render json: user_wineries
    end


    def destroy
        user_winery = UserWinery.find(params[:id])
        user_winery.destroy
        user_wineries = UserWinery.all
        render json: user_wineries
    end
    

      private
    
      def uw_param
        params.require(:user_winery).permit(:user_id, :winery_id)
      end
end
