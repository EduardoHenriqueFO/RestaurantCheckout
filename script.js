let pedidosPendentes = [];
let pedidosEmProducao = [];
let pedidosFinalizados = [];
let ultimoId = 0;

function exibirModalDeConfirmacaoDePedido(pedido) {
  document.getElementById('nome-cliente-modal').textContent = pedido.nome;
  document.getElementById('fone-cliente-modal').textContent = pedido.telefone;
  document.getElementById('endereco-cliente-modal').textContent =
    pedido.endereco;
  document.getElementById('pedido-cliente-modal').textContent =
    pedido.pedidoCliente;
  document.getElementById('valor-pedido-modal').textContent =
    pedido.valorDoPedido;
  document.getElementById('pagamento-modal').textContent =
    pedido.formaDePagamento;
  document.getElementById('troco-modal').textContent = pedido.valorDoTroco;
  document.getElementById('numero-do-pedido-modal').textContent =
    pedido.numeroDoPedido;
  document.getElementById('modalDeConfirmacaoDePedido').style.display = 'block';
}

function fecharModalDeConfirmacaoDePedido() {
  document.getElementById('modalDeConfirmacaoDePedido').style.display = 'none';
}

function finalizarPedido(event) {
  event.preventDefault();
  let nome = document.getElementById('nome-cliente').value;
  let telefone = document.getElementById('fone-cliente').value;
  let endereco = document.getElementById('endereco-cliente').value;
  let pedidoCliente = document.getElementById('pedido-cliente').value;
  let valorDoPedido = document.getElementById('valor-pedido').value;
  let valorDoTroco = document.getElementById('troco').value;
  let formaDePagamento = document.getElementById('pagamento').value;
  numeroDoPedido = ultimoId;
  let pedido = {
    nome: nome,
    telefone: telefone,
    endereco: endereco,
    pedidoCliente: pedidoCliente,
    valorDoPedido: valorDoPedido,
    valorDoTroco: valorDoTroco,
    formaDePagamento: formaDePagamento,
    numeroDoPedido: numeroDoPedido + 1,
  };
  pedidosPendentes.push(pedido);
  exibirModalDeConfirmacaoDePedido(pedido);
}

function confirmarPedido() {
  pedidosEmProducao.push(pedidosPendentes.pop());
  console.log(pedidosEmProducao);
  fecharModalDeConfirmacaoDePedido();
  limparFormulario();
  ultimoId++;
}

function limparFormulario() {
  document.getElementById('pedido-cliente').value = '';
  document.getElementById('valor-pedido').value = '';
  document.getElementById('pagamento').value = '';
  document.getElementById('troco').value = '';
  document.getElementById('nome-cliente').value = '';
  document.getElementById('fone-cliente').value = '';
  document.getElementById('endereco-cliente').value = '';
}
