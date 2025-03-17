import { TrendingUp, BarChart, Users } from "lucide-react";

export default function InvestorsSection() {
  return (
    <section className="bg-gray-950 py-10 px-4 text-center">
  <h2 className="text-green-400 text-3xl font-bold">Our Investors</h2>
  <p className="text-gray-300 mt-2">Empowering the future with strong partnerships</p>

  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
   <img src="/JHUB Africa.png" alt="JHUB Africa.png" className="w-40 rounded-full"/>
  </div>
</section>

  );
}