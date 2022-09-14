import React from 'react'
import { useParams , Route } from 'react-router-dom'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

import Comments from '../components/comments/Comments'


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

function QuoteDetail() {
    const params =  useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId )

    if(!quote) {
        return <p>No quote found</p>
    }
  return (
    <div>
    <HighlightedQuote text = {quote.text} author = {quote.author} />
    <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
    </Route>
    </div>
    
  )
}

export default QuoteDetail