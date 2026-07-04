# @ohos.privacyManager

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

## Modules to Import

```TypeScript
import { privacyManager } from '@ohos.privacyManager';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addPermissionUsedRecord](arkts-ability-addpermissionusedrecord-f-sys.md#addpermissionusedrecord-1) | Adds an access record of a sensitive permission. |
| [addPermissionUsedRecord](arkts-ability-addpermissionusedrecord-f-sys.md#addpermissionusedrecord-2) | Adds access record of sensitive permission. |
| [checkPermissionInUse](arkts-ability-checkpermissioninuse-f-sys.md#checkpermissioninuse-1) | Checks whether the specified permission is in use. |
| [getPermissionUsedRecord](arkts-ability-getpermissionusedrecord-f-sys.md#getpermissionusedrecord-1) | Queries the access records of sensitive permission. |
| [getPermissionUsedRecord](arkts-ability-getpermissionusedrecord-f-sys.md#getpermissionusedrecord-2) | Queries the access records of sensitive permission. |
| [getPermissionUsedRecordToggleStatus](arkts-ability-getpermissionusedrecordtogglestatus-f-sys.md#getpermissionusedrecordtogglestatus-1) | Obtains the toggle state of permission access records of the current user. |
| [getPermissionUsedTypeInfos](arkts-ability-getpermissionusedtypeinfos-f-sys.md#getpermissionusedtypeinfos-1) | Obtains the used type of the permission accessed. |
| [off](arkts-ability-off-f-sys.md#off-1) | Unsubscribes to the change of active state of the specified permission. |
| [on](arkts-ability-on-f-sys.md#on-1) | Subscribes to the change of active state of the specified permission. |
| [setPermissionUsedRecordToggleStatus](arkts-ability-setpermissionusedrecordtogglestatus-f-sys.md#setpermissionusedrecordtogglestatus-1) | Sets the toggle state of permission access records for the current user. |
| [startUsingPermission](arkts-ability-startusingpermission-f-sys.md#startusingpermission-1) | Start using sensitive permission. |
| [startUsingPermission](arkts-ability-startusingpermission-f-sys.md#startusingpermission-2) | Start using sensitive permission. |
| [startUsingPermission](arkts-ability-startusingpermission-f-sys.md#startusingpermission-3) | Starts using a sensitive permission. |
| [startUsingPermission](arkts-ability-startusingpermission-f-sys.md#startusingpermission-4) | Start using sensitive permission. |
| [stopUsingPermission](arkts-ability-stopusingpermission-f-sys.md#stopusingpermission-1) | Stop using sensitive permission. |
| [stopUsingPermission](arkts-ability-stopusingpermission-f-sys.md#stopusingpermission-2) | Stop using sensitive permission. |
| [stopUsingPermission](arkts-ability-stopusingpermission-f-sys.md#stopusingpermission-3) | Stop using sensitive permission. |
| [stopUsingPermission](arkts-ability-stopusingpermission-f-sys.md#stopusingpermission-4) | Stops using a sensitive permission. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [ActiveChangeResponse](arkts-ability-activechangeresponse-i-sys.md) | Indicates the response of permission active status. |
| [AddPermissionUsedRecordOptions](arkts-ability-addpermissionusedrecordoptions-i-sys.md) | Additional information to add. |
| [BundleUsedRecord](arkts-ability-bundleusedrecord-i-sys.md) | BundleUsedRecord. |
| [PermissionUsedRecord](arkts-ability-permissionusedrecord-i-sys.md) | PermissionUsedRecord. |
| [PermissionUsedRequest](arkts-ability-permissionusedrequest-i-sys.md) | Provides request of querying permission used records. |
| [PermissionUsedResponse](arkts-ability-permissionusedresponse-i-sys.md) | Provides response of querying permission used records. |
| [PermissionUsedTypeInfo](arkts-ability-permissionusedtypeinfo-i-sys.md) | Information about the permission used type. |
| [PermissionUsingOptions](arkts-ability-permissionusingoptions-i-sys.md) | Options for permission usage. |
| [UsedRecordDetail](arkts-ability-usedrecorddetail-i-sys.md) | UsedRecordDetail. |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [PermissionActiveStatus](arkts-ability-permissionactivestatus-e-sys.md) | Enum for permission for status. |
| [PermissionUsageFlag](arkts-ability-permissionusageflag-e-sys.md) | PermissionUsageFlag. |
| [PermissionUsedType](arkts-ability-permissionusedtype-e-sys.md) | Enumerates the means by which sensitive resources are accessed. |
<!--DelEnd-->

