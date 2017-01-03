import axios from 'axios';

//GETFOLLOWERS then add userInfo ----------------------------->
export function getFollowers(userId) {
    console.log('in helper getFollowers userid: ',userId);
    return axios({
            method: 'GET',
            url: `/api/users/${userId}/followers`
          })
        .then((resp) => {
            return _getFollowersUserInfo(resp)
        })
        .catch((err)=>{
            console.log(err)
        })
}

function _getFollowersUserInfo(resultArr) {
  const apiCallMaker = user => {
    let userId = user.UserId;
    return axios.get(`api/users/${userId}`)
  };

  const arrayOfPromises = resultArr.data.map(user => {
    return apiCallMaker(user);
  });

  return axios.all(arrayOfPromises)
    .then(userData => {
      resultArr.data.forEach((user, index) => {
        user.userInfo = userData[index].data;
      })
      return resultArr;
    })
}
//GETFOLLOWS w/ userInfo ----------------------------->
export function getFollows(userId) {
  console.log('in helper getFollows userid: ',userId);
    return axios({
            method: 'GET',
            url: `/api/users/${userId}/follows`
          })
        .then((resp) => {
            return _getFollowsUserInfo(resp)
        })
        .catch((err)=>{
            console.log(err )
        })
}

function _getFollowsUserInfo(resultArr) {
  const apiCallMaker = user => {
    let userId = user.FollowId;
    return axios.get(`api/users/${userId}`)
  };

  const arrayOfPromises = resultArr.data.map(user => {
    return apiCallMaker(user);
  });

  return axios.all(arrayOfPromises)
    .then(userData => {
      resultArr.data.forEach((user, index) => {

        user.userInfo = userData[index].data;
      })
      console.log('result array from _getFollowsUserInfo in followsHelpers',resultArr)
      return resultArr;
    })
}
//GETFOLLOWSPOSTS w/ userInfo ----------------------------->
export function getFeedPosts(userId) {
    return getFollows(userId)
        .then((resp) => {
          return _getFollowsPosts(resp.data);

        })
        .catch((err)=>{
          console.log(err )
        })
}

function _getFollowsPosts(resultArr) {

  const apiCallUserPosts = user => {
    let userId = user.FollowId;
    return axios.get(`api/users/${userId}/posts`);
  }

  const arrayOfPromises = resultArr.map(user => {
    //console.log('user', user)
    return apiCallUserPosts(user);
  })

  return axios.all(arrayOfPromises)
    .then(followersPosts => {
      //console.log('mahaha', followersPosts)
      var feedPosts = [];
      var result = [];
      followersPosts.forEach((userPosts, index) => {
        if(userPosts.data.length > 0){
          //console.log('dis post' + index, userPosts);
          userPosts.data.forEach(function(post){
            post.userInfo = resultArr[index].userInfo;
            feedPosts.push(post);
          });
        }
      })

      // feedPosts.forEach(user => {
      //   user.forEach(post => {
      //     result.push(post);
      //   })
      // });
      return feedPosts;
    })

}
