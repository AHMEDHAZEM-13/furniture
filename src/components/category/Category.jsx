import React from 'react'
import { Link } from 'react-router-dom'

export default function Category() {
  return (
    <div className='categories'>

            <div className="col">
                <div className="row">
                    <img src="/src/assets/images/img4.jpg" alt="" />
                    <button>
                        <Link className="link" to={'/shop/'}> Sale</Link>
                    </button>
                </div>

                <div className="row">
                    <img src="/src/assets/images/img8.png" alt="" />
                    <button>
                        <Link className="link" to={'/shop/'}>New Season</Link>
                    </button>
                </div>
            </div>

            <div className="col">
                <div className="row"><img src="/src/assets/images/img7.jpg" alt="" />
                    <button>
                        <Link className="link" to={'/shop/'}>LivingRoom</Link>
                    </button></div>
            </div>

            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="/src/assets/images/img9.jpg" alt="" />
                            <button>
                                <Link className="link" to={'/shop/'}>BedRoom</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="/src/assets/images/img11.jpg" alt="" />
                            <button>
                                <Link className="link" to={'/shop/'}>scandinavian-cabinet</Link>
                            </button>
                        </div>
                    </div>
                    
                </div>
                <div className="row"><img src="/src/assets/images/img13.jpg" alt="" />
                    <button>
                        <Link className="link" to={'/shop/'}>DiningRoom</Link>
                    </button>
                </div>

            </div>
        </div>
  )
}
