# AtManager

Program access control management class, providing capabilities such as permission verification, runtime permission dialog box request, settings page authorization guidance, global switch request, and permission status monitoring. Obtain an instance through [createAtManager](arkts-ability-abilityaccessctrl-createatmanager-f.md#createatmanager-1).

**Since:** 8

<!--Device-abilityAccessCtrl-interface AtManager--><!--Device-abilityAccessCtrl-interface AtManager-End-->

**System capability:** SystemCapability.Security.AccessToken

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@kit.AbilityKit';
```

## generateCliAuthResult

```TypeScript
generateCliAuthResult(
      hostTokenID: number,
      agentID: string,
      authInfoList: Array<CliAuthInfo>): Promise<ToolAuthResult>
```

Generates an authorization result based on the CLI authorization information.This API uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS

**Model restriction:** This API can be used only in the stage model.

<!--Device-AtManager-generateCliAuthResult(
      hostTokenID: int,
      agentID: string,
      authInfoList: Array<CliAuthInfo>): Promise<ToolAuthResult>--><!--Device-AtManager-generateCliAuthResult(
      hostTokenID: int,
      agentID: string,
      authInfoList: Array<CliAuthInfo>): Promise<ToolAuthResult>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hostTokenID | number | Yes | tokenID of the app that accesses the CLI command. It can be obtained through the [accessTokenId](arkts-ability-applicationinfo-i.md#accesstokenid) field in ApplicationInfo of BundleInfo. Passing an invalid value returns error code 12100001.<br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.<br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync-1). |
| agentID | string | Yes | Agent identifier, used to identify the agent that initiates CLI-related operations.Passing an invalid value returns error code 12100001.<br>Value constraint: The length cannot exceed 48 characters. |
| authInfoList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<CliAuthInfo> | Yes | List of CLI authorization information. Each item contains CLI information (main command and sub-command names), a list of permission names to be authorized, and a corresponding list of authorization results. Passing an invalid value returns error code 12100001.<br>The maximum length is 99 and cannot be empty. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<ToolAuthResult> | Promise used to return the generated authorization result, including a list of authorization result strings, which can be used to pass to the CLI tool to execute commands. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. Interface caller is not a system application. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The hostTokenID is 0, the agentID exceeds 48characters, authInfoList is empty or contains more than 99 items, the cliName in cliInfo of an item in authInfoList is empty or exceeds 256 characters, the subCliName in cliInfo of an item in authInfoList exceeds 256 characters, a permission name in permissionNames of an item in authInfoList is empty or exceeds256 characters, or the number of permissionNames does not equal the number of authorizationResults in an item in authInfoList. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | A permission name in permissionNames of an item in authInfoList does not exist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common internal error. The account is not logged in, network is not connected or an internal error occurs when generating authorization results. |

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

Queries whether a CLI (Command Line Interface) command requires a permission dialog. After the call is successful, the permission dialog decision result corresponding to each command is returned. This API uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** ohos.permission.QUERY_TOOL_PERMISSIONS

**Model restriction:** This API can be used only in the stage model.

<!--Device-AtManager-getCliPermissionRequestInfo(agentID: string, cliInfoList: Array<CliInfo>): Promise<PermissionDialogResult>--><!--Device-AtManager-getCliPermissionRequestInfo(agentID: string, cliInfoList: Array<CliInfo>): Promise<PermissionDialogResult>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agentID | string | Yes | Agent identifier, used to identify the agent that initiates CLI-related operations.Passing an invalid value returns error code 12100001.<br>Value constraint: The length cannot exceed 48 characters. |
| cliInfoList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<CliInfo> | Yes | List of CLI information to be queried. Each item contains a command and its sub-command information. It is recommended to pass in the set of commands that will actually be executed to avoid expanding the decision scope with irrelevant commands. Passing an invalid value returns error code 12100001.<br>The maximum length is 99 and cannot be empty. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PermissionDialogResult> | Promise used to return the permission dialog decision result for each CLI command, including information such as whether a dialog is needed, the list of unsatisfied permissions, and the decision status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.QUERY_TOOL_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. Interface caller is not a system application. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The agentID exceeds 48 characters, cliInfoList is empty or exceeds 99 items, the cliName of an item in cliInfoList is empty or exceeds 256 characters, the subCliName of an item in cliInfoList exceeds 256 characters, or the CLI command does not exist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. The account is not logged in, network is not connected or an internal error occurs when querying CLI permissions or generating auth results. |

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
      hostTokenID: number,
      agentID: string,
      cliInfoList: Array<CliInfo>): Promise<CliPermissionsResult>
```

Queries the CLI permissions and mapped runtime permissions that the CLI commands used by a specified app depend on. After the call is successful, the CLI permission decision status and runtime permission mapping list for each command are returned. This API uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS

**Model restriction:** This API can be used only in the stage model.

<!--Device-AtManager-getCliPermissions(
      hostTokenID: int,
      agentID: string,
      cliInfoList: Array<CliInfo>): Promise<CliPermissionsResult>--><!--Device-AtManager-getCliPermissions(
      hostTokenID: int,
      agentID: string,
      cliInfoList: Array<CliInfo>): Promise<CliPermissionsResult>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hostTokenID | number | Yes | Identity identifier of the app that accesses the CLI command. It can be obtained through the [accessTokenId](arkts-ability-applicationinfo-i.md#accesstokenid) field in ApplicationInfo of BundleInfo. Passing an invalid value returns error code 12100001.<br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.<br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync-1). |
| agentID | string | Yes | Agent identifier, used to identify the agent that initiates CLI-related operations.Passing an invalid value returns error code 12100001.<br>Value constraint: The length cannot exceed 48 characters. |
| cliInfoList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<CliInfo> | Yes | List of CLI information to be queried. Each item contains a command and its sub-command information. Passing an invalid value returns error code 12100001.<br>The maximum length is 99 and cannot be empty. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<CliPermissionsResult> | Promise used to return the CLI permissions that each CLI command depends on and their corresponding runtime permission mapping information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. Interface caller is not a system application. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The hostTokenID is 0, the agentID exceeds 48characters, cliInfoList is empty or contains more than 99 items, the cliName of an item in cliInfoList is empty or exceeds 256 characters, the subCliName of an item in cliInfoList exceeds 256 characters, or the CLI command does not exist. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common internal error. An internal error occurs when querying CLI permissions or runtime permission information. |

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
getPermissionFlags(tokenID: number, permissionName: Permissions): Promise<number>
```

Obtains the flags of a specified permission for a specified app. This API uses a promise to return the result.

**Since:** 8

**Required permissions:** ohos.permission.GET_SENSITIVE_PERMISSIONS or ohos.permission.GRANT_SENSITIVE_PERMISSIONS or ohos.permission.REVOKE_SENSITIVE_PERMISSIONS

<!--Device-AtManager-getPermissionFlags(tokenID: int, permissionName: Permissions): Promise<int>--><!--Device-AtManager-getPermissionFlags(tokenID: int, permissionName: Permissions): Promise<int>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Identity identifier of the target application. It can be obtained through the [accessTokenId](arkts-ability-applicationinfo-i.md#accesstokenid) field in ApplicationInfo of BundleInfo. Passing an invalid value returns error code 12100001.<br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.<br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync-1). |
| permissionName | [Permissions](arkts-ability-permissions-t.md) | Yes | Name of the permission to query. Passing an invalid value returns error code 12100001.<br>Value constraint: The permission name length cannot exceed 256 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Promise used to return the queried permission flag value. For details about the meaning of the flag value, see the description of the grantFlags field in [PermissionStatusInfo](arkts-ability-abilityaccessctrl-permissionstatusinfo-i-sys.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission specified below. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, or the permissionName exceeds 256characters. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not declared in the module.json file. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | The operation is not allowed. Either the application is a sandbox or the tokenID is from a remote device. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |

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

Obtains the toggle state of a permission. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.GET_SENSITIVE_PERMISSIONS

<!--Device-AtManager-getPermissionRequestToggleStatus(permissionName: Permissions): Promise<PermissionRequestToggleStatus>--><!--Device-AtManager-getPermissionRequestToggleStatus(permissionName: Permissions): Promise<PermissionRequestToggleStatus>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionName | [Permissions](arkts-ability-permissions-t.md) | Yes | Name of the permission whose pop-up switch status is to be queried.Passing an invalid value returns error code 12100001.<br>Value constraint: The permission name length cannot exceed 256 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PermissionRequestToggleStatus> | Promise used to return the toggle status of the dialog box for the specified permission. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission specified below. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The permissionName exceeds 256 characters, or the specified permission is not a user_grant permission. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist. |
| [12100004](../errorcode-access-token.md#12100004-listener-apis-not-used-in-pairs) | This API must be used together with [setPermissionRequestToggleStatus](arkts-ability-abilityaccessctrl-atmanager-i-sys.md#setpermissionrequesttogglestatus-1).<br>**Applicable version:** 26.1.0 and later |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |

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

## getPermissionRequestToggleStatus

```TypeScript
getPermissionRequestToggleStatus(
      permissionName: Permissions,
      subProfileId: number): Promise<PermissionRequestToggleStatus>
```

Obtains the permission dialog toggle status for a specified permission under a specified sub-profile. This API uses a promise to return the result.

**Since:** 26.1.0

**Required permissions:** ohos.permission.GET_SENSITIVE_PERMISSIONS

**Model restriction:** This API can be used only in the stage model.

<!--Device-AtManager-getPermissionRequestToggleStatus(
      permissionName: Permissions,
      subProfileId: int): Promise<PermissionRequestToggleStatus>--><!--Device-AtManager-getPermissionRequestToggleStatus(
      permissionName: Permissions,
      subProfileId: int): Promise<PermissionRequestToggleStatus>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionName | [Permissions](arkts-ability-permissions-t.md) | Yes | Name of the permission whose pop-up switch status is to be queried.Passing an invalid value returns error code 12100001.<br>Value constraint: The permission name length cannot exceed 256 characters. |
| subProfileId | number | Yes | ID of the sub-profile. It can be obtained from [OsAccountSubProfile.id](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-osaccountsubprofile-i-sys.md#id).<br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PermissionRequestToggleStatus> | Promise used to return the toggle status of the dialog box for the specified permission. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission specified below. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The permissionName exceeds 256 characters, the specified permission is not a user_grant permission, or the specified subProfileId does not exist for the current user. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. A database error occurs. |

## getPermissionsStatus

```TypeScript
getPermissionsStatus(tokenID: number, permissionList: Array<Permissions>): Promise<Array<PermissionStatus>>
```

Obtains the status of the specified permissions. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.GET_SENSITIVE_PERMISSIONS

<!--Device-AtManager-getPermissionsStatus(tokenID: int, permissionList: Array<Permissions>): Promise<Array<PermissionStatus>>--><!--Device-AtManager-getPermissionsStatus(tokenID: int, permissionList: Array<Permissions>): Promise<Array<PermissionStatus>>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Identity identifier of the target application. It can be obtained through the [accessTokenId](arkts-ability-applicationinfo-i.md#accesstokenid) field in ApplicationInfo of BundleInfo. Passing an invalid value returns error code 12100001.<br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.<br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync-1). |
| permissionList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<Permissions> | Yes | List of permission names for which the permission status is to be obtained. Passing an invalid value returns error code 12100001.<br>The maximum length is 1024 and cannot be empty. Value constraint: The permission name length cannot exceed 256 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<PermissionStatus>> | Promise used to return the list of queried permission statuses. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0 or the permissionList is empty or exceeds the size limit. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |

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

## getVersion

```TypeScript
getVersion(): Promise<number>
```

Obtains the data version number of the current permission management. This API uses a promise to return the result.

**Since:** 9

<!--Device-AtManager-getVersion(): Promise<int>--><!--Device-AtManager-getVersion(): Promise<int>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Promise used to return the version number queried. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |

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
grantPermission(tokenID: number, permissionName: Permissions, permissionFlags: number): Promise<void>
```

Grants an app permission. After the call is successful, the specified app obtains the permission and can access the corresponding protected resources. Unlike [grantUserGrantedPermission](arkts-ability-abilityaccessctrl-atmanager-i-sys.md#grantusergrantedpermission-1),which only supports permissions of the user_grant type, this API supports granting permissions of both the user_grant and manual_settings types. This API uses a promise to return the result.

**Since:** 21

**Required permissions:** ohos.permission.GRANT_SENSITIVE_PERMISSIONS

<!--Device-AtManager-grantPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>--><!--Device-AtManager-grantPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Identity identifier of the target application. It can be obtained through the [accessTokenId](arkts-ability-applicationinfo-i.md#accesstokenid) field in ApplicationInfo of BundleInfo. Passing an invalid value returns error code 12100001.<br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.<br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync-1). |
| permissionName | [Permissions](arkts-ability-permissions-t.md) | Yes | Name of the permission to grant. The permission name cannot exceed 256characters. If the limit is exceeded, error code 12100001 is returned. |
| permissionFlags | number | Yes | Authorization options.<br>The value should be an integer.<br>- 1: If the user denies the permission this time, the permission dialog box can still be displayed next time to request user authorization.<br>- 2: If the user denies the permission this time, the permission dialog box will not be displayed again.The user needs to grant the permission in the permission management page of system settings.<br>- 64: If the user selects to allow only this time, the permission is granted only for this time. The authorization is revoked when the app switches to the background or exits. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.GRANT_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters or is not declared in the module.json file, or the flags value is invalid. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | The application specified by the tokenID is not allowed to be granted with the specified permission. Either the application is a sandbox or the tokenID is from a remote device. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |
| [12100014](../errorcode-access-token.md#12100014-unexpected-permission) | Unexpected permission. The specified permission is not a user_grant or manual_settings permission. |

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
grantUserGrantedPermission(tokenID: number, permissionName: Permissions, permissionFlags: number): Promise<void>
```

Grants a user_grant permission to an app. After the call is successful, the app obtains the user_grant permission and can access the corresponding protected resources. This API uses a promise to return the result.

This API only supports granting permissions of the user_grant type. If you need to grant permissions of the user_grant or manual_settings type, you are advised to use [grantPermission](arkts-ability-abilityaccessctrl-atmanager-i-sys.md#grantpermission-1).

**Since:** 8

**Required permissions:** ohos.permission.GRANT_SENSITIVE_PERMISSIONS

<!--Device-AtManager-grantUserGrantedPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>--><!--Device-AtManager-grantUserGrantedPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Identity identifier of the target application. It can be obtained through the [accessTokenId](arkts-ability-applicationinfo-i.md#accesstokenid) field in ApplicationInfo of BundleInfo. Passing an invalid value returns error code 12100001.<br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.<br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync-1). |
| permissionName | [Permissions](arkts-ability-permissions-t.md) | Yes | Name of the permission to grant. Passing an invalid value returns error code 12100001.<br>Value constraint: The permission name cannot exceed 256 characters. |
| permissionFlags | number | Yes | Authorization options.<br>The value should be an integer.<br>- 1: If the user denies the permission this time, the permission dialog box can still be displayed next time to request user authorization.<br>- 2: If the user denies the permission this time, the permission dialog box will not be displayed again.The user needs to grant the permission in the permission management page of system settings.<br>- 64: If the user selects to allow only this time, the permission is granted only for this session. The authorization is revoked when the app switches to the background or exits. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.GRANT_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, the permissionName exceeds 256characters or is not declared in the module.json file, or the flags value is invalid. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not a user_grant permission. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | The application specified by the tokenID is not allowed to be granted with the specified permission.Either the application is a sandbox or the tokenID is from a remote device. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |

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
        tokenID: number,
        permissionName: Permissions,
        permissionFlags: number,
        callback: AsyncCallback<void>
    ): void
```

Grants a user_grant permission to an app. This API uses an asynchronous callback to return the result. After the call is successful, the app obtains the user_grant permission and can access the corresponding protected resources.

**Since:** 8

**Required permissions:** ohos.permission.GRANT_SENSITIVE_PERMISSIONS

<!--Device-AtManager-grantUserGrantedPermission(
        tokenID: int,
        permissionName: Permissions,
        permissionFlags: int,
        callback: AsyncCallback<void>
    ): void--><!--Device-AtManager-grantUserGrantedPermission(
        tokenID: int,
        permissionName: Permissions,
        permissionFlags: int,
        callback: AsyncCallback<void>
    ): void-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Identity identifier of the target application. It can be obtained through the [accessTokenId](arkts-ability-applicationinfo-i.md#accesstokenid) field in ApplicationInfo of BundleInfo. Passing an invalid value returns error code 12100001.<br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.<br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync-1). |
| permissionName | [Permissions](arkts-ability-permissions-t.md) | Yes | Name of the permission to grant. The permission name cannot exceed 256characters. Passing an invalid value returns error code 12100001.<br>Value constraint: The permission name length cannot exceed 256 characters. |
| permissionFlags | number | Yes | Authorization options.<br>The value should be an integer.<br>- 1: If the user denies the permission this time, the permission dialog box can still be displayed next time to request user authorization.<br>- 2: If the user denies the permission this time, the permission dialog box will not be displayed again.The user needs to grant the permission in system settings.<br>- 64: If the user selects to allow only this time, the permission is granted only for this session. The authorization is revoked when the app switches to the background or exits. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the permission grant is successful, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.GRANT_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, the permissionName exceeds 256characters or is not declared in the module.json file,or the flags value is invalid. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not a user_grant permission. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | The application specified by the tokenID is not allowed to be granted with the specified permission. Either the application is a sandbox or the tokenID is from a remote device. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |

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
      tokenIDList: Array<number>,
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void
```

Unsubscribes from changes in the state of the specified permissions for the token ID list and permission list.This API uses an asynchronous callback to return the result.

When unsubscribing, if no callback is passed in, all listening callbacks that completely match the tokenIDList and permissionList will be unsubscribed in batches.

This API is usually used together with [on](abilityAccessCtrl.AtManager.on)to cancel the listening relationship created by on.

**Since:** 9

**Required permissions:** ohos.permission.GET_SENSITIVE_PERMISSIONS

<!--Device-AtManager-off(
      type: 'permissionStateChange',
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void--><!--Device-AtManager-off(
      type: 'permissionStateChange',
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'permissionStateChange' | Yes | Event type. The value is **'permissionStateChange'**, which indicates the permission state changes. |
| tokenIDList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | List of token IDs to unsubscribe from. If this parameter is left empty, it indicates unsubscribing from permission state changes of all apps. This parameter must be consistent with the input of [on](abilityAccessCtrl.AtManager.on). The app identity can be obtained through the [accessTokenId](arkts-ability-applicationinfo-i.md#accesstokenid) field in ApplicationInfo of BundleInfo. Passing an invalid value returns error code 12100001.<br>The maximum length is 1024. Value constraint: Each token ID in the list must be an integer greater than 0.<br>For BundleInfo acquisition, please refer to:[bundleManager.getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync-1). |
| permissionList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<Permissions> | Yes | List of permission names to unsubscribe from. If this parameter is left empty, it indicates unsubscribing from all permission state changes. This parameter must be consistent with the input of [on](abilityAccessCtrl.AtManager.on). Passing an invalid value returns error code 12100001.<br>The maximum length is 1024. Value constraint: Each permission name in the list must be a valid permission name, and its length cannot exceed 256 characters. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<PermissionStateChangeInfo> | No | Callback used to return the object for unsubscribing from state change events of the specified tokenID and permission name. This callback must be consistent with the callback registered in [on](abilityAccessCtrl.AtManager.on).If this parameter is not passed, all listener callbacks that exactly match tokenIDList and permissionList will be canceled. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenIDList or permissionList is not in the listening list. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |

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

## on('permissionStateChange')

```TypeScript
on(
      type: 'permissionStateChange',
      tokenIDList: Array<number>,
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void
```

Subscribes to changes in the state of specified permissions for the given applications. This API uses an asynchronous callback to return the result.

Multiple callbacks can be registered for the specified **tokenIDList** and **permissionList**.

If a new subscription overlaps with an existing subscription in terms of the tokenID list and permission list,the same callback cannot be used for subscription.

This API is usually used together with [off](abilityAccessCtrl.AtManager.off).When listening is no longer needed, off should be called to unsubscribe.

**Since:** 9

**Required permissions:** ohos.permission.GET_SENSITIVE_PERMISSIONS

<!--Device-AtManager-on(
      type: 'permissionStateChange',
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void--><!--Device-AtManager-on(
      type: 'permissionStateChange',
      tokenIDList: Array<int>,
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'permissionStateChange' | Yes | Event type. The value is **'permissionStateChange'**, which indicates the permission state changes. |
| tokenIDList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | List of token IDs to subscribe to. If left empty, it subscribes to permission status changes of all apps. The app identity can be obtained through the [accessTokenId](arkts-ability-applicationinfo-i.md#accesstokenid) field in ApplicationInfo of BundleInfo. Passing an invalid value returns error code 12100001.<br>The maximum length is 1024. Value constraint: Each token ID in the list must be an integer greater than 0.<br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync-1). |
| permissionList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<Permissions> | Yes | List of permission names to subscribe to. Passing an invalid value returns error code 12100001.<br>The maximum length is 1024 and cannot be empty. Value constraint: Each permission name in the list must be a valid permission name, and its length cannot exceed 256 characters. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<PermissionStateChangeInfo> | Yes | Callback used to return the result. Callback for subscribing to the status change events of the specified tokenID and permission name. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. Possible causes: 1. The tokenIDList or permissionList exceeds the size limit; 2. The tokenIDs or permissionNames in the list are all invalid. |
| [12100005](../errorcode-access-token.md#12100005-listener-overflows) | The registration time has exceeded the limit. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |
| [12100008](../errorcode-access-token.md#12100008-out-of-memory) | Out of memory. |

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

## queryStatusByPermission

```TypeScript
queryStatusByPermission(
      permissionList: Array<Permissions>): Promise<Array<PermissionStatusInfo>>
```

Queries all apps that have requested the specified permissions and their permission statuses based on the permission list. This API uses a promise to return the result. When the size of the queried data result exceeds50000 entries, the API directly returns error code 12100015.

**Since:** 26.0.0

**Required permissions:** ohos.permission.GET_SENSITIVE_PERMISSIONS

**Model restriction:** This API can be used only in the stage model.

<!--Device-AtManager-queryStatusByPermission(
      permissionList: Array<Permissions>): Promise<Array<PermissionStatusInfo>>--><!--Device-AtManager-queryStatusByPermission(
      permissionList: Array<Permissions>): Promise<Array<PermissionStatusInfo>>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<Permissions> | Yes | List of permission names to query. Passing an invalid value returns error code 12100001.<br>The maximum length is 1024 and cannot be empty. Value constraint: The permission name length cannot exceed 256 characters. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<PermissionStatusInfo>> | Promise used to return the list of queried permission status information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. Interface caller is not a system application. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The permissionList is empty or exceeds the size limit. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |
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
queryStatusByTokenID(tokenIDList: Array<number>): Promise<Array<PermissionStatusInfo>>
```

Queries all permission statuses of an app based on its tokenID list. This API uses a promise to return the result. When the size of the queried data result exceeds 50000 entries, the API directly returns error code 12100015.

**Since:** 26.0.0

**Required permissions:** ohos.permission.GET_SENSITIVE_PERMISSIONS

**Model restriction:** This API can be used only in the stage model.

<!--Device-AtManager-queryStatusByTokenID(tokenIDList: Array<int>): Promise<Array<PermissionStatusInfo>>--><!--Device-AtManager-queryStatusByTokenID(tokenIDList: Array<int>): Promise<Array<PermissionStatusInfo>>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenIDList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<number> | Yes | List of app token IDs to query. The app identity can be obtained through the [accessTokenId](arkts-ability-applicationinfo-i.md#accesstokenid) field in ApplicationInfo of BundleInfo. Passing an invalid value returns error code 12100001.<br>The maximum length is 1024 and cannot be empty. Value constraint: Each token ID in the list must be an integer greater than 0.<br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync-1). |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<PermissionStatusInfo>> | Promise used to return the list of queried permission status information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission "ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. Interface caller is not a system application. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenIDList is empty or exceeds the size limit. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |
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

## requestPermissionOnApplicationSetting

```TypeScript
requestPermissionOnApplicationSetting(tokenID: number): Promise<void>
```

Starts the permission settings page for an application. This API uses a promise to return the result.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-AtManager-requestPermissionOnApplicationSetting(tokenID: int): Promise<void>--><!--Device-AtManager-requestPermissionOnApplicationSetting(tokenID: int): Promise<void>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Identity identifier of the target application. It can be obtained through the [accessTokenId](arkts-ability-applicationinfo-i.md#accesstokenid) field in ApplicationInfo of BundleInfo. Passing an invalid value returns error code 12100001.<br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.<br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync-1). |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |

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

## requestPermissionsFromUserWithWindowId

```TypeScript
requestPermissionsFromUserWithWindowId(
        context: Context,
        windowId: number,
        permissionList: Array<Permissions>) : Promise<PermissionRequestResult>
```

Pops up a dialog based on the window ID to request user authorization. After the call is successful, the permission request result object is returned. Developers can continue the business process after window-level authorization based on the permission request result. This API uses a promise to return the result.

This is applicable to scenarios where a system app needs to explicitly attach the permission request dialog to a specified window.

If the user denies authorization, the dialog cannot be pulled up again. Permission can be re-obtained in the following ways: 1. Manually authorize in the system settings. 2. Call [requestPermissionOnSetting](arkts-ability-abilityaccessctrl-atmanager-i.md#requestpermissiononsetting-1) to pull up the permission settings dialog to guide the user to authorize.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-AtManager-requestPermissionsFromUserWithWindowId(
        context: Context,
        windowId: int,
        permissionList: Array<Permissions>) : Promise<PermissionRequestResult>--><!--Device-AtManager-requestPermissionsFromUserWithWindowId(
        context: Context,
        windowId: int,
        permissionList: Array<Permissions>) : Promise<PermissionRequestResult>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-mind-spore-lite-kit/arkts-apis/arkts-mindsporelite-mindsporelite-context-i.md) | Yes | Context of the UIAbility or UIExtensionAbility requesting the permission. If the context of another app, an invalid page, or a non-stage model is passed in, the API may report an error or fail to display the dialog box. |
| windowId | number | Yes | ID of the app window. It can be obtained through [window.findWindow](../../apis-arkui/arkts-apis/arkts-arkui-window-findwindow-f.md#findwindow-1)(window name).[getWindowProperties()](../../apis-arkui/arkts-apis/arkts-arkui-window-window-i.md#getwindowproperties-1).id. This parameter must correspond to the current valid window. If a destroyed, invisible, or invalid window ID is passed in,12100001 will be returned.<br>The value should be an integer. |
| permissionList | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<Permissions> | Yes | List of permission names. It is recommended that you pass in only the sensitive permissions that are actually required in the current window scenario.<br>The minimum length is 1. Value constraint: The length of a permission name in array cannot exceed 256characters. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PermissionRequestResult> | Promise used to return the result of this permission request,including the permission array, grant result, whether to show a dialog box, and failure reason. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. windowId is invalid. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. An error occurs when creating the popup window or obtaining the user operation result. |

**Example**

For details about the process and example of applying for user authorization, see [Requesting User Authorization](../../security/AccessToken/request-user-authorization.md).

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
      tokenID: number,
      permissionName: Permissions,
      permissionFlags: number,
      killProcess?: boolean): Promise<void>
```

Revokes an app permission. After the call is successful, the app loses the permission and cannot access the corresponding protected resources. Whether to terminate the app process is determined by the value of the killProcess parameter. This API uses a promise to return the result.

When the killProcess parameter is true and the permission status changes from "authorized" to "unauthorized",the app process will be terminated.

**Since:** 21

**Required permissions:** ohos.permission.REVOKE_SENSITIVE_PERMISSIONS

<!--Device-AtManager-revokePermission(
      tokenID: int,
      permissionName: Permissions,
      permissionFlags: int,
      killProcess?: boolean): Promise<void>--><!--Device-AtManager-revokePermission(
      tokenID: int,
      permissionName: Permissions,
      permissionFlags: int,
      killProcess?: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Identity identifier of the target application. It can be obtained through the [accessTokenId](arkts-ability-applicationinfo-i.md#accesstokenid) field in ApplicationInfo of BundleInfo. Passing an invalid value returns error code 12100001.<br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.<br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync-1). |
| permissionName | [Permissions](arkts-ability-permissions-t.md) | Yes | Name of the permission to be revoked. Passing an invalid value returns error code 12100001.<br>Value constraint: The permission name length cannot exceed 256 characters. |
| permissionFlags | number | Yes | Authorization options.<br>The value should be an integer.<br>- 1: If the user denies the permission this time, the permission dialog box can still be displayed next time to request user authorization.<br>- 2: If the user denies the permission this time, the permission dialog box will not be displayed again.The user needs to grant the permission in the permission management of system settings.<br>- 64: If the user selects to allow only this time, the permission is granted only for this session. The authorization is revoked when the app switches to the background or exits. |
| killProcess | boolean | No | Whether to terminate the app process.<br>- **true**: Terminate the app process.<br>- **false**: Do not terminate the app process.<br>- Default value: **true**.<br>**Since:** 26.0.0 |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. The interface invoker does not have permission"ohos.permission.REVOKE_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not a system application. The interface invoker is not a system application. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The token ID is 0, the permission name exceeds 256 characters or is not declared in the module.json file,or the value of flags is invalid. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | The specified permission is not allowed to be revoked from the application specified by the tokenID. Either the application is a sandbox or the tokenID is from a remote device. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |
| [12100014](../errorcode-access-token.md#12100014-unexpected-permission) | Unexpected permission. The specified permission is not a user_grant or manual_settings permission. |

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
revokeUserGrantedPermission(tokenID: number, permissionName: Permissions, permissionFlags: number): Promise<void>
```

Revokes a user_grant permission from an app. After the call is successful, the app loses the user_grant permission and cannot access the corresponding protected resources.This API uses a promise to return the result.

This API only supports revoking permissions of the user_grant type and does not support controlling whether to terminate the app process. If you need to revoke permissions of the user_grant or manual_settings type, or need to control whether to terminate the app process after revoking the permission, you are advised to use [revokePermission](arkts-ability-abilityaccessctrl-atmanager-i-sys.md#revokepermission-1).

When the permission status changes from "authorized" to "unauthorized", the app process will be terminated.

**Since:** 8

**Required permissions:** ohos.permission.REVOKE_SENSITIVE_PERMISSIONS

<!--Device-AtManager-revokeUserGrantedPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>--><!--Device-AtManager-revokeUserGrantedPermission(tokenID: int, permissionName: Permissions, permissionFlags: int): Promise<void>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Identity identifier of the target application. It can be obtained through the [accessTokenId](arkts-ability-applicationinfo-i.md#accesstokenid) field in ApplicationInfo of BundleInfo. Passing an invalid value returns error code 12100001.<br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.<br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync-1). |
| permissionName | [Permissions](arkts-ability-permissions-t.md) | Yes | Name of the permission to be revoked. Passing an invalid value returns error code 12100001.<br>Value constraint: The permission name length cannot exceed 256 characters. |
| permissionFlags | number | Yes | Authorization options.<br>The value should be an integer.<br>- 1: If the user denies the permission this time, the permission dialog box can still be displayed next time to request user authorization.<br>- 2: If the user denies the permission this time, the permission dialog box will not be displayed again.The user needs to grant the permission in the permission management page of system settings.<br>- 64: If the user selects to allow only this time, the permission is granted only for this session.The authorization is revoked when the app switches to the background or exits. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.REVOKE_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, the permissionName exceeds 256characters or is not declared in the module.json file, or the flags value is invalid. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not a user_grant permission. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | The application specified by the tokenID is not allowed to be revoked with the specified permission. Either the application is a sandbox or the tokenID is from a remote device. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |

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
        tokenID: number,
        permissionName: Permissions,
        permissionFlags: number,
        callback: AsyncCallback<void>
    ): void
```

Revokes a user_grant permission from an app. This API uses an asynchronous callback to return the result.After the call is successful, the app loses the user_grant permission and cannot access the corresponding protected resources.

**Since:** 8

**Required permissions:** ohos.permission.REVOKE_SENSITIVE_PERMISSIONS

<!--Device-AtManager-revokeUserGrantedPermission(
        tokenID: int,
        permissionName: Permissions,
        permissionFlags: int,
        callback: AsyncCallback<void>
    ): void--><!--Device-AtManager-revokeUserGrantedPermission(
        tokenID: int,
        permissionName: Permissions,
        permissionFlags: int,
        callback: AsyncCallback<void>
    ): void-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Identity identifier of the target application. It can be obtained through the [accessTokenId](arkts-ability-applicationinfo-i.md#accesstokenid) field in ApplicationInfo of BundleInfo. Passing an invalid value returns error code 12100001.<br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0.<br>For BundleInfo acquisition, please refer to: [bundleManager.getBundleInfoSync](arkts-ability-bundlemanager-getbundleinfosync-f.md#getbundleinfosync-1). |
| permissionName | [Permissions](arkts-ability-permissions-t.md) | Yes | Name of the permission to be revoked. Passing an invalid value returns error code 12100001.<br>Value constraint: The permission name length cannot exceed 256 characters. |
| permissionFlags | number | Yes | Authorization options.<br>The value should be an integer.<br>- 1: If the user denies the permission this time, the permission dialog box can still be displayed the next time to request user authorization.<br>- 2: If the user denies the permission this time, the permission dialog box will not be displayed again.The user needs to grant the permission in the permission management page of system settings.<br>- 64: If the user selects to allow only this time, the permission is granted only for this session.The permission is revoked after the app switches to the background or exits. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the permission revocation is successful, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.REVOKE_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, the permissionName exceeds 256characters or is not declared in the module.json file, or the flags value is invalid. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not a user_grant permission. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | The application specified by the tokenID is not allowed to be revoked with the specified permission. Either the application is a sandbox or the tokenID is from a remote device. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |

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

Sets the dialog toggle status for a specified permission of the current user. After the call is successful, the dialog toggle status of the permission will be set to the specified value. When the status is CLOSED, no permission dialog will pop up when the app requests the permission. When the status is OPEN, the permission dialog will pop up normally when the app requests the permission. This API uses a promise to return the result.

**Since:** 12

**Required permissions:** ohos.permission.DISABLE_PERMISSION_DIALOG

<!--Device-AtManager-setPermissionRequestToggleStatus(permissionName: Permissions, status: PermissionRequestToggleStatus): Promise<void>--><!--Device-AtManager-setPermissionRequestToggleStatus(permissionName: Permissions, status: PermissionRequestToggleStatus): Promise<void>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionName | [Permissions](arkts-ability-permissions-t.md) | Yes | Name of the permission for which the dialog box switch status is to be set. Passing an invalid value returns error code 12100001.<br>Value constraint: The permission name length cannot exceed 256 characters. |
| status | [PermissionRequestToggleStatus](arkts-ability-abilityaccessctrl-permissionrequesttogglestatus-e-sys.md) | Yes | Toggle state to set. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission specified below. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The permissionName exceeds 256 characters, the specified permission is not a user_grant permission, or the status value is invalid. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | Operation not allowed. The toggle status of the specified permission has already been set by [setPermissionRequestToggleStatus](arkts-ability-abilityaccessctrl-atmanager-i-sys.md#setpermissionrequesttogglestatus-2).<br>**Applicable version:** 26.1.0 and later |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. A database error occurs. |

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

## setPermissionRequestToggleStatus

```TypeScript
setPermissionRequestToggleStatus(
      permissionName: Permissions,
      status: PermissionRequestToggleStatus,
      subProfileId: number): Promise<void>
```

Sets the dialog toggle status for a specified permission under a specified sub-profile. After the call is successful, the dialog toggle status of the permission will be set to the specified value. When the status is CLOSED, no permission dialog will pop up when the app requests the permission. When the status is OPEN, the permission dialog will pop up normally when the app requests the permission. This API uses a promise to return the result.

**Since:** 26.1.0

**Required permissions:** ohos.permission.DISABLE_PERMISSION_DIALOG

**Model restriction:** This API can be used only in the stage model.

<!--Device-AtManager-setPermissionRequestToggleStatus(
      permissionName: Permissions,
      status: PermissionRequestToggleStatus,
      subProfileId: int): Promise<void>--><!--Device-AtManager-setPermissionRequestToggleStatus(
      permissionName: Permissions,
      status: PermissionRequestToggleStatus,
      subProfileId: int): Promise<void>-End-->

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionName | [Permissions](arkts-ability-permissions-t.md) | Yes | Name of the permission for which the dialog box switch status is to be set. Passing an invalid value returns error code 12100001.<br>Value constraint: The permission name length cannot exceed 256 characters. |
| status | [PermissionRequestToggleStatus](arkts-ability-abilityaccessctrl-permissionrequesttogglestatus-e-sys.md) | Yes | Toggle state to set. |
| subProfileId | number | Yes | ID of the sub-profile. It can be obtained from [OsAccountSubProfile.id](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-osaccountsubprofile-i-sys.md#id).<br>The value should be an integer. Value constraint: This parameter must be an integer greater than 0. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission specified below. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The permissionName exceeds 256 characters, the specified permission is not a user_grant permission, the status value is invalid, or the specified subProfileId does not exist for the current user. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | Operation not allowed. The toggle status of the specified permission has already been set by [setPermissionRequestToggleStatus](arkts-ability-abilityaccessctrl-atmanager-i-sys.md#setpermissionrequesttogglestatus-2). |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | Service exception. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. A database error occurs. |

