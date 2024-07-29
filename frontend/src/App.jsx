// import React, { useState } from 'react'
import { Button } from '@chakra-ui/button'
import { Container } from '@chakra-ui/react'

function App() {

  return (
    <Container maxW='620px'>
      <Router>
        <Route path='/:username' element={<UserPage />}/>
      </Router>
    </Container>
  )
}

export default App
