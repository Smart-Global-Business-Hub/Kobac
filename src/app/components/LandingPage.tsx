import { useState, useEffect } from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpg";
import image9 from "../../assets/image9.jpg";
import image10 from "../../assets/image10.jpg";

const heroSlides = [
  {
    image: image1,
    title: "Empowerment Through Development",
    subtitle: "Transforming Lives through Sustainable Development, Quality Education, Vocational Training & Thriving Community Centers.",
  },
  {
    image: image2,
    title: "where everyone can thrive, today and tomorrow.",
    subtitle: "We partner with communities to unlock human potential, build resilient futures, and create inclusive spaces",
  },
];

const whatWeDoItems = [
  {
    image: image4,
    tags: ["15,000 students supported annually", "Climate-adaptive"],
    title: "Sustainable Development",
    description: "We implement community-led initiatives that promote environmental sustainability, economic resilience, and long-term wellbeing.",
  },
  {
    image: image5,
    tags: ["Formal and Non-Formal Education", "School Rehabilitation"],
    title: "Education for All",
    description: "Education is the backbone of societal empowerment and innovation. We work to improve educational access, quality, and equity across communities.",
  },
  {
    image: image6,
    tags: ["Business skills", "entrepreneurship workshops"],
    title: "Vocational Training & Skills Development",
    description: "Our vocational programs transform lives by equipping youth and adults with practical skills that lead to meaningful employment and entrepreneurship.",
  },
  {
    image: image7,
    tags: ["Supportive Housing Initiatives", "Multipurpose centers"],
    title: "Community Centers & Supportive Housing",
    description: "Community centers are the heart of our programs—safe places where people gather to learn, grow, innovate, and belong.",
  },
];

const impactStats = [
  "500+ women trained in sustainable farming",
  "40% increase in crop yields",
  "Economic empowerment for entire families",
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white w-full overflow-x-hidden">
      {/* Hero Section with Slider */}
      <section className="relative h-screen min-h-[600px] pt-16 lg:pt-20">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl text-white">
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {slide.title}
                </h1>
                <p className="text-lg lg:text-xl opacity-90 mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollToSection("get-involved")}
                    className="bg-[#33BBFF] hover:bg-[#1AA3E8] text-white font-medium px-8 py-4 rounded-full flex items-center gap-2 transition-colors"
                  >
                    Get Involved
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <button
                    onClick={() => scrollToSection("what-we-do")}
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium px-8 py-4 rounded-full transition-colors"
                  >
                    Explore Our Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-8 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-8 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 lg:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#33BBFF] text-sm font-medium px-4 py-2 border border-[#33BBFF] rounded-full mb-6">
              About Us
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Committed to Creating Lasting Change
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-6">
              Kobac is a community-driven development organization committed to fostering sustainable development, high-quality education, relevant vocational training, and inclusive community centers with supportive housing solutions. We believe that empowered communities—from children to youth and adults—drive long-lasting social and economic progress.
            </p>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              Our work is guided by the principles of{" "}
              <span className="text-[#33BBFF]">equity,</span>{" "}
              <span className="text-purple-500">dignity,</span>{" "}
              <span className="text-pink-500">inclusion,</span>{" "}
              <span className="text-orange-500">collaboration,</span> and{" "}
              <span className="text-[#33BBFF]">sustainability</span>{" "}
              ensuring that communities have the tools, skills, and environments needed to lead prosperous lives.
            </p>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                Our Vision
              </h3>
              <p className="text-gray-600">
                A world where communities are educated, skilled, resilient, and have access to sustainable development opportunities and inclusive living spaces.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                Our Mission
              </h3>
              <p className="text-gray-600 mb-4">
                To collaborate with communities, governments, and partners in delivering holistic development programs that:
              </p>
              <ul className="space-y-3">
                {[
                  "Strengthen education systems and learning outcomes",
                  "Provide vocational and technical training linked to real job opportunities",
                  "Build and support community centers that function as hubs for learning, skills, and wellbeing",
                  "Develop sustainable housing and safe communal spaces that foster social inclusion and dignity",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#33BBFF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#33BBFF] text-sm font-medium px-4 py-2 border border-[#33BBFF] rounded-full mb-6">
              Featured Story
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Empowering Women Through Sustainable Agriculture
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              In rural Kenya, our agricultural training program has helped over 500 women farmers increase their crop yields by 40% and gain financial independence. Meet Sarah, one of many success stories transforming her community.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={image3}
              alt="Women in sustainable agriculture"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 right-8">
              <button className="text-white flex items-center gap-2 hover:underline">
                Read Full Story
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {impactStats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#33BBFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-20 lg:py-32 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#33BBFF] text-sm font-medium px-4 py-2 border border-[#33BBFF] rounded-full mb-6">
              What We Do
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Committed to Creating Lasting Change
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our programs are designed in partnership with communities to address their most pressing needs and create sustainable solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whatWeDoItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs text-[#33BBFF] bg-blue-50 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="text-[#33BBFF] font-medium flex items-center gap-2 hover:underline">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories of Impact Section */}
      <section id="impact" className="py-20 lg:py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-[#33BBFF] text-sm font-medium px-4 py-2 border border-[#33BBFF] rounded-full mb-6">
              Stories of Impact
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Real Change, Real Lives
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover the inspiring stories of individuals and communities transformed through our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[image8, image9, image10].map((image, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden">
                <img
                  src={image}
                  alt={`Impact story ${index + 1}`}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {index === 0 && "Education Transforms Lives"}
                    {index === 1 && "Building Stronger Communities"}
                    {index === 2 && "Skills for the Future"}
                  </h3>
                  <button className="text-white/80 hover:text-white flex items-center gap-2 text-sm">
                    Read Story
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-20 lg:py-32 bg-[#33BBFF] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Join Us in Making a Difference
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Whether you want to volunteer, donate, or partner with us, there are many ways to contribute to our mission of empowering communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#33BBFF] font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
              Donate Now
            </button>
            <button className="border-2 border-white text-white font-medium px-8 py-4 rounded-full hover:bg-white hover:text-[#33BBFF] transition-colors">
              Become a Volunteer
            </button>
            <button className="border-2 border-white text-white font-medium px-8 py-4 rounded-full hover:bg-white hover:text-[#33BBFF] transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block text-[#33BBFF] text-sm font-medium px-4 py-2 border border-[#33BBFF] rounded-full mb-6">
                Contact Us
              </span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Get in Touch
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Have questions or want to learn more about our work? We'd love to hear from you.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#33BBFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@kobac.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#33BBFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+254 700 123 456</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#33BBFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#33BBFF] focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#33BBFF] focus:border-transparent outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#33BBFF] focus:border-transparent outline-none resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#33BBFF] hover:bg-[#1AA3E8] text-white font-medium py-4 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
