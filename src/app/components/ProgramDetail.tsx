import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "./Header";

// Import images
import image4 from "../../assets/bcr.png";
import image5 from "../../assets/bcr2.png";
import image6 from "../../assets/bcr3.png";
import image7 from "../../assets/bcr4.png";
import image8 from "../../assets/bcr5.png";
import image9 from "../../assets/bcr6.png";
import image10 from "../../assets/bcr7.png";
import image11 from "../../assets/bcr8.png";
import image12 from "../../assets/bcr9.png";
import image13 from "../../assets/bcr10.png";
import image14 from "../../assets/bcr11.jpg";
import image15 from "../../assets/bcr12.jpg";
import image16 from "../../assets/bcr13.jpg";
import v1 from "../../assets/v1.mp4";
import v2 from "../../assets/v2.mp4";
import v3 from "../../assets/v3.mp4";
import v4 from "../../assets/v4.mp4";
import v5 from "../../assets/v5.mp4";

// Program data with detailed content matching the images
const programData = {
  "climate-change": {
    id: "climate-change",
    title: "Climate Change & Tree Planting",
    heroImage: image4,
    tags: ["Tree Plantation Drives", "Reforestation Projects"],
    mainHeading: "Building Climate Resilience Through Green Action",
    mainDescription: "Somalia faces increasing environmental challenges including desertification, prolonged droughts, soil erosion, and rising temperatures. Our Climate Change and Tree Planting initiative is designed to restore ecological balance while strengthening community resilience. We collaborate with local leaders, youth groups, and environmental volunteers to plant native and drought-resistant trees that can survive harsh climatic conditions and improve biodiversity.",
    videoUrl: v1,
    overview: "Somalia faces severe environmental challenges including desertification, prolonged droughts, land degradation, and desertification. Our Climate Change initiative focuses on restoring ecosystems through sustainable tree planting and community-driven environmental programs.",
    galleryImages: [image4, image5, image6, image7, image8, image9],
    detailedSections: [
      {
        title: "Tree Plantation Drives",
        description: "Our organized tree plantation drives are conducted in schools, villages, urban neighborhoods, and public spaces across Somalia. These drives bring together youth groups, local leaders, volunteers, and environmental advocates to plant and nurture trees in targeted areas."
      },
      {
        title: "Reforestation Projects",
        description: "In regions affected by deforestation and land degradation, we implement structured reforestation projects to restore lost green cover. These projects focus on rehabilitating degraded land, stabilizing soil, and supporting natural regeneration."
      },
      {
        title: "Community Awareness Programs",
        description: "Sustainable change begins with awareness. Our community education initiatives focus on climate change literacy, water conservation, sustainable farming practices, and responsible land use."
      },
      {
        title: "Partnerships & Volunteers",
        description: "Collaboration is at the heart of our climate action strategy. We work alongside local authorities, community groups, schools, businesses, and international partners to expand our environmental reach. Volunteers play a critical role in plantation activities, awareness campaigns, and monitoring efforts."
      },
      {
        title: "Stories of Change",
        description: "Stories from beneficiaries highlight how improved environmental conditions have positively impacted agriculture, health, and livelihoods. These real-life stories reflect the tangible difference collective action can create."
      }
    ]
  },
  "well-management": {
    id: "well-management",
    title: "Well Management",
    heroImage: image5,
    tags: ["Sustainable Water", "Water Quality Monitoring"],
    mainHeading: "Ensuring Access to Clean Water for All",
    mainDescription: "Access to clean water is fundamental to health and dignity. Our Well Management program ensures the construction, restoration, and maintenance of wells in underserved regions. We focus on water quality monitoring, hygiene education, and long-term sustainability by training local caretakers.",
    videoUrl: v2,
    overview: "Water scarcity affects millions of people in underserved regions, impacting health, education, and economic opportunities. Our comprehensive well management program addresses these challenges through sustainable water infrastructure solutions.",
    galleryImages: [image5, image6, image7, image8, image9, image10],
    detailedSections: [
      {
        title: "Water Infrastructure",
        description: "Building and maintaining sustainable water systems through construction of new boreholes, rehabilitation of existing water sources, installation of purification systems, and solar-powered pumping solutions."
      },
      {
        title: "Water Quality & Safety",
        description: "Ensuring safe and clean drinking water through regular testing, community training on purification, hygiene education programs, and water source protection initiatives."
      }
    ]
  },
  "community-centers": {
    id: "community-centers",
    title: "Community Centers & Supportive Housing",
    heroImage: image6,
    tags: ["Supportive Housing Initiatives", "Multipurpose centers"],
    mainHeading: "Creating Safe Spaces for Community Growth",
    mainDescription: "Community Centers serve as safe, inclusive hubs where individuals come together to learn, grow, and connect. These centers host educational programs, skill-building workshops, health camps, and social activities for youth, women, and families.",
    videoUrl: v3,
    overview: "Strong communities need safe spaces where people can gather, learn, and support each other. Our community centers and supportive housing initiatives create these vital spaces.",
    galleryImages: [image6, image7, image8, image9, image10, image11],
    detailedSections: [
      {
        title: "Multipurpose Facilities",
        description: "Versatile spaces for diverse community needs including educational classrooms, vocational training workshops, health and wellness facilities, childcare centers, and community meeting spaces."
      },
      {
        title: "Supportive Housing",
        description: "Providing safe and dignified housing solutions through transitional housing for vulnerable families, youth housing programs, supportive housing for persons with disabilities, and emergency shelter services."
      }
    ]
  },
  "it-training": {
    id: "it-training",
    title: "IT Training & Skills Development",
    heroImage: image7,
    tags: ["Digital literacy", "employability"],
    mainHeading: "Building Digital Skills for the Future",
    mainDescription: "Digital literacy is a gateway to opportunity in today's world. Our IT Training program equips individuals with essential computer knowledge, technical skills, and career-oriented certifications.",
    videoUrl: v4,
    overview: "In the digital age, technology skills are essential for economic opportunity and social participation. Our comprehensive IT training programs bridge the digital divide.",
    galleryImages: [image7, image8, image9, image10, image11, image12],
    detailedSections: [
      {
        title: "Digital Literacy Programs",
        description: "Fundamental skills for the digital world including basic computer operations, Microsoft Office training, digital communication skills, online safety, and mobile device literacy."
      },
      {
        title: "Technical Skills Training",
        description: "Advanced skills for career development including web development, database management, network administration, cybersecurity fundamentals, and cloud computing technologies."
      }
    ]
  },
  "parks-recreation": {
    id: "parks-recreation",
    title: "Parks & Recreation",
    heroImage: image8,
    tags: ["Playground Installations", "Green spaces"],
    mainHeading: "Creating Green Spaces for Healthy Communities",
    mainDescription: "Our Parks & Recreation initiative is dedicated to developing public spaces that encourage physical activity, relaxation, and community interaction for healthier, happier communities.",
    videoUrl: v5,
    overview: "Access to green spaces and recreational facilities is essential for community wellbeing. Our parks and recreation programs create these vital spaces.",
    galleryImages: [image8, image9, image10, image11, image12, image13],
    detailedSections: [
      {
        title: "Park Development",
        description: "Creating and maintaining public green spaces through community park design, playground installation, sports field development, walking trails, and community garden establishment."
      },
      {
        title: "Recreational Programming",
        description: "Activities that bring communities together including youth sports leagues, fitness classes, cultural events, environmental education, and senior citizen recreation activities."
      }
    ]
  }
};

export default function ProgramDetail() {
  const { programId } = useParams();
  const navigate = useNavigate();
  const program = programData[programId as keyof typeof programData];

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Program Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative h-96 lg:h-[500px]">
        <div className="absolute inset-0">
          <img
            src={program.heroImage}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-3xl text-white">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {program.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2
                className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 text-left"
                style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {program.mainHeading}
            </h2>

            <p
                className="text-lg text-gray-600 max-w-4xl leading-relaxed text-left"
                style={{ fontFamily: "Inter, sans-serif" }}
            >
              {program.mainDescription}
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-16">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={program.videoUrl}
                title={`${program.title} Video`}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-blue-50 rounded-2xl p-8 lg:p-12 mb-16">
            <h3
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Overview
            </h3>
            <p
                className="text-lg text-gray-700 max-w-4xl leading-relaxed mb-12 text-left"
                style={{ fontFamily: "Inter, sans-serif" }}
            >
              {program.overview}
            </p>

            {/* Three Column Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {program.detailedSections.slice(0, 3).map((section: any, index: number) => (
                <div key={index}>
                  <h4 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>{section.title}</h4>
                  <p className="text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>
                    {section.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Two Column Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {program.detailedSections.slice(3, 5).map((section: any, index: number) => (
                <div key={index}>
                  <h4 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>{section.title}</h4>
                  <p className="text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Images Section */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.galleryImages.map((image: any, index: number) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt={`${program.title} - Image ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-[#3DB1F5] rounded-2xl p-8 lg:p-12 text-left mt-20">
            <h3
              className="text-2xl lg:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Join the Movement for a Better Somalia
            </h3>
            <p className="text-blue-100 text-lg mb-8 text-left">
              our donation directly supports life-changing programs across Somalia — including clean water projects, tree planting initiatives, community centers, public parks, and IT training for youth..
            </p>
            <div className="flex flex-wrap gap-4 justify-left">
              <button className="bg-[#0071BC] text-white px-8 py-3 rounded-full font-medium transition-colors">
                Volunteer With Us
              </button>
              <Link
                to="/#contact"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-blue-600 transition-colors inline-block"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
