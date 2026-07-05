# clearUpApplicationData

## clearUpApplicationData

```TypeScript
function clearUpApplicationData(admin: Want, bundleName: string, appIndex: number, accountId: number): void
```

清除应用产生的所有数据。

**Since:** 20

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| bundleName | string | Yes | 应用包名，指定需要清除数据的应用包名。 |
| appIndex | number | Yes | 应用分身索引，取值范围：大于等于0的整数。 appIndex可以通过@ohos.bundle.bundleManager中的  [getAppCloneIdentity](../../apis-ability-kit/arkts-apis/arkts-bundlemanager-getappcloneidentity-f.md#getAppCloneIdentity-1)等接口来获取。 |
| accountId | number | Yes | 用户ID，取值范围：大于等于0的整数。 accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
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
// Replace it as required.
let bundleName: string = 'com.example.exampleapplication';

try {
  // Replace it as required.
  applicationManager.clearUpApplicationData(wantTemp, bundleName, 0, 100);
  console.info('Succeeded in clearing up application data.');
} catch (err) {
  console.error(`Failed to clear up application data. Code is ${err.code}, message is ${err.message}`);
}

```

