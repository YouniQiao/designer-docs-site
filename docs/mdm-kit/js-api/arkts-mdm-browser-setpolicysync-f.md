# setPolicySync

## Modules to Import

```TypeScript
import { browser } from '@kit.MDMKit';
```

<a id="setpolicysync"></a>
## setPolicySync

```TypeScript
function setPolicySync(admin: Want, appId: string, policyName: string, policyValue: string): void
```

Sets the sub-policy for a specified browser.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_SET_BROWSER_POLICY

**Model restriction:** This API can be used only in the stage model.

<!--Device-browser-function setPolicySync(admin: Want, appId: string, policyName: string, policyValue: string): void--><!--Device-browser-function setPolicySync(admin: Want, appId: string, policyName: string, policyValue: string): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| appId | string | Yes | Application ID, which is used to specify the browser. |
| policyName | string | Yes | Name of the browser policy to set. If the value is an empty string, the browser policy corresponding to the application ID is set. |
| policyValue | string | Yes | Browser policy to set. If the value is an empty string, the policy corresponding to the policy name is removed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { browser } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

// Replace the value of appId with the specified application ID of the browser.
let appId: string = 'com.example.******_******/******5t5CoBM=';
let policyName: string = 'InsecurePrivateNetworkRequestsAllowed';
let policyValue: string = '{"level":"mandatory","scope":"machine","source":"platform","value":true}';

try {
  browser.setPolicySync(wantTemp, appId, policyName, policyValue);
  console.info('Succeeded in setting browser policies.');
} catch (err) {
  console.error(`Failed to set browser policies. Code is ${err.code}, message is ${err.message}`);
}

```

