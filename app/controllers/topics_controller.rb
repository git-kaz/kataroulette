class TopicsController < ApplicationController
  def index
  end

  def roulette
    category = params[:category]
    topics = Topic.where(category: category)
    @topic = topics.sample

    render json: {
      content: @topic.content,
      category: @topic.category
    }

  end
end
