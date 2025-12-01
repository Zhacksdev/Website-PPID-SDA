import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import svgPaths from "../imports/svg-3nolhqtit4";
import imgGeminiGeneratedImageJob4K8Job4K8Job42 from "figma:asset/ac28d6c2acbb46e09e029591850053ac27e9df7d.png";
import imgHeader from "figma:asset/19c288f229fc3754ccdfa570bc57b970aa5798bc.png";
import imgImages351 from "figma:asset/ea92efa461b284b0b792950ff1d117bb5b8d5fc0.png";
import imgImages161 from "figma:asset/5a5e6c60b90a72f038b07a852e7d914cdfff85b7.png";
import imgImages191 from "figma:asset/2e38926137190577ce127a557b7a1831e322de94.png";
import imgImages171 from "figma:asset/8e7052aeaeb4d632e7ca4418f19b8448da33bf4a.png";
import imgImages181 from "figma:asset/d26bf627818ab0157b7b2f66cd07195806017739.png";
import imgBup1 from "figma:asset/2d0ee38c0afc73b5c509b87b7fc6c0cebd67a4c3.png";
import imgImage from "figma:asset/23a20c7eb1ce000eebca851b9516866b54359080.png";
import imgImage1 from "figma:asset/0458d12f9916b41f39da851c7d11d349f658b59a.png";
import imgBasketballEquipment1 from "figma:asset/71b13342a2133d2051ea3e3a6a557b092072c912.png";
import imgBasketballEquipment2 from "figma:asset/c382d51bb8fa9151bbaf34d6c17f16d8265ecd5e.png";
import imgBasketballEquipment3 from "figma:asset/a4bf43f20ba2b7fddfc1877fb5cff71717d72ce6.png";
import imgBasketballEquipment4 from "figma:asset/9f40b75fc3ed387cb8b8754a915823bd6f3ced7c.png";
import imgFrame313648 from "figma:asset/83516f08e239f075db16b21b3a5c5adba9457313.png";
import HamburgerMenu from "./HamburgerMenu";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animated Section Wrapper
function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated Chart Component
function AnimatedChart() {
  const [pathData, setPathData] = useState<string>("");
  
  useEffect(() => {
    const generatePath = () => {
      const points = [
        { x: 133.185, y: 229.574 },
        { x: 265.884, y: 122.986 },
        { x: 401.755, y: 74.9627 },
        { x: 537.625, y: 245.992 },
        { x: 674.667, y: 200.311 },
        { x: 811.709, y: 74.9627 },
      ];
      
      // Randomize y values slightly
      const newPoints = points.map(p => ({
        x: p.x,
        y: p.y + (Math.random() - 0.5) * 40,
      }));
      
      const path = `M265.884 ${newPoints[1].y}L131.185 ${newPoints[0].y}L-2.34244 254.171V302.194L949.921 303.365V16.3979L811.709 ${newPoints[5].y}L674.667 ${newPoints[4].y}L537.625 ${newPoints[3].y}L401.755 ${newPoints[2].y}L265.884 ${newPoints[1].y}Z`;
      
      setPathData(path);
    };
    
    generatePath();
    const interval = setInterval(generatePath, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute h-[299.852px] left-[133.53px] top-[0.91px] w-[948.75px] z-[3]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 949 300">
        <g>
          <mask height="300" id="mask0_0_545" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="949" x="0" y="0">
            <rect fill="#D9D9D9" height="299.852" width="948.75" />
          </mask>
          <g mask="url(#mask0_0_545)">
            <motion.path
              d={pathData}
              fill="url(#paint0_linear_0_545)"
              stroke="#F79009"
              strokeDasharray="4.69 4.69"
              strokeWidth="2.34259"
              animate={{ d: pathData }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_545" x1="473.79" x2="473.79" y1="16.3979" y2="302.194">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#FFA500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Infinite Scrolling Logos
function InfiniteLogoScroll() {
  const logos = [
    imgImages351,
    imgImages161,
    imgImages191,
    imgImages171,
    imgImages181,
  ];

  return (
    <div className="relative overflow-hidden w-full py-[20px] md:py-[30px]">
      <motion.div
        className="flex gap-[40px] md:gap-[60px] lg:gap-[80px] items-center"
        animate={{
          x: [0, -1200],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* Render logos 3 times for seamless loop */}
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-[40px] md:gap-[60px] lg:gap-[80px] items-center shrink-0">
            {logos.map((logo, idx) => (
              <div key={`${setIndex}-${idx}`} className="relative shrink-0 size-[80px] md:size-[110px] lg:size-[138px]">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                  src={logo}
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Auto-scrolling descriptions
function AutoScrollDescription() {
  const descriptions = [
    "Sidoarjo menjadi perhatian dunia karena peristiwa semburan lumpur panas Lapindo Brantas (Lusi) sejak tahun 2006. Peristiwa ini mengubah bentang alam dan kehidupan masyarakat di sekitarnya secara drastis.",
    "Kabupaten Sidoarjo dikenal sebagai pusat industri dan perdagangan di Jawa Timur dengan berbagai sektor ekonomi yang berkembang pesat.",
    "Sidoarjo memiliki kekayaan budaya yang beragam, mulai dari seni tradisional hingga kuliner khas yang menjadi kebanggaan masyarakat.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % descriptions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [descriptions.length]);

  return (
    <div className="content-stretch flex gap-[15px] md:gap-[30px] items-center relative shrink-0 w-full md:w-auto px-4 md:px-0">
      <div className="hidden md:flex h-[129px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "129", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[129px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129 2">
                <line stroke="white" strokeLinecap="round" strokeWidth="2" x1="1" x2="128" y1="1" y2="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="relative shrink-0 w-full md:w-[459px]"
      >
        <p className="font-['Poppins:Medium',sans-serif] leading-[22px] md:leading-[28px] not-italic text-[14px] md:text-[18px] text-justify text-white">
          {descriptions[currentIndex]}
        </p>
      </motion.div>
    </div>
  );
}

export default function PpidSidoarjoWebsiteContent() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Mencari: ${searchQuery}`);
      // Di sini bisa ditambahkan logic pencarian
    }
  };

  const handleServiceClick = (service: string) => {
    alert(`Membuka layanan: ${service}`);
    // Di sini bisa ditambahkan logic navigasi
  };

  const handleNewsClick = (title: string) => {
    alert(`Membuka berita: ${title}`);
    // Di sini bisa ditambahkan logic navigasi ke detail berita
  };

  const handleNavClick = (page: string) => {
    alert(`Navigasi ke: ${page}`);
    // Di sini bisa ditambahkan logic navigasi
  };

  return (
    <div className="bg-[#F9FAFB] content-stretch flex flex-col items-center justify-center relative size-full">
      {/* Hero Image Section */}
      <AnimatedSection className="bg-[#F9FAFB] box-border content-stretch flex flex-col items-center pb-[60px] md:pb-[105px] pt-0 px-0 relative shrink-0 w-full">
        <div className="bg-[#F9FAFB] box-border content-stretch flex flex-col gap-[10px] items-start mb-[-40px] md:mb-[-65px] pb-[50px] md:pb-[85px] pt-0 px-0 relative shrink-0 w-full">
          <div className="h-[500px] sm:h-[700px] md:h-[960px] mb-[-50px] md:mb-[-85px] relative rounded-bl-[40px] rounded-br-[40px] md:rounded-bl-[80px] md:rounded-br-[80px] shrink-0 w-full">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-bl-[40px] rounded-br-[40px] md:rounded-bl-[80px] md:rounded-br-[80px] size-full" src={imgHeader} />
            <div className="flex flex-col items-center size-full">
              <div className="box-border content-stretch flex flex-col gap-[100px] sm:gap-[300px] md:gap-[519px] h-full items-center px-[20px] md:px-[80px] py-0 relative w-full">
                {/* Navigation */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative shrink-0 w-full"
                >
                  <div className="flex flex-row items-center justify-between size-full">
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex box-border content-stretch flex-wrap gap-[50px] lg:gap-[150px] items-center justify-center px-[20px] lg:px-[80px] py-[30px] relative w-full">
                      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre cursor-pointer hover:opacity-80 transition-opacity" onClick={() => handleNavClick("Home")}>Home</p>
                      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre cursor-pointer hover:opacity-80 transition-opacity" onClick={() => handleNavClick("About")}>About</p>
                      <div className="content-stretch flex gap-[3.429px] items-center relative shrink-0">
                        <div className="h-[100.351px] relative shrink-0 w-[77.102px]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute h-[163.04%] left-[-48.92%] max-w-none top-[-31.67%] w-[199.36%]" src={imgGeminiGeneratedImageJob4K8Job4K8Job42} />
                          </div>
                        </div>
                        <div className="h-[100.48px] relative shrink-0 w-[131.469px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 101">
                            <g>
                              <path d={svgPaths.p4c99b00} fill="white" />
                              <path d={svgPaths.p1ea77800} fill="white" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre cursor-pointer hover:opacity-80 transition-opacity" onClick={() => handleNavClick("Contact")}>Contact</p>
                      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre cursor-pointer hover:opacity-80 transition-opacity" onClick={() => handleNavClick("FAQ")}>FAQ</p>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="lg:hidden flex items-center justify-between w-full px-[20px] py-[20px]">
                      {/* Logo */}
                      <div className="content-stretch flex gap-[3.429px] items-center relative shrink-0">
                        <div className="h-[60px] relative shrink-0 w-[46px]">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute h-[163.04%] left-[-48.92%] max-w-none top-[-31.67%] w-[199.36%]" src={imgGeminiGeneratedImageJob4K8Job4K8Job42} />
                          </div>
                        </div>
                        <div className="h-[60px] relative shrink-0 w-[78px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 101">
                            <g>
                              <path d={svgPaths.p4c99b00} fill="white" />
                              <path d={svgPaths.p1ea77800} fill="white" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      {/* Hamburger Menu */}
                      <HamburgerMenu />
                    </div>
                  </div>
                </motion.div>
                
                {/* Auto-scrolling description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="box-border content-stretch flex flex-col md:flex-row items-center justify-between pb-[30px] md:pb-[92px] pt-[11px] px-0 relative shrink-0 w-full gap-4"
                >
                  <AutoScrollDescription />
                  <div className="hidden md:block h-[65px] relative shrink-0 w-[15px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 65">
                      <g>
                        {/* Animated Scroll Indicator Dots */}
                        <motion.circle
                          cx="7.5"
                          cy="7.5"
                          r="7.5"
                          fill="white"
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0,
                          }}
                        />
                        <motion.circle
                          cx="7.5"
                          cy="32.5"
                          r="7.5"
                          fill="white"
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                          }}
                        />
                        <motion.path
                          d={svgPaths.p301d500}
                          fill="white"
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1, 0.8],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                          style={{ transformOrigin: "7.5px 57.5px" }}
                        />
                      </g>
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white box-border content-stretch flex gap-[15px] md:gap-[20px] lg:gap-[35px] h-[70px] md:h-[90px] lg:h-[115px] items-center mb-[-40px] md:mb-[-65px] px-[15px] md:px-[20px] lg:px-[40px] py-0 relative rounded-[15px] md:rounded-[20px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.1)] shrink-0 w-[90%] max-w-[958px]"
        >
          <div className="opacity-50 relative shrink-0 size-[24px] md:size-[30px] lg:size-[38px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
              <g>
                <path d={svgPaths.p2cfce300} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                <path d={svgPaths.p1727ee00} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              </g>
            </svg>
          </div>
          <form onSubmit={handleSearch} className="w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="font-['Poppins:Regular',sans-serif] leading-[20px] md:leading-[30px] lg:leading-[38px] not-italic opacity-20 relative shrink-0 text-[16px] md:text-[20px] lg:text-[30px] text-black text-center w-full"
              placeholder="Awakmu butuh opo rek"
            />
          </form>
        </motion.div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="relative shrink-0 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-row items-center size-full"
        >
          <div className="box-border content-stretch flex flex-wrap items-center justify-center gap-[40px] lg:gap-[100px] pb-[60px] pt-[40px] px-[20px] lg:px-[80px] relative w-full">
            {/* Service Card 1 */}
            <motion.div variants={fadeInUp} className="bg-white box-border content-stretch flex flex-col gap-[35px] items-center px-0 py-[27px] relative rounded-[25px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.1)] shrink-0 w-full max-w-[273px]">
              <div className="content-stretch flex flex-col gap-[18px] items-center relative shrink-0">
                <div className="bg-[#d1fadf] box-border content-stretch flex gap-[20.455px] items-center p-[20.455px] relative rounded-[204.545px] shrink-0">
                  <div className="relative shrink-0 size-[49.091px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                      <g>
                        <path d={svgPaths.p2156a80} fill="#28AA69" />
                        <path d={svgPaths.pc16bd80} fill="#28AA69" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['Poppins:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-black text-center w-[166px]">Layanan Kesehatan</p>
              </div>
              <motion.div 
                className="box-border content-stretch flex gap-[10px] items-center justify-center px-[19px] py-[8px] relative rounded-[9px] shrink-0 cursor-pointer" 
                onClick={() => handleServiceClick("Layanan Kesehatan")}
                whileHover={{ scale: 1.05, backgroundColor: "#027a48" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div aria-hidden="true" className="absolute border border-[#027a48] border-solid inset-0 pointer-events-none rounded-[9px]" />
                <motion.p 
                  className="font-['Poppins:Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#027a48] text-[20px] text-center text-nowrap whitespace-pre"
                  whileHover={{ color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                >
                  Lanjutkan
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Service Card 2 */}
            <motion.div variants={fadeInUp} className="bg-white box-border content-stretch flex flex-col gap-[35px] items-center px-0 py-[27px] relative rounded-[25px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.1)] shrink-0 w-full max-w-[273px]">
              <div className="content-stretch flex flex-col gap-[18px] items-center relative shrink-0">
                <div className="bg-[#fee4e2] box-border content-stretch flex gap-[20.455px] items-center p-[20.455px] relative rounded-[204.545px] shrink-0">
                  <div className="relative shrink-0 size-[49.091px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                      <g>
                        <path d={svgPaths.p2b9a7380} fill="#F04438" />
                        <path d={svgPaths.p32459f80} fill="#F04438" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['Poppins:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-black text-center w-[166px]">Layanan Pengaduan</p>
              </div>
              <motion.div 
                className="box-border content-stretch flex gap-[10px] items-center justify-center px-[19px] py-[8px] relative rounded-[9px] shrink-0 cursor-pointer" 
                onClick={() => handleServiceClick("Layanan Pengaduan")}
                whileHover={{ scale: 1.05, backgroundColor: "#b42318" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div aria-hidden="true" className="absolute border border-[#b42318] border-solid inset-0 pointer-events-none rounded-[9px]" />
                <motion.p 
                  className="font-['Poppins:Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#b42318] text-[20px] text-center text-nowrap whitespace-pre"
                  whileHover={{ color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                >
                  Lanjutkan
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Service Card 3 */}
            <motion.div variants={fadeInUp} className="bg-white box-border content-stretch flex flex-col gap-[35px] items-center px-0 py-[27px] relative rounded-[25px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.1)] shrink-0 w-full max-w-[273px]">
              <div className="content-stretch flex flex-col gap-[18px] items-center relative shrink-0">
                <div className="bg-[#edf6fe] box-border content-stretch flex gap-[20.455px] items-center p-[20.455px] relative rounded-[204.545px] shrink-0">
                  <div className="relative shrink-0 size-[49.091px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                      <g>
                        <path d={svgPaths.p2ee41600} fill="#429BF4" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['Poppins:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-black text-center w-[166px]">Layanan Perizinan</p>
              </div>
              <motion.div 
                className="box-border content-stretch flex gap-[10px] items-center justify-center px-[19px] py-[8px] relative rounded-[9px] shrink-0 cursor-pointer" 
                onClick={() => handleServiceClick("Layanan Perizinan")}
                whileHover={{ scale: 1.05, backgroundColor: "#336fab" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div aria-hidden="true" className="absolute border border-[#336fab] border-solid inset-0 pointer-events-none rounded-[9px]" />
                <motion.p 
                  className="font-['Poppins:Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#336fab] text-[20px] text-center text-nowrap whitespace-pre"
                  whileHover={{ color: "#ffffff" }}
                  transition={{ duration: 0.2 }}
                >
                  Lanjutkan
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Infinite Logo Scroll */}
      <AnimatedSection className="relative shrink-0 w-full">
        <div className="flex flex-col items-center justify-end size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-end px-[20px] lg:px-[80px] py-[30px] relative w-full">
            <InfiniteLogoScroll />
          </div>
        </div>
      </AnimatedSection>

      {/* Bupati Section */}
      <AnimatedSection className="relative shrink-0 w-full">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[40px] pt-[25px] px-[20px] lg:px-[80px] relative w-full">
            <div className="aspect-[1280/679] relative shrink-0 w-full">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[133.15%] left-0 max-w-none top-[-0.02%] w-full" src={imgBup1} />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Anggaran Section with Animated Chart */}
      <AnimatedSection className="box-border content-stretch flex flex-col items-center justify-center pb-[60px] md:pb-[105px] pt-[40px] md:pt-[60px] px-[20px] lg:px-[80px] relative shrink-0 w-full max-w-[1440px]">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-start mb-[-25px] relative shadow-[0px_10px_20px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
          <div className="bg-white h-auto min-h-[400px] md:min-h-[468.518px] relative rounded-[20px] md:rounded-[37.481px] shrink-0 w-full">
            <div className="min-h-inherit min-w-inherit overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex flex-col gap-[18.741px] items-start min-h-inherit min-w-inherit p-[20px] md:p-[30px] lg:p-[56.222px] relative w-full">
                <div className="box-border content-stretch flex flex-col lg:flex-row items-start lg:items-center justify-between pb-[20px] lg:pb-[37.481px] pt-0 px-0 relative shrink-0 w-full gap-4">
                  <p className="font-['Poppins:SemiBold',sans-serif] leading-[32px] md:leading-[38px] not-italic relative shrink-0 text-[20px] md:text-[24px] lg:text-[30px] text-black whitespace-pre">Pajak Kabupaten</p>
                  <div className="content-stretch flex gap-[9.37px] items-center relative shrink-0">
                    <p className="font-['Poppins:Regular',sans-serif] leading-[30px] md:leading-[38px] not-italic relative shrink-0 text-[#475467] text-[16px] md:text-[20px] lg:text-[30px] text-nowrap whitespace-pre">Yearly</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[15px] md:gap-[20px] lg:gap-[37.481px] isolate items-start relative shrink-0 w-full overflow-x-auto pb-4">
                  <div className="min-w-[600px] md:min-w-0 md:w-full">
                    <AnimatedChart />
                  </div>
                  <div className="content-stretch flex flex-col h-[280px] md:h-[320.935px] items-center justify-between relative shrink-0 z-[2]">
                    {["100k", "50k", "20k", "10k", "0"].map((label, idx) => (
                      <div key={idx} className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                        <p className="font-['Inter:Medium',sans-serif] font-medium h-[30px] md:h-[35.139px] leading-[normal] not-italic relative shrink-0 text-[#667085] text-[14px] md:text-[18px] lg:text-[23.426px] tracking-[-0.7028px] whitespace-nowrap">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center mb-[-25px] px-4 py-[24px] md:py-[36px] relative rounded-[20px] md:rounded-[25px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.1)] shrink-0 w-full max-w-[626px]">
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[32px] md:leading-[40px] lg:leading-[60px] not-italic relative shrink-0 text-[24px] md:text-[32px] lg:text-[48px] text-black text-center">Anggaran Siluman</p>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection className="box-border content-stretch flex flex-col lg:flex-row h-auto items-center justify-between px-[20px] lg:px-[100px] py-[60px] relative shrink-0 w-full max-w-[1440px] gap-8">
        <div className="content-stretch flex flex-col gap-[15px] items-start justify-center not-italic relative shrink-0 text-black w-full lg:w-[538px]">
          <p className="font-['Poppins:Bold',sans-serif] leading-[48px] lg:leading-[72px] min-w-full relative shrink-0 text-[40px] lg:text-[60px] w-[min-content]">Sidoarjo Resik Atine</p>
          <p className="font-['Poppins:Regular',sans-serif] leading-[20px] opacity-60 relative shrink-0 text-[14px] text-justify w-full lg:w-[399px]">Website PPID adalah alat utama untuk mewujudkan transparansi dan akuntabilitas dengan membuka akses data dan informasi (seperti anggaran, laporan, dan kebijakan) kepada publik.</p>
        </div>
        <div className="h-[277px] relative rounded-[25px] shrink-0 w-full lg:w-[444px] overflow-hidden group">
          {/* Video Nelayan - YouTube Embed */}
          <div className="relative size-full">
            {/* YouTube Video Embed */}
            <iframe
              src="https://www.youtube.com/embed/Gmm9978JK-Y?autoplay=1&mute=1&loop=1&playlist=Gmm9978JK-Y&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1"
              title="Video Nelayan Sidoarjo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 size-full object-cover border-0"
              style={{ pointerEvents: 'none' }}
            />
            
            {/* Video overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Hover overlay to show video info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                </svg>
              </div>
            </motion.div>
            
            {/* Video label badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-lg z-10"
            >
              <p className="text-white text-xs md:text-sm font-['Poppins:Medium',sans-serif] flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 8L16 12L10 16V8Z" fill="currentColor" />
                </svg>
                Video Nelayan Sidoarjo
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* News Section */}
      <AnimatedSection className="relative shrink-0 w-full">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[40px] items-start px-[20px] lg:px-[80px] py-[40px] relative w-full">
            <p className="font-['Poppins:Bold',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[32px] lg:text-[40px] text-black w-full">Pojok Berita</p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="content-stretch flex flex-wrap lg:flex-nowrap items-start justify-center lg:justify-between leading-[0] relative shrink-0 w-full gap-8"
            >
              {/* News Card 1 */}
              <motion.div 
                variants={fadeInUp} 
                className="box-border content-stretch flex flex-col gap-[23px] items-start relative w-full max-w-[370px] cursor-pointer overflow-hidden"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleNewsClick("Festival Lelang Bandeng meriahkan Tahun Baru Islam 1443H")}
              >
                {/* Hover Line Accent */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-[#f79009]"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originY: 0 }}
                />
                <div className="box-border content-stretch flex flex-col items-start pb-[9px] pt-0 px-0 relative shrink-0 w-full">
                  <div className="h-[248px] mb-[-9px] relative rounded-[6px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[6px]">
                      <div className="absolute inset-0 overflow-hidden rounded-[6px]">
                        <img alt="" className="absolute h-[101.61%] left-[-2.02%] max-w-none top-[-0.81%] w-[102.15%]" src={imgBasketballEquipment1} />
                      </div>
                      <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[6px] size-full" src={imgBasketballEquipment2} />
                    </div>
                  </div>
                  <div className="bg-[#f79009] h-[16px] mb-[-9px] shrink-0 w-full" />
                </div>
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                  <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full">04 September 2023</p>
                </div>
                <div className="content-stretch flex flex-col gap-[10px] items-start not-italic relative shrink-0 w-full">
                  <p className="font-['Poppins:Bold',sans-serif] h-auto lg:h-[90px] leading-[32px] relative shrink-0 text-[24px] text-black w-full">Festival Lelang Bandeng meriahkan Tahun Baru Islam 1443H</p>
                  <p className="font-['Poppins:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#475467] text-[14px] text-justify w-full">Sebuah festival unik, Lelang Bandeng, digelar dengan meriah sebagai bagian penting dari perayaan menyambut Tahun Baru Islam 1443H.</p>
                </div>
              </motion.div>

              {/* News Card 2 */}
              <motion.div 
                variants={fadeInUp} 
                className="box-border content-stretch flex flex-col gap-[23px] items-start relative w-full max-w-[370px] cursor-pointer overflow-hidden"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleNewsClick("Karnaval Jayandaru, menghadirkan Seni Gaya Lama")}
              >
                {/* Hover Line Accent */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-[#f79009]"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originY: 0 }}
                />
                <div className="box-border content-stretch flex flex-col items-start pb-[9px] pt-0 px-0 relative shrink-0 w-full">
                  <div className="h-[248px] mb-[-9px] relative rounded-[6px] shrink-0 w-full">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgBasketballEquipment3} />
                  </div>
                  <div className="bg-[#f79009] h-[16px] mb-[-9px] shrink-0 w-full" />
                </div>
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                  <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full">04 Juni 2023</p>
                </div>
                <div className="content-stretch flex flex-col gap-[10px] items-start not-italic relative shrink-0 w-full">
                  <p className="font-['Poppins:Bold',sans-serif] h-auto lg:h-[90px] leading-[32px] relative shrink-0 text-[24px] text-black w-full">Karnaval Jayandaru, menghadirkan Seni Gaya Lama</p>
                  <p className="font-['Poppins:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#475467] text-[14px] text-justify w-full">Karnaval Jayandaru merupakan sebuah perayaan besar yang menampilkan berbagai pertunjukan seni budaya yang kental dengan nuansa lama.</p>
                </div>
              </motion.div>

              {/* News Card 3 */}
              <motion.div 
                variants={fadeInUp} 
                className="box-border content-stretch flex flex-col gap-[23px] items-start relative w-full max-w-[370px] cursor-pointer overflow-hidden"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleNewsClick("Kampung Lali Gadget Inovasi Putra bangsa dari Sidoarjo, Jawa Timur")}
              >
                {/* Hover Line Accent */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-[#f79009]"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originY: 0 }}
                />
                <div className="h-[248px] relative rounded-[6px] shrink-0 w-full">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[6px]">
                    <img alt="" className="absolute h-[101.61%] left-[-2.02%] max-w-none top-[-0.81%] w-[102.15%]" src={imgBasketballEquipment1} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                  <p className="font-['Poppins:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full">04 Oktober 2023</p>
                </div>
                <div className="content-stretch flex flex-col gap-[10px] items-start not-italic relative shrink-0 w-full">
                  <p className="font-['Poppins:Bold',sans-serif] h-auto lg:h-[90px] leading-[32px] relative shrink-0 text-[24px] text-black w-full">Kampung Lali Gadget Inovasi Putra bangsa dari Sidoarjo, Jawa Timur</p>
                  <p className="font-['Poppins:Medium',sans-serif] leading-[20px] relative shrink-0 text-[#475467] text-[14px] text-justify w-full">Kampung Lali Gadget di Sidoarjo, Jawa Timur, adalah inovasi karya putra bangsa untuk mengurangi ketergantungan anak pada gawai.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer Section */}
      <AnimatedSection className="box-border content-stretch flex flex-col items-center justify-center pb-[100px] md:pb-[188px] pt-0 px-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[400px] md:h-[789px] items-center justify-center mb-[-100px] md:mb-[-188px] relative shrink-0 w-full">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFrame313648} />
          <motion.div 
            className="backdrop-blur-[14.6px] backdrop-filter bg-[rgba(255,255,255,0.2)] box-border content-stretch flex gap-[15px] md:gap-[20px] lg:gap-[35px] h-[70px] md:h-[90px] lg:h-[115px] items-center px-[15px] md:px-[20px] lg:px-[40px] py-0 relative rounded-[15px] md:rounded-[20px] shrink-0 w-[90%] max-w-[958px] z-10 cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={() => alert("Membuka form curhat Cak Bup")}
          >
            <div aria-hidden="true" className="absolute border-2 md:border-4 border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[15px] md:rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
            <div className="relative shrink-0 size-[30px] md:size-[35px] lg:size-[45px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
                <g>
                  <path d={svgPaths.p3b15a540} fill="white" />
                  <path d={svgPaths.p2e4e2e20} fill="white" />
                </g>
              </svg>
            </div>
            <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] md:leading-[30px] lg:leading-[38px] not-italic relative shrink-0 text-[16px] md:text-[20px] lg:text-[30px] text-center text-white">Curhat dong Cak Bup</p>
          </motion.div>
        </div>
        <div className="bg-black blur-[75px] filter h-[200px] md:h-[329px] mb-[-100px] md:mb-[-188px] shrink-0 w-full" />
        
        {/* Footer content */}
        <div className="bg-black h-auto lg:h-[622px] mb-[-100px] md:mb-[-188px] relative shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="box-border grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-auto lg:h-[622px] px-[20px] md:px-[60px] lg:px-[130px] py-[30px] md:py-[41px] relative w-full">
              <div className="content-stretch flex flex-col gap-[30px] md:gap-[50px] items-center relative self-start shrink-0 w-full">
                {/* Logo */}
                <div className="content-stretch flex gap-[3.429px] items-center relative shrink-0">
                  <div className="h-[60px] md:h-[80px] lg:h-[100.351px] relative shrink-0 w-[46px] md:w-[60px] lg:w-[77.102px]">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[163.04%] left-[-48.92%] max-w-none top-[-31.67%] w-[199.36%]" src={imgGeminiGeneratedImageJob4K8Job4K8Job42} />
                    </div>
                  </div>
                  <div className="h-[60px] md:h-[80px] lg:h-[100.48px] relative shrink-0 w-[78px] md:w-[105px] lg:w-[131.469px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 101">
                      <g>
                        <path d={svgPaths.p4c99b00} fill="white" />
                        <path d={svgPaths.p1ea77800} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Footer links */}
                <div className="content-stretch flex flex-col md:flex-row gap-[30px] md:gap-[40px] lg:gap-[100px] items-start relative shrink-0 w-full justify-start md:justify-center">
                  <div className="content-stretch flex flex-col sm:flex-row gap-[30px] md:gap-[40px] lg:gap-[100px] items-start relative shrink-0 w-full md:w-auto">
                    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
                      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fdfdfd] text-[14px] md:text-[15px]">Layanan</p>
                      <div className="content-stretch flex flex-col font-['Poppins:SemiBold',sans-serif] gap-[10px] items-start leading-[20px] not-italic relative shrink-0 text-[#fdfdfd] text-[13px] md:text-[14px]">
                        <p className="opacity-50 relative shrink-0">Kesehatan</p>
                        <p className="opacity-50 relative shrink-0">Kehilangan</p>
                        <p className="opacity-50 relative shrink-0">Perizinan</p>
                        <p className="opacity-50 relative shrink-0">Pelaporan</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
                      <p className="font-['Poppins:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fdfdfd] text-[14px] md:text-[15px]">Kontak</p>
                      <div className="content-stretch flex flex-col font-['Poppins:SemiBold',sans-serif] gap-[11px] items-start leading-[20px] not-italic relative shrink-0 text-[#fdfdfd] text-[13px] md:text-[14px]">
                        <p className="opacity-50 relative shrink-0">BPBD</p>
                        <p className="opacity-50 relative shrink-0">Damkar</p>
                        <p className="opacity-50 relative shrink-0">Puskesmas</p>
                        <p className="opacity-50 relative shrink-0">RSUD</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[20px] md:gap-[40px] lg:gap-[91px] items-start relative shrink-0 w-full md:w-auto">
                    <div className="font-['Poppins:SemiBold',sans-serif] flex flex-col gap-2 leading-[18px] md:leading-[20px] not-italic place-items-start relative shrink-0 text-[#fdfdfd] text-[13px] md:text-[14px]">
                      <p className="relative">OFFICE LOCATION</p>
                      <p className="opacity-75 relative max-w-[280px] md:max-w-none">Jl. Alun alun no. 21 Gg Kuthuk Barat, Sidoarjo, 612345</p>
                    </div>
                  </div>
                </div>

                {/* Social icons */}
                <div className="box-border content-stretch flex flex-col gap-[15px] md:gap-[20px] items-center justify-center px-0 py-[15px] relative shrink-0 w-full">
                  <div className="h-px opacity-[0.12] relative rounded-[2px] shrink-0 w-[90%] md:w-full max-w-[1180px]">
                    <div aria-hidden="true" className="absolute border border-[#fdfdfd] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  </div>
                  <div className="content-stretch flex h-[36px] md:h-[44px] items-center justify-center gap-6 md:gap-8 overflow-clip relative shrink-0">
                    <div className="relative shrink-0 size-[28px] md:size-[35px] cursor-pointer hover:opacity-70 transition-opacity">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                        <path d={svgPaths.p25317040} fill="#FDFDFD" />
                      </svg>
                    </div>
                    <div className="relative shrink-0 size-[28px] md:size-[35px] cursor-pointer hover:opacity-70 transition-opacity">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                        <path d={svgPaths.p19340c00} fill="#FDFDFD" />
                      </svg>
                    </div>
                    <div className="relative shrink-0 size-[28px] md:size-[35px] cursor-pointer hover:opacity-70 transition-opacity">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                        <path d={svgPaths.p4ab2170} fill="#FDFDFD" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}