import { Meme } from "../types";
import backUpImage from "../images/photoNotFound.jpg";

const Card = ({ meme }: { meme: Meme }) => {
  const addDefaultSrc = (ev: HTMLImageElement) => {
    ev.onerror = null;
    ev.src = backUpImage;
  };

  const imgSrc = meme.url ?? backUpImage;

  return (
    <div className="m-1 p-1">
      <div className="h-2/3">
        <img
          src={imgSrc}
          alt="Picture"
          onError={({ currentTarget }) => addDefaultSrc(currentTarget)}
          className="object-contain h-full m-auto rounded-lg"
        />
      </div>
      <div className="text-center">
        <div className="inline-block bg-slate-200 m-1 p-1 rounded-md">
          <p className="text-lg font-semibold ">{meme.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
