class PostsController < ApplicationController
  before_action :authenticate_user!

  def index
    @posts = Post.all
    @users = User.all
    @profiles = Profile.all
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to root_path
  end

  def search
    @q = Post.ransack(params[:q])
    @posts = @q.result
    @post = Post.all
  end

  private

  def post_params
    params.require(:post).permit(:post_text, :image, :category_id, :visibility_id).merge(user_id: current_user.id)
  end
end
