import { useEffect, useState } from "react";

function PageTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    document.title = `Je bent er al ${seconds} seconden!`;
  }, [seconds]);

  return (
    <div className="bg-gray-100 text-black p-6 rounded-2xl mt-4">
      <h2 className="text-xl font-bold">Page Timer</h2>
      <p className="mt-3">Je bent al {seconds} seconden op deze pagina.</p>
    </div>
  );
}

export default PageTimer;
