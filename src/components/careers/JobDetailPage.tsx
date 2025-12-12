import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, MapPin, Clock, Briefcase, CheckCircle, Upload, X } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Job } from '../../data/jobsData';

interface JobDetailPageProps {
  job: Job;
  onBack: () => void;
}

export function JobDetailPage({ job, onBack }: JobDetailPageProps) {
  const [showApplication, setShowApplication] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    whyHire: '',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    console.log('Would be sent to: raghav@randomitsolutions.com');
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setShowApplication(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: null,
        whyHire: '',
      });
    }, 5000);
  };

  return (
    <div className="bg-[#F5F5F7] min-h-screen">
      {/* Header */}
      <section className="relative py-12 bg-gradient-to-br from-white via-[#F5F5F7] to-[#E8F0FE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button onClick={onBack} variant="ghost" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Jobs
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row gap-8"
          >
            <div className="flex-1">
              <h1 className="text-[#1A1A1A] mb-4">{job.title}</h1>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-[#666666]">
                  <MapPin className="w-5 h-5 text-[#0066FF]" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-[#666666]">
                  <Briefcase className="w-5 h-5 text-[#0066FF]" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-2 text-[#666666]">
                  <Clock className="w-5 h-5 text-[#0066FF]" />
                  <span>{job.experience}</span>
                </div>
              </div>

              <Button
                onClick={() => setShowApplication(true)}
                className="bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white px-8"
              >
                Apply for this Position
              </Button>
            </div>

            <div className="w-full md:w-80">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={job.image}
                  alt={job.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Skills Required */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#1A1A1A] mb-6">Skills Required</h2>
              <div className="flex flex-wrap gap-3">
                {job.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#F5F5F7] text-[#444444] rounded-xl border border-[#E4E4E7]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#1A1A1A] mb-6">Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0066FF] mt-1 flex-shrink-0" />
                    <span className="text-[#444444]">{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#1A1A1A] mb-6">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-[#444444]">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      <AnimatePresence>
        {showApplication && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => !isSubmitted && setShowApplication(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {!isSubmitted ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-[#1A1A1A]">Apply for {job.title}</h2>
                    <button
                      onClick={() => setShowApplication(false)}
                      className="p-2 hover:bg-[#F5F5F7] rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm text-[#444444] mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-[#444444] mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-[#444444] mb-2">Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-[#444444] mb-2">Resume (PDF) *</label>
                      <div className="relative">
                        <input
                          type="file"
                          accept=".pdf"
                          required
                          onChange={handleFileChange}
                          className="hidden"
                          id="resume-upload"
                        />
                        <label
                          htmlFor="resume-upload"
                          className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-dashed border-[#E4E4E7] hover:border-[#0066FF] cursor-pointer transition-all"
                        >
                          <Upload className="w-5 h-5 text-[#0066FF]" />
                          <span className="text-[#666666]">
                            {formData.resume ? formData.resume.name : 'Upload Resume'}
                          </span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-[#444444] mb-2">
                        Why should we hire you? *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.whyHire}
                        onChange={(e) => setFormData({ ...formData, whyHire: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E4E4E7] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all resize-none"
                        placeholder="Tell us why you're the perfect fit for this role..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0066FF] to-[#0052CC] text-white py-6"
                    >
                      Submit Application
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring' }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-[#1A1A1A] mb-4">Application Submitted!</h3>
                  <p className="text-[#666666]">
                    Thank you for applying. We'll review your application and get back to you soon.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
