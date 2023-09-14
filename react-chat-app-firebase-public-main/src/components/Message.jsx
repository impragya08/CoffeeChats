import React from 'react';
import { auth } from '../firebase';

const style = {
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '16px',
  },
  message: {
    maxWidth: '70%',
    padding: '12px',
    borderRadius: '20px',
    fontSize: '16px',
    wordWrap: 'break-word',
    fontFamily: 'PT Sans, sans-serif'
  },
  sent: {
    backgroundColor: '#ccdeff', // Cute blue color
    color: 'black',
    alignSelf: 'flex-end',
    borderTopRightRadius: '0',
    fontFamily: 'PT Sans, sans-serif'
  },
  received: {
    backgroundColor: '#9ec9ff', // Cute blue color
    color: 'black',
    alignSelf: 'flex-row-reverse',
    borderTopLeftRadius: '0',
    fontFamily: 'PT Sans, sans-serif'
  },
  name: {
    position: 'absolute',
    top: '5rem', // Adjust the top positioning as needed
    fontSize: '12px',
    color: 'gray',
    marginBottom: '4px',
    fontFamily: 'PT Sans, sans-serif'
  },
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid ? style.sent : style.received;

  return (
    <div style={style.messageContainer}>
      {message.name && <p style={style.name}>{message.name}</p>}
      <div style={{ ...style.message, ...messageClass }}>
        {message.text}
      </div>
    </div>
  );
};

export default Message;


