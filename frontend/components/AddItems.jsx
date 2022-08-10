import React from 'react'

const AddItems = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [qty, setQty] = useState(0)
    
    const user = JSON.parse(localStorage.getItem('user'))

    const handleSubmit = () => {
        console.log(name, price, qty, user._id)
    }

  return (
    <div style={{textAlign: 'center'}}>
        <h1>Add items</h1>

        <span>Name</span>
        <input 
            type='text' onChange={(e) => setName(e.target.value)}
        />

        <span>Price</span>
        <input 
            type='text' onChange={(e) => setPrice(e.target.value)}
        />

        <span>Qty</span>
        <input 
            type='text' onChange={(e) => setQty(e.target.value)}
        />

        <button
            onClick={handleSubmit}
        >
            Submit
        </button>

    </div>
  )
}

export default AddItems