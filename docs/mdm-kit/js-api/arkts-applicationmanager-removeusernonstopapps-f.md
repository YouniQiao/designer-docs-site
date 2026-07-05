# removeUserNonStopApps

## removeUserNonStopApps

```TypeScript
function removeUserNonStopApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void
```

为指定用户删除不可关停应用名单。执行删除策略时，若参数列表中包含未安装应用，删除操作仍能成功执行；已安装的应用将被删除，未安装的应用不影响删除操作。

**Since:** 22

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| applicationInstances | Array&lt;common.ApplicationInstance> | Yes | 不可关停应用名单数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

**Example**

```TypeScript
import { applicationManager, common } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace it as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

let applicationInstances: Array<common.ApplicationInstance> = [
  // Replace it as required.
  {
    appIdentifier: '0123456789123456789',
    accountId: 100,
    appIndex: 0
  }
];

try {
  applicationManager.removeUserNonStopApps(wantTemp, applicationInstances);
  console.info('Succeeded in removing UserNonStop applications.');
} catch(err) {
  console.error(`Failed to remove UserNonStop applications. Code: ${err.code}, message: ${err.message}`);
}

```

