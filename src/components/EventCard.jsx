import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { WobbleCard } from "../components/ui/wobble-card";
import e1 from "@/img/e1.jpeg";
import e2 from "@/img/e2.jpeg";
import e3 from "@/img/e3.jpeg";
import e4 from "@/img/e4.jpeg";

const images = [e1, e2, e3, e4]; // Store the images in an array for easy access

const EventCard = ({ event }) => {
  const eventImage = images[event.imageIndex % images.length] || e1; // Use imageIndex to cycle through images

  return (
    <WobbleCard>
      <div className="relative flex w-80 lg:w-100 h-90 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        {/* Image Section */}
        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <ZoomImage src={images[eventImage.imageIndex % images.length]} alt={event.title} />
        </div>

        {/* Text Content */}
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {event.title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {event.shortDescription}
          </p>
        </div>

        {/* Action Section */}
        <div className="mb-5 mt-10 flex justify-center items-center">
          <Link
            to={`/event/${event.id}`}
            className="rounded-xl transition-all duration-300 flex items-center group mr-28"
          >
            <StyledWrapper>
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-transparent py-1 px-1 text-center align-middle 
                font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 
                transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] 
                focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none 
                disabled:opacity-50 disabled:shadow-none"
              >
                Read More
              </button>
            </StyledWrapper>
          </Link>

          <span className="text-sm px-2 rounded-xl text-black mx-2 py-3 border-black border-2">
            {event.date}
          </span>
        </div>
      </div>
    </WobbleCard>
  );
};

export default EventCard;

const StyledWrapper = styled.div`
  button {
    --border-radius: 15px;
    --border-width: 4px;
    appearance: none;
    position: relative;
    padding: 1em 1em;
    border: 0;
    background-color: transparent;
    font-family: "Roboto", Arial, "Segoe UI", sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: black;
    z-index: 2;
  }

  button::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );
    -webkit-mask-image: var(--m-i), var(--m-i);
    mask-image: var(--m-i), var(--m-i);
    -webkit-mask-origin: var(--m-o);
    mask-origin: var(--m-o);
    -webkit-mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    filter: hue-rotate(0);
    animation: rotate-hue linear 500ms infinite;
    animation-play-state: paused;
  }

  button:hover::after {
    animation-play-state: running;
  }

  @keyframes rotate-hue {
    to {
      filter: hue-rotate(1turn);
    }
  }

  button,
  button::after {
    box-sizing: border-box;
  }

  button:active {
    --border-width: 5px;
  }
`;

const ZoomImage = styled.img`
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
