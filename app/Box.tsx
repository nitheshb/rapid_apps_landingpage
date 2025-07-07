import { cn } from "@/lib/utils";
import Marquee from '../components/ui/marquee'

interface Review {
  name: string;
  category: string;
  body: string;
}

const reviews: Review[] = [
  {
    name: "Slide Decks",
    category: "design",
    body: "Create beautiful presentations",
  },
  {
    name: "Webflow",
    category: "development",
    body: "Build responsive websites",
  },
  {
    name: "Brand Guides",
    category: "branding",
    body: "Maintain brand consistency",
  },
  {
    name: "Icons",
    category: "assets",
    body: "Custom icon libraries",
  },
  {
    name: "Blog Graphics",
    category: "content",
    body: "Engaging visual content",
  },
  {
    name: "Social Media",
    category: "marketing",
    body: "Boost your presence",
  },
  {
    name: "Landing Pages",
    category: "web",
    body: "Convert visitors",
  },
  {
    name: "Mobile Apps",
    category: "development",
    body: "Native applications",
  }
];




const bgColors: Record<string, string> = {
  "Slide Decks": "#FF5733",
  "Webflow": "#A020F0",
  "Brand Guides": "#4169E1",
  "Icons": "#FFD700",
  "Blog Graphics": "#00FA9A",
  "Social media": "#FF4500", 
  "Landing Pages": "#FF69B4", 
  "Mobile Apps": "#4169E1"
};

const ReviewCard: React.FC<ReviewCardProps> = ({ name }) => {
  return (
    <div
      className={cn(
        "relative mx-2 px-6 py-3  rounded-full cursor-pointer transition-all duration-300",
        "hover:opacity-90 text-white font-medium"
      )}
      style={{ 
        backgroundColor: bgColors[name] || "#4169E1", // Fallback color
      }}
    >
      <div className="text-center whitespace-nowrap">
        {name}
      </div>
    </div>
  );
};


interface ReviewCardProps {
  name: string;
  category: string;
  body: string;
}



export const MarqueeDemo: React.FC = () => {
  return (
    <div className="relative my-20 flex h-24  flex-col  items-center justify-center overflow-hidden rounded-lg ">
      <Marquee pauseOnHover className="[--duration:30s]">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeDemo;