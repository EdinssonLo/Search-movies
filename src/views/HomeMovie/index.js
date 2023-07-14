import { useState } from "react";
import cinema from "../../assets/cinema.jpg";
import { useNavigate } from "react-router";

const Home = () => {
    const [search, setSearch] = useState();
    const navegate = useNavigate();

    const handleInputChange =({target:{value}})=>{
        setSearch(value);
    }

    const handleCleanClick =()=>{
        setSearch('');
    }

    const handleSearchClick =()=>{
        navegate(`/result/${search.trim()}`)
    }
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-2/5 ">
        <img src={cinema} className="w-full h-full object-cover" alt="cine movies"/>
      </div>
      <div className="w-3/5 flex justify-center items-center flex-col px-10">
        <h2 className=" flex font-black font-mono	text-4xl m-2 ">Buscar tu pelicula</h2>
        <input className="font-mono bg-cyan-100 w-full border-solid border p-1 focus:outline-none focus:ring-2 rounded-md" value={search} onChange={handleInputChange}></input>
        <div className="flex m-3 w-full justify-between">
          <button onClick={handleCleanClick} className="font-mono w-full mr-1 h-10 shadow-2xl shadow-cyan-300 bg-cyan-600 border-solid border text-white hover:bg-cyan-400 rounded-md">Borrar</button>
          <button onClick={handleSearchClick} className="font-mono w-full ml-1 h-10 shadow-2xl shadow-cyan-300 bg-cyan-600 border-solid border text-white hover:bg-cyan-400 rounded-md">Buscar</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
