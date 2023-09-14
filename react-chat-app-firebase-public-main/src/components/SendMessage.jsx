import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

const styles = {
  
  form: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    maxWidth: '728px',
    backgroundColor: 'rgb(245, 248, 250)',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Use a positive value for the y-offset
    height: '4rem', // Adjust the height as needed
  },
  
  input: {
    flex: '1',
    padding: '1rem',
    fontSize: '1rem',
    backgroundColor: 'transparent', // Override the background-color
    color: 'black', // Corrected color value
      
    border: 'none',
    outline: 'none',
  },
  
  button: {
    flex: '0 0 20%',
    backgroundColor: 'rgb(225, 232, 237)',
    backgroundImage: 'url("https://i.pinimg.com/564x/63/3f/c1/633fc10d83bf1d3b655b44a2188c3af5.jpg")', // Set your desired image URL here
    backgroundSize: 'cover', // Adjust the background size as needed
    backgroundPosition: 'bottom center' ,
    backgroundRepeat: 'no-repeat', // Prevent background image from repeating
    color: 'black',
    top:'4rem',
    fontSize: '1.2rem',
    border: '4rem',
    cursor: 'pointer',
  },
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === '') {
      alert('Please enter a valid message');
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput('');
    scroll.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <form onSubmit={sendMessage} style={styles.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={styles.input}
        type='text'
        placeholder='Message'
      />
      <button style={styles.button} type='submit'>
        Send
      </button>
    </form>
  );
};

export default SendMessage;
