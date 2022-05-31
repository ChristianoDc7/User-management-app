import { display } from '@mui/system'
import React from 'react'
import { Button, Icon, TextInput } from 'react-materialize'
import styles from '../../styles/style.module.scss'
import mpanay from './mpanay'
import sariko from './sary.jpg'


const Message = () => {
   const [messages , setMessage] = React.useState(mpanay)
   const [write, setWrite] = React.useState('')

   const send = () => {
      setMessage([...messages, 
                  ...[{
                        content : write,
                        type : "sent"
                  }]]);
      setWrite('');
   }

   const handleEnter = (event : React.KeyboardEvent<HTMLInputElement>) => {
         if(event.key == 'Enter'){
           if(write.trim() !== ""){
              send()
           }
         }
   }

   const newMessage = () => {
    setMessage([...messages, 
      ...[{
            content :"eka aroo",
            type : "received",
            img : sariko
      }]]);
   }

/*    React.useEffect(()=>{
       if(messages.length >= 5){
          let apio = setTimeout(newMessage, 4000)
          return ()=>{
            clearTimeout(apio)
              }
       }
   },[messages]) */

          

  return (
    <div className={styles.message + " card-panel blue lighten-5"}>
      <h3>Chat</h3>
                {
                    messages?.map((mess: any,i: number)=>(
                        <div key={i} className="withPhoto">
                          {mess.img && (<img className='avatar' src={mess.img}/>)}
                          <div className={mess.type === "sent" ? "rht" : "lft" }> {mess.content} </div>
                        </div>
                    ))
                }
        <div className='ngez'>

          <div className="input-field fields">
             <input id="message" type="text" onChange={e => setWrite(e.target.value)} onKeyPress={event => handleEnter(event)} value={write} />
             <label htmlFor="message">Votre Message</label>
          </div>
          <Button
              className='blue'
              floating
              icon={<Icon>send</Icon>}
              waves="light"
              onClick={send}
          />
        </div>
    </div>
  )
}

export default Message