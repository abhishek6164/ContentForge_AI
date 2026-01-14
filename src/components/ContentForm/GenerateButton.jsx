const GenerateButton = ({ onGenerate, isRegenerate }) => (
    <button
        onClick={onGenerate}
        className={`w-full py-3 rounded-lg font-semibold text-white
    ${isRegenerate
                ? "bg-zinc-700 hover:bg-zinc-600"
                : "bg-gradient-to-r from-purple-500 to-pink-500"
            }`}
    >
        {isRegenerate ? "Re-Generate 🔁" : "Generate 🚀"}
    </button>
);

export default GenerateButton;
