import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { WhyChooseUs } from './components/WhyChooseUs';
import { StrengthMetrics } from './components/StrengthMetrics';
import { TrustedClients } from './components/TrustedClients';
import { ServicesSection } from './components/ServicesSection';
import { TrustedPartners } from './components/TrustedPartners';
import { DigitalCommunity } from './components/DigitalCommunity';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { AboutHero } from './components/about/AboutHero';
import { WhoWeAre } from './components/about/WhoWeAre';
import { AboutWhyChooseUs } from './components/about/AboutWhyChooseUs';
import { OurJourney } from './components/about/OurJourney';
import { MissionVision } from './components/about/MissionVision';
import { CoreValues } from './components/about/CoreValues';
import { ExpertiseStrip } from './components/about/ExpertiseStrip';
import { CTABanner } from './components/about/CTABanner';
import { ServicesHero } from './components/services/ServicesHero';
import { ServicesGrid } from './components/services/ServicesGrid';
import { ServiceDetailPage } from './components/services/ServiceDetailPage';
import { ContactHero } from './components/contact/ContactHero';
import { ContactCards } from './components/contact/ContactCards';
import { ContactForm } from './components/contact/ContactForm';
import { ContactMap } from './components/contact/ContactMap';
import { CareersHero } from './components/careers/CareersHero';
import { JobListings } from './components/careers/JobListings';
import { JobDetailPage } from './components/careers/JobDetailPage';
import { BlogHero } from './components/blog/BlogHero';
import { BlogGrid } from './components/blog/BlogGrid';
import { BlogPostPage } from './components/blog/BlogPostPage';
import { servicesData } from './data/servicesData';
import { jobsData } from './data/jobsData';
import { blogsData } from './data/blogsData';

type PageType = 'home' | 'about' | 'services' | 'contact' | 'careers' | 'blog';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  const handleServiceClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToServices = () => {
    setSelectedServiceId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJobClick = (jobId: string) => {
    setSelectedJobId(jobId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToJobs = () => {
    setSelectedJobId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBlogClick = (blogId: string) => {
    setSelectedBlogId(blogId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlogs = () => {
    setSelectedBlogId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedService = selectedServiceId
    ? servicesData.find((s) => s.id === selectedServiceId)
    : null;

  const selectedJob = selectedJobId
    ? jobsData.find((j) => j.id === selectedJobId)
    : null;

  const selectedBlog = selectedBlogId
    ? blogsData.find((b) => b.id === selectedBlogId)
    : null;

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroCarousel />
            <WhyChooseUs />
            <StrengthMetrics />
            <TrustedClients />
            <ServicesSection />
            <TrustedPartners />
            <DigitalCommunity />
            <Testimonials />
          </>
        );

      case 'about':
        return (
          <div className="bg-[#F5F5F7]">
            <AboutHero />
            <WhoWeAre />
            <AboutWhyChooseUs />
            <OurJourney />
            <MissionVision />
            <CoreValues />
            <ExpertiseStrip />
            <CTABanner />
          </div>
        );

      case 'services':
        if (selectedService) {
          return <ServiceDetailPage service={selectedService} onBack={handleBackToServices} />;
        }
        return (
          <>
            <ServicesHero />
            <ServicesGrid onServiceClick={handleServiceClick} />
          </>
        );

      case 'contact':
        return (
          <>
            <ContactHero />
            <ContactCards />
            <ContactForm />
            <ContactMap />
          </>
        );

      case 'careers':
        if (selectedJob) {
          return <JobDetailPage job={selectedJob} onBack={handleBackToJobs} />;
        }
        return (
          <>
            <CareersHero />
            <JobListings onJobClick={handleJobClick} />
          </>
        );

      case 'blog':
        if (selectedBlog) {
          return <BlogPostPage blog={selectedBlog} onBack={handleBackToBlogs} />;
        }
        return (
          <>
            <BlogHero />
            <BlogGrid onBlogClick={handleBlogClick} />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}