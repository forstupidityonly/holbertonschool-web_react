import notificationsData from '../../../../notifications.json'
import { normalize, schema } from 'normalizr'

function getAllNotificationsByUser(userID) {
  return (notificationsData.filter(x => x.author.id === userID).map(x => x.context))
}

const user = new schema.Entity("users")
const message = new schema.Entity("messages", {}, { idAttribute: "guid"  })
const notification = new schema.Entity("notifications", { author: user, context: message })
const theSchema = [notification]
const normalizedData = normalize(notificationsData, theSchema)

console.log(normalizedData)

export { getAllNotificationsByUser, normalizedData }
