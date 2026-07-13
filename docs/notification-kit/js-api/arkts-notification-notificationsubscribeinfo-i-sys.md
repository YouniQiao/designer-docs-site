# NotificationSubscribeInfo (System API)

The **NotificationSubscribeInfo** module provides APIs for defining the information about the publisher for
notification subscription.

> **NOTE**
>
> The APIs provided by this module are system APIs.

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## bundleNames

```TypeScript
bundleNames?: Array<string>
```

Bundle names of the applications whose notifications to subscribe to. If this parameter is not specified, the
subscription defaults to notifications from all applications.

**Type:** Array<string>

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## deviceType

```TypeScript
deviceType?: string
```

Device type. If this parameter is not specified, the subscription defaults to notifications from the current
device. The value is obtained based on [device information](../../apis-basic-service-kit/arkts-apis/arkts-deviceinfo.md).

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## enableClassification

```TypeScript
enableClassification?: boolean
```

Whether to enable the notification classification.
- true: enabled.
- false: disabled. The default value is false.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## filterLimit

```TypeScript
filterLimit?: number
```

Notification filtering range. The default value is **0**. The options are as follows:

- **0**: All notifications are included in the subscription.
- **1**: Filter out notifications whose slot type is
[SOCIAL_COMMUNICATION](arkts-notification-slottype-e.md) and
[userInput](arkts-notification-notificationactionbutton-i.md) is empty.
- **2**: Filter out notifications whose slot type is
[SOCIAL_COMMUNICATION](arkts-notification-slottype-e.md) and
[userInput](arkts-notification-notificationactionbutton-i.md) is not empty.

**Type:** number

**Since:** 18

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## needSilentReplayOnSubscribe

```TypeScript
needSilentReplayOnSubscribe?: boolean
```

Whether to enable silent replay during subscription.
- true: enabled.
- false: disabled. The default value is false.
If this function is enabled, historical notifications will be replayed silently when you subscribe to the first
time, without ringing or vibrating.

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## pictureOptions

```TypeScript
pictureOptions?: PictureOptions
```

Live notification image configuration item.

**Type:** PictureOptions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## slotTypes

```TypeScript
slotTypes?: Array<notificationManager.SlotType>
```

Types of the notification slots. If this parameter is not specified, the subscription defaults to notifications of
all slot types.

**Type:** Array<notificationManager.SlotType>

**Since:** 18

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## userId

```TypeScript
userId?: number
```

User ID. If this parameter is not specified, the subscription defaults to notifications from all user IDs.

**Type:** number

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## voiceContentOptions

```TypeScript
voiceContentOptions?: VoiceContentOptions
```

Configuration for voice content subscription options.

**Type:** VoiceContentOptions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

