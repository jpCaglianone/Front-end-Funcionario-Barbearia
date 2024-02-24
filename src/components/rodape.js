import React from "react";

function Rodape() {

     return (
        <>
            
            <footer className="footer-form">
                <p>&copy; 2024 Barbearia Mix. Todos os direitos reservados.</p>
                <p>Email: contato@minhaempresa.com</p>
                
                <nav>
                    <a href="/sobre">Sobre Nós</a>
                    | <a href="/contato">Contato</a>
                    | <a href="/termos">Termos de Serviço</a>
                </nav>
            </footer>
        </>
    )
}

export default Rodape;