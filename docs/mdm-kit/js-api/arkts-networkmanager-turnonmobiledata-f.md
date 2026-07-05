# turnOnMobileData

## turnOnMobileData

```TypeScript
function turnOnMobileData(admin: Want, isForce: boolean): void
```

开启移动数据网络。

**Since:** 20

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_NETWORK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| isForce | boolean | Yes | 是否强制打开移动数据网络。true表示强制开启，强制开启后不支持用户在设备上手动关闭，必须采用  [turnOffMobileData]networkManager.turnOffMobileData接口关闭。false表示非强制开启，此时用户可以在设备上手动操作关闭移动数据网络。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |

**Example**

```TypeScript
import { networkManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
try {
  networkManager.turnOnMobileData(wantTemp, true);
  console.info(`Turn on mobile data succeeded`);
} catch (err) {
  console.error(`Failed to turn on mobile data. Code: ${err.code}, message: ${err.message}`);
}

```

