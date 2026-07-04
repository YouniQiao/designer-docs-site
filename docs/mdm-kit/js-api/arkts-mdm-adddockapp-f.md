# addDockApp

## Modules to Import

```TypeScript
import { applicationManager } from '@ohos.enterprise.applicationManager';
```

## addDockApp

```TypeScript
function addDockApp(admin: Want, bundleName: string, abilityName: string, index?: number): void
```

Adds an application to the bottom shortcut bar of a PC/2-in-1 device based on the location index. Then users can tap the application icon in the shortcut bar to directly launch the application. The application icon is the default icon displayed on the home screen. > **NOTE** >

**Since:** 24

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| bundleName | string | Yes | Bundle name of the application. |
| abilityName | string | Yes | Ability name of the application. Only the application entry ability is supported. |
| index | number | No | Location index of the application in the shortcut bar.<br>The value must be an integer within [0,99]. Default value: 99. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| [9200015](../errorcode-enterpriseDeviceManager.md#9200015-component-not-exist) | The ability does not exist. |
| [9201013](../errorcode-enterpriseDeviceManager.md#9201013-number-of-applications-in-dock-reaches-maximum) | The number of applications in the Dock has reached the maximum. |
| [9201014](../errorcode-enterpriseDeviceManager.md#9201014-specified-application-already-in-docker) | The application is already in the Dock. |
| [9201015](../errorcode-enterpriseDeviceManager.md#9201015-specified-application-not-installed) | The application is not installed. |
| [9201018](../errorcode-enterpriseDeviceManager.md#9201018-specified-application-inoperable) | The application is inoperable. |
| [9201019](../errorcode-enterpriseDeviceManager.md#9201019-specified-location-inoperable) | The location is inoperable. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { applicationManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace it as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // Replace it as required.
  let bundleName: string = 'com.example.exampleapplication';
  let abilityName: string = 'EntryAbility';
  applicationManager.addDockApp(wantTemp, bundleName, abilityName, 3);
  console.info('Succeeded in adding dock app.');
} catch(err) {
  console.error(`Failed to add dock app. Code: ${err.code}, message: ${err.message}`);
}

```

