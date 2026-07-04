---
last_update:
  date: 2026-07-04
---

# getPermissionUsedTypeInfos (System API)

## Modules to Import

```TypeScript
import { privacyManager } from '@ohos.privacyManager';
```

## getPermissionUsedTypeInfos

```TypeScript
function getPermissionUsedTypeInfos(tokenId?: number | null, permissionName?: Permissions): Promise<Array<PermissionUsedTypeInfo>>
```

Obtains the used type of the permission accessed.

**Since:** 20

**Required permissions:** ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenId | number \| null | No | Token ID of the application. By default, all token IDs of the deviceare returned. |
| permissionName | Permissions | No | Name of the permission to query. By default, all permissionsof the device are returned. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;PermissionUsedTypeInfo&gt;&gt; | Promise used to return the information obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.PERMISSION_USED_STATS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system app. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. PermissionName exceeds 256 characters. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The input tokenId does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The input permissionName does not exist. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. A database error occurs. |

**Example**

```TypeScript
import { privacyManager, Permissions } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tokenId: number = 0; // Obtained from the accessTokenId field of ApplicationInfo in the BundleInfo of the application.
let permissionName: Permissions = 'ohos.permission.CAMERA';
// Without any parameter.
privacyManager.getPermissionUsedTypeInfos().then((data: Array<privacyManager.PermissionUsedTypeInfo>) => {
  console.info('getPermissionUsedTypeInfos success, result: ' + JSON.stringify(data));
}).catch((err: BusinessError): void => {
  console.error(`getPermissionUsedTypeInfos fail, code: ${err.code}, message: ${err.message}`);
});
// Pass in tokenId only.
privacyManager.getPermissionUsedTypeInfos(tokenId).then((data: Array<privacyManager.PermissionUsedTypeInfo>) => {
  console.info('getPermissionUsedTypeInfos success, result: ' + JSON.stringify(data));
}).catch((err: BusinessError): void => {
  console.error(`getPermissionUsedTypeInfos fail, code: ${err.code}, message: ${err.message}`);
});
// Pass in permissionName only.
privacyManager.getPermissionUsedTypeInfos(null, permissionName).then((data: Array<privacyManager.PermissionUsedTypeInfo>) => {
  console.info('getPermissionUsedTypeInfos success, result: ' + JSON.stringify(data));
}).catch((err: BusinessError): void => {
  console.error(`getPermissionUsedTypeInfos fail, code: ${err.code}, message: ${err.message}`);
});
// Pass in tokenId and permissionName.
privacyManager.getPermissionUsedTypeInfos(tokenId, permissionName).then((data: Array<privacyManager.PermissionUsedTypeInfo>) => {
  console.info('getPermissionUsedTypeInfos success, result: ' + JSON.stringify(data));
}).catch((err: BusinessError): void => {
  console.error(`getPermissionUsedTypeInfos fail, code: ${err.code}, message: ${err.message}`);
});

```

