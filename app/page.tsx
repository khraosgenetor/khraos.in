import Image from "next/image";
import Link from "next/link";
import {Metadata} from "next";

const baseURL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://khraos.in";

export const metadata: Metadata = {
    description: "Home Page for khraos.in",
    openGraph: {
        images: [
            {
                url: `${baseURL}/api/og?title=Khraos Genetor | Home Page&description=The landing site for the portfolio of the man himself.`,
                width: 1200,
                height: 630,
                alt: "Home Page",
            }
        ]
    }
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/svgs/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
              <h1 className="flex items-center gap-4 text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                  <span>khraos.in is being reprogrammed.<br />Please stand by.</span>
                  <div className="vertical-line right"></div>
                  <span>
                      <Image
                          className="rounded-full border-2 border-gray-400"
                          src="/pictures/pfp.jpg"
                          alt="profile picture"
                          width={200}
                          height={100}
                      />
                  </span>
              </h1>
              <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                  The website is being rewritten from scratch due to issues while programming.
              </p>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/ghrepo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className=""
              src="/svgs/github.svg"
              alt="GH logomark"
              width={24}
              height={24}
            />
            GitHub
          </Link>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://www.instagram.com/khraosgenetor/"
            target="_blank"
            rel="noopener noreferrer"
          >
              <Image
                  className=""
                  src="/svgs/insta.svg"
                  alt="Insta logomark"
                  width={22}
                  height={22}
              />
            Instagram
          </a>
        </div>
      </main>
    </div>
  );
}
