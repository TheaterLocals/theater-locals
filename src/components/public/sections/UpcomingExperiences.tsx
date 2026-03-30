export default function UpcomingExperiences() {
  const experiences = [
    {
      date: "2026-05-24",
      title: "秋刀魚の擬似体験",
      participants: "6/10",
      price: 15000,
    },
    {
      date: "2026-06-14",
      title: "能体験～古事記の世界～",
      participants: "3/10",
      price: 15000,
    },
    {
      date: "2026-07-05",
      title: "鎌倉の工芸体験",
      participants: "8/10",
      price: 15000,
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <h2 className="text-4xl font-bold mb-12 text-center">次の開催予定</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.date}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">{exp.date}</p>
                <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-600 font-semibold">¥{exp.price.toLocaleString()}</span>
                <span className="text-sm text-gray-600">残席: {exp.participants}</span>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                <div
                  className="bg-amber-600 h-2 rounded-full"
                  style={{ width: `${(parseInt(exp.participants.split('/')[0]) / parseInt(exp.participants.split('/')[1])) * 100}%` }}
                />
              </div>

              <button className="w-full btn-primary text-sm">
                詳細を見る
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary px-8">
            すべての開催予定を見る
          </button>
        </div>
      </div>
    </section>
  );
}
