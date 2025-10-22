export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center px-10 py-16 gap-10">
      {/* Left side */}
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-2">Reddway website builder</p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Build, Manage & Grow <br />
          Your Website, All in One Place!
        </h1>
        <p className="text-gray-600 mb-6">
          Launch your online store in 10 minutes – No Code Required.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition">
          Get started now
        </button>
      </div>

      
      
      {/* Right Image */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
            <img
            src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9"
            alt="Website preview"
            className="w-[90%] max-w-md md:max-w-lg lg:max-w-xl rounded-xl shadow-lg object-contain"
        />
        </div>
      

    </section>
  );
}
