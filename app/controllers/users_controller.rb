class UsersController < ApplicationController
  def show
  end

  def deliver_address
    # 現在、deliver_addressのテーブルがないためuserで代理
    # Todo UserをDeliverAddressに変更
    @deliver_address = User.new
  end
end
