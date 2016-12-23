// const models = require('../../config/db.connect.js');

// module.exports = {
//   addTagToUser: (req, res, next) => {
//     models.Tag.findOrCreate({
//       where: {
//         name: req.body.tagName
//       },
//       defaults: {
//         name: req.body.tagName
//       }
//     })
//     .then(result => {
//       console.log('Result of finding or creating tag', result);
//       console.log('User tags table', models.user_tags);
//       return models.User_Tags.findOrCreate({
//         where: {
//           UserId: req.params.userId,
//           TagId: result[0].dataValues.id
//         },
//         defaults: {
//           UserId: req.params.userId,
//           TagId: result[0].dataValues.id
//         }
//       })
//     })
//     .then(result => res.json(result))
//     .catch(err => {
//       res.json(err);
//       throw(err);
//     });
//   },
  // addTagToPost: (req, res, next) => {
    // models.Post_Tags.findOrCreate({
    //   where: {
    //     PostId: req.params.postId,
    //     TagId: req.params.tagId
    //   },
    //   defaults: {
    //     PostId: req.params.postId,
    //     TagId: req.params.tagId
    //   }
    // })
    // .then(result => res.json(result))
    // .catch(err => {
    //   res.json(err);
    //   throw(err);
    // });
//   }
// };