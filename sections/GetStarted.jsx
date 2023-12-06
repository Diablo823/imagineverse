'use client';

import { motion } from "framer-motion";
import { TypingText, StartSteps, TitleText } from "../components";
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { startingFeatures } from "../constants";



const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >

      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img 
          src="https://ik.imagekit.io/5ok2lashts/scare-2.jpg?updatedAt=1701773844702" 
          alt="scare-2" 
          className="w-[90%] h-[90%] rounded-[48px] object-cover"
        />
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >

        <TypingText title="| How Imagineverse Works" />
        <TitleText title={<>Dream Worlds Come to Life with One Click</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps 
              key={feature}
              number={index + 1}
              text={feature}
            />
          ))}
        </div>
        
      </motion.div>

    </motion.div>
   
  </section>
);

export default GetStarted;