import reactImg from "./../assets/react.svg";
import astroImg from "./../assets/react.svg";
import cssImg from "./../assets/css.svg";
import htmlImg from "./../assets/html.svg";
import jsImg from "./../assets/js.svg";
import nextImg from "./../assets/next.svg";
import tailwindImg from "./../assets/tailwind.svg";
import nodeImg from "./../assets/node-js.svg";

const Tools = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 my-6">
      <div>
        <img className="w-10 h-10" src={htmlImg.src} alt="html" />
      </div>
      <div>
        <img className="w-10 h-10" src={cssImg.src} alt="css" />
      </div>
      <div>
        <img className="w-10 h-10" src={jsImg.src} alt="js" />
      </div>
      <div>
        <img className="w-10 h-10" src={reactImg.src} alt="react" />
      </div>
      <div>
        <img className="w-10 h-10" src={nodeImg.src} alt="node" />
      </div>
      <div>
        <img className="w-10 h-10" src={astroImg.src} alt="astro" />
      </div>
      <div>
        <img
          className="w-9 h-9 bg-white rounded-full"
          src={nextImg.src}
          alt="next"
        />
      </div>
      <div>
        <img className="w-10 h-10" src={tailwindImg.src} alt="tailwind" />
      </div>
    </div>
  );
};

export default Tools;
