import { PublisherHeroList } from "../components/PublisherHeroList"




export const DcPage = () => {
  return (

    <div className="p-5">
      <h1>DC Comics</h1>
      <PublisherHeroList publisher="DC"></PublisherHeroList>
    </div>

  )
}
