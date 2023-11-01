'use client'
import SlideHome from "@/components/SlideHome";
import { useAllCharacters } from "@/core/services/CharactersService";
import Image from "next/image";

import sasukeUchiha from '@/assets/images/sasuke-uchiha-home.png'
import EffectCards from "@/components/EffectCards";

const Home:React.FC = () => {
  const { data, error, isLoading } = useAllCharacters('3', 10)
  return (
    <main>
      <SlideHome />
      <div className="h-screen flex justify-between items-center mx-40 my-14">
        <div>
          <EffectCards characters={data?.characters!}/>
        </div>
        <Image 
          src={sasukeUchiha}
          alt={'sasuke-uchiha'}
          width={300}
          height={300}
        />
      </div>
    </main>
  )
}

export default Home;
