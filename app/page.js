



import Results from "../components/Results/Results";
import requests from "../utils/requests";



async function fetchData(para) {

  

  try {
    const popularmoviesurl = `https://api.themoviedb.org/3/${para}`;
    const response = await fetch(popularmoviesurl, {next: {revalidate: 200}});
    const moviesdata = await response.json();
    return moviesdata.results;
  } catch (error) {
    console.error('Error fetching data:', error);
    return []; 
  }
}



export default async function Home() {
  
  const popularmovies=await fetchData(requests.fetchPopular.url)



  


  

  return (
    <div className="app mt-10">
         
         <h1  className="text-2xl text-rose-600">Popular Movies Now a Days</h1>
        <div className="moviescontainer flex  w-full  flex-wrap items-center justify-center gap-y-8 gap-x-4 ">
              {popularmovies.map(movie=> 
              <Results
               id={movie.id} 
              posterPath={movie.poster_path} 
              backdropPath={movie.backdrop_path} 
              movieTitle={movie.title} 
              movieSecondTitle={movie.original_title}
              moviethirdTitle={movie.name}
              key={movie.id}
              GoTo={`/movie/${movie.id}`}/>
              )}
        </div>
        
    </div>
     
  );
}

