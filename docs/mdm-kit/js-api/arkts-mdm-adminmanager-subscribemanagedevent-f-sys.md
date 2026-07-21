# subscribeManagedEvent (System API)

## Modules to Import

```TypeScript
import { adminManager } from '@kit.MDMKit';
```

<a id="subscribemanagedevent"></a>
## subscribeManagedEvent

```TypeScript
function subscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>, callback: AsyncCallback<void>): void
```

Subscribes to system management events. This API uses an asynchronous callback to return the result.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [subscribeManagedEventSync](arkts-mdm-adminmanager-subscribemanagedeventsync-f.md#subscribemanagedeventsync-1)

**Required permissions:** ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT

**Model restriction:** This API can be used only in the stage model.

<!--Device-adminManager-function subscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>, callback: AsyncCallback<void>): void--><!--Device-adminManager-function subscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| managedEvents | Array&lt;ManagedEvent&gt; | Yes | Array of events to subscribe to. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback invoked to return the result. If the operation is successful,**err** is **null**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200008](../errorcode-enterpriseDeviceManager.md#9200008-invalid-system-subscription-event) | The specified system event is invalid. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
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

adminManager.subscribeManagedEvent(wantTemp, events, (err) => {
  if (err) {
    console.error(`Failed to subscribe managed event. Code: ${err.code}, message: ${err.message}`);
    return;
  }
  console.info('Succeeded in subscribing managed event');
});

```


<a id="subscribemanagedevent-1"></a>
## subscribeManagedEvent

```TypeScript
function subscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>): Promise<void>
```

Subscribes to system management events. This API uses a promise to return the result.

**Since:** 9

**Deprecated since:** 26.0.0

**Substitutes:** [subscribeManagedEventSync](arkts-mdm-adminmanager-subscribemanagedeventsync-f.md#subscribemanagedeventsync-1)

**Required permissions:** ohos.permission.ENTERPRISE_SUBSCRIBE_MANAGED_EVENT

**Model restriction:** This API can be used only in the stage model.

<!--Device-adminManager-function subscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>): Promise<void>--><!--Device-adminManager-function subscribeManagedEvent(admin: Want, managedEvents: Array<ManagedEvent>): Promise<void>-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| managedEvents | Array&lt;ManagedEvent&gt; | Yes | Array of events to subscribe to. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. When a system event fails to be subscribed to, an error object is thrown. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200008](../errorcode-enterpriseDeviceManager.md#9200008-invalid-system-subscription-event) | The specified system event is invalid. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { adminManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
let events: Array<adminManager.ManagedEvent> = [adminManager.ManagedEvent.MANAGED_EVENT_BUNDLE_ADDED, adminManager.ManagedEvent.MANAGED_EVENT_BUNDLE_REMOVED];

adminManager.subscribeManagedEvent(wantTemp, events).then(() => {
}).catch((err: BusinessError) => {
  console.error(`Failed to subscribe managed event. Code: ${err.code}, message: ${err.message}`);
})

```

