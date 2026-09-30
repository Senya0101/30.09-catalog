import React from 'react'
import Card from './Card'

class Catalog extends React.Component {
  constructor(props) {
    super(props)

    // защищаемся от случая, когда products не передан или не массив
    const products = Array.isArray(props.products) ? props.products : []

    const discounts = products.reduce((acc, p) => {
      acc[p.id] = p.discount
      return acc
    }, {})

    this.state = { discounts }
  }

  handleDiscount = (id) => {
    this.setState((state) => {
      const nextDiscounts = { ...state.discounts }
      nextDiscounts[id] = Math.min(nextDiscounts[id] + 5, 90)
      return { discounts: nextDiscounts }
    })
  }

  render() {
    const products = Array.isArray(this.props.products) ? this.props.products : []
    const { discounts } = this.state

    if (products.length === 0) {
      return <p className="text-muted">Товары не найдены</p>
    }

    return (
      <div className="row g-3">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
            <Card
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              discount={discounts[product.id]}
              onDiscount={this.handleDiscount}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default Catalog