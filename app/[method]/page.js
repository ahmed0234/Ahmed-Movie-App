/* eslint-disable */



import requests from "../../utils/requests";
import Results from "../../components/Results/Results"



export async function  getMoviesData(para) {
        /* eslint-disable */
        const url=`https://api.themoviedb.org/3${requests[para].url || ''}` 
        /* eslint-enable */
        const res = await fetch(url, {next: {revalidate: 60}})
        const data= await res.json()
      
        return data.results;
   

}

const page = async ({params}) => {


  const moviesData= await getMoviesData(params.method)
 


  return (
    <div className="moviescontainer flex  w-full  flex-wrap items-center justify-center gap-y-8 gap-x-4 ">
            {moviesData.map(movie=> 
              <Results
               id={movie.id} 
              posterPath={movie.poster_path} 
              backdropPath={movie.backdrop_path} 
              movieTitle={movie.title} 
              movieSecondTitle={movie.original_title}
              moviethirdTitle={movie.name}
              key={movie.id}
              GoTo={`/movie/${movie.id}`} />
          

              )}
    </div>
  )
}

export default page




export async function generateStaticParams() {

  const arr=['fetchPopular', 'fetchTrending', 'fetchNetFlixOriginals', 'fetchTopRated', 'fetchAction', 'fetchComedy', 'fetchHorror', 'fetchDocumentaries', 'fetchRomance', 'fetchWar']
  return arr.map(d=>{
    method: d.toString()
  })

}