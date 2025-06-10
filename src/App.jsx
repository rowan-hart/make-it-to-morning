import React, { useState } from "react";

const toolkits = {
  disappear: "Sometimes we just want to not exist for a while. This feeling is valid, and you're not alone. Try placing your feet on the ground. Notice three things you see. Two you can touch. One you can hear. You're here, and that's enough right now.",
  stay: "A reason to stay doesn’t have to be big. Maybe it’s a song. A person. A memory. Maybe it’s just that you haven’t seen tomorrow yet. And tomorrow might surprise you.",
  clean: "If you’re thinking of using again, pause here. Breathe in for 4 seconds. Hold for 7. Out for 8. You are not a failure for craving relief. Let’s get through this moment first.",
  break: "Close your eyes for ten seconds. Imagine your safest place — even if it’s not real. Breathe into it. You are allowed to step back and rest."
};

const resources = [
  { name: "988 Suicide & Crisis Lifeline (USA)", link: "https://988lifeline.org/" },
  { name: "Crisis Text Line (Global)", link: "https://www.crisistextline.org/" },
  { name: "7 Cups (Free anonymous chat)", link: "https://www.7cups.com/" },
  { name: "Make It to Morning Guides", link: "https://makeittomorning.gumroad.com/" }
];

export default function App() {
  const [selectedToolkit, setSelectedToolkit] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert("Thank you. You'll start receiving daily messages from Rowan soon.");
    setEmail("");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      <div className="max-w-xl w-full text-center">
        <img src="/banner.png" alt="Make It to Morning banner" className="w-full max-w-3xl mx-auto mb-10" />

        {!selectedToolkit ? (
          <>
            <p className="mb-6">
              Things feel too heavy. Maybe you’re thinking of giving up. Maybe it just hurts too much right now. You don’t need to explain it. You’re here.
            </p>

            <button
              className="w-full bg-white text-black rounded-2xl px-6 py-3 font-semibold shadow-lg mb-6 transition hover:bg-gray-200"
              onClick={() => setSelectedToolkit("panic")}
            >
              I’m not okay
            </button>

            <div className="space-y-3">
              <button className="w-full bg-gray-800 border border-gray-600 rounded-2xl px-6 py-3 transition hover:bg-gray-700" onClick={() => setSelectedToolkit("disappear")}>I want to disappear</button>
              <button className="w-full bg-gray-800 border border-gray-600 rounded-2xl px-6 py-3 transition hover:bg-gray-700" onClick={() => setSelectedToolkit("stay")}>I need a reason to stay</button>
              <button className="w-full bg-gray-800 border border-gray-600 rounded-2xl px-6 py-3 transition hover:bg-gray-700" onClick={() => setSelectedToolkit("clean")}>I don’t want to use today</button>
              <button className="w-full bg-gray-800 border border-gray-600 rounded-2xl px-6 py-3 transition hover:bg-gray-700" onClick={() => setSelectedToolkit("break")}>I just need a break</button>
            </div>

            <p className="text-sm text-gray-400 mt-10">
              Tap one above to find something that might help. No login. No judgment.
            </p>

            <div className="mt-4">
              <button
                onClick={() => setShowMessage(!showMessage)}
                className="text-sm text-blue-400 underline hover:text-blue-300"
              >
                {showMessage ? "Hide" : "Hear from Rowan"}
              </button>
              {showMessage && (
                <p className="mt-4 text-sm text-gray-200 bg-gray-800 rounded-xl p-4 text-left">
                  I’ve been where you are. Not metaphorically. Literally shaking, breaking, wanting out. I used to sit on the edge of my bed thinking if I stayed still long enough, maybe I’d vanish. I don’t have magic words. But I can tell you this: pain distorts truth. And the truth is — you matter. Even now. Even like this. I hope you stay. Not for me. For whatever tiny reason hasn’t quit on you yet.
                </p>
              )}
            </div>

            <form onSubmit={handleEmailSubmit} className="mt-8 bg-gray-800 border border-gray-700 rounded-xl p-4 text-left">
              <h3 className="text-lg font-semibold mb-2">📬 Daily messages from Rowan</h3>
              <p className="text-sm text-gray-300 mb-2">One message each morning. Gentle. Honest. No spam. Just a reminder that you're not alone.</p>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full sm:w-auto flex-1 px-4 py-2 rounded-lg text-black"
                />
                <button type="submit" className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-400">
                  Send it to me
                </button>
              </div>
            </form>

            <div className="mt-8 border border-gray-700 rounded-xl p-4 bg-gray-800">
              <h3 className="text-lg font-semibold mb-2">🌒 The Survival Toolkit</h3>
              <p className="text-sm text-gray-300 mb-2">
                Built for nights like this — the Make It to Morning Survival Toolkit is a downloadable guide filled with grounding tools, real talk, and the kind of help I wish someone had handed me.
              </p>
              <a
                href="https://makeittomorning.gumroad.com/l/hdvukn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm text-blue-400 underline hover:text-blue-300"
              >
                Get the Survival Toolkit →
              </a>
            </div>

            <div className="mt-8">
              <button
                onClick={() => setShowResources(!showResources)}
                className="text-sm text-blue-400 underline hover:text-blue-300"
              >
                {showResources ? "Hide Resources" : "Crisis & Support Resources"}
              </button>
              {showResources && (
                <ul className="mt-4 space-y-2 text-sm text-left">
                  {resources.map((r, i) => (
                    <li key={i}>
                      <a href={r.link} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline hover:text-blue-200">
                        {r.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </>
        ) : (
          <div className="text-left">
            <h2 className="text-2xl font-semibold mb-4">Let’s take a moment</h2>
            <p className="mb-6 whitespace-pre-line">
              {selectedToolkit === "panic"
                ? "Start here. Breathe in for 4. Hold for 7. Out for 8. You’re safe in this moment. Let’s keep you here for now. This page won’t ask anything of you — just breathe."
                : toolkits[selectedToolkit]}
            </p>
            <div className="mt-6 border border-gray-700 rounded-xl p-4 bg-gray-800 text-sm text-gray-300">
              This is just one page. The full Survival Toolkit has dozens more like it — grounding tools, self-talk, and raw reminders made to keep you alive when it’s darkest.
              <a
                href="https://makeittomorning.gumroad.com/l/hdvukn"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-400 underline hover:text-blue-300"
              >
                See the full guide →
              </a>
            </div>
            <button
              className="mt-6 px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-200"
              onClick={() => setSelectedToolkit(null)}
            >
              Back
            </button>
          </div>
        )}

        <div className="mt-12 text-xs text-gray-500">
          © 2025 Rowan Hart · Make It to Morning
        </div>
      </div>
    </main>
  );
}
