var cashbox = {
  amount: 0,
  addPayment: function(payment, info) {
    if (payment < 0 || info === "") {
      console.log("Ошибка ввода!");
    } else {
      for (var i = 0; i < payment; i++) {
        this.amount++;
      }
      console.log(info, ": ", payment);
    }
  },
  refundPayment: function(refund, info) {
    if (refund < 0) {
      console.log("Ошибка ввода!");
    } else {
      for (var i = 0; i < refund; i++) {
        this.amount--;
      }
      if (this.amount < 0) {
        console.log("Ошибка, в кассе недостаточно средств!");
        for (var i = 0; i < refund; i++) {
          this.amount++;
        }
        console.log("В кассе сейчас: ", this.amount);
      } else {
        console.log(info, ": ", refund);
        console.log("Остаток в кассе: ", this.amount);
      }
    }
  }
};
