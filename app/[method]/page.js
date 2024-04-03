




import Results from "../../components/Results/Results"







export async function  getMoviesData(para) {




  
  
    if (para === 'fetchPopular') {

      const url=`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
      const res = await fetch(url, {next: {revalidate: 60}})
      const data= await res.json()
      return data.results;
    }
    else if (para === 'fetchTrending') {

      const url=`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}&language=en=us`
      const res = await fetch(url, {next: {revalidate: 60}})
      const data= await res.json()
      return data.results;
    }
    else if(para === "fetchNetFlixOriginals") {

      const url=`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&with_networks=213`
      const res = await fetch(url, {next: {revalidate: 60}})
      const data= await res.json()
      return data.results;
    }
    else if(para === "fetchTopRated") {

      const url=`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
      const res = await fetch(url, {next: {revalidate: 60}})
      const data= await res.json()
      return data.results;
    }
    else if(para === "fetchAction") {

      const url=`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`
      const res = await fetch(url, {next: {revalidate: 60}})
      const data= await res.json()
      return data.results;
    }
    else if(para === "fetchComedy") {

      const url=`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=35`
      const res = await fetch(url, {next: {revalidate: 60}})
      const data= await res.json()
      return data.results;
    }
    else if(para === "fetchDocumentaries") {

      const url=`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=99`
      const res = await fetch(url, {next: {revalidate: 60}})
      const data= await res.json()
      return data.results;
    }
    else if(para === "fetchRomance") {

      const url=`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=10749`
      const res = await fetch(url, {next: {revalidate: 60}})
      const data= await res.json()
      return data.results;
    }
    else if(para === "fetchWar") {

      const url=`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=10752`
      const res = await fetch(url, {next: {revalidate: 60}})
      const data= await res.json()
      return data.results;
    }


}

const page = async ({params}) => {


  const moviesData= await getMoviesData(params.method)
 


  return (
    <div className="moviescontainer flex  w-full  flex-wrap items-center justify-center gap-y-8 gap-x-4 ">
            {moviesData?.map(movie=> 
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




// export async function generateStaticParams() {

//   const arr=['fetchPopular', 'fetchTrending', 'fetchNetFlixOriginals', 'fetchTopRated', 'fetchAction', 'fetchComedy', 'fetchHorror', 'fetchDocumentaries', 'fetchRomance', 'fetchWar']
//   return arr.map(d=>{
//     method: d.toString()
//   })

// }