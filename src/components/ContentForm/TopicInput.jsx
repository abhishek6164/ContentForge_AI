const TopicInput = ({ topic, setTopic }) => (
    <input
        type="text"
        placeholder="Enter your topic..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="w-full p-3 rounded-lg bg-zinc-900 text-white 
    border border-zinc-700 focus:outline-none 
    focus:ring-2 focus:ring-purple-500"
    />
);

export default TopicInput;
