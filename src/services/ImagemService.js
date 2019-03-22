import axios from 'axios';
import * as serviceConfig from '../utils/serviceUtils';

class ImagemService{
    pesquisarImagens(consulta){
        consulta = consulta.toLowerCase().trim();
        
        //forma direta de concatenar string/url de pesquida montada
        const urlPesquisa = `${serviceConfig.URL_API}`
        +`&query=${consulta}`
        +`&client_id=${serviceConfig.CHAVE_API}`;

        return axios.get(urlPesquisa);
            
    }
}

export default ImagemService;
