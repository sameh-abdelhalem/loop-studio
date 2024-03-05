import desktopImage1 from "../assets/desktop/image-deep-earth.jpg";
import mobileImage1 from "../assets/mobile/image-deep-earth.jpg";
import desktopImage2 from "../assets/desktop/image-night-arcade.jpg";
import mobileImage2 from "../assets/mobile/image-night-arcade.jpg";
import desktopImage3 from "../assets/desktop/image-soccer-team.jpg";
import mobileImage3 from "../assets/mobile/image-soccer-team.jpg";
import desktopImage4 from "../assets/desktop/image-grid.jpg";
import mobileImage4 from "../assets/mobile/image-grid.jpg";
import desktopImage5 from "../assets/desktop/image-from-above.jpg";
import mobileImage5 from "../assets/mobile/image-from-above.jpg";
import desktopImage6 from "../assets/desktop/image-pocket-borealis.jpg";
import mobileImage6 from "../assets/mobile/image-pocket-borealis.jpg";
import desktopImage7 from "../assets/desktop/image-curiosity.jpg";
import mobileImage7 from "../assets/mobile/image-curiosity.jpg";
import desktopImage8 from "../assets/desktop/image-fisheye.jpg";
import mobileImage8 from "../assets/mobile/image-fisheye.jpg";
import CreationItem from "./CreationItem";

const Creations = () => {
  return (
    <section id="creations">
      {/* Creations Container */}
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        {/* Creations Header */}

        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>
          <button className="hidden btn md:block">See All</button>
        </div>
        {/* Items Container */}
        <div className="item-container">
          <CreationItem
            title={"Deep Earth"}
            desktopImage={desktopImage1}
            mobileImage={mobileImage1}
          />
          <CreationItem
            title={"Night Arcade"}
            desktopImage={desktopImage2}
            mobileImage={mobileImage2}
          />
          <CreationItem
            title={"Soccer Team VR"}
            desktopImage={desktopImage3}
            mobileImage={mobileImage3}
          />
          <CreationItem
            title={"The Grid"}
            desktopImage={desktopImage4}
            mobileImage={mobileImage4}
          />
        </div>
        {/* Item Container 2 */}
        <div className="item-container mt-10">
          <CreationItem
            title={"From UP Above vr"}
            desktopImage={desktopImage5}
            mobileImage={mobileImage5}
          />
          <CreationItem
            title={"Pocket Borealis"}
            desktopImage={desktopImage6}
            mobileImage={mobileImage6}
          />
          <CreationItem
            title={"the fisheyecuriosity"}
            desktopImage={desktopImage7}
            mobileImage={mobileImage7}
          />
          <CreationItem
            title={"Make it fisheye"}
            desktopImage={desktopImage8}
            mobileImage={mobileImage8}
          />
        </div>
        {/* Bottom Button Container */}
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
  );
};

export default Creations;
