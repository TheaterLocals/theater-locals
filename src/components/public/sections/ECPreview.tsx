export default function ECPreview() {
  const products = [
    {
      name: "秋刀魚セット（冷凍）",
      price: 3000,
      rating: 5,
    },
    {
      name: "陶芸の器セット",
      price: 8000,
      rating: 5,
    },
    {
      name: "Theater Localsガイドブック",
      price: 2000,
      rating: 5,
    },
    {
      name: "パートナー商品 × 厳選品",
      price: 5000,
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <h2 className="text-4xl font-bold mb-4 text-center">体験を家に持ち帰る</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          使った食材・器・ガイドブック。すべて購入できます。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-yellow-200 to-orange-200 flex items-center justify-center">
                <div className="text-5xl">
                  {idx === 0 ? "🐟" : idx === 1 ? "🏺" : idx === 2 ? "📚" : "🎁"}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-amber-600">
                    ¥{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-amber-500">
                    {'⭐'.repeat(product.rating)}
                  </span>
                </div>
                <button className="w-full bg-amber-100 text-amber-800 py-2 rounded font-semibold hover:bg-amber-200 transition-colors">
                  カートに入れる
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-primary">すべての商品を見る</button>
        </div>
      </div>
    </section>
  );
}
