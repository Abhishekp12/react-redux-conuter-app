import {useSelector,useDispatch} from 'react-redux' ;
import {incNumber, decNumber} from './Components/Service/action/Action';

function App() {
  const myState=useSelector((state)=>state.changeNumber);
  const dispatch=useDispatch();
  return (
    <div className='mt-5 d-flex justify-content-center ' >
    <div className=" mt-5">  
 <div className="mt-5 mb-5  " style={{textAlign:'center', color:'black' , fontWeight:'bold'}}>counter output : {myState}</div>
 <div className=' d-flex  mt-5'>

 <div className="border border-primary text-primary rounded-circle m-2 p-1" style={{textAlign:'center' , fontWeight:'bold', cursor:'pointer'}} onClick={()=>dispatch(incNumber())} > incremet + </div>

 <div className="border border-warning text-warning rounded-circle m-2 p-1" style={{textAlign:'center' , fontWeight:'bold', cursor:'pointer'}} onClick={()=>dispatch(decNumber())}> decrement - </div>
 </div>
  </div>
  </div>
  );
}

export default App;
