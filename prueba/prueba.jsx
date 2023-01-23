// const burger = [];
// burger.push({burger: true})
// console.log(burger)
// const result = burger.find(e => e.burger === true)
// console.log(result)

// burger.find(e => e.burger === true) ? console.log("hola") : console.log("ch")

function formatNumber(num) {
    return parseInt(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  console.log(formatNumber("23322345"))