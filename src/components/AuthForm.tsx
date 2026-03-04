import { useState, type SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, AlertCircle } from "lucide-react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
  
    const email = data.get("email");
    const pass = data.get("password");
    if (!email || !pass || (!isLogin && (!data.get("fname") || !data.get("lname")))) {
      setError("Please fill in all fields.");
      return;
    }

    if (!isLogin && !agreed) {
      setError("You must agree to the Terms and Conditions.");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="bg-white rounded-[40px] p-10 shadow-2xl w-full max-w-[460px] animate-in fade-in zoom-in-95 duration-500">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
        {isLogin ? "Log in" : "Sign up"}
      </h2>
      <p className="text-center text-sm text-gray-500 mb-8">
        {isLogin ? "Don't have an account?" : "Already have an account?"} 
        <button onClick={() => { setIsLogin(!isLogin); setError(""); }} className="text-[#0CC8A8] ml-1 font-semibold hover:underline">
          {isLogin ? "Sign up" : "Log in"}
        </button>
      </p>

      {error && (
        <div className="mb-6 flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-xl text-xs font-medium border border-red-100">
          <AlertCircle size={14} /> {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <>
            <input name="fname" type="text" placeholder="First name*" className="custom-field" />
            <input name="lname" type="text" placeholder="Last name*" className="custom-field" />
          </>
        )}
        <input name="email" type="email" placeholder="Email address*" className="custom-field" />
        
        <div className="relative">
          <input 
            name="password"
            type={showPassword ? "text" : "password"} 
            placeholder="Password (8+ characters)*" 
            className="custom-field pr-12" 
          />
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {!isLogin && (
          <div className="flex items-start gap-3 py-1">
            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-1 w-4 h-4 accent-[#0CC8A8]" />
            <p className="text-[11px] leading-relaxed text-gray-500">
              I agree to Aps's <span className="text-[#0CC8A8] underline cursor-pointer">Terms & Conditions</span>
            </p>
          </div>
        )}

        <button 
          type="submit"
          className={`w-full py-4 rounded-full font-bold text-white transition-all active:scale-[0.98] shadow-lg
            ${(!isLogin && !agreed) ? 'bg-gray-200 cursor-not-allowed' : 'bg-[#0CC8A8] hover:bg-[#0bb598] shadow-[#0CC8A8]/20'}
          `}
        >
          {isLogin ? "Log in" : "Create account"}
        </button>
      
      </form>

      <div className="grid grid-cols-3 gap-3 mt-8">
        <SocialBtn onClick={() => navigate("/dashboard")} icon="" bg="bg-black text-white" />
        <SocialBtn onClick={() => navigate("/dashboard")} icon="G" bg="bg-[#FEE2E2] text-[#EF4444]" />
        <SocialBtn onClick={() => navigate("/dashboard")} icon="∞" bg="bg-[#DBEAFE] text-[#2563EB]" />
      </div>
    </div>
  );
}

function SocialBtn({ icon, bg, onClick }: { icon: string, bg: string, onClick: () => void }) {
  return (
    <button onClick={onClick} className={`flex items-center justify-center h-11 rounded-full text-lg font-bold hover:opacity-80 transition-opacity ${bg}`}>
      {icon}
    </button>
  );
}