# NotificationBasicContent

Describes the normal text notification.

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## additionalText

```TypeScript
additionalText?: string
```

Additional information of the notification. It cannot exceed 3,072 bytes. Excess content will be truncated. This
parameter is left empty by default.

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## lockscreenPicture

```TypeScript
lockscreenPicture?: image.PixelMap
```

Picture displayed on the lock screen. This parameter is left empty by default. Currently, only the live view
notification is supported. The total number of the icon pixel bytes cannot exceed 192 KB (which is obtained through
[getPixelBytesNumber](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#getpixelbytesnumber-1)). The recommended icon size
is 128 × 128 pixels. The display effect depends on the device capability and notification center UI style.

**Type:** image.PixelMap

**Since:** 12

**System capability:** SystemCapability.Notification.Notification

## text

```TypeScript
text: string
```

Notification content. It cannot be empty or exceed 3,072 bytes. Excess content will be truncated.

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

## title

```TypeScript
title: string
```

Notification title. It cannot be empty or exceed 1,024 bytes. Excess content will be truncated.

**Type:** string

**Since:** 7

**System capability:** SystemCapability.Notification.Notification

