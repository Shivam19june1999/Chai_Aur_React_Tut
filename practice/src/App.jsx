import { useState} from 'react'
import useDetail from './context/Detail'
import Bar from './components/Bar'
function App() {
  // const {setDetail}=useDetail()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  // ii method
  // const add =(event)=>{ 
  //  setName(event.target.value)
  // }npm 
  // const add=(event)=>{
  //   setName(event.target.value)
  // }
  const handleSubmit=(event)=>{
    event.preventDefault();
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    // setDetail(event.target[0].value)
  }
  return (
    <>        
    <h1 className='bg-teal-500 text-center font-serif border-4 shadow-sm text-xl text-black rounded-lg'>{name}</h1>
    <h1 className='bg-teal-500 text-center font-serif border-4 shadow-sm text-xl text-black rounded-lg'>{email}</h1> 
    //ii method
    {/* <input value={name} type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/> 
    <input value={email} type='text' placeholder='Enter Name' onChange={(e)=>setEmail(e.target.value)}/>  */} */}
    {/* <input value={name} type='text' placeholder='Enter Name' onChange={add}/> */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email'/>
        <button> Submit</button>
      </form>
    <Bar/>
    </>
  )
}

export default App
