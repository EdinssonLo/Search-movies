const Genre = ({ genres }) => {
    return (
     <div className="flex flex-row my-1">
      <span className="font-bold font-mono mr-1">Genero:</span>
      {genres?.map((value, index) => (
       <span key={index} className="mr-1 font-mono">
        {`${value}${index !== genres.length - 1 ? ',' : '.'}`}
       </span>
      ))}
     </div>
    );
   };
   
   export default Genre;