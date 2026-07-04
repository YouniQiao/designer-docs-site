# getInstallLocalEnterpriseAppEnabled

## Modules to Import

```TypeScript
import { systemManager } from '@ohos.enterprise.systemManager';
```

## getInstallLocalEnterpriseAppEnabled

```TypeScript
function getInstallLocalEnterpriseAppEnabled(admin: Want | null): boolean
```

Checks whether local installation of enterprise applications is supported.

**Since:** 20

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SYSTEM

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want \| null | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application.<br>Before API version 24, this API canbe called to check whether local installation of enterprise applications is supported. If the device hasmultiple MDM applications, you can pass **admin** to query the corresponding policies. Since API version 24,**admin** can be set to **null**. In this case, the policies that actually take effect on the device arereturned.<br>**Since:** 24 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether local installation of enterprise applications is supported. The value **true**indicates that local installation is supported, and the value **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { systemManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
try {
  let isEnable: boolean = systemManager.getInstallLocalEnterpriseAppEnabled(wantTemp);
  console.info('Succeeded in getting installLocalEnterpriseAppEnabled.');
} catch (err) {
  console.error(`Failed to get installLocalEnterpriseAppEnabled. Code is ${err.code}, message is ${err.message}`);
}

```

