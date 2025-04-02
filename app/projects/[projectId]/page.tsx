import React from 'react';
import NavbarSection from "@/components/Navbar";
import ProjectDetails from "@/components/ProjectDetails";

interface Project {
  title: string;
  quote: string;
  description: string;
  imageSrc: string;
  myRole: React.ReactNode;
  contributions: string;
  myTeam: React.ReactNode;
  learnings: string;
  buttons: string[];
  previewImages: string[];
  link?: string;
}

interface ProjectData {
  [key: string]: Project;
}

const projectData: ProjectData = {
    "atlas": {
      title: "Atlas",
      quote: "A Streamlined Balanced Scorecard",
      description: "Atlas is a streamlined Balanced Scorecard application designed to help individuals and organizations plan, track, and achieve their goals effectively. With a user-friendly interface and powerful analytics, it simplifies strategic planning.",
      imageSrc: "/atlasui.png",
      myRole: (
          <>
              <ul>
                  <li>
                      UI/UX Designer
                  </li>
                  <li>
                      Graphic Designer
                  </li>
                  <li>
                      Front-end Developer
                  </li>
                  <li>
                      Back-end Developer
                  </li>
              </ul>
          </>
      ),
      contributions: "I am one of the Frontend Developer and the Lead UI/UX Designer for Atlas, responsible for designing the application's landing page and most of its features. I ensured the interface is user-friendly and intuitive, allowing users to navigate it effortlessly without additional guidance. Additionally, I created the Atlas logo and prioritized making the application's design visually appealing.",
      myTeam: (
        <>
            <ul>
                <li>
                    Lara Pable
                </li>
                <li>
                    Arziel Mae Lawas
                </li>
                <li>
                    Arvin Santillan
                </li>
                <li>
                    Lyndon Roy Trocio
                </li>
            </ul>
        </>
    ),
      learnings: "While working on Atlas, I learned how to manage my time effectively, especially considering the demands of other subjects and assignments. This experience taught me the importance of prioritization. As the primary designer of many features in Atlas, I also developed the ability to accept feedback and suggestions from my team, which helped me refine my work and collaborate more effectively.",
      buttons: ["NEXT.JS", "REACT.JS", "TAILWIND CSS", "UI/UX DESIGN"],
      previewImages: ["/atlas1.png", "/atlas2.png", "/atlas3.png", "/atlas4.png", "/atlas5.png", "/atlas6.png", "/atlas7.png", "/atlas8.png", "/atlas9.png", "/atlas10.png"],
      link: "https://citu-atlas.vercel.app/" 
    },
    "bconnect": {
      title: "Barangay Connect",
      quote: "Bringing Communities Together",
      description: "Barangay Connect is a community hub designed to enhance communication and engagement within a barangay. The app enables residents to connect with each other, promote their businesses, report incidents, request documents, and access various local services.",
      imageSrc: "/bconnectui.png",
      myRole: (
        <>
            <ul>
                  <li>
                      UI/UX Designer
                  </li>
                  <li>
                      Graphic Designer
                  </li>
                  <li>
                      Front-end Developer
                  </li>
                  <li>
                      Back-end Developer
                  </li>
              </ul>
        </>
    ),
      contributions: "I designed the logo and worked on key features including the landing page, dashboard, summary details, announcement section, and business posting functionality. Additionally, I was responsible for coding both the frontend and backend for announcement and business posting features, ensuring seamless integration and user experience across the application.",
      myTeam: (
        <>
            <ul>
                <li>
                    Lara Pable
                </li>
                <li>
                    Arziel Mae Lawas
                </li>
                <li>
                    Arvin Santillan
                </li>
            </ul>
        </>
    ),
      learnings: "Working on Barangay Connect taught me the value of collaboration, as it was our very first project where we hard-coded everything. Whenever I felt confused or struggled to understand something, I didn’t hesitate to ask my teammates for help, which greatly enhanced our teamwork. Although my design skills at that time were not as developed, looking back, I can clearly see how much I have improved compared to where I am now.",
      buttons: ["REACT.JS", "TAILWIND CSS", "UI/UX DESIGN"],
      previewImages: ["/bc1.png", "/bc2.png", "/bc3.png", "/bc4.png", "/bc5.png"]
    },
    "icare": {
      title: "iCare",
      quote: "Your Partner in Health",
      description: "iCare is a comprehensive medical application designed to simplify healthcare management for users. With iCare, users can easily book appointments with doctors, ensuring timely access to medical care. The platform provides a seamless experience by allowing users to browse available healthcare providers, select their preferred doctor, and schedule consultations at their convenience.",
      imageSrc: "/icareui.png",
      myRole: (
        <>
            <ul>
                  <li>
                      UI/UX Designer
                  </li>
                  <li>
                      Graphic Designer
                  </li>
              </ul>
        </>
    ),
      contributions: "I am assigned to design several key features for the iCare application, including the appointment booking system, a page to view all doctors, a detailed doctor information page, and the tracking of blood pressure and blood sugar.",
      myTeam: (
        <>
            <ul>
                <li>
                    Lara Pable
                </li>
                <li>
                    Arziel Mae Lawas
                </li>
                <li>
                    Roxanne Zaine Alcordo
                </li>
            </ul>
        </>
    ),
      learnings: "Working on iCare was a unique experience, as it was my first time designing an application in Figma. As a first-timer, I’d say that the design isn’t bad. While bringing our ideas to life, we had to learn the platform’s tools and best practices, which challenged us to adapt and improve our design skills on the go.",
      buttons: ["PROTOTYPE", "UI/UX DESIGN", "FIGMA"],
      previewImages: ["/icare1.png", "/icare2.png", "/icare3.png", "/icare4.png", "/icare5.png", "/icare6.png", "/icare7.png"]
    },
    "sweetrush": {
      title: "Sweet Rush",
      quote: "Savor the Joy, Feel the Rush",
      description: "SweetRush is a delightful mobile application designed to bring the joy of discovering and ordering sweet treats to users. The app allows users to browse through menus, place orders, and track their deliveries in real time. With an easy-to-use interface and a focus on satisfying your sweet tooth, SweetRush makes indulging in your favorite desserts more convenient than ever.",
      imageSrc: "/sweetrushui.png",
      myRole: (
        <>
            <ul>
                  <li>
                      UI/UX Designer
                  </li>
                  <li>
                      Graphic Designer
                  </li>
              </ul>
        </>
    ),
      contributions: "For SweetRush, I designed the logo and contributed to the design of several key features, including the review section, nutrition facts section, payment section, basket, and donation section.",
      myTeam: "Lara Pable",
      learnings: "Working on Sweet Rush was a unique experience, as we were initially unfamiliar with Android Studio. While familiarizing ourselves with the platform, we simultaneously worked on the project, which challenged us to learn on the go. This process taught me the importance of adaptability and persistence when tackling new tools and technologies.",
      buttons: ["PROTOTYPE", "UI/UX DESIGN", "FIGMA", "ANDROID STUDIO"],
      previewImages: ["/sr1.png", "/sr2.png", "/sr3.png", "/sr4.png", "/sr5.png", "/sr6.png"]
    },
    "dailyui": {
      title: "Daily UI",
      quote: "Get Better Each Day",
      description: "Daily UI Challenge is a creative design challenge where participants complete daily interface design tasks to improve their skills and build a strong design portfolio.",
      imageSrc: "/dailyui.png",
      myRole: "UI UX Desinger",
      contributions: "As the sole participant in the Daily UI Challenge, I took on the responsibility of designing and creating UI components based on the given prompts. Each day, I conceptualized, sketched, and developed user-friendly and visually appealing interfaces while applying design principles and best practices.",
      myTeam: "Only Me",
      learnings: "Through this challenge, I enhanced my UI/UX design skills, improved my proficiency in design tools, and strengthened my understanding of user-centered design principles.",
      buttons: ["UI/UX DESIGN", "FIGMA", "CANVA"],
      previewImages: ["/ui1.png", "/ui2.png", "/ui3.png", "/ui4.png", "/ui5.png", "/ui6.png", "/ui7.png", "/ui8.png", "/ui9.png", "/ui10.png", "/ui11.png", "/ui12.png"]
    },
  };


interface ProjectDetailsPageProps {
  params: {
    projectId: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(projectData).map((projectId) => ({
    projectId: projectId,
  }));
}

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { projectId } = params;
  const project = projectData[projectId as keyof ProjectData];

  if (!project) {
    return <div>Project not found</div>; 
  }

  return (
    <div>
      <ProjectDetails project={project} /> 
    </div>
  );
}