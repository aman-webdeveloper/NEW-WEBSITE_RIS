import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, User, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { blogsData } from '../../data/blogsData';

interface BlogGridProps {
  onBlogClick: (blogId: string) => void;
}

const categoryColors: Record<string, string> = {
  Business: 'bg-blue-500',
  Maintenance: 'bg-green-500',
  'IT Support': 'bg-purple-500',
  Hardware: 'bg-orange-500',
  Security: 'bg-red-500',
  Infrastructure: 'bg-teal-500',
};

export function BlogGrid({ onBlogClick }: BlogGridProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E4E4E7]"
            >
              {/* Featured Image */}
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 ${
                      categoryColors[blog.category] || 'bg-gray-500'
                    } text-white text-xs rounded-full`}
                  >
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-xs text-[#666666]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#1A1A1A] mb-3 line-clamp-2 group-hover:text-[#0066FF] transition-colors">
                  {blog.title}
                </h3>

                {/* Intro */}
                <p className="text-sm text-[#666666] mb-4 line-clamp-3 leading-relaxed">
                  {blog.intro}
                </p>

                {/* Author */}
                <div className="flex items-center gap-2 mb-4 text-xs text-[#888888]">
                  <User className="w-3 h-3" />
                  <span>{blog.author}</span>
                </div>

                {/* Read More Button */}
                <Button
                  onClick={() => onBlogClick(blog.id)}
                  variant="ghost"
                  className="w-full justify-between group/btn hover:bg-[#0066FF]/10 transition-all"
                >
                  <span className="group-hover/btn:text-[#0066FF] transition-colors">
                    Read More
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 group-hover/btn:text-[#0066FF] transition-all" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
