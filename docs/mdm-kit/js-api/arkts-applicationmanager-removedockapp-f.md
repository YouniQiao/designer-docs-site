# removeDockApp

## removeDockApp

```TypeScript
function removeDockApp(admin: Want, bundleName: string, abilityName: string): void
```

从快捷栏中移除应用。 > **说明：** > > 以下应用不可通过本接口从快捷栏中移除：“应用中心”、“任务中心”、“文件管理”、“回收站”，否则报错9201018错误码。 > **说明** > 以下应用不可通过本接口从快捷栏中移除：“应用中心”、“任务中心”、“文件管理”、“回收站”，否则报错9201018错误码。

**Since:** 24

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| bundleName | string | Yes | 应用的包名。 |
| abilityName | string | Yes | 应用的Ability名称。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9201016 | The application has not been added to the Dock. |
| 9201018 | The application is inoperable. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { applicationManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace it as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // Replace it as required.
  let bundleName: string = 'com.example.exampleapplication';
  let abilityName: string = 'EntryAbility';
  applicationManager.removeDockApp(wantTemp, bundleName, abilityName);
  console.info('Succeeded in removing dock app.');
} catch(err) {
  console.error(`Failed to remove dock app. Code: ${err.code}, message: ${err.message}`);
}

```

