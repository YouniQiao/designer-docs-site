# CommonEventData

Describes the data of a common event.

**Since:** 7

**System capability:** SystemCapability.Notification.CommonEvent

## bundleName

```TypeScript
bundleName?: string
```

Bundle name. The default value is an empty string.

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Notification.CommonEvent

## code

```TypeScript
code?: number
```

Common event data received by the subscriber. The value of this field is the same as that of the **code** field in [CommonEventPublishData](arkts-basicservices-commoneventpublishdata-i.md#commoneventpublishdata) when the publisher uses [commonEventManager.publish](arkts-basicservices-publish-f.md#publish-2) to publish a common event. The default value is **0**.

**Type:** number

**Default:** 0

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Notification.CommonEvent

## data

```TypeScript
data?: string
```

Common event data received by the subscriber. The value of this field is the same as that of the **data** field in [CommonEventPublishData](arkts-basicservices-commoneventpublishdata-i.md#commoneventpublishdata) when the publisher uses [commonEventManager.publish](arkts-basicservices-publish-f.md#publish-2) to publish a common event.

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Notification.CommonEvent

## event

```TypeScript
event: string
```

Name of the common event that is being received.

**Type:** string

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Notification.CommonEvent

## parameters

```TypeScript
parameters?: { [key: string]: any }
```

Additional information about the common event received by the subscriber. The value of this field is the same as that of the **parameters** field in [CommonEventPublishData](arkts-basicservices-commoneventpublishdata-i.md#commoneventpublishdata) when the publisher uses [commonEventManager.publish](arkts-basicservices-publish-f.md#publish-2) to publish a common event.

**Type:** { [key: string]: any }

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Notification.CommonEvent

