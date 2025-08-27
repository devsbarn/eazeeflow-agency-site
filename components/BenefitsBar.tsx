import { copy } from "@/content/copy";

export function BenefitsBar() {
  return (
    <section className="py-12 bg-gray-900/30 border-y border-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {copy.benefitsBar.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                {benefit.split(' ')[0]} {benefit.split(' ')[1]}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {benefit.split(' ').slice(2).join(' ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}