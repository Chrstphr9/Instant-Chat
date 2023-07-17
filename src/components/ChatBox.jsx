import Message from "./Message"

  
const ChatBox = () => {

    const messages = [
        {
            id: 1,
            text: 'well',
            name: 'Chrstphr'
        },
        {
            id: 2,
            text: 'well again',
            name: "Octane"
        }
    ]

  return (
    <div className="pb-44 pt-28 containerWrap">
        {messages.map(message => (
            <Message key={message.id } message={message} /> 
        ))}
    </div>
  )
}

export default ChatBox