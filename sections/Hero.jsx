'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import { staggerContainer, textVariant, slideIn } from "../utils/motion";

const Hero = () => (
  <section
    className={`${styles.yPaddings} sm:pl-16 pl-6`}
  >
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div
        className="flex justify-center items-center flex-col relative z-10"
      >
        <motion.h1 
          variants={textVariant(1.1)}
          className={`${styles.heroHeading}`}
        >
          Generative
        </motion.h1>

        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[50px] -mt-[27px]"
      >
        <div
          className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[-30px]"
        />

          <img 
            src="https://ik.imagekit.io/5ok2lashts/pedestal.jpg?updatedAt=1701795586321" 
            alt="cover" 
            className="w-full sm:h-[500px] h-[300px] object-cover rounded-tl-[140px] z-10 relative"
          />

      </motion.div>
    </motion.div>  
  </section>
);

export default Hero;
