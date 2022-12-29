import { useState, useEffect} from 'react'
import {PageLayout} from '../components/layouts/PageLayout'
import { services } from '../services'
import TestCards from '../components/TestCards'

export const TestHistory = () => {
  const [tests, setTests] = useState([])

  useEffect(() => {
    const Testings = services.results.fetchResults()
    setTests(Testings)
  }, [])

  const deleteResult = (id) => {
    const filtered = services.results.removeResult(id)
    setTests(filtered)
  }

  return(
    <PageLayout title={`Testing history: ${tests.length}`}>
      {
        tests.map((test, index) => {
          return(
            <TestCards
              key={test.id}
              correct={test.correct}
              date={test.date}
              grade={test.grade}
              group={test.group}
              id={test.id}
              name={test.name}
              title={test.title}
              total={test.total}
              deleteTest = {deleteResult}
            />
          )
        }).reverse()
      }
    </PageLayout>
  )
}