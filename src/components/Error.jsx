const Error = ({children}) => {
  return (

    <div className="bg-red-800 text-white mb-3 text-center uppercase font-bold
    p-3 rounded-md">
        <p>{children}</p>
    </div>
  )
}

export default Error
