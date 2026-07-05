# getEnterpriseInfo

## getEnterpriseInfo

```TypeScript
function getEnterpriseInfo(admin: Want, callback: AsyncCallback<EnterpriseInfo>): void
```

获取设备管理应用的企业信息。使用callback异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| callback | AsyncCallback&lt;EnterpriseInfo> | Yes | 回调函数，当接口调用成功，err为null，data为设备管理应用的企业信息，否则err为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

adminManager.getEnterpriseInfo(wantTemp, (err, result) => {
  if (err) {
    console.error(`Failed to get enterprise info. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in getting enterprise info, enterprise name : ${result.name}, enterprise description : ${result.description}`);
});

```

## getEnterpriseInfo

```TypeScript
function getEnterpriseInfo(admin: Want): Promise<EnterpriseInfo>
```

获取设备管理应用的企业信息，使用Promise异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;EnterpriseInfo> | Promise对象，返回设备管理应用的企业信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

adminManager.getEnterpriseInfo(wantTemp).then((result) => {
  console.info(`Succeeded in getting enterprise info, enterprise name : ${result.name}, enterprise description : ${result.description}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to get enterprise info. Code: ${err.code}, message: ${err.message}`);
});

```

