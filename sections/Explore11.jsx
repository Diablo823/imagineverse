'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { TypingText, ExploreCard, TitleText } from "../components";
import styles from '../styles';
import { staggerContainer } from "../utils/motion";
import { travellerimage } from "../constants";

const Explore11 = () => {

    const [active, setActive] = useState('traveller-3');
    
  return (
    <section 
    className={`${styles.paddings}`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        
        <TypingText title="| FrostBone Explorer" textStyles="text-center" />

        <TitleText title={<>Click the image you want 
        <br className="md:block hidden" /> to see </>} textStyles="text-center" />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {travellerimage.map((travel, index) => (
            <ExploreCard 
              key={travel.id}
              {...travel}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
   
  )
}

export default Explore11