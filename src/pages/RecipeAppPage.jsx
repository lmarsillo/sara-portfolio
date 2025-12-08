import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import img_secondary_research from '../assets/icons/computer-with-monitor.svg';
import img_user_interview from '../assets/icons/chat-bubble.svg';
import img_recipe_finding from '../assets/icons/chef-hat.svg';
import img_using_ingredients from '../assets/icons/dishes.svg';
import img_blog_navigation from '../assets/icons/arrow-with-marker.svg';
import img_advanced_search from '../assets/icons/magnifier-filled.svg';
import img_compare from '../assets/icons/half-square.svg';
import img_ai_chatbot from '../assets/icons/chat-bubble-lined.svg';
import img_hero from '../assets/images/rma/rma-hero.png';
import img_iaw from '../assets/images/rma/rma-iaw.jpg';
import img_logo from '../assets/images/rma/rma-logo.png';
import img_colour_guide from '../assets/images/rma/rma-colour-guide.png';
import img_typography from '../assets/images/rma/rma-typography.png';
import img_components from '../assets/images/rma/rma-components.png';
import img_carousel_1 from '../assets/images/rma/rma-carousel-1.png';
import img_carousel_2 from '../assets/images/rma/rma-carousel-2.png';
import img_carousel_3 from '../assets/images/rma/rma-carousel-3.png';
import ProjectSummary from '../components/ProjectSummary/ProjectSummary';
import Challenge from '../components/Challenge/Challenge';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import PhotoParagraph from '../components/PhotoParagraph/PhotoParagraph';
import IconBulletList from '../components/IconBulletList/IconBulletList';
import HowMightWe from '../components/HowMightWe/HowMightWe';
import Carousel from '../components/Carousel/Carousel';

const RecipeAppPage = () => {
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
        'I interviewed 5 young adults on their meal management behaviors, motivations, styles and pain points. I used affinity diagramming as a method to analyse the data collected from the user interviews.',
    },
  ];

  const insightBullets = [
    {
      image: img_recipe_finding,
      bulletName: 'Recipe Finding',
      bulletInfo:
        'Users reported trouble with finding reliable, delicious and cheap recipes. Users also reported frustration with recipes being blocked by paywalls or subscriptions.',
    },
    {
      image: img_using_ingredients,
      bulletName: 'Efficiently Using Ingredients',
      bulletInfo:
        'Users reported high frustration with food waste and inefficient use of ingredients. They reported frustration with having to balance ingredients between recipes. There is an opportunity to provide users with a tool that can support decision making and cut time of meal planning and reduce food waste.',
    },
    {
      image: img_blog_navigation,
      bulletName: 'Blog Navigation',
      bulletInfo:
        'Users reported difficulties and frustration with navigating recipe websites. Additionally, they reported lacking a system to manage the various recipes from various sites, thus resulting in them losing recipes they liked.',
    },
  ];

  const howMightWe = {
    intro:
      'With this information, I crafted the following How might we Statement to guide my design:',
    statement:
      'How might we make it easier for young adults to manage their meal planning, to help them reduce food waste, cost and time spent on the chore?',
  };

  const iawBullets = [
    {
      image: img_advanced_search,
      bulletName: 'Advanced Recipe Search and Filter',
      bulletInfo:
        'The recipe dashboard features a standard search and filter section, along with advanced search and filter fields. This enables users with restrictions or food goals to browse for their individual needs more effectively?',
      mb: 'mb-32',
    },
    {
      image: img_compare,
      bulletName: 'Compare Recipes Feature',
      bulletInfo:
        'Recipes include a compare feature, that enable users to compare multiple recipes for their differences in ingredients required and duration. This enables users to more easily reduce food waste by comparing for recipes that have overlapping ingredients. ',
      mb: 'mb-32',
    },
    {
      image: img_ai_chatbot,
      bulletName: 'AI Recipe Chatbot',
      bulletInfo:
        'Users can tell the chatbot what they have in their fridge, or post a picture of their fridge, and the chatbot will provide potential recipes with those ingredients. This is meant to reduce food waste, and cost, by making use of the ingredients the user already has.',
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
      alt: 'Phone Mockups of the home page with various receipes, and recipe pages with ingredients and instructions.',
    },
    {
      image: img_carousel_3,
      alt: 'Phone Mockups of the AI Recipe bot to give users inspiration with their meal plans.',
    },
  ];

  return (
    <>
      <ProjectSummary
        title='Recipe Management App'
        image={img_hero}
        toolsRoleBoxes={toolRoleBoxes}
      >
        <p>
          This design concept aims to support young adults that struggle with
          meal planning. Users can explore, filter, and save diverse recipes, or
          use AI to create meals with ingredients they already have. This
          concept was designed to work in tandem with the{' '}
          <Link to='/project-grocery-delivery-app'>
            Grocery Delivery App concept.
          </Link>
          <br />
          <br />
          This project is a design concept I worked on as a capstone project for
          a UX Design program.
        </p>
      </ProjectSummary>
      <Challenge>
        <p>
          Many young adults struggle with the persistent task of grocery
          shopping and meal planning on a regular basis. User behaviour around
          meal management has changed considerably over the years, especially
          during and post the COVID-19 pandemic.
        </p>
        <p>
          <em>The Goal: </em>Design a recipe repository that is{' '}
          <em>intuitive, flexible</em> to use, and helps users{' '}
          <em>reduce cost and food waste</em>.
        </p>
      </Challenge>
      <SectionHeader header='User Research'>
        <PhotoParagraph>
          <h4>Hypothesis:</h4>
          <p>
            Designing a recipe repository will decrease user food waste, and
            time spent meal planning by 10%.
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
            I began by defining the site's information architecture to ensure
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
            typography and component library to create a cohesive experience.
          </p>
        </PhotoParagraph>
        <PhotoParagraph image={img_logo}>
          <h5>Logo</h5>
          <p>
            The logo was designed around the concept of delicious recipes,
            delivered fast. The logo combines a food cover dome to symbolize
            delicious meals with motion-inspired curves that convey speed and
            accessibility. Subtle spoon and fork details reinforce the
            connection to food, capturing the idea of delicious recipes, fast in
            a clean and modern form. I designed this Logo using Procreate and
            Inkscape.
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
            difference required to allow body text to attract attention.{' '}
          </p>
        </PhotoParagraph>
        <PhotoParagraph image={img_components}>
          <h5>Components</h5>
          <p>
            To support a growing feature set and create a consistent, intuitive
            user experience, I designed a flexible component system for Pantry
            Pal. The goal was to maintain clarity across complex tasks:
            searching, adding ingredients, comparing recipes, and interacting
            with the AI assistant. <br />
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
            I noticed frustration in the 'comparing' feature. The users were
            reporting frustration with information overload. One user said that
            if they have too many choices, they tend to just quit the task out
            of frustration. With this information in mind, I limited the
            comparison feature to 3 recipes at a time, and added tabs, to
            truncate the sections of the recipe.{' '}
          </p>
        </PhotoParagraph>
      </SectionHeader>
      <SectionHeader header='Outcome'>
        <p>
          This conceptual design was created with a{' '}
          <Link href='/project-grocery-delivery-app'>
            companion grocery delivery experience
          </Link>{' '}
          in mind, forming a seamless end-to-end workflow from discovering
          recipes to sourcing ingredients. I presented the concept to my UX
          cohort, gathered feedback on usability, clarity, and task flow, and
          iterated to refine hierarchy, reduce friction, and strengthen the
          overall experience. <br />
          <br />
          The final design supports flexible use cases while minimizing
          cognitive load—helping young adults meal-plan quickly, make informed
          decisions, and move confidently from idea to action. <br />
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
          It was also my first large-scale project built entirely in Figma,
          pushing me to develop more advanced skills in component systems,
          prototyping, and workflow organization.
          <br />
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

export default RecipeAppPage;
