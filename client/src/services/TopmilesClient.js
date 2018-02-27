import axios from "axios"

let TopmilesClient = {}
TopmilesClient.API_HOST = ""

const urlFor = path => `${TopmilesClient.API_HOST}/api${path}`
TopmilesClient.auth = {
  register: async ({ email, password }) => {
    const response = await axios.post(urlFor(`/register.json`), {
      user: {
        email,
        password,
      },
    })
    return response.data
  },
}

export default TopmilesClient
