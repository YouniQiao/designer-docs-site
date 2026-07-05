# getGlobalProxy

## getGlobalProxy

```TypeScript
function getGlobalProxy(admin: Want, callback: AsyncCallback<connection.HttpProxy>): void
```

获取网络全局代理，使用callback异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** networkManager.getGlobalProxySync

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_NETWORK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| callback | AsyncCallback&lt;connection.HttpProxy> | Yes | 回调函数。当接口调用成功，err为null，否则err为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
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

networkManager.getGlobalProxy(wantTemp, (err, result) => {
  if (err) {
    console.error(`Failed to get network global proxy. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in getting network global proxy, result : ${JSON.stringify(result)}`);
});

```

## getGlobalProxy

```TypeScript
function getGlobalProxy(admin: Want): Promise<connection.HttpProxy>
```

获取网络全局代理，使用Promise异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** networkManager.getGlobalProxySync

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_NETWORK

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
| Promise&lt;connection.HttpProxy> | Promise used to return the global HTTP proxy information obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
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

networkManager.getGlobalProxy(wantTemp).then(() => {
  console.info(`Succeeded in getting network global proxy`);
}).catch((err: BusinessError) => {
  console.error(`Failed to get network global proxy. Code: ${err.code}, message: ${err.message}`);
});

```

