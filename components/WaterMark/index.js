import React, { useEffect } from 'react'

const consoleMyName = () => {
 console.log(`
   ██████╗██╗  ██╗███████╗████████╗ █████╗ ███╗██╗
  ██╔════╝██║  ██║██╔════╝╚══██╔══╝██╔══██╗████║██║
  ██║     ███████║█████╗     ██║   ███████║██╔██║██║
  ██║     ██╔══██║██╔══╝     ██║   ██╔══██║██║╚████║
  ╚██████╗██║  ██║███████╗   ██║   ██║  ██║██║ ╚███║
   ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚══╝

           💻 Front-End Developer 💻
`)
  }

const WaterMark = () => {
    useEffect(consoleMyName, [])
    return <></>
}

export default React.memo(WaterMark)
