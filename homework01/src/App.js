import './App.min.css';

function Message(props) {
  return (
    <div className='main'>
      <div className='message'>
        {props.text}
      </div>
    </div>
  );
}

export default Message;
