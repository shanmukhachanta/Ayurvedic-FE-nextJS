import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Mountain, Users } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://media.post.rvohealth.io/wp-content/uploads/2024/02/Ayurvedic-header.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">CBM Amba Ayurveda</h1>
          <p className="text-xl mb-8">"Where nature heals, and wisdom heals better"</p>
          <Button size="lg" className="bg-green-700 hover:bg-green-800">
            Book an Appointment
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <Leaf className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Healing</h3>
              <p className="text-muted-foreground">
                Traditional Ayurvedic treatments using pure natural ingredients
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <Users className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Practitioners</h3>
              <p className="text-muted-foreground">
                Six generations of dedicated Ayurvedic doctors
              </p>
            </Card>
            <Card className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <Mountain className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Holistic Approach</h3>
              <p className="text-muted-foreground">
                Comprehensive wellness solutions for mind and body
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Welcome to CBM's Sri Amba Ayurveda Aushadhalaya
              </h2>
              <p className="text-muted-foreground mb-4">
                A beacon of hope and healing nestled in the heart of bustling Bangalore. With a legacy spanning over 120 years and six generations of dedicated Ayurvedic doctors, we stand as a testament to the power of ancient wisdom combined with contemporary medical understanding.
              </p>
              <p className="text-muted-foreground mb-6">
                Unlike modern medicine, which often comes with side effects, holistic treatment options, or no cure, our unique ayurvedic practice is rooted in understanding the root cause of ailments. Our specialized treatments are carefully designed and administered by our highly skilled and devoted biochemical specialists.
              </p>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                Learn More
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1552858725-2758b5fb1286?q=80&w=1920&auto=format"
                alt="Ayurvedic Treatment"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Press Coverage Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Press Coverage</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">Press Coverage {item}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}