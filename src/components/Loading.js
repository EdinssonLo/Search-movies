const Loading = ({mensaje}) => {
  return (
    <div className="flex  justify-center flex-col h-full">
      <div className="flex item-center justify-center">
        <div  className="motion-reduce:animate-bounce w-6 h-6  border-solid border-3   border-blue-950 rounded-full bg-cyan-100"></div>
        <div  className="animate-bounce w-6 h-6  border-solid border-3   border-blue-950 rounded-full bg-cyan-200"></div>
        <div  className="motion-reduce:animate-bounce  w-6 h-6  border-solid border-3   border-blue-950 rounded-full bg-cyan-300"></div>
        <div  className="animate-bounce w-6 h-6  border-solid border-3   border-blue-950 rounded-full bg-cyan-400"></div>
        <div  className="motion-reduce:animate-bounce w-6 h-6  border-solid border-3   border-blue-950 rounded-full bg-cyan-500"></div>
        <div  className="animate-bounce  w-6 h-6  border-solid border-3   border-blue-950 rounded-full bg-cyan-600"></div>
        <div  className="motion-reduce:animate-bounce w-6 h-6  border-solid border-3   border-blue-950 rounded-full bg-cyan-700"></div>
      </div>
      <h5 className="animate-bounce mt-3 font-mono	text-cyan-800 text-m">{mensaje}</h5>
    </div>
  );
};

export default Loading;
