'use client'
import SlideHome from "@/components/SlideHome";
import { useAllCharacters } from "@/core/services/CharactersService";
import Image from "next/image";

const Home:React.FC = () => {
  const { data, error, isLoading } = useAllCharacters('1', 10)
  return (
    <main>
      <SlideHome />
      <div className="h-full bg-slate-700">
        {data?.characters?.map((item, index) => (
          <div key={index}>
            <p className="text-white">{item?.name}</p>
            <Image 
              src={item?.images[0]}
              alt={item?.name + 'img'}
              width={800}
              height={800}
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default Home;
