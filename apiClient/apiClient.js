class ApiClient{

  async getApi(path){
    const data = await fetch(`http://localhost:3000/api/content/${path}`)
    return await data.json()
  }

  async submitApi(formData){
    await fetch(`http://localhost:3000/api/upload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    }) 
  }

  async mkDir(){
    await fetch()
  }
}

const apiClient = new ApiClient()

export default apiClient
