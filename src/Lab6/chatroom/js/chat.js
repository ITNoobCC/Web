window.onload = function() {
  var btn = document.getElementById('control-panel_button-send');
  var txtArea = document.getElementById('textarea');
  var userTag = document.getElementById('control-panel_user-tag');

  function chatUI() {
    if (txtArea.value !== '') {
      var messageContent = txtArea.value;
      var chatBlock = document.getElementById('chat-block');
      var newMessageBlock = document.createElement('div');
      var textMessage = document.createElement('p');
      var userName = document.createElement('p');
      
      if (userTag.checked === true) {
        newMessageBlock.classList.add('you-message');
        textMessage.classList.add('you-message_text');
        textMessage.append(messageContent);

        userName.classList.add('you-message_userName');
        userName.append('User - 1');
       
      } else {
        newMessageBlock.classList.add('interlocutor-message');
        textMessage.classList.add('interlocutor-message_text');
        textMessage.append(messageContent);

        userName.classList.add('interlocutor-message_userName');
        userName.append('User - 2');
      }
      chatBlock.append(newMessageBlock);
      newMessageBlock.append(textMessage);
      newMessageBlock.append(userName);
      txtArea.value = '';
    }
  }

  btn.onclick = function() {
    chatUI();
  };
};
