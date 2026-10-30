import { useEffect, useState } from "react";

function WelcomeMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let newMessage = "";

    if (hours < 12) {
      newMessage = "Goedemorgen";
    } else if (hours < 18) {
      newMessage = "Goedemiddag BESTE DOCENT JASON!!!";
    } else {
      newMessage = "Goedenavond";
    }

    setMessage(newMessage);
  }, []);

  return (
    <section className="bg-gray-100 text-black p-6 rounded-2xl mb-4">
      <h2 className="text-xl font-bold">{message}</h2>
      <p className="mt-3">Welkom op deze pagina! in a section</p>
    </section>
  );
}

export default WelcomeMessage;
