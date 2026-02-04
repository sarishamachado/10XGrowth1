import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { LucideIcon, ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string; // Tailwind color class like "bg-blue-500" or hex
  tags: string[];
}

export function ServiceCard({ title, description, icon: Icon, color, tags }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse rotation logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * 20); // 20 degrees max tilt
    y.set(yPct * -20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group h-[420px] w-full max-w-sm rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-between backdrop-blur-md shadow-2xl overflow-hidden cursor-pointer"
    >
      {/* Background Gradient Blob */}
      <div 
        className="absolute -right-20 -top-20 w-60 h-60 rounded-full blur-[100px] opacity-20 transition-all duration-500 group-hover:opacity-40"
        style={{ backgroundColor: color }}
      />

      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg"
          style={{ backgroundColor: `${color}20` }} // 20% opacity of color if possible, or simplified logic
        >
          <Icon size={32} style={{ color }} />
        </div>

        <h3 className="text-2xl font-bold mb-4 font-display text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-white/5 border border-white/5 text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
          Learn more <ArrowUpRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}
