const PlatformSelect = ({ setPlatform }) => (
    <select
        onChange={(e) => setPlatform(e.target.value)}
        className="w-full p-3 rounded-lg bg-zinc-900 text-white 
    border border-zinc-700 focus:ring-2 focus:ring-blue-500"
    >
        <option value="linkedin">LinkedIn</option>
        <option value="instagram">Instagram</option>
    </select>
);

export default PlatformSelect;
