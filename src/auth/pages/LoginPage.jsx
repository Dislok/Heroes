import { useNavigate } from "react-router-dom";


export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = ()=>{
    navigate("/dc",{replace :true});
  }

  return (
    <div className="container mt-5">
    <h1>Inicio de Secion</h1>
    <hr />
    <button className="btn btn-primary"
    onClick={ onLogin}>
      Entrar
    </button>
    </div>
  )
}
