export default function Quiz() {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen w-screen p-4"
        style={{
          backgroundImage: "url('/img/world1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full max-w-5xl h-[80vh] border border-gray-300 shadow-lg rounded-lg overflow-hidden bg-white">
          <iframe
            src="https://quiz.konfhub.com/q/hertz-7aiml"
            title="Hertz-7 Quiz"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    );
  }
  