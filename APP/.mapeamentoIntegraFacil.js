//async await;

function conecta(endpoint,usuario,senha,formaAuth){
	return true;
};
function addConectorBanco(endpoint, usuario, senha, formaAutenticacao,testado, estaAtivo){
	return true;
}

function salvaConector(endpoint, usuario, senha, formaAutenticacao,testado, estaAtivo){
	addConectorBanco(endpoint, usuario, senha, formaAutenticacao,testado, estaAtivo);
};

function ativarConector(conector){	
	if(conector.testado)
		if(!conector.estaAtivo){
			ativarRota(conector);
			return "200";
		}
		else
			return "O conector já está ativo.";
	else
		return "O conector não foi testado.";
 };

function cadastrarConector(endpoint, usuario, senha, formaAutenticacao, testado=false, estaAtivo=false){
	conector = salvaConector(endpoint, usuario, senha, formaAutenticacao,testado, estaAtivo);
	return (conector.sucesso = true ? conector.sucesso : conector.msgFalha);
 };

function testaConector(conector){
	resultado = conecta(conector.endpoint,conector.usuario,conector.senha,conector.formaAuth);
	if(resultado ='200')
		return ativarConector(conector);
	else
		return resultado.msgFalha;
 };

function addIntegracaoBanco(descricao,nomeUnico, exemploEntrada, exemploSaida, mapeamento, conectorSaida){
	return true;
}
function buscaIntgracao(nomeUnico){
	return true;
}
 
function salvaIntegracao(descricao,nomeUnico, exemploEntrada, exemploSaida, mapeamento, conectorSaida){
	addIntegracaoBanco(descricao,nomeUnico, exemploEntrada, exemploSaida, mapeamento, conectorSaida);
};

function cadastrarIntegracao(descricao,nomeUnico, exemploEntrada, exemploSaida, mapeamento, conectorSaida){
	if(!buscaIntgracao(nomeUnico))
		return "Defina um identificador unico";
	else
		return salvaIntegracao(descricao,nomeUnico, exemploEntrada, exemploSaida, mapeamento, conectorSaida);
}	

function ativarRota(){
	return true
 };
 
 function desativarRota(){
	return true
 };

function ativarIntegracao(integracao){	
	if(integracao.estaAtivo)
		if(integracao.conectorSaida.estaAtivo)
			return ativarRota(conector);
		else
			return "O conector não foi testado."
	else
		return "o conector já está ativo";
 };
 function desativarIntegração(integracao){	
	if(!integracao.estaAtivo)
		return desativarRota(conector);
	else
		return "a integracao já está inativa";
 };


	
