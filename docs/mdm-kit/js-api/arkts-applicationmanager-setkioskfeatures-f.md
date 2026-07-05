# setKioskFeatures

## setKioskFeatures

```TypeScript
function setKioskFeatures(admin: Want, features: Array<KioskFeature>): void
```

设置Kiosk模式的特征。通过本接口可以控制在Kiosk模式下能否进入通知中心、控制中心。 从API version 24开始，新增支持设置是否允许底部上滑进入最近任务栏，左滑或右滑悬停展示侧边DOCK栏。 在非Kiosk模式下，本接口可以正常调用，但是不会生效，进入Kiosk模式后才会生效。

**Since:** 20

**Required permissions:** 

 ohos.permission.ENTERPRISE_SET_KIOSK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| features | Array&lt;KioskFeature> | Yes | Kiosk模式的特征集合（从API version 24开始，新增允许底部上滑进入最近任务栏、左滑悬停或右滑悬停展示侧边DOCK栏）。  当传入空数组时，系统会清空之前下发过的特征，恢复到Kiosk模式的默认状态。即：禁用通知中心、控制中心、最近任务栏、侧边Dock栏等能力。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | The parameter verification failed. |
| 201 | Permission verification failed.The application does not have the permission  required to call the API. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { applicationManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace it as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
let kioskFeatures: Array<applicationManager.KioskFeature> = [];
kioskFeatures.push(applicationManager.KioskFeature.ALLOW_NOTIFICATION_CENTER);
kioskFeatures.push(applicationManager.KioskFeature.ALLOW_CONTROL_CENTER);
kioskFeatures.push(applicationManager.KioskFeature.ALLOW_GESTURE_CONTROL);
kioskFeatures.push(applicationManager.KioskFeature.ALLOW_SIDE_DOCK);
try {
  applicationManager.setKioskFeatures(wantTemp, kioskFeatures);
  console.info('Succeeded in setting kiosk feature.');
} catch (err) {
  console.error(`Failed to set kiosk feature. Code is ${err.code}, message is ${err.message}`);
}

```

