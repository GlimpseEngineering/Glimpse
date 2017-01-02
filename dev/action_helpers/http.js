// import axios from 'axios';
//
// export function getFollowers(userId) {
//     console.log('in helper getFollowers userid: ',userId);
//     return axios({
//             method: 'GET',
//             url: `/api/users/${userId}/followers`
//           })
//         .then((resp) => {
//
//             //return resp;
//             //console.log(resp);
//             return _getFollowersUserInfo(resp)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
// }
//
// export function getFollows(userId) {
//   console.log('in helper getFollows userid: ',userId);
//     return axios({
//             method: 'GET',
//             url: `/api/users/${userId}/follows`
//           })
//         .then((resp) => {
//
//             //return resp;
//
//             return _getFollowsUserInfo(resp)
//         })
//         .catch((err)=>{
//             console.log(err )
//         })
// }
//
// function _getFollowersUserInfo(resultArr) {
//
//   const apiCallMaker = user => {
//     let userId = user.UserId;
//     return axios.get(`api/users/${userId}`)
//   };
//
//   const arrayOfPromises = resultArr.data.map(user => {
//
//     return apiCallMaker(user);
//   });
//   //console.log('arrayOfPromises', arrayOfPromises);
//   return axios.all(arrayOfPromises)
//     .then(userData => {
//
//       resultArr.data.forEach((user, index) => {
//         user.userInfo = userData[index].data;
//       })
//       return resultArr;
//       //console.log('arrayOfPromises: ', arrayOfPromises);
//     })
// }
//
// function _getFollowsUserInfo(resultArr) {
//
//   const apiCallMaker = user => {
//     let userId = user.FollowId;
//     return axios.get(`api/users/${userId}`)
//   };
//
//   const arrayOfPromises = resultArr.data.map(user => {
//
//     return apiCallMaker(user);
//   });
//   return axios.all(arrayOfPromises)
//     .then(userData => {
//
//       resultArr.data.forEach((user, index) => {
//         user.userInfo = userData[index].data;
//       })
//       return resultArr;
//     })
// }
