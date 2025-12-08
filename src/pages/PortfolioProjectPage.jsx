import { useLayoutEffect } from 'react';
import img_heuristic_mapping from '../assets/icons/tree-vertical.svg';
import img_behavioural_research from '../assets/icons/graph.svg';
import img_storytelling from '../assets/icons/tree-horizontal.svg';
import img_process_impact from '../assets/icons/recycle.svg';
import img_accessibility from '../assets/icons/person.svg';
import img_project from '../assets/images/pp/pp-hero.png';
import img_iaw from '../assets/images/pp/pp-iaw.png';
import img_typography from '../assets/images/pp/pp-typography.png';
import img_components from '../assets/images/pp/pp-components.png';
import img_colors from '../assets/images/pp/pp-colors.png';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import Challenge from '../components/Challenge/Challenge';
import PhotoParagraph from '../components/PhotoParagraph/PhotoParagraph';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import HowMightWe from '../components/HowMightWe/HowMightWe';
import IconBulletList from '../components/IconBulletList/IconBulletList';

const PortfolioProjectPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const toolRoleBoxes = [
    { boxType: 'Tools', info: 'Figma, React' },
    {
      boxType: 'Role',
      info: 'Researcher, Designer',
    },
  ];

  const researchBullets = [
    {
      image: img_heuristic_mapping,
      bulletName: 'Heuristic Mapping',
      bulletInfo:
        'I applied UX heuristics and my background in eLearning design to examine how information architecture, content density, and visual hierarchy affect cognitive load and information retention.',
    },
    {
      image: img_behavioural_research,
      bulletName: 'Behavioural Research',
      bulletInfo:
        'I conducted qualitative content analysis by reviewing HR articles, recruiter-focused blog posts, Reddit threads, and online portfolio reviews to extract behavioral cues and expectations during the portfolio evaluation process.',
    },
  ];

  const insightBullets = [
    {
      image: img_storytelling,
      bulletName: 'Clear, scannable storytelling',
      bulletInfo:
        'Users have very limited time, it is best to prioritize strong visual hierarchy, clear section headings, concise copy, and highlight your role and impact early',
    },
    {
      image: img_process_impact,
      bulletName: 'Show process and impact',
      bulletInfo:
        'Users are interested in the thought process and ultimate impact of a design project. Case studies should include design thinking, key decisions, data and results in addition to end states of the product. ',
    },
    {
      image: img_accessibility,
      bulletName: 'Accessibility',
      bulletInfo:
        'Users see a portfolio as a living product, that is meant to be updated and refined alongside a designers career. Building a scalable strcuture (design system, modular components) ensure the visual and content framework supports future growth.',
    },
  ];

  const howMightWe = {
    intro:
      'With this information, I crafted the following How might we Statement to guide my redesign and development:',
    statement:
      'How might we craft a portfolio experience that translates complex design thinking into clear, measurable stories, allowing users to navigate effortlessly and connect with my process through thoughtful visuals and structure?',
  };

  return (
    <>
      <ProjectSummary
        title='Portfolio Project'
        image={img_project}
        toolsRoleBoxes={toolRoleBoxes}
      >
        <p>
          This case study explores how I approached my own portfolio as a UX
          design challenge. I began identifying user needs, analyzing recruiter
          needs and pain points and ultimately designing an intuitive and
          pleasing experience that communicates impact.
        </p>
      </ProjectSummary>
      <Challenge>
        <p>
          After completing several new projects, I realized my portfolio no
          longer reflected who I had become as a designer. I see portfolios as
          living products, they should grow, adapt, and communicate evolution. I
          built my previous portfolio on webflow, and in addition to having
          outgrown the design, the system was difficult to scale, lacked
          interesting interaction design, and was not accessible.
        </p>
        <p>
          <em>The Goal:</em> I want to built a portfolio website that is:{' '}
          <em>accessible, interesting,</em> and could <em>easily scale</em> with
          me as I evolve my skillset.
        </p>
      </Challenge>
      <SectionHeader header='User Research'>
        <PhotoParagraph>
          <h3>Research Methods</h3>
          <p>
            To guide the redesign, I conducted secondary user research to better
            understand the goals, pain points, and behaviors of key audiences,
            including recruiters, design leads, team managers, and fellow
            designers exploring my work. Additionally, I wanted to get better
            insight into AODA standards for web accessibility. <br />
            <br /> My process combined a couple of methods to triangulate
            insights: Behavioural Research, and Heuristic Mapping
          </p>
        </PhotoParagraph>
        <IconBulletList bullets={researchBullets} />
        <PhotoParagraph>
          <h3>Insights</h3>
          <p>
            The insights from my research can be distilled in the three insights
            below:
          </p>
        </PhotoParagraph>
        <IconBulletList bullets={insightBullets} />
        <HowMightWe intro={howMightWe.intro} statement={howMightWe.statement} />
      </SectionHeader>
      <SectionHeader header='Design Process'>
        <PhotoParagraph
          image={img_iaw}
          alt='Information Architecture & Wireframing'
        >
          <h3>Information Architecture & Wireframing</h3>
          <p>
            I began by defining the site's information architecture to ensure
            intuitive navigation and content flow. Through sketching and low
            fidelity wireframing, I explored ways to balance storytelling and
            scannability, prioritizing highlighting key information to convey
            design process and impact. The focus during this phase was on
            structuring clarity into every interaction.
          </p>
        </PhotoParagraph>
        <PhotoParagraph>
          <h3>Design System Development</h3>
          <p>
            I built a custom design system to keep the site{' '}
            <em>cohesive, scalable, </em>
            and <em>accessible</em>, something many pre-made templates lacked
            based on my research. To achieve this, I partnered with a developer
            to build the site in HTML, CSS, and React, which aligned with my
            goal of improving my own technical skills. This also pushed me to
            think more intentionally about how I organized my design tokens,
            assets, and components so handoff was smooth and everything
            translated cleanly from Figma to code.
          </p>
        </PhotoParagraph>
        <PhotoParagraph image={img_typography} alt='Typography'>
          <h5>Typography</h5>
          <p>
            For typography, I selected Poppins to establish a clean, modern
            foundation that supports readability across text-heavy pages. I
            customized line heights and spacing to create an airy, uncluttered
            rhythm that reduces visual fatigue and makes dense content easier to
            parse. I designed responsive typography scales for desktop, tablet,
            and mobile, and documented all styles in Figma to streamline
            consistency and ensure an efficient handoff to development.
          </p>
        </PhotoParagraph>
        <PhotoParagraph image={img_colors} alt='Colours'>
          <h5>Colours</h5>
          <p>
            For the color system, I created an analogous colour scheme to
            provide flexibility across text-heavy pages while maintaining soft
            contrast that keeps the content at the forefront. I built a full
            scale of shades for each color, along with a complementary
            grayscale, ensuring enough range to support different components,
            states, and levels of emphasis. I also defined functional color
            categories (text, backgrounds, warnings, information, success, and
            error) to promote clarity, reusability, and strong collaboration
            practices. <br />
            <br /> I converted all the colours into variables and style tokens
            in Figma, including purpose-built dark mode equivalents to ensure
            the portfolio looks intentional in both themes. To streamline the
            process, I used plugins to automate token generation and support a
            smooth, scalable design workflow.
          </p>
        </PhotoParagraph>
        <PhotoParagraph image={img_components} alt='Components'>
          <h5>Components</h5>
          <p>
            For the component library, I designed essential UI elements
            including buttons, input fields, cards, navigation bars, and
            structural layout components. Each component was built with all
            necessary interaction states (hover, active, disabled, selected) and
            responsive variants for mobile and tablet to ensure consistency
            across breakpoints. I paid special attention to the card components,
            making them highly modular and easy to update, with swappable
            project images and editable content blocks that streamline future
            maintenance. Together, these components form a scalable, efficient
            system that supports both rapid iteration and long-term portfolio
            growth.
          </p>
        </PhotoParagraph>
        <PhotoParagraph>
          <h3>Prototyping & Usability Testing</h3>
          <p>
            At this stage, I refined the portfolio's interaction design and
            visual identity to ensure a seamless and professional user
            experience. I focused on establishing clean typography, balanced
            spacing, and a cohesive visual rhythm that reflected clarity and
            confidence. I stitched together the designed screens into an
            interactive prototype to test flow, readability, and visual
            hierarchy. <br />
            <br />
            Through usability testing with peers and design professionals, I
            identified areas where navigation could be streamlined and visual
            emphasis better aligned with user priorities. These insights led to
            refinements in layout spacing, typography scale, and interaction
            feedback—resulting in a more intuitive, visually polished, and
            engaging final experience.
          </p>
        </PhotoParagraph>
      </SectionHeader>
      <SectionHeader header='Outcome'>
        <p>
          The final portfolio you're looking at was built with accessibility
          front and center. I made my decisions with AODA standards in mind,
          from color contrast to typography. On the development side, we also
          structured the site with proper headings, semantic tags, and
          accessible navigation so the experience works smoothly for users. The
          result is a portfolio that is visually clean, scannable, and
          intentionally designed to be inclusive, and readable.
        </p>
      </SectionHeader>
      <SectionHeader header='Learning'>
        <p>
          I picked up a lot along the way. I dove deep into AODA standards and
          requirements, which shaped how I thought about layout, spacing, and
          interaction patterns. I also learned best practices for naming and
          structuring a design system so it's easier for developers to read and
          work with. The most interesting part of my learning was testing
          plugins. I tested a ton of plugins just to see what worked, what
          didn't, and what could speed up the workflow. I found that some
          plugins that promised whole frame production (such as plugins that
          automatically convert a desktop frame to a mobile frame) were not very
          effective in my workflow. However, the more specific plugins, such as
          'Styler' or 'Styles to Variables', where it batch turns a set of
          colours into variables were immensely helpful. This redesign had 59
          colour variations, and instead of having to manually create each and
          every one into a variable, the Styler did it all in one go. I
          anticipate I'll get the itch to redesign my portfolio again, and in
          the meantime, I will be focusing on increasing my technical and web
          dev skills, to be able to turn the next one around quickly and
          seamlessly.
        </p>
      </SectionHeader>
    </>
  );
};

export default PortfolioProjectPage;
