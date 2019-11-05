window.onload = function() {
  var btn = document.getElementById('chat-block_button-send');
  var txtArea = document.getElementById('textarea');
  var userTag = document.getElementById('chat-block_user-tag');
  var flagUser = 1;

  function chatUI() {
    if (txtArea.value !== '') {
      var messageContent = txtArea.value;
      var chatBlock = document.getElementById('chat-block');
      var newMessageBlock = document.createElement('div');
      var textMessage = document.createElement('p');

      textMessage.append(messageContent);
      if (userTag.checked == true) {
        newMessageBlock.classList.add('you-message');
      } else {
        newMessageBlock.classList.add('his-message');
      }
      chatBlock.append(newMessageBlock);
      newMessageBlock.append(textMessage);
      txtArea.value = '';
    }
  }

  btn.onclick = function() {
    chatUI();
  };
};
