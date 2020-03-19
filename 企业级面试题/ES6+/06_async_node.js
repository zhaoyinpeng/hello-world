let fs = require('fs')
function readFile(url) {
  return new Promise((resolve, reject) => {
    fs.readFile('./haha.txt', function (err, data) {
      if (err) {
        reject(err)
        return
      }
      resolve(data.toString())
    })
  })
}
async function main(){
  let str = await readFile()
  console.log(str)
}
main()
console.log(345)