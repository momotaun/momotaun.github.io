export default function BookingModal({ open, onClose }) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-on-background/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="bg-surface w-full max-w-4xl h-[80vh] rounded-xl shadow-lg overflow-hidden flex flex-col relative">
        <div className="flex justify-between items-center p-4 border-b border-outline-variant">
          <h3 className="text-headline-md font-headline-md text-on-surface">Schedule a Meeting</h3>
          <button
            className="p-2 hover:bg-surface-variant rounded-full transition-colors"
            onClick={onClose}
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="flex-grow">
          <iframe
            title="Booking calendar"
            frameBorder="0"
            height="100%"
            width="100%"
            style={{ border: 0 }}
            src="https://calendar.google.com/calendar/appointments/schedules-placeholder?gv=true"
          />
        </div>
      </div>
    </div>
  )
}
