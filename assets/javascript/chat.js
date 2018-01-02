function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')
        [0].scrollHeight;
};


      chatRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(message.name, message.text);
      });

$(document).ready(function(){

  $('#messageInput').keypress(function (event) {
        if (event.keyCode == 13) {
          var name = email ;
          var text = $('#messageInput').val();
          chatRef.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });
});