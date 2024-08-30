import './ShoppingCard.css'

export default function ShoppingCard(){
  return(
    <div className='card'>
    <img className='placeholder' src="/placeholder.jpg" alt="placeholder.jpg" />
    <div className='prodDetails'>
      <h3 className='productName'>Product Name</h3>
      <h3 className='price'>$Test</h3>
    </div>
    <button className='addBtn'>Add to Cart</button>
    </div>
  )


}