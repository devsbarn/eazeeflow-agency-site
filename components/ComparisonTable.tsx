import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { copy } from "@/content/copy";

export function ComparisonTable() {
  return (
    <section id="comparison" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {copy.comparison.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {copy.comparison.intro}
          </p>
        </div>

        <Card className="bg-gray-900/70 border-gray-800/30 backdrop-blur-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800/50">
                  {copy.comparison.columns.map((column, index) => (
                    <th key={index} className={`p-6 text-left font-semibold ${
                      index === 0 ? 'text-gray-300' : 
                      index === 3 ? 'text-cyan-400 bg-cyan-500/10' : 'text-white'
                    }`}>
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.comparison.rows.map((row, index) => (
                  <tr key={index} className="border-b border-gray-800/30 hover:bg-gray-800/20 transition-colors">
                    <td className="p-6 font-medium text-gray-300">{row.feature}</td>
                    <td className="p-6 text-gray-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span>{row.tools}</span>
                      </div>
                    </td>
                    <td className="p-6 text-gray-400">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                        <span>{row.agencies}</span>
                      </div>
                    </td>
                    <td className="p-6 bg-cyan-500/5">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white">{row.ours}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
}