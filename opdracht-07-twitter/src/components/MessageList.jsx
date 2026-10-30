import Message from "./Message";

function MessageList({ messages }) {
  return (
    <section className="message-list">
      <h2>Berichten</h2>
      {messages.length === 0 && <p>Nog geen berichten.</p>}
      {messages.map((message) => (
        <Message key={message.id} text={message.text} />
      ))}
    </section>
  );
}

export default MessageList;
