import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ListItem
        leftAvatar={<Avatar src="http://www.gravatar.com/avatar/47d27ff6fd755687d47100a9eeff73f0" />}
      >{this.props.message}</ListItem>
    );
  }
}

export default Message;
