import notificationsData from '../../../../notifications.json'

export default function getAllNotificationsByUser(userID) {
  return (notificationsData.filter(x => x.author.id === userID).map(x => x.context))
}
