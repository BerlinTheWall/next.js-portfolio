import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/my-profile.jpg'
          alt='An image showing Hooman'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, My name is Hooman</h1>
      <p>
        I am working as a web development - especially frontend frameworks like React.
      </p>
    </section>
  );
}

export default Hero;