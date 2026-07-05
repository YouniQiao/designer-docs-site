# AtManager

Provides methods for managing access_token.

**Since:** 11

**System capability:** SystemCapability.Security.AccessToken

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@ohos.abilityAccessCtrl';
```

## generateCliAuthResult

```TypeScript
generateCliAuthResult(
      hostTokenID: number,
      agentID: string,
      authInfoList: Array<CliAuthInfo>): Promise<ToolAuthResult>
```

Generates authorization result information based on CLI authorization information.

**Since:** 26.0.0

**Required permissions:** ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hostTokenID | number | Yes | Token ID of the host application that invokes the CLI command.<br>The value must be a positive integer. |
| agentID | string | Yes | Agent identifier.<br>The maximum length is 48 characters. |
| authInfoList | Array&lt;CliAuthInfo&gt; | Yes | CLI authorization information list.<br>The list cannot be empty and can contain a maximum of 99 items. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ToolAuthResult&gt; | Promise used to return the generated authorization result information. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. Interface caller is not a system application. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The hostTokenID is 0, the agentID exceeds 48characters, authInfoList is empty or contains more than 99 items, the cliName in cliInfo of an item inauthInfoList is empty or exceeds 256 characters, the subCliName in cliInfo of an item in authInfoList exceeds256 characters, a permission name in permissionNames of an item in authInfoList is empty or exceeds 256characters, or the number of permissionNames does not equal the number of authorizationResults in an item inauthInfoList. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | A permission name in permissionNames of an item in authInfoList doesnot exist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common internal error. The account is not logged in, network is notconnected or an internal error occurs when generating authorization results. |

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

Checks whether a group of CLI (command line interface) commands require permission dialogs.

**Since:** 26.0.0

**Required permissions:** ohos.permission.QUERY_TOOL_PERMISSIONS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| agentID | string | Yes | Agent identifier.<br>The maximum length is 48 characters. |
| cliInfoList | Array&lt;CliInfo&gt; | Yes | List of CLI information to query.<br>The list cannot be empty and can contain a maximum of 99 items. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PermissionDialogResult&gt; | Promise used to return the permission dialog result for the CLIcommands. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.QUERY_TOOL_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. Interface caller is not a system application. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The agentID exceeds 48 characters, cliInfoList isempty or contains more than 99 items, the cliName of an item in cliInfoList is empty or exceeds 256characters, the subCliName of an item in cliInfoList exceeds 256 characters, or the CLI command does notexist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common internal error. The account is not logged in, the network isnot connected, or an internal error occurs when querying CLI permissions or generating authorizationresults. |

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

Queries CLI permission information for the application that invokes the CLI command.

**Since:** 26.0.0

**Required permissions:** ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hostTokenID | number | Yes | Token ID of the host application that invokes the CLI command.<br>The value must be a positive integer. |
| agentID | string | Yes | Agent identifier.<br>The maximum length is 48 characters. |
| cliInfoList | Array&lt;CliInfo&gt; | Yes | List of CLI information to query.<br>The list cannot be empty and can contain a maximum of 99 items. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CliPermissionsResult&gt; | Promise used to return the CLI permission query result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.MANAGE_TOOL_RUNTIME_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. Interface caller is not a system application. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The hostTokenID is 0, the agentID exceeds 48characters, cliInfoList is empty or contains more than 99 items, the cliName of an item in cliInfoList isempty or exceeds 256 characters, the subCliName of an item in cliInfoList exceeds 256 characters, or the CLIcommand does not exist. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common internal error. An internal error occurs when querying CLIpermissions or runtime permission information. |

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

Queries specified permission flags of the given application.

**Since:** 8

**Required permissions:** ohos.permission.GET_SENSITIVE_PERMISSIONS or ohos.permission.GRANT_SENSITIVE_PERMISSIONS or ohos.permission.REVOKE_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission to be get. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Return permission flags. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission specified below. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not declared in the module.json file. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | The operation is not allowed. Either the application is a sandbox or the tokenID is from a remote device. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |

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

Get the toggle status of one permission flag.

**Since:** 12

**Required permissions:** ohos.permission.GET_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionName | Permissions | Yes | Name of the permission associated with the toggle status to be get. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PermissionRequestToggleStatus&gt; | Return the toggle status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission specified below. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The permissionName exceeds 256 characters, or the specified permission is not a user_grant permission. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |

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
getPermissionsStatus(tokenID: number, permissionList: Array<Permissions>): Promise<Array<PermissionStatus>>
```

Queries permissions status of the given application.

**Since:** 12

**Required permissions:** ohos.permission.GET_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionList | Array&lt;Permissions&gt; | Yes | Indicates the list of permissions to be queried. This parameter cannot be null or empty. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;PermissionStatus&gt;&gt; | Return permission status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission "ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0 or the permissionList is empty or exceeds the size limit. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |

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

Queries permission management version.

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Return permission version. |

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

Grants a specified permission to the given application.

**Since:** 21

**Required permissions:** ohos.permission.GRANT_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission to be granted. |
| permissionFlags | number | Yes | Flags of permission state. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.GRANT_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, the permissionNameexceeds 256 characters or is not declared in the module.json file, or the flags value is invalid. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | The application specified by the tokenID is not allowed to begranted with the specified permission. Either the application is a sandbox or the tokenID is froma remote device. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |
| [12100014](../errorcode-access-token.md#12100014-unexpected-permission) | Unexpected permission. The specified permission is not auser_grant or manual_settings permission. |

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

Grants a specified user_grant permission to the given application.

**Since:** 8

**Required permissions:** ohos.permission.GRANT_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission to be granted. |
| permissionFlags | number | Yes | Flags of permission state. This parameter can be 1 or 2 or 64. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission "ohos.permission.GRANT_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters or is not declared in the module.json file,or the flags value is invalid. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not a user_grant permission. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | The application specified by the tokenID is not allowed to be granted with the specified permission.Either the application is a sandbox or the tokenID is from a remote device. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |

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

Grants a specified user_grant permission to the given application.

**Since:** 8

**Required permissions:** ohos.permission.GRANT_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission to be granted. |
| permissionFlags | number | Yes | Flags of permission state. This parameter can be 1 or 2 or 64. |
| callback | AsyncCallback&lt;void&gt; | Yes | Asynchronous callback interface. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission "ohos.permission.GRANT_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters or is not declared in the module.json file,or the flags value is invalid. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not a user_grant permission. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | The application specified by the tokenID is not allowed to be granted with the specified permission.Either the application is a sandbox or the tokenID is from a remote device. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |

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

Unregisters a permission state callback so that the specified applications cannot be notified upon specified permissions state changes anymore.

**Since:** 9

**Required permissions:** ohos.permission.GET_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'permissionStateChange' | Yes | Event type. |
| tokenIDList | Array&lt;number&gt; | Yes | A list of permissions that specify the permissions to be listened on.It should correspond to the value registered by function of "on", whose type is "permissionStateChange". |
| permissionList | Array&lt;Permissions&gt; | Yes | A list of permissions that specify the permissions to be listened on.It should correspond to the value registered by function of "on", whose type is "permissionStateChange". |
| callback | Callback&lt;PermissionStateChangeInfo&gt; | No | Callback for the result from unregistering permissions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission "ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenIDList or permissionList is not in the listening list. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |

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

Registers a permission state callback so that the application can be notified upon specified permission state of specified applications changes.

**Since:** 9

**Required permissions:** ohos.permission.GET_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'permissionStateChange' | Yes | Event type. |
| tokenIDList | Array&lt;number&gt; | Yes | A list of permissions that specify the permissions to be listened on. The value in the list can be:<br> {@code empty} - Indicates that the application can be notified if the specified permission state of any applications changes.<br> {@code non-empty} - Indicates that the application can only be notified if the specified permission state of the specified applications change. |
| permissionList | Array&lt;Permissions&gt; | Yes | A list of permissions that specify the permissions to be listened on. The value in the list can be:<br> {@code empty} - Indicates that the application can be notified if any permission state of the specified applications changes.<br> {@code non-empty} - Indicates that the application can only be notified if the specified permission state of the specified applications changes. |
| callback | Callback&lt;PermissionStateChangeInfo&gt; | Yes | Callback for the result from registering permissions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission "ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. Possible causes: 1. The tokenIDList or permissionList exceeds the size limit;2. The tokenIDs or permissionNames in the list are all invalid. |
| [12100005](../errorcode-access-token.md#12100005-listener-overflows) | The registration time has exceeded the limit. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |
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

Queries all applications that have requested the specified permissions and their permission status.

**Since:** 26.0.0

**Required permissions:** ohos.permission.GET_SENSITIVE_PERMISSIONS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionList | Array&lt;Permissions&gt; | Yes | List of permissions to be queried. This parameter cannot benull or empty. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;PermissionStatusInfo&gt;&gt; | Returns the list of applications and theirpermission status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission"ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. Interface caller is not a system application. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The permissionList is empty or exceeds the sizelimit. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |
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

Queries the status of all permissions for the specified applications.

**Since:** 26.0.0

**Required permissions:** ohos.permission.GET_SENSITIVE_PERMISSIONS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenIDList | Array&lt;number&gt; | Yes | List of token IDs to be queried. This parameter cannot be null orempty. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;PermissionStatusInfo&gt;&gt; | Returns the list of permissionstatus for the specified applications. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not havepermission "ohos.permission.GET_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application. Interface caller is not a system application. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenIDList is emptyor exceeds the size limit. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |
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

Starts the permission manager page of an application.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |

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

Requests user permissions based on the window ID.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Context of the ability that initiates the permission request. |
| windowId | number | Yes | Window ID. |
| permissionList | Array&lt;Permissions&gt; | Yes | Array of permissions to request.<br>The value cannot be null or empty. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PermissionRequestResult&gt; | Promise used to return the results of requested permissions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. windowId is invalid. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. An error occurs when creating the popup window orobtaining the user operation result. |

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

Revokes the specified permission from the given application.

**Since:** 26.0.0

**Required permissions:** ohos.permission.REVOKE_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission to be revoked. |
| permissionFlags | number | Yes | Permission status flag. |
| killProcess | boolean | No | Whether to kill the process when the permission is revoked.If killProcess is set to true, the application process is killed after the permission is revoked.If the value is false, the process will not be killed. The default value is true. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. The interface invoker does not have permission"ohos.permission.REVOKE_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not a system application. The interface invoker is not a systemapplication. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The token ID is 0, the permission nameexceeds 256 characters or is not declared in the module.json file,or the value of flags is invalid. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | The specified permission is not allowed to be revokedfrom the application specified by the tokenID. Either the application is a sandbox or the tokenIDis from a remote device. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |
| [12100014](../errorcode-access-token.md#12100014-unexpected-permission) | Unexpected permission. The specified permission is not auser_grant or manual_settings permission. |

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

Revoke a specified user_grant permission to the given application.

**Since:** 8

**Required permissions:** ohos.permission.REVOKE_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission to be revoked. |
| permissionFlags | number | Yes | Flags of permission state. This parameter can be 1 or 2 or 64. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission "ohos.permission.REVOKE_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters or is not declared in the module.json file,or the flags value is invalid. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not a user_grant permission. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | The application specified by the tokenID is not allowed to be revoked with the specified permission.Either the application is a sandbox or the tokenID is from a remote device. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |

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

Revoke a specified user_grant permission to the given application.

**Since:** 8

**Required permissions:** ohos.permission.REVOKE_SENSITIVE_PERMISSIONS

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission to be revoked. |
| permissionFlags | number | Yes | Flags of permission state. This parameter can be 1 or 2 or 64. |
| callback | AsyncCallback&lt;void&gt; | Yes | Asynchronous callback interface. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission "ohos.permission.REVOKE_SENSITIVE_PERMISSIONS". |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, the permissionName exceeds 256 characters or is not declared in the module.json file,or the flags value is invalid. |
| [12100002](../errorcode-access-token.md#12100002-tokenid-not-exist) | The specified tokenID does not exist. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist or is not a user_grant permission. |
| [12100006](../errorcode-access-token.md#12100006-permission-granting-or-revocation-not-supported) | The application specified by the tokenID is not allowed to be revoked with the specified permission.Either the application is a sandbox or the tokenID is from a remote device. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |

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

Set the toggle status of one permission flag.

**Since:** 12

**Required permissions:** ohos.permission.DISABLE_PERMISSION_DIALOG

**System capability:** SystemCapability.Security.AccessToken

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionName | Permissions | Yes | Name of the permission associated with the toggle status to be set. |
| status | PermissionRequestToggleStatus | Yes | The toggle status to be set. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. Interface caller does not have permission specified below. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App. Interface caller is not a system app. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The permissionName exceeds 256 characters, the specified permission is not a user_grant permission,or the status value is invalid. |
| [12100003](../errorcode-access-token.md#12100003-permission-not-exist) | The specified permission does not exist. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |
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

