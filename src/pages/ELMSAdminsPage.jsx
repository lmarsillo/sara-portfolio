import img_stakeholder_interviews from '../assets/icons/chat-bubble.svg';
import img_competitive_analysis from '../assets/icons/graph.svg';
import img_cross_team_visibility from '../assets/icons/eye.svg';
import img_visual_hierarchy from '../assets/icons/tree-vertical.svg';
import img_analytics from '../assets/icons/graph.svg';
import img_hero from '../assets/images/elma/elma-hero.png';
import img_dsd from '../assets/images/elml/elml-dsd.png';
import img_users from '../assets/images/elma/elma-users.jpg';
import img_wireframes from '../assets/images/elma/elma-wireframes.png';
import img_carousel_1 from '../assets/images/elma/elma-carousel-1.png';
import img_carousel_2 from '../assets/images/elma/elma-carousel-2.png';
import img_carousel_3 from '../assets/images/elma/elma-carousel-3.png';
import img_carousel_4 from '../assets/images/elma/elma-carousel-4.png';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import Challenge from '../components/Challenge/Challenge';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import PhotoParagraph from '../components/PhotoParagraph/PhotoParagraph';
import IconBulletList from '../components/IconBulletList/IconBulletList';
import HowMightWe from '../components/HowMightWe/HowMightWe';
import Carousel from '../components/Carousel/Carousel';
import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

const ELMSAdminsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const toolRoleBoxes = [
    { boxType: 'Tools', info: 'Figma' },
    {
      boxType: 'Role',
      info: 'Researcher, Designer',
    },
  ];

  const researchBullets = [
    {
      image: img_stakeholder_interviews,
      bulletName: 'Stakeholder Interviews',
      bulletInfo:
        'I conducted stakeholder interviews to gather both technical and client-facing requirements and key constraints. I focused on learning about the clients workflow, industry standard software, and regulation requirements.',
    },
    {
      image: img_competitive_analysis,
      bulletName: 'Market Analysis',
      bulletInfo:
        'I reviewed other content platforms to understand how they approached Information architecture, analytics showcasing, and navigation. I reviewed products like Adobe Experience Manager, and Kentico.',
    },
  ];

  const insightBullets = [
    {
      image: img_cross_team_visibility,
      bulletName: 'Cross Team Visibility',
      bulletInfo:
        'Global teams need an intuitive content management system that allows easy access and visibility across offices.',
    },
    {
      image: img_visual_hierarchy,
      bulletName: 'Visual Hierarchy',
      bulletInfo:
        'Visual hierarchy is critical to help users quickly parse and navigate large volumes of content.',
    },
    {
      image: img_analytics,
      bulletName: 'Analytics',
      bulletInfo:
        'Analytics on course and microlearning performance must be prominent, as tracking these metrics is a key KPI for the client.',
    },
  ];

  const howMightWe = {
    intro:
      'With this information, I crafted the following How might we Statement to guide my redesign and development:',
    statement:
      'How might we design an intuitive, visually clear content management system that allows global teams to easily access and manage course content?',
  };

  const carousel = [
    {
      image: img_carousel_1,
      alt: 'Mockup of Learning Management System displaying benefits of the LMS.',
    },
    {
      image: img_carousel_2,
      alt: 'Mockup of the Learning Management System Desktop Experience.',
    },
    {
      image: img_carousel_3,
      alt: 'Mockup of the MultiView features for easy content management.',
    },
    {
      image: img_carousel_4,
      alt: 'Mockup of the Learning Management System Mobile Experience.',
    },
  ];

  return (
    <>
      <ProjectSummary
        title='eLMS for Admin'
        image={img_hero}
        toolsRoleBoxes={toolRoleBoxes}
      >
        <p>
          This SaaS platform lets clients host and manage their own learning
          curriculums, delivering tailored experiences to their audiences. I
          collaborated with stakeholders to design the Admin view, focusing on
          giving clients quick, actionable insights into how their courses and
          microlearning content were performing. The goal was to revamp the
          interface to be more user-friendly for any client, regardless of
          technical experience. I also designed the{' '}
          <Link to='/project-elms-learners'>Learner View</Link>, designing an
          interface for healthcare providers to access and complete online
          courses and microlearning content seamlessly.
          <br />
          <br />
          All images and mockups are anonymized to protect client information.
        </p>
      </ProjectSummary>
      <Challenge>
        <p>
          As a global company, the client needed a way to break down content
          silos and streamline access to courses and microlearning materials
          across offices in different countries. The existing content system was
          cumbersome and unintuitive, making it difficult for teams to manage,
          view, and track content efficiently. Our challenge was to revamp the
          internal Admin system to provide a clean, intuitive interface that
          allows clients to manage content, access analytics, and support global
          collaboration effectively.
        </p>
        <p>
          <em>The Goal: </em>Design a system that is effortless to use,
          functioning as a centralized data hub that could connect and support
          global clients seamlessly.
        </p>
      </Challenge>
      <SectionHeader header='User Research'>
        <PhotoParagraph>
          <h3>Research Methods:</h3>
          <p>
            I conducted stakeholder interviews and competitive analysis to
            gather requirements and benchmark best practices. With limited user
            data, I also explored common mental models and heuristic patterns
            from standard admin systems to inform an intuitive and familiar
            experience.
          </p>
        </PhotoParagraph>
        <IconBulletList bullets={researchBullets} />
        <PhotoParagraph>
          <h3>Insights</h3>
          <p>
            The insights from my research can be distilled in the insights
            below:
          </p>
        </PhotoParagraph>
        <IconBulletList bullets={insightBullets} />
        <HowMightWe intro={howMightWe.intro} statement={howMightWe.statement} />
      </SectionHeader>
      <SectionHeader header='Analysis & Planning'>
        <PhotoParagraph image={img_users}>
          <h3>Users</h3>
          <p>
            Without direct access to end users, I gathered insights through our
            sales lead, who had regular contact with the client's global admin
            team. I supplemented this with research on common CMS expectations
            and pain points to build a clearer picture of typical workflows and
            challenges. Using this information, I created user personas that
            captured roles, responsibilities, pain points, and needs. I then
            translated those insights into user stories to guide the design and
            keep the project aligned with the client's real-world goals.
          </p>
        </PhotoParagraph>
        <PhotoParagraph>
          <h3>Roadmapping</h3>
          <p>
            Although we already had a working system, it was too complex and not
            yet suitable for clients. With many pages, features, and competing
            priorities, the team risked getting overwhelmed and making rushed
            decisions. To bring clarity, I partnered with the product owner to
            build a roadmap that separated high-level planning from detailed
            design work. We started by aligning on broad decisions—navigation
            structure, feature priorities, and core requirements—before moving
            into page-level layouts and interactions. This approach let us shift
            smoothly between the big picture and the finer details, ensuring
            each part of the system was designed with intention
          </p>
        </PhotoParagraph>
        <PhotoParagraph image={img_wireframes}>
          <h3>Sketching & Wireframes</h3>
          <p>
            As part of the roadmap, I began with sketching and low-fidelity
            wireframes. This gave us a fast way to explore ideas, surface
            missing requirements, and uncover technical limitations that weren’t
            visible yet. Working at this level of fidelity allowed us to iterate
            quickly, test assumptions, and refine the structure of the system
            before committing to detailed design.
          </p>
        </PhotoParagraph>
      </SectionHeader>
      <SectionHeader header='Design Process'>
        <PhotoParagraph image={img_dsd}>
          <h3>Design System Development </h3>
          <p>
            The design system was built around the client's branding guidelines
            (colors, typography, and logos) while making adjustments to ensure
            AODA compliance. Components were crafted to reflect the client's
            visual identity as well. The mockups shown here have been anonymized
            to protect client information.
          </p>
        </PhotoParagraph>
        <PhotoParagraph>
          <h3>Prototyping & Usability Testing</h3>
          <p>
            Throughout the project, I shared prototypes with stakeholders to
            keep feedback continuous and transparent. Most of the major changes
            happened during this phase, as the team was deeply invested in
            exploring multiple visual directions and ensuring every decision
            felt intentional. I gathered input across rounds of review, refined
            the interactions and layouts, and managed several iterations to
            reach a design we all felt confident in. Once the final prototype
            was approved, we completed a round of QA testing to validate the
            flows and functionality before moving the work into development.
          </p>
        </PhotoParagraph>
      </SectionHeader>
      <SectionHeader header='Outcome'>
        <p>
          After several rounds of iteration, the designs were finalized and
          approved, then handed off to developers for implementation. The
          product was built to prioritize visibility of content and the
          performance of the content. This product was specifically designed for
          a client, but it was designed modularly, making it easy to scale and
          offer to other clients with varying needs. Mockups of the final design
          are shown below, though they have been anonymized to protect client
          information.
        </p>
        <Carousel items={carousel} />
      </SectionHeader>
      <SectionHeader header='Learning'>
        <p>
          This project pushed me to understand the problem space on a much
          deeper level. I gained a clearer picture of the specific pain points
          users were facing and how their individual roles and responsibilities
          shaped the way they needed to interact with the system. With so many
          large components, pages, and new features being redesigned, the scope
          challenged me to refine how I communicate design decisions, navigate
          competing priorities, and balance technical limitations with
          intuitive, user-focused solutions. The experience strengthened my
          ability to stay thoughtful, flexible, and grounded in the needs of the
          people using the product.
        </p>
      </SectionHeader>
    </>
  );
};

export default ELMSAdminsPage;
