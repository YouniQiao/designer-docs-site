# finishLogCollected

## finishLogCollected

```TypeScript
function finishLogCollected(admin: Want): void
```

删除本MDM应用在当前用户下收集到的设备日志。 > **说明：** > > 在应用调用[startCollectLog]systemManager.startCollectLog开始收集日志后，收到 > [EnterpriseAdminExtensionAbility.onLogCollected](arkts-enterpriseadminextensionability-c.md#onLogCollected) > 回调时，建议立即拷贝或者处理日志，并调用此接口删除收集到的日志。 > > 若不调本接口，设备日志会占用系统存储空间，不影响下一次调用[startCollectLog]systemManager.startCollectLog启动日志收集任务。

**Since:** 23

**Required permissions:** 

 ohos.permission.ENTERPRISE_READ_LOG

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { systemManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  systemManager.finishLogCollected(wantTemp);
  console.info('Succeeded in finishing log collected.');
} catch (err) {
  console.error(`Failed to finish log collected. Code is ${err.code}, message is ${err.message}`);
}

```

