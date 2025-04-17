import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import group from "../../group.png";
import sriramamurthy from "../../drmurthy.png";
import cherukupalli from "../../cherukupalli_srinivas.png";
import murthy from "../../drmurthy.png";
import bhavya from "../../bhavya.png";

export default function AboutUs() {
  const practitioners = [
    {
      name: "Sr. Sri Janamanchi Surya Narayan Shastri",
      period: "1820-1845",
      generation: "1st Generation"
    },
    {
      name: "Sri. Janamanchi Subbaiah Shastri",
      period: "1850-1925",
      generation: "2nd Generation"
    },
    {
      name: "Jr. Sri Janamanchi Surya Narayan Shastri",
      period: "1882-1927",
      generation: "3rd Generation"
    },
    {
      name: "Dr. Cherukupalli Srinivasiah",
      period: "1910-1981",
      generation: "4th Generation"
    },
    {
      name: "Dr. Cherukupalli Bhanu Murthy",
      period: "1978-Present",
      generation: "5th Generation"
    },
    {
      name: "Dr. Cherukupalli Bhavya",
      period: "2007-Present",
      generation: "6th Generation"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Ayurveda Introduction */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl italic mb-6">
              "auh vedayati iti ayurveda - ayu means long life, veda means knowledge"
            </p>
            <p className="mb-4 text-lg">
              Ayurveda is the science of life, the basic principle of ayurveda is maintaining the health of a healthy individual and there by curing the diseased. Ayurveda is as old as vedas, it is said to be the part of rig and atharvana veda. Ancient mythology contends that the concept and essence of ayurveda was revealed by the creator of the world himself-lord bramha.
            </p>
          </div>
          
          <div className="text-left mt-8">
            <p className="mb-6">
              CBM's Sri Amba Ayurveda Aushadhalaya, located in the vibrant city of Bangalore, Karnataka, India, stands as a sanctuary of hope and holistic healing for patients battling neurological and other various disorders. With over 125 years of unparalleled expertise, this esteemed clinic has emerged as a beacon in the world of Ayurveda, blending ancient wisdom with modern medical understanding to offer comprehensive, individualized treatments.
            </p>
            <p className="mb-6">
              As the legacy of six generations of Ayurvedic practitioners, CBM's Sri Amba Ayurveda Aushadhalaya is committed to not only preserving its rich heritage but also to evolving its practices in response to the ever-changing needs of contemporary healthcare. These physicians are more than just skilled practitioners—they are custodians of an enduring tradition, carefully balancing the ancient knowledge of Ayurveda with the demands of modern-day medicine.
            </p>
          </div>
        </div>
      </section>

      {/* Disciplic Succession */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Sri CBM'S Amba Ayurveda Disciplic Succession</h2>
          <p className="text-center mb-8">
            Ayurveda doctors practicing through six generations represent a profound legacy of traditional healing passed down through familial lineage. Each generation inherits and refines ancient knowledge, integrating it with contemporary understanding to treat ailments holistically.
          </p>
          
          <div className="mb-10 relative h-64 md:h-80 w-full">
            <Image 
              src={group} 
              alt="CBM Amba Ayurveda Group Photo" 
              fill
              className="object-contain"
            />
          </div>
          
          <div className="bg-white p-6 border border-green-100 rounded-lg shadow-sm">
            {practitioners.map((practitioner, index) => (
              <div key={index} className="flex items-center border-b border-gray-100 py-3 last:border-0">
                <p className="text-base md:text-lg w-full">
                  <span className="font-semibold text-green-800">{practitioner.name}</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-gray-700">{practitioner.period}</span>
                  <span className="ml-3 text-xs md:text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">{practitioner.generation}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dr. Marthi Poornachander Rao Section */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-4">Sri Dr. Marthi Poornachander Rao</h3>
              <p className="mb-4">
                Sri Dr. Marthi Poornachander Rao was truly a legendary figure in the field of Ayurveda, leaving an indelible mark on those fortunate enough to learn from him. With a teaching tenure spanning 14 years, beginning in 1989, his profound knowledge and dedication shaped my life with traditional healing wisdom. Born in 1910, he shared a unique bond with me as guru. He was the classmate of my beloved father Sri Dr. Cherukupalli Seenaiah.
              </p>
              <p>
                Sri Dr. Marthi Poornachander Rao's expertise as an Ayurvedic practitioner had inspired me a lasting legacy of holistic health and wellbeing. His teachings continue to resonate throughout my life, and given his enduring impact on the practice and philosophy of Ayurveda.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="relative h-64 w-full">
                <Image 
                  src={sriramamurthy} 
                  alt="Sri Dr. Marthi Poornachander Rao" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Legacy of Kalikiri Section with Image */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <div className="relative h-64 w-full">
                <Image 
                  src={cherukupalli} 
                  alt="Dr. Cherukupalli Srinivasiah" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-xl font-bold mb-4">The Legacy of Kalikiri Vaidya Parampara: Traditional Healing</h2>
              <p className="mb-4">
                At the heart of our practice lies a unique and rare indigenous knowledge of medical science, meticulously passed down through generations. This vibrant traditional system of medicine evolves with the experiences and insights gained over time, adapting to the changing constitutions of the human body. Each treatment is carefully tailored to the individual, taking into account their specific body constitution, the severity of their condition, and the unique manifestations of their ailments.
              </p>
              <p>
                As the sixth generation of doctors from the esteemed Kalikiri Vaidya Parampara, we proudly continue this rich legacy from Kalikiri village in Chittoor district, Andhra Pradesh, India. Our founder, Dr. Bhanu Murthy, is the son of the late Dr. Srinivasaiah, a highly respected physician renowned for his ability to treat a wide range of conditions, including paralysis, poliomyelitis, epilepsy, and more. Dr. Srinivasaiah's patient-specific, homemade remedies earned him a household name in the Rayalaseema region of Andhra Pradesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. C. Bhanu Murthy Section */}
      <section className="py-16 bg-amber-700 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="relative h-72 w-full">
                <Image 
                  src={murthy} 
                  alt="Dr. C. Bhanu Murthy" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-2">Dr. C. Bhanu Murthy</h3>
              <p className="font-medium mb-4">Retd. Chief Ayurvedic Doctor and Advisor</p>
              <p className="mb-4">
                Dr. C. Bhanu Murthy has been an eminent practitioner of Ayurveda system of medicine for more than 40 years. He studied the system formally and then learnt the rigorous science and art of Ayurveda from the renowned practitioner and his devoted father Sri Cherukupalli Sreenivasiah at Amba Ayurveda Aushadhalaya, Kalikiri, Chittoor district, Andhra Pradesh, India, prior to establishing himself in Bangalore.
              </p>
              <p>
                He is the 5th generation doctor in the same tradition and has effectively treated some rare diseases where modern medicine could offer very little. He also studied Ayurveda under the guidance of his father's classmate Nadi Praveena Sri Maruthi Poornachander Rao for 15 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. C. Bhavya Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-2">Dr. C. Bhavya B.A.M.S</h3>
              <p className="font-medium mb-4">Chief Medical Ayurvedic Doctor</p>
              <p>
                Dr. C. Bhavya is the 6th generation doctor who received the knowledge from her father Dr. Bhanumurthy. She has practiced Ayurveda under the guidance of her father and has over 15 years of experience as a practitioner. She is the chief doctor now and continuing the tradition as it is intact in the same spirit.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="relative h-72 w-full">
                <Image 
                  src={bhavya} 
                  alt="Dr. C. Bhavya" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <p className="mb-6">
            What sets this clinic apart is its commitment to making high-quality Ayurvedic treatment accessible to everyone, regardless of social or economic background. The traditional ayurvedic formulations, meticulously prepared by the clinic, stay true to the practices of old, maintaining the original texture and stability, preserving the ancient methods that ensure both potency and efficacy. This dedication to accuracy and tradition is a hallmark of these physicians and making it a trusted institution in the field of Ayurvedic medicine.
          </p>
          <p>
            The clinic has earned a remarkable reputation for successfully treating complex neurological disorders, where modern medicine often has limited options. Thousands of patients across national and international borders, who once faced uncertain futures, have found hope and healing here, thanks to the expertise of the CBM Sri Amba Aushadhalaya physicians. Their treatments have transformed thousands of lives, restoring health and offering a chance at a normal, fulfilling life and remains a vital part of healthcare for current and future generations.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-10 bg-green-700 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="mb-4">
            Our commitment to this time-tested and proven approach to medicine continues to guide us as we strive to provide personalized care that honors our ancestral knowledge while addressing the needs of modern patients.
          </p>
          <Button className="bg-white text-green-700 hover:bg-gray-100">
            Book an Appointment
          </Button>
        </div>
      </section>
    </main>
  );
}