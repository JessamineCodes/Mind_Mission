class PagesController < ApplicationController
  skip_before_action :authenticate_user!, except: [ :home, ]

  def home
  end

  def dashboard
  end

  def level_one_checkpoint
    if current_user.level < 1
      current_user.level = 1
      current_user.save!
    end
    redirect_to level_one_snippet_path
  end

  def level_two_checkpoint
    if current_user.level < 2
      current_user.level = 2
      current_user.save!
    end
    redirect_to level_two_snippet_path
  end

  def level_three_checkpoint
    if current_user.level < 3
      current_user.level = 3
      current_user.save!
    end
    redirect_to level_three_snippet_path
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
