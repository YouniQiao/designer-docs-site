# setAppClipboardPolicy

## Modules to Import

```TypeScript
import { securityManager } from '@kit.MDMKit';
```

<a id="setappclipboardpolicy"></a>
## setAppClipboardPolicy

```TypeScript
function setAppClipboardPolicy(admin: Want, tokenId: number, policy: ClipboardPolicy): void
```

Sets the device clipboard policy.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the stage model.

<!--Device-securityManager-function setAppClipboardPolicy(admin: Want, tokenId: number, policy: ClipboardPolicy): void--><!--Device-securityManager-function setAppClipboardPolicy(admin: Want, tokenId: number, policy: ClipboardPolicy): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| tokenId | number | Yes | Application token ID, which can be obtained using [bundleManager.getApplicationInfo](../../apis-ability-kit/arkts-apis/arkts-ability-applicationinfo-i.md). |
| policy | [ClipboardPolicy](arkts-mdm-securitymanager-clipboardpolicy-e.md) | Yes | Clipboard policy to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

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
    securityManager.setAppClipboardPolicy(wantTemp, tokenId, securityManager.ClipboardPolicy.IN_APP);
    console.info(`Succeeded in setting clipboard policy.`);
} catch(err) {
    console.error(`Failed to set clipboard policy. Code: ${err.code}, message: ${err.message}`);
}

```


<a id="setappclipboardpolicy-1"></a>
## setAppClipboardPolicy

```TypeScript
function setAppClipboardPolicy(admin: Want, bundleName: string, accountId: number, policy: ClipboardPolicy): void
```

Sets the device clipboard policy of a specified application for a specified user.

**Since:** 18

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the stage model.

<!--Device-securityManager-function setAppClipboardPolicy(admin: Want, bundleName: string, accountId: number, policy: ClipboardPolicy): void--><!--Device-securityManager-function setAppClipboardPolicy(admin: Want, bundleName: string, accountId: number, policy: ClipboardPolicy): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| bundleName | string | Yes | Bundle name of the application for which the device clipboard policy is set. |
| accountId | number | Yes | Account ID, which must be greater than or equal to 0. You can call [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid-1) of **@ohos.account.osAccount** to obtain the account ID. |
| policy | [ClipboardPolicy](arkts-mdm-securitymanager-clipboardpolicy-e.md) | Yes | Clipboard policy to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |

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
    securityManager.setAppClipboardPolicy(wantTemp, bundleName, accountId, securityManager.ClipboardPolicy.IN_APP);
    console.info(`Succeeded in setting clipboard policy.`);
} catch(err) {
    console.error(`Failed to set clipboard policy. Code: ${err.code}, message: ${err.message}`);
}

```

