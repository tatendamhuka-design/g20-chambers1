export default function AvailabilityBadge({ status }) {
  const config = {
    accepting: {
      label: '✅ Accepting New Cases',
      className: 'bg-green-50 text-green-700 border-green-200',
    },
    limited: {
      label: '⚠️ Limited Availability',
      className: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    },
    full: {
      label: '❌ Not Accepting New Cases',
      className: 'bg-red-50 text-red-700 border-red-200',
    },
  }

  const { label, className } = config[status] || config.full

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${className}`}>
      {label}
    </span>
  )
}