import React from "react";

const reviewData = [
  {
    title: "Brilliant house to rent",
    text: "All eFounders teams have moved to Cycle for all things product management and it is truly a game-changer.",
    name: "Jane Cooper",

    img: "https://randomuser.me/api/portraits/women/54.jpg",
    colSpan: "col-span-2",
  },
  {
    title: "Efficient customer support",
    text: "The customer support team at our service is incredibly responsive and helpful. They went above and beyond to assist me with my issue.",
    name: "Emily Smith",

    img: "https://randomuser.me/api/portraits/women/30.jpg",
    colSpan: "col-span-3",
  },
  {
    title: "Seamless integration process",
    text: "Integrating our systems with our service was smooth and hassle-free. The support team guided us through every step of the process.",
    name: "Sarah Brown",

    img: "https://randomuser.me/api/portraits/women/90.jpg",
    colSpan: "col-span-3",
  },
  {
    title: "Reliable service uptime",
    text: "Our service has consistently maintained high uptime, ensuring that our operations run smoothly without any disruptions.",
    name: "James White",

    img: "https://randomuser.me/api/portraits/men/90.jpg",
    colSpan: "col-span-2",
  },
];

export default function Reviews() {
  return (
    <section className="max-w-5xl mx-auto w-full px-10 mb-10 ">
      {/* Header */}
      <div className="flex items-center justify-center flex-col gap-y-2 py-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Reviews</h2>
        <p className="text-lg font-medium text-slate-700/70 ">
          Discover how our service can benefit you
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
        {reviewData.map((review, index) => (
          <div
            key={index}
            className={`border p-7 rounded-xl bg-white  drop-shadow-md border-neutral-200/50 ${review.colSpan} flex flex-col gap-y-10 justify-between`}
          >
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl">{review.title}</p>
              <p className="font-medium text-slate-700/90 ">{review.text}</p>
            </div>
            <div className="flex flex-col">
              <img
                src={review.img}
                alt={review.name}
                className="h-10 w-10 rounded-full mb-2 object-cover"
              />
              <p className="pt-2 text-sm font-semibold">{review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
