import APIManager from "./APIManager"

const BoxManager = Object.create(APIManager, {
  desiredDatabase: {
    value: "boxes"
  }
})

export default BoxManager