import { useLayoutEffect } from 'react';
import img_hero from '../assets/images/vvr/vvr-hero.png';
import img_market_analysis from '../assets/icons/graph.svg';
import img_health_data from '../assets/icons/chat-bubble.svg';
import img_diagnostics from '../assets/icons/eye.svg';
import img_care_plan from '../assets/icons/tree-vertical.svg';
import img_information_ref from '../assets/icons/graph.svg';
import img_igs from '../assets/images/vvr/vvr-igs.jpg';
import img_carousel_1 from '../assets/images/vvr/vvr-carousel-1.png';
import img_carousel_2 from '../assets/images/vvr/vvr-carousel-2.png';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import Challenge from '../components/Challenge/Challenge';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import PhotoParagraph from '../components/PhotoParagraph/PhotoParagraph';
import IconBulletList from '../components/IconBulletList/IconBulletList';
import HowMightWe from '../components/HowMightWe/HowMightWe';
import Carousel from '../components/Carousel/Carousel';

const VirtualVisitPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const toolRoleBoxes = [
    { boxType: 'Tools', info: 'Figma, Inkscape' },
    {
      boxType: 'Role',
      info: 'Researcher, Designer',
    },
  ];

  const researchBullets = [
    {
      image: img_market_analysis,
      bulletName: 'Market Analysis',
      bulletInfo:
        'I reviewed other content platforms to understand how they approached information grouping, what information they prioritized, and how they managed their navigation.',
    },
    {
      image: img_health_data,
      bulletName: 'Aggregate Health Data',
      bulletInfo:
        "I needed to understand what patients need from a 'completed visit' page, and to understand this, I needed insight on what patient next steps typically are post visit, and what they struggle with to achieve their desired health outcomes.",
    },
  ];

  const insightBullets = [
    {
      image: img_diagnostics,
      bulletName: 'Diagnostics',
      bulletInfo:
        'Patients may be required to go for further diagnostics. This means they need to be able to download scrips or requisitions, so they can book these services.',
    },
    {
      image: img_care_plan,
      bulletName: 'Care Plan/Medication Management',
      bulletInfo:
        'Patients may need to reference information post visit to adhere to a care plan or medication management. Often this information is delivered verbally, and patients may struggle to remember the details.',
    },
    {
      image: img_information_ref,
      bulletName: 'Information Referencing',
      bulletInfo:
        'Patients may need to access the visit notes, or download and share the visit notes with other PCPs, especially for the management of chronic conditions. ',
    },
  ];

  const howMightWe = {
    intro:
      'With this information, I crafted the following How might we Statement to guide my redesign and development:',
    statement:
      'How might we design a simple way to allow patients to refer back to their doctors visit, to ensure adherence to their care plan, and improve health outcomes?',
  };

  const carousel = [
    {
      image: img_carousel_1,
      alt: 'Mockup of the Before and After of the Virtual Care Page on Mobile.',
    },
    {
      image: img_carousel_2,
      alt: 'Mockup of the Desktop Experience of the virtual care page.',
    },
  ];

  return (
    <>
      <ProjectSummary
        title='Virtual Visit Redesign'
        image={img_hero}
        toolsRoleBoxes={toolRoleBoxes}
      >
        <p>
          This case study covers my redesign of the Completed Visit page for a
          virtual care product. The original page buried important details,
          included unnecessary information, and lacked a clear hierarchy,
          leaving users unsure of what to do next. My goal was to surface key
          action items, simplify the layout, and make essential information
          instantly accessible. This work involved rethinking the structure of
          an already designed and fully developed feature, improving clarity and
          usability without disrupting the existing product ecosystem.
        </p>
      </ProjectSummary>
      <Challenge>
        <p>
          The existing Completed Visit page made it hard for patients to
          understand what they needed to do after their appointment. Action
          items weren't surfaced clearly, important notes were easy to miss, and
          the layout created unnecessary cognitive load. The challenge was to
          redesign this experience so patients could quickly see their next
          steps, easily review their appointment summary, and download their
          notes for personal use or sharing.
        </p>
        <p>
          <em>The Goal: </em> Create a modern, visually clean, and highly usable
          page that delivers all essential information without overwhelming the
          user.
        </p>
      </Challenge>
      <SectionHeader header='User Research'>
        <PhotoParagraph>
          <h4>Research Methods:</h4>
          <p>
            This project had limited user data, so I relied on market analysis,
            and general aggregated Health data publicly available from hospitals
            and healthcare clinics. I also explored common mental models and
            heuristic patterns from standard booking systems.
          </p>
        </PhotoParagraph>
        <IconBulletList bullets={researchBullets} />
        <PhotoParagraph>
          <h4>Insights</h4>
          <p>
            The insights from my research can be distilled in the three insights
            below:
          </p>
        </PhotoParagraph>
        <IconBulletList bullets={insightBullets} />
        <HowMightWe intro={howMightWe.intro} statement={howMightWe.statement} />
      </SectionHeader>
      <SectionHeader header='Design Process'>
        <PhotoParagraph image={img_igs}>
          <h3>Information Grouping & Sketching</h3>
          <p>
            The main objective was to group information effectively, and pull
            out the key points to the forefront. I segmented the information
            into multiple, easy to parse categories. Since this page belongs to
            a well established product, I cut down design time by focusing on
            sketching as my low fi wireframing method.
          </p>
        </PhotoParagraph>
        <PhotoParagraph>
          <h3>Design System Development </h3>
          <p>
            Since this is a well established product, I adhered to the already
            established design system. To ensure the experience was simple and
            intuitive, I limited colour use down to just the primary colour, and
            leaned on shades of grey and white to guide the users attention to
            their required information.
          </p>
        </PhotoParagraph>
        <PhotoParagraph>
          <h3>Prototyping & Usability Testing</h3>
          <p>
            I led design feedback sessions with stakeholders, presenting my
            prototypes and design decisions, gathering input, and incorporating
            it into the designs. The first feedback session exposed technical
            limitations and role responsibilities that required a few tweaks to
            the first design. I made the requested changes, and presented the
            updated draft, that was quickly approved for production.
          </p>
        </PhotoParagraph>
      </SectionHeader>
      <SectionHeader header='Outcome'>
        <p>
          The final design delivers a much clearer information hierarchy, making
          it easier for patients to understand their next steps and revisit key
          details from their appointment. Content is now grouped in a
          patient-focused way, reducing competition for attention and the
          overall experience feels calmer, more modern, and more supportive. I
          built the layout with modularity in mind, allowing the page to scale
          seamlessly as new features emerge, whether that's care plans, doctor
          recommendations, diagnosis summaries, or a multi-visit care-journey
          view. Stakeholders were pleased with how the redesign improved
          clarity, usability, and future flexibility. Ultimately, the solution
          aligns strongly with the project's core objective: providing a simple
          way for patients to revisit their doctor's visit, and support their
          care plan. You can see an anonymized before and after below (brand
          colours and copy have been changed to be generic)
        </p>
        <Carousel items={carousel} />
      </SectionHeader>
      <SectionHeader header='Learning'>
        <p>
          This project pushed me to blend design with deeper clinical context. I
          spent a significant amount of time studying market trends, discharge
          standards, and peer-reviewed research on patient barriers and
          care-plan adherence. Even though not all of this research directly
          shaped the visual design, it gave me the clarity and confidence to
          make decisions rooted in real patient needs. I also tried a new
          approach to presenting my work. Instead of walking through the
          prototype as-is, I added descriptive tags directly on each element to
          illustrate the reasoning behind every design choice. This made the
          value more visible, improved alignment, and streamlined the
          stakeholder conversation.
        </p>
      </SectionHeader>
    </>
  );
};

export default VirtualVisitPage;
