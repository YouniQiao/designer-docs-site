# @ohos.fileshare

Provides fileshare APIS

**Since:** 9

**System capability:** SystemCapability.FileManagement.AppFileService

## Modules to Import

```TypeScript
import { fileShare } from '@ohos.fileshare';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [activatePermission](arkts-corefile-activatepermission-f.md#activatepermission-1) | Enable the URI that have been permanently authorized |
| [checkPersistentPermission](arkts-corefile-checkpersistentpermission-f.md#checkpersistentpermission-1) | Check persistent permissions for the URI. |
| [deactivatePermission](arkts-corefile-deactivatepermission-f.md#deactivatepermission-1) | Stop the authorized URI that has been enabled |
| [persistPermission](arkts-corefile-persistpermission-f.md#persistpermission-1) | Set persistence permissions for the URI |
| [revokePermission](arkts-corefile-revokepermission-f.md#revokepermission-1) | Revoke persistence permissions for the URI |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [checkPathPermission](arkts-corefile-checkpathpermission-f-sys.md#checkpathpermission-1) | Check permissions for the path. |
| [getPersistentPolicy](arkts-corefile-getpersistentpolicy-f-sys.md#getpersistentpolicy-1) | Get all persistence permissions for the application. |
| [getSharedDirectoryInfo](arkts-corefile-getshareddirectoryinfo-f-sys.md#getshareddirectoryinfo-1) | Gets the shared sandbox directories of applications |
| [grantSharedDirectoryPermission](arkts-corefile-grantshareddirectorypermission-f-sys.md#grantshareddirectorypermission-1) | Provides a permission grant for application-shared directories |
| [grantUriPermission](arkts-corefile-granturipermission-f-sys.md#granturipermission-1) | Provides grant uri permission for app |
| [grantUriPermission](arkts-corefile-granturipermission-f-sys.md#granturipermission-2) | Provides grant uri permission for app |
| [grantUriPermission](arkts-corefile-granturipermission-f-sys.md#granturipermission-3) | Grant URI permissions for an application. |
| [revokePermission](arkts-corefile-revokepermission-f-sys.md#revokepermission-2) | Revoke all persistence permissions for the application. |
| [revokePermission](arkts-corefile-revokepermission-f-sys.md#revokepermission-3) | Revoke persistence permissions for the URI. |
| [revokeSharedDirectoryPermission](arkts-corefile-revokeshareddirectorypermission-f-sys.md#revokeshareddirectorypermission-1) | Revokes permission for application-shared directories |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [PathPolicyInfo](arkts-corefile-pathpolicyinfo-i.md) | Policy information to manager permissions on a path. |
| [PolicyErrorResult](arkts-corefile-policyerrorresult-i.md) | Failed policy result on URI. |
| [PolicyInfo](arkts-corefile-policyinfo-i.md) | Policy information to manager permissions on a URI. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [SharedDirectoryInfo](arkts-corefile-shareddirectoryinfo-i-sys.md) | The directory information shared with the system by the application. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [OperationMode](arkts-corefile-operationmode-e.md) | Enumerates the uri operate mode types. |
| [PolicyErrorCode](arkts-corefile-policyerrorcode-e.md) | Enumerates the error code of the permission policy for the URI operation. |
| [PolicyType](arkts-corefile-policytype-e.md) | Indicates the policy type of the path. |

