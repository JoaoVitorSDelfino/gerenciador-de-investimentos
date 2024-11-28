import { useNavigate } from "react-router-dom"
import InvestmentList from "./InvestmentList"

function UserMenu() {
    const navigate = useNavigate(); // Hook para navegação

    const redirect = (route) => {
        if (route === 0) {
            navigate("/addInvestment")
        } else if (route === 1) {
            navigate("/users")
        } else if (route === 2) {
            navigate("/1")
        }
    }

    return (
      <div className="background" style={{ textAlign: "center", marginTop: "50px", backgroundColor: "#ececec" }}>
        <h2> Controle de Investimentos</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <button onClick={() => redirect(0)} style={{ padding: "10px 15px", backgroundColor: "#28A745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Adicionar Novo Investimento
            </button>
          </li>
        </ul>
        <InvestmentList />
      </div>
    );
}

export default UserMenu;