import heroImageDesktop from "../../images/image-hero-desktop.png";
import heroImageMobile from "../../images/image-hero-mobile.png";
import { clientLists } from "../js/clientLists";
export default function Main() {
  return (
    <main className="pb-12 pt-2 font-epilogue lg:mt-4 lg:flex lg:flex-row-reverse lg:items-end lg:justify-evenly lg:px-10 lg:pb-24">
      <picture>
        <source srcSet={heroImageDesktop} media="(min-width: 1024px)" />
        <img
          src={heroImageMobile}
          alt="hero image"
          className="mx-auto w-full max-w-sm bg-cover bg-center lg:mx-0"
        />
      </picture>
      {/* content */}
      <div className="mt-8 px-6 text-center lg:px-0 lg:text-left">
        <h2 className="text-3xl font-bold lg:max-w-[25rem] lg:text-6xl">
          Make remote work
        </h2>
        <p className="mx-auto max-w-sm py-6 text-mediumGray lg:mx-0 lg:pb-10 lg:pt-8">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button
          type="button"
          className="mx-auto max-w-fit rounded-xl border border-black bg-black px-8 py-2 text-white transition hover:bg-transparent hover:text-black lg:mx-0"
        >
          Learn More
        </button>

        {/* client */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 sm:flex-nowrap sm:justify-center sm:gap-10 lg:mt-20 lg:justify-normal">
          {clientLists.map((client) => {
            return (
              <img
                src={client.image}
                alt="client icon"
                key={client.alt}
                className="w-full max-w-[5rem] bg-cover bg-center"
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
