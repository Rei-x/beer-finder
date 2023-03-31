import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Button, Card } from "react-daisyui";
import NextImage from "next/image";

const Hero = () => (
  <>
    <div className="w-full mt-48 flex justify-evenly">
      <div className="max-w-md rounded my-auto">
        <h1 className="mb-5 text-5xl font-bold">BeerFinder 🍺</h1>
        <p className="mb-5 text-lg">
          Find your perfect beer with just a few clicks! <br />
          <i>Taste the unforgettable.</i>
        </p>
        <Link href="/app">
          <Button color="secondary" size="lg">
            Find your beer!
          </Button>
        </Link>
      </div>
      <video autoPlay className="rounded-xl shadow-lg" loop muted>
        <source src="https://player.vimeo.com/external/465331247.sd.mp4?s=0383e83756e3e0365e1e5ccd29756dcaec6c5703&profile_id=164&oauth2_token_id=57447761" />
      </video>
    </div>
    <svg
      id="visual"
      viewBox="0 0 900 600"
      width="900"
      height="600"
      className="text-primary absolute top-24 left-96 -z-10"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <g>
        <g transform="translate(324 354)">
          <path
            d="M84.2 -66C103.5 -43 109.5 -8.3 102.6 24C95.7 56.3 75.8 86.3 48.2 99.3C20.5 112.3 -14.9 108.5 -44.2 93.7C-73.5 78.9 -96.6 53.1 -104.6 22.6C-112.7 -8 -105.6 -43.3 -85.7 -66.4C-65.7 -89.5 -32.9 -100.4 -0.2 -100.3C32.5 -100.1 65 -88.9 84.2 -66Z"
            stroke="currentColor"
            fill="none"
            stroke-width="20"
          ></path>
        </g>
        <g transform="translate(766 466)">
          <path
            d="M79.6 -63.1C98.6 -39.8 106 -7 99.8 23.8C93.6 54.6 73.7 83.2 46.3 96.7C18.8 110.1 -16.3 108.4 -42.2 93.6C-68.1 78.8 -84.9 51 -93.2 19.8C-101.4 -11.4 -101.2 -45.9 -84.3 -68.8C-67.3 -91.6 -33.7 -102.7 -1.6 -101.4C30.4 -100.1 60.7 -86.4 79.6 -63.1Z"
            stroke="currentColor"
            fill="none"
            stroke-width="20"
          ></path>
        </g>
        <g transform="translate(608 213)">
          <path
            d="M69.3 -54.5C84.5 -36.2 87.9 -7.7 82.6 20.1C77.2 47.9 63.2 75 40 88C16.8 101.1 -15.5 100.2 -42.3 87.4C-69.1 74.7 -90.5 50.1 -95.5 23.2C-100.5 -3.7 -89.2 -32.9 -70.5 -52C-51.9 -71.1 -25.9 -80.1 0.5 -80.6C27 -81 54.1 -72.8 69.3 -54.5Z"
            stroke="currentColor"
            fill="none"
            stroke-width="20"
          ></path>
        </g>
        <g transform="translate(136 137)">
          <path
            d="M42.1 -35C50.7 -22.8 51 -5.6 46.6 9.3C42.2 24.2 32.9 36.7 19.7 44.4C6.5 52.1 -10.7 55.1 -25.4 49.3C-40 43.6 -52.1 29.1 -55.5 13C-59 -3.1 -53.8 -20.9 -43.1 -33.6C-32.4 -46.3 -16.2 -53.8 0.3 -54.1C16.8 -54.3 33.6 -47.2 42.1 -35Z"
            stroke="currentColor"
            fill="none"
            stroke-width="20"
          ></path>
        </g>
      </g>
    </svg>
  </>
);

const Features = () => (
  <div className="flex flex-col">
    <h1 className="text-4xl font-bold mt-80 w-full text-center mb-16">
      ⭐ Features ⭐
    </h1>
    <div className="flex w-3/4 rounded-xl justify-evenly gap-16  relative mx-auto">
      <Card className="w-96 bg-base-100 shadow-lg">
        <figure className="px-10 pt-10">
          <NextImage
            width={400}
            height={100}
            src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>

        <Card.Body>
          <Card.Title className="text-center items-center">
            Over 240 beers 😲
          </Card.Title>
          <p>
            You can find over 240 beers in our database. We are constantly
            updating our database with new beers.
          </p>
        </Card.Body>
      </Card>
      <Card className="w-96 bg-base-100 shadow-lg">
        <figure className="px-10 pt-10">
          <NextImage
            width={300}
            height={100}
            src="https://images.pexels.com/photos/35860/forge-craft-hot-form.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>

        <Card.Body>
          <Card.Title className="text-center items-center">
            Hits like a hammer 🔨
          </Card.Title>
          <p>
            From strong to light, we have a beer for every taste. We have beers
            from all over the world.
          </p>
        </Card.Body>
      </Card>
      <Card className="w-96 bg-base-100 shadow-lg">
        <figure className="px-10 pt-10">
          <NextImage
            width={300}
            height={100}
            src="https://images.pexels.com/photos/5055743/pexels-photo-5055743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>

        <Card.Body>
          <Card.Title className="text-center items-center">
            Share = care 🤝
          </Card.Title>
          <p>
            Our community is growing every day. Share your favorite beers with
            your friends.
          </p>
        </Card.Body>
      </Card>
    </div>
  </div>
);

const Sharing = () => (
  <div className="relative">
    <motion.div
      className="top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 absolute"
      animate={{ y: [0, 20, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
    >
      <NextImage src="/icons/facebook.png" width={50} height={50} alt="" />
    </motion.div>
    <motion.div
      className="top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 absolute"
      animate={{ y: [0, 20, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        delay: 1,
      }}
    >
      <NextImage src="/icons/twitter.png" width={50} height={50} alt="" />
    </motion.div>
    <motion.div
      className="-translate-x-1/2 -translate-y-1/2 absolute"
      animate={{ y: [0, 20, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        delay: 2,
      }}
      style={{
        top: "80%",
        left: "20%",
      }}
    >
      <NextImage src="/icons/instagram.png" width={50} height={50} alt="" />
    </motion.div>
    <motion.div
      className="-translate-x-1/2 -translate-y-1/2 absolute"
      animate={{ y: [0, 20, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        delay: 3,
      }}
      style={{
        top: "80%",
        right: "22%",
      }}
    >
      <NextImage src="/icons/whatsapp.png" width={50} height={50} alt="" />
    </motion.div>
    <motion.div
      className="-translate-x-1/2 -translate-y-1/2 absolute"
      animate={{ y: [0, 20, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        delay: 3.4,
      }}
      style={{
        top: "60%",
        left: "14%",
      }}
    >
      <NextImage src="/icons/pinterest.png" width={50} height={50} alt="" />
    </motion.div>
    <motion.div
      className="-translate-x-1/2 -translate-y-1/2 absolute"
      animate={{ y: [0, 20, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        delay: 1.6,
      }}
      style={{
        top: "65%",
        right: "16%",
      }}
    >
      <NextImage src="/icons/tik-tok.png" width={50} height={50} alt="" />
    </motion.div>
    <div className="prose text-center w-full mx-auto mt-36 mb-10">
      <h2>Share with your friends!</h2>
    </div>
    <div className="w-2/5 mx-auto shadow-lg rounded-xl p-8 bg-[#fdfdfd] no-prose">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <NextImage width={40} height={40} alt="" src="/men.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Harry Myles
          <time className="text-xs opacity-50 ml-1">12:45</time>
        </div>
        <div className="chat-bubble bg-[#e2e2e4] text-black">
          Have you heard about <strong>BeerFinder</strong>?
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <NextImage width={40} height={40} alt="" src="/woman.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Julia Smith
          <time className="text-xs opacity-50 ml-1">12:46</time>
        </div>
        <div className="chat-bubble bg-[#2294fb] text-white">
          Not yet, looks fire 🔥
        </div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </div>
  </div>
);

const JoinNow = () => (
  <div className="mt-40">
    <svg
      viewBox="0 0 400 40.206"
      className="w-full text-secondary"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M -0.064 10.423 L 11.839 14.391 C 23.744 18.36 47.551 26.295 71.443 25.251 C 95.293 24.207 119.268 14.182 143.117 15.769 C 167.008 17.398 190.816 30.597 214.708 36.82 C 238.557 43.002 262.532 42.167 286.381 33.813 C 310.273 25.459 334.081 9.588 357.972 4.993 C 381.821 0.399 405.796 7.082 429.646 8.126 C 453.538 9.17 477.345 4.576 489.249 2.278 L 501.153 -0.019 L 501.153 79.341 L 489.249 79.341 C 477.345 79.341 453.538 79.341 429.646 79.341 C 405.796 79.341 381.821 79.341 357.972 79.341 C 334.081 79.341 310.273 79.341 286.381 79.341 C 262.532 79.341 238.557 79.341 214.708 79.341 C 190.816 79.341 167.008 79.341 143.117 79.341 C 119.268 79.341 95.293 79.341 71.443 79.341 C 47.551 79.341 23.744 79.341 11.839 79.341 L -0.064 79.341 L -0.064 10.423 Z"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />
    </svg>
    <div className="flex flex-col bg-secondary p-32 pb-64">
      <div className="prose text-center mt-20 w-full mx-auto">
        <h1>Join us now!</h1>
      </div>
      <div className="stats shadow-lg text-2xl mt-8  w-fit mx-auto">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Beers</div>
          <div className="stat-value text-primary">296</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Active users</div>
          <div className="stat-value text-secondary">124</div>
          <div className="stat-desc">And still growing!</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div>
              <div className="w-16 rounded-full">
                {/* @ts-expect-error --value is how daisyui handles progress circle*/}
                <div className="radial-progress" style={{ "--value": 100 }}>
                  120%
                </div>
              </div>
            </div>
          </div>
          <div className="stat-value">120%</div>
          <div className="stat-title">Satisfaction</div>
          <div className="stat-desc">You can&apos;t go wrong!</div>
        </div>
      </div>
      <Link href="/app" className="mx-auto mt-10">
        <Button className="w-56" size="lg" color="primary">
          LET&apos;S SEE 👀
        </Button>
      </Link>
    </div>
  </div>
);

const Landing = () => {
  return (
    <Layout>
      <div className="min-h-fit flex flex-col justify-center">
        <Hero />
        <Features />
        <Sharing />
        <JoinNow />
      </div>
    </Layout>
  );
};

export default Landing;
