import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const mapUrl = "https://www.google.com/maps/place/4th,+153,+8th+Main+Rd,+Ashok+Nagar,+Banashankari+1st+Stage,+Banashankari,+Bengaluru,+Karnataka+560050";
  
  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Get in touch with us for appointments, inquiries, or to learn more about our Ayurvedic treatments and products.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Input placeholder="Subject" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="h-32" />
              </div>
              <Button className="w-full bg-green-700 hover:bg-green-800">
                Send Message
              </Button>
            </form>
          </Card>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:dr.bhavya.ch@gmail.com" className="hover:text-green-700">
                        dr.bhavya.ch@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+919980640330" className="hover:text-green-700">+91 99806 40330</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Clinic</h3>
                    <p className="text-muted-foreground">
                      153, 8th Cross, 3rd/4th Main, Chamarajpet,<br />
                      Bengaluru 560 018
                    </p>
                    <p className="mt-1">
                      <a href="tel:+918026676868" className="hover:text-green-700">+91 80 2667 6868</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Panchakarma Center</h3>
                    <p className="text-muted-foreground">
                      10, Behind Old Police Station, Konnankunte,<br />
                      Bengaluru 560 062
                    </p>
                    <p className="mt-1">
                      <a href="tel:+919980640330" className="hover:text-green-700">+91 99806 40330</a>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Hours of Operation</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Chamarajpet Clinic</h3>
                    <p className="text-muted-foreground">
                      Monday to Saturday: 11 AM to 4 PM IST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Konnankunte Clinic</h3>
                    <p className="text-muted-foreground">
                      Monday to Saturday: 6 PM to 8 PM IST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Panchakarma Center</h3>
                    <p className="text-muted-foreground">
                      Monday to Sunday: 8 AM to 8 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-12">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Find Us Here</h2>
              <Link 
                href={mapUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-green-700 hover:text-green-800"
              >
                <span className="mr-1">Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2881398968894!2d77.56541297517771!3d12.954037887355724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15de3a34d7ad%3A0xc8a8cbf0728fde0!2s4th%2C%20153%2C%208th%20Main%20Rd%2C%20Ashok%20Nagar%2C%20Banashankari%201st%20Stage%2C%20Banashankari%2C%20Bengaluru%2C%20Karnataka%20560050!5e0!3m2!1sen!2sin!4v1713399127089!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <p className="mt-4 text-muted-foreground text-center">
              4th, 153, 8th Main Rd, Ashok Nagar, Banashankari 1st Stage, Banashankari, Bengaluru, Karnataka 560050
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}