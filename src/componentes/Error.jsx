
const Error = ({error}) => {
  return (
    <div style={{textAlign:'center', height:'100vh'}}>
        <h1 style={{color:"white", backgroundColor:"red", margin:'3rem'}}>{error}</h1>
        <button  style={{color:"white", backgroundColor:"#007237", padding:'0.5rem 1rem',marginLeft:"3rem",cursor:'poiter', float:'left', fontSize:'1.5rem'}} onClick={() => window.location.reload()}>Voltar Pagina</button>
    </div>
  )
}

export default Error