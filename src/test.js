//db.getCollection('Users').find({'UserName': {$ne:null}})

var masterDbName = 'MozartV2'; //Master database.
var usersCollection = 'Users'; // collection exists in Master DB.

//Get Roles from VeriskIdentity collectionName
var identityDbName = 'VeriskIdentity'; //Master database.
var userRoleCollection = 'UserRole'; // collection exists in VeriskIdentity DB.

var rolesCollection = 'Roles'

//Get Customer Ids from Master db collection
var names = db.getMongo().getDBNames();
var customerCollection = 'Customers';// collection exists in Master DB.

var users = [], userRoleDetails = [];

//1) Get customerIds and pass to masterDb Users Collection and get the Users.
//2) Pass the Users to VeriskIdentityDb UserRole collection and get the roles based on UserId.
//3) Pass ther roleIds to VeriskIdentityDb Roles collection and get the role names and map to userids with roles.
var rolesToAdd = [];
var masterDb = db.getSiblingDB(masterDbName);
var identityDb = db.getSiblingDB(identityDbName);

masterDb.getCollection(customerCollection).find({ CustomerId: { $ne: null } }).forEach(function (customer) {

    masterDb.getCollection(usersCollection).find({
        UserName: { $ne: null }, 'IsActive': true, CustomerId: customer.CustomerId
    }).forEach(function (user) {

        identityDb.getCollection(userRoleCollection).find({ UserId: user.UserName }).forEach(function (userRole) {
            var userRoles;
            //print("If - " + userRole.RoleIds);
            userRole.RoleIds.forEach(function (roleId) {
                //print("for each roleIds" + roleId);
                identityDb.getCollection(rolesCollection).find({ _id: ObjectId(roleId) }).forEach(function (roles) {
                    rolesToAdd.push(roles.RoleName);
                    //print("Roles to Add:" + rolesToAdd);
                });
            });
            userRoles = { CustomerId: customer.CustomerId, CustomerName: customer.CustomerName, UserName: user.UserName, UserId: userRole.UserId, RoleName: rolesToAdd };
            userRoleDetails.push(userRoles);
            rolesToAdd = [];
        });
    });

});

//print(userRoleDetails);
userRoleDetails.forEach(function (user) {
    print("CustomerId : " + user.CustomerId + "CustomerName : " + user.CustomerName + ", " + "UserName : " + user.UserName + ", " + "Roles: " + user.RoleName);
});





