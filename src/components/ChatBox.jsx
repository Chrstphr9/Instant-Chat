  
const ChatBox = () => {

    const messages = [
        {
            id: 1,
            message: 'well'
        },
        {
            id: 2,
            message: 'well again'
        }
    ]

  return (
    <div className="pb-44 pt-28 containerWrap">
        {messages.map(message => {
            
        })}
    </div>
  )
}

export default ChatBox