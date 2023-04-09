import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'

const App = () =>{
    return(
        <ChatEngine
            height= "100vh"
            projectID ="60e455f3-4613-4b93-9e91-6d090ac6af58"
            userName = "avnee_gy"
            userSecret ="secret"
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;