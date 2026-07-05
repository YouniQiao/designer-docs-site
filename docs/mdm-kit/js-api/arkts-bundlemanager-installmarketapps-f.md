# installMarketApps

## installMarketApps

```TypeScript
function installMarketApps(admin: Want, bundleNames: Array<string>): void
```

下载并安装应用市场应用。 > **说明：** > > 本接口调用成功后会在桌面上生成应用下载任务，此任务与从应用市场下载所创建任务一致。下载安装结束后，安装结果会通过回调 > [EnterpriseAdminExtensionAbility.onMarketAppInstallResult]> **说明** > 本接口调用成功后会在桌面上生成应用下载任务，此任务与从应用市场下载所创建任务一致。下载安装结束后，安装结果会通过回调[EnterpriseAdminExtensionAbility.onMarketAppInstallResult ]{@link

**Since:** 22

**Required permissions:** 

 ohos.permission.ENTERPRISE_INSTALL_BUNDLE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. Want must contain the ability name of the  EnterpriseAdminExtensionAbility and the bundle name of the application. |
| bundleNames | Array&lt;string> | Yes | 应用包名列表，一次最多传入10个。包名需与应用市场中包名一致，否则无法创建下载任务，并抛出错误码9201002。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 9201002 | Failed to install the application. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

**Example**

```TypeScript
import { Want  from '@kit.AbilityKit';
import { bundleManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace with actual values.
let bundleNames: Array<string> = [ 'com.huaweicloud.m' ];
try {
    bundleManager.installMarketApps(wantTemp, bundleNames);
    console.info(`Succeeded in installing market apps.`);
} catch(err) {
    console.error(`Failed to install market apps. Code: ${err.code}, message: ${err.message}`);
}

```

