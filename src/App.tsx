import { Routes, Route } from 'react-router-dom'
import { EventsPage } from './pages/events.page'
import { ShowEventPage } from './pages/show-event.page'

function App() {
  return (
    <Routes>
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/:id" element={<ShowEventPage />} />
    </Routes>
  )
}

export default App
