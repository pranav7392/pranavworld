import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Instagram, MessageSquare, Rocket, ExternalLink, Cpu, Layout, Palette } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Overlay() {
  const navigate = useNavigate();
  return (
    <div id="overlay-container" className="relative z-10 w-full overflow-hidden pointer-events-none">
      {/* Hero Section */}
      <Section className="h-[200vh] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pointer-events-auto"
        >
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 text-glow">
            PRANAV
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground uppercase tracking-[0.5em] mb-8">
            Founder of JSParK
          </p>
          <div className="flex flex-col items-center gap-4">
            <span className="text-primary animate-pulse text-lg md:text-xl font-medium tracking-widest">ENTER MY WORLD</span>
            <span className="text-muted-foreground text-sm uppercase tracking-widest mt-12 animate-bounce opacity-50">
              Scroll to begin the journey
            </span>
          </div>
        </motion.div>
      </Section>

      {/* Origin Section */}
      <Section className="h-[200vh] flex items-center px-8 md:px-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl pointer-events-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">ORIGIN</h2>
          <p className="text-2xl md:text-5xl leading-tight font-bold">
            Hi, I'm Pranav. I don't just build websites. <br />
            <span className="text-primary italic">I build worlds.</span>
          </p>
          <p className="text-muted-foreground mt-8 text-xl leading-relaxed">
            JSParK was born from curiosity. A quest to merge reality with the digital unknown. Every line of code is a brushstroke on the canvas of the future.
          </p>
        </motion.div>
      </Section>

      {/* Skills Section */}
      <Section className="h-[200vh] flex items-center justify-end px-8 md:px-24">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-right pointer-events-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text text-right">POWERS</h2>
          <p className="text-2xl md:text-5xl leading-tight font-bold">
            At JSParK, tools are just the beginning.
            <span className="text-secondary block mt-4">The real power is imagination.</span>
          </p>
          <div className="mt-12 flex flex-wrap justify-end gap-6">
            <SkillBadge icon={<Layout className="w-5 h-5" />} text="Web Architecture" color="border-primary text-primary" />
            <SkillBadge icon={<Cpu className="w-5 h-5" />} text="Neural Systems" color="border-secondary text-secondary" />
            <SkillBadge icon={<Palette className="w-5 h-5" />} text="Immersive Design" color="border-accent text-accent" />
          </div>
        </motion.div>
      </Section>

      {/* Projects Section */}
      <Section className="h-[200vh] flex flex-col items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-24 pointer-events-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">PORTALS</h2>
          <p className="text-2xl md:text-4xl italic text-muted-foreground font-serif">
            "Every project is a gateway."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl pointer-events-auto">
          <ProjectCard 
            title="The Gastronome" 
            desc="A sensory-driven digital ecosystem for elite restaurants." 
            tech="React • Three.js • GSAP" 
            imageUrl="https://miaoda-conversation-file.s3cdn.medo.dev/user-9byoztc9tssg/conv-9byq3pqym5mo/20260201/file-9c1slg217uo0.png"
            details="The Gastronome isn't just a menu; it's a cinematic journey. We transformed traditional dining into an interactive experience where guests explore ingredients through 3D visualizations, blurring the line between the kitchen and the digital realm. The interface uses real-time fluid simulations to represent flavors, creating a pre-tasting visual feast."
          />
          <ProjectCard 
            title="Luxe Stay" 
            desc="Immersive volumetric booking platform for luxury hotels." 
            tech="WebGL • Next.js • Tailwind" 
            imageUrl="https://miaoda-conversation-file.s3cdn.medo.dev/user-9byoztc9tssg/conv-9byq3pqym5mo/20260201/file-9c1x5var4mww.png"
            details="With Luxe Stay, we reinvented hospitality. Travelers can virtually inhabit their suites before arrival. This spatial interface increased booking conversions by 40% by selling an emotion, not just a room. High-fidelity textures and dynamic lighting ensure the virtual room feels as warm and inviting as the real one."
          />
          <ProjectCard 
            title="Revive Garage" 
            desc="High-performance diagnostic dashboard for modern garages." 
            tech="Rust • WASM • Real-time Data" 
            imageUrl="https://miaoda-conversation-file.s3cdn.medo.dev/user-9byoztc9tssg/conv-9byq3pqym5mo/20260201/file-9c21c9fk7dhc.png"
            details="Revive visualizes automotive diagnostics as a living mechanical entity. Mechanics can pinpoint issues in a 3D exploded view of the vehicle, making maintenance intuitive, fast, and futuristic. The dashboard bridges the gap between raw telemetry data and visual clarity."
          />
          <ProjectCard 
            title="Scholar's Path" 
            desc="Immersive learning ecosystem for advanced classes." 
            tech="React Three Fiber • AI • Node" 
            imageUrl="https://miaoda-conversation-file.s3cdn.medo.dev/user-9byoztc9tssg/conv-9byq3pqym5mo/20260201/file-9c2a4e5tvv2a.png"
            details="Scholar's Path transcends the screen. We built a spatial knowledge node system where students navigate complex subjects like galaxy explorers, turning passive learning into active exploration. It leverages AI to dynamically generate learning paths based on the student's spatial curiosity."
          />
        </div>
      </Section>

      {/* Future Section */}
      <Section className="h-[200vh] flex items-center justify-center text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl pointer-events-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 gradient-text uppercase tracking-[0.2em]">THE FUTURE</h2>
          <p className="text-3xl md:text-6xl font-light leading-tight">
            The future isn't designed. <br />
            It's <span className="text-primary font-bold">imagined</span> first.
          </p>
          <div className="w-24 h-px bg-primary/50 mx-auto my-12" />
          <p className="text-muted-foreground text-2xl font-serif italic">— Pranav, JSParK</p>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section className="h-screen flex flex-col items-center justify-center text-center px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="space-y-16 pointer-events-auto"
        >
          <div className="space-y-6">
            <h2 className="text-5xl md:text-9xl font-bold tracking-tighter text-glow">
              READY TO ENTER?
            </h2>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-2xl mx-auto">
              The boundaries of the digital world are fading. Let's build something unreal together.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="h-20 px-16 text-xl rounded-full cinematic-glow group bg-primary hover:bg-primary/90"
            >
              <MessageSquare className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Contact Pranav
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.location.href = 'https://jsparkstudio.netlify.app/'}
              className="h-20 px-16 text-xl rounded-full border-primary/50 hover:bg-primary/10 group backdrop-blur-sm"
            >
              <Rocket className="mr-3 h-6 w-6 group-hover:translate-y--1 group-hover:translate-x-1 transition-transform" />
              Start a Project
            </Button>
          </div>

          <div className="flex gap-12 justify-center pt-12">
            <SocialLink href="#" icon={<Instagram className="h-10 w-10" />} label="Instagram" />
          </div>
          
          <div className="pt-24 space-y-4">
            <div className="h-px w-12 bg-border mx-auto" />
            <p className="text-sm text-muted-foreground opacity-40 tracking-widest uppercase">
              &copy; 2026 PRANAV'S WORLD • JSParK EXPERIENCE
            </p>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}

function Section({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={className}>
      {children}
    </section>
  );
}

function SkillBadge({ icon, text, color }: { icon: React.ReactNode, text: string, color: string }) {
  return (
    <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl border backdrop-blur-md ${color} bg-background/5 transition-transform hover:scale-105`}>
      {icon}
      <span className="text-lg font-semibold uppercase tracking-wider">{text}</span>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a href={href} aria-label={label} className="text-muted-foreground hover:text-primary transition-all hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
      {icon}
    </a>
  );
}

function ProjectCard({ title, desc, tech, details, imageUrl }: { title: string, desc: string, tech: string, details: string, imageUrl: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -15, scale: 1.02 }}
          className="p-10 rounded-[2rem] bg-card/30 backdrop-blur-2xl border border-white/5 hover:border-primary/50 transition-all group cursor-pointer relative overflow-hidden h-full flex flex-col"
        >
          <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
            <Rocket className="text-primary h-8 w-8" />
          </div>
          
          <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed flex-grow">{desc}</p>
          
          <div className="flex flex-col gap-4 mt-auto">
            <div className="h-px w-full bg-white/5" />
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono text-primary/60 uppercase tracking-[0.2em]">{tech}</span>
              <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">READ STORY →</span>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      
      <DialogContent className="bg-background/95 backdrop-blur-2xl border-white/10 text-foreground sm:max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Rocket className="text-primary h-6 w-6" />
            </div>
            <div>
              <DialogTitle className="text-3xl font-bold tracking-tight">{title}</DialogTitle>
              <DialogDescription className="text-primary font-mono text-sm uppercase tracking-widest mt-1">
                {tech}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 py-6">
          <div className="aspect-video rounded-2xl bg-muted/20 border border-white/5 flex items-center justify-center relative overflow-hidden shadow-2xl">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Cinematic Description</h4>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {details}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
