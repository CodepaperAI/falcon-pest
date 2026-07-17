export function Input({ label, error, ...props }) {
  return (
    <label className="block text-sm text-[#BDBDBD]">
      <span className="mb-2 block font-medium text-white">{label}</span>
      <input
        {...props}
        className="w-full rounded-2xl border border-[#2A2A2A] bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]"
      />
      {error ? <span className="mt-2 block text-sm text-red-400">{error}</span> : null}
    </label>
  );
}
