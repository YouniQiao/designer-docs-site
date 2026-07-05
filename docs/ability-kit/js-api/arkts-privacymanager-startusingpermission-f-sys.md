# startUsingPermission

## startUsingPermission

```TypeScript
function startUsingPermission(tokenID: int, permissionName: Permissions): Promise<void>
```

系统应用调用此接口，能够向系统上报应用在前后台的权限使用状态。隐私服务将此状态通知所有该权限使用状态变更事件的订阅者（订阅方法参考[on]privacyManager.on）。使用Promise异步回调。 开始使用权限后，需要在权限使用结束时调用[stopUsingPermission]privacyManager.stopUsingPermission停止使用权限。

**Since:** 9

**Required permissions:** 

 ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionName | Permissions | Yes | 需要使用的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.PERMISSION_USED_STATS". |
| 202 | Not system app. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The tokenID is 0, the permissionName  exceeds 256 characters, or the type of the specified tokenID is not of the application type. |
| 12100002 | (Deprecated in 12) The specified tokenID does not exist or refer to an  application process. |
| 12100003 | The specified permission does not exist or is not a user_grant permission. |
| 12100004 | The API is used repeatedly with the same input.  It means the application specified by the tokenID has been using the specified permission. |
| 12100007 | Service exception. |
| 12100008 | Out of memory. |

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
    tokenID: int,
    permissionName: Permissions,
    pid?: int,
    usedType?: PermissionUsedType
  ): Promise<void>
```

系统应用调用此接口，能够向系统上报应用在前后台的权限使用状态。隐私服务将此状态通知所有该权限使用状态变更事件的订阅者（订阅方法参考 [on]privacyManager.on(type: 'activeStateChange', permissionList: Array<Permissions>, callback: Callback<ActiveChangeResponse>)）。 使用Promise异步回调。 开始使用权限后，需要在权限使用结束时调用 [stopUsingPermission]privacyManager.stopUsingPermission(tokenID: int, permissionName: Permissions, pid?: int) 停止使用权限。

**Since:** 18

**Required permissions:** 

 ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionName | Permissions | Yes | 需要使用的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |
| pid | int | No |  |
| usedType | PermissionUsedType | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.PERMISSION_USED_STATS". |
| 202 | Not system app. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The tokenID is 0, the permissionName exceeds  256 characters, the type of the specified tokenID is not of the application type, or usedType is invalid. |
| 12100003 | The specified permission does not exist or is not a user_grant permission. |
| 12100004 | The API is used repeatedly with the same input.  It means the application specified by the tokenID has been using the specified permission. |
| 12100007 | Service exception. |
| 12100008 | Out of memory. |

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
     tokenID: int,
     permissionName: Permissions,
     pid?: int,
     usedType?: PermissionUsedType,
     options?: PermissionUsingOptions
   ): Promise<void>
```

系统应用调用此接口，能够向系统上报应用在前后台的权限使用状态。隐私服务将此状态通知所有该权限使用状态变更事件的订阅者（订阅方法参考 [on]privacyManager.on(type: 'activeStateChange', permissionList: Array<Permissions>, callback: Callback<ActiveChangeResponse>) ）。使用Promise异步回调。 开始使用权限后，需要在权限使用结束时调用 [stopUsingPermission]privacyManager.stopUsingPermission(tokenID: int, permissionName: Permissions, pid?: int, options?: PermissionUsingOptions) 停止使用权限。 当传入pid时，pid需要与 [stopUsingPermission]privacyManager.stopUsingPermission(tokenID: int, permissionName: Permissions, pid?: int, options?: PermissionUsingOptions) 传入的pid相同，不满足配套关系返回错误码12100004。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.PERMISSION_USED_STATS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionName | Permissions | Yes | 需要使用的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |
| pid | int | No |  |
| usedType | PermissionUsedType | No |  |
| options | PermissionUsingOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.PERMISSION_USED_STATS". |
| 202 | Not system app. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The tokenID is 0, the permissionName exceeds  256 characters, the type of the specified tokenID is not of the application type, usedType is invalid,  or the enhancedIdentity in PermissionUsingOptions exceeds 48 characters. |
| 12100003 | The specified permission does not exist or is not a user_grant permission. |
| 12100004 | The API is used repeatedly with the same input.  It means the application specified by the tokenID has been using the specified permission. |
| 12100007 | Service exception. |
| 12100008 | Out of memory. |

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
function startUsingPermission(
    tokenID: int,
    permissionName: Permissions,
    callback: AsyncCallback<void>
  ): void
```

系统应用调用此接口，能够向系统上报应用在前后台的权限使用状态。隐私服务将此状态通知所有该权限使用状态变更事件的订阅者（订阅方法参考 [on]privacyManager.on(type: 'activeStateChange', permissionList: Array<Permissions>, callback: Callback<ActiveChangeResponse>) ）。使用callback异步回调。 开始使用权限后，需要在权限使用结束时调用 [stopUsingPermission]privacyManager.stopUsingPermission(tokenID: int, permissionName: Permissions) 停止使用权限。

**Since:** 9

**Required permissions:** 

 ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionName | Permissions | Yes | 需要使用的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当开始使用权限成功时，err为undefined；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.PERMISSION_USED_STATS". |
| 202 | Not system app. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The tokenID is 0, the permissionName exceeds 256  characters, or the type of the specified tokenID is not of the application type. |
| 12100002 | (Deprecated in 12) The specified tokenID does not exist or refer to an  application process. |
| 12100003 | The specified permission does not exist or is not a user_grant permission. |
| 12100004 | The API is used repeatedly with the same input.  It means the application specified by the tokenID has been using the specified permission. |
| 12100007 | Service exception. |
| 12100008 | Out of memory. |

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

