import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { jobsData } from '../../data/jobsData';

interface JobListingsProps {
  onJobClick: (jobId: string) => void;
}

export function JobListings({ onJobClick }: JobListingsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#1A1A1A] mb-4">Open Positions</h2>
          <p className="text-[#666666]">Explore exciting career opportunities with us</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobsData.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E4E4E7] group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={job.image}
                  alt={job.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs text-[#0066FF]">
                    {job.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-[#1A1A1A] mb-3">{job.title}</h3>
                
                {/* Job Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#666666]">
                    <MapPin className="w-4 h-4 text-[#0066FF]" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#666666]">
                    <Briefcase className="w-4 h-4 text-[#0066FF]" />
                    <span>{job.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#666666]">
                    <Clock className="w-4 h-4 text-[#0066FF]" />
                    <span>{job.experience} experience</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {job.skills.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#F5F5F7] text-xs text-[#444444] rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 3 && (
                      <span className="px-3 py-1 bg-[#F5F5F7] text-xs text-[#444444] rounded-full">
                        +{job.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Apply Button */}
                <Button
                  onClick={() => onJobClick(job.id)}
                  className="w-full bg-gradient-to-r from-[#0066FF] to-[#0052CC] hover:from-[#0052CC] hover:to-[#0066FF] text-white group/btn"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
