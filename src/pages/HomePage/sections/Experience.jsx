import RestaurantView from "../../../assets/videos/restaurant-view.mp4";

export default function Experience() {
    return (
        <section className="w-[90%] mx-auto max-w-6xl relative max-h-[600px] h-[80vh] w-full overflow-hidden">
  {/* Full-background video */}
  <video
    src={RestaurantView}
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full rounded-lg h-full grayscale-[80%] object-cover"
  />

  {/* Overlay to darken video so text is readable */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content in front of the video */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <h2 className="text-white text-3xl font-classy mb-4">
      Experience Authentic Ramen
    </h2>
    <p className="text-gray-200 max-w-xl font-light font-rope">
      From handcrafted noodles to slow-simmered broths, every bowl is a journey in flavor.
    </p>
  </div>
</section>
    )
}