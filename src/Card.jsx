import cn from 'classnames'
import React from 'react'

class Card extends React.Component {
  handleDiscount = () => {
    this.props.onDiscount(this.props.id)
  }

  render() {
    const { name, price, image, discount } = this.props
    const finalPrice = Math.round(price * (1 - discount / 100))

    return (
      <div className="card h-100 shadow-sm">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>

          <p className="card-text mb-1">
            {discount > 0 ? (
              <>
                <s className="text-muted me-2">{price} руб</s>
                <span className="fw-bold text-danger">{finalPrice} руб</span>
              </>
            ) : (
              <span className="fw-bold">{price} руб</span>
            )}
          </p>

          <p className="card-text">
            <small className="text-muted">Ваша сикдка {discount}%</small>
          </p>

          <button
            type="button"
            className={cn('btn', 'btn-primary', 'mt-auto')}
            onClick={this.handleDiscount}
          >
            Повысить скидку
          </button>
        </div>
      </div>
    )
  }
}

export default Card