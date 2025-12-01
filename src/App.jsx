import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
// Lanyard import removed on purpose
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
import ChatRoom from "./components/ChatRoom";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="./assets/syazel1.png" className="w-10 rounded-md" alt="avatar-mini" />
              <q>Avoid or just undertake it</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText
                text="Hi I'm Zahra Syifaa'Ur Rahmah"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h1>
            <BlurText
              text=" A creative web developer who turns ideas into smooth and beautiful digital experiences."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />

            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="./assets/CV_Zahra.pdf"
                download="CV_Zahra.pdf"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText
                  text="Download CV"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>

              <a
                href="#project"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText
                  text="Explore My Projects"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>
            </div>
          </div>

          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Zahra Syifaa"
              title="Web Developer"
              handle="zeaavirelate"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/syazel1.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
        </div>

        {/* ABOUT */}
        <div
          ref={aboutRef}
          className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6"
          id="about"
        >
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            {/* LEFT SIDE - TEXT */}
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                About Me
              </h2>

              <BlurText
                text="Hello! My name is Zahra.I’m a passionate Front-End Developer who loves turning concepts into clean, responsive, and visually appealing websites.I enjoy learning new technologies, improving my skills, and creating digital experiences that feel simple yet impactful. Outside of coding, I like listening to music, cooking, and watching dramas — things that keep my creativity alive.I’m always excited to collaborate, build something meaningful, and grow as a developer."
                delay={150}
                animateBy="words"
                direction="top"
                className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
              />

              <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                <div>
                  <h1 className="text-3xl md:text-4xl mb-1">
                    2<span className="text-violet-500">+</span>
                  </h1>
                  <p>Project Finished</p>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl mb-1">
                    1<span className="text-violet-500">+</span>
                  </h1>
                  <p>Years Experience</p>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <h1 className="text-3xl md:text-4xl mb-1">
                    2,5<span className="text-violet-500">/5</span>
                  </h1>
                  <p>Skill Level</p>
                </div>
              </div>

              <ShinyText
                text="Working with heart, creating with mind."
                disabled={false}
                speed={3}
                className="text-sm md:text-base text-violet-400"
              />
            </div>

            {/* RIGHT SIDE — AESTHETIC HYBRID CARD (Glow + Glass + Floating/Tilt) */}
            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 flex justify-center">
              <div
                className="group relative w-72 md:w-80 rounded-3xl p-1
                           bg-[linear-gradient(180deg,#0b0b0b,rgba(255,255,255,0.02))]
                           border border-violet-500/30
                           shadow-[0_10px_40px_rgba(139,92,246,0.18)]
                           hover:shadow-[0_20px_60px_rgba(139,92,246,0.32)]
                           transition-transform duration-500"
                data-aos="zoom-in"
                data-aos-duration="1000"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* floating / tilt effect on hover (CSS transform only) */}
                <div
                  className="relative w-full h-full rounded-2xl overflow-hidden
                             bg-black/30 backdrop-blur-md
                             transform transition-all duration-500
                             group-hover:-translate-y-3 group-hover:scale-[1.03]"
                  style={{ perspective: 1000 }}
                >
                  {/* Inner card with subtle 3D tilt using mouse move (JS) */}
                  <TiltCard imageSrc="./assets/syazel1.png" />

                  {/* soft purple glow overlay */}
                  <div className="absolute inset-0 pointer-events-none rounded-2xl"
                       style={{
                         boxShadow: "0 20px 60px rgba(139,92,246,0.12), inset 0 1px 0 rgba(255,255,255,0.02)"
                       }}>
                  </div>
                </div>

                {/* floating glow behind */}
                <div className="absolute -inset-6 blur-3xl opacity-30 rounded-3xl pointer-events-none"
                     style={{ background: "radial-gradient(closest-side, rgba(139,92,246,0.14), transparent)" }}>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
<div
  id="education"
  className="mt-32 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-blue-500/40 
             shadow-[0_0_30px_rgba(59,130,246,0.4)] bg-gradient-to-br 
             from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6"
  data-aos="fade-up"
  data-aos-duration="1000"
  >
  <h2 className="text-4xl font-bold text-white mb-6 text-center">
    Education
  </h2>

  <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
    <div className="p-6 bg-zinc-900/60 rounded-2xl border border-zinc-700 
                    transition-all duration-300 hover:-translate-y-2 
                    hover:border-blue-500 hover:bg-zinc-800/70">
      <h3 className="text-xl font-semibold mb-1">MI CIBEUNTEUR</h3>
      <p className="opacity-70">
        Di MI, saya termasuk anak yang cukup pendiam dan lebih nyaman mengamati daripada berbicara. Tapi dari situ saya belajar banyak hal tentang kedisiplinan, tanggung jawab, dan memahami pelajaran dengan cara saya sendiri. Masa ini jadi pondasi awal saya untuk berkembang pelan-pelan.
      </p>
    </div>

    <div className="p-6 bg-zinc-900/60 rounded-2xl border border-zinc-700 
                    transition-all duration-300 hover:-translate-y-2 
                    hover:border-blue-500 hover:bg-zinc-800/70">
      <h3 className="text-xl font-semibold mb-1">MTSN 1 BANJAR</h3>
      <p className="opacity-70">
        Selama di MTs, saya masih introvert, tapi mulai belajar membuka diri sedikit demi sedikit. Saya mulai terbiasa bekerja dalam kelompok kecil, belajar membaca karakter orang, dan menemukan cara belajar yang cocok untuk saya. Dari sini saya mulai memahami pentingnya berkembang walau perlahan.
      </p>
    </div>

    <div className="p-6 bg-zinc-900/60 rounded-2xl border border-zinc-700 
                    transition-all duration-300 hover:-translate-y-2 
                    hover:border-blue-500 hover:bg-zinc-800/70">
      <h3 className="text-xl font-semibold mb-1">SMKN 1 BANJAR</h3>
      <p className="opacity-70">
       Di SMK saya Mulai mendalami dunia pemrograman dari dasar. Saat ini saya belajar HTML, CSS, dan konsep-konsep awal pembuatan website. Fokus saya adalah membangun pemahaman yang kuat sebelum masuk ke project lebih besar. Lingkungan sekolah membantu saya mengenal dunia digital kreatif dan mendorong saya untuk terus berkembang di bidang web development.
      </p>
    </div>
  </div>
</div>

        {/* Tools */}
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Skill
          </h1>
          <p
            className="w-2/5 text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            My Profesional Skills
          </p>

          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">
                    {tool.ket}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

       {/* Services */}
<div id="services" className="services mt-32">
  <h1
    className="text-4xl/snug font-bold mb-4"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    Services
  </h1>

  <p
    className="w-2/5 text-base/loose opacity-50"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="300"
  >
    What I Can Do For You
  </p>

  <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">

    <div
      className="p-8 border border-zinc-700 rounded-2xl bg-zinc-900/60 backdrop-blur-md
                 transition-all duration-300 hover:-translate-y-2 
                 hover:bg-zinc-800/70 hover:border-violet-500 shadow-lg hover:shadow-violet-500/20"
      data-aos="fade-up"
    >
      <h2 className="text-2xl font-semibold mb-2">Front-End Development</h2>
      <p className="opacity-70">Mempelajari cara membuat tampilan website dengan HTML, CSS, dan JavaScript dasar. Fokus pada tampilan yang rapi, bersih, dan responsive sambil terus berlatih membuat komponen kecil seperti navbar dan section.</p>
    </div>

    <div
      className="p-8 border border-zinc-700 rounded-2xl bg-zinc-900/60 backdrop-blur-md
                 transition-all duration-300 hover:-translate-y-2 
                 hover:bg-zinc-800/70 hover:border-violet-500 shadow-lg hover:shadow-violet-500/20"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h2 className="text-2xl font-semibold mb-2">Back-End Development</h2>
      <p className="opacity-70">Mulai memahami cara kerja website dari sisi dalam, seperti server dan alur data. Masih tahap dasar, tapi perlahan belajar bagaimana front-end dan back-end saling terhubung.</p>
    </div>

    <div
      className="p-8 border border-zinc-700 rounded-2xl bg-zinc-900/60 backdrop-blur-md
                 transition-all duration-300 hover:-translate-y-2 
                 hover:bg-zinc-800/70 hover:border-violet-500 shadow-lg hover:shadow-violet-500/20"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <h2 className="text-2xl font-semibold mb-2">Full-Stack Learning Path</h2>
      <p className="opacity-70">
        Menggabungkan pembelajaran front-end dan back-end untuk memahami alur pembuatan website secara menyeluruh. Saat ini fokus memperkuat dasar dan mencoba membuat fitur sederhana.
      </p>
    </div>

    <div
      className="p-8 border border-zinc-700 rounded-2xl bg-zinc-900/60 backdrop-blur-md
                 transition-all duration-300 hover:-translate-y-2 
                 hover:bg-zinc-800/70 hover:border-violet-500 shadow-lg hover:shadow-violet-500/20"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <h2 className="text-2xl font-semibold mb-2">UI/UX Basic Design</h2>
      <p className="opacity-70">
        Belajar membuat tampilan yang nyaman digunakan dengan memahami warna, layout, jarak elemen, dan tampilan yang konsisten. Sering menganalisis desain lain untuk referensi.
      </p>
    </div>

    <div
      className="p-8 border border-zinc-700 rounded-2xl bg-zinc-900/60 backdrop-blur-md
                 transition-all duration-300 hover:-translate-y-2 
                 hover:bg-zinc-800/70 hover:border-violet-500 shadow-lg hover:shadow-violet-500/20"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <h2 className="text-2xl font-semibold mb-2">Video Editing</h2>
      <p className="opacity-70">
        Mengerjakan edit video sederhana untuk tugas atau konten, fokus pada alur, pemotongan rapi, transisi halus, dan penyesuaian audio. Terus mencoba gaya edit baru.
      </p>
    </div>

    <div
      className="p-8 border border-zinc-700 rounded-2xl bg-zinc-900/60 backdrop-blur-md
                 transition-all duration-300 hover:-translate-y-2 
                 hover:bg-zinc-800/70 hover:border-violet-500 shadow-lg hover:shadow-violet-500/20"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <h2 className="text-2xl font-semibold mb-2">Graphic Design (Basic)</h2>
      <p className="opacity-70">
        Membuat desain seperti poster atau konten sosial media dengan Canva atau Photoshop dasar. Fokus pada komposisi, warna, dan hasil yang bersih namun tetap menarik.
      </p>
    </div>
  </div>
</div>

        {/* PROJECTS */}
        <div
          className="proyek mt-32 py-10"
          id="project"
          data-aos="fade-up"
          data-aos-duration="1000"
        ></div>

        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Project
        </h1>

        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Showcasing a selection of projects that reflect my skills,
          creativity, and passion.
        </p>

        <div className="proyek-box mt-14">
          <div
            style={{ height: "auto", position: "relative" }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>

        {/* Contact */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
            Contact & Chat
          </h1>

          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Get in touch with me or chat in real-time
          </p>

          <div className="flex flex-col md:flex-row gap-8">

            <div
              className="flex-1 bg-zinc-800 p-6 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <ChatRoom />
            </div>

            <div className="flex-1">
              <form
                action="https://formsubmit.co/rissoppa21@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Message</label>
                    <textarea
                      name="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

/* ---------- TiltCard component (inline) ----------
   Small helper to provide interactive tilt using mouse.
   Uses transform on a ref; no external libs.
-------------------------------------------------- */
function TiltCard({ imageSrc = "./assets/syazel1.png" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function handleMove(e) {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0..1
      const y = (e.clientY - rect.top) / rect.height; // 0..1
      const rotY = (x - 0.5) * 8; // rotate Y up to +-8deg
      const rotX = (0.5 - y) * 8; // rotate X up to +-8deg
      el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
    }
    function handleLeave() {
      el.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    el.addEventListener("touchmove", handleMove);
    el.addEventListener("touchend", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      el.removeEventListener("touchmove", handleMove);
      el.removeEventListener("touchend", handleLeave);
    };
  }, []);

  return (
    <div ref={ref} className="w-full h-full will-change-transform transition-transform duration-300">
      <div className="w-full h-[420px] md:h-[460px] bg-gradient-to-br from-black/40 to-black/10 rounded-2xl overflow-hidden relative">
        {/* Profile image */}
        <img src={imageSrc} alt="profile" className="w-full h-full object-cover" />

        {/* name & role box */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[86%] bg-black/50 backdrop-blur-md rounded-xl p-3 border border-violet-500/20">
          <h3 className="text-white text-lg font-semibold text-center">Zahra Syifaa’Ur Rahmah</h3>
          <p className="text-center text-sm text-violet-300 mt-1">Front-End Developer</p>
        </div>
      </div>
    </div>
  );
}

export default App;
