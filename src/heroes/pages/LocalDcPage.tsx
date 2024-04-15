import { LocalPublisherHeroList } from "../components/locaPublisherHeroList/LocalPublisherHeroList"




export const LocalDcPage = () => {
  return (

    <div className="p-5">
      <h1>DC Comics</h1>
      <LocalPublisherHeroList publisher="DC Comics"></LocalPublisherHeroList>
    </div>

  )
}
