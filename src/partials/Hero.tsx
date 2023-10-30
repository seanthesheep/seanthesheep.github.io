import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Sean</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a developer with 8 years of experience working for both large and small teams. I love working with web technologies
          and tackling new challenges. <a href="https://drive.google.com/file/d/16SRjClIT_8U_zVqXgxbv7yjejK8WHRew/view?usp=sharing" target="_blank" className="underline">My resume.</a>
        </>
      }
      avatar={
        <img
          className="h-64 w-64"
          src="/assets/images/sean.jpg"
          alt="Sean Sullivan Headshot"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/sean-sullivan-66b718120/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
