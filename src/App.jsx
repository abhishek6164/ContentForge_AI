import { useState } from "react";
import Header from "./components/Header";
import ContentForm from "./components/ContentForm/ContentForm";
import Loader from "./components/Loader";
import ResultBox from "./components/ResultBox";
import "./index.css";

function App() {
  const [topic, setTopic] = useState("");
  const [platform, setPlatform] = useState("linkedin");
  const [tone, setTone] = useState("professional");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastPrompt, setLastPrompt] = useState("");

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  // 🎯 Platform-wise smart prompt
  const getPrompt = () => {
    switch (platform) {
      case "linkedin":
        return `
Write a ${tone} LinkedIn post.
Topic: ${topic}
Use a professional tone.
Avoid emojis.
Add a short CTA at the end.
`;
      case "instagram":
        return `
Write a ${tone} Instagram caption.
Topic: ${topic}
Keep it short.
Use emojis.
Add hashtags.
`;
      default:
        return `Write a ${tone} post on ${topic}`;
    }
  };

  // 🚀 Generate / Re-generate content
  const generateContent = async (regenerate = false) => {
    if (!topic && !regenerate) {
      alert("Enter topic");
      return;
    }

    const finalPrompt = regenerate ? lastPrompt : getPrompt();
    setLastPrompt(finalPrompt);

    setLoading(true);
    setResult("");

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: finalPrompt }],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      const aiText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response from AI";

      setResult(aiText);
    } catch (error) {
      console.error(error);
      setResult("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <ContentForm
        topic={topic}
        setTopic={setTopic}
        setPlatform={setPlatform}
        setTone={setTone}
        onGenerate={generateContent}
      />

      {loading && <Loader />}
      {result && <ResultBox result={result} />}
    </>
  );
}

export default App;
