import { motion } from 'framer-motion';
import { Mail, Phone, ArrowLeft, Github, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-12 hover:text-primary transition-colors group p-0"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to World
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 gradient-text">
                LET'S BUILD
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Ready to turn your imagination into a digital reality?
              </p>
            </div>

            <div className="space-y-6">
              <ContactItem
                icon={<Mail className="h-6 w-6 text-primary" />}
                label="Email"
                value="jspark.itservices@gmail.com"
                href="mailto:jspark.itservices@gmail.com"
              />
              <ContactItem
                icon={<Phone className="h-6 w-6 text-secondary" />}
                label="Mobile"
                value="+91 87996 03770"
                href="tel:8799603770"
              />
              <ContactItem
                icon={<MapPin className="h-6 w-6 text-accent" />}
                label="Location"
                value="Global Delivery"
              />
            </div>

            <div className="flex gap-6 pt-8">
              <a href="#" className="p-3 rounded-xl bg-muted/50 hover:bg-primary/20 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-muted/50 hover:bg-secondary/20 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-[2.5rem] bg-card/30 backdrop-blur-2xl border border-white/5 relative overflow-hidden"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Quick Message</h3>
              <p className="text-muted-foreground">The digital world moves fast. So do we. Drop a message and let's start the journey.</p>
              
              <div className="pt-4 space-y-4">
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <p className="text-sm text-primary uppercase tracking-widest font-bold mb-1">Response Time</p>
                  <p className="text-lg">Usually within 24 hours</p>
                </div>
                <Button className="w-full h-14 rounded-2xl text-lg cinematic-glow" asChild>
                  <a href="mailto:jspark.itservices@gmail.com">Send Direct Email</a>
                </Button>
              </div>
            </div>
            
            {/* Subtle scanline effect inside card */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
          </motion.div>
        </div>

        <div className="mt-24 text-center opacity-20">
          <p className="text-xs uppercase tracking-[0.5em]">&copy; 2026 JSParK • DESIGNED FOR THE FUTURE</p>
        </div>
      </motion.div>
    </div>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-6 group">
      <div className="h-14 w-14 rounded-2xl bg-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium mb-1">{label}</p>
        <p className="text-xl font-semibold group-hover:text-primary transition-colors">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href} className="block">{content}</a> : content;
}
