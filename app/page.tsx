import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"
import Social from "@/components/Social";
import Photo from "@/components/Photo";




const Home = (): JSX.Element => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between 
      xl:pt-8 xl:pb-24">
          {/* <div>photo</div> */}
          <div className="text-center xl:text-left order-2 xl:order-none">

            <span className="text-xl">Solution Engineer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-accent">Chokchai Faroongsarng</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 py-2 border border-accent rounded-full flex justify-center 
              item-center text-accent text-base hover:bg-accent hover:text-primary 
              hover:transition-all duration-500"
                />
              </div>


            </div>

          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>



        </div>


      </div>



    </section>
  );
}


export default Home;
