# notificationContent

## Summary

### Interfaces

| Name | Description |
| --- | --- |
| [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md) | Describes the normal text notification. |
| [NotificationButton](arkts-notification-notificationbutton-i.md) | Describes the notification button. |
| [NotificationCapsule](arkts-notification-notificationcapsule-i.md) | Describe the notification capsule. |
| [NotificationContent](arkts-notification-notificationcontent-i.md) | Describes the notification contents. |
| [NotificationLongTextContent](arkts-notification-notificationlongtextcontent-i.md) | Describes the long text notification. This API is inherited from [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md).&gt; **NOTE**&gt;&gt; The display effect depends on the device capability and notification center UI style. |
| [NotificationMultiLineContent](arkts-notification-notificationmultilinecontent-i.md) | Describes the multi-line text notification. This API is inherited from [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md).&gt; **NOTE**&gt;&gt; - When the multi-line text notification and another notification form a group notification, the group notification &gt; is displayed as a [normal text notification](arkts-notification-notificationbasiccontent-i.md) by default. After the group &gt; notification is expanded, the value of **longTitle** is used as the title, and the value of **lines** is used as &gt; the multi-line text content.When the multi-line text notification is displayed independently, the value of **longTitle** is used as the title, and the value of **lines** is used as the multi-line text content.&gt; - The display effect depends on the device capability and notification center UI style. |
| [NotificationPictureContent](arkts-notification-notificationpicturecontent-i.md) | Describes the picture-attached notification. This API is inherited from [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md).&gt; **NOTE**&gt;&gt; The display effect depends on the device capability and notification center UI style. |
| [NotificationProgress](arkts-notification-notificationprogress-i.md) | Describes the notification progress. |
| [NotificationSystemLiveViewContent](arkts-notification-notificationsystemliveviewcontent-i.md) | Describes the system live view notification. A third-party application cannot directly create a notification of this type. After the system proxy creates a system live view, the third-party application releases a notification with thesame ID to update the specified content. This API is inherited from [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md). |
| [NotificationTime](arkts-notification-notificationtime-i.md) | Describes the notification timing information. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [NotificationBasicContent](arkts-notification-notificationbasiccontent-i-sys.md) | Describes the normal text notification. |
| [NotificationCapsule](arkts-notification-notificationcapsule-i-sys.md) | Describe the notification capsule. |
| [NotificationContent](arkts-notification-notificationcontent-i-sys.md) | Describes the notification contents. |
| [NotificationIconButton](arkts-notification-notificationiconbutton-i-sys.md) | Describes the information of a system notification button. |
| [NotificationLiveViewContent](arkts-notification-notificationliveviewcontent-i-sys.md) | Describes the common live view. |
| [NotificationMultiLineContent](arkts-notification-notificationmultilinecontent-i-sys.md) | Describes the multi-line text notification. This API is inherited from [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md).&gt; **NOTE**&gt;&gt; - When the multi-line text notification and another notification form a group notification, the group notification &gt; is displayed as a [normal text notification](arkts-notification-notificationbasiccontent-i.md) by default. After the group &gt; notification is expanded, the value of **longTitle** is used as the title, and the value of **lines** is used as &gt; the multi-line text content.When the multi-line text notification is displayed independently, the value of **longTitle** is used as the title, and the value of **lines** is used as the multi-line text content.&gt; - The display effect depends on the device capability and notification center UI style. |
| [NotificationSystemLiveViewContent](arkts-notification-notificationsystemliveviewcontent-i-sys.md) | Describes the system live view notification. A third-party application cannot directly create a notification of this type. After the system proxy creates a system live view, the third-party application releases a notification with thesame ID to update the specified content. This API is inherited from [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md). |
<!--DelEnd-->

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [LiveViewStatus](arkts-notification-liveviewstatus-e-sys.md) | Enumerates the statuses of the common live view. |
| [LiveViewTypes](arkts-notification-liveviewtypes-e-sys.md) | Enumerates live view types. |
<!--DelEnd-->

<!--Del-->
### Types（系统接口）

| Name | Description |
| --- | --- |
| [IconType](arkts-notification-icontype-t-sys.md) | Describes the icon types. |
<!--DelEnd-->

