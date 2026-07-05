# getAppClipboardPolicy

## getAppClipboardPolicy

```TypeScript
function getAppClipboardPolicy(admin: Want, tokenId?: number): string
```

获取设备剪贴板策略。

**Since:** 12

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| tokenId | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回JSON字符串形式的设备剪贴板策略。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { securityManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace with actual values.
let tokenId: number = 586874394;
try {
    let result: string = securityManager.getAppClipboardPolicy(wantTemp, tokenId);
    console.info(`Succeeded in getting password policy, result : ${result}`);
} catch(err) {
    console.error(`Failed to set clipboard policy. Code: ${err.code}, message: ${err.message}`);
}

```

## getAppClipboardPolicy

```TypeScript
function getAppClipboardPolicy(admin: Want, bundleName: string, accountId: number): string
```

获取指定用户下指定应用的设备剪贴板策略。

**Since:** 18

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| bundleName | string | Yes | 被设置剪贴板策略的应用包名。 |
| accountId | number | Yes | 用户ID，指定具体用户，取值范围：大于等于0。accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取。@ohos.account.osAccount to obtain the account ID. |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回JSON字符串形式的设备剪贴板策略。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |

**Example**

```TypeScript
import { securityManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace with actual values.
let bundleName: string = 'com.example.myapplication';
let accountId: number = 100;
try {
    let result: string = securityManager.getAppClipboardPolicy(wantTemp, bundleName, accountId);
    console.info(`Succeeded in getting password policy, result : ${result}`);
} catch(err) {
    console.error(`Failed to set clipboard policy. Code: ${err.code}, message: ${err.message}`);
}

```

