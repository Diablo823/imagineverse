'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient"/>
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] text-white sm:leading-[40px] leading-[36px] ">
            Sophia
          </h4>
          <p className="font-normal mt-[8px] sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
            Founder | Imagineverse
          </p>
        </div>

        <p className="mt-[18px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
          "Imagineverse makes imagination real with generative AI. We build new worlds dreamed up collaboratively, charting imagination’s boundless terrain. Let's explore bolder together!"
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex flex-1 justify-center items-center"
      >
        <img 
          src="https://ik.imagekit.io/5ok2lashts/shadow.jpg?updatedAt=1701795398948"
          alt="shadow"
          className="w-full lg:h-[510px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
