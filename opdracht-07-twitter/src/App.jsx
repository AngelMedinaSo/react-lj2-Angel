import { useState } from "react";
import CreateMessage from "./components/CreateMessage";
import MessageList from "./components/MessageList";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");

  function changeMessage(event) {
    setMessageText(event.target.value);
  }

  function addMessage(event) {
    event.preventDefault();

    if (messageText.trim() === "") {
      return;
    }

    const newMessage = {
      id: crypto.randomUUID(),
      text: messageText.trim(),
    };

    setMessages([newMessage, ...messages]);
    setMessageText("");
  }

  return (
    <main>
      <h1>Twitter</h1>
      <CreateMessage
        messageText={messageText}
        onChange={changeMessage}
        onSubmit={addMessage}
      />
      <MessageList messages={messages} />
    </main>
  );
}

export default App;
