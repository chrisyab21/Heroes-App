import { HeroList } from "../components/HeroList"




export const MarvelPage = () => {
  return (

    <>
    <div className="p-5">
    <h1>Marvel Comics</h1>
    <HeroList publisher="Marvel Comics"></HeroList>
    </div>
    </>
  )
}
