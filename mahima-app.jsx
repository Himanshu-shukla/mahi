import { useState, useEffect, useRef } from "react";

const MESSAGES = [
  {
    emoji: "🥺",
    title: "I know I messed up...",
    text: "Hey Mahima, I know things are weird between us right now, and I hate it. You're one of the most important people in my life and the thought of you being upset with me is genuinely killing me inside. 💔",
  },
  {
    emoji: "😔",
    title: "I miss you already",
    text: "It's only been a short while and I already miss talking to you every day. I miss your random messages, your weird jokes, and even your complaints about everything. Please come back. 🙏",
  },
  {
    emoji: "🌸",
    title: "You deserve an apology",
    text: "Whatever happened — I'm sorry. Truly, deeply, wholeheartedly sorry. You didn't deserve to be upset, and I take full responsibility for my part in it. You mean way too much to me for me to let this slide. 💐",
  },
  {
    emoji: "✨",
    title: "Here's what I admire about you",
    text: "You're genuinely one of the most amazing humans I know. You're kind, funny, smart, and you care so deeply about everyone around you. People like you are rare, Mahima. Don't ever forget that. 🌟",
  },
  {
    emoji: "🎀",
    title: "Compliments, because you deserve them",
    text: "Your laugh is contagious. Your honesty is refreshing. Your weird sense of humour is underrated. And the way you show up for people you love? Absolutely unmatched. You're a vibe and a half. 💅",
  },
  {
    emoji: "🤝",
    title: "A formal request",
    text: "I, Himanshu, hereby formally request Mahima to unblock me, respond to my texts, and go back to being my most chaotic but beloved friend. Terms and conditions: I'll be better. I promise. 📜✍️",
  },
  {
    emoji: "💌",
    title: "The final note",
    text: "Life is too short and our friendship is too good to waste it on this. I need my person back. You're my go-to, my confidant, my tiffin thief (remember the rasmalai? 🍮). Please give me a chance. I'm right here. 💛",
  },
];

const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 5,
  dur: Math.random() * 3 + 2,
}));

function StarField() {
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      {STARS.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            borderRadius: "50%",
            background: "white",
            opacity: 0,
            animation: `twinkle ${s.dur}s ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function LoginScreen({ onLogin }) {
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleLogin = () => {
    if (id.toLowerCase().trim() === "mahima" && pass === "rasmalai") {
      onLogin();
    } else {
      setError("Hmm that's not right 🤔 Try again!");
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "20px", position: "relative", zIndex: 1 }}>
      <div
        style={{
          background: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 32,
          padding: "48px 40px",
          width: "100%",
          maxWidth: 420,
          boxShadow: "0 32px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
          animation: shake ? "shake 0.4s ease" : "fadeUp 0.8s ease both",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontSize: 64, marginBottom: 12, animation: "float 3s ease-in-out infinite" }}>🌸</div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 30, fontWeight: 700, background: "linear-gradient(135deg, #ffd6e0, #ffb3c6, #ffc8dd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: 0, marginBottom: 6 }}>
            Hey, is that you?
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, margin: 0, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
            A special message is waiting for you 💌
          </p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 8, fontFamily: "Georgia, serif", letterSpacing: 1 }}>
            👤 WHO ARE YOU?
          </label>
          <input
            value={id}
            onChange={(e) => { setId(e.target.value); setError(""); }}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="Your name..."
            style={{
              width: "100%", boxSizing: "border-box", padding: "14px 18px",
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 14, color: "white", fontSize: 16, fontFamily: "Georgia, serif",
              outline: "none", transition: "all 0.3s",
            }}
          />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: 13, marginBottom: 8, fontFamily: "Georgia, serif", letterSpacing: 1 }}>
            🔒 SECRET PASSWORD
          </label>
          <div style={{ position: "relative" }}>
            <input
              value={pass}
              onChange={(e) => { setPass(e.target.value); setError(""); }}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              type={showPass ? "text" : "password"}
              placeholder="Psst... what's the secret?"
              style={{
                width: "100%", boxSizing: "border-box", padding: "14px 48px 14px 18px",
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 14, color: "white", fontSize: 16, fontFamily: "Georgia, serif",
                outline: "none",
              }}
            />
            <button
              onClick={() => setShowPass(!showPass)}
              style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 18, padding: 0 }}
            >
              {showPass ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <div style={{ marginBottom: 28 }}>
          <button
            onClick={() => setShowHint(!showHint)}
            style={{ background: "none", border: "none", color: "rgba(255,200,150,0.8)", fontSize: 13, cursor: "pointer", fontFamily: "Georgia, serif", fontStyle: "italic", padding: 0, textDecoration: "underline dotted" }}
          >
            {showHint ? "hide hint 🙈" : "need a hint? 🤔"}
          </button>
          {showHint && (
            <div style={{ marginTop: 10, padding: "10px 14px", background: "rgba(255,200,100,0.1)", borderRadius: 10, border: "1px solid rgba(255,200,100,0.2)", color: "rgba(255,220,150,0.9)", fontSize: 13, fontFamily: "Georgia, serif", fontStyle: "italic", animation: "fadeUp 0.3s ease" }}>
              💡 Hint: <em>What did he get you last time in tiffin?</em> 🍮
            </div>
          )}
        </div>

        {error && (
          <div style={{ marginBottom: 16, color: "#ff8fa3", fontSize: 14, textAlign: "center", fontFamily: "Georgia, serif" }}>
            {error}
          </div>
        )}

        <button
          onClick={handleLogin}
          style={{
            width: "100%", padding: "15px", borderRadius: 14, border: "none",
            background: "linear-gradient(135deg, #ff6b9d, #ff8fa3, #ffc8dd)",
            color: "white", fontSize: 16, fontWeight: 700, cursor: "pointer",
            fontFamily: "Georgia, serif", letterSpacing: 1,
            boxShadow: "0 8px 32px rgba(255,107,157,0.4)",
            transition: "all 0.3s", transform: "translateY(0)",
          }}
          onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 40px rgba(255,107,157,0.6)"; }}
          onMouseLeave={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 8px 32px rgba(255,107,157,0.4)"; }}
        >
          Open My Message 💌
        </button>
      </div>
    </div>
  );
}

function MessageCard({ msg, onNext, index, total }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 50); }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "20px", position: "relative", zIndex: 1 }}>
      <div style={{ width: "100%", maxWidth: 500, animation: visible ? "cardIn 0.6s cubic-bezier(0.34,1.56,0.64,1) both" : "none" }}>
        <div style={{ textAlign: "center", marginBottom: 16, color: "rgba(255,255,255,0.4)", fontSize: 13, fontFamily: "Georgia, serif", letterSpacing: 2 }}>
          {index + 1} of {total}
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 32,
            padding: "48px 40px",
            textAlign: "center",
            boxShadow: "0 32px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          <div style={{ fontSize: 72, marginBottom: 20, animation: "float 3s ease-in-out infinite" }}>{msg.emoji}</div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 26, fontWeight: 700,
            background: "linear-gradient(135deg, #ffd6e0, #ffb3c6, #c8b6ff)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            margin: "0 0 20px",
          }}>
            {msg.title}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.8, fontSize: 17, fontFamily: "Georgia, serif", margin: "0 0 36px" }}>
            {msg.text}
          </p>

          <button
            onClick={onNext}
            style={{
              padding: "14px 40px", borderRadius: 50, border: "none",
              background: "linear-gradient(135deg, #c8b6ff, #ff8fa3, #ffd6e0)",
              color: "white", fontSize: 15, fontWeight: 700,
              cursor: "pointer", fontFamily: "Georgia, serif",
              boxShadow: "0 8px 32px rgba(200,182,255,0.4)",
              letterSpacing: 1, transition: "all 0.3s",
            }}
            onMouseEnter={(e) => { e.target.style.transform = "scale(1.05)"; }}
            onMouseLeave={(e) => { e.target.style.transform = "scale(1)"; }}
          >
            Next 💫
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} style={{ width: i === index ? 24 : 8, height: 8, borderRadius: 4, background: i === index ? "#ff8fa3" : "rgba(255,255,255,0.2)", transition: "all 0.3s" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FinalScreen() {
  const [noSize, setNoSize] = useState(1);
  const [yesSize, setYesSize] = useState(1);
  const [noClicks, setNoClicks] = useState(0);
  const [visible, setVisible] = useState(false);
  const noRef = useRef(null);

  useEffect(() => { setTimeout(() => setVisible(true), 50); }, []);

  const handleNo = () => {
    const newClicks = noClicks + 1;
    setNoClicks(newClicks);
    setNoSize(Math.max(0.1, noSize - 0.2));
    setYesSize(yesSize + 0.35);

    if (noRef.current) {
      noRef.current.style.transform = `scale(${Math.max(0.1, noSize - 0.2)})`;
    }
  };

  const handleYes = () => {
    window.open("https://wa.me/919810249170", "_blank");
  };

  const noMessages = [
    "Are you sure? 🥺",
    "Really sure? 😢",
    "Please reconsider 🙏",
    "Last chance! 💔",
    "Okay fine... just kidding, press Yes! 😭",
    "The Yes button misses you too 💛",
  ];

  return (
    <div
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        minHeight: "100vh", padding: "20px", position: "relative", zIndex: 1,
        flexDirection: "column",
      }}
    >
      <div
        style={{
          textAlign: "center", maxWidth: 520,
          animation: visible ? "cardIn 0.8s cubic-bezier(0.34,1.56,0.64,1) both" : "none",
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 16, animation: "float 2s ease-in-out infinite" }}>🥺💕</div>

        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 36, fontWeight: 700,
            background: "linear-gradient(135deg, #ffd6e0, #ff6b9d, #c8b6ff, #ffd6e0)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            margin: "0 0 12px",
            animation: "shimmer 3s linear infinite",
          }}
        >
          Okay, final question...
        </h1>

        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, marginBottom: 48, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
          {noClicks > 0 ? noMessages[Math.min(noClicks - 1, noMessages.length - 1)] : "Are you going to unblock me? 🙈"}
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={handleYes}
            style={{
              padding: `${18 * yesSize}px ${48 * yesSize}px`,
              borderRadius: 50,
              border: "none",
              background: "linear-gradient(135deg, #06d6a0, #48cae4, #0077b6)",
              color: "white",
              fontSize: `${18 * Math.min(yesSize, 3)}px`,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "Georgia, serif",
              boxShadow: `0 ${8 * yesSize}px ${32 * yesSize}px rgba(6,214,160,0.5)`,
              letterSpacing: 1,
              transition: "all 0.3s",
              transform: `scale(${Math.min(yesSize, 4)})`,
              transformOrigin: "center",
            }}
            onMouseEnter={(e) => { e.target.style.filter = "brightness(1.2)"; }}
            onMouseLeave={(e) => { e.target.style.filter = "brightness(1)"; }}
          >
            YES!! 💚
          </button>

          <button
            ref={noRef}
            onClick={handleNo}
            style={{
              padding: "14px 32px",
              borderRadius: 50,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.07)",
              color: "rgba(255,255,255,0.5)",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "Georgia, serif",
              transition: "all 0.3s",
              transform: `scale(${Math.max(0.1, noSize)})`,
              transformOrigin: "center",
              opacity: Math.max(0.1, noSize),
            }}
          >
            No 😒
          </button>
        </div>

        {noClicks >= 3 && (
          <p style={{ marginTop: 32, color: "rgba(255,150,150,0.7)", fontSize: 13, fontFamily: "Georgia, serif", fontStyle: "italic", animation: "fadeUp 0.5s ease" }}>
            The "No" button is shrinking... just saying 👀
          </p>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("login"); // login | messages | final
  const [msgIndex, setMsgIndex] = useState(0);

  const handleNext = () => {
    if (msgIndex < MESSAGES.length - 1) {
      setMsgIndex(msgIndex + 1);
    } else {
      setScreen("final");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0d0a1e; }
        html { min-height: 100%; }
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.8; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: scale(0.85) translateY(30px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-10px); }
          40% { transform: translateX(10px); }
          60% { transform: translateX(-8px); }
          80% { transform: translateX(8px); }
        }
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes bgPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        input:focus { border-color: rgba(255,143,163,0.6) !important; box-shadow: 0 0 0 3px rgba(255,143,163,0.15); }
        input::placeholder { color: rgba(255,255,255,0.3); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: rgba(255,143,163,0.3); border-radius: 3px; }
      `}</style>

      {/* Background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, background: "radial-gradient(ellipse at 20% 20%, #2d1b4e 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, #1a0a2e 0%, transparent 60%), radial-gradient(ellipse at 50% 50%, #0d0a1e 100%)", animation: "bgPulse 8s ease-in-out infinite" }} />
      <div style={{ position: "fixed", inset: 0, zIndex: 0, background: "radial-gradient(ellipse at 70% 10%, rgba(255,107,157,0.12) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(200,182,255,0.1) 0%, transparent 50%)" }} />

      <StarField />

      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
        {screen === "login" && <LoginScreen onLogin={() => setScreen("messages")} />}
        {screen === "messages" && (
          <MessageCard
            key={msgIndex}
            msg={MESSAGES[msgIndex]}
            index={msgIndex}
            total={MESSAGES.length}
            onNext={handleNext}
          />
        )}
        {screen === "final" && <FinalScreen />}
      </div>
    </>
  );
}
