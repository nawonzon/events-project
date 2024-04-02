import { Routes, Route } from 'react-router-dom'
import { EventsPage } from './pages/events.page'
import { ShowEventPage } from './pages/show-event.page'
import styled from '@emotion/styled'

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<ShowEventPage />} />
      </Routes>
    </Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
