import React, { useEffect, useState } from "react"
import { Storage } from "@capacitor/storage"
import { navigate } from "gatsby"
import axios from "axios"
import { LAPAK_MOBIL_DEFAULT_URL } from "../../config/constant"
import SalesScreen from "./SalesScreen"

const SalesContainer = (props) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState({
    status: false,
    message: ''
  })
  const [listing, setListing] = useState([])
  const [session, setSession] = useState({
    expired_at: 0,
    employee_code: "",
    employee_name: "",
    position_name: "",
    status: 1,
    token: "",
    username: "",
    employee_img: ""
  })

  useEffect(() => {
    if (props.reloadList) {
      setLoading(true)
      Storage.get({ key: "user" })
        .then(user => {
          if (user.value) {
            user = JSON.parse(user.value)
            setSession(user)
            getListing(user)
          }
        }, error => {
          console.error(error)
        }
      )
    }
  }, [props.reloadList])

  const getListing = (user) => {
    setLoading(true)
    axios.get(LAPAK_MOBIL_DEFAULT_URL + "Car_info/offsetViewSales/0/0/0/0/0/0/0/20", {
      headers: {
        "Authorization": "Bearer " + user.token
      }
    })
    .then(function (response) {
      setListing(response.data)
      setLoading(false)
    })
    .catch(function (error) {
      handleError(error)
    })
  }

  const handleError = (error) => {
    let message = "TERJADI KESALAHAN PADA SISTEM. MOHON COBA BEBERAPA SAAT LAGI"
    if (error && error.response && error.response.data) {
      if (error.response.data.message) {
        message = error.response.data.message
      }
    }
    setLoading(false)
    setAlert({
        status: true,
        message: message
    })
    if (error.response.status == 401) {
      setTimeout(function () {
        Storage.remove({ key: "user" })
          .then(user => {
            navigate("/login")
          }, error => {
            console.error(error)
          }
        )
      }, 2000)
    }
  }

  const hideSidebar = () => {
    setShowSidebar(false)
  }

  const toggleAlert = () => {
    setAlert({
      ...alert,
      status: !alert.status
    })
  }

  return (
    <SalesScreen 
      listing={listing}
      showSidebar={showSidebar}
      loading={loading}
      alert={alert}
      toggleAlert={toggleAlert}
      session={session}
      hideSidebar={hideSidebar} />
  )
}


export default SalesContainer