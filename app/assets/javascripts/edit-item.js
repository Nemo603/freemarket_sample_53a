$(function () {
  var deleted_images_counter = 0;

  // 販売手数料と販売利益を計算して、表示に反映させる
  function view_calc_fee_profit() {
    var price = $('.input-fee').val();
    var fee = Math.floor(price * 0.1);
    var profit = price - fee;
    if (price >= 300) {
      $('.edit-money__fee__right').text('¥' + fee);
      $('.edit-money__profit__right').text('¥' + profit);
    } else {
        $('.edit-money__fee__right').text('-');
        $('.edit-money__profit__right').text('-');
      }
  }

  // 価格入力時
  $('.input-fee').on('input', function() {
    view_calc_fee_profit();
  })


});
