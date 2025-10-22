"use client";

export default function VideoSection() {
  return (
    <section className="flex justify-center items-center py-16 sm:py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/alJPhBf2a2A?si=G2FvbqQXaAsnypE8"
            title="Reddway Demo Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
