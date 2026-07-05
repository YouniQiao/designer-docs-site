# NotificationCapsule

描述通知胶囊。

**起始版本：** 11

**系统能力：** SystemCapability.Notification.Notification

## backgroundColor

```TypeScript
backgroundColor?: string
```

背景颜色。

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.Notification.Notification

## capsuleButtons

```TypeScript
capsuleButtons?: Array<NotificationIconButton>
```

即时任务类实况胶囊的按钮（最多支持2个）。默认为空。

**类型：** Array<NotificationIconButton>

**起始版本：** 18

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

## icon

```TypeScript
icon?: image.PixelMap
```

胶囊图片。图标像素的总字节数不超过192KB（图标像素的总字节数通过 [getPixelBytesNumber](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#getPixelBytesNumber)获取）， 建议图标像素长宽为128*128。实际显示效果依赖于设备能力和通知中心UI样式。

**类型：** image.PixelMap

**起始版本：** 11

**系统能力：** SystemCapability.Notification.Notification

## time

```TypeScript
time?: int
```

即时任务类实况胶囊展示时长（单位：秒）。默认值为0。

**类型：** int

**起始版本：** 18

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

## title

```TypeScript
title?: string
```

胶囊标题。大小不超过200字节，超出部分会被截断。

**类型：** string

**起始版本：** 11

**系统能力：** SystemCapability.Notification.Notification

## content

```TypeScript
content?: string
```

胶囊的拓展文本。默认为空。

**类型：** string

**起始版本：** 12

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

