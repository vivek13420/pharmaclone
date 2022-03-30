

var tabs = document.querySelectorAll('[data-tab-target]')
var tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    var target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


function addtoCart(elem){
  console.log(elem);
  CharacterData.push(elem)
  localStorage.setItem("cart",JSON.stringify(cartData))
  
}











