import { useParams } from "react-router";
import { useNavigate } from "react-router";

import mm from "../../assets/m-ms.png";
import { useFetchMoviesQuery } from "../../redux/api/movies";
import Loading from "../../components/Loading";
import List from "./components/List";

const ResultSearch = () => {
  const { title } = useParams();
  const navegate = useNavigate();
  const {
    data: movies,
    isSuccess,
    error,
    isLoading,
    isFetching,
  } = useFetchMoviesQuery(title);

  const handleListItemClick =(id)=>{
    navegate(`/detail/${id}`)
  }
  const renderContent = () => {
    if (error)
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-mono text-red-600">{error.error}</p>
        </div>
      );
    else if (isLoading || isFetching)
      return <Loading mensaje="Buscando peliculas..." />;
    else if (isSuccess && movies?.results)
      return <List data={movies?.results} onListItemClick={handleListItemClick}/>;
  };
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-3/5 h-screen overflow-y-auto px-10">
        {renderContent()}
      </div>
      <div className="w-2/5 ">
        <img src={mm} className="w-full h-full object-cover" alt="cartelera" />
      </div>
    </div>
  );
};

export default ResultSearch;
