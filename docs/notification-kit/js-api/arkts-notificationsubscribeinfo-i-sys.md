# NotificationSubscribeInfo

通知发布者的信息。 > **说明：** > > 本模块为系统接口。

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## filterLimit

```TypeScript
filterLimit?: long
```

通知过滤范围。默认值为0。取值范围包括： - 0：不进行任何过滤，订阅全部通知。 - 1：将渠道类型为[SOCIAL_COMMUNICATION]./../@ohos.notificationManager:notificationManager.SlotType且 [userInput](arkts-notificationactionbutton-i.md#NotificationActionButton)为空的通知过滤掉。 - 2：将渠道类型为[SOCIAL_COMMUNICATION]./../@ohos.notificationManager:notificationManager.SlotType且 [userInput](arkts-notificationactionbutton-i.md#NotificationActionButton)不为空的通知过滤掉。

**Type:** long

**Since:** 18

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## slotTypes

```TypeScript
slotTypes?: Array<notificationManager.SlotType>
```

通知渠道类型。 不传递该参数时，默认订阅所有渠道类型的通知。

**Type:** Array<notificationManager.SlotType>

**Since:** 18

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## deviceType

```TypeScript
deviceType?: string
```

设备类型。不传递该参数时，默认订阅当前设备的通知。根据[设备信息]./../@ohos.deviceInfo:deviceInfo获取。

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## enableClassification

```TypeScript
enableClassification?: boolean
```

是否启用通知分类。 - true：表示启用。 - false：表示禁用。默认值为false。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## pictureOptions

```TypeScript
pictureOptions?: PictureOptions
```

实况通知图片配置项。

**Type:** PictureOptions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## needSilentReplayOnSubscribe

```TypeScript
needSilentReplayOnSubscribe?: boolean
```

是否启用订阅时的静默重放。 - true：表示启用。 - false：表示禁用。默认值为false。 启用后，首次订阅时会以静默方式重新推送历史通知，不会出现响铃和振动提醒。

**Type:** boolean

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## bundleNames

```TypeScript
bundleNames?: Array<string>
```

应用Bundle名称。 不传递该参数时，默认订阅所有应用的通知。

**Type:** Array<string>

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## voiceContentOptions

```TypeScript
voiceContentOptions?: VoiceContentOptions
```

订阅通知的语音播报内容配置项。

**Type:** VoiceContentOptions

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## userId

```TypeScript
userId?: int
```

用户ID。 不传递该参数时，默认订阅当前用户ID的通知。

**Type:** int

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

