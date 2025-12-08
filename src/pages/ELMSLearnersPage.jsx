import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import img_stakeholder_interviews from '../assets/icons/chat-bubble.svg';
import img_competitive_analysis from '../assets/icons/graph.svg';
import img_navigation from '../assets/icons/tree-horizontal.svg';
import img_prioritization from '../assets/icons/recycle.svg';
import img_hero from '../assets/images/elml/elml-hero.png';
import img_iaw from '../assets/images/elml/elml-iaw.png';
import img_dsd from '../assets/images/elml/elml-dsd.png';
import img_carousel_1 from '../assets/images/elml/elml-carousel-1.png';
import img_carousel_2 from '../assets/images/elml/elml-carousel-2.png';
import img_carousel_3 from '../assets/images/elml/elml-carousel-3.png';
import img_carousel_4 from '../assets/images/elml/elml-carousel-4.png';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import Challenge from '../components/Challenge/Challenge';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import PhotoParagraph from '../components/PhotoParagraph/PhotoParagraph';
import HowMightWe from '../components/HowMightWe/HowMightWe';
import IconBulletList from '../components/IconBulletList/IconBulletList';
import Carousel from '../components/Carousel/Carousel';

const ELMSLeanersPage = () => {
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
        'I conducted stakeholder interviews to gather both technical and client-facing requirements and key constraints.',
    },
    {
      image: img_competitive_analysis,
      bulletName: 'Competitive Analysis',
      bulletInfo:
        'I reviewed other LMS and CME platforms to understand how they approached navigation, layout, and filtering/search features, helping me identify effective patterns and opportunities to refine the experience for our learners.',
    },
  ];

  const insightBullets = [
    {
      image: img_navigation,
      bulletName: 'Navigation',
      bulletInfo:
        'Strong navigation is important for helping learners stay focused, and not abandon their course. Ensuring simple ways to move between content, revisit past courses, and find what they need quickly needs to be prioritized. ',
    },
    {
      image: img_prioritization,
      bulletName: 'Prioritization',
      bulletInfo:
        'There is a large cognitive burden placed on a learner when they are navigating through their online learning content. It is really important to reduce all other cognitive loads, to allow the learner to focus on their learning needs. Prioritizing key actions, and simplifying processes is a key differentiators of a learning experience. ',
    },
  ];

  const howMightWe = {
    intro:
      'With this information, I crafted the following How might we Statement to guide my redesign and development:',
    statement:
      'How might we create a learning experience that gives learners clear, low-effort navigation through their course content, while fitting within the constraints of an iframe?',
  };

  const carousel = [
    {
      image: img_carousel_1,
      alt: 'Mockup of the Online Learning interface with benefits of the interface design.',
    },
    {
      image: img_carousel_2,
      alt: 'Mockup of the Desktop Experience of the home learning platform.',
    },
    {
      image: img_carousel_3,
      alt: 'Mockup of the Mobile Experience for learning on the go.',
    },
    {
      image: img_carousel_4,
      alt: 'Mockup of the Learning Paths for users to learn their own way.',
    },
  ];

  return (
    <>
      <ProjectSummary
        title='eLMS for Learners'
        image={img_hero}
        toolsRoleBoxes={toolRoleBoxes}
      >
        <p>
          This SaaS platform lets clients host and manage their own learning
          curriculums, delivering tailored experiences to their audiences. I
          designed a clean, intuitive LMS for healthcare practitioners to access
          CME programs, collaborating closely with stakeholders to bring a
          net-new learner view from concept to development. I also contributed
          to the <Link to='/project-elms-admins'>Admin view</Link>, designing an
          interface for clients to manage their LMS.
          <br />
          <br />
          All images and mockups are anonymized to protect client information.
        </p>
      </ProjectSummary>
      <Challenge>
        <p>
          Design a learner-friendly LMS interface for healthcare practitioners
          that must function entirely within an iframe on a client's website.
          With limited visual real estate, I must pay careful attention to
          layout and navigation so learners can move smoothly through the system
          despite tight constraints. It also needs to support personalization
          and progress tracking across both full courses and a variety of
          microlearning formats(infographics, PDFs, and videos) without feeling
          cluttered or overwhelming.
        </p>
        <p>
          <em>The Goal:</em> Design a <em>clean, intuitive </em> and{' '}
          <em>personalizable </em> LMS experience that fits seamlessly within an{' '}
          <em>iframe</em>, providing learners with a{' '}
          <em>smooth, uncluttered </em>
          interface despite the limited space available.
        </p>
      </Challenge>
      <SectionHeader header='User Research'>
        <PhotoParagraph>
          <h3>Research Methods:</h3>
          <p>
            I investigated the problem space using stakeholder interviews,
            market analysis, and eLearning industry standards. Because learner
            data was limited, I leaned on available insights and content mapping
            to understand user needs and requirements.
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
      <SectionHeader header='Design Process'>
        <PhotoParagraph image={img_iaw}>
          <h3>Information Architecture & Wireframing</h3>
          <p>
            The iframe constraint made a deep navigational structure
            impractical, so I designed a <em>flat information architecture</em>{' '}
            that avoids extra pages and nested layers. Instead of relying on
            categories or subfolders, the system uses search and filtering to
            organize content, keeping the experience simple, accessible, and
            easy to navigate within the limited space.
          </p>
        </PhotoParagraph>
        <PhotoParagraph image={img_dsd}>
          <h3>Design System Development </h3>
          <p>
            The design system was built around the client's branding guidelines
            (colors, typography, and logos) while making adjustments to ensure
            AODA compliance. Components were crafted to reflect the client's
            visual identity as well. The mockups shown here have been anonymized
            to protect client information (i.e colours and typography have been
            changed).
          </p>
        </PhotoParagraph>
        <PhotoParagraph>
          <h3>Prototyping & Usability Testing</h3>
          <p>
            I led multiple design feedback sessions with stakeholders,
            presenting my prototypes and design decisions, gathering input, and
            incorporating it into the designs. Since this was a net-new product,
            we repeated this iterative process several times, focusing on
            specific areas of the product in each round to refine the experience
            before development.
          </p>
        </PhotoParagraph>
      </SectionHeader>
      <SectionHeader header='Outcome'>
        <p>
          After several rounds of iteration, the designs were finalized and
          approved, then handed off to developers for implementation. The LMS
          was built with flexibility in mind, allowing the branding to be easily
          swapped so any client can use it for their learners. Some anonymized
          mockups of the final design are shown below.
        </p>
        <Carousel items={carousel} />
      </SectionHeader>
      <SectionHeader header='Learning'>
        <p>
          This project taught me a lot about maintaining a clean, organized
          design system and the importance of naming conventions that clearly
          reflect component usage, because this makes handoff to developers
          smoother. I also discovered several shortcuts and plugin-based
          approaches to keep design agile, which was critical given the many
          iterations required. <br />
          <br />
          My biggest area of growth was in collaboration. I learned the value of
          having a strong rationale behind every design decision, finding ways
          to ensure all perspectives were heard, and establishing systems to
          track feedback consistently, reducing missed edits and flip-flopping
          between choices. Overall, I gained not just technical skills, but a
          deeper understanding of how to guide a complex, collaborative design
          process successfully.
          <br />
          <br />
        </p>
        <PhotoParagraph>
          <h3>Future Plans</h3>
          <p>
            All designs and insights from this project have been saved and
            organized for future use. Looking ahead, there are plans to extend
            the LMS into a mobile experience. <br />
            <br />
            Stay tuned for what's next!
          </p>
        </PhotoParagraph>
      </SectionHeader>
    </>
  );
};

export default ELMSLeanersPage;
