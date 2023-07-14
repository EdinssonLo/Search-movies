import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { fetchMovieRatings, fetchMovieDetail } from "../../redux/actions/movies";

import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
import Loading from "../../components/Loading";

const DetailMovie = () => {
    
 const { id } = useParams();
 const dispatch = useDispatch();
 const { 
  isFetchingMovieRatings,
  isFetchingMovieDetail,
  isLoading,
  errorFetchingMovieDetail,
  errorFetchingMovieRatings,
  ratings,
  movieDetail,
  } = useSelector((state) => state.moviesReducerSlice);

 useEffect(() => {
  dispatch(fetchMovieRatings(id));
 }, [dispatch, id]);

 useEffect(() => {
  dispatch(fetchMovieDetail(id));
 }, [dispatch, id]);

 const renderContent = () => {
  if (isLoading || isFetchingMovieDetail || isFetchingMovieRatings) {
   return <Loading mensaje="Obteniendo informacion de la pelicula..." />;
  } else if (errorFetchingMovieDetail || errorFetchingMovieRatings) {
   return <p className="font-mono text-3xl">Ha ocurrido un error al obtener la informacion de la pelicula</p>;
  }

  return (
   <>
    <LeftContainer imageUrl={movieDetail.details?.image?.url} />
    <RightContainer 
     title={movieDetail.details?.title ?? 'Sin titulo'}
     year={movieDetail.details?.year ?? 'No disponible'}
     rating={ratings.rating}
     synopsis={movieDetail.overview?.plotSummary?.text ?? 'No disponible'}
     genres={movieDetail.overview?.genres}
     cast={movieCast}
    />
   </>
  )
 };

 const movieCast = movieDetail?.fullCredits?.cast?.slice(0, 20) ?? [];

 return (
  <div className="flex flex-row px-16 h-screen items-center justify-center">
   {renderContent()}
  </div>
 );
};

export default DetailMovie;