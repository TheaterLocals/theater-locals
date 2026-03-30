export default function BlogPreview() {
  const articles = [
    {
      category: "文化",
      title: "秋刀魚漁の歴史と古事記",
      author: "文化研究家 〇〇",
      excerpt: "秋刀魚漁がなぜ日本の秋の文化として定着したのか。古事記に隠された物語...",
    },
    {
      category: "身体技法",
      title: "能における身体技法",
      author: "能師 〇〇",
      excerpt: "500年の伝統から学ぶ、『体で知る』ということ。現代的な身体感覚への示唆...",
    },
    {
      category: "シェフ",
      title: "SANGA田中のシェフ哲学",
      author: "SANGA田中",
      excerpt: "なぜ『見せる調理』が料理体験を変えるのか。エンターテインメント的料理論...",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="text-4xl font-bold mb-12 text-center">体験をもっと深く知る</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="mb-3">
                <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {article.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">By {article.author}</p>

              <p className="text-gray-700 mb-4 line-clamp-3">{article.excerpt}</p>

              <a href="#" className="text-amber-600 font-semibold text-sm hover:underline">
                続きを読む →
              </a>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-secondary">すべての記事を見る</button>
        </div>
      </div>
    </section>
  );
}
