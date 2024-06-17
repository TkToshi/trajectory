class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :set_google_maps_api_key

  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
  end
  def set_google_maps_api_key
    @google_maps_api_key = ENV['GOOGLE_MAPS_API_KEY']
  end

end
