import { useState } from "react";

function Book({ image, title, author, category }) {
  const [timesRead, setTimesRead] = useState(0);
  const [liked, setLiked] = useState(false);

  function incrementReadCount() {
    setTimesRead(timesRead + 1);
  }

  function toggleLike() {
    setLiked(!liked);
  }

  return (
    <div className="bg-mist-100 flex flex-col w-72 p-6 rounded-2xl">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-contain"
      />

      <p className="text-black mt-3">{title}</p>
      <p className="text-mist-400">{author}</p>
      <p className="text-gray-500">Category: {category}</p>

      <button
        onClick={incrementReadCount}
        className="bg-black text-white px-4 py-2 rounded-lg mt-3"
      >
        Keer gelezen: {timesRead}
      </button>

      <div className="favorite-section mt-2">
        <button onClick={toggleLike}>
          {liked ? "❤️" : "🤍"}
        </button>

        {liked && (
          <p className="text-black text-sm">
            Toegevoegd aan favorieten
          </p>
        )}
      </div>
    </div>
  );
}

export default Book;