# removeOutgoingCallPolicyNumbers

## removeOutgoingCallPolicyNumbers

```TypeScript
function removeOutgoingCallPolicyNumbers(admin: Want, policy: adminManager.Policy, numbers: Array<string>): void
```

移除通话呼出的允许或禁用名单，若在该名单尚未设置时进行移除，则会移除失败。 以下情况下，通过本接口移除通话呼出的允许或禁用名单，会报策略冲突： 已经通过 [setDisallowedPolicy](arkts-restrictions-setdisallowedpolicy-f.md#setDisallowedPolicy-1) 接口禁用了设备通话能力，再通过本接口移除通话呼出的禁用或允许名单，返回203错误码。通过 [setDisallowedPolicy](arkts-restrictions-setdisallowedpolicy-f.md#setDisallowedPolicy-1) 接口解除禁用设备通话能力后，可解除冲突。

**Since:** 20

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_TELEPHONY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| policy | adminManager.Policy | Yes | 允许或禁用名单策略。BLOCK_LIST为禁用名单，TRUST_LIST为允许名单。 |
| numbers | Array&lt;string> | Yes | 待移除的通话号码数组。数组总长度不能超过1000。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | The parameter validation failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 203 | This function is prohibited by enterprise management policies. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |

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
  telephonyManager.removeOutgoingCallPolicyNumbers(wantTemp, policy, numbers);
  console.info('Succeeded in removing outgoing call policy.');
} catch (err) {
  console.error(`Failed to remove outgoing call policy. Code: ${err.code}, message: ${err.message}`);
}

```

