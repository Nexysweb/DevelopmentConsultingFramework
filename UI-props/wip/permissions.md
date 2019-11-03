

# Permissions

Permissions are created by the developer along with features and cannot be managed from the system. They are saved in the database so their description can be edited via the UI.

## Permission Groups

Permission groups contain a set of permissions and helps admin assigning permissions

## Instance Permission

Every instance has a restricted set of allowed permissions. These are defined by the content of `InstancePermission` and can be managed by a super admin. 

## User Permission

Permissions can be assigned/revoked to every user. The list of available of permissions are the ones given by `instancePermission`.

A user with the permission `user_permission` is allowed to manage permissions for all users of his instance.

## User Token Permission

Every user with the permission `user_token` can generate tokens. These tokens have permissions and the user can pick which permissions he would like to have. The available permissions are the ones that are assigned with his profile

# Structure

so the strcture is the following (and is not trivial)
permissions > instance_permissions > user_permission > user_token_permissin
at every interface there is a foreign key so, for example, if a `user_permission` is deleted, all `user_token_permission` that referenced the same permission will be deleted automatically.
