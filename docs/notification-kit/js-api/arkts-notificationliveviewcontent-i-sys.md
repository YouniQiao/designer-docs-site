# NotificationLiveViewContent

描述普通实况通知。

**Inheritance:** NotificationLiveViewContentextends: NotificationBasicContent.

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## isLocalUpdateOnly

```TypeScript
isLocalUpdateOnly?: boolean
```

实况窗是否只在本地更新。默认为false。 - true：是。 - false：否。

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## extensionWantAgent

```TypeScript
extensionWantAgent?: WantAgent
```

点击辅助区的跳转动作。默认为空。

**Type:** WantAgent

**Since:** 20

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## pictureInfo

```TypeScript
pictureInfo?: Record<string, Array<image.PixelMap>>
```

实况通知附加内容中的图片信息。默认为空。

**Type:** Record<string, Array<image.PixelMap>>

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## version

```TypeScript
version?: int
```

通知版本号（如果数据库存储版本号为0xffffffff，则本次更新和结束不校验版本号大小，否则需要校验本次版本号>数据库存储版本号）。不填默认为0xffffffff。

**Type:** int

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## extraInfo

```TypeScript
extraInfo?: Record<string, Object>
```

实况通知附加内容。默认为空。

**Type:** Record<string, Object>

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

```TypeScript
extraInfo?: Record<string, RecordData>
```

实况通知附加内容。默认为空。

**Type:** Record<string, RecordData>

**Since:** 23

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## status

```TypeScript
status: LiveViewStatus
```

通知状态。

**Type:** LiveViewStatus

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

