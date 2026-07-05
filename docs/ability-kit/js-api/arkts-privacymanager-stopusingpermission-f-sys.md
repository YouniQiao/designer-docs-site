# stopUsingPermission

## stopUsingPermission

```TypeScript
function stopUsingPermission(tokenID: int, permissionName: Permissions): Promise<void>
```

系统应用调用此接口，标记不再使用指定权限。调用成功后，隐私服务将此状态变化通知所有该权限使用状态变更事件的订阅者。 适用于应用完成敏感操作后或退出前台时，通知系统权限使用结束。使用Promise异步回调。 该接口需与[startUsingPermission]privacyManager.startUsingPermission配套使用。

**Since:** 9

**Required permissions:** 

 ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionName | Permissions | Yes | 需要停止使用的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |

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
| 12100001 | Invalid parameter. The tokenID is 0, the permissionName exceeds 256  characters, or the type of the specified tokenID is not of the application type. |
| 12100003 | The specified permission does not exist or is not a user_grant permission. |
| 12100004 | The API is not used in pair with 'startUsingPermission'. |
| 12100007 | Service exception. |
| 12100008 | Out of memory. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tokenID: number = 0; // Obtained from the accessTokenId field of ApplicationInfo in the BundleInfo of the application.
// Stop using a specified permission
privacyManager.stopUsingPermission(tokenID, 'ohos.permission.READ_AUDIO').then(() => {
  console.info('stopUsingPermission success');
}).catch((err: BusinessError): void => {
  console.error(`stopUsingPermission fail, code: ${err.code}, message: ${err.message}`);
});

```

## stopUsingPermission

```TypeScript
function stopUsingPermission(tokenID: int, permissionName: Permissions, callback: AsyncCallback<void>): void
```

系统应用调用此接口，标记不再使用指定权限。调用成功后，隐私服务将此状态变化通知所有该权限使用状态变更事件的订阅者。 适用于应用完成敏感操作后或退出前台时，通知系统权限使用结束。使用callback异步回调。 该接口需与[startUsingPermission]privacyManager.startUsingPermission配套使用。

**Since:** 9

**Required permissions:** 

 ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionName | Permissions | Yes | 需要停止使用的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当停止使用权限成功时，err为undefined；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.PERMISSION_USED_STATS". |
| 202 | Not system app. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The tokenID is 0, the permissionName exceeds 256  characters, or the type of the specified tokenID is not of the application type. |
| 12100003 | The specified permission does not exist or is not a user_grant permission. |
| 12100004 | The API is not used in pair with 'startUsingPermission'. |
| 12100007 | Service exception. |
| 12100008 | Out of memory. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let tokenID: number = 0; // Obtained from the accessTokenId field of ApplicationInfo in the BundleInfo of the application.
// Stop using a specified permission
privacyManager.stopUsingPermission(tokenID, 'ohos.permission.READ_AUDIO', (err: BusinessError, data: void) => {
  if (err) {
    console.error(`stopUsingPermission fail, code: ${err.code}, message: ${err.message}`);
  } else {
    console.info('stopUsingPermission success');
  }
});

```

## stopUsingPermission

```TypeScript
function stopUsingPermission(
    tokenID: int,
    permissionName: Permissions,
    pid?: int,
    options?: PermissionUsingOptions
  ): Promise<void>
```

系统应用调用此接口，标记不再使用指定权限。调用成功后，隐私服务将此状态变化通知所有该权限使用状态变更事件的订阅者。 适用于应用完成敏感操作后或退出前台时，通知系统权限使用结束。使用Promise异步回调。 pid需要与[startUsingPermission]privacyManager.startUsingPermission传入的pid相同。

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
| permissionName | Permissions | Yes | 需要停止使用的权限名称。传入无效值时返回错误码12100001。 |
| pid | int | No |  |
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
| 12100001 | Invalid parameter. The tokenID is 0, the permissionName exceeds  256 characters, the type of the specified tokenID is not of the application type, or the enhancedIdentity  in PermissionUsingOptions exceeds 48 characters. |
| 12100003 | The specified permission does not exist or is not a user_grant permission. |
| 12100004 | The API is not used in pair with 'startUsingPermission'. |
| 12100007 | Service exception. |
| 12100008 | Out of memory. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { rpc } from '@kit.IPCKit';

let tokenID: number = rpc.IPCSkeleton.getCallingTokenId(); // It can also be obtained from the accessTokenId field of ApplicationInfo in the BundleInfo of the application.
let pid: number = rpc.IPCSkeleton.getCallingPid();

// Without the pid parameter
privacyManager.stopUsingPermission(tokenID, 'ohos.permission.READ_AUDIO').then(() => {
  console.info('stopUsingPermission success');
}).catch((err: BusinessError): void => {
  console.error(`stopUsingPermission fail, code: ${err.code}, message: ${err.message}`);
});

// With the pid parameter
privacyManager.stopUsingPermission(tokenID, 'ohos.permission.READ_AUDIO', pid).then(() => {
  console.info('stopUsingPermission success');
}).catch((err: BusinessError): void => {
  console.error(`stopUsingPermission fail, code: ${err.code}, message: ${err.message}`);
});

// With the extended identity ID
privacyManager.stopUsingPermission(tokenID, 'ohos.permission.READ_AUDIO', pid, {enhancedIdentity: 'test'}).then(() => {
  console.info('stopUsingPermission success');
}).catch((err: BusinessError): void => {
  console.error(`stopUsingPermission fail, code: ${err.code}, message: ${err.message}`);
});

```

## stopUsingPermission

```TypeScript
function stopUsingPermission(
    tokenID: int,
    permissionName: Permissions,
    pid?: int
  ): Promise<void>
```

系统应用调用此接口，标记不再使用指定权限。调用成功后，隐私服务将此状态变化通知所有该权限使用状态变更事件的订阅者。适用于应用完成敏感操作后或退出前台时，通知系统权限使用结束。使用Promise异步回调。 pid需要与 [startUsingPermission]privacyManager.startUsingPermission(tokenID: int, permissionName: Permissions, pid?: int, usedType?: PermissionUsedType) 传入的pid相同。

**Since:** 18

**Required permissions:** 

 ohos.permission.PERMISSION_USED_STATS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionName | Permissions | Yes | 需要停止使用的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |
| pid | int | No |  |

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
| 12100001 | Invalid parameter. The tokenID is 0, the permissionName exceeds 256  characters, or the type of the specified tokenID is not of the application type. |
| 12100003 | The specified permission does not exist or is not a user_grant permission. |
| 12100004 | The API is not used in pair with 'startUsingPermission'. |
| 12100007 | Service exception. |
| 12100008 | Out of memory. |

**Example**

```TypeScript
import { privacyManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { rpc } from '@kit.IPCKit';

let tokenID: number = rpc.IPCSkeleton.getCallingTokenId(); // It can also be obtained from the accessTokenId field of ApplicationInfo in the BundleInfo of the application.
let pid: number = rpc.IPCSkeleton.getCallingPid();

// without pid
privacyManager.stopUsingPermission(tokenID, 'ohos.permission.READ_AUDIO').then(() => {
  console.info('stopUsingPermission success');
}).catch((err: BusinessError): void => {
  console.error(`stopUsingPermission fail, code: ${err.code}, message: ${err.message}`);
});

// with pid
privacyManager.stopUsingPermission(tokenID, 'ohos.permission.READ_AUDIO', pid).then(() => {
  console.info('stopUsingPermission success');
}).catch((err: BusinessError): void => {
  console.error(`stopUsingPermission fail, code: ${err.code}, message: ${err.message}`);
});

```

