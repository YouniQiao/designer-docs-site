# NotificationBasicContent

描述普通文本通知。

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## structuredText

```TypeScript
structuredText?: Map<string, string>
```

通知结构化字段。当前仅支持服务提醒类短信在通知中心结构化展示。默认为空。（key/value大小不超过512字节，超出部分会被截断，最多支持3对结构化数据，超出部分会被忽略。）

**Type:** Map<string, string>

**Since:** 21

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## additionalText

```TypeScript
additionalText?: string
```

通知附加内容，默认为空，是对通知内容的补充（大小不超过3072字节，超出部分会被截断）。

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## lockscreenPicture

```TypeScript
lockscreenPicture?: image.PixelMap
```

通知在锁屏界面显示的图片，默认为空。当前仅支持实况窗类型通知。图标像素的总字节数不超过192KB（图标像素的总字节数通过 [getPixelBytesNumber](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#getPixelBytesNumber)获取），建议图标像素长宽为128*128。实际显示效果依赖 于设备能力和通知中心UI样式。

**Type:** image.PixelMap

**Since:** 12

**System capability:** SystemCapability.Notification.Notification

## text

```TypeScript
text: string
```

通知内容（不可为空字符串，大小不超过3072字节，超出部分会被截断）。

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## title

```TypeScript
title: string
```

通知标题（不可为空字符串，大小不超过1024字节，超出部分会被截断）。

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

