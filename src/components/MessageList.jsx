import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';

var {Card, List} = mui;

class MessageList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [
        'Message1',
        'Message2'
      ]
    };
  }

  render(){
    var messageNodes = this.state.messages.map((message)=> {
      return (
        <Message message={message} />
      );
    });

    return (
      <Card style={{
        flexGrow: 2,
        marginLeft: 30
      }}>
        <List>
          {messageNodes}
        </List>
      </Card>
    );
  }
}

export default MessageList;
