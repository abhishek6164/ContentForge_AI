import TopicInput from "./TopicInput";
import PlatformSelect from "./PlatformSelect";
import ToneSelect from "./ToneSelect";
import GenerateButton from "./GenerateButton";

const ContentForm = ({
    topic,
    setTopic,
    setPlatform,
    setTone,
    onGenerate
}) => {
    return (
        <div className="max-w-xl mx-auto space-y-4 bg-zinc-950 p-6 rounded-2xl shadow-xl">
            <TopicInput topic={topic} setTopic={setTopic} />
            <PlatformSelect setPlatform={setPlatform} />
            <ToneSelect setTone={setTone} />

            {/* Generate */}
            <GenerateButton onGenerate={() => onGenerate(false)} />

            {/* Re-generate */}
            <GenerateButton
                onGenerate={() => onGenerate(true)}
                isRegenerate
            />
        </div>
    );
};

export default ContentForm;
