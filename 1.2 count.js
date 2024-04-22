const arr=[
  {amount:1,quantity:2},
  {amount:1,quantity:2},
  {amount:1,quantity:10},
  {amount:10,quantity:10},
  {amount:10,quantity:101111},
  {amount:1022222,quantity:111},
  {amount:232323,quantity:111},
  {amount:1,quantity:111},
  {amount:1,quantity:11100000},
  {amount:100,quantity:10},
]

const data = arr.map(i=>{
  i.totalTime = i.quantity * i.amount
  return i
})
//todo could be optimized:remove sort, create once tree of new objects
console.log(data.sort((a,b)=>a.totalTime-b.totalTime))
