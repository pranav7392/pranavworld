import Experience from '@/components/Experience/Experience';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

export default function Portfolio() {
  useSmoothScroll();

  return (
    <main className="bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Experience />
    </main>
  );
}
