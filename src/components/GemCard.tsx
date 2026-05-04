import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import type { FC } from "react";

interface GemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const GemCard: FC<GemCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="group h-full flex flex-col border border-slate-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 bg-white rounded-[24px] overflow-hidden">
        <CardHeader className="p-8 pb-4">
          <div className="mb-6">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <Icon className="w-7 h-7" />
            </div>
          </div>
          <CardTitle className="text-2xl font-extrabold font-heading text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
            {title}
          </CardTitle>
          <CardDescription className="text-slate-500 leading-relaxed text-base mt-2 min-h-[56px]">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-0 mt-auto">
          <Button 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-6 rounded-full transition-all duration-300 group-hover:shadow-[0_10px_15px_-3px_rgba(79,70,229,0.2)] flex items-center justify-center gap-2"
          >
            Open Gem
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GemCard;
