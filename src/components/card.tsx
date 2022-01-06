import { Employee } from "../types";

const backUpUrl =
  "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&";

const Card = ({ employee }: { employee: Employee }) => {
  const addDefaultSrc = (ev: HTMLImageElement) => {
    ev.onerror = null;
    ev.src = backUpUrl;
  };

  const imgSrc = employee.imagePortraitUrl ?? backUpUrl;

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
          <p className="text-lg font-semibold ">{employee.name}</p>
          <p className="text-sm font-light">{employee.office}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
