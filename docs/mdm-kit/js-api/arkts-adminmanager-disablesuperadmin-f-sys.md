# disableSuperAdmin

## disableSuperAdmin

```TypeScript
function disableSuperAdmin(bundleName: String, callback: AsyncCallback<void>): void
```

根据bundleName将超级设备管理应用解除激活。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | String | Yes | 超级设备管理应用的包名。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数，当接口调用成功，err为null，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200005 | Failed to deactivate the administrator application of the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

// Replace with actual values.
let bundleName: string = 'com.example.myapplication';

adminManager.disableSuperAdmin(bundleName, (err) => {
  if (err) {
    console.error(`Failed to disable super admin. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in disabling super admin');
});

```

## disableSuperAdmin

```TypeScript
function disableSuperAdmin(bundleName: String): Promise<void>
```

根据bundleName将超级设备管理应用解除激活。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | String | Yes | 超级设备管理应用的包名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。当解除激活超级设备管理应用失败时，会抛出错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200005 | Failed to deactivate the administrator application of the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Replace with actual values.
let bundleName: string = 'com.example.myapplication';

adminManager.disableSuperAdmin(bundleName).catch((err: BusinessError) => {
  console.error(`Failed to disable super admin. Code: ${err.code}, message: ${err.message}`);
});

```

