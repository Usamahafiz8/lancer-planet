import React from "react";
import Slider from "./Slider";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import TechIcon from "./TechIcon";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 py-12 bg-herobg h-[90vh] ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-24 text-white mx-auto w-[99%]">
        Hire Top 1% Remote
        <br /> Developers Within <span className="text-spantxt">24 Hours</span>
      </h1>
      <p className="text-white w-[90%] md:w-[80%] lg:w-[70%] text-lg">
        Build a team of pre-vetted and highly skilled remote software developers
        that best match your timezone and work model. Save your hiring time and
        money with Lancer Planet.
      </p>
      <div>
        <Link href="/join" className="secondaryButton my-6">
          Get started
        </Link>
      </div>
      <Marquee className="flex items-center" pauseOnHover speed={80}>
        <TechIcon data={{ title: "Web", imgUrl: "/assets/techs/web.svg" }} />
        <TechIcon
          data={{ title: "Graphql", imgUrl: "/assets/techs/graphql.svg" }}
        />
        <TechIcon
          data={{ title: "Python", imgUrl: "/assets/techs/python.svg" }}
        />
        <TechIcon
          data={{ title: "Nodejs", imgUrl: "/assets/techs/nodejs.svg" }}
        />
        <TechIcon
          data={{ title: "Full Stack", imgUrl: "/assets/techs/stack.svg" }}
        />
        <TechIcon data={{ title: "Java", imgUrl: "/assets/techs/java.svg" }} />
        <TechIcon data={{ title: "iOS", imgUrl: "/assets/techs/ios.svg" }} />
        <TechIcon data={{ title: "php", imgUrl: "/assets/techs/php.svg" }} />
        <TechIcon
          data={{ title: "QA Engineer", imgUrl: "/assets/techs/qa.svg" }}
        />
        <TechIcon
          data={{ title: "Angular", imgUrl: "/assets/techs/angular.svg" }}
        />

        <TechIcon
          data={{ title: "Swift", imgUrl: "/assets/techs/swift.svg" }}
        />
        <TechIcon
          data={{ title: "Backend", imgUrl: "/assets/techs/backend.svg" }}
        />
      </Marquee>
{/* 
      <Marquee className="flex items-center" pauseOnHover speed={100}>
        <TechIcon data={{ title: "App", imgUrl: "/assets/techs/mobile.svg" }} />
        <TechIcon
          data={{ title: "Devops", imgUrl: "/assets/techs/devops.svg" }}
        />
        <TechIcon
          data={{ title: ".Net", imgUrl: "/assets/techs/dot-net.svg" }}
        />
        <TechIcon
          data={{ title: "Blockchain", imgUrl: "/assets/techs/blockchain.svg" }}
        />

        <TechIcon
          data={{ title: "Angular", imgUrl: "/assets/techs/angular.svg" }}
        />

        <TechIcon
          data={{ title: "Swift", imgUrl: "/assets/techs/swift.svg" }}
        />
        <TechIcon
          data={{ title: "Backend", imgUrl: "/assets/techs/backend.svg" }}
        />
        <TechIcon
          data={{ title: "Front End", imgUrl: "/assets/techs/front-end.svg" }}
        />
        <TechIcon
          data={{ title: "React js", imgUrl: "/assets/techs/reactjs.svg" }}
        />
        <TechIcon
          data={{
            title: "React Native",
            imgUrl: "/assets/techs/react-native.svg",
          }}
        />
      </Marquee> */}
      {/* <Marquee className="flex items-center" pauseOnHover speed={90}>
        <TechIcon
          data={{ title: "Full Stack", imgUrl: "/assets/techs/stack.svg" }}
        />
        <TechIcon data={{ title: "Java", imgUrl: "/assets/techs/java.svg" }} />
        <TechIcon data={{ title: "iOS", imgUrl: "/assets/techs/ios.svg" }} />
        <TechIcon data={{ title: "php", imgUrl: "/assets/techs/php.svg" }} />
        <TechIcon
          data={{ title: "QA Engineer", imgUrl: "/assets/techs/qa.svg" }}
        />
        <TechIcon
          data={{ title: "Android", imgUrl: "/assets/techs/android.svg" }}
        />
        <TechIcon
          data={{ title: "Blockchain", imgUrl: "/assets/techs/blockchain.svg" }}
        />
        <TechIcon
          data={{ title: "Front End", imgUrl: "/assets/techs/front-end.svg" }}
        />
        <TechIcon
          data={{ title: "React js", imgUrl: "/assets/techs/reactjs.svg" }}
        />
        <TechIcon
          data={{
            title: "React Native",
            imgUrl: "/assets/techs/react-native.svg",
          }}
        />
        <TechIcon
          data={{ title: "Ruby on Rails", imgUrl: "/assets/techs/ruby.svg" }}
        />
      </Marquee> */}
      {/* <Slider /> */}
    </div>
  );
}
