import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import aarogya from "../../Arogya_rasayana.png"

export default function ProductsPage() {
  const products = [
    {
      name: "Arogya Rasayana",
      description: "Traditional Ayurvedic immunity booster and health tonic.",
      price: "₹799",
      image: aarogya,
      indications: [
        "Helps to build up natural immunity against infections",
        "Helpful in gastrointestinal problems like hyper acidity, gastritis, IBS, constipation",
        "Specially indicated in growing children to build immunity, decrease stress and improve memory",
        "Increases appetite and helps in proper growth and nourishment in children",
        "Helpful for pregnant women, decreases nausea, vomiting and benefits the growing foetus",
        "Indicated after delivery, increases lactation and provides necessary nutrients",
        "Helpful in anemia",
        "Improves eye sight",
        "Reduces hair fall",
        "Acts as a blood purifier",
        "Helps patients recover faster after debilitating diseases like TB, Cancer, jaundice",
        "Specially advised after chemotherapy"
      ],
      dosage: "1 Tea spoon Daily Twice"
    },
    {
      name: "Jeeva Nyasa",
      description: "Traditional nasal medication for neurological and brain health.",
      price: "₹899",
      image: aarogya,
      indications: [
        "Migraine Headaches",
        "Bell's palsy",
        "Paralysis/hemiplegia",
        "Epilepsy",
        "Autism",
        "Parkinson's disease",
        "Sinusitis",
        "Psychiatric diseases like schizophrenia or bipolar disease",
        "Dementia, Alzheimer's disease",
        "Reduces Stress and depression",
        "Trigeminal neuralgia",
        "Increases memory",
        "Twitching or drooping of eyelids",
        "Tingling sensation in face",
        "Brain tonic - stimulates brain and central nervous system"
      ],
      dosage: "1 to 2 drops daily mornings or on amavasya and pournami days SOS",
      note: "JEEVA NYASA is indicated for healthy persons too, especially on amavasya and pournami days to maintain physical and psychological health and as preventative medicine"
    },

  ];

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Traditional Ayurvedic Products</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Discover our range of authentic Ayurvedic products, carefully formulated using traditional recipes passed down through generations by vaidyas (Ayurvedic Doctors).
        </p>
        
        <blockquote className="border-l-4 border-green-700 pl-4 italic mb-8 max-w-2xl mx-auto text-center">
          "SWASTHASYA SWASTHASYA SAMRAKSHANAM ATURASYA VIKARA PRASHAMANAM" - CHARAKA
          <p className="not-italic text-sm mt-2">Maintaining the healthy individual and curing the sick is the main aim of Ayurveda.</p>
        </blockquote>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <Tabs defaultValue="indications">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="indications">Indications</TabsTrigger>
                    <TabsTrigger value="dosage">Dosage</TabsTrigger>
                  </TabsList>
                  <TabsContent value="indications" className="h-64 overflow-y-auto">
                    <ul className="list-disc pl-5 space-y-1">
                      {product.indications.map((indication, i) => (
                        <li key={i}>{indication}</li>
                      ))}
                    </ul>
                    {product.note && (
                      <p className="mt-4 text-sm italic">{product.note}</p>
                    )}
                  </TabsContent>
                  <TabsContent value="dosage">
                    <p className="font-medium">{product.dosage}</p>
                  </TabsContent>
                </Tabs>
                
                <div className="flex items-center justify-between mt-6">
                  <span className="text-lg font-semibold text-green-700">{product.price}</span>
                  <Button className="bg-green-700 hover:bg-green-800">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Special information about Dr. C. Bhanumurthy and traditional practice */}
        <Card className="p-6 mb-12 border-green-700 border-2">
          <h2 className="text-2xl font-bold text-center mb-4">TRADITIONAL AYURVEDIC SCIENCE</h2>
          <p className="mb-4">
            The unique rare indigenous knowledge of ancient medical science passing from one generation of vaidyas (Ayurvedic Doctors).
          </p>
          <p className="mb-4">
            <strong>Dr. C. BHANUMURTHY</strong> comes 5th in the row. In his 42 years of experience, he has developed these products for the benefit of mankind.
          </p>
          <p className="mb-4">
            We have been administering special Nasya on every Amavasya (no moon day) since 70+ years as our family traditional medicine.
          </p>
          <h3 className="text-xl font-bold mt-6 mb-2">Why Amavasya and Pournami?</h3>
          <p>
            We might notice high sea tides or waves on full moon or no moon days due to the earth's electromagnetic field. It is believed that the lunar cycle is related to psychiatric episodes and diseases of the brain and central nervous system. We have observed patients with hysteria becoming more agitated, or episodes of epilepsy just before or on Amavasya or Pournami, even in cases of migraine headaches.
          </p>
          <blockquote className="border-l-4 border-green-700 pl-4 italic my-4">
            "NASA HI SIRASHO DWARAM" - CHARAKA
            <p className="not-italic text-sm mt-2">Nose is the door to consciousness and the direct pathway to SIRAS (Brain - Masthiska Majja).</p>
          </blockquote>
          <blockquote className="border-l-4 border-green-700 pl-4 italic my-4">
            "NASAYAM PRADEEYAMANAM AUSHADAM NASYAM" - CHARAKA
            <p className="not-italic text-sm mt-2">Administration of medicine through nasal route is called as Nasyam.</p>
          </blockquote>
          <p>
            It is believed that rate of absorption is better and quicker through the nasal route when compared to the oral route.
          </p>
        </Card>
      </div>
    </main>
  );
}