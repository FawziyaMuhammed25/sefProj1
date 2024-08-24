import {React , useNavigate} from 'react';
import {Data} from '../data'; 

const Section2 = () => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //    navigate('/Business');
    
  // };
  return (
    
    <div className='text-white'>

      <div className="container">
       
          
                <div className=''>
                {
                Data.map((item) => (
                  <div key={item.id}  className='row mb-5 '>
                    
                    <div className="  col-lg-4 col-md-12 ">
                           <div className="image w-100 m-auto">
                           <img src={item.image} className='img-fluid'/>
                           </div>
                    </div>
                    <div className="col-lg-8 col-md-12 p-2">
                      <div>
                         <h4>{item.name}</h4>
                        <div className="line mb-2 " ></div>
                      </div>
                       <div className="text row position-relative  ">
                              <div className="  col-lg-8 col-md-12 title">
                                  <h3 >{item.title} </h3> 
                              </div>
                              <div className='d-flex justify-content-end  col-lg-4 col-md-12 clck '>
                              {item.icon}
                                <span className='align-self-center ps-2'>{item.time}  </span>
                              </div>
                             <div className="d-flex">
                                <p className=' p-3'>
                                {item.text}
                                
                                </p>
                                <span className="text-dark align-self-center  font "
                                
                                // onClick={handleClick}
                                >{item.next}</span>
                             </div>
                             
                </div>
                      </div>    
                  </div>
                ))
              }
               
          </div>
        
        </div>
    
      
             
               
            
            
    </div>
  );
};

export default Section2;