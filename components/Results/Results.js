import Image from "next/image";
import Link from "next/link";


const Results = ({id, posterPath,  backdropPath, movieTitle, movieSecondTitle, moviethirdTitle, GoTo}) => {
  const tmdbimagefetchurl="https://image.tmdb.org/t/p/original/"
  return (
 
            <Link href={GoTo}>
                <div  key={id} className="childmovies  w-[300px]">
                        <Image src={`${tmdbimagefetchurl}${posterPath || backdropPath}`}  width={300} height={300} alt="movie_poster"/>
                        <h1>{movieTitle || movieSecondTitle || moviethirdTitle || "Name not found!"}</h1>
                </div>
              </Link>


  )
}

export default Results



