const ResultBox = ({ result }) => {
    const responses = result.split("\n\n").filter(Boolean);

    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copied ✨");
    };

    return (
        <div className="mt-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-lg font-semibold text-zinc-300">
                ✨ AI Generated Results
            </h2>

            {responses.map((item, index) => (
                <div
                    key={index}
                    className="relative p-5 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg"
                ><p className="text-xs text-zinc-400 mb-2">
                        Characters: {item.length}
                    </p>

                    <div className="flex justify-between items-center mb-3">
                        <span className="text-xs text-purple-400">
                            Response {index + 1}
                        </span>
                        <button
                            onClick={() => copyText(item)}
                            className="text-xs px-3 py-1 rounded-full bg-purple-500/20 
              text-purple-300 hover:bg-purple-500/30"
                        >
                            Copy
                        </button>
                    </div>

                    <p className="text-sm whitespace-pre-wrap leading-relaxed text-zinc-100">
                        {item}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ResultBox;
