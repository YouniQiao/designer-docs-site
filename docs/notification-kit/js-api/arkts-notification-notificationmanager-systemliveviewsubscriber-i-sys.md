# SystemLiveViewSubscriber (System API)

Subscriber of the system live view notification.

**Since:** 11

<!--Device-notificationManager-export interface SystemLiveViewSubscriber--><!--Device-notificationManager-export interface SystemLiveViewSubscriber-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
```

## onResponse

```TypeScript
onResponse?: (notificationId: number, buttonOptions: ButtonOptions) => void
```

Callback when the button is touched.

**Type:** (notificationId: number, buttonOptions: ButtonOptions) => void

**Since:** 11

<!--Device-SystemLiveViewSubscriber-onResponse?: (notificationId: int, buttonOptions: ButtonOptions) => void--><!--Device-SystemLiveViewSubscriber-onResponse?: (notificationId: int, buttonOptions: ButtonOptions) => void-End-->

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

