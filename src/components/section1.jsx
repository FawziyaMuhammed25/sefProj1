import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Section2 from './section2';

const Section1 = () => {

  return (
        <>
    <div className='text-white'>
  
<div className="container">
 
    
          <div className=''>
          {
          DataSec1.map((item) => (
            <div key={item.id}  className='row my-4 '>
              
              <div className=" col-lg-6 col-md-12 div1 d-flex ">
              <div className="">
          <aside className='vertical-text'>
             <h1>Featured News</h1>
          </aside>
        </div>
            <div className=" p-4   div2">
              
              <div className="div2">
              <h4 >{item.name}</h4>
              <div className="line mb-2 " >
               </div>
               <div className="text row  position-relative ">
                              <div className="  col-8 title">
                                  <h3 >{item.title} </h3> 
                              </div>
                              <div className='d-flex justify-content-end  col-4 clck '>
                              {item.icon}
                                <span className='align-self-center ps-2'> {item.time}  </span>
                              </div>
                              <p>
                                  {item.text}
                              </p>
                </div>
              </div>
           
          </div>
              </div>
              <div className="col-lg-6 col-md-12 div1 ">
              <div className=" p-4  ">
              <div className=" col-12  div1 ">
              <h4>{item.name}</h4>
              <div className="line mb-2 " >
               </div>
               <div className="text row position-relative  ">
                              <div className="  col-lg-9 col-md-12 title ">
                                  <h3 >{item.title}</h3> 
                              </div>
                              <div className='d-flex justify-content-end  col-lg-3 col-md-12 clck '>
                              {item.icon}
                                <span className='align-self-center ps-2'> {item.time}  </span>
                              </div>
                              <p>
                            {item.text}
                          </p>
                </div>
              </div>
              <div className=" col-12 div1 ">
              <h4>{item.name}</h4>
              <div className="line mb-2 " >
               </div>
               <div className="text row   ">
                              <div className="  col-lg-9 col-md-12 title">
                                  <h3 >{item.title} </h3> 
                              </div>
                              <div className='d-flex justify-content-end  col-lg-3 col-md-12  '>
                              {item.icon}
                                <span className='align-self-center ps-2'> {item.time}  </span>
                              </div>
                              <p>
                             {item.text}
                          </p>
                </div>
              </div>
           
          </div>
          
             </div>

                       
          </div>
                  
           
          ))
        }
         
    </div>
  
  </div>


       
         
      
      
</div>
  
    <Section2/>
    </> 
  );
};

export default Section1;
