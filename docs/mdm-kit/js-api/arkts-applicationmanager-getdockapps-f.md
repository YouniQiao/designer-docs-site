# getDockApps

## getDockApps

```TypeScript
function getDockApps(admin: Want): Array<DockInfo>
```

获取当前快捷栏中应用信息的列表。

**Since:** 24

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
| Array&lt;DockInfo> | 快捷栏中的应用信息数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
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
  let result: Array<applicationManager.DockInfo> = applicationManager.getDockApps(wantTemp);
  console.info(`Succeeded in getting dock apps, result : ${JSON.stringify(result)}`);
} catch(err) {
  console.error(`Failed to get dock apps. Code: ${err.code}, message: ${err.message}`);
}


// Return value example.
[
  {
    "bundleName": "com.example.edmtest",
    "abilityName": "EntryAbility",
    "index": 5
  },
  // ...
]

```

