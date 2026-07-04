---
last_update:
  date: 2026-07-04
---

# addPermissionUsedRecord (System API)

## Modules to Import

```TypeScript
import { privacyManager } from '@ohos.privacyManager';
```

## addPermissionUsedRecord

```TypeScript
function addPermissionUsedRecord(
    tokenID: number,
    permissionName: Permissions,
    successCount: number,
    failCount: number,
    options?: AddPermissionUsedRecordOptions
  ): Promise<void>
```

Adds an access record of a sensitive permission.

**Since:** 12

**Required permissions:** ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission accessed. |
| successCount | number | Yes | Number of successful accesses to the permission. |
| failCount | number | Yes | Number of failed accesses to the permission. |
| options | AddPermissionUsedRecordOptions | No | Options to be added. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;2.Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.PERMISSION_USED_STATS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system app. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, the permissionName exceeds256 characters, the count value is invalid, usedType in AddPermissionUsedRecordOptions is invalid,or the enhancedIdentity in AddPermissionUsedRecordOptions exceeds 48 characters. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist or refer to an application process. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not a user_grant permission. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |
| [12100008](../errorcode-access-token.md#12100008-out-of-memory) | Out of memory. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. A database error occurs. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tokenID: number = 0; // Obtained from the accessTokenId field of ApplicationInfo in the BundleInfo of the application.
// Add permission usage record
privacyManager.addPermissionUsedRecord(tokenID, 'ohos.permission.READ_AUDIO', 1, 0).then(() => {
  console.info('addPermissionUsedRecord success');
}).catch((err: BusinessError): void => {
  console.error(`addPermissionUsedRecord fail, code: ${err.code}, message: ${err.message}`);
});
// with options param
let options: privacyManager.AddPermissionUsedRecordOptions = {
  usedType: privacyManager.PermissionUsedType.PICKER_TYPE,
  enhancedIdentity: 'test'
};
privacyManager.addPermissionUsedRecord(tokenID, 'ohos.permission.READ_AUDIO', 1, 0, options).then(() => {
  console.info('addPermissionUsedRecord success');
}).catch((err: BusinessError): void => {
  console.error(`addPermissionUsedRecord fail, code: ${err.code}, message: ${err.message}`);
});

```


## addPermissionUsedRecord

```TypeScript
function addPermissionUsedRecord(
    tokenID: number,
    permissionName: Permissions,
    successCount: number,
    failCount: number,
    callback: AsyncCallback<void>
  ): void
```

Adds access record of sensitive permission.

**Since:** 9

**Required permissions:** ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission to be added. |
| successCount | number | Yes | Access count. |
| failCount | number | Yes | Reject count. |
| callback | AsyncCallback&lt;void&gt; | Yes | Asynchronous callback interface. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system app. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters, or the count value is invalid. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist or refer to an application process. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not a user_grant permission. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |
| [12100008](../errorcode-access-token.md#12100008-out-of-memory) | Out of memory. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. A database error occurs. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tokenID: number = 0; // Obtained from the accessTokenId field of ApplicationInfo in the BundleInfo of the application.
// Add permission usage record
privacyManager.addPermissionUsedRecord(tokenID, 'ohos.permission.READ_AUDIO', 1, 0, (err: BusinessError, data: void) => {
  if (err) {
    console.error(`addPermissionUsedRecord fail, code: ${err.code}, message: ${err.message}`);
  } else {
    console.info('addPermissionUsedRecord success');
  }
});

```

