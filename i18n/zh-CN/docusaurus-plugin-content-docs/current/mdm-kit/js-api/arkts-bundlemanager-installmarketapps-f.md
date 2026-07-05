# installMarketApps

## installMarketApps

```TypeScript
function installMarketApps(admin: Want, bundleNames: Array<string>): void
```

下载并安装应用市场应用。 > **说明：** > > 本接口调用成功后会在桌面上生成应用下载任务，此任务与从应用市场下载所创建任务一致。下载安装结束后，安装结果会通过回调 > [EnterpriseAdminExtensionAbility.onMarketAppInstallResult]> **说明** > 本接口调用成功后会在桌面上生成应用下载任务，此任务与从应用市场下载所创建任务一致。下载安装结束后，安装结果会通过回调[EnterpriseAdminExtensionAbility.onMarketAppInstallResult ]{@link

**起始版本：** 22

**需要权限：** 

 ohos.permission.ENTERPRISE_INSTALL_BUNDLE

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | EnterpriseAdminExtensionAbility. Want must contain the ability name of the  EnterpriseAdminExtensionAbility and the bundle name of the application. |
| bundleNames | Array&lt;string> | 是 | 应用包名列表，一次最多传入10个。包名需与应用市场中包名一致，否则无法创建下载任务，并抛出错误码9201002。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 9201002 | Failed to install the application. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

**示例：**

```TypeScript
import { Want  from '@kit.AbilityKit';
import { bundleManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // 需根据实际情况进行替换
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// 需根据实际情况进行替换
let bundleNames: Array<string> = [ 'com.huaweicloud.m' ];
try {
  bundleManager.installMarketApps(wantTemp, bundleNames);
  console.info(`Succeeded in installing market apps.`);
} catch(err) {
  console.error(`Failed to install market apps. Code: ${err.code}, message: ${err.message}`);
}

```

