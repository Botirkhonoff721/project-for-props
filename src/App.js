import React from 'react';
import './App.css'
import Fruits from './Root/Fruits'


const data = [
  {id: 1, img:'https://image.shutterstock.com/image-photo/fresh-red-apple-on-white-260nw-153386453.jpg',title: 'Apple', uom: '02',size : '02', unit:'$8.99',total: '$17,99'  },
  {id: 2, img:'https://cdn5.vectorstock.com/i/1000x1000/69/64/apricot-isolated-white-background-vector-31746964.jpg',title: 'Apricot', uom: '02',size : '02', unit:'$8.99',total: '$17,99'  },
  {id: 3, img:'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1551316.jpg',title: 'Ananas', uom: '02',size : '02', unit:'$8.99',total: '$17,99'  },
  {id: 4, img:'https://image.shutterstock.com/image-photo/tasty-bananas-isolated-on-white-260nw-238793359.jpg',title: 'Banana', uom: '02',size : '02', unit:'$8.99',total: '$17,99'  },
  {id: 5, img:'https://st2.depositphotos.com/3247525/11019/i/950/depositphotos_110195686-stock-photo-cherries-isolated-on-white-background.jpg',title: 'Cherry', uom: '02',size : '02', unit:'$8.99',total: '$17,99'  },
  {id: 6, img:'https://i.pinimg.com/736x/53/5b/39/535b39b71fcf75886ef16d11f41ad29c.jpg',title: 'Kiwi', uom: '02',size : '02', unit:'$8.99',total: '$17,99'  },
  {id: 7, img:'https://previews.123rf.com/images/atoss/atoss1501/atoss150100034/35300340-.jpg',title: 'Orange', uom: '02',size : '02', unit:'$8.99',total: '$17,99'  },
  {id: 8, img:'https://previews.123rf.com/images/btk1977/btk19771206/btk1977120600004/13900514-fresh-strawberries-isolated-on-white-background-.jpg',title: 'Strawberry', uom: '02',size : '02', unit:'$8.99',total: '$17,99'  },
]
class App extends React.Component {
  render(){
    return(
     <div className='container'>
     {
       data.map((value,index)=>
        <div>
            <Fruits data={value}/>
        </div>
       )
     }
     </div>
    )
  }
}
export default App