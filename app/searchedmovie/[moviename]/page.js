import requests from "../../../utils/requests";
import { notFound } from "next/navigation";
import ImageComponent from "../../../components/ImageComponent/ImageComponent";

export async function fetchmoviedata(para) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${
    requests.APIKEY
  }&query=${encodeURIComponent(para)}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      // If the response status is not in the 2xx range, throw an error
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    const sortedMovies = data.results.sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date)
    );
    const moviesWithPoster = sortedMovies.filter((movie) => movie.poster_path);
    return moviesWithPoster;
  } catch (error) {
    // Handle errors (e.g., log the error)
    console.error("Error fetching movie data:", error);
    return null;
  }
}

const page = async ({ params }) => {
  const movieName = params.moviename;
  const decodedMovieName = movieName ? decodeURIComponent(movieName) : "";

  const moviedata = await fetchmoviedata(decodedMovieName);
  if (!moviedata?.length) {
    return notFound();
  }
  return (
    <div>
      <div className="moviescontainer flex  max-w-[1600px] mx-auto w-full  flex-wrap items-center justify-center gap-y-8 gap-x-4 ">
        {moviedata.map((movie) => (
          <ImageComponent
            id={movie.id}
            posterPath={movie.poster_path}
            backdropPath={movie.backdrop_path}
            movieTitle={movie.title}
            movieSecondTitle={movie.original_title}
            moviethirdTitle={movie.name}
            key={movie.id}
            GoTo={`/movie/${movie.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
