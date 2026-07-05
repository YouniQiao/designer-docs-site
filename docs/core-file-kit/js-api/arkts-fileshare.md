# @ohos.fileshare

Provides fileshare APIS

**Since:** 9

**System capability:** SystemCapability.FileManagement.AppFileService

## Modules to Import

```TypeScript
import { fileShare } from '@kit.CoreFileKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [activatePermission](arkts-fileshare-activatepermission-f.md#activatePermission-1) | Enable the URI that have been permanently authorized |
| <!--DelRow-->[checkPathPermission](arkts-fileshare-checkpathpermission-f-sys.md#checkPathPermission-1) | Check permissions for the path. |
| [checkPersistentPermission](arkts-fileshare-checkpersistentpermission-f.md#checkPersistentPermission-1) | Check persistent permissions for the URI. |
| [deactivatePermission](arkts-fileshare-deactivatepermission-f.md#deactivatePermission-1) | Stop the authorized URI that has been enabled |
| <!--DelRow-->[getPersistentPolicy](arkts-fileshare-getpersistentpolicy-f-sys.md#getPersistentPolicy-1) | Get all persistence permissions for the application. |
| <!--DelRow-->[getSharedDirectoryInfo](arkts-fileshare-getshareddirectoryinfo-f-sys.md#getSharedDirectoryInfo-1) | Gets the shared sandbox directories of applications |
| <!--DelRow-->[grantSharedDirectoryPermission](arkts-fileshare-grantshareddirectorypermission-f-sys.md#grantSharedDirectoryPermission-1) | Provides a permission grant for application-shared directories |
| <!--DelRow-->[grantUriPermission](arkts-fileshare-granturipermission-f-sys.md#grantUriPermission-1) | Provides grant uri permission for app |
| <!--DelRow-->[grantUriPermission](arkts-fileshare-granturipermission-f-sys.md#grantUriPermission-2) | Provides grant uri permission for app |
| <!--DelRow-->[grantUriPermission](arkts-fileshare-granturipermission-f-sys.md#grantUriPermission-3) | Grant URI permissions for an application. |
| [persistPermission](arkts-fileshare-persistpermission-f.md#persistPermission-1) | Set persistence permissions for the URI |
| [revokePermission](arkts-fileshare-revokepermission-f.md#revokePermission-1) | Revoke persistence permissions for the URI |
| <!--DelRow-->[revokePermission](arkts-fileshare-revokepermission-f-sys.md#revokePermission-1) | Revoke all persistence permissions for the application. |
| <!--DelRow-->[revokePermission](arkts-fileshare-revokepermission-f-sys.md#revokePermission-2) | Revoke persistence permissions for the URI. |
| <!--DelRow-->[revokeSharedDirectoryPermission](arkts-fileshare-revokeshareddirectorypermission-f-sys.md#revokeSharedDirectoryPermission-1) | Revokes permission for application-shared directories |

### Interfaces

| Name | Description |
| --- | --- |
| [PathPolicyInfo](arkts-fileshare-pathpolicyinfo-i.md) | Policy information to manager permissions on a path. |
| [PolicyErrorResult](arkts-fileshare-policyerrorresult-i.md) | Failed policy result on URI. |
| [PolicyInfo](arkts-fileshare-policyinfo-i.md) | Policy information to manager permissions on a URI. |
| <!--DelRow-->[SharedDirectoryInfo](arkts-fileshare-shareddirectoryinfo-i-sys.md) | The directory information shared with the system by the application. |

### Enums

| Name | Description |
| --- | --- |
| [OperationMode](arkts-fileshare-operationmode-e.md) | Enumerates the uri operate mode types. |
| [PolicyErrorCode](arkts-fileshare-policyerrorcode-e.md) | Enumerates the error code of the permission policy for the URI operation. |
| [PolicyType](arkts-fileshare-policytype-e.md) | Indicates the policy type of the path. |

