import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Section2 from './section2';

const Section1 = () => {

  return (
       
     <div className='mb'>
        <div className='bg '>
<div className='text-white overLay '>
   <div className="container bg-container position-relative ">

   <div className=''>
      {
      DataSec1.map((item) => (
        <div key={item.id}  className='row   '>
          
          <div className=" col-lg-7 col-md-12  d-flex  div1 ">
          <div className="col-lg-2">
          <div className="position-relative  w ">
          <aside className='vertical-text'>
            <h1>Featured News</h1>
          </aside>
        </div>
          </div>
        <div className=" p-4   ">
          
          <div className="">
          <h4 >{item.name}</h4>
          <div className="line mb-2 " >
           </div>
           <div className="text row  position-relative ">
                          <div className="  col-8 title">
                              <h2 >{item.title} </h2> 
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
          <div className="col-lg-5 col-md-12  div1 ">
          <div className=" p-4  ">
          <div className=" col-12 div1 ">
          <h4>{item.name}</h4>
          <div className="line mb-2 " >
           </div>
           <div className="text row position-relative  ">
                          <div className="  col-lg-9 col-md-12 title ">
                              <h4 >{item.title}</h4> 
                          </div>
                          <div className='d-flex justify-content-end  col-lg-3 col-md-12 clck '>
                          {item.icon}
                            <span className='align-self-center ps-2'> {item.time}  </span>
                          </div>
                          <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate ipsa laborum, quae consequatur sed ab
                      </p>
            </div>
          </div>
          <div className=" col-12  div1 ">
          <h4>{item.name}</h4>
          <div className="line mb-2 " >
           </div>
           <div className="text row   ">
                          <div className="  col-lg-9 col-md-12 title">
                              <h4 >{item.title} </h4> 
                          </div>
                          <div className='d-flex justify-content-end  col-lg-3 col-md-12  '>
                          {item.icon}
                            <span className='align-self-center ps-2'> {item.time}  </span>
                          </div>
                          <p>
                          repellat at repudiandae accusamus deleniti repellendus, facilis blanditiis provident laborum esse enim, in quaerat a?
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


</div> 
  </div>
  );
};

export default Section1;
