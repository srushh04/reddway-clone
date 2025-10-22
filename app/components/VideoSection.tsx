"use client";

export default function VideoSection() {
  return (
    <section className="flex justify-center items-center py-20 bg-white">
      <div className="w-full max-w-5xl px-4">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-xl">
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
