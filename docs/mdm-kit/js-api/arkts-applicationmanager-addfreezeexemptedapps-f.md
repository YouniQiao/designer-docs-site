# addFreezeExemptedApps

## addFreezeExemptedApps

```TypeScript
function addFreezeExemptedApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void
```

为指定用户添加后台防冻结应用名单，仅可对已安装应用设置该策略，该策略重启后失效。若参数列表中存在未安装应用，则返回9200012错误码。若设置策略后，名单中有应用被卸载，则卸载的应用将从名单中移除。若添加已存在于名单中的应用，返回 成功，但已设置策略名单中不会重复添加该应用。 冻结操作：对目标应用的挂起、软件资源代理、硬件资源代理和高功耗管控等操作。

**Since:** 22

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| applicationInstances | Array&lt;common.ApplicationInstance> | Yes | 后台防冻结应用名单数组，后台防冻结应用名单最多支持包含10个应用，该数量限制不区分用户，即所有  用户下添加应用的总和的最大限制为10个。例如：若当前名单中已有3个应用，则最多还能通过本接口为指定用户添加7个应用。 |

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
  applicationManager.addFreezeExemptedApps(wantTemp, applicationInstances);
  console.info('Succeeded in adding FreezeExempted applications.');
} catch(err) {
  console.error(`Failed to add FreezeExempted applications. Code: ${err.code}, message: ${err.message}`);
}

```

