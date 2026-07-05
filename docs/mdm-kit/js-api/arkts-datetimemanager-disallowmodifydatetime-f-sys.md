# disallowModifyDateTime

## disallowModifyDateTime

```TypeScript
function disallowModifyDateTime(admin: Want, disallow: boolean, callback: AsyncCallback<void>): void
```

禁止设备修改系统时间。使用callback异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin:

**Required permissions:** 

 ohos.permission.ENTERPRISE_SET_DATETIME

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| disallow | boolean | Yes | true 表示禁止修改系统时间，false表示允许修改系统时间。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当接口调用成功，err为null，否则为错误对象。 |

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
import { dateTimeManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

dateTimeManager.disallowModifyDateTime(wantTemp, true, (err) => {
  if (err) {
    console.error(`Failed to disallow modify date time. Code is ${err.code}, message is ${err.message}`);
    return;
  }
  console.info('Succeeded in disallowing modify date time');
})

```

## disallowModifyDateTime

```TypeScript
function disallowModifyDateTime(admin: Want, disallow: boolean): Promise<void>
```

禁止设备修改系统时间。使用Promise异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** @ohos.enterprise.restrictions:restrictions.setDisallowedPolicy(admin:

**Required permissions:** 

 ohos.permission.ENTERPRISE_SET_DATETIME

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| disallow | boolean | Yes | true 表示禁止修改系统时间，false表示允许修改系统时间。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。当禁止设备修改系统时间失败时，抛出错误对象。 |

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
import { dateTimeManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

dateTimeManager.disallowModifyDateTime(wantTemp, true).then(() => {
  console.info('Succeeded in disallowing modify date time');
}).catch((err: BusinessError) => {
  console.error(`Failed to disallow modify date time. Code is ${err.code}, message is ${err.message}`);
})

```

