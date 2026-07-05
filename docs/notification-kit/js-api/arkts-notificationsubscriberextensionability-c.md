# NotificationSubscriberExtensionAbility

NotificationSubscriberExtensionAbility 是通知订阅者扩展能力的基类，提供通知订阅的相关功能。 > **说明：** > > 本模块接口仅可在Stage模型下使用。

**Since:** 22

**System capability:** SystemCapability.Notification.Notification

## Modules to Import

```TypeScript
import { NotificationSubscriberExtensionAbility } from '@kit.NotificationKit';
```

## onCancelMessages

```TypeScript
onCancelMessages(hashCodes: Array<string>): void
```

取消通知时的回调。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hashCodes | Array&lt;string> | Yes | 要取消的通知的哈希码列表。 |

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

通知订阅扩展被销毁时的回调。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

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

收到通知时回调。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| notificationInfo | NotificationInfo | Yes | 通知订阅扩展能力中  [onReceiveMessage](arkts-notificationsubscriberextensionability-c.md#onReceiveMessage)  回调的通知信息。 |

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

NotificationSubscriberExtensionAbility的上下文环境。

**Type:** NotificationSubscriberExtensionContext

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

