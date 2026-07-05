# AtManager

Provides methods for managing access_token.

**Since:** 11

**System capability:** SystemCapability.Security.AccessToken

## Modules to Import

```TypeScript
import { Context, Permissions, PermissionRequestResult } from '@ohos.abilityAccessCtrl';
```

## checkAccessToken

```TypeScript
checkAccessToken(tokenID: number, permissionName: Permissions): Promise<GrantStatus>
```

Checks whether a specified application has been granted the given permission. On the cross-platform, this function can be used to check the permission grant status for the current application only.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission to be verified. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;GrantStatus&gt; | Returns permission verify result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters. |

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
checkAccessTokenSync(tokenID: number, permissionName: Permissions): GrantStatus
```

Checks whether a specified application has been granted the given permission. On the cross-platform, this function can be used to check the permission grant status for the current application only.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission to be verified. |

**Return value:**

| Type | Description |
| --- | --- |
| GrantStatus | Returns permission verify result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters. |

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

## getSelfPermissionStatus

```TypeScript
getSelfPermissionStatus(permissionName: Permissions): PermissionStatus
```

Queries permission status of the application synchronously.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| permissionName | Permissions | Yes | Indicates the permission to be queried. This parameter cannot be null or empty. |

**Return value:**

| Type | Description |
| --- | --- |
| PermissionStatus | Return permission status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The permissionName is empty or exceeds 256 characters. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |

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

## off('selfPermissionStateChange')

```TypeScript
off(
      type: 'selfPermissionStateChange',
      permissionList: Array<Permissions>,
      callback?: Callback<PermissionStateChangeInfo>
    ): void
```

Unsubscribes from the permission changes of this application.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'selfPermissionStateChange' | Yes | Event type. |
| permissionList | Array&lt;Permissions&gt; | Yes | A list of permissions that specify the permissions to be |
| callback | Callback&lt;PermissionStateChangeInfo&gt; | No | Callback for the result from unregisteringpermissions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are leftunspecified; 2.Incorrect parameter types. |
| [12100004](../errorcode-access-token.md#12100004-listener-apis-not-used-in-pairs) | The API is not used in pair with "on". |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |

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

## on('selfPermissionStateChange')

```TypeScript
on(
      type: 'selfPermissionStateChange',
      permissionList: Array<Permissions>,
      callback: Callback<PermissionStateChangeInfo>
    ): void
```

Subscribes to the permission changes of this application.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'selfPermissionStateChange' | Yes | Event type. |
| permissionList | Array&lt;Permissions&gt; | Yes | A list of permissions that specify the permissions to belistened on. The value in the list can be:<br> {@code empty} - Indicates that the application can be notified if any permission state changes.<br> {@code non-empty} - Indicates that the application can only be notified if the specified permissionstate changes. |
| callback | Callback&lt;PermissionStateChangeInfo&gt; | Yes | Callback for the result from registeringpermissions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are leftunspecified; 2.Incorrect parameter types. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. Possible causes: 1. The permissionList exceedsthe size limit; 2. The permissionNames in the list are all invalid. |
| [12100004](../errorcode-access-token.md#12100004-listener-apis-not-used-in-pairs) | The API is used repeatedly with the same input. |
| [12100005](../errorcode-access-token.md#12100005-listener-overflows) | The registration time has exceeded the limit. |
| [12100007](../errorcode-access-token.md#12100007-system-service-not-working-properly) | The service is abnormal. |

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

## openPermissionOnSetting

```TypeScript
openPermissionOnSetting(context: Context, permission: Permissions): Promise<SelectedResult>
```

Prompts users to grant the required permissions on the Settings screen.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | The context that initiates the permission request. |
| permission | Permissions | Yes | Indicates permission to open on setting. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SelectedResult&gt; | Returns result of user selection. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. Possible causes: 1. The context is invalidbecause it does not belong to the application itself; 2. The permission is invalid or notdeclared in the module.json file. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. An error occurs when creating the pop-up windowor obtaining user operation result. |
| [12100014](../errorcode-access-token.md#12100014-unexpected-permission) | Unexpected permission. The permission is not a manual_settingspermission. |

**Example**

For details about how to obtain the context in the example, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

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

## requestGlobalSwitch

```TypeScript
requestGlobalSwitch(context: Context, type: SwitchType): Promise<boolean>
```

Requests certain global switch status on setting from the user.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | The context that initiates the permission request.<br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext. |
| type | SwitchType | Yes | Indicates the type of global switch to be requested. This parameter cannot benull or empty. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Returns the status of the specified global switch. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. Possible causes: 1. The context is invalid becauseit does not belong to the application itself; 2. The type of global switch is not support. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. An error occurs when creating the pop-up windowor obtaining user operation result. |
| [12100013](../errorcode-access-token.md#12100013-global-switch-enabled) | The specific global switch is already open. |

## requestPermissionOnSetting

```TypeScript
requestPermissionOnSetting(context: Context, permissionList: Array<Permissions>): Promise<Array<GrantStatus>>
```

Requests certain permissions on setting from the user.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | The context that initiates the permission request.<br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext. |
| permissionList | Array&lt;Permissions&gt; | Yes | Indicates the list of permission to be requested. Thisparameter cannot be null or empty. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;GrantStatus&gt;&gt; | Returns the list of status of the specified permission. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. Possible causes: 1. The context is invalidbecause it does not belong to the application itself; 2. The permission list contains the permission that isnot declared in the module.json file; 3. The permission list is invalid because the permissions in itdo not belong to the same permission group; 4. The permission list contains one or more system_grantpermissions. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. An error occurs when creating the pop-up windowor obtaining user operation result. |
| [12100011](../errorcode-access-token.md#12100011-all-requested-permissions-granted) | All permissions in the permission list have been granted. |
| [12100012](../errorcode-access-token.md#12100012-not-all-permissions-are-rejected-by-the-user) | The permission list contains the permission that has not beenrevoked by the user. |
| [12100014](../errorcode-access-token.md#12100014-unexpected-permission) | Unexpected permission. You cannot request this type of permissionfrom users via a pop-up window. |

## requestPermissionsFromUser

```TypeScript
requestPermissionsFromUser(
      context: Context,
      permissionList: Array<Permissions>,
      requestCallback: AsyncCallback<PermissionRequestResult>
    ): void
```

Requests certain permissions from the user.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | The context that initiates the permission request.<br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext. |
| permissionList | Array&lt;Permissions&gt; | Yes | Indicates the list of permissions to be requested.This parameter cannot be null or empty. |
| requestCallback | AsyncCallback&lt;PermissionRequestResult&gt; | Yes | Callback for the result from |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are leftunspecified; 2.Incorrect parameter types. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | (Deprecated in 12) Invalid parameter. The context is invalid when itdoes not belong to the application itself. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. An error occurs when creating the pop-up windowor obtaining user operation results. |

**Example**

For details about the process and example of applying for user authorization, see [Requesting User Authorization](../../security/AccessToken/request-user-authorization.md).

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
requestPermissionsFromUser(context: Context, permissionList: Array<Permissions>): Promise<PermissionRequestResult>
```

Requests certain permissions from the user.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | The context that initiates the permission request.<br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext. |
| permissionList | Array&lt;Permissions&gt; | Yes | Indicates the list of permissions to be requested.This parameter cannot be null or empty. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PermissionRequestResult&gt; | Returns result of requesting permissions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are leftunspecified; 2.Incorrect parameter types. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | (Deprecated in 12) Invalid parameter. The context is invalid when itdoes not belong to the application itself. |
| [12100009](../errorcode-access-token.md#12100009-internal-service-error) | Common inner error. An error occurs when creating the pop-up windowor obtaining user operation results. |

**Example**

For details about the process and example of applying for user authorization, see [Requesting User Authorization](../../security/AccessToken/request-user-authorization.md).

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

## verifyAccessToken

```TypeScript
verifyAccessToken(tokenID: number, permissionName: Permissions): Promise<GrantStatus>
```

Checks whether a specified application has been granted the given permission.

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission to be verified. The Permissions type supports only valid permission names. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;GrantStatus&gt; | Returns permission verify result. |

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

Checks whether a specified application has been granted the given permission.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** checkAccessToken

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | string | Yes | Name of the permission to be verified. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;GrantStatus&gt; | Returns permission verify result. |

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
verifyAccessTokenSync(tokenID: number, permissionName: Permissions): GrantStatus
```

Checks whether a specified application has been granted the given permission synchronously.

**Since:** 9

**System capability:** SystemCapability.Security.AccessToken

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenID | number | Yes | Token ID of the application. |
| permissionName | Permissions | Yes | Name of the permission to be verified. |

**Return value:**

| Type | Description |
| --- | --- |
| GrantStatus | Returns permission verify result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [12100001](../errorcode-access-token.md#12100001-invalid-parameters) | Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters. |

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

