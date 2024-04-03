
import Link from "next/link";
import requests from "../../../utils/requests";
import Image from "next/image";

import { auth } from '@clerk/nextjs/server'

export async function fetchData(para) {

  const url=  `https://api.themoviedb.org/3/movie/${para}?api_key=${requests.APIKEY}&append_to_response=credits,videos`
  const res= await fetch(url)
  const data = await res.json()
  return data;
    
}

const page = async ({params}) => {

  auth().protect();

  const width=1280
  const isXlgScreen =  width >= 1280;

  function convertMinutesToTimeString(minutes) {
    const hoursPart = Math.floor(minutes / 60);
    const minutesPart = minutes % 60;
  
    let result = '';
  
    if (hoursPart > 0) {
      result += `${hoursPart} ${hoursPart === 1 ? 'hour' : 'hours'}`;
    }
  
    if (minutesPart > 0) {
      result += ` ${minutesPart} ${minutesPart === 1 ? 'minute' : 'minutes'}`;
    }
  
    return result.trim() || '0 minutes';
  }
    const movieData= await fetchData(params.movieId)
    const tmdbimagefetchurl="https://image.tmdb.org/t/p/original/"
    const trailerVideo = movieData.videos.results.find(video => video.name.includes('Official Trailer') || video.name.includes('Trailer'));
    const movieBackdroppath= tmdbimagefetchurl+movieData.backdrop_path
    const moviePoster= tmdbimagefetchurl+movieData.poster_path
    const movieOverview= movieData.overview
    const movieName= movieData.title ??  movieData.original_title ?? movieData.name
    const movieReleaseDate=movieData.release_date
    const movieStatus= movieData.status
    const movieTagline= movieData.tagline
    const movieGenre=movieData.genres
    const movieTime= convertMinutesToTimeString(movieData.runtime)
    const Cast=movieData.credits.cast
    const movieCast = Cast.filter(item => item.profile_path !== null);
    

     
    var trailerId;
if (trailerVideo) {
   trailerId = trailerVideo;
  
} else {
  console.log('No trailer video found.');
}

    const trailerKey = trailerId?.key ?? false;

  
 

  return (
    <div className=" w-full h-auto px-[0.5rem] mb-8">   

      <div className="movie_container w-full h-auto flex flex-col 
      justify-center items-center text-center gap-12" 
     
     > 
        <div className="w-[100%] flex flex-col lg:flex-row lg:justify-start lg:gap-6 items-center justify-center"  style={{background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)) ,url(${movieBackdroppath});`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>

          
                <div className="">
                      <Image  src={moviePoster} width={1000} height={1000} alt="Movie_Poster" className="mx-auto lg:mx-0  sm:w-[310px] sm:h-[480px] md:w-[340px] md:h-[500px] lg:w-[540px] lg:h-[520px] xlg:w-[35vw] xlg:h-[38vw]" />
                </div>
         

            <div className="w-full  text-left flex flex-col gap-6 ">
                <h1>MovieName: {movieName}</h1>
                    <h1>MovieReleaseDate: {movieReleaseDate}</h1>
                    <h1>MovieTagline: {movieTagline}</h1>
                    <p>MovieOverview: {movieOverview}</p>
                    <p>MovieStatus: {movieStatus}</p>

                        <div className="flex gap-3">
                            <h1>Genre =</h1>
                            {movieGenre.map(genre=> <h1 key={Math.random()*30}>{genre.name}</h1>)}
                        </div>

                    <h1><em>MovieTime</em>: {movieTime}</h1>
            </div>
               
          </div>
       
                  <div className="cast flex flex-col gap-4 scroll-thing  ">
                                      
                          <div className="w-[80vw] ">
                                <h1 className="text-left text-3xl">Top Billed Cast</h1>
                            
                          </div>
                                <div className="w-[80vw] flex overflow-x-auto gap-8 rounded-tl-lg rounded-tr-lg scroll-thing">

                    
                              {movieCast.map((actor)=>
                              <div key={actor.id} className="flex-shrink-0 w-[180px] h-[350px] rounded-lg bg-slate-100 rounded-tl-lg rounded-tr-lg mb-4 text-left">
                                <Link href={`/actors/${actor.id}`}>
                                  <Image  src={tmdbimagefetchurl+actor.profile_path} width={`800`} height={`800`} className="w-[100%] object-cover rounded-tl-lg rounded-tr-lg" alt="movie_poster"/>
                                    <h1 className="text-black text-lg font-semibold">{actor.name ?? actor.originale_name}</h1>
                                    <h1 className="text-sm text-zinc-600 font-semibold">{actor.character}</h1>

                                    </Link>
                              </div>
                              )}
                                          </div>
                  </div>


                    <div className="w-full xs:w-[450px] sm:w-[650px] sm:h-[350px] h-[250px]  lg:w-[800px] lg:h-[460px] pb-6 xlg:w-[74vw] xlg:h-[44vw]">
                       <h1 className="text-left text-3xl">Trailer</h1>
                      {trailerKey &&  <iframe allowFullScreen className="w-[100%] h-[100%]" src={`https://www.youtube.com/embed/${trailerKey}`} title="Dune: Part Two | Official Trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> }
                    </div>
                    <div className="w-full h-[20px]"> 

                    </div>

      </div>   

    </div>
  )
}

export default page