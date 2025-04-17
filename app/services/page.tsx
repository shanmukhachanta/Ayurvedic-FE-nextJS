import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Brain, AlertCircle, Stethoscope, HeartPulse, Users, Activity } from "lucide-react";
import brain from "../../brain.png"

export default function PVLInformationPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Periventricular Leukomalacia (PVL)</h1>
        
        {/* Introduction Section */}
        <section className="mb-12">
          <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 flex justify-center">
                <Brain className="h-24 w-24 text-green-700" />
              </div>
              <div className="md:w-3/4">
                <p className="text-lg">
                  <strong>Periventricular Leukomalacia (PVL)</strong> is a form of brain injury predominantly affecting premature infants. This condition results in the death of white matter tissue near the brain's ventricles, which are fluid-filled spaces within the brain. The injury leaves behind small "holes" in the white matter, affecting brain function. "Leuko" refers to the white matter in the brain, while "periventricular" indicates the location near the ventricles.
                </p>
              </div>
            </div>
          </Card>
        </section>
        
        {/* Causes Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-green-800 border-b border-green-200 pb-2">Causes of PVL</h2>
          <p className="mb-6">
            PVL is significantly more common in premature infants, especially those born before 32 weeks of gestation. Several factors contribute to the development of PVL:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-l-4 border-l-red-500">
              <div className="flex items-start gap-4">
                <HeartPulse className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Blood Flow Changes</h3>
                  <p>The white matter near the ventricles is highly sensitive and prone to damage due to fluctuations in blood flow, which is common in premature infants.</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-yellow-500">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-8 w-8 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Infections</h3>
                  <p>Infections around the time of delivery can also increase the risk of PVL. The immune response to infection may cause inflammation, damaging the brain's white matter.</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-purple-500">
              <div className="flex items-start gap-4">
                <Activity className="h-8 w-8 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Prematurity and Instability</h3>
                  <p>The more premature and unstable an infant is at birth, the higher the risk of developing PVL. The brain is still in a crucial developmental phase at this stage and is more susceptible to injury.</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-l-4 border-l-blue-500">
              <div className="flex items-start gap-4">
                <Stethoscope className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Intraventricular Hemorrhage (IVH)</h3>
                  <p>Premature babies who experience bleeding in the brain (IVH) are at greater risk for PVL, as IVH can further disrupt blood flow and damage brain tissue.</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
        
        {/* Understanding Impact Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-green-800 border-b border-green-200 pb-2">Understanding PVL's Impact</h2>
          
          <Card className="p-8 mb-8 bg-gray-50">
            <p className="mb-6">
              The damage caused by PVL can lead to long-term neurological and developmental issues, including motor control problems, cerebral palsy, and cognitive impairments. Early detection and supportive care are crucial for managing and mitigating the effects of this condition in affected infants.
            </p>
            
       
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <h3 className="font-semibold text-lg mb-2 text-yellow-800">The Emotional Journey</h3>
              <p className="mb-4">
                For families, the journey with PVL begins with hope for their newborn's survival, only to be met with the harsh reality of a complex medical condition. The sight of a vulnerable infant, battling neurological deficits, is a painful and emotional experience. Parents endure immense mental anguish as they navigate an uncertain future, unsure if their child will ever walk, speak, or lead a normal life.
              </p>
              <p>
                While medical advancements continue, PVL remains a challenging diagnosis with no guaranteed path to recovery. The ongoing care, therapies, and emotional toll can be overwhelming for parents. In these trying moments, the support of compassionate medical professionals and access to early interventions are crucial in helping both the child and family cope with the lasting effects of this devastating condition.
              </p>
            </div>
          </Card>
          
          <Card className="p-6 bg-green-50 border border-green-200">
            <div className="flex items-start gap-4">
              <Users className="h-10 w-10 text-green-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-2 text-green-800">Ayurvedic Approach to Supporting PVL Patients</h3>
                <p>
                  At CBM's Sri Amba Ayurveda Aushadhalaya, we understand the complex challenges faced by families dealing with PVL. Our traditional Ayurvedic approaches focus on enhancing the child's neurological development, supporting overall health, and providing relief from associated symptoms. Our treatments are gentle, personalized, and designed to work alongside conventional medical care.
                </p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}