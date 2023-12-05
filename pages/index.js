import { Footer, Navbar } from '../components';
import { About, Explore, Explore10, Explore11, Explore12, Explore2, Explore3, Explore4, Explore5, Explore6, Explore7, Explore8, Explore9, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="overflow-hidden bg-zinc-900">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
      <Explore2 />
      <Explore3 />
      <Explore4 />
      <Explore5 />
      <Explore6 />
      <Explore7 />
      <Explore8 />
      <Explore9 />
      <Explore10 />
      <Explore11 />
      <Explore12 />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);
export default Page;
