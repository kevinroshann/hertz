import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact1.jpeg"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact2.jpeg"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          {/* <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          /> */}
          {/* <ImageClipBox
            src="/img/contact2"
            clipClass="sword-man-clip-path md:scale-125"
          /> */}
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join HERTZ
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> HERTZ t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

<a href="mailto:contact@ecsacusat.com">
  <Button 
    title="Contact Us" 
    containerClass="mt-10 cursor-pointer bg-blue-500 text-black px-4 py-2 rounded" 
  />
</a>

         
          <p className="mb-10 font-general text-[10px] uppercase">
           
          </p>
          <p className="mb-10 font-general text-[10px] uppercase">
          John Babu K
          9497049327
          </p>
          <p className="mb-10 font-general text-[10px] uppercase">
          Rishikesh TP
          7012199735
          </p>
          {/* <p className="mb-10 font-general text-[10px] uppercase">
            Phone 3
          </p> */}
         
        </div>
      </div>
    </div>
  );
};

export default Contact;
