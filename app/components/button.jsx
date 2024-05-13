const PinkButton = ({ text, isPurple, onClick, responsive }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className= { 
             "px-7 py-2 m-3 text-xl rounded-3xl " + responsive + " " + 
            (isPurple ? " bg-purple-600  text-white" : "border-solid border-2 border-fuchsia-600 text-black") 
        }
      >
        {text}
      </button>
    );
  };
  
  export default PinkButton;