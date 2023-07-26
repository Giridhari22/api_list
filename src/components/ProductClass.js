import React , {Component} from "react";
import axios from "axios";


export class ProductClass extends Component {
  constructor(toggleComponent){
    super();
    this.state ={
        product :"",
        data :"",
        loading: false
    }
  }

  componentDidUpdate = async (x,y)=>{ 
    if(y.product !== this.state.product){
        const res = await axios.get(`https://dummyjson.com/products/${this.state.product}`)
        this.setState(
            {data: res.data}
        )
    }
  }

handleChangeData = () =>{
    this.setState({
         loading: true ,
        product: Math.floor(Math.random()*100)+1
    })
    setTimeout(()=>{
      this.setState({loading:false})
    },2000)
}


  render() {

    const{loading} = this.state;
    return (
      <>

<section class="h-100" style={{backgroundColor: "#eee;"}}>
  <div class="container h-100 py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10">
              
        <div class="card rounded-3 mb-4">
        <h2>  class based component</h2>
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-2 col-lg-2 col-xl-2">
                 {this.state.data ?   <img
                  src={this.state.data.thumbnail}
                  className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                  :<h6> There is nothing to show image</h6>}
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
        {this.state.data?  <p class="lead fw-normal mb-2">{this.state.data.title}</p>
                : <p> There is nothing to show </p>}
            {this.state.data?  
                <p><span class="text-muted">{this.state.data.brand}</span>M <span class="text-muted"></span></p>
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
                {this.state.data? <h5 class="mb-0">{this.state.data.price}</h5>:  <h6>do you wanna see price</h6> }
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
       

        <div class="card">
          <div class="card-body">
            <button type="button" class="btn btn-warning btn-block btn-lg" onClick={this.handleChangeData}>
             {loading && <i className="fa fa-refresh fa-pin"></i>}
             {loading && <span> Loading Change Data</span> }
            Change Data</button>
          </div>
        </div >
         <br></br>
        <div class="card">
          <div class="card-body ">
            <button  type="button" class="btn btn-primary btn-block btn-lg "  onClick={this.props.toggleComponent}>Switch Component</button>
          </div>
        </div >


      </div>
    </div>
  </div>
</section>

      
      </>
    )
  }
}

export default ProductClass