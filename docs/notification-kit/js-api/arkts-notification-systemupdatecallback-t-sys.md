# SystemUpdateCallback (System API)

```TypeScript
export type SystemUpdateCallback = (data: SubscribeCallbackData) => void
```

Defines the SystemUpdateCallback callback.type SystemUpdateCallback = (data: SubscribeCallbackData) => void

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-unnamed-export type SystemUpdateCallback = (data: SubscribeCallbackData) => void--><!--Device-unnamed-export type SystemUpdateCallback = (data: SubscribeCallbackData) => void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | [SubscribeCallbackData](arkts-notification-notificationsubscribe-subscribecallbackdata-t-sys.md) | Yes | -Notification information that carries the system property value. |

