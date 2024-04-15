import { LocalPublisherHeroList } from "../components/locaPublisherHeroList/LocalPublisherHeroList"




export const LocalMarvelPage = () => {
  return (

    <>
      <div className="p-5">
        <h1 style={{ color: "white" }}>Marvel Comics</h1>
        <LocalPublisherHeroList publisher="Marvel Comics"></LocalPublisherHeroList>
      </div>
    </>
  )
}
