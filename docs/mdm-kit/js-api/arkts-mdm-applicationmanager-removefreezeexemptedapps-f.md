# removeFreezeExemptedApps

## Modules to Import

```TypeScript
import { applicationManager } from '@kit.MDMKit';
```

<a id="removefreezeexemptedapps"></a>
## removeFreezeExemptedApps

```TypeScript
function removeFreezeExemptedApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void
```

Removes the background freeze-exempt application list for a specified user. If the parameter list includes uninstalled applications, the removal will still succeed. Installed applications will be removed from the list,while uninstalled ones will not impact the removal process.

**Since:** 22

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the stage model.

<!--Device-applicationManager-function removeFreezeExemptedApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void--><!--Device-applicationManager-function removeFreezeExemptedApps(admin: Want, applicationInstances: Array<common.ApplicationInstance>): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| applicationInstances | Array&lt;common.ApplicationInstance&gt; | Yes | Array of the background freeze-exempt application list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |

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
  applicationManager.removeFreezeExemptedApps(wantTemp, applicationInstances);
  console.info('Succeeded in removing FreezeExempted applications.');
} catch(err) {
  console.error(`Failed to remove FreezeExempted applications. Code: ${err.code}, message: ${err.message}`);
}

```

