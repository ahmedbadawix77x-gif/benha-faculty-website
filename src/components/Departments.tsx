import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { DEPARTMENTS } from "../constants";
import { Department } from "../types";

interface DepartmentsProps {
  onSelect: (dept: Department) => void;
}

export default function Departments({ onSelect }: DepartmentsProps) {
  return (
    <section id="departments" className="py-32 bg-white relative overflow-hidden" dir="rtl">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Sparkles className="text-blue-500 w-5 h-5" />
            <span className="text-blue-600 font-bold tracking-widest uppercase text-[10px] font-sans">Academic Programs</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-[#0A2540] mb-6 font-arabic leading-tight"
          >
            استكشف أقسامنا <br /> <span className="text-blue-600">المتميزة</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#0A2540]/60 text-lg font-arabic font-medium leading-relaxed max-w-2xl mx-auto"
          >
            نقدم مجموعة متنوعة من التخصصات النوعية التي تجمع بين الجانب الأكاديمي والمهاري لتأهيلك لسوق العمل الحديث.
          </motion.p>
        </div>

        {/* Static Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEPARTMENTS.map((dept, index) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-blue-200 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  src={dept.image}
                  alt={dept.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Overlay Icon */}
                <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500 shadow-xl">
                  <ArrowRight className="text-blue-600 w-6 h-6 -rotate-45 group-hover:rotate-0 group-hover:text-white transition-all duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-4 font-arabic group-hover:text-blue-600 transition-colors">
                  {dept.title}
                </h3>
                <p className="text-[#0A2540]/50 text-base leading-relaxed mb-8 font-arabic line-clamp-3 flex-grow">
                  {dept.description}
                </p>
                
                <button
                  onClick={() => onSelect(dept)}
                  className="w-full py-4 bg-gray-50 hover:bg-blue-600 text-[#0A2540] hover:text-white rounded-[1.5rem] font-bold text-base transition-all border border-gray-100 hover:border-blue-500 font-arabic flex items-center justify-center gap-3 group/btn shadow-sm"
                >
                  تفاصيل القسم
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-[-6px] transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
