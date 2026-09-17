import { lazy, Suspense, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import BookingModal from './components/BookingModal.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const Experience = lazy(() => import('./pages/Experience.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const openBooking = () => setBookingOpen(true)

  return (
    <div className="font-sans antialiased min-h-screen flex flex-col relative overflow-x-hidden">
      <Nav onBookMeeting={openBooking} />
      <main className="flex-grow pt-24 flex flex-col">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home onBookMeeting={openBooking} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience onBookMeeting={openBooking} />} />
            <Route path="/contact" element={<Contact onBookMeeting={openBooking} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  )
}
