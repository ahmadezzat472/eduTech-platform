import { Button } from "@/components/ui/button";
import { Sparkles, Lightbulb, Users } from "lucide-react";



export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Sparkles className="text-white w-10 h-10 animate-pulse" />
        </div>

        <h2 className="text-4xl text-white font-extrabold tracking-tight mb-6">
          Empowering Learning Through Innovation
        </h2>

        <p className="text-lg max-w-3xl mx-auto text-white mb-10 leading-relaxed">
          We're a passionate team of educators, developers, and designers working
          together to create an inclusive and engaging educational experience.
          Our platform harnesses the power of modern technology to bring learning
          to everyone — anytime, anywhere.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-12">
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow hover:shadow-xl transition">
            <Users className="w-8 h-8 text-blue-600 mb-2" />
            <h4 className="font-semibold text-lg">Collaborative</h4>
            <p className="text-sm text-muted-foreground">
              Built by a diverse team passionate about education.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow hover:shadow-xl transition">
            <Lightbulb className="w-8 h-8 text-yellow-500 mb-2" />
            <h4 className="font-semibold text-lg">Innovative</h4>
            <p className="text-sm text-muted-foreground">
              Combining creativity with cutting-edge tech for smarter learning.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow hover:shadow-md transition">
            <Sparkles className="w-8 h-8 text-purple-600 mb-2" />
            <h4 className="font-semibold text-lg">Accessible</h4>
            <p className="text-sm text-muted-foreground">
              Designed for everyone, everywhere, across all devices.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="px-6 py-2 text-lg">Join the Mission</Button>
          <Button variant="outline" className="px-6 py-2 text-lg text-white">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
