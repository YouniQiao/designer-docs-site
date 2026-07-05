# setEnterpriseInfo

## setEnterpriseInfo

```TypeScript
function setEnterpriseInfo(admin: Want, enterpriseInfo: EnterpriseInfo, callback: AsyncCallback<void>): void
```

设置设备管理应用的企业信息。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.SET_ENTERPRISE_INFO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| enterpriseInfo | EnterpriseInfo | Yes | 设备管理应用的企业信息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当接口调用成功，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
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
let enterpriseInfo: adminManager.EnterpriseInfo = {
  // Replace with actual values.
  name: 'enterprise name',
  description: 'enterprise description'
};

adminManager.setEnterpriseInfo(wantTemp, enterpriseInfo, (err) => {
  if (err) {
    console.error(`Failed to set enterprise info. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in setting enterprise info');
});

```

## setEnterpriseInfo

```TypeScript
function setEnterpriseInfo(admin: Want, enterpriseInfo: EnterpriseInfo): Promise<void>
```

设置设备管理应用的企业信息。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.SET_ENTERPRISE_INFO

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| enterpriseInfo | EnterpriseInfo | Yes | 设备管理应用的企业信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。当设置设备管理应用企业信息失败时，会抛出错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
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
let enterpriseInfo: adminManager.EnterpriseInfo = {
  // Replace with actual values.
  name: 'enterprise name',
  description: 'enterprise description'
};

adminManager.setEnterpriseInfo(wantTemp, enterpriseInfo).catch((err: BusinessError) => {
  console.error(`Failed to set enterprise info. Code: ${err.code}, message: ${err.message}`);
});

```

