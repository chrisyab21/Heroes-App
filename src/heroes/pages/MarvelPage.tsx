import { PublisherHeroList } from "../components/PublisherHeroList"



export const MarvelPage = () => {
  return (

    <>
      <div className="p-5">
        <h1 style={{ color: "white" }}>Marvel Comics</h1>
        <PublisherHeroList publisher="Marvel"></PublisherHeroList>
      </div>
    </>
  )
}
