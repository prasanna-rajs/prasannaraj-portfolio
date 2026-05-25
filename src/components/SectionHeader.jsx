/**
 * SectionHeader — displays the gradient title line, heading, and subtitle
 * used at the top of every portfolio section.
 */
export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-12">
      {/* Gradient accent line */}
      <div className="w-14 h-[3px] rounded-full bg-gradient-to-r from-[#7c6bff] to-[#ff6b9d] mb-4" />
      <h2 className="section-heading font-head font-bold tracking-tight dark:text-white text-gray-900 mb-3">
        <span className="gradient-text">{title}</span>
      </h2>

      {subtitle && (
        <p className="font-body text-[15px] leading-relaxed dark:text-gray-400 text-gray-500 max-w-2xl">
  {subtitle}
</p>
      )}
    </div>
  )
}
