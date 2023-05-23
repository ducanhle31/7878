import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({books,deleteBook}) => {
    
    return books.map((book) => (
      <div className="review" key={book.isbn}>
        <div className="reviewleft">

          <p className="user__name mb-0">{book.name}</p>
          <p className="user__email">{book.enteredEmail}</p>
          <p className="feedback__text">{book.isbn}</p>
        </div>
      
        <div>
          <p className="delete-btn" onClick={() => deleteBook(book.isbn)}>
            <Icon icon={trash} />
          </p>
        </div>
      </div>
    ));
}
