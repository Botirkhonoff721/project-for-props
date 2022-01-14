import React from 'react'
import './fruit.css'
class Fruit extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count: 0
        }
    }
    render(){
        // const decreament=()=>{
        //     if(this.state.count >= 1){
        //         this.setState({count: this.state.count - 1})

        //     }
        // }
        // const increament=()=>{
        //     this.setState({count: this.state.count +1})
        // }
        const{title,size,uom,img,unit,total}=this.props.data
        return(
            
            <div className='Container'>
                <div className='img'>
                    <img src={img} width='100%' height='100%' />
                </div>
                <div className='details'>
                    <div className='top'>
                        <h2 className='title'>{ title}</h2>
                        <button className='btn'>Add</button>
                    </div>
                    <div className='bottom'>
                        <div className='data'>
                          <p className='heading'>UOM</p>
                          <p className='value'>{uom}</p>
                        </div>
                        <div className='data'>
                          <p className='heading'>Pack Size</p>
                          <p className='value'>{unit}</p>
                        </div>
                        <div className='data'>
                          <p className='heading'>Per Unit</p>
                          <p className='value'>02</p>
                        </div>
                        <div className='data'>
                          <p className='heading'>Total</p>
                          <p className='value'>{total}</p>
                        </div>
                       
                    </div>

                </div>
            </div>
        )
    }
}
export default Fruit;

// <div className='quantity'>
// <button onClick={decreament} className='btnDec'>-</button>
// <h4 className='count'>{this.state.count}</h4>
// <button onClick={increament}  className='btnInc'>+</button>
// </div>