# PictureOptions (System API)

Describes Live notification image configuration item.

**Since:** 26.0.0

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## preparseLiveViewPicList

```TypeScript
preparseLiveViewPicList?: string[]
```

Subscribes to parse the image information in the extraInfo of [NotificationLiveViewContent](arkts-notification-notificationliveviewcontent-i-sys.md#notificationliveviewcontent) for live view notifications. The input parameter is the key of the image filename in extraInfo that needs to be parsed into PixelMap format. When an application publishes a live view notification, the parsed image information is called back to the subscriber via [onConsume](arkts-notification-notificationsubscriber-i-sys.md#onconsume), and the parsed image information is stored in the pictureInfo of NotificationLiveViewContent.

**Type:** string[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

