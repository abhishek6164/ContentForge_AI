const ToneSelect = ({ setTone }) => (
    <select
        onChange={(e) => setTone(e.target.value)}
        className="w-full p-3 rounded-lg bg-zinc-900 text-white 
    border border-zinc-700 focus:ring-2 focus:ring-pink-500"
    >
        <option value="professional">Professional</option>
        <option value="casual">Casual</option>
        <option value="motivational">Motivational</option>
    </select>
);

export default ToneSelect;
