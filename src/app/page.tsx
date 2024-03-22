import HeroDeclaration from "@/components/ui/HeroDeclaration";
import NameCard from "@/components/ui/NameCard";
import { Background } from "@/components/ui/background";
import { HeadingFont, MeadumFont } from "@/utils/font_Import";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/assets/hero.png";
import logo from "@/assets/logo.png";






export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="flex">
        <Link href={"https://twitter.com/RevenantIndia"} target="_blank">
          <Image
            src={logo}

            alt="Hero"
            width={100}
            className="absolute right-6 top-6 z-30"
          />
        </Link>
        <MainHeroComponent1 />

      </div>
    </main>
  );
}

    function MainHeroComponent1({}) {
      return (
        <section className=" relative flex min-h-screen w-full items-center justify-center overflow-hidden -translate-y-4 select-none">
          <Background />
          <Image src={Hero} alt="Hero" width={800}  className="absolute z-30 md:-translate-x-[25rem] translate-y-4"/>
          <div className=" absolute z-10 flex w-[30rem] flex-col  items-start justify-center  md:translate-x-40">
            <h2 className="text-start text-3xl " style={MeadumFont.style}>
              Professional Valorant player
            </h2>
            <h1
              className="text-center text-9xl font-[900] "
              style={HeadingFont.style}
            >
              Paradox
            </h1>

            <NameCard Name="KASIF" className=" " Surname="SAYYED" />
          </div>
          {/* <div className="absolute z-10 bottom-0 bg-black "> hello world </div> */}
        </section>
      );
    }

