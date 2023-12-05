'use client';

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from '../styles';
import { staggerContainer, fadeIn } from "../utils/motion";

const About = () => (
  <section
    className={`${styles.paddings} relative z-10`}
  >
    <div className="gradient-02 z-0"/>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About IMAGINEVERSE" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[30px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Imagineverse </span> 
        opens portals to new dimensions through 
        <span className="font-extrabold text-white"> Generative AI</span> 
        , where imagination becomes reality. Simply type a prompt to manifest the worlds you envision. Let's create together by sharing our most mind-bending ideas. What realms can we possibly explore with the 
        <span className="font-extrabold text-white"> madness of Imagineverse </span>.
        The possibilities are only bounded by your imagination itself. So let's see what magic we can make in the Imagineverse! Let's 
        <span className="font-extrabold text-white"> explore </span> 
        the madness of the Imagineverse by scrolling down.
      </motion.p>  

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="https://ik.imagekit.io/5ok2lashts/arrow-down.svg?updatedAt=1701773608937"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />

     
    </motion.div>

    
  </section>
);

export default About;
