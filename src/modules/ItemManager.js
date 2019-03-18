import APIManager from "./APIManager"

const ItemManager = Object.create(APIManager, {
  desiredDatabase: {
    value: "items"
  }
})

export default ItemManager