import React from 'react';
import { motion } from 'motion/react';
import { 
  Lightbulb, 
  Cpu, 
  Binary, 
  CheckCircle2, 
  Users2, 
  Compass, 
  Building2, 
  CalendarDays,
  ShieldAlert
} from 'lucide-react';
import { SYMPOSIUM_INFO } from '../data/eventData';
import { CollegeLogo } from './CollegeLogo';

export const AboutSection: React.FC = () => {
  const opportunities = [
    {
      icon: Lightbulb,
      title: "Present innovative ideas",
      desc: "Share your original concepts, research methodologies, and academic papers formatted in IEEE standard."
    },
    {
      icon: Cpu,
      title: "Demonstrate technical projects",
      desc: "Showcase working software systems, embedded solutions, and real-world technology prototypes."
    },
    {
      icon: Binary,
      title: "Solve problems",
      desc: "Tackle logic challenges, rectify code defects, and optimize algorithms under competitive constraints."
    },
    {
      icon: CheckCircle2,
      title: "Test technical knowledge",
      desc: "Validate your mastery of core computer science fundamentals, emerging architectures, and tech trends."
    },
    {
      icon: Users2,
      title: "Collaborate with students",
      desc: "Engage with peers from colleges and universities across the nation in collaborative two-member teams."
    },
    {
      icon: Compass,
      title: "Explore emerging technologies",
      desc: "Broaden your technical horizons through challenging rounds that test lateral thinking and creative communication."
    }
  ];

  return (
    <section id="about" className="py-10 sm:py-14 bg-transparent relative overflow-hidden border-b border-[#E8EEF8]">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Detailed Narrative */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F4F8FF] border border-[#E8EEF8] text-[11px] font-semibold text-[#123B8F] uppercase tracking-wider mb-4 w-fit font-mono-code">
              About The Symposium
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight font-display mb-6 leading-tight">
              Where ideas become <span className="text-gradient-brand-handwriting text-4xl sm:text-5xl lg:text-6xl">impact.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              <p>
                <strong className="text-[#111827] font-semibold">XMPLARZ’26</strong> is a premier national-level technical symposium organized by the <strong className="text-[#123B8F] font-semibold">{SYMPOSIUM_INFO.department}</strong> at <strong className="text-[#111827] font-semibold">{SYMPOSIUM_INFO.college}</strong>.
              </p>
              <p>
                Driven by the guiding ethos, <span className="italic text-[#123B8F] font-medium">“{SYMPOSIUM_INFO.tagline}”</span>, this symposium serves as a national nexus where aspiring engineers, problem-solvers, and tech creators converge to push boundaries, exchange technical insights, and showcase innovation.
              </p>
            </div>

            {/* Institution Address Info Snippet */}
            <div className="mt-8 p-4 rounded-xl bg-[#F4F8FF] border border-[#E8EEF8] flex items-center gap-4 card-hover-modern">
              <CollegeLogo size={54} alt="Mahendra Institute of Technology Logo" />
              <div className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                <span className="font-bold text-[#123B8F] block text-sm mb-0.5">
                  Hosted at {SYMPOSIUM_INFO.college}
                </span>
                {SYMPOSIUM_INFO.address}
              </div>
            </div>

            {/* Team Requirement Highlight */}
            <div className="mt-4 p-4 rounded-xl bg-white border border-[#F5B82E]/40 shadow-2xs flex items-center gap-3 card-hover-modern">
              <ShieldAlert className="w-5 h-5 text-[#F5B82E] shrink-0" />
              <div className="text-xs sm:text-sm font-medium text-[#111827]">
                <strong className="font-semibold text-[#123B8F]">Official Participation Rule:</strong> Every team must contain exactly two members.
              </div>
            </div>
          </div>

          {/* Right Column: Visual Information Composition (6 Opportunities) */}
          <div className="lg:col-span-6">
            <div className="bg-[#F4F8FF]/60 border border-[#E8EEF8] rounded-2xl p-6 sm:p-8 card-hover-modern">
              <div className="flex items-center justify-between border-b border-[#E8EEF8] pb-4 mb-6">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#111827] font-display">
                    Symposium Focus Areas
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Structured challenges designed to elevate academic and practical competence
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#E8EEF8] text-[11px] font-mono-code text-[#123B8F]">
                  <CalendarDays className="w-3.5 h-3.5 text-[#168BFF]" />
                  <span>30.09.2026</span>
                </div>
              </div>

              {/* 6 Key Opportunities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {opportunities.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -2 }}
                      className="p-4 rounded-xl bg-white border border-[#E8EEF8] hover:border-[#168BFF]/40 transition-all duration-200 shadow-2xs group card-hover-modern"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F4F8FF] border border-[#E8EEF8] group-hover:border-[#168BFF]/30 flex items-center justify-center text-[#123B8F] group-hover:text-[#168BFF] transition-colors mb-2.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#111827] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#64748B] leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8EEF8] flex items-center justify-between text-xs text-[#64748B]">
                <span>Format: 4 Technical & 4 Non-Technical events</span>
                <span className="font-semibold text-[#123B8F]">Reg Fee: ₹250 / team</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
