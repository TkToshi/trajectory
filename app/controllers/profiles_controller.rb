class ProfilesController < ApplicationController
  before_action :profile_params, only: [:create, :update]
  before_action :authenticate_user!

  def index
    @user = User.all
    @profile = Profile.all
    @post = Post.all
  end

  def new
    @profile = Profile.new
  end

  def create
    @profile = Profile.new(profile_params)
    if @profile.save
      redirect_to root_path
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def edit
    @profile = Profile.find(params[:id])
  end

  def update
    @profile = Profile.find(params[:id])
    if @profile.update(profile_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def profile_params
    params.require(:profile).permit(:user_profile, :gender_id, :profile_image, :user_follower_figure,
                                    :user_following_figure).merge(user_id: current_user.id)
  end
end
