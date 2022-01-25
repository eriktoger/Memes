import { useEffect, useState } from "react";
import { useSearchAndSortContext } from "../context/sortAndSearch";
import { getMemes } from "../services/memes";
import { Meme } from "../types";
import Card from "./card";

const Memes = () => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const { name, nameOrder, officeOrder, sortField } = useSearchAndSortContext();

  useEffect(() => {
    getMemes().then((response) => setMemes(response?.data?.memes));
  }, []);

  const filteredMemes = memes.filter((meme) =>
    meme.name.toLowerCase().includes(name.toLowerCase())
  );

  const sortedAndFiltered = filteredMemes.sort(
    (a, b) => a.name.localeCompare(b.name, "sv") * nameOrder
  );

  return (
    <div className="min-h-screen bg-forrest bg-cover bg-fixed pt-40 md:pt-48 bg-top-12">
      <div className="grid grid-cols-2 md:grid-cols-5">
        {sortedAndFiltered.map((meme) => (
          <Card key={meme.id} meme={meme} />
        ))}
      </div>
    </div>
  );
};

export default Memes;
