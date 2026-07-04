# NotificationLiveViewContent (System API)

Describes the common live view.

**Inheritance/Implementation:** NotificationLiveViewContent extends [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md#notificationbasiccontent)

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## extensionWantAgent

```TypeScript
extensionWantAgent?: WantAgent
```

Redirection by tapping in the auxiliary area. This parameter is left empty by default.

**Type:** WantAgent

**Since:** 20

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## extraInfo

```TypeScript
extraInfo?: Record<string, Object>
```

Extra information of the live view. This parameter is left empty by default.

**Type:** Record<string, Object>

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## isLocalUpdateOnly

```TypeScript
isLocalUpdateOnly?: boolean
```

Whether the live view is updated only locally. The default value is **false**. - **true**: Yes. - **false**: No.

**Type:** boolean

**Since:** 12

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## pictureInfo

```TypeScript
pictureInfo?: Record<string, Array<image.PixelMap>>
```

Extra image information of the live view. This parameter is left empty by default.

**Type:** Record<string, Array<image.PixelMap>>

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## status

```TypeScript
status: LiveViewStatus
```

Notification status.

**Type:** LiveViewStatus

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## version

```TypeScript
version?: number
```

If the version number stored in the database is not **0xffffffff**, the version number needs to be verified when the live view is updated or ended to ensure that the current version number is greater than the version number stored in the database. The default value is **0xffffffff**.

**Type:** number

**Since:** 11

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

