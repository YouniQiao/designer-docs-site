# getFreezeExemptedApps

## getFreezeExemptedApps

```TypeScript
function getFreezeExemptedApps(admin: Want): Array<common.ApplicationInstance>
```

获取当前设备下所有用户后台防冻结应用名单。

**Since:** 22

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;common.ApplicationInstance> | Array of the background freeze-exempt application list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
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

try {
  let result: Array<common.ApplicationInstance> = applicationManager.getFreezeExemptedApps(wantTemp);
  console.info(`Succeeded in getting FreezeExempted applications, result : ${JSON.stringify(result)}`);
} catch(err) {
  console.error(`Failed to get FreezeExempted applications. Code: ${err.code}, message: ${err.message}`);
}

```

