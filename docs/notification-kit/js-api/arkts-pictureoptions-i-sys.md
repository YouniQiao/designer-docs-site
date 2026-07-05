# PictureOptions

实况通知图片配置项。

**Since:** 26.0.0

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## preparseLiveViewPicList

```TypeScript
preparseLiveViewPicList?: string[]
```

订阅普通实况类型通知中 [NotificationLiveViewContent]./notification/notificationContent:NotificationLiveViewContent的extraInfo中的 图片信息。入参为extraInfo中需要解析为pixelMap格式的图片文件名的Key。<br>当应用发布普通实况类型通知时，通过 [onConsume]./notification/notificationSubscriber:NotificationSubscriber.onConsume将解析后的图片信息回调给订阅者， 解析后的图片信息存放于NotificationLiveViewContent的pictureInfo内。

**Type:** string[]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

