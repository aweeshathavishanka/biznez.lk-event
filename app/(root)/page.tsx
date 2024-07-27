import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className=" bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className=" wrapper grid grid-cols-1 gap-5 md:grid-cols-3   2xl:gap-0">
          <div className=" flex flex-col justify-center gap-8 md:col-span-2">
            <h1 className=" h1-bold">
              All of the upcoming events you've been searching for.
            </h1>
            <p className=" p-regular-20 md:p-regular-20">
              All of the upcoming events you've been searching for. Looking to
              connect with other like-minded professionals? You've come to the
              right place.
            </p>
            <Button className="button sm:w-fit w-full" size={"lg"}>
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="events"
        className=" wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className=" h2-bold">Upcoming Events</h2>
        <div>Search Category Filter</div>
      </section>
    </>
  );
}
