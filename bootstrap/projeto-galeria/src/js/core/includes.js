import $ from 'jquery';//chamando jquery

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback) {
  if (!loadHtmlSuccessCallbacks.includes(callback)) {
    loadHtmlSuccessCallbacks.push(callback)
  }
}

function loadIncludes(parent) {
  if (!parent) parent = 'body'
  $(parent).find('[wm-include]').each(function (index, elemento) {
    const url = $(elemento).attr('wm-include')
    $.ajax({
      url,
      success(data) {//pega o resultado obtido
        $(elemento).html(data)//insere dentro do elemento e
        //  excluir para que não aja nenhuma interpretação novamente dela
        $(elemento).removeAttr('wm-include')//remove o elemento

        loadHtmlSuccessCallbacks.forEach(callback => callback(data))
        loadIncludes(elemento)// em cima do elemento que acabou de obter, vai de novo de forma recursiva 
      }                       // chamar o loadincludes para que use ESSE elemento como PARENT
    })
  })
}
loadIncludes() // chamar para dar start no processo