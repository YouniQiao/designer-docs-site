# getPolicies

## getPolicies

```TypeScript
function getPolicies(admin: Want, appId: string, callback: AsyncCallback<string>): void
```

获取指定浏览器的策略，使用callback异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** browser.getPolicySync

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| appId | string | Yes | 应用ID，用于指定浏览器。 |
| callback | AsyncCallback&lt;string> | Yes | 回调函数，当接口调用成功，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 202 | Permission verification failed. A non-system application calls a system API. |
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
browser.getPolicies(wantTemp, appId, (err, result) => {
  if (err) {
    console.error(`Failed to get browser policies. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info(`Succeeded in getting  browser policies, result : ${JSON.stringify(result)}`);
});

```

## getPolicies

```TypeScript
function getPolicies(admin: Want, appId: string): Promise<string>
```

获取指定浏览器的策略，使用Promise异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** browser.getPolicySync

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| appId | string | Yes | 应用ID，用于指定浏览器。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回浏览器策略。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { browser } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace the value of appId with the specified application ID of the browser.
let appId: string = 'com.example.******_******/******5t5CoBM=';
browser.getPolicies(wantTemp, appId).then((result) => {
  console.info(`Succeeded in getting browser policies, result : ${JSON.stringify(result)}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to get browser policies. Code is ${err.code}, message is ${err.message}`);
});

```

