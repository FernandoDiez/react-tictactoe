import { useContext } from "react"
import { GlobalContext } from "../app/App"

export const Title = () => {

  const { title } = useContext(GlobalContext)

  return (
    <>
      <h1>{title}</h1>
    </>
  )
}