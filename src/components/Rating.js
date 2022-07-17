const Rating = ({ rating, numberOfReviews }) => {
  return (
    <div className="rating flex space-x-1  text-yellow-500 text-xs">
      <i
        className={
          rating >= 1
            ? 'fa-solid fa-star'
            : rating === 0.5
            ? 'fa-solid fa-star-half'
            : 'fa-regular fa-star'
        }
      ></i>
      <i
        className={
          rating >= 2
            ? 'fa-solid fa-star'
            : rating === 1.5
            ? 'fa-solid fa-star-half'
            : 'fa-regular fa-star'
        }
      ></i>
      <i
        className={
          rating >= 3
            ? 'fa-solid fa-star'
            : rating === 2.5
            ? 'fa-solid fa-star-half'
            : 'fa-regular fa-star'
        }
      ></i>
      <i
        className={
          rating >= 4
            ? 'fa-solid fa-star'
            : rating === 3.5
            ? 'fa-solid fa-star-half'
            : 'fa-regular fa-star'
        }
      ></i>
      <i
        className={
          rating >= 5
            ? 'fa-solid fa-star'
            : rating === 4.5
            ? 'fa-solid fa-star-half'
            : 'fa-regular fa-star'
        }
      ></i>
      <span>({numberOfReviews})</span>
    </div>
  )
}

export default Rating
