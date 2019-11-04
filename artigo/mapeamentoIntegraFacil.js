void salvaConector(Endpoint, usuario, senha, formaAutenticacao,testado, estaAtivo){
	
	addConectorBanco(Endpoint, usuario, senha, formaAutenticacao,testado, estaAtivo);
	return true;
};
 void cadastrarConector(endpoint, usuario, senha, formaAutenticacao, testado=false, estaAtivo=false){
	
	conector = salvaConector(endpoint, usuario, senha, formaAutenticacao,testado, estaAtivo);
	if(conector.sucesso = true)
		return true;
	else
		return conector.msgFalha;

 };
 void conecta(conector.endpoint,conector.usuario,conector.senha,conector.formaAuth){
	 return true;
 };
 void ativaConector(conector){
	return true;
 };
 void testaConector(conector){
	resultado = conecta(conector.endpoint,conector.usuario,conector.senha,conector.formaAuth);
	if(resultado ='200')
		return ativaConector(conector);
	else
		return resultado.msgFalha;
 };
 void ativarConector(conector){
	
	if(conector.testado)
		if(!conector.estaAtivo)
			return ativaConector(conector);
		else
			return "O conector j� est� ativo.";
	else
		return "O conector n�o foi testado.";
 };

 void salvaIntegracao(){
	addIntegracaoBanco();
	return true;
};

void cadastrarIntegracao(descricao,nomeUnico, exemploEntrada, exemploSaida){
	if(!buscaIntgracao(nomeUnico)){
		return"
	}
	salvaIntegracao(descricao,nomeUnico, exemploEntrada, exemploSaida)

}
Cadastrar integração
	Definir descrição
	definir nomeUnico
	selecionar arquivo exemplo entrada
	Selecionar arquivo exemplo saída
		Definir mapeamento
		salvar em banco
			campo entrada = campo saida
	selecionar conector
	salvar em banco
	disponibilizar "endpoint"
Ao ativar integração, 
	alterar flag para "ativo"
	acionar rota do backend para subir o serviço
Ao desativar integração
	alterar flag para "inativo"
	acionar rota do backend para parar o serviço
Logs
	Listar integrações que existem cadastros, diferenciar integrações ativas das inativas
	Ao selecionar uma integração
		listar dados das instâncias
	permitir baixar o conteúdo
-------------------------------------------------------
Backend
Ao iniciar
	subir o serviços
	buscar a lista de endpoints testados e ativos
	subir serviços
	ficar aguardando conexões
Ao acionar ativar integração.
	Buscar integração.
	subir o serviço
Ao desativar integração
	Verificar se está ativa
	Se sim
		desativar
	else
		retornar erro
Ao ter endpoint acionado
	guardar horário de acionamento
	receber endpoint
		guardar payload recebido
	buscar lista de mapeamento
	Explodir payload pelo nome
		Bater lista campo entrada = campo saida com for
	com os valores salvos, criar um novo payload no formato final
		guardar payload final
	conectar com o endpoint final
	enviar payload 
	salvar retorno do endpoint.
	
	Gravar histórico guardado da instância
	FIM
	