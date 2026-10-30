import { useEffect, useState } from "react";

const quotes = [
  "Zondag: Rust is ook productiviteit.",
  "Maandag: Een nieuwe week, een nieuwe kans.",
  "Dinsdag: Kleine stappen leiden tot grote resultaten.",
  "Woensdag: Halverwege, blijf doorgaan!",
  "Donderdag: Je bent verder dan je denkt.",
  "Vrijdag: Het weekend is bijna in zicht!",
  "Zaterdag: Geniet van je vrije tijd.",
];

function DayQuote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const day = new Date().getDay();
    setQuote(quotes[day]);
  }, []);

  return (
    <div className="bg-gray-100 text-black p-6 rounded-2xl mt-4">
      <h2 className="text-xl font-bold">Dagquote</h2>
      <p className="mt-3">{quote}</p>
    </div>
  );
}

export default DayQuote;
