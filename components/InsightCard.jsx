'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img src={imgUrl} alt="planet-01" className="md:w-[220px] w-full h-[220px] rounded-[32px] object-cover" />
    <div className="flex w-full justify-center items-center gap-9">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[38px] text-[26px] text-white">{title}</h4>
        <p className="mt-[16px] lg:text-[20px] text-[16px] text-secondary-white">{subtitle}</p>
      </div>
      <div className="lg:flex hidden justify-center items-center w-[80px] h-[80px] rounded-full bg-transparent border-[1px] border-white">
        <img src="https://ik.imagekit.io/5ok2lashts/arrow.svg?updatedAt=1701773609135" alt="arrow" className="w-[30%] h-[30%] object-contain" />
      </div>
    </div>
  </motion.div>
);
export default InsightCard;
