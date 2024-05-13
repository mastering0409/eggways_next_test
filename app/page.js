// Importing necessary components and utilities from Next.js and local files
import Link from "next/link";
import PinkButton from "./components/button";
import Image from "next/image";

// Defining CSS classes for font sizes
const mainFontSize = "text-4xl font-bold";
const subFontSize = "text-2xl";

// Define array of image objects with source paths and alternative texts
const images = [
  {
    src: "/asset/images/image_0.png",
    alt: "Image_0",
  },
  {
    src: "/asset/images/image_1.PNG",
    alt: "Image_1",
  },
];

//Define navigation items array with href, title, and active state
const navItem = [
  {
    href: "#",
    title: "Home",
    active: true,
  },
  {
    href: "#",
    title: "About",
    active: false,
  },
  {
    href: "#",
    title: "Service",
    active: false,
  },
];

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="flex items-center justify-around p-6">
        <div className="flex text-3xl font-bold">
          <Link href={"#"}>Eggways</Link>
        </div>
        <div>
          <ul className="flex text-2xl space-x-4">
            {navItem.map((item, it) => {
              return (
                <li key={it} className={item.active ? "nav-active" : ""}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <PinkButton
          text={"Join Us"}
          isPurple={true}
          responsive={"hidden md:block"}
        ></PinkButton>
      </div>

      <div className="flex flex-col gap-5 items-center mt-64 mx-8">
        <div className={`${mainFontSize} sm:mt-5`}>Largest freelance community on earth</div>
        <div className={subFontSize}>
          Hire talent, land jobs,connect with people in diverse freelance
          fields, and much more!
        </div>
        <div className="flex flex-col md:flex-row">
          <PinkButton text={"Join us on Discord"} isPurple={true}></PinkButton>
          <PinkButton text={"Sign Up"} isPurple={false}></PinkButton>
        </div>
      </div>

      <div className="absolute bottom-0 left-0">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          width={3000}
          height={4000}
        ></Image>
      </div>

      <div className="flex flex-col lg:flex-row w-9/12 h-52 container mx-auto gap-6 mt-80 pt-8 md:mt-96 md:pt-80">
        <div className="flex flex-col gap-5">
          <div className={mainFontSize}>About Us.</div>
          <div className={subFontSize}>
            Welcome to Eggways, the premier destination for connecting talented
            freelancers with exciting job opportunities. Founded in 2023, we are
            dedicated to revolutionizing the way businesses and freelancers
            collaborate, making it easier than ever to find the perfect match
            for your project need.
          </div>
          <div>
            <PinkButton text={"Learn More →"} isPurple={true}></PinkButton>
          </div>
        </div>

        <div className="mx-5">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            width={3000}
            height={4000}
          ></Image>
        </div>
      </div>
    </main>
  );
}
