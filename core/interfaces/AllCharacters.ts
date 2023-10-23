export interface AllCharacters {
  characters: Character[],
  currentPage: string,
  pageSize: string,
  totalCharacters: number
}
    
export interface Character {
  id: number
  name: string
  images: string[]
  debut: Debut
  family: Family
  jutsu: string[]
  natureType: string[]
  personal: Personal
  uniqueTraits: string[]
}

export interface Debut {
  manga: string
  anime: string
  novel: string
  movie: string
  game: string
  ova: string
  appearsIn: string
}

export interface Family {
  "incarnation with the god tree": string
  "depowered form": string
}

export interface Personal {
  status: string
  kekkeiGenkai: string
  classification: string
  jinchūriki: string[]
  titles: string[]
}
