import Link from "next/link"


const ImageComponent = ({id, posterPath,  backdropPath, movieTitle, movieSecondTitle, moviethirdTitle, GoTo}) => {
    const tmdbimagefetchurl="https://image.tmdb.org/t/p/original/"
    return (
        <Link href={GoTo}>
            <div className="w-full px-4 xs:px-1 ">
        <div className="card card-compact bg-base-100 shadow-xl w-full  xs:w-[40vw] md:w-[25vw] lg:w-[20vw] xlg:w-[15vw]">
            <figure> <img src={`${tmdbimagefetchurl}${posterPath || backdropPath}`}   alt="movie_poster" className="object-cover w-full"/></figure>
            <div className="card-body">
                <h1>{movieTitle || movieSecondTitle || moviethirdTitle || "Name not found!"}</h1>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <Link href={GoTo}> 
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </Link>
            </div>
        </div>
        </div>
        </Link>
    )
}

export default ImageComponent
