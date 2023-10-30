import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="DOL API"
        description="API for the Daily Office Lectionary in the Book of Common Prayer. Built with Go on the backend and HTMX and Alpine.js on the documentation site."
        link="https://github.com/seanthesheep/daily-office-api"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project DOL',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Golang</Tags>
            <Tags color={ColorTags.LIME}>Postgres</Tags>
            <Tags color={ColorTags.SKY}>HTMX</Tags>
            <Tags color={ColorTags.ROSE}>Alpine.js</Tags>
          </>
        }
      />
      <Project
        name="Cloud Critter"
        description="An arcade game built with phaser.js"
        link="https://firestore-ec1b7.web.app/jumper/"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Cloud Critter' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>JavaScript</Tags>
            <Tags color={ColorTags.EMERALD}>Phaser</Tags>
            <Tags color={ColorTags.YELLOW}>Game Dev</Tags>
          </>
        }
      />
      <Project
        name="Web VR Tutorial"
        description="A tutorial on how to use Tone.js in a Web XR project, published in The Startup on Medium."
        link="https://medium.com/swlh/creating-a-vr-audio-visual-experience-on-the-web-with-a-frame-and-tone-js-3800ed305a97"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project XR' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Web XR</Tags>
            <Tags color={ColorTags.INDIGO}>Blog</Tags>
            <Tags color={ColorTags.ROSE}>JavaScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
