# getOutgoingCallPolicyNumbers

## getOutgoingCallPolicyNumbers

```TypeScript
function getOutgoingCallPolicyNumbers(admin: Want, policy: adminManager.Policy): Array<string>
```

获取通话呼出的允许或禁用名单。

**Since:** 20

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_TELEPHONY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| policy | adminManager.Policy | Yes | 允许或禁用名单策略。 BLOCK_LIST为禁用名单，TRUST_LIST为允许名单。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 通话呼出禁用或允许名单的号码数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { telephonyManager } from '@kit.MDMKit';
import { adminManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace the values as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
try {
  let policy: adminManager.Policy = adminManager.Policy.BLOCK_LIST;
  let numbers: Array<string> = telephonyManager.getOutgoingCallPolicyNumbers(wantTemp, policy);
  console.info(`Succeeded in getting outgoing call policy. result: ${JSON.stringify(numbers)}`);
} catch (err) {
  console.error(`Failed to get outgoing call policy. Code: ${err.code}, message: ${err.message}`);
}

```

