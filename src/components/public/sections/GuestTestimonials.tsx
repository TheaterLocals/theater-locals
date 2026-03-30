export default function GuestTestimonials() {
  const testimonials = [
    {
      text: "本当に驚きました。料理という『動作』を通じて、日本文化が体に入ってきた感じ",
      author: "Aさん",
      origin: "イギリス、35歳",
      rating: 5,
    },
    {
      text: "子どもも大人も同じ目線で体験できた。家族全体が共通の記憶を作れた",
      author: "Bさん",
      origin: "日本、親子3名参加",
      rating: 5,
    },
    {
      text: "単なる『観光』ではなく『学習』だった。帰った後も毎日思い出している",
      author: "Cさん",
      origin: "シンガポール、28歳",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <h2 className="text-4xl font-bold mb-12 text-center">参加者からのコメント</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">
                      ⭐
                    </span>
                  ))}
              </div>

              <blockquote className="text-gray-800 mb-4 italic">
                "{testimonial.text}"
              </blockquote>

              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.origin}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
