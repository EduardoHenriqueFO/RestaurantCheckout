const pedidosPendentes = [];
const pedidosEmProducao = [];
const pedidosFinalizados = [];
let ultimoId = 0;
let pedidoAtual = null;
let valorDoTroco = null;
const $ = (id) => document.getElementById(id);

$('numero-do-pedido-landing').textContent = `Pedido# ${ultimoId + 1}`;
function atualizarNumeroPedido() {
  $('numero-do-pedido-landing').textContent = `Pedido# ${ultimoId + 1}`;
}

function fecharModalDeConfirmacaoDePedido() {
  $('modalDeConfirmacaoDePedido').style.display = 'none';
}

function finalizarPedido(event) {
  event.preventDefault();
  const nome = $('nome-cliente').value;
  const telefone = $('fone-cliente').value;
  const endereco = $('endereco-cliente').value;
  let pedidoCliente = $('pedido-cliente').value;
  let valorDoPedido = $('valor-pedido').value;
  let valorDoTroco = $('troco').value;
  let formaDePagamento = $('pagamento').value;
  const pedido = {
    nome: nome,
    telefone: telefone,
    endereco: endereco,
    pedidoCliente: pedidoCliente,
    valorDoPedido: valorDoPedido,
    valorDoTroco: valorDoTroco,
    formaDePagamento: formaDePagamento,
    numeroDoPedido: ultimoId + 1,
    horarioEmitido: new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    }),
  };
  pedidoAtual = pedido;
  atualizarNumeroPedido();
  exibirModalDeConfirmacaoDePedido(pedido);
}

function exibirModalDeConfirmacaoDePedido(pedido) {
  $('nome-cliente-modal').textContent = pedido.nome;
  $('fone-cliente-modal').textContent = pedido.telefone;
  $('endereco-cliente-modal').textContent = pedido.endereco;
  $('pedido-cliente-modal').textContent = pedido.pedidoCliente;
  $('valor-pedido-modal').textContent = pedido.valorDoPedido;
  $('pagamento-modal').textContent = pedido.formaDePagamento;
  if (valorDoTroco >= 0) {
    $('troco-modal').textContent = pedido.valorDoTroco;
  } else {
    $('troco-modal').textContent = 'Sem troco';
  }
  $('numero-do-pedido-modal').textContent = pedido.numeroDoPedido;
  $('modalDeConfirmacaoDePedido').style.display = 'block';
}

function confirmarPedido() {
  if (pedidoAtual) {
    // Se tiver pedidos ele faz o push
    pedidosEmProducao.push(pedidoAtual);
    pedidoAtual = null;
  }
  console.log(pedidosEmProducao); // Debug para ver a lista dos pedidos.
  fecharModalDeConfirmacaoDePedido();
  limparFormulario();
  ultimoId++;
}

function limparFormulario() {
  $('pedido-cliente').value = '';
  $('valor-pedido').value = '';
  $('pagamento').value = '';
  $('troco').value = '';
  $('nome-cliente').value = '';
  $('fone-cliente').value = '';
  $('endereco-cliente').value = '';
}

const selectPagamento = $('pagamento');
const campoTroco = $('troco');

campoTroco.style.display = 'none';

selectPagamento.addEventListener('change', function () {
  if (selectPagamento.value == 'troco') {
    campoTroco.style.display = 'flex';
  } else {
    campoTroco.style.display = 'none';
  }
});
