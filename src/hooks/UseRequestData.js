import { useEffect, useState } from 'react'
import axios from 'axios'


const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)
  const headers = {
    headers: {
      auth: localStorage.getItem('token'),
      ContentType: 'application/json'

    }
  }
  useEffect(() => {
    axios.get(url, headers)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [url])

  return (data)
}

export default useRequestData
