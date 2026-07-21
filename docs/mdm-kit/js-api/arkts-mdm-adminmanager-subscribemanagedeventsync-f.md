# subscribeManagedEventSync

## Modules to Import

```TypeScript
import { adminManager } from '@kit.MDMKit';
```

<a id="subscribemanagedeventsync"></a>
## subscribeManagedEventSync

```TypeScript
function subscribeManagedEventSync(admin: Want, managedEvents: Array<ManagedEvent>): void
```

Subscribes to system management events.

**Since:** 12

**Required permissions:** ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT

**Model restriction:** This API can be used only in the stage model.

<!--Device-adminManager-function subscribeManagedEventSync(admin: Want, managedEvents: Array<ManagedEvent>): void--><!--Device-adminManager-function subscribeManagedEventSync(admin: Want, managedEvents: Array<ManagedEvent>): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| managedEvents | Array&lt;ManagedEvent&gt; | Yes | Array of events to subscribe to. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device.<br>**Applicable version:** 26.0.0 and later |
| [9200008](../errorcode-enterpriseDeviceManager.md#9200008-invalid-system-subscription-event) | The specified system event is invalid. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
let events: Array<adminManager.ManagedEvent> = [adminManager.ManagedEvent.MANAGED_EVENT_BUNDLE_ADDED, adminManager.ManagedEvent.MANAGED_EVENT_BUNDLE_REMOVED];

try {
  adminManager.subscribeManagedEventSync(wantTemp, events);
  console.info('Succeeded in subscribing managed event.');
} catch (err) {
  console.error(`Failed to subscribe managed event. Code: ${err.code}, message: ${err.message}`);
}

```

