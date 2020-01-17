class WineriesController < ApplicationController

  def index
    if params[:user_id]
      user_winery = UserWinery.where(user_id: params[:user_id])
      render json: user_winery
    else
      wineries = Winery.all
      render json: wineries
    end
  end
    
      def create
        winery = Winery.create(winery_param)
        render json: winery
      end

      def show
        winery = Winery.find(params[:id])
        render json: winery
      end

    
      def update
        winery = Winery.find(params[:id])
        winery.update_attributes(winery_param)
      end
    
      def destroy
        winery = Winery.find(params[:id])
        winery.destroy
        head :no_content, status: :ok
      end
      
      private
        def winery_param
          params.require(:winery).permit(:name, :location)
        end


end

