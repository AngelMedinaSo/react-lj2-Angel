function CreateMessage({ messageText, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="create-message">
      <label htmlFor="message">Wat wil je delen?</label>
      <textarea
        id="message"
        value={messageText}
        onChange={onChange}
        rows={4}
        placeholder="Schrijf een bericht..."
        required
      />
      <button type="submit" disabled={messageText.trim() === ""}>
        Plaatsen
      </button>
    </form>
  );
}

export default CreateMessage;
