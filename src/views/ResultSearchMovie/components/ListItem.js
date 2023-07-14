const ListItem = ({ id, image, title, onListItemClick }) => {
  const handleListItemClick = () =>{
    let name = '/title/';
    if (id.includes('name')) name = '/name/';
    onListItemClick(id.replace(name, '').replace('/', ''));
  }
  return (
    <div key={id} className="flex flex-row m-5 w-full ">
      <div className="w-2/5">
        <img className="font-mono w-32" src={image?.url} alt={title} />
      </div>
      <div className="w-3/5 flex flex-col items-start  justify-between ml-2">
        <p className="font-mono font-bold text-3xl text-left w-5/6">
          {title ? title : "Titulo"}
        </p>
        <button onClick={handleListItemClick} className="shadow-2xl shadow-cyan-300 hover:bg-cyan-600 border-solid border-cyan-300 border-2 text-cyan-300 hover:text-white font-mono content-start w-1/5 rounded-md">
          Ver mas
        </button>
      </div>
    </div>
  );
};

export default ListItem;
