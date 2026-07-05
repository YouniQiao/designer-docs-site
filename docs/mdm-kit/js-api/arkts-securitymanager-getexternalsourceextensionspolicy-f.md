# getExternalSourceExtensionsPolicy

## getExternalSourceExtensionsPolicy

```TypeScript
function getExternalSourceExtensionsPolicy(admin: Want): common.ManagedPolicy
```

获取外部来源扩展程序的管控策略。

**Since:** 22

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |

**Return value:**

| Type | Description |
| --- | --- |
| common.ManagedPolicy | Management policy obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
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
    let result: common.ManagedPolicy = securityManager.getExternalSourceExtensionsPolicy(wantTemp);
    console.info(`Succeeded in getting managed policy, result : ${result}`);
} catch(err) {
    console.error(`Failed to get managed policy. Code: ${err.code}, message: ${err.message}`);
}

```

