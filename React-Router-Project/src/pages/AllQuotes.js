import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    {
        id:'q1' , 
        author: 'max' , 
        text : 'Learning react'
    } ,
    {
        id:'q2' , 
        author: 'vicky' , 
        text : 'Learning react'
    }
]
function AllQuotes() {
  return (
    <QuoteList quotes = {DUMMY_QUOTES} />
  )
}

export default AllQuotes