import React from 'react';
import axios from 'axios';
import {useEffect , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css'


function Product({toggleComponent}) {
 
    const [ product , setProduct] = useState();
    const [ data , setData] = useState();
    const [loading, setLoading] = useState(false);

 
    useEffect(()=>{
        const fetchData = async()=>{
         
            const res = await axios.get(`https://dummyjson.com/products/${product}`)
            setData(res.data)
            
        }
        fetchData()
           

    },[product])

    const handleChangeData = () =>{
      setLoading(true)
        setProduct(Math.floor(Math.random()*100)+1)
        setTimeout(()=>{
          setLoading(false)
        },2000)
    }

  return (
    <>
    
     <section className="h-100 "  >
  <div class="container h-100 py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10">
              
        <div class="card rounded-3 mb-4">
        <h2>  function based</h2>
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-2 col-lg-2 col-xl-2">
                 {data ?   <img
                  src={data.thumbnail}
                  className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                  :<h6> There is nothing to show image</h6>}
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
        {data?  <p class="lead fw-normal mb-2">{data.title}</p>
                : <p> There is nothing to show </p>}
            {data?  
                <p><span class="text-muted">{data.brand}</span>M <span class="text-muted"></span></p>
                : <h6>There is nothing to show brand</h6> }
              </div>
              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i class="fas fa-minus"></i>
                </button>

                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <label> Price</label>
                {data? <h5 class="mb-0">{data.price}</h5>:  <h6>do you wanna see price</h6> }
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
       

        <div class="card">
          <div class="card-body">
            <button type="button" class="btn btn-warning btn-block btn-lg" onClick={handleChangeData}>
             {loading && <i className="fa fa-refresh fa-pin"></i>}
             {loading && <span> Loading Change Data</span> }
            Change Data</button>
          </div>
        </div>
        <br></br>
        <div class="card">
          <div class="card-body">
          <button  type="button" class="btn btn-primary btn-block btn-lg"  onClick={toggleComponent}>Switch Component</button>
             
          </div>
        </div>
       

      </div>
    </div>
  </div>
</section>

      
        
    
    </>
  )
}

export default Product


