---
last_update:
  date: 2026-07-04
---

# startUsingPermission (System API)

## Modules to Import

```TypeScript
import { privacyManager } from '@ohos.privacyManager';
```

## startUsingPermission

```TypeScript
function startUsingPermission(tokenID: number, permissionName: Permissions): Promise<void>
```

Start using sensitive permission.

**Since:** 9

**Required permissions:** ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission to be started. |

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
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, the permissionNameexceeds 256 characters, or the type of the specified tokenID is not of the application type. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | (Deprecated in 12) The specified tokenID does not exist or referto an application process. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not a user_grant permission. |
| [12100004](../errorcode-access-token.md#12100004-listener-apis-not-used-in-pairs) | The API is used repeatedly with the same input.It means the application specified by the tokenID has been using the specified permission. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |
| [12100008](../errorcode-access-token.md#12100008-out-of-memory) | Out of memory. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tokenID: number = 0; // Obtained from the accessTokenId field of ApplicationInfo in the BundleInfo of the application.
// Start using specified permission
privacyManager.startUsingPermission(tokenID, 'ohos.permission.READ_AUDIO').then(() => {
  console.info('startUsingPermission success');
}).catch((err: BusinessError): void => {
  console.error(`startUsingPermission fail, code: ${err.code}, message: ${err.message}`);
});

```


## startUsingPermission

```TypeScript
function startUsingPermission(
    tokenID: number,
    permissionName: Permissions,
    pid?: number,
    usedType?: PermissionUsedType
  ): Promise<void>
```

Start using sensitive permission.

**Since:** 18

**Required permissions:** ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission to be started. |
| pid | number | No | Pid of the application, default -1. |
| usedType | PermissionUsedType | No | Used type of the permission accessed, default NORMAL_TYPE. |

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
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, the permissionName exceeds256 characters, the type of the specified tokenID is not of the application type, or usedType is invalid. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not a user_grant permission. |
| [12100004](../errorcode-access-token.md#12100004-listener-apis-not-used-in-pairs) | The API is used repeatedly with the same input.It means the application specified by the tokenID has been using the specified permission. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |
| [12100008](../errorcode-access-token.md#12100008-out-of-memory) | Out of memory. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { rpc } from '@kit.IPCKit';

let tokenID: number = rpc.IPCSkeleton.getCallingTokenId(); // It can also be obtained from the accessTokenId field of ApplicationInfo in the BundleInfo of the application.
let pid: number = rpc.IPCSkeleton.getCallingPid();
let usedType: privacyManager.PermissionUsedType = privacyManager.PermissionUsedType.PICKER_TYPE;

// Start using a specified permission
privacyManager.startUsingPermission(tokenID, 'ohos.permission.READ_AUDIO').then(() => {
  console.info('startUsingPermission success');
}).catch((err: BusinessError): void => {
  console.error(`startUsingPermission fail, code: ${err.code}, message: ${err.message}`);
});
// with pid
privacyManager.startUsingPermission(tokenID, 'ohos.permission.READ_AUDIO', pid).then(() => {
  console.info('startUsingPermission success');
}).catch((err: BusinessError): void => {
  console.error(`startUsingPermission fail, code: ${err.code}, message: ${err.message}`);
});
// with usedType
privacyManager.startUsingPermission(tokenID, 'ohos.permission.READ_AUDIO', -1, usedType).then(() => {
  console.info('startUsingPermission success');
}).catch((err: BusinessError): void => {
  console.error(`startUsingPermission fail, code: ${err.code}, message: ${err.message}`);
});
// with pid and usedType
privacyManager.startUsingPermission(tokenID, 'ohos.permission.READ_AUDIO', pid, usedType).then(() => {
  console.info('startUsingPermission success');
}).catch((err: BusinessError): void => {
  console.error(`startUsingPermission fail, code: ${err.code}, message: ${err.message}`);
});

```


## startUsingPermission

```TypeScript
function startUsingPermission(
    tokenID: number,
    permissionName: Permissions,
    pid?: number,
    usedType?: PermissionUsedType,
    options?: PermissionUsingOptions
  ): Promise<void>
```

Starts using a sensitive permission.

**Since:** 26.0.0

**Required permissions:** ohos.permission.PERMISSION_USED_STATS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission to start. |
| pid | number | No | PID of the application. The default value is -1. |
| usedType | PermissionUsedType | No | Usage type of the access permission. The default value isNORMAL_TYPE. |
| options | PermissionUsingOptions | No | Options for permission usage. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.PERMISSION_USED_STATS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system app. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, the permissionName exceeds256 characters, the type of the specified tokenID is not of the application type, usedType is invalid,or the enhancedIdentity in PermissionUsingOptions exceeds 48 characters. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not a user_grant permission. |
| [12100004](../errorcode-access-token.md#12100004-listener-apis-not-used-in-pairs) | The API is used repeatedly with the same input.It means the application specified by the tokenID has been using the specified permission. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |
| [12100008](../errorcode-access-token.md#12100008-out-of-memory) | Out of memory. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { rpc } from '@kit.IPCKit';

let tokenID: number = rpc.IPCSkeleton.getCallingTokenId(); // It can also be obtained from the accessTokenId field of ApplicationInfo in the BundleInfo of the application.
let pid: number = rpc.IPCSkeleton.getCallingPid();
let usedType: privacyManager.PermissionUsedType = privacyManager.PermissionUsedType.PICKER_TYPE;

// Without the pid and usedType parameters
privacyManager.startUsingPermission(tokenID, 'ohos.permission.READ_AUDIO').then(() => {
  console.info('startUsingPermission success.');
}).catch((err: BusinessError): void => {
  console.error(`startUsingPermission fail, code: ${err.code}, message: ${err.message}`);
});
// With the pid parameter
privacyManager.startUsingPermission(tokenID, 'ohos.permission.READ_AUDIO', pid).then(() => {
  console.info('startUsingPermission success.');
}).catch((err: BusinessError): void => {
  console.error(`startUsingPermission fail, code: ${err.code}, message: ${err.message}`);
});
// With the usedType parameter
privacyManager.startUsingPermission(tokenID, 'ohos.permission.READ_AUDIO', -1, usedType).then(() => {
  console.info('startUsingPermission success.');
}).catch((err: BusinessError): void => {
  console.error(`startUsingPermission fail, code: ${err.code}, message: ${err.message}`);
});
// With the pid and usedType parameters
privacyManager.startUsingPermission(tokenID, 'ohos.permission.READ_AUDIO', pid, usedType).then(() => {
  console.info('startUsingPermission success.');
}).catch((err: BusinessError): void => {
  console.error(`startUsingPermission fail, code: ${err.code}, message: ${err.message}`);
});
// With pid, usedType, and enhancedIdentity
privacyManager.startUsingPermission(tokenID, 'ohos.permission.READ_AUDIO', pid, usedType, {enhancedIdentity: 'test'}).then(() => {
  console.info('startUsingPermission success.');
}).catch((err: BusinessError): void => {
  console.error(`startUsingPermission fail, code: ${err.code}, message: ${err.message}`);
});

```


## startUsingPermission

```TypeScript
function startUsingPermission(tokenID: number, permissionName: Permissions, callback: AsyncCallback<void>): void
```

Start using sensitive permission.

**Since:** 9

**Required permissions:** ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission to be started. |
| callback | AsyncCallback&lt;void&gt; | Yes | Asynchronous callback interface. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission "ohos.permission.PERMISSION_USED_STATS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system app. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters,or the type of the specified tokenID is not of the application type. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | (Deprecated in 12) The specified tokenID does not exist or refer to an application process. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not a user_grant permission. |
| [12100004](../errorcode-access-token.md#12100004-listener-apis-not-used-in-pairs) | The API is used repeatedly with the same input.It means the application specified by the tokenID has been using the specified permission. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |
| [12100008](../errorcode-access-token.md#12100008-out-of-memory) | Out of memory. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tokenID: number = 0; // Obtained from the accessTokenId field of ApplicationInfo in the BundleInfo of the application.
// Start using the specified permission
privacyManager.startUsingPermission(tokenID, 'ohos.permission.READ_AUDIO', (err: BusinessError, data: void) => {
  if (err) {
    console.error(`startUsingPermission fail, code: ${err.code}, message: ${err.message}`);
  } else {
    console.info('startUsingPermission success');
  }
});

```

