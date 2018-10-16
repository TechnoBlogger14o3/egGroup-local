// import { AsyncStorage, AppState } from 'react-native';
//
// import FCM, {FCMEvent, NotificationActionType, NotificationActionOption, NotificationCategoryOption} from "react-native-fcm";
//
// AsyncStorage.getItem('lastNotification').then( data => {
//     if(data){
//       // if notification arrives when app is killed, it should still be logged here
//       console.log('last notification', JSON.parse(data));
//       AsyncStorage.removeItem('lastNotification');
//     }
// })
//
// AsyncStorage.getItem('lastMessage').then( data => {
//   if(data){
//     // if notification arrives when app is killed, it should still be logged here
//     console.log('last message', JSON.parse(data));
//     AsyncStorage.removeItem('lastMessage');
//   }
// })
//
// export function registerKilledListener(){
//   // these callback will be triggered even when app is killed
//   FCM.on(FCMEvent.Notification, notif => {
//     AsyncStorage.setItem('lastNotification', JSON.stringify(notif));
//     if(notif.opened_from_tray){
//       setTimeout(()=>{
//         if(notif._actionIdentifier === 'reply'){
//           if(AppState.currentState !== 'background'){
//             console.log('User replied '+ JSON.stringify(notif._userText))
//             alert('User replied '+ JSON.stringify(notif._userText));
//           } else {
//             AsyncStorage.setItem('lastMessage', JSON.stringify(notif._userText));
//           }
//         }
//         if(notif._actionIdentifier === 'view'){
//           alert("User clicked View in App");
//         }
//         if(notif._actionIdentifier === 'dismiss'){
//           alert("User clicked Dismiss");
//         }
//       }, 1000)
//     }
//   });
// }
//
// // these callback will be triggered only when app is foreground or background
// export function registerAppListener(navigation){
//   FCM.on(FCMEvent.Notification, notif => {
//     var notificationArray = [];
//     console.log("Notification", notif);
//     const myobj = JSON.stringify(notif);
//         const obj = JSON.parse(myobj);
//   console.log(obj.fcm.title);
//       notificationArray.push(notif);
//       console.log("notifications...........",notificationArray)
//     if(notif.opened_from_tray){
//       const myobj = JSON.stringify(notif);
//       const obj = JSON.parse(myobj);
//       console.log(obj.fcm.title);
//     }
//   });
//
//   FCM.on(FCMEvent.RefreshToken, token => {
//     console.log("TOKEN (refreshUnsubscribe)", token);
//   });
//
//   FCM.enableDirectChannel();
//   FCM.on(FCMEvent.DirectChannelConnectionChanged, (data) => {
//     console.log('direct channel connected' + data);
//   });
//   setTimeout(function() {
//     FCM.isDirectChannelEstablished().then(d => console.log(d));
//   }, 1000);
// }
//
// // FCM.setNotificationCategories([
// //   {
// //     id: 'com.myidentifi.fcm.text',
// //     actions: [
// //       {
// //         type: NotificationActionType.TextInput,
// //         id: 'reply',
// //         title: 'Quick Reply',
// //         textInputButtonTitle: 'Send',
// //         textInputPlaceholder: 'Say something',
// //         intentIdentifiers: [],
// //         options: NotificationActionOption.AuthenticationRequired
// //       },
// //       {
// //         type: NotificationActionType.Default,
// //         id: 'view',
// //         title: 'View in App',
// //         intentIdentifiers: [],
// //         options: NotificationActionOption.Foreground
// //       },
// //       {
// //         type: NotificationActionType.Default,
// //         id: 'dismiss',
// //         title: 'Dismiss',
// //         intentIdentifiers: [],
// //         options: NotificationActionOption.Destructive
// //       }
// //     ],
// //     options: [NotificationCategoryOption.CustomDismissAction, NotificationCategoryOption.PreviewsShowTitle]
// //   }
// // ])
