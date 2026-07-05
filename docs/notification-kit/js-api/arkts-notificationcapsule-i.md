# NotificationCapsule

描述通知胶囊。

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## backgroundColor

```TypeScript
backgroundColor?: string
```

背景颜色。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## capsuleButtons

```TypeScript
capsuleButtons?: Array<NotificationIconButton>
```

即时任务类实况胶囊的按钮（最多支持2个）。默认为空。

**Type:** Array<NotificationIconButton>

**Since:** 18

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## icon

```TypeScript
icon?: image.PixelMap
```

胶囊图片。图标像素的总字节数不超过192KB（图标像素的总字节数通过 [getPixelBytesNumber](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#getPixelBytesNumber)获取）， 建议图标像素长宽为128*128。实际显示效果依赖于设备能力和通知中心UI样式。

**Type:** image.PixelMap

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## time

```TypeScript
time?: int
```

即时任务类实况胶囊展示时长（单位：秒）。默认值为0。

**Type:** int

**Since:** 18

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## title

```TypeScript
title?: string
```

胶囊标题。大小不超过200字节，超出部分会被截断。

**Type:** string

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

## content

```TypeScript
content?: string
```

胶囊的拓展文本。默认为空。

**Type:** string

**Since:** 12

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

