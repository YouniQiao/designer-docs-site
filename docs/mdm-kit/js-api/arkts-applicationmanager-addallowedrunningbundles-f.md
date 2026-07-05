# addAllowedRunningBundles

## addAllowedRunningBundles

```TypeScript
function addAllowedRunningBundles(admin: Want, appIdentifiers: Array<string>, accountId: number): void
```

添加应用至应用运行允许名单，添加至允许名单的应用允许在指定用户下运行，不在允许名单的应用不允许在指定用户下运行。 > **说明：** >

**Since:** 21

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| appIdentifiers | Array&lt;string> | Yes | 应用  [唯一标识符](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)的数组，可以通过接口  [bundleManager.getInstalledBundleList](arkts-bundlemanager-getinstalledbundlelist-f.md#getInstalledBundleList-1)  获取bundleInfo.signatureInfo.appIdentifier。 取值范围： - 单个用户下该名单总数不能超过200。例如100用户下已经设置了50个、101用户未设置，则100用户还能再  设置150个，101用户还能再设置200个。 |
| accountId | number | Yes | 取值范围为全体整数。  - 用户ID，取值范围：大于等于0。 accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200010 | A conflict policy has been configured. |
| 9200012 | Parameter verification failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

**Example**

```TypeScript
import { applicationManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace it as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace it as required.
let appIdentifiers: Array<string> = ['0123456789123456789'];

try {
  applicationManager.addAllowedRunningBundles(wantTemp, appIdentifiers, 100);
  console.info('Succeeded in adding allowed running bundles.');
} catch (err) {
  console.error(`Failed to add allowed running bundles. Code is ${err.code}, message is ${err.message}`);
}

```

