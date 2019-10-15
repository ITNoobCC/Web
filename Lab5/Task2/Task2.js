var cashbox = {
  amount: 0,
  addPayment: function(payment) {
    for (var i = 0; i < payment; i++) {
      this.amount++;
    }
    if (payment < 0) {
      console.log('Ошибка ввода!');
    }
  },
  refundPayment: function(refund) {
    for (var i = 0; i < refund; i++) {
      this.amount--;
    }
    if (this.amount < 0) {
      console.log('Ошибка, в кассе недостаточно средств!');
      for (var i = 0; i < refund; i++) {
        this.amount++;
      }
    }
  }
};

cashbox.addPayment({ amount: -10, info: 'Оплата штрафа' }); // show error (console), amount not affected
cashbox.addPayment({ amount: 10, info: 'Оплата ЖКХ' }); // cashbox amount = 10

cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' }); // cashbox amount = 0
cashbox.refundPayment({ amount: 10, info: 'Возврат клиенту' }); // cashbox amount not affected (warning)
