import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import img_secondary_research from '../assets/icons/computer-with-monitor.svg';
import img_user_interview from '../assets/icons/chat-bubble.svg';
import img_time_constraints from '../assets/icons/stopwatch.svg';
import img_high_food_costs from '../assets/icons/cash.svg';
import img_food_waste from '../assets/icons/trash.svg';
import img_easy_browsing from '../assets/icons/magnifier-filled.svg';
import img_delivery_screens from '../assets/icons/handshake.svg';
import img_hero from '../assets/images/gda/gda-hero.png';
import img_iaw from '../assets/images/gda/gda-iaw.png';
import img_logo from '../assets/images/rma/rma-logo.png';
import img_colour_guide from '../assets/images/rma/rma-colour-guide.png';
import img_typography from '../assets/images/rma/rma-typography.png';
import img_components from '../assets/images/gda/gda-components.png';
import img_carousel_1 from '../assets/images/rma/rma-carousel-1.png';
import img_carousel_2 from '../assets/images/gda/gda-carousel-2.png';
import img_carousel_3 from '../assets/images/gda/gda-carousel-3.png';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import Challenge from '../components/Challenge/Challenge';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import PhotoParagraph from '../components/PhotoParagraph/PhotoParagraph';
import HowMightWe from '../components/HowMightWe/HowMightWe';
import IconBulletList from '../components/IconBulletList/IconBulletList';
import Carousel from '../components/Carousel/Carousel';

const GroceryDeliveryPage = () => {
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
      image: img_secondary_research,
      bulletName: 'Secondary Research',
      bulletInfo:
        'I reviewed high level user data published in Harvard Business Review (HBR) and Forbes, to get a better understanding of market trends, and general consumer patterns.',
    },
    {
      image: img_user_interview,
      bulletName: 'User Interviews',
      bulletInfo:
        'I interviewed 5 young adults on their grocery shopping and meal management behaviors, motivations, styles and pain points. I used affinity diagramming as a method to analyse the data collected from the user interviews.',
    },
  ];

  const insightBullets = [
    {
      image: img_time_constraints,
      bulletName: 'Time Constraints',
      bulletInfo:
        'Many adults struggle to find time to search for, and plan for interesting and delicious meals, despite their desire to do so. Users also reporting struggles with finding time to go grocery shopping, frustrations with busy and crowded stores, and struggling to find ingredients they need.',
    },
    {
      image: img_high_food_costs,
      bulletName: 'High Food Cost',
      bulletInfo:
        'Users reported frustrations around food costs. Users reported a desire to save where they can, often trying to find items that are on sale, or going to stores that are cheaper. This detour often cause users frustrations.',
    },
    {
      image: img_food_waste,
      bulletName: 'Food Waste',
      bulletInfo:
        'Young adults are often living alone, or with roommates. Users reported that items they purchased came in quantities that they struggle to go through by themselves. Users reported frustration with food waste from inefficient recipe stacking, as well as quantity of food.',
    },
  ];

  const howMightWe = {
    intro:
      'With this information, I crafted the following How might we Statement to guide my design:',
    statement:
      'How might we make it easier for young adults to manage their grocery shopping, to help them reduce cost and time spent on the chore?',
  };

  const iawBullets = [
    {
      image: img_high_food_costs,
      bulletName: 'Highlight Sales and Cost Savings',
      bulletInfo:
        'I wanted sales and discounts to be easy to find and spot. I wanted this to be highly visual, and impossible to miss. By clearly highlighting cost savings, and surfacing deal focused product list, the design makes it easier or users to find the best price fast.',
      mb: 'mb-32',
    },
    {
      image: img_easy_browsing,
      bulletName: 'Easy Browsing',
      bulletInfo:
        'Everyone shops differently, so I designed the search and filtering system to feel intuitive at a glance but powerful when users need more depth. The experience leans on clear visual cues, flexible categories, and easy-to-scan layouts',
      mb: 'mb-32',
    },
    {
      image: img_delivery_screens,
      bulletName: 'Delivery Screens that Inspire trustworthiness',
      bulletInfo:
        'Choosing a delivery window should feel reassuring, not uncertain, so I designed the experience to be familiar, clear, and confidence-building. Users can easily select a time that works for them and check the status of their order at any point—helping them feel informed, in control, and confident that their delivery will arrive when expected.',
      mb: 'mb-32',
    },
  ];

  const carousel = [
    {
      image: img_carousel_1,
      alt: 'Introduction to Pantry Pal App with Phone Mockups',
    },
    {
      image: img_carousel_2,
      alt: 'Pantry Pal Phone Mockup of Home Page displaying grocery items to buy and item descriptions.',
    },
    {
      image: img_carousel_3,
      alt: 'Pantry Pal Phone Mockup of user cart, order summary, and order success pages.',
    },
  ];

  return (
    <>
      <ProjectSummary
        title='Grocery Delivery App'
        image={img_hero}
        toolsRoleBoxes={toolRoleBoxes}
      >
        <p>
          This design concept aims to support young adults that struggle with
          meal planning, and grocery shopping. Users can browse items, sales,
          categories, and batch add ingredients from built in recipes. This
          concept was designed to work in tandem with the{' '}
          <Link to='/project-recipe-manage-app'>
            Recipe Management App concept.{' '}
          </Link>
          <br />
          <br />
          The images on the right show the final prototype of this design
          concept. <br />
          <br />
          This project is a design concept I worked on as a capstone project for
          a UX Design program.
        </p>
      </ProjectSummary>
      <Challenge>
        <p>
          Many young adults struggle with the persistent task of grocery
          shopping and meal planning on a regular basis. User behaviour around
          grocery shopping has changed considerably over the years, with more
          young adults relying on online grocery delivery systems since the
          COVID-19 pandemic <br />
          <br />
          <em>The Goal: </em> Design a grocery shopping experience that is
          <em> intuitive, simple, </em> and helps users{' '}
          <em>reduce time and food waste.</em>
        </p>
      </Challenge>
      <SectionHeader header='User Research'>
        <PhotoParagraph>
          <h4>Hypothesis:</h4>
          <p>
            Designing a grocery experience will decrease chore time, and time
            spent meal planning by 20%.
          </p>
        </PhotoParagraph>
        <PhotoParagraph>
          <h4>Research Methods:</h4>
          <p>
            I conducted secondary research, as well as primary user interviews
            to get a better sense of user behaviour, motivations and pain points
            around meal management.
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
        <PhotoParagraph image={img_iaw}>
          <h3>Information Architecture & Wireframing</h3>
          <p>
            I began by defining the app's information architecture to ensure
            intuitive navigation and flexible searching. I created User Flows to
            visualize users journeys, and sketches and low fidelity wireframes
            to explore intuitive ways to meal plan. <br />
            <br />I prioritized the following in my design decisions:
          </p>
        </PhotoParagraph>
        <IconBulletList bullets={iawBullets} />
        <PhotoParagraph>
          <h3>Style Guide</h3>
          <p>
            I created a style guide, including a logo, colour schemes,
            typography and component library to create a cohesive experience. I
            used some wireframe libraries and component libraries to speed up my
            design and prototyping process.
          </p>
        </PhotoParagraph>
        <PhotoParagraph image={img_logo}>
          <h5>Logo</h5>
          <p>
            The logo was designed around the concept of delicious recipes,
            delivered fast. The logo combines a food cover dome to symbolize
            delicious meals with motion-inspired curves that convey speed and
            accessibility. Subtle spoon and fork details reinforce the
            connection to good food being delivered quickly. I designed this
            Logo using Procreate and Inkscape.
          </p>
        </PhotoParagraph>
        <PhotoParagraph image={img_colour_guide}>
          <h5>Colour Guide</h5>
          <p>
            I selected a warm-toned green paired with a soft, warm red, both
            colors strongly associated with food and freshness. This palette
            evokes feelings of comfort, coziness, and appetite appeal, while
            maintaining a modern, inviting look. The warm hues help create an
            emotional connection, conveying that the experience is both
            delicious and welcoming.
          </p>
        </PhotoParagraph>
        <PhotoParagraph image={img_typography}>
          <h5>Typography</h5>
          <p>
            Poppins was the best choice as the header typeface for this project.
            The geometric sans-serif is clean, modern and versatile. The rounded
            letterform combine with the vibrant colours chosen to create a
            dynamic and youthful look. I paired Poppins with Montserrat as the
            body typeface. Monteserrat also has clean geometric letterforms, and
            I felt it's distinctive uppercase letters provided the visual
            difference required to allow body text to attract attention.
          </p>
        </PhotoParagraph>
        <PhotoParagraph image={img_components}>
          <h5>Components</h5>
          <p>
            To support a growing feature set and create a consistent, intuitive
            user experience, I designed a flexible component system for Pantry
            Pal. The goal was to maintain clarity across complex tasks:
            searching for ingredients, choosing delivery window, adding items,
            removing items, etc. <br />
            <br />
            The component library included core elements such as input fields,
            recipe and product cards, modals, buttons, empty states, and
            feedback components. Each was intentionally designed around real
            user needs: quick decision-making, clear information hierarchy, and
            minimal cognitive load.
          </p>
        </PhotoParagraph>
        <PhotoParagraph>
          <h3>Prototyping & Usability Testing</h3>
          <p>
            I designed high fidelity wireframes using figma, and added my
            autolayouts, animations and stitched my screens to create a
            functional prototype. After several iterations of testing the
            prototype myself, I recruited 4 young adults to test the prototype,
            while I observed. I collected the information from my observation,
            taking note of any pain points, and made the necessary iterations.{' '}
            <br />
            <br />
            Generally, users had an easy time navigating through the prototype.
            Most of the frustrations reported were in the recipe manager side of
            the app. I suspect this is because young adults have a strong mental
            model for ordering food and groceries. I intentionally leaned into
            that familiarity, making design decisions that matched existing
            patterns, so the experience felt familiar and intuitive from the
            start.
          </p>
        </PhotoParagraph>
      </SectionHeader>
      <SectionHeader header='Outcome'>
        <p>
          This conceptual design was created with a{' '}
          <Link href='/project-recipe-manage-app'>
            companion Recipe Manager experience
          </Link>{' '}
          in mind, forming a seamless end-to-end workflow from discovering
          recipes to sourcing ingredients. I presented the concept to my UX
          cohort, gathered feedback on usability, clarity, and task flow, and
          iterated to refine hierarchy, reduce friction, and strengthen the
          overall experience.
          <br />
          <br />
          The final design supports flexible use cases while minimizing
          cognitive load, helping young adults do their grocery shopping
          quickly, save money where they can, and feel confident about their
          grocery delivery.
          <br />
          <br />
          You can explore a portion of the prototype yourself in the embedded
          preview below.
        </p>
        <Carousel items={carousel} />
      </SectionHeader>

      <SectionHeader header='Learning'>
        <p>
          This project expanded my understanding of how visual design directly
          influences usability, especially when working with food-related
          content. I deepened my knowledge of color theory as it applies to
          appetite, decision-making, and visual clarity, and gained a stronger
          appreciation for how typography shapes readability and user comfort
          within dense information environments. <br />
          <br />
          I was really fascinated by what builds trust with users when it comes
          to online payment processes. Reviewing other designs, and
          experimenting was a really enriching experience for me. I found it
          thought provoking how much legwork interaction design does to build
          trust with users, and how a seemingly small decision, can have such a
          large impact (such as how much value a dynamic 'transaction completed'
          screen can provide to building trust with a user). <br />
          <br />
          Finally, the iterative process, presenting to my UX cohort, collecting
          feedback, and refining the design, reinforced the value of continuous
          improvement and collaborative critique. Each round of iteration
          strengthened both the product and my own design practice.
        </p>
      </SectionHeader>
    </>
  );
};

export default GroceryDeliveryPage;
