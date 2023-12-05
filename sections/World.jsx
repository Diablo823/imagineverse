'use client';

import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components";
import styles from '../styles';
import { staggerContainer, fadeIn } from "../utils/motion";


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText  
        title={(<>
          Track Friends around you and invite them to create arts together in the same world
        </>)}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img 
          src="https://ik.imagekit.io/5ok2lashts/map.png?updatedAt=1701795020830" 
          alt="map" 
          className="w-full h-full"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img 
            src="https://ik.imagekit.io/5ok2lashts/people-01.png?updatedAt=1701795018977" 
            alt="people" 
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img 
            src="https://ik.imagekit.io/5ok2lashts/people-02.png?updatedAt=1701795019191" 
            alt="people" 
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img 
            src="https://ik.imagekit.io/5ok2lashts/people-03.png?updatedAt=1701795019189" 
            alt="people" 
            className="w-full h-full"
          />
        </div>

      </motion.div>
      
    </motion.div>
    
  </section>
);

export default World;


