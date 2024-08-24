import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Section2 from './section2';

const Section1 = () => {

  return (
   <>
   <div className=' text-white my-5'  >
     
     <div className="container  div1  ">
      
      <div className="row p-4">
       
          <div className="col-lg-6 col-md-12 div1 d-flex ">
          <div className="">
          <aside className='vertical-text'>
             <h1>Featured News</h1>
          </aside>
        </div>
            <div className=" p-4   div2">
              <div className="div2">
              <h4 >tech</h4>
              <div className="line mb-2 " >
               </div>
               <div className="text row  position-relative ">
                              <div className="  col-8 title">
                                  <h3 >here's the first artical </h3> 
                              </div>
                              <div className='d-flex justify-content-end  col-4 clck '>
                              <FontAwesomeIcon icon={faClock} className=' align-self-center' />
                                <span className='align-self-center ps-2'> 2 h ago  </span>
                              </div>
                              <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate ipsa laborum, quae consequatur sed ab exercitationem quas? Nobis doloribus soluta repellat at repudiandae accusamus deleniti repellendus, facilis blanditiis provident laborum esse enim, in quaerat a?

                          </p>
                </div>
              </div>
           
          </div>
         </div>
         <div className="col-lg-6 col-md-12 div1 ">
          <div className=" p-4 ">
              <div className="div2  col-12">
              <h4>tech</h4>
              <div className="line mb-2 " >
               </div>
               <div className="text row position-relative  ">
                              <div className="  col-lg-9 col-md-12 title">
                                  <h3 >here's the second artical </h3> 
                              </div>
                              <div className='d-flex justify-content-end  col-lg-3 col-md-12 clck '>
                              <FontAwesomeIcon icon={faClock} className=' align-self-center' />
                                <span className='align-self-center ps-2'> 3 h ago  </span>
                              </div>
                              <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem aperiam quo. Maxime esse numquam autem alias, delectus officiis architecto!

                          </p>
                </div>
              </div>
              <div className="div2 col-12">
              <h4>tech</h4>
              <div className="line mb-2 " >
               </div>
               <div className="text row   ">
                              <div className="  col-lg-9 col-md-12 title">
                                  <h3 >here's the third artical </h3> 
                              </div>
                              <div className='d-flex justify-content-end  col-lg-3 col-md-12  '>
                              <FontAwesomeIcon icon={faClock} className=' align-self-center' />
                                <span className='align-self-center ps-2'> 4 h ago  </span>
                              </div>
                              <p>
                             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, nihil qui ratione aliquid velit veniam?

                          </p>
                </div>
              </div>
           
          </div>
          
         </div>
        
        
      </div>
     </div>
     
     
     
    </div>
    <Section2/>
    </> 
  );
};

export default Section1;
