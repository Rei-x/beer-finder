import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Button, Card } from "react-daisyui";

const Hero = () => (
  <>
    <div className="w-full mt-48 flex justify-evenly">
      <div className="max-w-md rounded p-8">
        <h1 className="mb-5 text-5xl font-bold">BeerFinder 🍺</h1>
        <p className="mb-5">
          Find your perfect beer with just a few clicks! <br />
          <i>Taste the unforgettable.</i>
        </p>
        <Link href="/app">
          <Button color="primary">Find your beer!</Button>
        </Link>
      </div>
      <video autoPlay className="rounded-xl" loop>
        <source src="https://player.vimeo.com/external/465331247.sd.mp4?s=0383e83756e3e0365e1e5ccd29756dcaec6c5703&profile_id=164&oauth2_token_id=57447761" />
      </video>
    </div>
    <svg
      id="visual"
      viewBox="0 0 900 600"
      width="900"
      height="600"
      className="text-secondary absolute top-36 left-36 -z-10"
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
    <div className="flex w-3/4 rounded-xl justify-evenly gap-16 p-16 relative mx-auto">
      <div className="absolute scale-[4] shadow-lg overflow-hidden rounded-xl top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <svg
          id="visual"
          viewBox="0 0 1200 600"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            d="M0 61L18.2 67C36.3 73 72.7 85 109 96C145.3 107 181.7 117 218 116C254.3 115 290.7 103 327 91C363.3 79 399.7 67 436 59C472.3 51 508.7 47 545.2 51C581.7 55 618.3 67 654.8 71C691.3 75 727.7 71 764 75C800.3 79 836.7 91 873 96C909.3 101 945.7 99 982 94C1018.3 89 1054.7 81 1091 72C1127.3 63 1163.7 53 1181.8 48L1200 43L1200 0L1181.8 0C1163.7 0 1127.3 0 1091 0C1054.7 0 1018.3 0 982 0C945.7 0 909.3 0 873 0C836.7 0 800.3 0 764 0C727.7 0 691.3 0 654.8 0C618.3 0 581.7 0 545.2 0C508.7 0 472.3 0 436 0C399.7 0 363.3 0 327 0C290.7 0 254.3 0 218 0C181.7 0 145.3 0 109 0C72.7 0 36.3 0 18.2 0L0 0Z"
            fill="#ffc87a"
          ></path>
          <path
            d="M0 217L18.2 209C36.3 201 72.7 185 109 183C145.3 181 181.7 193 218 193C254.3 193 290.7 181 327 167C363.3 153 399.7 137 436 132C472.3 127 508.7 133 545.2 135C581.7 137 618.3 135 654.8 133C691.3 131 727.7 129 764 147C800.3 165 836.7 203 873 219C909.3 235 945.7 229 982 217C1018.3 205 1054.7 187 1091 176C1127.3 165 1163.7 161 1181.8 159L1200 157L1200 41L1181.8 46C1163.7 51 1127.3 61 1091 70C1054.7 79 1018.3 87 982 92C945.7 97 909.3 99 873 94C836.7 89 800.3 77 764 73C727.7 69 691.3 73 654.8 69C618.3 65 581.7 53 545.2 49C508.7 45 472.3 49 436 57C399.7 65 363.3 77 327 89C290.7 101 254.3 113 218 114C181.7 115 145.3 105 109 94C72.7 83 36.3 71 18.2 65L0 59Z"
            fill="#febc5c"
          ></path>
          <path
            d="M0 277L18.2 266C36.3 255 72.7 233 109 232C145.3 231 181.7 251 218 259C254.3 267 290.7 263 327 254C363.3 245 399.7 231 436 224C472.3 217 508.7 217 545.2 212C581.7 207 618.3 197 654.8 193C691.3 189 727.7 191 764 207C800.3 223 836.7 253 873 273C909.3 293 945.7 303 982 301C1018.3 299 1054.7 285 1091 269C1127.3 253 1163.7 235 1181.8 226L1200 217L1200 155L1181.8 157C1163.7 159 1127.3 163 1091 174C1054.7 185 1018.3 203 982 215C945.7 227 909.3 233 873 217C836.7 201 800.3 163 764 145C727.7 127 691.3 129 654.8 131C618.3 133 581.7 135 545.2 133C508.7 131 472.3 125 436 130C399.7 135 363.3 151 327 165C290.7 179 254.3 191 218 191C181.7 191 145.3 179 109 181C72.7 183 36.3 199 18.2 207L0 215Z"
            fill="#fcaf3c"
          ></path>
          <path
            d="M0 433L18.2 416C36.3 399 72.7 365 109 366C145.3 367 181.7 403 218 410C254.3 417 290.7 395 327 382C363.3 369 399.7 365 436 379C472.3 393 508.7 425 545.2 427C581.7 429 618.3 401 654.8 399C691.3 397 727.7 421 764 434C800.3 447 836.7 449 873 458C909.3 467 945.7 483 982 489C1018.3 495 1054.7 491 1091 474C1127.3 457 1163.7 427 1181.8 412L1200 397L1200 215L1181.8 224C1163.7 233 1127.3 251 1091 267C1054.7 283 1018.3 297 982 299C945.7 301 909.3 291 873 271C836.7 251 800.3 221 764 205C727.7 189 691.3 187 654.8 191C618.3 195 581.7 205 545.2 210C508.7 215 472.3 215 436 222C399.7 229 363.3 243 327 252C290.7 261 254.3 265 218 257C181.7 249 145.3 229 109 230C72.7 231 36.3 253 18.2 264L0 275Z"
            fill="#dd9832"
          ></path>
          <path
            d="M0 601L18.2 601C36.3 601 72.7 601 109 601C145.3 601 181.7 601 218 601C254.3 601 290.7 601 327 601C363.3 601 399.7 601 436 601C472.3 601 508.7 601 545.2 601C581.7 601 618.3 601 654.8 601C691.3 601 727.7 601 764 601C800.3 601 836.7 601 873 601C909.3 601 945.7 601 982 601C1018.3 601 1054.7 601 1091 601C1127.3 601 1163.7 601 1181.8 601L1200 601L1200 395L1181.8 410C1163.7 425 1127.3 455 1091 472C1054.7 489 1018.3 493 982 487C945.7 481 909.3 465 873 456C836.7 447 800.3 445 764 432C727.7 419 691.3 395 654.8 397C618.3 399 581.7 427 545.2 425C508.7 423 472.3 391 436 377C399.7 363 363.3 367 327 380C290.7 393 254.3 415 218 408C181.7 401 145.3 365 109 364C72.7 363 36.3 397 18.2 414L0 431Z"
            fill="#be8128"
          ></path>
        </svg>
      </div>
      <Card className="w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img
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
      <Card className="w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img
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
      <Card className="w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img
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
    <motion.img
      height={48}
      width={48}
      className="top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 absolute"
      src="https://seeklogo.com/images/F/facebook-like-logo-32FAB6926D-seeklogo.com.png"
      animate={{ y: [0, 20, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
    />
    <motion.img
      height={48}
      width={48}
      className="top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 absolute"
      src="https://seeklogo.com/images/T/twitter-logo-A84FE9258E-seeklogo.com.png"
      animate={{ y: [0, 20, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        delay: 1,
      }}
    />
    <motion.img
      height={48}
      width={48}
      className="-translate-x-1/2 -translate-y-1/2 absolute"
      src="https://wordynerdbird.files.wordpress.com/2019/06/facebook-circle-heart-love-png-4.png?w=128"
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
    />
    <motion.img
      height={48}
      width={48}
      className="-translate-x-1/2 -translate-y-1/2 absolute"
      src="https://studiokalisz.pl/wp-content/uploads/2018/11/instagram-colourful-icon.png"
      animate={{ y: [0, 20, 0] }}
      transition={{
        repeat: Infinity,
        duration: 4,
        delay: 3,
      }}
      style={{
        top: "80%",
        right: "20%",
      }}
    />
    <div className="prose text-center w-full mx-auto mt-64 mb-10">
      <h2>Share with your friends!</h2>
    </div>
    <div className="w-2/5 mx-auto shadow-lg rounded-xl p-8 bg-slate-100 no-prose">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Mario
          <time className="text-xs opacity-50 ml-1">12:45</time>
        </div>
        <div className="chat-bubble">
          Have you heard about <strong>BeerFinder</strong>?
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="chat-header">
          Luigi
          <time className="text-xs opacity-50 ml-1">12:46</time>
        </div>
        <div className="chat-bubble">Not yet, looks fire 🔥</div>
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
        stroke-linecap="round"
        stroke-linejoin="miter"
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
        <Button className="w-40" size="lg" color="primary">
          go in
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
