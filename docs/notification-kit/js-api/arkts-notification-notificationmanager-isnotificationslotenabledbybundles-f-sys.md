# isNotificationSlotEnabledByBundles (System API)

## Modules to Import

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
```

<a id="isnotificationslotenabledbybundles"></a>
## isNotificationSlotEnabledByBundles

```TypeScript
function isNotificationSlotEnabledByBundles(bundles: Array<BundleOption>, type: SlotType): Promise<Map<BundleOption, boolean>>
```

Checks whether a notification slot type is enabled for the specified applications in batch. This API uses a promise to return the result.

**Since:** 26.0.0

**Required permissions:** ohos.permission.NOTIFICATION_CONTROLLER

<!--Device-notificationManager-function isNotificationSlotEnabledByBundles(bundles: Array<BundleOption>, type: SlotType): Promise<Map<BundleOption, boolean>>--><!--Device-notificationManager-function isNotificationSlotEnabledByBundles(bundles: Array<BundleOption>, type: SlotType): Promise<Map<BundleOption, boolean>>-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundles | Array&lt;BundleOption&gt; | Yes | Array of bundle information of the applications.<br>The maximum length is 1000 and cannot be empty. |
| type | [SlotType](arkts-notification-notificationmanager-slottype-e-sys.md) | Yes | Notification slot type. All bundles share the same slot type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Map&lt;BundleOption, boolean&gt;&gt; | Promise used to return the result. The key is the bundle information, and the value **true** means that the notification slot type is enabled, and **false** means the opposite. Bundles whose slot has not been created will not appear in the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not system application to call the interface. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [1600001](../errorcode-notification.md#1600001-internal-error) | Internal error. |
| [1600003](../errorcode-notification.md#1600003-failed-to-connect-to-the-notification-service) | Failed to connect to the service. |

