import React, { useState } from 'react'
import heroprice from '../img/heroprice.jpg'
import check from '../img/check.svg'
import beta from '../img/bg-beta.jpg'
import arrow from '../img/arrow.svg'

const Pricing = () => {

  const [toggleChecked, setToggleChecked]= useState(false)
  const [billing, setBilling]= useState({
    duration: "Monthly"
  })

  const handleToggle= () => {
    setToggleChecked(!toggleChecked)
    toggleChecked? setBilling({...billing, duration:"Yearly"}): setBilling({...billing, duration:"Monthly"})
  }

  console.log(billing.duration)
  


  return (
    <div className='pricingdiv'>
         <div className="grid1">
            <div className='grid12'>
                <h1>PRICING</h1>
                <p>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others</p>
            </div>
            <img className='img' src={heroprice} alt="" />
        </div>

        <div className="plans">
        <div className="toggle">
        <p style={toggleChecked? {color:'hsla(0, 0%, 0%,0.5)'}: null} className='togglep'>MONTHLY</p>
        <label className="switch">
        <input type='checkbox' checked={toggleChecked} onChange={handleToggle}/>
        <span className="slider round"></span>
        </label>
        <p style={!toggleChecked? {color:'hsla(0, 0%, 0%,0.5)'}: null} className='toggler'>YEARLY</p>
        </div>
        </div>

        <div className='photoplans'>
          <div className="basic">
            <h4>Basic</h4>
            <p className='move'>Includes basic usage of our platform. <br /> Recommended for new and aspiring <br /> photographers.</p>
            <h5>{toggleChecked? "$200.00":"$19.00"}</h5>
            <p className='moves'>per {toggleChecked? 'year':'month'}</p>
            <button>PICK PLAN</button>
          </div>
          <div className="pro">
            <h4>Pro</h4>
            <p className='move'>More advanced features available. <br /> Recommended for photography <br /> veterans and professionals</p>
            <h5>{toggleChecked? '$400.00':'$39.00'}</h5>
            <p className='movep'>per {toggleChecked? 'year':'month'}</p>
            <button>PICK PLAN</button>
          </div>
          <div className="business">
            <h4>Business</h4>
            <p className='move'>Additional features available such as <br /> more detailed metrics. Recommended <br /> for business owners.</p>
            <h5>{toggleChecked? '$1000.00':'$99.00'}</h5>
            <p className='moveb'>per {toggleChecked? 'year':'month'}</p>
            <button>PICK PLAN</button>
          </div>
        </div>


        

        <div className="comparesm">
          <h1>COMPARE</h1>
         <div className="comparesmdiv">
         <h5>THE FEATURES</h5>
          <h6>UNLIMITED STORY POSTING</h6>
          <div className="basicdivs">
            <div className='basicdivs1'>
              <h6>BASIC</h6>
              <img src={check} alt="" />
            </div>
            <div className='basicdivs1'>
              <h6>PRO</h6>
              <img src={check} alt="" />
            </div>
            <div className='basicdivs1'>
              <h6>BUSINESS</h6>
              <img src={check} alt="" />
            </div>
          </div>
          <h6>UNLIMITED PHOTO UPLOAD</h6>
          <div className="basicdivs">
            <div className='basicdivs1'>
              <h6>BASIC</h6>
              <img src={check} alt="" />
            </div>
            <div className='basicdivs1'>
              <h6>PRO</h6>
              <img src={check} alt="" />
            </div>
            <div className='basicdivs1'>
              <h6>BUSINESS</h6>
              <img src={check} alt="" />
            </div>
          </div>
          <h6>EMBEDDING CUSTOM CONTENT</h6>
          <div className="basicdivs">
            <div className='basicdivs1'>
              <h6>BASIC</h6>
            </div>
            <div className='basicdivs1'>
              <h6>PRO</h6>
              <img src={check} alt="" />
            </div>
            <div className='basicdivs1'>
              <h6>BUSINESS</h6>
              <img src={check} alt="" />
            </div>
          </div>
          <h6>CUSTOMIZE METADATA</h6>
          <div className="basicdivs">
            <div className='basicdivs1'>
              <h6>BASIC</h6>
            </div>
            <div className='basicdivs1'>
              <h6>PRO</h6>
              <img src={check} alt="" />
            </div>
            <div className='basicdivs1'>
              <h6>BUSINESS</h6>
              <img src={check} alt="" />
            </div>
          </div>
          <h6>ADVANCED METRICS</h6>
          <div className="basicdivs">
            <div className='basicdivs1'>
              <h6>BASIC</h6>
            </div>
            <div className='basicdivs1'>
              <h6>PRO</h6>
            </div>
            <div className='basicdivs1'>
              <h6>BUSINESS</h6>
              <img src={check} alt="" />
            </div>
          </div>
          <h6>PHOTO DOWNLOADS</h6>
          <div className="basicdivs">
            <div className='basicdivs1'>
              <h6>BASIC</h6>
            </div>
            <div className='basicdivs1'>
              <h6>PRO</h6>
            </div>
            <div className='basicdivs1'>
              <h6>BUSINESS</h6>
              <img src={check} alt="" />
            </div>
          </div>
          <h6>SEARCH ENGINE INDEXING</h6>
          <div className="basicdivs">
            <div className='basicdivs1'>
              <h6>BASIC</h6>
            </div>
            <div className='basicdivs1'>
              <h6>PRO</h6>
            </div>
            <div className='basicdivs1'>
              <h6>BUSINESS</h6>
              <img src={check} alt="" />
            </div>
          </div>
          <h6>CUSTOM ANALYTICS</h6>
          <div className="basicdivs">
            <div className='basicdivs1'>
              <h6>BASIC</h6>
            </div>
            <div className='basicdivs1'>
              <h6>PRO</h6>
            </div>
            <div className='basicdivs1'>
              <h6>BUSINESS</h6>
              <img src={check} alt="" />
            </div>
          </div>
         </div>
        </div>



        <div className="comparebs">
            <h1>COMPARE</h1>
            <table className='table'>
               <thead>
               <tr className='th'>
                  <th>THE FEATURES</th>
                  <th>BASIC</th>
                  <th>PRO</th>
                  <th>BUSINESS</th>
                </tr>
               </thead>
              <tr className='tr'>
                <td>UNLIMITED STORY POSTING</td>
                <td style={{textAlign:"center"}}><img src={check} alt="" /></td>
                <td style={{textAlign:"center"}}><img src={check} alt="" /></td>
                <td style={{textAlign:"center"}}><img src={check} alt="" /></td>
              </tr>
              <tr  className='tr'>
                <td>UNLIMITED PHOTO DOWNLOAD</td>
                <td style={{textAlign:"center"}}><img src={check} alt="" /></td>
                <td style={{textAlign:"center"}}><img src={check} alt="" /></td>
                <td style={{textAlign:"center"}}><img src={check} alt="" /></td>
              </tr>
              <tr className='tr'>
                <td>EMBEDDING CUSTOM CONTENT</td>
                <td></td>
                <td style={{textAlign:"center"}}><img src={check} alt="" /></td>
                <td style={{textAlign:"center"}}><img src={check} alt="" /></td>
              </tr>
              <tr className='tr'>
                <td>CUSTOMIZE METADATA</td>
                <td></td>
                <td style={{textAlign:"center"}}><img src={check} alt="" /></td>
                <td style={{textAlign:"center"}}><img src={check} alt="" /></td>
              </tr>
              <tr className='tr'>
                <td>ADVANCED METRICS</td>
                <td></td>
                <td></td>
                <td style={{textAlign:"center"}}><img src={check} alt="" /></td>
              </tr>
              <tr className='tr'>
                <td>PHOTO DOWNLOADS</td>
                <td></td>
                <td></td>
                <td style={{textAlign:"center"}}><img src={check} alt="" /></td>
              </tr>
              <tr className='tr'>
                <td>SEARCH ENGINE INDEX</td>
                <td></td>
                <td></td>
                <td style={{textAlign:"center"}}><img src={check} alt="" /></td>
              </tr>
              <tr className='tr'>
                <td>CUSTOM ANALYTICS</td>
                <td></td>
                <td></td>
                <td style={{textAlign:"center"}}><img src={check} alt="" /></td>
              </tr>
            </table>
          </div>
          
        <div className="beta">
            <img src={beta} alt="" />
            <div className="beta1">
                <h1>WE'RE IN BETA. <br />GET YOUR INVITE <br /> TODAY!</h1>
                <div className='betalast'>
                <h6 className='animm'>GET AN INVITE</h6>
                <img src={arrow} alt="" />
                </div>
            </div>



            
        </div>
    </div>
  )
}

export default Pricing