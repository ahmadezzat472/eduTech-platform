import { Heart, GraduationCap, Sparkles, Laptop } from "lucide-react";

export const HealthServices = () => {
  return (
    <div className="bg-gray-600/50 rounded-xl p-6 transition-all duration-300">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <GraduationCap className="w-6 h-6 text-blue-500" />
        EdTech Services
      </h3>
      <ul className="space-y-3">
        <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer group">
          <Sparkles className="w-4 h-4 text-yellow-500 group-hover:rotate-12 transition-transform" />
          <span>Student Support Programs</span>
        </li>
        <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer group">
          <Laptop className="w-4 h-4 text-purple-500 group-hover:rotate-12 transition-transform" />
          <span>Specialty Learning Clinics</span>
        </li>
        <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer group">
          <GraduationCap className="w-4 h-4 text-green-500 group-hover:rotate-12 transition-transform" />
          <span>Emergency EdTech Services</span>
        </li>
      </ul>
    </div>
  );
};
