# deleteApn

## Modules to Import

```TypeScript
import { networkManager } from '@kit.MDMKit';
```

<a id="deleteapn"></a>
## deleteApn

```TypeScript
function deleteApn(admin: Want, apnId: string): void
```

Deletes the APN.

**Since:** 20

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_APN

**Model restriction:** This API can be used only in the stage model.

<!--Device-networkManager-function deleteApn(admin: Want, apnId: string): void--><!--Device-networkManager-function deleteApn(admin: Want, apnId: string): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| apnId | string | Yes | APN ID to be deleted. You can obtain device information using [networkManager.queryApn](arkts-mdm-networkmanager-queryapn-f.md#queryapn-1). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { networkManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility',
};
let apnId: string = "1"; // Replace it as required.
try {
  networkManager.deleteApn(wantTemp, apnId);
  console.info(`Succeeded in deleting apn.`);
} catch (err) {
  console.error(`Failed to delete apn. Code: ${err.code}, message: ${err.message}`);
}

```

