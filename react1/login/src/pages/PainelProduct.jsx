import MenuBar from "../components/painelProduct/MenuBar"
import { React,useState } from "react";
import PainelMainClassificacaoFiscal from "../components/painelProduct/PainelMainClassificacaoFiscal";

const PainelProduct = () => {

    const [actionPainelProduct, setActionPainelProduct] = useState("classiFicacaofiscal");

    const painelsProduct={
        classiFicacaofiscal:(<PainelMainClassificacaoFiscal/>),

        addProdutos:(<div>
            <h1>Tela Add Produtos</h1>
        </div>),

        fornecedor:(<div>
            <h1>Tela fornecedor</h1>
        </div>),

        notaFiscal:(<div>
            <h1>Tela Nota Fiscal</h1>
        </div>),

        entrada:(<div>
            <h1>Tela Entrada</h1>
        </div>),

        saida:(<div>
            <h1>Tela Saida</h1>
        </div>),

        estoque:(<div>
            <h1>Tela Estoque</h1>
        </div>),
    }

  return (
    <div>
        <nav className="headerMenu">
            <MenuBar setActionPainelProduct={setActionPainelProduct}/>
            <hr />
            <div>

            </div>
            {painelsProduct[actionPainelProduct] || painelProduct.classiFicacaofiscal}
        </nav>
    </div>
  )
}

export default PainelProduct