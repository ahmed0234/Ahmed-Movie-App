

import requests from "../../../utils/requests";
import ImageComponent from "../../../components/ImageComponent/ImageComponent";
import Image from 'next/image'

import { auth } from '@clerk/nextjs/server'

export async function fetchActorData(para) {
  const url=`https://api.themoviedb.org/3/person/${para}?api_key=${requests.APIKEY}`
  const res=await fetch(url)
  const data=await res.json()
  return data;

}
export async function fetchData(para) {
  const url=`https://api.themoviedb.org/3/person/${para}/movie_credits?api_key=${requests.APIKEY}`
  const res=await fetch(url)
  const data=await res.json()
  const sortedMovies = data.cast.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
  const filteredMovies = sortedMovies.filter((movie) => movie.poster_path && movie.backdrop_path);
  return filteredMovies;
}

const page = async ({ params }) => {
  auth().protect();
  const actorMoviesData = await fetchData(params.id);
  const actorPersonalData= await fetchActorData(params.id)
  const tmdbimagefetchurl="https://image.tmdb.org/t/p/original/"
  return (
    <div>


<div className="w-full px-2 ">
<div className="card card-side bg-zinc-800 shadow-xl w-[300px] sm:w-[400px] h-full mx-auto mb-9 flex flex-col md:flex-row md:w-full md:justify-start md:items-start">
  <figure><Image src={`${tmdbimagefetchurl}${actorPersonalData.profile_path}`} alt="Movie" width={600} height={600} className="w-[100% ] md:w-[20vw] xxlg:w-[16vw] h-[100%] object-cover"/></figure>
  <div className="card-body md:w-[40%]">
    <h1 className="text-xl"><em>Name: </em>{actorPersonalData.name}</h1>

          <div className="collapse bg-base-100 px-0 w-auto">
        <input type="checkbox" /> 
        <div className="collapse-title text-sm font-medium">
          Click me to show/hide Biography
        </div>
        <div className="collapse-content"> 
          <p>{actorPersonalData.biography}</p>
          
        </div>
        
      </div>
      <div>
      <h2><em>BirthDate: </em>{actorPersonalData.birthday}</h2>
      <h2><em>Place of birth: </em>{actorPersonalData.place_of_birth}</h2>
      </div>
  
    
  </div>
</div>
</div>

   
     <div className=" text-center text-2xl mb-3 xlg:text-4xl xxlg:text-5xl">
        <h1>{actorPersonalData.name} Movies</h1>

     </div>
          <div className="moviescontainer flex  max-w-[1600px] mx-auto w-full  flex-wrap items-center justify-center gap-y-8 gap-x-4 ">
            {actorMoviesData.map(movie=> 
              <ImageComponent
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

    </div>
  );
};

export default page;





