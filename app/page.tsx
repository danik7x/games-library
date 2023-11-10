import Image from "next/image";
import { Star } from "lucide-react";
import { resolve } from "path";

type Game = {
  id: number;
  name: string;
  released: string;
  rating: number;
  background_image: string;
};

const getGames = async (): Promise<Game[]> => {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG}`
  );
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await res.json();
  return data.results;
};
export default async function Home() {
  const games = await getGames();

  return (
    <main className="m-24 rounded-md grid grid-cols-4 gap-12 bg-opacity-50">
      {games.map((game) => (
        <div
          className="bg-slate-200 p-4 rounded-md shadow-md col-span-4 md:col-span-2"
          key={game.id}
        >
          <h1 className="mb-2 font-bold text-2xl">{game.name}</h1>
          <p className="font-bold flex items-center mb-2 text-gray-800">
            Rating: {game.rating}{" "}
            <Star height={17} width={17} className="text-yellow-500" />
          </p>
          <p className="mb-2 text-gray-500">{game.released}</p>
          <div className="aspect-video relative">
            <Image
              className="object-cover rounded-md"
              src={game.background_image}
              alt={game.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
            />
          </div>
        </div>
      ))}
    </main>
  );
}
