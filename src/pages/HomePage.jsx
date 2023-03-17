import request from '../features/request'
import { Banner } from '../components/Banner';
import {Row} from '../components/Row'

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Row isLargeRow={true} title={"NETFLIX ORIGINALS"} fetchUrl={request.fetchNetflixOriginals} />
      <Row title={"Trending Now"} fetchUrl={request.fetchTrending} />
      <Row title={"Top Rating"} fetchUrl={request.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={request.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={request.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={request.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={request.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={request.fetchDocumentaries} />
    </> 
  )
}
