function validacao() {
	if(document.fcadastro.tNome.value == "") {
		alert("Digite seu nome");
		document.fcadastro.tNome.focus();
		return false;
	}
}