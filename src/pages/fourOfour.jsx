import { useNavigate } from "react-router-dom"


export const FourOfour = () => {
    const nav=useNavigate()
  return (
    <>
    404 Page not Found!!
    <button onClick={()=>{
        nav('/payments')
    }}>
      Back to Payments
    </button>
    </>
  )
}

