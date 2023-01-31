import styles from './Stars.module.css'

import { useState } from 'react'
import { Star } from 'phosphor-react'

export function Stars({ name }) {
  const [rating, setRating] = useState(null)
  return (
    <div className={styles.labelStars}>
      <label>{name}</label>
      <div className={styles.stars}>
        {[...Array(5)].map(( star, i ) => {
          const ratingValue = i + 1

          return (
            <label>
              <input 
                type="radio" 
                name="rating" 
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <Star 
                className={styles.star}
                size={20} 
                color={ratingValue <= rating ? "#FED501" : "#174164"}
                weight="fill"
              />
            </label>
          )
        })}
      </div>

    </div>
  )
}