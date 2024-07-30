import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
      <div className="text my-5 text-black mr-3 ml-28">
        <h1 className="text-5xl font-bold text-black">Welcome to GameStreet</h1>
        <p className="text-2xl my-7 px-1">
          GameStreet is your ultimate destination for discovering and purchasing the latest and greatest games. Find ratings, reviews, and access to the newest releases.
        </p>
        <Link
          to="/Products"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore Games
        </Link>
      </div>
      <div className="visual mr-10 my-10 lg:max-w-xl">
        <img
          className="rounded-lg max-h-full"
          src="https://media.istockphoto.com/id/1170073827/photo/gamer-work-space-concept-top-view-a-gaming-gear-mouse-keyboard-joystick-headset-mobile.jpg?s=2048x2048&w=is&k=20&c=wmlioYYAcagRne4OLCijOHOY5qsE9d6952oE7x2PG6Y="
          alt="GameStreet Hero Section"
        />
      </div>
    </section>
  );
};
