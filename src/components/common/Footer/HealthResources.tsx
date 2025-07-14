import {
  BookOpen,
  Newspaper,
  Globe,
} from "lucide-react";

export const HealthResources = () => {
  return (
    <div className="bg-gray-600/50 rounded-xl p-6 transition-all duration-300">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-blue-500" />
        EdTech Resources
      </h3>
      <ul className="space-y-3">
        <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer group">
          <Newspaper className="w-4 h-4 text-blue-500 group-hover:rotate-12 transition-transform" />
          <span>EdTech News</span>
        </li>
        <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer group">
          <BookOpen className="w-4 h-4 text-purple-500 group-hover:rotate-12 transition-transform" />
          <span>Learning Guides</span>
        </li>
        <li className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer group">
          <Globe className="w-4 h-4 text-green-500 group-hover:rotate-12 transition-transform" />
          <span>Community Learning Tips</span>
        </li>
      </ul>
    </div>
  );
};
