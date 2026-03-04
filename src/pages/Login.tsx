import { useTheme } from "../context/ThemeContext";
import SignupForm from "../components/AuthForm";

export default function Login() {
  const { toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen w-full bg-[#05110F] overflow-hidden flex flex-col font-sans">
      
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#05110F]">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#05110F] via-[#081B18] to-[#0A1F1C]" />

        <div className="absolute -bottom-[20%] -right-[10%] w-[120%] h-[120%] opacity-60">

          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FACC15] blur-[140px] rounded-full opacity-40 mix-blend-screen animate-pulse" />

          <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-[#EF4444] blur-[120px] rounded-full opacity-30 mix-blend-overlay" />

          <div className="absolute bottom-[-5%] right-[5%] w-[450px] h-[450px] bg-[#F97316] blur-[100px] rounded-full opacity-50" />

          <div className="absolute bottom-[30%] right-[-10%] w-[400px] h-[400px] bg-[#0CC8A8] blur-[150px] rounded-full opacity-20" />
        </div>
      </div>

      <div className="absolute top-8 left-8 z-20 flex items-center gap-2">
        <div className="relative flex items-center justify-center w-5 h-5">
           <div className="absolute w-full h-full bg-[#0CC8A8]/40 rounded-full blur-[2px]"></div>
           <div className="relative w-2 h-2 bg-white rounded-full"></div>
        </div>
        <span className="text-xl font-bold text-white tracking-tight">aps</span>
      </div>


      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-between px-12 md:px-24 max-w-[1440px] mx-auto w-full">
        
        <div className="text-white max-w-lg mb-6 md:mb-0 flex flex-col justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-[35px] leading-tight font-bold mb-6">
              Expert level Cybersecurity <br />
              <span className="text-gray-400">in </span>
              <span className="text-[#0CC8A8]">hours</span> 
              <span className="text-gray-400"> not weeks.</span>
            </h1>

            <div className="space-y-6 mt-4">
              <p className="text-sm font-semibold text-gray-200 uppercase tracking-wider">What's included</p>
              <ul className="space-y-4">
                {[
                  "Effortlessly spider and map targets to uncover hidden security flaws",
                  "Deliver high-quality, validated findings in hours, not weeks.",
                  "Generate professional, enterprise-grade security reports automatically."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="text-[#0CC8A8] font-bold">✓</span> {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-2 text-xs text-gray-500">
            <div>
              <span className="text-[#0CC8A8]">★</span> Trustpilot
            </div> 
            <span className="opacity-70 font-medium">Rated 4.5/5.0 (100k+ reviews)</span>
          </div>
        </div>

        <SignupForm />
      </div>

      <button 
        onClick={toggleTheme} 
        className="absolute bottom-6 left-8 text-[10px] text-gray-600 uppercase tracking-widest hover:text-gray-400 transition-colors z-20"
      >
        Dark / Light Switcher
      </button>
    </div>
  );
}