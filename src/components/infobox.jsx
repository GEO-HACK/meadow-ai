export default function Infobox({ info, backgroundColor = "transparent" }) {
    const textColor = backgroundColor === "white" ? "text-black" : "text-white";
  
    return (
      <div
        className={`bg-${backgroundColor} text-white border border-white rounded-xl min-w-[1rem] px-2 py-1`}
      >
        <p className={`m-1 text-sm tracking-widest ${textColor}`}>
          {info.toUpperCase()}
        </p>
      </div>
    );
  }
  