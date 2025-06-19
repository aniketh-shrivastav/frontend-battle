import React, { useEffect, useState, useRef } from 'react';
import { Star, Sparkles, ChevronRight, Calendar, BarChart3, PieChart, TrendingUp, Users, Shield, Zap, Globe, Award, Quote, X, Play, ArrowRight, CheckCircle, Target, Layers, Brain } from 'lucide-react';

// Floating dashboard mockups data
const dashboardMockups = [
  { id: 1, type: 'expense', x: 10, y: 60, delay: 0 },
  { id: 2, type: 'chart', x: 75, y: 25, delay: 0.5 },
  { id: 3, type: 'performance', x: 85, y: 70, delay: 1 },
  { id: 4, type: 'analytics', x: 5, y: 20, delay: 1.5 },
];

// Customer testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CFO at TechCorp",
    company: "TechCorp",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content: "This platform transformed our financial reporting. We reduced our monthly close time by 75% and gained insights we never had before.",
    rating: 5,
    featured: true
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "VP of Operations",
    company: "GrowthLabs",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content: "The AI-powered forecasting helped us predict market trends with 94% accuracy. Our revenue increased by 40% in just 6 months.",
    rating: 5,
    featured: false
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Data Director",
    company: "InnovateCo",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content: "Real-time dashboards gave us the agility to make decisions faster. The ROI was evident within the first quarter.",
    rating: 5,
    featured: false
  },
  {
    id: 4,
    name: "David Kim",
    role: "CEO",
    company: "StartupX",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    content: "As a startup, we needed enterprise-level analytics without the complexity. This solution delivered exactly that.",
    rating: 5,
    featured: true
  }
];

// Features data
const features = [
  {
    id: 1,
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms analyze your data patterns and provide predictive insights automatically.",
    color: "from-purple-500 to-pink-500",
    delay: 0
  },
  {
    id: 2,
    icon: Zap,
    title: "Real-Time Processing",
    description: "Lightning-fast data processing with sub-second response times for all your critical business metrics.",
    color: "from-yellow-500 to-orange-500",
    delay: 0.2
  },
  {
    id: 3,
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with SOC2, GDPR, and HIPAA standards to protect your data.",
    color: "from-green-500 to-teal-500",
    delay: 0.4
  },
  {
    id: 4,
    icon: Globe,
    title: "Global Scalability",
    description: "Multi-region deployment with 99.99% uptime guarantee and automatic scaling for any workload.",
    color: "from-blue-500 to-cyan-500",
    delay: 0.6
  },
  {
    id: 5,
    icon: Layers,
    title: "Unified Data Platform",
    description: "Connect all your data sources in one place with 500+ pre-built integrations and custom APIs.",
    color: "from-indigo-500 to-purple-500",
    delay: 0.8
  },
  {
    id: 6,
    icon: Target,
    title: "Precision Forecasting",
    description: "ML-driven forecasting models with 95%+ accuracy for revenue, demand, and market predictions.",
    color: "from-red-500 to-pink-500",
    delay: 1.0
  }
];

// Ripple Effect Component
const RippleButton = ({ children, onClick, className = "", ...props }: any) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (event: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 600);

    if (onClick) onClick(event);
  };

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden ${className}`}
      onClick={createRipple}
      {...props}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute animate-ripple bg-white/30 rounded-full pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
    </button>
  );
};

// Mock dashboard components
const ExpenseDashboard = () => (
  <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 w-64 shadow-2xl border border-gray-700/50">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-white text-sm font-medium">Expenses</h3>
      <div className="text-gray-400 text-xs">$56.2K</div>
    </div>
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-gray-300 text-xs">Personnel</span>
        </div>
        <span className="text-gray-400 text-xs">45%</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-300 text-xs">Wages</span>
        </div>
        <span className="text-gray-400 text-xs">28%</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="text-gray-300 text-xs">Rent</span>
        </div>
        <span className="text-gray-400 text-xs">15%</span>
      </div>
    </div>
    <div className="mt-3 pt-3 border-t border-gray-700">
      <PieChart className="h-16 w-16 text-gray-500 mx-auto opacity-60" />
    </div>
  </div>
);

const ChartDashboard = () => (
  <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 w-56 shadow-2xl border border-gray-700/50">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-white text-sm font-medium">Revenue</h3>
      <TrendingUp className="h-4 w-4 text-green-400" />
    </div>
    <div className="flex items-end space-x-1 h-20">
      {[40, 60, 45, 80, 65, 90, 75].map((height, i) => (
        <div
          key={i}
          className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t w-6 transition-all duration-1000 ease-out"
          style={{ 
            height: `${height}%`,
            animationDelay: `${i * 0.1}s`
          }}
        ></div>
      ))}
    </div>
  </div>
);

const PerformanceDashboard = () => (
  <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 w-48 shadow-2xl border border-gray-700/50">
    <div className="text-center">
      <h3 className="text-white text-sm font-medium mb-2">Performance</h3>
      <div className="text-2xl font-bold text-green-400 mb-1">94.5%</div>
      <div className="text-xs text-gray-400">vs last month</div>
      <div className="mt-3 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full w-11/12 animate-pulse"></div>
      </div>
    </div>
  </div>
);

const AnalyticsDashboard = () => (
  <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 w-52 shadow-2xl border border-gray-700/50">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-white text-sm font-medium">Analytics</h3>
      <BarChart3 className="h-4 w-4 text-blue-400" />
    </div>
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-300 text-xs">Sessions</span>
        <span className="text-white text-xs font-medium">2,847</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-300 text-xs">Users</span>
        <span className="text-white text-xs font-medium">1,234</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-300 text-xs">Bounce Rate</span>
        <span className="text-white text-xs font-medium">23.4%</span>
      </div>
    </div>
  </div>
);

const FloatingMockup = ({ mockup, index, scrollY }: { mockup: any; index: number; scrollY: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, mockup.delay * 1000);

    return () => clearTimeout(timer);
  }, [mockup.delay]);

  const renderMockup = () => {
    switch (mockup.type) {
      case 'expense': return <ExpenseDashboard />;
      case 'chart': return <ChartDashboard />;
      case 'performance': return <PerformanceDashboard />;
      case 'analytics': return <AnalyticsDashboard />;
      default: return null;
    }
  };

  const parallaxOffset = scrollY * 0.3;

  return (
    <div
      className={`absolute transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } floating-animation`}
      style={{
        left: `${mockup.x}%`,
        top: `${mockup.y}%`,
        transform: `translateY(${parallaxOffset}px)`,
        animationDelay: `${index * 0.5}s`
      }}
    >
      {renderMockup()}
    </div>
  );
};

const RatingBadge = ({ platform, rating, reviews }: { platform: string; rating: number; reviews: string }) => (
  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
    <Star className="h-4 w-4 text-yellow-400 fill-current" />
    <span className="text-white text-sm font-medium">{rating} rating on</span>
    <span className="text-white/90 text-sm font-semibold">{platform}</span>
    <span className="text-white/70 text-sm">{reviews}</span>
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
      } ${testimonial.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
    >
      <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <Quote className="h-8 w-8 text-blue-500 mb-4 opacity-60" />
          <p className="text-gray-700 text-lg leading-relaxed mb-6">{testimonial.content}</p>
          <div className="flex items-center space-x-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100"
            />
            <div>
              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
              <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const IconComponent = feature.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), feature.delay * 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [feature.delay]);

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
      }`}
    >
      <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
        <div className="relative z-10">
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
            <span className="text-sm">Learn more</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Video Modal Component
const VideoModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="aspect-video bg-gray-900 flex items-center justify-center">
          <div className="text-center text-white">
            <Play className="h-16 w-16 mx-auto mb-4 opacity-60" />
            <p className="text-lg">Demo Video Placeholder</p>
            <p className="text-sm opacity-60 mt-2">Your product demo would play here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const heroScale = Math.max(0.8, 1 - scrollY * 0.0005);
  const heroOpacity = Math.max(0.3, 1 - scrollY * 0.002);
  const backgroundParallax = scrollY * 0.5;

  return (
    <div className="relative">
      {/* Hero Section with Parallax */}
      <div 
        className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden transition-all duration-300 ease-out"
        style={{
          transform: `scale(${heroScale})`,
          opacity: heroOpacity,
          transformOrigin: 'center top'
        }}
      >
        {/* Animated background gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20 - backgroundParallax}px)`
          }}
        ></div>
        
        {/* Floating geometric shapes */}
        <div 
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-red-500/30 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
        ></div>
        <div 
          className="absolute bottom-40 left-10 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-orange-500/30 rounded-full blur-2xl animate-pulse delay-2000"
          style={{ transform: `translateY(${-scrollY * 0.4}px)` }}
        ></div>

        {/* Floating dashboard mockups */}
        {dashboardMockups.map((mockup, index) => (
          <FloatingMockup key={mockup.id} mockup={mockup} index={index} scrollY={scrollY} />
        ))}

        {/* Main content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header with ratings */}
          <header className="pt-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <RatingBadge platform="Capterra" rating={4.8} reviews="" />
                <RatingBadge platform="G2" rating={4.8} reviews="" />
                <RatingBadge platform="Xero" rating={4.8} reviews="350+ reviews" />
                <RatingBadge platform="Smart Quickbooks" rating={4.8} reviews="550+ reviews" />
              </div>
            </div>
          </header>

          {/* Hero section */}
          <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                <span className="block animate-fadeInUp">Create reports, forecasts,</span>
                <span className="block animate-fadeInUp delay-300">dashboards & consolidations</span>
              </h1>
              
              <div className="flex items-center justify-center mb-12 animate-fadeInUp delay-500">
                <Sparkles className="h-6 w-6 text-yellow-400 mr-3 animate-pulse" />
                <p className="text-xl sm:text-2xl text-white/90 font-medium">
                  Now with AI-insights
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp delay-700">
                <RippleButton className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/30 flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Start 14-day free trial</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </RippleButton>
                
                <RippleButton 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group text-white/90 hover:text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 flex items-center space-x-2 border border-white/20 hover:border-white/40 hover:bg-white/10"
                >
                  <Play className="h-5 w-5" />
                  <span>See what we do</span>
                </RippleButton>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 relative z-20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Innovative Features That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of business intelligence with cutting-edge technology and AI-powered insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="bg-white relative z-20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how companies like yours are transforming their business with our platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 relative z-20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2 counter-animation">10,000+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2 counter-animation">99.9%</div>
              <div className="text-blue-100">Uptime</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2 counter-animation">500+</div>
              <div className="text-blue-100">Integrations</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2 counter-animation">24/7</div>
              <div className="text-blue-100">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 relative z-20 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-300 mb-8">Join thousands of companies already using our platform to make data-driven decisions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RippleButton className="hover-ripple glow-hover bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
          <CheckCircle className="h-5 w-5" />
           <span>Start Free Trial</span>
           </RippleButton>
            <RippleButton className="border border-gray-600 hover:border-gray-500 text-white hover:bg-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Schedule Demo</span>
            </RippleButton>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floating {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-ripple {
          animation: ripple 0.6s linear;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out;
        }

        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out;
        }

        .counter-animation {
          animation: bounceIn 1s ease-out;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }

        .floating-animation {
          animation: floating 6s ease-in-out infinite;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #2563eb, #7c3aed);
        }

        /* Glow effects */
        .glow-blue {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }

        .glow-purple {
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }

        /* Gradient text */
        .gradient-text {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Hover effects */
        .hover-lift {
          transition: transform 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
        }

        /* Magnetic effect */
        .magnetic {
          transition: transform 0.3s ease;
        }

        .magnetic:hover {
          transform: scale(1.05);
        }

        /* Ripple and glow effects */
.hover-ripple {
  position: relative;
  overflow: hidden;
}

.hover-ripple::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  opacity: 1;
  pointer-events: none;
  transition: transform 0.6s, opacity 0.6s;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
}

.hover-ripple:hover::after {
  transform: translate(-50%, -50%) scale(3);
  opacity: 0;
}

.glow-hover:hover {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2);
}
      `}</style>
    </div>
  );
}

export default App;