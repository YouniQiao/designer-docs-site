# NotificationSubscriberExtensionAbility

NotificationSubscriberExtensionAbility is the base class for notification subscription extensions, providing the core functionality for subscribing to notifications.

> **NOTE**  
>  
> The APIs of this module can be used only in the stage model.

**Since:** 22

<!--Device-unnamed-declare class NotificationSubscriberExtensionAbility--><!--Device-unnamed-declare class NotificationSubscriberExtensionAbility-End-->

**System capability:** SystemCapability.Notification.Notification

## Modules to Import

```TypeScript
import { NotificationSubscriberExtensionAbility } from '@kit.NotificationKit';
```

<a id="oncancelmessages"></a>
## onCancelMessages

```TypeScript
onCancelMessages(hashCodes: Array<string>): void
```

Called when notifications are canceled.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

<!--Device-NotificationSubscriberExtensionAbility-onCancelMessages(hashCodes: Array<string>): void--><!--Device-NotificationSubscriberExtensionAbility-onCancelMessages(hashCodes: Array<string>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hashCodes | Array&lt;string&gt; | Yes | Array of hash codes representing the notifications to be canceled. |

**Example**

```TypeScript
const TAG = 'NotificationSubscriberExtAbility';

export default class NotificationSubscriberExtAbility extends NotificationSubscriberExtensionAbility {
  onCancelMessages(hashCodes: Array<string>): void {
    console.info(`${TAG} onCancelMessages. hashCodes: ${JSON.stringify(hashCodes)}`);
  }
}

```

<a id="ondestroy"></a>
## onDestroy

```TypeScript
onDestroy(): void
```

Called when the notification subscription extension is destroyed.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

<!--Device-NotificationSubscriberExtensionAbility-onDestroy(): void--><!--Device-NotificationSubscriberExtensionAbility-onDestroy(): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Example**

```TypeScript
const TAG = 'NotificationSubscriberExtAbility';

export default class NotificationSubscriberExtAbility extends NotificationSubscriberExtensionAbility {
  onDestroy(): void {
    console.info(`${TAG} onDestroy`);
  }
}

```

<a id="onreceivemessage"></a>
## onReceiveMessage

```TypeScript
onReceiveMessage(notificationInfo: NotificationInfo): void
```

Called when a notification is received.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

<!--Device-NotificationSubscriberExtensionAbility-onReceiveMessage(notificationInfo: NotificationInfo): void--><!--Device-NotificationSubscriberExtensionAbility-onReceiveMessage(notificationInfo: NotificationInfo): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| notificationInfo | [NotificationInfo](arkts-notification-notificationinfo-i.md) | Yes | Notification information delivered to the [onReceiveMessage](arkts-notification-application-notificationsubscriberextensionability-notificationsubscriberextensionability-c.md#onreceivemessage-1)callback of ExtensionAbility for notification subscriptions. |

**Example**

```TypeScript
const TAG = 'NotificationSubscriberExtAbility';

export default class NotificationSubscriberExtAbility extends NotificationSubscriberExtensionAbility {
  onReceiveMessage(notificationInfo: notificationExtensionSubscription.NotificationInfo): void {
    console.info(`${TAG} onReceiveMessage. notificationInfo: ${JSON.stringify(notificationInfo)}`);
  }
}

```

## context

```TypeScript
context: NotificationSubscriberExtensionContext
```

Context for the NotificationSubscriberExtensionAbility.

**Type:** NotificationSubscriberExtensionContext

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

<!--Device-NotificationSubscriberExtensionAbility-context: NotificationSubscriberExtensionContext--><!--Device-NotificationSubscriberExtensionAbility-context: NotificationSubscriberExtensionContext-End-->

**System capability:** SystemCapability.Notification.Notification

