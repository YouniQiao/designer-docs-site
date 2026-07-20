# CommonEventPublishData

The **CommonEventPublishData** module provides APIs for defining common event content and attributes.

> **NOTE**  
>  
> If there is no restriction, any application can subscribe to common events and read related information. In this  
> case, sensitive information should not be carried in common events. The **subscriberPermissions** and  
> **bundleName** parameters of this module can be used to restrict the receiving scope of common events.

**Since:** 7

<!--Device-unnamed-export interface CommonEventPublishData--><!--Device-unnamed-export interface CommonEventPublishData-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## bundleName

```TypeScript
bundleName?: string
```

Bundle name of the subscriber that can receive the common event.

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventPublishData-bundleName?: string--><!--Device-CommonEventPublishData-bundleName?: string-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## code

```TypeScript
code?: number
```

Common event data transferred by the publisher. The default value is **0**.

**Type:** number

**Default:** 0

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventPublishData-code?: int--><!--Device-CommonEventPublishData-code?: int-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## data

```TypeScript
data?: string
```

Common event data transferred by the publisher. The data size cannot exceed 64 KB.

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventPublishData-data?: string--><!--Device-CommonEventPublishData-data?: string-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## isOrdered

```TypeScript
isOrdered?: boolean
```

Whether the common event is an ordered one. The default value is **false**.

- **true**: This event is an ordered common event. Based on the priority set by the subscriber, the common event is preferentially sent to the subscriber with a higher priority. After the subscriber successfully receives the event,the public event is sent to the subscriber with a lower priority. Subscribers with the same priority receive common events in a random order.  
- **false**: This event is an unordered common event. Whether subscribers receive the event is not considered, and the common event which subscribers receive may not comply with the subscription sequence.

**Type:** boolean

**Default:** false

**Since:** 7

<!--Device-CommonEventPublishData-isOrdered?: boolean--><!--Device-CommonEventPublishData-isOrdered?: boolean-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## isSticky

```TypeScript
isSticky?: boolean
```

Whether the common event is a sticky one. The default value is **false**.

- **true**: This event is a sticky common event, which allows subscribers to receive common events that have been sent before subscription.  
- **false**: This event is not a sticky common event, which allows subscribers to receive common events sent after subscription.

Only system applications and system services are allowed to send sticky events.

**Required Permissions**:[ohos.permission.COMMONEVENT_STICKY](../../../../security/AccessToken/permissions-for-all.md#ohospermissioncommonevent_sticky)

**Type:** boolean

**Default:** false

**Since:** 7

**Required permissions:** ohos.permission.COMMONEVENT_STICKY

<!--Device-CommonEventPublishData-isSticky?: boolean--><!--Device-CommonEventPublishData-isSticky?: boolean-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## parameters

```TypeScript
parameters?: { [key: string]: any }
```

Additional information about the common event transferred by the publisher.

**Type:** { [key: string]: any }

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventPublishData-parameters?: { [key: string]: any }--><!--Device-CommonEventPublishData-parameters?: { [key: string]: any }-End-->

**System capability:** SystemCapability.Notification.CommonEvent

## subscriberPermissions

```TypeScript
subscriberPermissions?: Array<string>
```

Permissions required for subscribers to receive the common event.

**Type:** Array<string>

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonEventPublishData-subscriberPermissions?: Array<string>--><!--Device-CommonEventPublishData-subscriberPermissions?: Array<string>-End-->

**System capability:** SystemCapability.Notification.CommonEvent

