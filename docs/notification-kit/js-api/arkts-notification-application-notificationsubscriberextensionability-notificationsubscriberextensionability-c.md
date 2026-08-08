# NotificationSubscriberExtensionAbility

NotificationSubscriberExtensionAbility is the base class for notification subscriber extension abilities, providing notification subscription-related functionality. Third-party wearable apps (such as companion applications for watches)implement callback logic by inheriting this class, receiving notification information when notifications are published on the local device and forwarding them to the wearable device via Bluetooth, and receiving callbacks for notification cancellation when local notifications are cancelled and forwarding them to the wearable device to delete the corresponding notifications.

Use this module when your wearable application needs to obtain local notifications and sync them to a paired wearable device. This module is used together with the notificationExtensionSubscription module. This module is responsible for receiving and processing notification data in callbacks, while the notificationExtensionSubscription module is responsible for management operations such as authorization, subscription, and unsubscription.
    **NOTE**  
    
    The initial APIs of this module are supported since API version 22. Newly added APIs will be marked with a superscript  
    to indicate their earliest API version.  
    The APIs of this module can be used only in the stage model.

**Since:** 22

**ArkTS mode:** ArkTS-Dyn since version 22; ArkTS-Sta since version 23.

<!--Device-unnamed-declare class NotificationSubscriberExtensionAbility--><!--Device-unnamed-declare class NotificationSubscriberExtensionAbility-End-->

**System capability:** SystemCapability.Notification.Notification

## onCancelMessages

```TypeScript
onCancelMessages(hashCodes: Array<string>): void
```

Called when notifications are canceled.

**Since:** 22

**ArkTS mode:** ArkTS-Dyn since version 22; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-NotificationSubscriberExtensionAbility-onCancelMessages(hashCodes: Array<string>): void--><!--Device-NotificationSubscriberExtensionAbility-onCancelMessages(hashCodes: Array<string>): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hashCodes | Array&lt;string&gt; | Yes | List of hash codes of the notifications to cancel, obtained through \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_JSDOC\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. |

**Example**

```TypeScript
const TAG = 'NotificationSubscriberExtAbility';

export default class NotificationSubscriberExtAbility extends NotificationSubscriberExtensionAbility {
    onCancelMessages(hashCodes: Array<string>): void {
        console.info(`${TAG} onCancelMessages. hashCodes: ${JSON.stringify(hashCodes)}`);
    }
}
```

## onDestroy

```TypeScript
onDestroy(): void
```

Called when the notification subscription extension is destroyed.

**Since:** 22

**ArkTS mode:** ArkTS-Dyn since version 22; ArkTS-Sta since version 23.

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

## onReceiveMessage

```TypeScript
onReceiveMessage(notificationInfo: NotificationInfo): void
```

Called when a notification is received.

**Since:** 22

**ArkTS mode:** ArkTS-Dyn since version 22; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-NotificationSubscriberExtensionAbility-onReceiveMessage(notificationInfo: NotificationInfo): void--><!--Device-NotificationSubscriberExtensionAbility-onReceiveMessage(notificationInfo: NotificationInfo): void-End-->

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| notificationInfo | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | Callback information about the notification received in the notification subscription extension capability. |

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

**ArkTS mode:** ArkTS-Dyn since version 22; ArkTS-Sta since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-NotificationSubscriberExtensionAbility-context: NotificationSubscriberExtensionContext--><!--Device-NotificationSubscriberExtensionAbility-context: NotificationSubscriberExtensionContext-End-->

**System capability:** SystemCapability.Notification.Notification

