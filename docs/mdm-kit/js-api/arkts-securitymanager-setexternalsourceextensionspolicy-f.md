# setExternalSourceExtensionsPolicy

## setExternalSourceExtensionsPolicy

```TypeScript
function setExternalSourceExtensionsPolicy(admin: Want, policy: common.ManagedPolicy): void
```

设置外部来源扩展程序的管控策略。 - DEFAULT： 默认，表示无管控策略，用户可以通过“设置-隐私与安全-高级”中的“运行外部来源的扩展程序”开关来设置是否允许扩展程序运行。 - DISALLOW： 禁用。设置此策略后，禁止运行外部来源的扩展程序，运行中的扩展程序可继续运行，扩展程序关闭后无法启动运行。用户无法开启“设置-隐私和安全-高级”中的“运行外部来源的扩展程序”开关。 - FORCE_OPEN： 强制开启。设置此策略后，允许运行外部来源的扩展程序，用户无法关闭“设置-隐私和安全-高级”中的“运行外部来源的扩展程序”开关。

**Since:** 22

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| policy | common.ManagedPolicy | Yes | 管控策略。 |

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
import { common, securityManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
try {
    securityManager.setExternalSourceExtensionsPolicy(wantTemp, common.ManagedPolicy.FORCE_OPEN);
    console.info(`Succeeded in setting managed policy.`);
} catch(err) {
    console.error(`Failed to set managed policy. Code: ${err.code}, message: ${err.message}`);
}

```

