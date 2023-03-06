class PagesController < ApplicationController
  skip_before_action :authenticate_user!, except: [ :home, ]

  def home
  end

  def level_one_challenge

  end


  def level_one_snippet

  end


  def level_two_challenge

  end


  def level_two_snippet

  end


  def level_three_challenge

  end


  def level_three_snippet

  end


  def graduation

  end
end
