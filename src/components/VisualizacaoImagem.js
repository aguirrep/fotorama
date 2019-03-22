import React, { Component } from 'react';
//import { Link } from 'react-router-dom';


class VisualizacaoImagem extends Component {

    //  constructor() {
    //     super();
    //  }


    render() {
        const imagem = this.props.location.state.imagem;
        return (
            <div>

                <div className="row visualizacaoImagem">

                    <div className="card">
                        <div className="card-body text-center">
                            <img src={imagem.urlTamanhoPequeno} alt="Imagem" />
                        </div>
                    </div>

                </div>

        
                

            </div>
        );

    }
}

export default VisualizacaoImagem;