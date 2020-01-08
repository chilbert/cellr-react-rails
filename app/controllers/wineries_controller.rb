class WineriesController < ApplicationController

    def index
        wineries = Winery.all
        render json: wineries
      end
    
      def create
        winery = Winery.create(winery_param)
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
          params.require(:todo).permit(:name, :location)
        end


end

