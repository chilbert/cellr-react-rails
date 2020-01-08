class BottlesController < ApplicationController

    def index
        bottles = Bottle.all
        render json: bottles
      end
    
      def create
        bottle = Bottle.create(bottle_param)
        render json: bottle
      end
    
      def update
        bottle = Bottle.find(params[:id])
        bottle.update_attributes(bottle_param)
        render json: bottle
      end
    
      def destroy
        bottle = Bottle.find(params[:id])
        bottle.destroy
        head :no_content, status: :ok
      end
      
      private
        def bottle_param
          params.require(:todo).permit(:name, :vintage, :variety, :bottle_count, :winery_id)
        end


end
