import React from 'react'
import './propertyList.css'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Hotel_Sayaji%2CKolhapur.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3a/2006-06-14_Villa_Clooney_in_Laglio.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>2331 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Sani_Resort.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>2331 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Sch%C3%B6nau_an_der_Triesting_-_Villa_%28Kirchengasse_11%29.JPG" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>2331 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Hiltonhotel.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>2331 hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList