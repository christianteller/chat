App.chat = App.cable.subscriptions.create("ChatChannel", {
  connected: function() {
  	console.log('Connected to chat websocket!');
  },
  disconnected: function() {
  	console.log('Disconnected from chat websocket.')
  },
  received: function(data) {
  	var messages = $('#chatbox');
  	messages.append(data['message'])
  	messages.scrollTop(messages[0].scrollHeight)

  }
});

// ---
// generated by coffee-script 1.9.2