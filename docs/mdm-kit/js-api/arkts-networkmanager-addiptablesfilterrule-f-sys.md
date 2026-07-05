# addIptablesFilterRule

## addIptablesFilterRule

```TypeScript
function addIptablesFilterRule(admin: Want, filterRule: AddFilterRule, callback: AsyncCallback<void>): void
```

为设备添加网络包过滤规则，仅支持IPv4。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_NETWORK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| filterRule | AddFilterRule | Yes | 添加网络包过滤规则。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当接口调用成功，err为null，否则err为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { networkManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
let filterRule: networkManager.AddFilterRule = {
  // Replace with actual values.
  "ruleNo": 1,
  "srcAddr": "192.168.1.1-192.168.255.255",
  "destAddr": "10.1.1.1",
  "srcPort": "8080",
  "destPort": "8080",
  "uid": "9696",
  "method": networkManager.AddMethod.APPEND,
  "direction": networkManager.Direction.OUTPUT,
  "action": networkManager.Action.DENY,
  "protocol": networkManager.Protocol.UDP
};

networkManager.addIptablesFilterRule(wantTemp, filterRule, (err) => {
  if (err) {
    console.error(`Failed to set iptables filter rule. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in setting iptables filter rule`);
});

```

## addIptablesFilterRule

```TypeScript
function addIptablesFilterRule(admin: Want, filterRule: AddFilterRule): Promise<void>
```

为设备添加网络包过滤规则，仅支持IPv4。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_NETWORK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| filterRule | AddFilterRule | Yes | 添加网络包过滤规则。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。当添加网络包过滤规则失败时抛出错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { networkManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
let filterRule: networkManager.AddFilterRule = {
  // Replace with actual values.
  "ruleNo": 1,
  "srcAddr": "192.168.1.1-192.168.255.255",
  "destAddr": "10.1.1.1",
  "srcPort": "8080",
  "destPort": "8080",
  "uid": "9696",
  "method": networkManager.AddMethod.APPEND,
  "direction": networkManager.Direction.OUTPUT,
  "action": networkManager.Action.DENY,
  "protocol": networkManager.Protocol.UDP
};

networkManager.addIptablesFilterRule(wantTemp, filterRule).then(() => {
  console.info(`Succeeded in setting iptables filter rule`);
}).catch((err: BusinessError) => {
  console.error(`Failed to set iptables filter rule. Code: ${err.code}, message: ${err.message}`);
});

```

