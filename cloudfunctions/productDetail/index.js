// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database({
  env: "yunandxin-93rv6"
})

// 云函数入口函数
exports.main = async (event, context) => {
  const id = event.id
  // product detail
  const productRes = await db.collection('products').doc(id).get()
  console.log(productRes)
  const product = productRes.data

  return product
  
}