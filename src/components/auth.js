import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { Storage } from "@capacitor/storage"
import { SALESMAN } from "../config/constant"

const Auth = () => {
	useEffect(() => {
		Storage.get({ key: "user" })
			.then(user => {
				if (!user.value) {
					navigate("/login")
				}
				else {
					user = JSON.parse(user.value)
					// console.log(user.value)
					// console.log(user.value.expired_at)
					// console.log(new Date().getTime())
					if (user.expired_at >= new Date().getTime()) {
						navigate("/login")
					}
					else {
						if (window.location.pathname == "/") {
							if (user.position_name === SALESMAN) {
								navigate('/sales')
							} else {
								navigate("/purchasing")
							}
						}
					}
				}
			}, error => {
				navigate("/login")
			}
		)
  }, [])

  return (
  	<div></div>
  )
}

export default Auth