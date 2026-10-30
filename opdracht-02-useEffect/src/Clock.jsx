import { useEffect, useState } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-100 text-black p-6 rounded-2xl">
      <h2 className="text-xl font-bold">Clock</h2>
      <p className="text-3xl mt-3">{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
