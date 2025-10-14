import reactImg from "./../assets/react.svg";
import astroImg from "./../assets/astro.svg";
import cssImg from "./../assets/css.svg";
import htmlImg from "./../assets/html.svg";
import jsImg from "./../assets/js.svg";
import nextImg from "./../assets/next.svg";
import tailwindImg from "./../assets/tailwind.svg";
import nodeImg from "./../assets/node-js.svg";
import typescriptImg from "./../assets/typescript.png";
import prismaImg from "./../assets/prisma.svg";

const tools = [
  { src: htmlImg.src, alt: "HTML" },
  { src: cssImg.src, alt: "CSS" },
  { src: jsImg.src, alt: "JavaScript" },
  { src: typescriptImg.src, alt: "Typescript" },
  { src: reactImg.src, alt: "React" },
  { src: nextImg.src, alt: "Next.js", isRounded: true },
  { src: nodeImg.src, alt: "Node.js" },
  { src: prismaImg.src, alt: "Prisma" },
  { src: astroImg.src, alt: "Astro" },
  { src: tailwindImg.src, alt: "Tailwind CSS" },
];

const Tool = ({ tool }: { tool: any }) => {
  if (tool.src) {
    return (
      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center transition-transform hover:scale-110">
        <img
          className={`w-10 h-10 ${tool.isRounded ? "bg-white rounded-full" : ""}`}
          src={tool.src}
          alt={tool.alt}
        />
      </div>
    );
  }

  return (
    <div className="p-2 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center transition-transform hover:scale-110">
      <span className="font-semibold text-sm text-gray-700 dark:text-gray-300">
        {tool.name}
      </span>
    </div>
  );
};

const Tools = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold text-center mb-4">
        Ferramentas e Tecnologias
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {tools.map((tool, index) => (
          <Tool key={index} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
