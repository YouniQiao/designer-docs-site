# addKeepAliveApps

## addKeepAliveApps

```TypeScript
function addKeepAliveApps(admin: Want, bundleNames: Array<string>, accountId: number): void
```

添加保活应用名单，添加后将自动保活应用进程。在开机和应用被杀死后，由系统主动拉起应用进程。<!--RP7--><!--RP7End--> 通过本接口添加至保活名单的应用，禁止用户在设备上手动取消保活<!--RP6--><!--RP6End-->，但可通过 [removeKeepAliveApps]applicationManager.removeKeepAliveApps接口将应用从保活名单中移除。 如果将应用添加至应用禁止运行名单[addDisallowedRunningBundlesSync]applicationManager.addDisallowedRunningBundlesSync，就不能将应用添 加至保活应用名单，否则会报9200010冲突错误码。 如果需要在Phone/Tablet设备使用类似功能，可以调用[addUserNonStopApps]applicationManager.addUserNonStopApps或者 [addFreezeExemptedApps]applicationManager.addFreezeExemptedApps接口，具体功能请参考相关文档。

**Since:** 14

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| bundleNames | Array&lt;string> | Yes | 应用包名数组，指定需要添加至保活名单的应用，最大支持5个。 |
| accountId | number | Yes | 用户ID，取值范围：大于等于0。 accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200010 | A conflict policy has been configured. |
| 9201005 | Add keep alive applications failed. |
| 201 | Permission verification failed.The application does not have the permission  required to call the API |
| 401 | Parameter error.Possible causes: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;3.Parameter verification failed. |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |

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
let bundleNames: Array<string> = ['com.example.myapplication'];

try {
  applicationManager.addKeepAliveApps(wantTemp, bundleNames, 100);
  console.info('Succeeded in adding keep alive apps.');
} catch (err) {
  console.error(`Failed to add keep alive apps. Code is ${err.code}, message is ${err.message}`);
}

```

## addKeepAliveApps

```TypeScript
function addKeepAliveApps(admin: Want, bundleNames: Array<string>, accountId: number, disallowModify: boolean): void
```

添加保活应用名单，并设置是否禁止用户手动取消保活，添加后将自动保活应用进程。在开机和应用被杀死后，由系统主动拉起应用进程。 通过本接口、 [addKeepAliveApps]applicationManager.addKeepAliveApps(admin: Want, bundleNames: Array<string>, accountId: number) 接口均可添加保活应用名单，两个接口的设置可同时生效。同一用户下，保活应用名单最多支持包含5个应用。例如：若当前名单中已有3个应用，则最多还能通过本接口为当前用户添加2个应用。 如果通过[addDisallowedRunningBundlesSync]applicationManager.addDisallowedRunningBundlesSync接口将应用添加至应用禁止运行名单，就不能 将应用添加至保活应用名单，否则会报9200010冲突错误码。 如果需要在Phone/Tablet设备使用类似功能，可以调用[addUserNonStopApps]applicationManager.addUserNonStopApps或者 [addFreezeExemptedApps]applicationManager.addFreezeExemptedApps接口，具体功能请参考相关文档。

**Since:** 20

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| bundleNames | Array&lt;string> | Yes | 应用包名数组，指定需要添加至保活名单的应用，最大支持5个。 应用需要满足条件：安装在1用户下（1用户是支持三方应用单例运行的用户），且应用接入  [后台服务](docroot://application-models/app-service-extension-ability.md#实现一个后台服务)。否则，会报错误码9  201005。 |
| accountId | number | Yes | 用户ID，取值范围：大于等于0。 accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取。 |
| disallowModify | boolean | Yes | 是否禁止用户手动取消应用保活，true表示禁止，false表示允许。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200010 | A conflict policy has been configured. |
| 9201005 | Add keep alive applications failed. |
| 201 | Permission verification failed.The application does not have the permission  required to call the API |
| 801 | Capability not supported. Failed to call the API due to limited device  capabilities. |

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
let bundleNames: Array<string> = ['com.example.myapplication'];

try {
  applicationManager.addKeepAliveApps(wantTemp, bundleNames, 100, true);
  console.info('Succeeded in adding keep alive apps and set disallowModify.');
} catch (err) {
  console.error(`Failed to add keep alive apps and set disallowModify. Code is ${err.code}, message is ${err.message}`);
}

```

