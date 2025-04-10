import React, { useState } from 'react'


const Testimonials = () => {
    const [currentindex, setCurrentindex] = useState(0)
    const testimonials = [
        {
            quote: "This is the best product i've ever used!",
            author: "Jane Doe",
        },
        {
            quote: "I highly recommend this product to everyone!",
            author: "John Smith",
        },
        {
            quote: "This product has completely changed my life!",
            author: "Bob Johnson",
        }
    ]

const handlePrev = () => {
    setCurrentindex(
        (currentindex + testimonials.length-1) % testimonials.length
    )
}
const handleNext = () =>{
    setCurrentindex(
        (currentindex + 1) % testimonials.length
    );
}

  return (
    <div className='"testimonials'>
        <div className="testimonials-quote">
            {testimonials[currentindex].quote}
        </div>
        <div className="testimonials-author">
            {testimonials[currentindex].author}
        </div>
        <div className="testimonials-nav">
            <button onClick={handlePrev}>
                Prev
            </button>
            <button onClick={handleNext}>
                Next
            </button>
        </div>
    </div>
  )
}

export default Testimonials