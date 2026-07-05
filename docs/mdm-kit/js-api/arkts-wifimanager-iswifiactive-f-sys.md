# isWifiActive

## isWifiActive

```TypeScript
function isWifiActive(admin: Want, callback: AsyncCallback<boolean>): void
```

查询当前设备的Wi-Fi开启状态。使用callback异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** wifiManager.isWifiActiveSync

**Required permissions:** 

 ohos.permission.ENTERPRISE_SET_WIFI

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| callback | AsyncCallback&lt;boolean> | Yes | 回调函数，当接口调用成功，err为null，data为boolean值，true表示Wi-Fi开启，false表示Wi-Fi关闭，否则err  为错误对象。 |

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
import { wifiManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

wifiManager.isWifiActive(wantTemp, (err, result) => {
  if (err) {
    console.error(`Failed to query whether the wifi is active or not. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info(`Succeeded in querying whether the wifi is active or not, result : ${result}`);
});

```

## isWifiActive

```TypeScript
function isWifiActive(admin: Want): Promise<boolean>
```

查询当前设备的Wi-Fi开启状态。使用Promise异步回调。

**Since:** 10

**Deprecated since:** 26.0.0

**Substitute:** wifiManager.isWifiActiveSync

**Required permissions:** 

 ohos.permission.ENTERPRISE_SET_WIFI

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
| Promise&lt;boolean> | Promise对象，返回Wi-Fi开启状态，true表示Wi-Fi开启，false表示Wi-Fi关闭。 |

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
import { wifiManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

wifiManager.isWifiActive(wantTemp).then((result) => {
  console.info(`Succeeded in querying whether the wifi is active or not, result : ${result}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to query whether the wifi is active or not. Code: ${err.code}, message: ${err.message}`);
});

```

