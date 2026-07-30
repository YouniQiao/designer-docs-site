# addIncomingCallPolicyNumbers

## Modules to Import

```TypeScript
import { telephonyManager } from '@kit.MDMKit';
```

## addIncomingCallPolicyNumbers

```TypeScript
function addIncomingCallPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void
```

Adds the trustlist or blocklist for incoming calls. If no list is set, all numbers can make incoming calls. Once a list is added, only numbers on the list are allowed (or blocked) from making incoming calls.

A policy conflict is reported when this API is called in the following scenarios:

1. If the device's call capability has been disabled via the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy)API, using this API to add an incoming call trustlist or blocklist will return error code 203.To resolve the conflict, disable the call restriction via the [setDisallowedPolicy](arkts-mdm-restrictions-setdisallowedpolicy-f.md#setdisallowedpolicy)API.2. If an incoming call blocklist has been set via this API, using this API again to add an incoming call trustlist will return error code 9200010. To resolve the conflict, remove the previously set blocklist via the [removeIncomingCallPolicyNumbers](arkts-mdm-telephonymanager-removeincomingcallpolicynumbers-f.md#removeincomingcallpolicynumbers) API.3. If an incoming call trustlist has been set via this API, using this API again to add an incoming call blocklist will return error code 9200010. To resolve the conflict, remove the previously set trustlist via the [removeIncomingCallPolicyNumbers](arkts-mdm-telephonymanager-removeincomingcallpolicynumbers-f.md#removeincomingcallpolicynumbers) API.

**Since:** 20

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_TELEPHONY

**Model restriction:** This API can be used only in the stage model.

<!--Device-telephonyManager-function addIncomingCallPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void--><!--Device-telephonyManager-function addIncomingCallPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| policy | adminManager.Policy | Yes | Policy for trustlist or blocklist. **BLOCK_LIST** indicates a blocklist,and **TRUST_LIST** indicates a trustlist. |
| numbers | Array&lt;string&gt; | Yes | List of phone numbers. Currently, only full number matching is supported. The total length of the array must not exceed 1,000. For example, if there are already 100 numbers in the current trustlist array, this API supports adding up to 900 more numbers. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200010](../errorcode-enterpriseDeviceManager.md#9200010-policy-conflict) | A conflict policy has been configured. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [203](../../errorcode-universal.md#203-system-function-prohibited-by-enterprise-management-policies) | This function is prohibited by enterprise management policies. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { telephonyManager } from '@kit.MDMKit';
import { adminManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace the value as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
try {
  let policy: adminManager.Policy = adminManager.Policy.BLOCK_LIST;
  let numbers: Array<string> = [
    // Replace the value as required.
    "13112345678"
  ];
  telephonyManager.addIncomingCallPolicyNumbers(wantTemp, policy, numbers);
  console.info('Succeeded in adding incoming call policy.');
} catch (err) {
  console.error(`Failed to add incoming call policy. Code: ${err.code}, message: ${err.message}`);
}

```

