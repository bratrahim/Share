/**
 * Created by admin on 5/14/2017.
 */
Meteor.publish('posts', function () {
    return Posts.find();
});

Meteor.publish('users', function () {
    return Meteor.users.find();
});
