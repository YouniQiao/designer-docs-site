# AtManager

程序访问控制管理类，提供权限校验、运行时权限弹窗申请、设置页授权引导、全局开关请求和权限状态监听等能力。通过[createAtManager]abilityAccessCtrl.createAtManager 获取实例。

**Since:** 8

**System capability:** SystemCapability.Security.AccessToken

## Modules to Import

```TypeScript
import { Context,Permissions,PermissionRequestResult } from '@kit.AbilityKit';
```

## checkAccessToken

```TypeScript
checkAccessToken(tokenID: int, permissionName: Permissions): Promise<GrantStatus>
```

校验应用是否已被授予指定权限。调用成功后，返回当前权限的授权状态，开发者可据此决定直接执行后续业务、继续发起权限申请，或引导用户前往系统设置修改授权状态。使用Promise异步回调。 适用于应用访问相机、麦克风、位置等受保护资源前进行前置权限判断的场景。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 要校验的目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。   BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)； 若校验本应用，也可通过[bundleManager.getBundleInfoForSelfSync](arkts-bundlemanager-getbundleinfoforselfsync-f.md#getBundleInfoForSelfSync-1)获取。 |
| permissionName | Permissions | Yes | 需要校验的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;GrantStatus> | Promise对象，返回授权状态结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 12100001 | Invalid parameter. The tokenID is 0, or the permissionName exceeds 256  characters. |

**Example**

```TypeScript
import { abilityAccessCtrl, Permissions, bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Create a permission manager instance
let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
// Obtain the bundleInfo of the app
let bundleInfo = bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION);
// Obtain the TokenID of the app
let tokenID: number = bundleInfo.appInfo.accessTokenId;
// Set the permission name to be verified
let permissionName: Permissions = 'ohos.permission.GRANT_SENSITIVE_PERMISSIONS';
// Verify whether the app has been granted the permission
atManager.checkAccessToken(tokenID, permissionName).then((data: abilityAccessCtrl.GrantStatus) => {
  console.info(`checkAccessToken success, result: ${data}`);
}).catch((err: BusinessError): void => {
  console.error(`checkAccessToken fail, code: ${err.code}, message: ${err.message}`);
});

```

## checkAccessTokenSync

```TypeScript
checkAccessTokenSync(tokenID: int, permissionName: Permissions): GrantStatus
```

校验应用是否已被授予指定权限，同步返回该权限的授权状态。开发者可据此决定直接执行后续业务流程，或继续发起权限申请，或引导用户前往设置页修改授权状态。 与[checkAccessToken]abilityAccessCtrl.AtManager.checkAccessToken相比，本接口同步返回授权状态，适用于无需异步处理的权限校验场景。 适用于应用访问相机、麦克风、位置等受保护资源前进行前置权限判断的场景。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 要校验的目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。   BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)； 若校验本应用，也可通过[bundleManager.getBundleInfoForSelfSync](arkts-bundlemanager-getbundleinfoforselfsync-f.md#getBundleInfoForSelfSync-1)获取。 |
| permissionName | Permissions | Yes | 需要校验的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| GrantStatus | 枚举实例，返回授权状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 12100001 | Invalid parameter. The tokenID is 0, or the permissionName exceeds 256  characters. |

**Example**

```TypeScript
import { abilityAccessCtrl, Permissions, bundleManager } from '@kit.AbilityKit';

// Create a permission manager instance
let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
// Obtain the bundleInfo of the app
let bundleInfo = bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION);
// Obtain the TokenID of the app
let tokenID: number = bundleInfo.appInfo.accessTokenId;
// Set the permission name to be verified
let permissionName: Permissions = 'ohos.permission.GRANT_SENSITIVE_PERMISSIONS';
// Synchronously verify whether the app has been granted the permission
let data: abilityAccessCtrl.GrantStatus = atManager.checkAccessTokenSync(tokenID, permissionName);
console.info(`Result: ${data}`);

```

## generateCliAuthResult

```TypeScript
generateCliAuthResult(
      hostTokenID: int,
      agentID: string,
      authInfoList: Array<CliAuthInfo>): Promise<ToolAuthResult>
```

根据CLI授权信息生成授权结果。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hostTokenID | int | Yes | 访问CLI指令的应用的tokenID。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| agentID | string | Yes | 用于标识发起CLI相关操作的智能体体标识。传入无效值时返回错误码12100001。  取值约束：长度不能超过48个字符。 |
| authInfoList | Array&lt;CliAuthInfo> | Yes | CLI授权信息列表，每项包含CLI信息（主命令和子命令名称）、待授权的权限名称列表和对应的授权结果列表。传入无效值时返回错误码12100001。  最大长度为99且不能为空。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ToolAuthResult> | Promise对象，返回生成的授权结果，包含授权结果字符串列表，可用于传递给CLI工具执行命令。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS". |
| 202 | Not system application. Interface caller is not a system application. |
| 12100001 | Invalid parameter. The hostTokenID is 0, the agentID exceeds 48  characters, authInfoList is empty or contains more than 99 items, the cliName in cliInfo of an item in  authInfoList is empty or exceeds 256 characters, the subCliName in cliInfo of an item in authInfoList  exceeds 256 characters, a permission name in permissionNames of an item in authInfoList is empty or exceeds  256 characters, or the number of permissionNames does not equal the number of authorizationResults in an item  in authInfoList. |
| 12100002 | The specified tokenID does not exist. |
| 12100003 | A permission name in permissionNames of an item in authInfoList does  not exist. |
| 12100007 | Service exception. |
| 12100009 | Common internal error. The account is not logged in, network is not  connected or an internal error occurs when generating authorization results. |

**Example**

```TypeScript
import { abilityAccessCtrl, Permissions } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let hostTokenID: number = 0; // For details about how to obtain it, see the description in the AtManager section.
let agentID: string = 'agent.demo';
let authInfoList: Array<abilityAccessCtrl.CliAuthInfo> = [{
  cliInfo: {
    cliName: 'ohos-example',
    subCliName: 'run'
  },
  permissionNames: ['ohos.permission.ACCESS_SYSTEM_SETTINGS' as Permissions],
  authorizationResults: [true]
}];
atManager.generateCliAuthResult(hostTokenID, agentID, authInfoList).then((data: abilityAccessCtrl.ToolAuthResult) => {
  console.info('generateCliAuthResult success, data: ' + JSON.stringify(data));
}).catch((err: BusinessError): void => {
  console.error(`generateCliAuthResult fail, code: ${err.code}, message: ${err.message}`);
});

```

## getCliPermissionRequestInfo

```TypeScript
getCliPermissionRequestInfo(agentID: string, cliInfoList: Array<CliInfo>): Promise<PermissionDialogResult>
```

查询CLI（Command Line Interface，命令行界面）命令是否需要权限弹窗，调用成功后，返回每条命令对应的权限弹窗判定结果。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.QUERY_TOOL_PERMISSIONS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agentID | string | Yes | 用于标识发起CLI相关操作的智能体标识。传入无效值时返回错误码12100001。  取值约束：长度不能超过48个字符。 |
| cliInfoList | Array&lt;CliInfo> | Yes | 待查询的CLI信息列表。每项包含一条命令及其子命令信息；建议按实际即将执行的命令集合传入，避免无关命令扩大判定范围。传入无效值时返回错误码12100001。  最大长度为99且不能为空。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PermissionDialogResult> | Promise对象，返回每条CLI命令的权限弹窗判定结果，包含是否需要弹窗、未满足的权限列表及决策状态等信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.QUERY_TOOL_PERMISSIONS". |
| 202 | Not system application. Interface caller is not a system application. |
| 12100001 | Invalid parameter. The agentID exceeds 48 characters, cliInfoList is empty  or exceeds 99 items, the cliName of an item in cliInfoList is empty or exceeds 256 characters, the subCliName  of an item in cliInfoList exceeds 256 characters, or the CLI command does not exist. |
| 12100007 | Service exception. |
| 12100009 | Common inner error. The account is not logged in, network is not connected  or an internal error occurs when querying CLI permissions or generating auth results. |

**Example**

```TypeScript
import { abilityAccessCtrl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let agentID: string = 'agent.demo';
let cliInfoList: Array<abilityAccessCtrl.CliInfo> = [{
  cliName: 'ohos-example',
  subCliName: 'run'
}];
atManager.getCliPermissionRequestInfo(agentID, cliInfoList).then((data: abilityAccessCtrl.PermissionDialogResult) => {
  console.info('getCliPermissionRequestInfo success, data: ' + JSON.stringify(data));
}).catch((err: BusinessError): void => {
  console.error(`getCliPermissionRequestInfo fail, code: ${err.code}, message: ${err.message}`);
});

```

## getCliPermissions

```TypeScript
getCliPermissions(
      hostTokenID: int,
      agentID: string,
      cliInfoList: Array<CliInfo>): Promise<CliPermissionsResult>
```

查询指定应用使用的CLI命令依赖的CLI权限及映射的运行时权限。调用成功后返回每条命令的CLI权限决策状态和运行时权限映射列表。使用Promise异步回调。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hostTokenID | int | Yes | 访问CLI指令的应用的tokenID。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| agentID | string | Yes | 用于标识发起CLI相关操作的智能体标识。传入无效值时返回错误码12100001。  取值约束：长度不能超过48个字符。 |
| cliInfoList | Array&lt;CliInfo> | Yes | 待查询的CLI信息列表。每项包含一条命令及其子命令信息。传入无效值时返回错误码12100001。  最大长度为99且不能为空。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CliPermissionsResult> | Promise对象，返回每条CLI命令依赖的CLI权限及其对应的运行时权限映射信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS". |
| 202 | Not system application. Interface caller is not a system application. |
| 12100001 | Invalid parameter. The hostTokenID is 0, the agentID exceeds 48  characters, cliInfoList is empty or contains more than 99 items, the cliName of an item in cliInfoList is  empty or exceeds 256 characters, the subCliName of an item in cliInfoList exceeds 256 characters, or the CLI  command does not exist. |
| 12100002 | The specified tokenID does not exist. |
| 12100007 | Service exception. |
| 12100009 | Common internal error. An internal error occurs when querying CLI  permissions or runtime permission information. |

**Example**

```TypeScript
import { abilityAccessCtrl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let hostTokenID: number = 0; // For details about how to obtain the token ID, see the description of the AtManager section.
let agentID: string = 'agent.demo';
let cliInfoList: Array<abilityAccessCtrl.CliInfo> = [{
  cliName: 'ohos-example',
  subCliName: 'run'
}];
atManager.getCliPermissions(hostTokenID, agentID, cliInfoList).then((data: abilityAccessCtrl.CliPermissionsResult) => {
  console.info('getCliPermissions success, data: ' + JSON.stringify(data));
}).catch((err: BusinessError): void => {
  console.error(`getCliPermissions fail, code: ${err.code}, message: ${err.message}`);
});

```

## getPermissionFlags

```TypeScript
getPermissionFlags(tokenID: int, permissionName: Permissions): Promise<int>
```

获取指定应用的指定权限的标志。使用Promise异步回调。

**Since:** 8

**Required permissions:** 

 ohos.permission.GET_SENSITIVE_PERMISSIONS or ohos.permission.GRANT_SENSITIVE_PERMISSIONS or * ohos.permission.REVOKE_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionName | Permissions | Yes | 查询的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回查询到的权限标记值。标记值的含义请参见  [PermissionStatusInfo]abilityAccessCtrl.PermissionStatusInfo中的grantFlags字段说明。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission specified below. |
| 202 | Not System App. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The tokenID is 0, or the permissionName exceeds 256  characters. |
| 12100002 | The specified tokenID does not exist. |
| 12100003 | The specified permission does not exist or is not declared in the  module.json file. |
| 12100006 | The operation is not allowed. Either the application is a sandbox or the  tokenID is from a remote device. |
| 12100007 | Service exception. |

**Example**

```TypeScript
import { abilityAccessCtrl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let tokenID: number = 0; // For details about how to obtain the tokenID, see the description in the AtManager section.
atManager.getPermissionFlags(tokenID, 'ohos.permission.GRANT_SENSITIVE_PERMISSIONS').then((data: number) => {
  console.info(`getPermissionFlags success, result: ${data}`);
}).catch((err: BusinessError): void => {
  console.error(`getPermissionFlags fail, code: ${err.code}, message: ${err.message}`);
});

```

## getPermissionRequestToggleStatus

```TypeScript
getPermissionRequestToggleStatus(permissionName: Permissions): Promise<PermissionRequestToggleStatus>
```

获取当前用户指定权限的弹窗开关状态。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.GET_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionName | Permissions | Yes | 待查询弹窗开关状态的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PermissionRequestToggleStatus> | Promise对象，返回指定权限的弹窗开关状态值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission specified below. |
| 202 | Not System App. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The permissionName exceeds 256 characters, or the  specified permission is not a user_grant permission. |
| 12100003 | The specified permission does not exist. |
| 12100007 | Service exception. |

**Example**

```TypeScript
import { abilityAccessCtrl, Permissions } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let permission: Permissions = 'ohos.permission.CAMERA';

atManager.getPermissionRequestToggleStatus(permission).then((res: abilityAccessCtrl.PermissionRequestToggleStatus) => {
  if (res == abilityAccessCtrl.PermissionRequestToggleStatus.CLOSED) {
    console.info('getPermissionRequestToggleStatus: The toggle status is close');
  } else {
    console.info('getPermissionRequestToggleStatus: The toggle status is open');
  }
}).catch((err: BusinessError): void => {
  console.error(`getPermissionRequestToggleStatus fail, code: ${err.code}, message: ${err.message}`);
});

```

## getPermissionsStatus

```TypeScript
getPermissionsStatus(tokenID: int, permissionList: Array<Permissions>): Promise<Array<PermissionStatus>>
```

获取指定应用权限状态列表。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.GET_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionList | Array&lt;Permissions> | Yes | 待获取权限状态的权限名列表。传入无效值时返回错误码12100001。  最大长度为1024且不能为空。取值约束：权限名长度不能超过256个字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;PermissionStatus>> | Promise对象，返回查询到的权限状态列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| 202 | Not System App. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The tokenID is 0 or the permissionList is empty or  exceeds the size limit. |
| 12100002 | The specified tokenID does not exist. |
| 12100007 | Service exception. |

**Example**

```TypeScript
import { abilityAccessCtrl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let tokenID: number = 0; // For details about how to obtain the tokenID, see the description in the AtManager section.
atManager.getPermissionsStatus(tokenID, ['ohos.permission.CAMERA']).then((data: Array<abilityAccessCtrl.PermissionStatus>) => {
  console.info(`getPermissionsStatus success, result: ${data}`);
}).catch((err: BusinessError): void => {
  console.error(`getPermissionsStatus fail, code: ${err.code}, message: ${err.message}`);
});

```

## getSelfPermissionStatus

```TypeScript
getSelfPermissionStatus(permissionName: Permissions): PermissionStatus
```

查询当前应用的权限状态，同步返回结果。调用成功后，返回当前权限的状态。与[checkAccessToken]abilityAccessCtrl.AtManager.checkAccessToken不同，本接口无 需传入应用身份标识，仅用于查询当前应用自身权限状态。 适用于在判断是否需要请求权限前、权限申请后确认授权结果、或监听到权限状态变化后重新查询等场景。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionName | Permissions | Yes | 需要查询状态的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| PermissionStatus | 枚举实例，返回权限状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12100001 | Invalid parameter. The permissionName is empty or exceeds 256 characters. |
| 12100007 | Service exception. |

**Example**

```TypeScript
import { abilityAccessCtrl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Create a permission management instance
let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
try {
  // Query the permission status of the current app
  let data: abilityAccessCtrl.PermissionStatus = atManager.getSelfPermissionStatus('ohos.permission.CAMERA');
  console.info(`getSelfPermissionStatus success, result: ${data}`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`getSelfPermissionStatus fail, code: ${error.code}, message: ${error.message}`);
}

```

## getVersion

```TypeScript
getVersion(): Promise<int>
```

获取当前权限管理的数据版本号。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | Promise对象，返回查询到的版本号。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |

**Example**

```TypeScript
import { abilityAccessCtrl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let promise = atManager.getVersion();
promise.then((data: number) => {
  console.info(`getVersion promise: data->${data}`);
}).catch((err: BusinessError): void => {
  console.error(`getVersion fail, code: ${err.code}, message: ${err.message}`);
});

```

## grantPermission

```TypeScript
grantPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>
```

授予应用权限。调用成功后，指定应用获得该权限，可以访问相应的受保护资源。与 [grantUserGrantedPermission]abilityAccessCtrl.AtManager.grantUserGrantedPermission仅支持user_grant类型权限不同, 该接口同时支持user_grant和manual_settings类型的权限授予。使用Promise异步回调。

**Since:** 21

**Required permissions:** 

 ohos.permission.GRANT_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionName | Permissions | Yes | 被授予的权限名称。权限名长度不能超过256个字符，超过限制时返回错误码12100001。 |
| permissionFlags | int | Yes | 授权选项。  取值限定为整数。  - 1表示当次用户若选择禁止该权限，下次权限弹窗仍可以弹出申请用户授权。  - 2表示当次用户若选择禁止该权限，下次不会再弹出权限弹窗，用户需要在系统设置的权限管理中进行授权。  - 64表示当次用户若选择仅本次允许，权限仅本次授权。应用切换后台状态或退出后取消授权。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.GRANT_SENSITIVE_PERMISSIONS". |
| 202 | Not System App. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The tokenID is 0, the permissionName  exceeds 256 characters or is not declared in the module.json file, or the flags value is invalid. |
| 12100002 | The specified tokenID does not exist. |
| 12100003 | The specified permission does not exist. |
| 12100006 | The application specified by the tokenID is not allowed to be  granted with the specified permission. Either the application is a sandbox or the tokenID is from  a remote device. |
| 12100007 | Service exception. |
| 12100014 | Unexpected permission. The specified permission is not a  user_grant or manual_settings permission. |

**Example**

```TypeScript
import { abilityAccessCtrl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let tokenID: number = 0; // For details about how to obtain the tokenID, see the description in the AtManager section.
let permissionFlags: number = 2;
atManager.grantPermission(tokenID, 'ohos.permission.READ_AUDIO', permissionFlags).then(() => {
  console.info('grantPermission success');
}).catch((err: BusinessError): void => {
  console.error(`grantPermission fail, code: ${err.code}, message: ${err.message}`);
});

```

## grantUserGrantedPermission

```TypeScript
grantUserGrantedPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>
```

授予应用user_grant权限。调用成功后，应用获得该user_grant权限，可以访问相应的受保护资源。使用Promise异步回调。 本接口仅支持授予user_grant类型的权限。若需要授予user_grant或manual_settings类型权限，建议使用 [grantPermission]abilityAccessCtrl.AtManager.grantPermission。

**Since:** 8

**Required permissions:** 

 ohos.permission.GRANT_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionName | Permissions | Yes | 被授予的权限名称。超过限制时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |
| permissionFlags | int | Yes | 授权选项。  取值限定为整数。  - 1表示当次用户若选择禁止该权限，下次权限弹窗仍可以弹出申请用户授权。  - 2表示当次用户若选择禁止该权限，下次不会再弹出权限弹窗，用户需要在系统设置的权限管理中进行授权。  - 64表示当次用户若选择仅本次允许，权限仅本次授权。应用切换后台状态或退出后取消授权。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.GRANT_SENSITIVE_PERMISSIONS". |
| 202 | Not System App. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The tokenID is 0, the permissionName exceeds 256  characters or is not declared in the module.json file, or the flags value is invalid. |
| 12100002 | The specified tokenID does not exist. |
| 12100003 | The specified permission does not exist or is not a user_grant permission. |
| 12100006 | The application specified by the tokenID is not allowed to be granted with  the specified permission.  Either the application is a sandbox or the tokenID is from a remote device. |
| 12100007 | Service exception. |

**Example**

```TypeScript
import { abilityAccessCtrl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let tokenID: number = 0; // For details about how to obtain the tokenID, see the description in the AtManager section.
let permissionFlags: number = 1;
atManager.grantUserGrantedPermission(tokenID, 'ohos.permission.READ_AUDIO', permissionFlags).then(() => {
  console.info('grantUserGrantedPermission success');
}).catch((err: BusinessError): void => {
  console.error(`grantUserGrantedPermission fail, code: ${err.code}, message: ${err.message}`);
});

```

## grantUserGrantedPermission

```TypeScript
grantUserGrantedPermission(
        tokenID: int,
        permissionName: Permissions,
        permissionFlags: int,
        callback: AsyncCallback<void>
    ): void
```

授予应用user_grant权限。使用callback异步回调。调用成功后，应用获得该user_grant权限，可以访问相应的受保护资源。

**Since:** 8

**Required permissions:** 

 ohos.permission.GRANT_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionName | Permissions | Yes | 被授予的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |
| permissionFlags | int | Yes | 授权选项。  取值限定为整数。  - 1表示当次用户若选择禁止该权限，下次权限弹窗仍可以弹出申请用户授权。  - 2表示当次用户若选择禁止该权限，下次不会再弹出权限弹窗，用户需要在系统设置的权限管理中进行授权。  - 64表示当次用户若选择仅本次允许，权限仅本次授权。应用切换后台状态或退出后取消授权。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当授予权限成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.GRANT_SENSITIVE_PERMISSIONS". |
| 202 | Not System App. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The tokenID is 0, the permissionName exceeds 256  characters or is not declared in the module.json file,  or the flags value is invalid. |
| 12100002 | The specified tokenID does not exist. |
| 12100003 | The specified permission does not exist or is not a user_grant permission. |
| 12100006 | The application specified by the tokenID is not allowed to be granted with  the specified permission. Either the application is a sandbox or the tokenID is from a remote device. |
| 12100007 | Service exception. |

**Example**

```TypeScript
import { abilityAccessCtrl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let tokenID: number = 0; // For details about how to obtain the tokenID, see the description in the AtManager section.
let permissionFlags: number = 1;
atManager.grantUserGrantedPermission(tokenID, 'ohos.permission.READ_AUDIO', permissionFlags, (err: BusinessError, data: void) => {
  if (err) {
    console.error(`grantUserGrantedPermission fail, code: ${err.code}, message: ${err.message}`);
  } else {
    console.info('grantUserGrantedPermission success');
  }
});

```

## off('permissionStateChange')

```TypeScript
off(
      type: 'permissionStateChange',
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void
```

取消订阅指定tokenID列表与权限列表的权限状态变更事件。使用callback异步回调。 取消订阅时，若不传入callback，则批量取消与tokenIDList和permissionList完全匹配的所有监听回调。 > **说明** > 该接口通常与[on]abilityAccessCtrl.AtManager.on配套使用，用于取消通过on创建的监听关系。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'permissionStateChange' | Yes | 订阅事件类型，固定为'permissionStateChange'，权限状态变更事件。 |
| tokenIDList | Array&lt;int> | Yes | 取消订阅的tokenID列表，为空时表示取消订阅所有的应用的权限状态变化，必须与on的输入一致。应用的身份标识可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  最大长度为1024。取值约束：列表中的tokenID必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionList | Array&lt;Permissions> | Yes | 取消订阅的权限名列表，为空时表示取消订阅所有的权限状态变化，必须与on的输入一致。传入无效值时返回错误码12100001。  最大长度为1024。取值约束：列表中的权限名需为有效权限名，权限名长度不能超过256个字符。 |
| callback | Callback&lt;PermissionStateChangeInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| 202 | Not System App. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The tokenIDList or permissionList is not in the  listening list. |
| 12100007 | Service exception. |

**Example**

```TypeScript
import { abilityAccessCtrl, Permissions, bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
  let bundleInfo: bundleManager.BundleInfo = bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION);
  let tokenIDList: Array<number> = [bundleInfo.appInfo.accessTokenId];
  let permissionList: Array<Permissions> = ['ohos.permission.DISTRIBUTED_DATASYNC'];
  atManager.off('permissionStateChange', tokenIDList, permissionList);
} catch (err) {
  let error = err as BusinessError;
  console.error(`catch errcode: ${error.code}, message: ${error.message}`);
}

```

## off('selfPermissionStateChange')

```TypeScript
off(
      type: 'selfPermissionStateChange',
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void
```

取消订阅自身指定权限列表的权限状态变更事件。取消订阅成功后，将不再接收指定权限列表的状态变化通知。 在无需继续监听权限变化、应用退出或切换页面等场景下，可调用该接口取消订阅。 > **说明** > 当不传入callback参数时，将批量删除与permissionList相关联的所有回调函数。 > 该接口通常与[on]abilityAccessCtrl.AtManager.on配套使用，用于取消通过on创建的监听关系。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'selfPermissionStateChange' | Yes | 取消订阅事件类型，固定为'selfPermissionStateChange'，权限状态变更事件。 |
| permissionList | Array&lt;Permissions> | Yes | 取消订阅的权限名列表，为空时表示取消订阅所有的权限状态变化，必须与on订阅时的权限列表匹配（不区分顺序）。  最大长度为1024。取值约束：列表中的权限名需为有效权限名，权限名长度不能超过256个字符。 |
| callback | Callback&lt;PermissionStateChangeInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left  unspecified; 2. Incorrect parameter types. |
| 12100004 | The API is not used in pair with 'on'. |
| 12100007 | Service exception. |

**Example**

```TypeScript
import { abilityAccessCtrl, Permissions } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // Create a permission management instance
  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
  // Set the permission list to unsubscribe from
  let permissionList: Array<Permissions> = ['ohos.permission.APPROXIMATELY_LOCATION'];
  // Unsubscribe from permission status changes
  atManager.off('selfPermissionStateChange', permissionList);
} catch (err) {
  let error = err as BusinessError;
  console.error(`Code: ${error.code}, message: ${error.message}`);
}

```

## offPermissionStateChange

```TypeScript
offPermissionStateChange(
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void
```

取消订阅指定tokenID列表与权限列表的权限状态变更事件。使用callback异步回调。 取消订阅时，若不传入callback，则批量取消与tokenIDList和permissionList完全匹配的所有监听回调。 > **说明** > 该接口通常与[onPermissionStateChange]abilityAccessCtrl.AtManager.onPermissionStateChange > 配套使用，用于取消通过onPermissionStateChange创建的监听关系。

**Since:** 23

**Required permissions:** 

 ohos.permission.GET_SENSITIVE_PERMISSIONS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenIDList | Array&lt;int> | Yes | 取消订阅的tokenID列表，为空时表示取消订阅所有的应用的权限状态变化，必须与on的输入一致。应用的身份标识可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  最大长度为1024。取值约束：列表中的tokenID必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionList | Array&lt;Permissions> | Yes | 取消订阅的权限名列表，为空时表示取消订阅所有的权限状态变化，必须与on的输入一致。传入无效值时返回错误码12100001。  最大长度为1024。取值约束：列表中的权限名需为有效权限名，权限名长度不能超过256个字符。 |
| callback | Callback&lt;PermissionStateChangeInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| 202 | Not System App. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The tokenIDList or permissionList is  not in the listening list. |
| 12100007 | Service exception. |

## offSelfPermissionStateChange

```TypeScript
offSelfPermissionStateChange(
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void
```

取消订阅自身指定权限列表的权限状态变更事件。取消订阅成功后，将不再接收指定权限列表的状态变化通知。 在无需继续监听权限变化、应用退出或切换页面等场景下，可调用该接口取消订阅。 当不传入callback参数时，将批量删除与permissionList相关联的所有回调函数。 该接口通常与[onSelfPermissionStateChange]abilityAccessCtrl.AtManager.onSelfPermissionStateChange 配套使用，用于取消通过onSelfPermissionStateChange创建的监听关系。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionList | Array&lt;Permissions> | Yes | 取消订阅的权限名列表，为空时表示取消订阅所有的权限状态变化，必须与onSelfPermissionStateChange  订阅时的权限列表匹配（不区分顺序）。  最大长度为1024。取值约束：列表中的权限名需为有效权限名，权限名长度不能超过256个字符。 |
| callback | Callback&lt;PermissionStateChangeInfo> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12100004 | The API is not used in pair with 'on'. |
| 12100007 | Service exception. |

## on('permissionStateChange')

```TypeScript
on(
      type: 'permissionStateChange',
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void
```

订阅指定tokenID列表与权限列表的权限状态变更事件。使用callback异步回调。 允许指定tokenID列表与权限列表订阅多个callback。 > **说明** > 若新的订阅与已有订阅在tokenID列表和权限列表上存在交集，不允许使用相同的callback进行订阅。 > 该接口通常与[off]abilityAccessCtrl.AtManager.of配套使用，当不再需要监听时应调用off取消订阅。

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'permissionStateChange' | Yes | 订阅事件类型，固定为'permissionStateChange'，权限状态变更事件。 |
| tokenIDList | Array&lt;int> | Yes | 订阅的tokenID列表，为空时表示订阅所有的应用的权限状态变化。应用的身份标识可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  最大长度为1024。取值约束：列表中的tokenID必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionList | Array&lt;Permissions> | Yes | 订阅的权限名列表，为空时表示订阅所有的权限状态变化。传入无效值时返回错误码12100001。  最大长度为1024且不能为空。取值约束：列表中的权限名需为有效权限名，权限名长度不能超过256个字符。 |
| callback | Callback&lt;PermissionStateChangeInfo> | Yes | 回调函数。订阅指定tokenID与指定权限名状态变更事件的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| 202 | Not System App. Interface caller is not a system app. |
| 12100001 | Invalid parameter. Possible causes: 1. The tokenIDList or permissionList  exceeds the size limit; 2. The tokenIDs or permissionNames in the list are all invalid. |
| 12100005 | The registration time has exceeded the limit. |
| 12100007 | Service exception. |
| 12100008 | Out of memory. |

**Example**

```TypeScript
import { abilityAccessCtrl, Permissions, bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
  let bundleInfo: bundleManager.BundleInfo = bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION);
  let tokenIDList: Array<number> = [bundleInfo.appInfo.accessTokenId];
  let permissionList: Array<Permissions> = ['ohos.permission.DISTRIBUTED_DATASYNC'];

  atManager.on('permissionStateChange', tokenIDList, permissionList, (data: abilityAccessCtrl.PermissionStateChangeInfo) => {
    console.info('receive permission state change');
    console.info(`data change: ${data.change}, tokenID: ${data.tokenID}, permission name: ${data.permissionName}`);
    });
} catch (err) {
  let error = err as BusinessError;
  console.error(`catch errcode: ${error.code}, message: ${error.message}`);
}

```

## on('selfPermissionStateChange')

```TypeScript
on(
      type: 'selfPermissionStateChange',
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void
```

订阅本应用的指定权限列表的权限授权状态变化事件，使用callback异步回调。可在需要根据权限状态实时更新UI或业务逻辑、监听用户授权行为等场景中使用。不再需要监听时，调用[off]abilityAccessCtrl.AtManager.off取消订阅。 - 多次调用本订阅接口时，如果订阅的权限列表相同，callback不同，允许订阅成功。 - 多次调用本订阅接口时，如果订阅的权限列表间有相同的子集，callback相同时，订阅失败。 > **说明** > 权限状态由“已授权”变更为“未授权”可能存在两种场景： > - 用户主动撤销：系统会终止对应应用进程。 > - 系统主动回收：应用进程不会终止。典型场景如安全控件的单次授权，在授权周期结束后由系统自动回收。 > 该接口通常与[off]abilityAccessCtrl.AtManager.off配套使用，当不再需要监听时应调用off取消订阅。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'selfPermissionStateChange' | Yes | 订阅事件类型，固定为'selfPermissionStateChange'，自身权限状态变更事件。 |
| permissionList | Array&lt;Permissions> | Yes | 订阅的权限名列表，为空时表示订阅所有的权限状态变化。传入无效值时返回错误码12100001。  最大长度为1024。取值约束：列表中的权限名需为有效权限名，权限名长度不能超过256个字符。 |
| callback | Callback&lt;PermissionStateChangeInfo> | Yes | 回调函数。订阅指定权限名状态变更事件的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left  unspecified; 2. Incorrect parameter types. |
| 12100001 | Invalid parameter. Possible causes: 1. The permissionList exceeds  the size limit; 2. The permissionNames in the list are all invalid. |
| 12100004 | The API is used repeatedly with the same input. |
| 12100005 | The registration time has exceeded the limit. |
| 12100007 | Service exception. |

**Example**

```TypeScript
import { abilityAccessCtrl, Permissions } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  // Create a permission management instance
  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
  // Set the list of permissions to subscribe to
  let permissionList: Array<Permissions> = ['ohos.permission.APPROXIMATELY_LOCATION'];
  // Subscribe to permission status changes
  atManager.on('selfPermissionStateChange', permissionList, (data: abilityAccessCtrl.PermissionStateChangeInfo) => {
    console.info('receive permission state change');
    console.info(`data change: ${data.change}, tokenID: ${data.tokenID}, permission name: ${data.permissionName}`);
  });
} catch (err) {
  let error = err as BusinessError;
  console.error(`Code: ${error.code}, message: ${error.message}`);
}

```

## onPermissionStateChange

```TypeScript
onPermissionStateChange(
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void
```

订阅指定tokenID列表与权限列表的权限状态变更事件。使用callback异步回调。 允许指定tokenID列表与权限列表订阅多个callback。 若新的订阅与已有订阅在tokenID列表和权限列表上存在交集，不允许使用相同的callback进行订阅。 该接口通常与[offPermissionStateChange]abilityAccessCtrl.AtManager.offPermissionStateChange配套使用， 当不再需要监听时应调用offPermissionStateChange取消订阅。

**Since:** 23

**Required permissions:** 

 ohos.permission.GET_SENSITIVE_PERMISSIONS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenIDList | Array&lt;int> | Yes | 订阅的tokenID列表，为空时表示订阅所有的应用的权限状态变化。应用的身份标识可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  最大长度为1024。取值约束：列表中的tokenID必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionList | Array&lt;Permissions> | Yes | 订阅的权限名列表，为空时表示订阅所有的权限状态变化。传入无效值时返回错误码12100001。  最大长度为1024。取值约束：列表中的权限名需为有效权限名，权限名长度不能超过256个字符。 |
| callback | Callback&lt;PermissionStateChangeInfo> | Yes | 回调函数。订阅指定tokenID与指定权限名状态变更事件的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| 202 | Not System App. Interface caller is not a system app. |
| 12100001 | Invalid parameter. Possible causes: 1. The tokenIDList or permissionList  exceeds the size limit; 2. The tokenIDs or permissionNames in the list are all invalid. |
| 12100005 | The registration time has exceeded the limit. |
| 12100007 | Service exception. |
| 12100008 | Out of memory. |

## onSelfPermissionStateChange

```TypeScript
onSelfPermissionStateChange(
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void
```

订阅本应用的指定权限列表的权限授权状态变化事件，使用callback异步回调。 可在需要根据权限状态实时更新UI或业务逻辑、监听用户授权行为等场景中使用。不再需要监听时，调用 [offSelfPermissionStateChange]abilityAccessCtrl.AtManager.offSelfPermissionStateChange取消订阅。 - 多次调用本订阅接口时，如果订阅的权限列表相同，callback不同，允许订阅成功。 - 多次调用本订阅接口时，如果订阅的权限列表间有相同的子集，callback相同时，订阅失败。 权限状态由“已授权”变更为“未授权”可能存在两种场景： - 用户主动撤销：系统会终止对应应用进程。 - 系统主动回收：应用进程不会终止。典型场景如安全控件的单次授权，在授权周期结束后由系统自动回收。 该接口通常与[offSelfPermissionStateChange]abilityAccessCtrl.AtManager.offSelfPermissionStateChange配套使用， 当不再需要监听时应调用offSelfPermissionStateChange取消订阅。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionList | Array&lt;Permissions> | Yes | 订阅的权限名列表，为空时表示订阅所有的权限状态变化。传入无效值时返回错误码12100001。  最大长度为1024。取值约束：列表中的权限名需为有效权限名，权限名长度不能超过256个字符。 |
| callback | Callback&lt;PermissionStateChangeInfo> | Yes | 回调函数。订阅指定权限名状态变更事件的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12100001 | Invalid parameter. Possible causes: 1. The permissionList exceeds  the size limit; 2. The permissionNames in the list are all invalid. |
| 12100004 | The API is used repeatedly with the same input. |
| 12100005 | The registration time has exceeded the limit. |
| 12100007 | Service exception. |

## openPermissionOnSetting

```TypeScript
openPermissionOnSetting(context: Context, permission: Permissions): Promise<SelectedResult>
```

用于[UIAbility](arkts-uiability-c.md#UIAbility)/ [UIExtensionAbility](arkts-uiextensionability-c.md#UIExtensionAbility)拉起权限设置页面。调用成功后会打开权限设置页面，用户在页面中 操作后，返回用户在设置页面中的选择结果。使用Promise异步回调。 适用于 [manual_settings](docroot://security/AccessToken/app-permission-mgmt-overview.md#manual_settings手动设置授权) 类型权限无法通过普通授权弹窗申请、必须引导用户进入系统设置完成授权的场景。manual_settings类型权限是指只能由用户在系统设置中手动开启的权限，无法通过普通授权弹窗直接申请。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 请求权限的UIAbility/UIExtensionAbility的Context。若传入其他应用、无效页面或非Stage模型的Context，接口可能报错或无法打开设置页面。 |
| permission | Permissions | Yes | 需要跳转设置页处理的权限名。传入无效或未在module.json中声明的权限时返回错误码12100001；仅支持授权方式为[manual_settings](docroot://security/AccessToken/app  -permission-mgmt-overview.md#manual_settings手动设置授权)类型的权限，传入其他类型权限时返回错误码12100014。  取值约束：权限名长度不能超过256个字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SelectedResult> | Promise对象，返回用户在设置页面中的选择结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12100001 | Invalid parameter. Possible causes: 1. The context is invalid  because it does not belong to the application itself; 2. The permission is invalid or not  declared in the module.json file. |
| 12100009 | Common inner error. An error occurs when creating the pop-up window or  obtaining the user operation result. |
| 12100014 | Unexpected permission. The permission is not a manual_settings  permission. |

**Example**

```TypeScript
import { abilityAccessCtrl, Context, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Create a permission manager instance
let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
// Obtain the context within the component.
let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
// Launch the pop-up window for redirecting to the settings page
atManager.openPermissionOnSetting(context, 'ohos.permission.HOOK_KEY_EVENT').then((data: abilityAccessCtrl.SelectedResult) => {
  console.info(`openPermissionOnSetting success, result: ${data}`);
}).catch((err: BusinessError): void => {
  console.error(`openPermissionOnSetting fail, code: ${err.code}, message: ${err.message}`);
});

```

## queryStatusByPermission

```TypeScript
queryStatusByPermission(
      permissionList: Array<Permissions>): Promise<Array<PermissionStatusInfo>>
```

根据权限列表查询所有已请求过该权限的应用及其权限状态。使用Promise异步回调。当查询的数据结果的大小超过50000条时，接口会直接返回12100015错误码。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.GET_SENSITIVE_PERMISSIONS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionList | Array&lt;Permissions> | Yes | 待查询的权限名称列表。传入无效值时返回错误码12100001。  最大长度为1024且不能为空。取值约束：权限名长度不能超过256个字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;PermissionStatusInfo>> | Promise对象，返回查询到的权限状态信息列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| 202 | Not system application. Interface caller is not a system application. |
| 12100001 | Invalid parameter. The permissionList is empty or exceeds the size  limit. |
| 12100003 | The specified permission does not exist. |
| 12100007 | Service exception. |
| 12100015 | The queried data exceeds the upper limit. |

**Example**

```TypeScript
import { abilityAccessCtrl, Permissions } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let permissionList: Array<Permissions> = ['ohos.permission.CAMERA'];
atManager.queryStatusByPermission(permissionList).then((data: Array<abilityAccessCtrl.PermissionStatusInfo>) => {
  console.info('queryStatusByPermission success, data: ' + JSON.stringify(data));
}).catch((err: BusinessError): void => {
  console.error(`queryStatusByPermission fail, code: ${err.code}, message: ${err.message}`);
});

```

## queryStatusByTokenID

```TypeScript
queryStatusByTokenID(tokenIDList: Array<int>): Promise<Array<PermissionStatusInfo>>
```

根据应用tokenID列表查询其所有的权限状态。使用Promise异步回调。当查询的数据结果的大小超过50000条时，接口会直接返回12100015错误码。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.GET_SENSITIVE_PERMISSIONS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenIDList | Array&lt;int> | Yes | 待查询的应用tokenID列表。应用的身份标识可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  最大长度为1024且不能为空。取值约束：列表中的tokenID必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;PermissionStatusInfo>> | Promise对象，返回查询到的权限状态信息列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. Interface caller does not have  permission "ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| 202 | Not system application. Interface caller is not a system application. |
| 12100001 | Invalid parameter. The tokenIDList is empty  or exceeds the size limit. |
| 12100002 | The specified tokenID does not exist. |
| 12100007 | Service exception. |
| 12100015 | The queried data exceeds the upper limit. |

**Example**

```TypeScript
import { abilityAccessCtrl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let tokenID: number = 0; // For details about how to obtain the token ID, see the description in the AtManager section.
let tokenIDList: Array<number> = [tokenID];
atManager.queryStatusByTokenID(tokenIDList).then((data: Array<abilityAccessCtrl.PermissionStatusInfo>) => {
  console.info('queryStatusByTokenID success, data: ' + JSON.stringify(data));
}).catch((err: BusinessError): void => {
  console.error(`queryStatusByTokenID fail, code: ${err.code}, message: ${err.message}`);
});

```

## requestGlobalSwitch

```TypeScript
requestGlobalSwitch(context: Context, type: SwitchType): Promise<boolean>
```

用于UIAbility/UIExtensionAbility拉起全局开关设置弹窗。调用成功后，若全局开关处于关闭状态，则弹出全局开关设置界面供用户操作；若全局开关已开启，则不拉起弹窗并返回true。使用Promise异步回调。 适用于依赖系统级全局开关（如相机、麦克风、定位）开启的场景。 当应用需要使用相机、麦克风或定位等需要全局开关管控的功能时，如果对应的全局开关被关闭，应用可拉起此弹窗请求用户开启对应功能。如果当前全局开关的状态为开启，则不拉起弹窗。 <!--RP5--> ![requestGlobalSwitch](docroot://reference/apis-ability-kit/figures/requestGlobalSwitch.png) <!--RP5End-->

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 请求全局开关的UIAbility/UIExtensionAbility的Context。若传入其他应用、无效页面或非Stage模型的Context，接口可能报错或无法拉  起弹窗。 |
| type | SwitchType | Yes | 指定需要请求开启的全局开关类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。返回true表示当前全局开关处于开启状态；返回false表示当前全局开关仍处于关闭状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 12100001 | Invalid parameter. Possible causes: 1. The context is invalid because  it does not belong to the application itself; 2. The type of global switch is not support. |
| 12100009 | Common inner error. An error occurs when creating the pop-up window  or obtaining user operation result. |
| 12100013 | The specific global switch is already open. |

## requestPermissionOnApplicationSetting

```TypeScript
requestPermissionOnApplicationSetting(tokenID: int): Promise<void>
```

拉起应用权限设置页面。使用Promise异步回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. Interface caller is not a system app. |
| 12100002 | The specified tokenID does not exist. |
| 12100007 | Service exception. |

**Example**

```TypeScript
import { abilityAccessCtrl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let tokenID: number = 0; // For details about how to obtain the tokenID, see the description in the AtManager section.
atManager.requestPermissionOnApplicationSetting(tokenID).then(() => {
  console.info('requestPermissionOnApplicationSetting success');
}).catch((err: BusinessError): void => {
  console.error(`requestPermissionOnApplicationSetting fail, code: ${err.code}, message: ${err.message}`);
});

```

## requestPermissionOnSetting

```TypeScript
requestPermissionOnSetting(context: Context, permissionList: Array<Permissions>): Promise<Array<GrantStatus>>
```

用于[UIAbility](arkts-uiability-c.md#UIAbility)/ [UIExtensionAbility](arkts-uiextensionability-c.md#UIExtensionAbility)二次拉起权限设置弹窗，返回授权状态数组。使用Promise异 步回调。 适用于用户在首次弹窗中已拒绝过该权限授予，需要通过设置页面继续申请权限的场景。 在调用此接口前，应用需要先调用 [requestPermissionsFromUser]abilityAccessCtrl.AtManager.requestPermissionsFromUser。 如果用户已在首次弹窗中授权，则调用当前接口不会拉起授权弹窗。 <!--RP4--> ![requestPermissionOnSetting](docroot://reference/apis-ability-kit/figures/requestPermissionOnSetting.png) <!--RP4End-->

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 请求权限的UIAbility/UIExtensionAbility的Context。若传入其他应用、无效页面或非Stage模型的Context，接口可能报错或无法拉起弹  窗。 |
| permissionList | Array&lt;Permissions> | Yes | 权限名列表。该数组不能为空，仅支持传入已声明且用户已撤销授权的user_grant权限，且传入权限需属于同一  [权限组](docroot://security/AccessToken/app-permission-group-list.md)。  取值约束：权限名长度不能超过256个字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;GrantStatus>> | Promise对象，返回授权状态数组，数组中每个元素对应permissionList中相应权限的授权结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12100001 | Invalid parameter. Possible causes: 1. The context is invalid  because it does not belong to the application itself; 2. The permission list contains the permission  that is not declared in the module.json file; 3. The permission list is invalid because the permissions in it  do not belong to the same permission group; 4. The permission list contains one or more system_grant  permissions. |
| 12100009 | Common inner error. An error occurs when creating the pop-up window or  obtaining the user operation result. |
| 12100010 | The request already exists. [since 12 - 20] |
| 12100011 | All permissions in the permission list have been granted. |
| 12100012 | The permission list contains the permission that has not been  revoked by the user. |
| 12100014 | Unexpected permission. You cannot request this type of permission  from users via a pop-up window. [since 21] |

## requestPermissionsFromUser

```TypeScript
requestPermissionsFromUser(context: Context, permissionList: Array<Permissions>, requestCallback: AsyncCallback<PermissionRequestResult>) : void
```

用于<!--RP1-->[UIAbility](arkts-uiability-c.md#UIAbility)<!--RP1End-->拉起弹窗请求 [用户授权](docroot://security/AccessToken/request-user-authorization.md)，返回本次请求权限的授权结果。使用callback异步回调。 适用于应用首次访问受保护资源前主动向用户申请 [user_grant](docroot://security/AccessToken/app-permission-mgmt-overview.md#user_grant用户授权) 权限的场景。 如果用户拒绝授权，将无法通过此接口再次拉起授权弹窗。开发者可引导用户前往系统设置界面手动授权，或调用 [requestPermissionOnSetting]abilityAccessCtrl.AtManager.requestPermissionOnSetting拉起权限设置弹窗，引导用户完成授权。 <!--RP3--> ![requestPermissionsFromUser](docroot://reference/apis-ability-kit/figures/requestPermissionsFromUser.png) <!--RP3End-->

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 请求权限的UIAbility的Context。  若传入其他应用、无效页面或非Stage模型的Context，接口可能报错或无法拉起弹窗。 |
| permissionList | Array&lt;Permissions> | Yes | 权限名列表。建议仅传入当前业务场景必要的敏感权限，避免一次申请过多权限。  最小长度为1。取值约束：权限名长度不能超过256个字符。 |
| requestCallback | AsyncCallback&lt;PermissionRequestResult> | Yes | 回调函数。调用完成后通过err返回错误信息，通过data返回权限请求结果对象。开发者可根据权限请求结果判断用户是否授权、是否展示过弹窗以及失败原因。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left  unspecified; 2. Incorrect parameter types. |
| 12100001 | (Deprecated in 12) Invalid parameter. The context is invalid when it  does not belong to the application itself. |
| 12100009 | Common inner error. An error occurs when creating the pop-up window  or obtaining user operation results. |

**Example**

```TypeScript
import { abilityAccessCtrl, Context, PermissionRequestResult, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Create a permission manager instance
let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
// Obtain the context within the component.
let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
// Request user authorization
atManager.requestPermissionsFromUser(context, ['ohos.permission.CAMERA'], (err: BusinessError, data: PermissionRequestResult) => {
  if (err) {
    console.error(`requestPermissionsFromUser fail, code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`requestPermissionsFromUser success, result: ${data}`);
    console.info('requestPermissionsFromUser data permissions:' + data.permissions);
    console.info('requestPermissionsFromUser data authResults:' + data.authResults);
    console.info('requestPermissionsFromUser data dialogShownResults:' + data.dialogShownResults);
    console.info('requestPermissionsFromUser data errorReasons:' + data.errorReasons);
  }
});

```

## requestPermissionsFromUser

```TypeScript
requestPermissionsFromUser(context: Context, permissionList: Array<Permissions>) : Promise<PermissionRequestResult>
```

用于<!--RP1-->[UIAbility](arkts-uiability-c.md#UIAbility)<!--RP1End-->拉起弹窗请求 [用户授权](docroot://security/AccessToken/request-user-authorization.md)，返回本次请求权限的授权结果。使用Promise异步回调。 适用于应用首次访问受保护资源前主动向用户申请user_grant权限的场景。 > **说明** > 如果用户拒绝授权，将无法通过此接口再次拉起授权弹窗。开发者可引导用户前往系统设置界面手动授权，或调用 > [requestPermissionOnSetting]abilityAccessCtrl.AtManager.requestPermissionOnSetting拉起权限设置弹窗，引导用户完成授权。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 请求权限的UIAbility的Context。若传入其他应用、无效页面或非Stage模型的Context，接口可能报错或无法拉起弹窗。 |
| permissionList | Array&lt;Permissions> | Yes | 权限名列表。建议仅传入当前业务场景必要的敏感权限，避免一次申请过多权限。  最小长度为1。取值约束：权限名长度不能超过256个字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PermissionRequestResult> | Promise对象，返回权限请求结果对象，包含权限数组、每个权限的授权结果、是否展示弹窗以及失败原因等信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left  unspecified; 2. Incorrect parameter types. |
| 12100001 | (Deprecated in 12) Invalid parameter. The context is invalid when it  does not belong to the application itself. |
| 12100009 | Common inner error. An error occurs when creating the pop-up window or  obtaining the user operation result. [since 11] |

**Example**

```TypeScript
import { abilityAccessCtrl, Context, PermissionRequestResult, common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Create a permission manager instance
let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
// Obtain the context within the component.
let context: Context = this.getUIContext().getHostContext() as common.UIAbilityContext;
// Request user authorization
atManager.requestPermissionsFromUser(context, ['ohos.permission.CAMERA']).then((data: PermissionRequestResult) => {
  console.info(`requestPermissionsFromUser success, result: ${data}`);
  console.info('requestPermissionsFromUser data permissions:' + data.permissions);
  console.info('requestPermissionsFromUser data authResults:' + data.authResults);
  console.info('requestPermissionsFromUser data dialogShownResults:' + data.dialogShownResults);
  console.info('requestPermissionsFromUser data errorReasons:' + data.errorReasons);
}).catch((err: BusinessError): void => {
  console.error(`requestPermissionsFromUser fail, code: ${err.code}, message: ${err.message}`);
});

```

## requestPermissionsFromUserWithWindowId

```TypeScript
requestPermissionsFromUserWithWindowId(
        context: Context,
        windowId: int,
        permissionList: Array<Permissions>) : Promise<PermissionRequestResult>
```

基于窗口ID弹出弹窗请求用户授权，调用成功后，返回本次权限申请结果对象，开发者可根据权限申请结果继续窗口级授权后的业务流程。使用Promise异步回调。 适用于系统应用需要将权限申请弹窗明确附着到指定窗口的场景。 如果用户拒绝授权，将无法再次拉起弹窗，可通过以下方式重新获取权限：1. 在系统设置界面中手动授权；2. 调用 [requestPermissionOnSetting]abilityAccessCtrl.AtManager.requestPermissionOnSetting，拉起权限设置弹窗引导用户授权。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | 请求权限的UIAbility/UIExtensionAbility的Context。若传入其他应用、无效页面或非Stage模型的Context，接口可能报错或无法拉起弹窗。 |
| windowId | int | Yes | 应用窗口的ID。可通过[window.findWindow](../../apis-arkui/arkts-apis/arkts-window-findwindow-f.md#findWindow-1)(窗口名).  [getWindowProperties()](../../apis-arkui/arkts-apis/arkts-window-window-i.md#getWindowProperties).id获取。该参数必须对应当前有效窗口，传入已销毁、不可见或无效  窗口ID时将返回12100001。  取值限定为整数。 |
| permissionList | Array&lt;Permissions> | Yes | 权限名列表。建议仅传入当前窗口场景下真正需要的敏感权限。  最小长度为1。取值约束：权限名长度不能超过256个字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PermissionRequestResult> | Promise对象，返回本次权限申请结果，包含权限数组、授权结果、是否展示弹窗以及失败原因等信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 12100001 | Invalid parameter. windowId is invalid. |
| 12100009 | Common inner error. An error occurs when creating the popup window or  obtaining the user operation result. |

**Example**

```TypeScript
import { abilityAccessCtrl, Context, PermissionRequestResult } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { window } from '@kit.ArkUI';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
// Obtain the context within the component.
let context: Context = this.getUIContext().getHostContext() as Context;
let windowId = 0; // Obtain the window ID: let windowId = window.findWindow(window name).getWindowProperties().id;
// Request user authorization for a specified permission based on the window ID
atManager.requestPermissionsFromUserWithWindowId(context, windowId, ['ohos.permission.CAMERA']).then((data: PermissionRequestResult) => {
  console.info(`requestPermissionsFromUserWithWindowId success, result: ${data}`);
  console.info('requestPermissionsFromUserWithWindowId data permissions:' + data.permissions);
  console.info('requestPermissionsFromUserWithWindowId data authResults:' + data.authResults);
  console.info('requestPermissionsFromUserWithWindowId data dialogShownResults:' + data.dialogShownResults);
  console.info('requestPermissionsFromUserWithWindowId data errorReasons:' + data.errorReasons);
}).catch((err: BusinessError): void => {
  console.error(`requestPermissionsFromUserWithWindowId fail, code: ${err.code}, message: ${err.message}`);
});

```

## revokePermission

```TypeScript
revokePermission(
      tokenID: int,
      permissionName: Permissions,
      permissionFlags: int,
      killProcess?: boolean): Promise<void>
```

撤销应用权限。调用成功后，应用失去该权限，无法访问相应的受保护资源。根据killProcess参数的值决定是否终止应用进程。使用Promise异步回调。 当killProcess参数为true且权限状态从“已授权”变为“未授权”时，应用进程会被终止。

**Since:** 21

**Required permissions:** 

 ohos.permission.REVOKE_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionName | Permissions | Yes | 被撤销的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |
| permissionFlags | int | Yes | 授权选项。  取值限定为整数。  - 1表示当次用户若选择禁止该权限，下次权限弹窗仍可以弹出申请用户授权。  - 2表示当次用户若选择禁止该权限，下次不会再弹出权限弹窗，用户需要在系统设置的权限管理中进行授权。  - 64表示当次用户若选择仅本次允许，权限仅本次授权。应用切换后台状态或退出后取消授权。 |
| killProcess | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. The interface invoker does not have permission  "ohos.permission.REVOKE_SENSITIVE_PERMISSIONS". |
| 202 | Not a system application. The interface invoker is not a system  application. |
| 12100001 | Invalid parameter. The token ID is 0, the permission name  exceeds 256 characters or is not declared in the module.json file,  or the value of flags is invalid. |
| 12100002 | The specified tokenID does not exist. |
| 12100003 | The specified permission does not exist. |
| 12100006 | The specified permission is not allowed to be revoked  from the application specified by the tokenID. Either the application is a sandbox or the tokenID  is from a remote device. |
| 12100007 | Service exception. |
| 12100014 | Unexpected permission. The specified permission is not a  user_grant or manual_settings permission. |

**Example**

```TypeScript
import { abilityAccessCtrl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let tokenID: number = 0; // For details about how to obtain the tokenID, see the description in the AtManager section.
let permissionFlags: number = 2;
// Do not terminate the application process.
atManager.revokePermission(tokenID, 'ohos.permission.READ_AUDIO', permissionFlags, false).then(() => {
  console.info('revokePermission success, process not killed');
}).catch((err: BusinessError): void => {
  console.error(`revokePermission fail, code: ${err.code}, message: ${err.message}`);
});
// Terminate the application process (default behavior).
atManager.revokePermission(tokenID, 'ohos.permission.READ_AUDIO', permissionFlags).then(() => {
  console.info('revokePermission success');
}).catch((err: BusinessError): void => {
  console.error(`revokePermission fail, code: ${err.code}, message: ${err.message}`);
});

```

## revokeUserGrantedPermission

```TypeScript
revokeUserGrantedPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>
```

撤销应用user_grant权限。调用成功后，应用失去该user_grant权限，无法访问相应的受保护资源。使用Promise异步回调。 本接口仅支持撤销user_grant类型的权限，且不支持控制是否终止应用进程。若需要撤销user_grant或manual_settings类型权限，或需要控制撤销权限后是否终止应用进程，建议使用 [revokePermission]abilityAccessCtrl.AtManager.revokePermission。 当权限状态从“已授权”变为“未授权”时，应用进程会被终止。

**Since:** 8

**Required permissions:** 

 ohos.permission.REVOKE_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionName | Permissions | Yes | 被撤销的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |
| permissionFlags | int | Yes | 授权选项。  取值限定为整数。  - 1表示当次用户若选择禁止该权限，下次权限弹窗仍可以弹出申请用户授权。  - 2表示当次用户若选择禁止该权限，下次不会再弹出权限弹窗，用户需要在系统设置的权限管理中进行授权。  - 64表示当次用户若选择仅本次允许，权限仅本次授权。应用切换后台状态或退出后取消授权。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.REVOKE_SENSITIVE_PERMISSIONS". |
| 202 | Not System App. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The tokenID is 0, the permissionName exceeds 256  characters or is not declared in the module.json file, or the flags value is invalid. |
| 12100002 | The specified tokenID does not exist. |
| 12100003 | The specified permission does not exist or is not a user_grant permission. |
| 12100006 | The application specified by the tokenID is not allowed to be revoked with  the specified permission. Either the application is a sandbox or the tokenID is from a remote device. |
| 12100007 | Service exception. |

**Example**

```TypeScript
import { abilityAccessCtrl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let tokenID: number = 0; // For details about how to obtain the tokenID, see the description in the AtManager section.
let permissionFlags: number = 1;
atManager.revokeUserGrantedPermission(tokenID, 'ohos.permission.READ_AUDIO', permissionFlags).then(() => {
  console.info('revokeUserGrantedPermission success');
}).catch((err: BusinessError): void => {
  console.error(`revokeUserGrantedPermission fail, code: ${err.code}, message: ${err.message}`);
});

```

## revokeUserGrantedPermission

```TypeScript
revokeUserGrantedPermission(
        tokenID: int,
        permissionName: Permissions,
        permissionFlags: int,
        callback: AsyncCallback<void>
    ): void
```

撤销应用user_grant权限。使用callback异步回调。调用成功后，应用失去该user_grant权限，无法访问相应的受保护资源。

**Since:** 8

**Required permissions:** 

 ohos.permission.REVOKE_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。  BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)。 |
| permissionName | Permissions | Yes | 被撤销的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |
| permissionFlags | int | Yes | 授权选项。  取值限定为整数。  - 1表示当次用户若选择禁止该权限，下次权限弹窗仍可以弹出申请用户授权。  - 2表示当次用户若选择禁止该权限，下次不会再弹出权限弹窗，用户需要在系统设置的权限管理中进行授权。  - 64表示当次用户若选择仅本次允许，权限仅本次授权。应用切换后台状态或退出后取消授权。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当撤销权限成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission  "ohos.permission.REVOKE_SENSITIVE_PERMISSIONS". |
| 202 | Not System App. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The tokenID is 0, the permissionName exceeds 256  characters or is not declared in the module.json file, or the flags value is invalid. |
| 12100002 | The specified tokenID does not exist. |
| 12100003 | The specified permission does not exist or is not a user_grant permission. |
| 12100006 | The application specified by the tokenID is not allowed to be revoked with  the specified permission. Either the application is a sandbox or the tokenID is from a remote device. |
| 12100007 | Service exception. |

**Example**

```TypeScript
import { abilityAccessCtrl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let tokenID: number = 0; // For details about how to obtain the tokenID, see the description in the AtManager section.
let permissionFlags: number = 1;
atManager.revokeUserGrantedPermission(tokenID, 'ohos.permission.READ_AUDIO', permissionFlags, (err: BusinessError, data: void) => {
  if (err) {
    console.error(`revokeUserGrantedPermission fail, code: ${err.code}, message: ${err.message}`);
  } else {
    console.info('revokeUserGrantedPermission success');
  }
});

```

## setPermissionRequestToggleStatus

```TypeScript
setPermissionRequestToggleStatus(permissionName: Permissions, status: PermissionRequestToggleStatus): Promise<void>
```

设置当前用户指定权限的弹窗开关状态。调用成功后，该权限的弹窗开关状态将被设置为指定值。当状态为CLOSED时，应用请求该权限时不会弹出权限弹窗；当状态为OPEN时，应用请求该权限时会正常弹出权限弹窗。使用Promise异步回 调。

**Since:** 12

**Required permissions:** 

 ohos.permission.DISABLE_PERMISSION_DIALOG

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionName | Permissions | Yes | 待设置弹窗开关状态的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |
| status | PermissionRequestToggleStatus | Yes | 指定权限的弹窗开关状态值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 201 | Permission denied. Interface caller does not have permission specified below. |
| 202 | Not System App. Interface caller is not a system app. |
| 12100001 | Invalid parameter. The permissionName exceeds 256 characters, the specified  permission is not a user_grant permission, or the status value is invalid. |
| 12100003 | The specified permission does not exist. |
| 12100007 | Service exception. |
| 12100009 | Common inner error. A database error occurs. |

**Example**

```TypeScript
import { abilityAccessCtrl, Permissions } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
let permission: Permissions = 'ohos.permission.CAMERA';

atManager.setPermissionRequestToggleStatus(permission, abilityAccessCtrl.PermissionRequestToggleStatus.CLOSED).then(() => {
  console.info('setPermissionRequestToggleStatus: set closed successful');
}).catch((err: BusinessError): void => {
  console.error(`setPermissionRequestToggleStatus fail, code: ${err.code}, message: ${err.message}`);
});

```

## verifyAccessToken

```TypeScript
verifyAccessToken(tokenID: int, permissionName: Permissions): Promise<GrantStatus>
```

校验应用是否已被授予指定权限，调用成功后，返回当前权限的授权状态，开发者可据此决定直接执行后续业务、继续发起权限申请，或引导用户前往系统设置修改授权状态。使用Promise异步回调。 适用于应用访问受保护资源前进行前置权限判断的场景。 > **说明** > 建议使用[checkAccessToken](#checkaccesstoken9)替代。

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 要校验的目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。   BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)； 若校验本应用，也可通过[bundleManager.getBundleInfoForSelfSync](arkts-bundlemanager-getbundleinfoforselfsync-f.md#getBundleInfoForSelfSync-1)获取。 |
| permissionName | Permissions | Yes | 需要校验的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;GrantStatus> | Promise对象，返回授权状态结果。 |

**Example**

```TypeScript
import { abilityAccessCtrl, Permissions, bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Create a permission manager instance
let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
// Obtain the bundleInfo of the app
let bundleInfo = bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION);
// Obtain the TokenID of the app
let tokenID: number = bundleInfo.appInfo.accessTokenId;
// Set the permission name to be verified
let permissionName: Permissions = 'ohos.permission.GRANT_SENSITIVE_PERMISSIONS';
// Verify whether the app has been granted the permission
atManager.verifyAccessToken(tokenID, permissionName).then((data: abilityAccessCtrl.GrantStatus) => {
  console.info(`verifyAccessToken success, result: ${data}`);
}).catch((err: BusinessError): void => {
  console.error(`verifyAccessToken fail, code: ${err.code}, message: ${err.message}`);
});

```

## verifyAccessToken

```TypeScript
verifyAccessToken(tokenID: number, permissionName: string): Promise<GrantStatus>
```

校验应用是否已被授予指定权限。调用成功后，返回当前权限的授权状态，开发者可据此决定后续操作。使用Promise异步回调。 > **说明** > 从API version 8开始支持，从API version 9开始废弃，建议使用[checkAccessToken](#checkaccesstoken9)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.abilityAccessCtrl.AtManager#checkAccessToken

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | 要校验的目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的[accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。传入无效值时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。   BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)； 若校验本应用，也可通过[bundleManager.getBundleInfoForSelfSync](arkts-bundlemanager-getbundleinfoforselfsync-f.md#getBundleInfoForSelfSync-1)获取。 |
| permissionName | string | Yes | 需要校验的权限名称。传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;GrantStatus> | Promise对象，返回授权状态结果。 |

**Example**

```TypeScript
import { abilityAccessCtrl, Permissions, bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Create a permission manager instance
let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
// Obtain the bundleInfo of the app
let bundleInfo = bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION);
// Obtain the TokenID of the app
let tokenID: number = bundleInfo.appInfo.accessTokenId;
// Set the permission name to be verified
let permissionName: Permissions = 'ohos.permission.GRANT_SENSITIVE_PERMISSIONS';
// Verify whether the app has been granted the permission
atManager.verifyAccessToken(tokenID, permissionName).then((data: abilityAccessCtrl.GrantStatus) => {
  console.info(`verifyAccessToken success, result: ${data}`);
}).catch((err: BusinessError): void => {
  console.error(`verifyAccessToken fail, code: ${err.code}, message: ${err.message}`);
});

```

## verifyAccessTokenSync

```TypeScript
verifyAccessTokenSync(tokenID: int, permissionName: Permissions): GrantStatus
```

校验应用是否已被授予指定权限，同步返回该权限的授权状态。开发者可据此决定直接执行后续业务流程，或继续发起权限申请，或引导用户前往系统设置修改授权状态。 适用于应用访问相机、麦克风、位置等受保护资源前进行前置权限判断的场景。 建议使用[checkAccessTokenSync]abilityAccessCtrl.AtManager.checkAccessTokenSync替代。

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | int | Yes | 要校验的目标应用的身份标识。可通过应用BundleInfo中的ApplicationInfo中的  [accessTokenId]./bundleManager/ApplicationInfo:ApplicationInfo.accessTokenId字段获取。  该参数必须为大于0的整数，传入0时返回错误码12100001。  取值限定为整数。取值约束：该参数必须为大于0的整数。   BundleInfo获取可参考：[bundleManager.getBundleInfoSync](arkts-bundlemanager-getbundleinfosync-f.md#getBundleInfoSync-1)； 若校验本应用，也可通过[bundleManager.getBundleInfoForSelfSync](arkts-bundlemanager-getbundleinfoforselfsync-f.md#getBundleInfoForSelfSync-1)获取。 |
| permissionName | Permissions | Yes | 需要校验的权限名称。权限名长度不能超过256个字符，传入无效值时返回错误码12100001。  取值约束：权限名长度不能超过256个字符。 |

**Return value:**

| Type | Description |
| --- | --- |
| GrantStatus | 枚举实例，返回授权状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 12100001 | Invalid parameter. The tokenID is 0, or the permissionName exceeds 256  characters. |

**Example**

```TypeScript
import { abilityAccessCtrl, Permissions, bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Create a permission manager instance
let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
// Obtain the bundleInfo of the app
let bundleInfo = bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION);
// Obtain the TokenID of the app
let tokenID: number = bundleInfo.appInfo.accessTokenId;
try {
  // Set the permission name to be verified
  let permissionName: Permissions = 'ohos.permission.GRANT_SENSITIVE_PERMISSIONS';
  // Synchronously verify whether the app has been granted the permission
  let data: abilityAccessCtrl.GrantStatus = atManager.verifyAccessTokenSync(tokenID, permissionName);
  console.info(`verifyAccessTokenSync success, result: ${data}`);
} catch (err) {
  let error = err as BusinessError;
  console.error(`verifyAccessTokenSync fail, code: ${error.code}, message: ${error.message}`);
}

```

