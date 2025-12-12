import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Blog, blogsData } from '../../data/blogsData';

interface BlogPostPageProps {
  blog: Blog;
  onBack: () => void;
}

export function BlogPostPage({ blog, onBack }: BlogPostPageProps) {
  const relatedPosts = blogsData
    .filter((b) => b.id !== blog.id && b.category === blog.category)
    .slice(0, 3);

  return (
    <div className="bg-[#F5F5F7] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-white via-[#F5F5F7] to-[#E8F0FE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button onClick={onBack} variant="ghost" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Blogs
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Category */}
            <span className="inline-block px-4 py-1 bg-[#0066FF] text-white text-sm rounded-full mb-4">
              {blog.category}
            </span>

            {/* Title */}
            <h1 className="text-[#1A1A1A] mb-6">{blog.title}</h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-[#666666] mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-[#0066FF]" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#0066FF]" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#0066FF]" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src={blog.image}
              alt={blog.title}
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xl text-[#444444] leading-relaxed">
              {blog.intro}
            </p>
          </motion.div>

          {/* Main Content */}
          {blog.content && (
            <div className="space-y-8">
              {blog.content.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h2 className="text-[#1A1A1A] mb-4">{section.heading}</h2>
                  <p className="text-[#444444] leading-relaxed">{section.text}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Share Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-[#E4E4E7]"
          >
            <div className="flex items-center gap-4">
              <Share2 className="w-5 h-5 text-[#666666]" />
              <span className="text-[#666666]">Share this article:</span>
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-[#F5F5F7] hover:bg-blue-500 hover:text-white rounded-full flex items-center justify-center transition-all">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-[#F5F5F7] hover:bg-sky-500 hover:text-white rounded-full flex items-center justify-center transition-all">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-[#F5F5F7] hover:bg-blue-700 hover:text-white rounded-full flex items-center justify-center transition-all">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-[#F5F5F7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#1A1A1A] mb-12 text-center"
            >
              Related Articles
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedBlog, index) => (
                <motion.div
                  key={relatedBlog.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => {
                    onBack();
                    setTimeout(() => {
                      const element = document.getElementById(relatedBlog.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  <div className="h-40 overflow-hidden">
                    <ImageWithFallback
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#1A1A1A] mb-2 line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-sm text-[#666666] line-clamp-2">
                      {relatedBlog.intro}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
