import notificationsData from '../../../../notifications.json'
import { normalize, schema } from 'normalizr'

const user = new schema.Entity("users")
const message = new schema.Entity("messages", {}, { idAttribute: "guid"  })
const notification = new schema.Entity("notifications", { author: user, context: message })
const theSchema = [notification]
const normalizedData = normalize(notificationsData, theSchema)

function getAllNotificationsByUser(userID) {
  //myContext pulls the guid's pertaining to messages of the user by userID
  const myContext = (Object.values(normalizedData.entities.notifications).filter(x => x.author === userID).map(x => x.context))
  let myReturn = []
  for (let i = 0; i < Object.values(myContext).length; i++) {
    //messageArray will be the message of each guid in myContext
    let messageArray = (Object.values(normalizedData.entities.messages).filter(x => x.guid === myContext[i]))
    //concat is used to pull the data out of messageArray and place it in myReturn
    myReturn = myReturn.concat(messageArray)
  }
  return (myReturn)
}

export { getAllNotificationsByUser, normalizedData }
