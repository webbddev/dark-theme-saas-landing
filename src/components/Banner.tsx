export const Banner = () => {
  return (
    <div className='py-3 text-center bg-gradient-to-r from-pink-100 via-cyan-500 to-yellow-400'>
      {/* <div className="py-3 text-center bg-[linear-gradient(to_right,rgb(252,_214,_255),rgb(41,_216,_255), rgb(255,_253,_128), rgb(248,_154,_191), rgb(252,_214,_255))]"> */}
      <div className='container'>
        <p className="font-medium">
          <span className="hidden sm:inline">Introducing a completely redesigned interface - </span>
          <a href='#' className='underline underline-offset-4 font-medium'>
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  );
};
