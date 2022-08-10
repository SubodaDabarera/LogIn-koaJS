import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const HomePage = () => {

    const [role, setRole] = useState('Trader')

    console.log(JSON.parse(localStorage.getItem('user')))

  return (
    <div>
        
        {
            role == 'Trader' && (
                <>
                    <Link to = '/addItems'>
                        <button style={{textAlign: 'center'}}>
                            Add items
                        </button>
                    </Link>
                    <Link to = '/view'>
                        <button style={{textAlign: 'center'}}>
                            View items
                        </button>
                    </Link>
                </>
            )
        }

            <Link to = '/view'>
                <button style={{textAlign: 'center'}}>
                    View items
                </button>
            </Link>
            



    </div>
  )
}

export default HomePage