# disableAdmin

## disableAdmin

```TypeScript
function disableAdmin(admin: Want, userId?: number): Promise<void>
```

解除激活指定用户的设备管理应用。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

- API version12  to  19: ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN

- API version20  to  22: ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN or * ohos.permission.START_PROVISIONING_MESSAGE

- API version23 and later: ohos.permission.MANAGE_ENTERPRISE_DEVICE_ADMIN or ohos.permission.START_PROVISIONING_MESSAGE * or ohos.permission.ENTERPRISE_DEACTIVATE_DEVICE_ADMIN

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。解除激活BYOD设备管理应用时，仅支持传入当前应用的企业设备管理  扩展组件。 |
| userId | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。当解除激活设备管理应用失败时，会抛出错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200005 | Failed to deactivate the administrator application of the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

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

adminManager.disableAdmin(wantTemp, 100).catch((err: BusinessError) => {
  console.error(`Failed to disable admin. Code: ${err.code}, message: ${err.message}`);
});

```

