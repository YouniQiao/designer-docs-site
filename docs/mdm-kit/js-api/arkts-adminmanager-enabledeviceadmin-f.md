# enableDeviceAdmin

## enableDeviceAdmin

```TypeScript
function enableDeviceAdmin(admin: Want): Promise<void>
```

[超级设备管理应用](docroot://mdm/mdm-kit-term.md#sda)通过该接口可以激活其他[普通设备管理应用](docroot://mdm/mdm-kit-term.md#da)，使用Promise异步回调。 该接口仅支持超级设备管理应用调用。

**Since:** 23

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_DEVICE_ADMIN

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。当激活设备管理应用失败时，会抛出错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200003 | The administrator ability component is invalid. |
| 9200004 | Failed to activate the administrator application of the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { adminManager } from '@kit.MDMKit';
import { BusinessError } from '@kit.BasicServicesKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

adminManager.enableDeviceAdmin(wantTemp).catch((err: BusinessError) => {
  console.error(`Failed to enable device admin. Code: ${err.code}, message: ${err.message}`);
});

```

