import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) =>{

  const chatProps = useMultiChatLogic('0f0191df-5345-4b27-a0d7-48f3eb6e88ec', props.user.username, props.user.secret); 

  return <div style={{height:'100vh'}}>

    <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} style={{height:'100%'}} />  
  </div>

}

export default ChatsPage;