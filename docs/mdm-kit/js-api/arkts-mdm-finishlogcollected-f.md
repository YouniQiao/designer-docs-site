# finishLogCollected

## Modules to Import

```TypeScript
import { systemManager } from '@ohos.enterprise.systemManager';
```

## finishLogCollected

```TypeScript
function finishLogCollected(admin: Want): void
```

Deletes the device logs collected by the current MDM app under the current user. > **NOTE** > > After the app calls [startCollectLog](arkts-mdm-startcollectlog-f.md#startcollectlog-1) to initiate log collection and > receives the > [EnterpriseAdminExtensionAbility.onLogCollected](arkts-mdm-enterpriseadminextensionability-c.md#onlogcollected-1) > callback, you are advised to immediately copy or process the logs, and then call this API to delete the collected > logs. > > If this API is not called, device logs will occupy the system storage space, which does not affect the next call > of [startCollectLog](arkts-mdm-startcollectlog-f.md#startcollectlog-1) to start a log collection task.

**Since:** 23

**Required permissions:** ohos.permission.ENTERPRISE_READ_LOG

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { systemManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  systemManager.finishLogCollected(wantTemp);
  console.info('Succeeded in finishing log collected.');
} catch (err) {
  console.error(`Failed to finish log collected. Code is ${err.code}, message is ${err.message}`);
}

```

