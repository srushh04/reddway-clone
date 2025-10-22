export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-center px-6 md:px-10 py-12 md:py-16 gap-8 lg:gap-16">
      {/* Left side */}
      <div className="flex-1 text-center lg:text-left">
        <p className="text-sm md:text-base text-gray-500 mb-2">Reddway website builder</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Build, Manage & Grow <br />
          Your Website, All in One Place!
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Launch your online store in 10 minutes – No Code Required.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition transform">
          Get started now
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <img
          src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9"
          alt="Website preview"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-xl shadow-lg object-contain"
        />
      </div>
    </section>
  );
}
