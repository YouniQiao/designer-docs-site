# setPolicySync

## setPolicySync

```TypeScript
function setPolicySync(admin: Want, appId: string, policyName: string, policyValue: string): void
```

为指定的浏览器设置浏览器子策略。

**Since:** 12

**Required permissions:** 

 ohos.permission.ENTERPRISE_SET_BROWSER_POLICY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| appId | string | Yes | 应用appId，用于指定浏览器，表示应用的唯一标识，详情信息可参考  [什么是appId](docroot://quick-start/common-problem-of-application.md#什么是appid)。 |
| policyName | string | Yes | 浏览器子策略名，由接口调用方和指定浏览器约定。当此值为空字符串时，表示设置应用appId对应的浏览器策略。 |
| policyValue | string | Yes | 浏览器子策略值，由接口调用方和指定浏览器约定。当此值为空字符串时，表示取消浏览器策略名对应浏览器子策略。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

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

