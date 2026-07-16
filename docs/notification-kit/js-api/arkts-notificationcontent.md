# notificationContent

## Summary

### Interfaces

| Name | Description |
| --- | --- |
| [NotificationBasicContent](arkts-notification-notificationbasiccontent-i.md) | Describes the basic text notification, which is used to display the title and body content. It serves as thebasic content structure for other notification types. Other notification types (such as long text, multi-linetext, picture, and live view) inherit this API and extend their own specific fields on this basis. |
| [NotificationButton](arkts-notification-notificationbutton-i.md) | Describes the notification button, which is used to display an interactive button in the live view.&gt; **NOTE**&gt;&gt; The actual display effect depends on the device capabilities and the notification center UI style. |
| [NotificationCapsule](arkts-notification-notificationcapsule-i.md) | Describes the notification capsule, which is used to display the capsule form in the live view.&gt; **NOTE**&gt;&gt; The actual display effect depends on the device capabilities and the notification center UI style. |
| [NotificationContent](arkts-notification-notificationcontent-i.md) | Describes the notification contents. |
| [NotificationLongTextContent](arkts-notification-notificationlongtextcontent-i.md) | Describes the long text notification. This API is inherited from NotificationBasicContent.&gt; **NOTE**&gt;&gt; - When this notification type forms a group notification with other notifications, its display effect defaults&gt; to the collapsed state, and the displayed title and body are the **title** and **text** inherited from&gt; NotificationBasicContent. When this notification type is displayed alone and does not form a group notification&gt; with other notifications, its display effect defaults to the expanded state, where the displayed title is the&gt; expanded title **expandedTitle**, and the displayed body content is the long text **longText**.&gt;&gt; - When a user taps a group notification to view the notification details, the display effect of this&gt; notification changes to the expanded state.&gt;&gt; - The actual display effect depends on the device capabilities and the notification center UI style. |
| [NotificationMultiLineContent](arkts-notification-notificationmultilinecontent-i.md) | Describes the multi-line text notification. This API is inherited from NotificationBasicContent.&gt; **NOTE**&gt;&gt; - When this notification type forms a group notification with other notifications, its display effect defaults&gt; to the collapsed state, and the displayed title and body are the **title** and **text** inherited from&gt; NotificationBasicContent. When this notification type is displayed alone and does not form a group notification&gt; with other notifications, its display effect defaults to the expanded state, where the displayed title is the&gt; expanded title **longTitle**, and the multi-line text content **lines** is displayed as the body.&gt;&gt; - When a user taps a group notification to view the notification details, the display effect of this&gt; notification changes to the expanded state.&gt;&gt; - The actual display effect depends on the device capabilities and the notification center UI style. |
| [NotificationPictureContent](arkts-notification-notificationpicturecontent-i.md) | Describes the picture-attached notification. This API is inherited from NotificationBasicContent.&gt; **NOTE**&gt;&gt; - When this notification type forms a group notification with other notifications, its display effect defaults&gt; to the collapsed state, and the displayed title and body are the **title** and **text** inherited from&gt; NotificationBasicContent. When this notification type is displayed alone and does not form a group notification&gt; with other notifications, its display effect defaults to the expanded state, where the displayed title is the&gt; expanded title **expandedTitle**, and the displayed body is the **text** inherited from&gt; NotificationBasicContent and the picture content **picture** of this type.&gt;&gt; - When a user taps a group notification to view the notification details, the display effect of this&gt; notification changes to the expanded state.&gt;&gt; - The actual display effect depends on the device capabilities and the notification center UI style. |
| [NotificationProgress](arkts-notification-notificationprogress-i.md) | Describes the notification progress, which is used to display progress bar information in the live view.&gt; **NOTE**&gt;&gt; The actual display effect depends on the device capabilities and the notification center UI style. |
| [NotificationSystemLiveViewContent](arkts-notification-notificationsystemliveviewcontent-i.md) | Describes the system live view notification content, which is used to display real-time status information inthe live view. Third-party applications are not supported to directly create this notification type. After thesystem proxy creates a system live view notification, a third-party application can publish a notification withthe same ID to update the specified content. This API is inherited from NotificationBasicContent.&gt; **NOTE**&gt;&gt; The actual display effect depends on the device capabilities and the notification center UI style. |
| [NotificationTime](arkts-notification-notificationtime-i.md) | Describes the notification timing information.&gt; **NOTE**&gt;&gt; The actual display effect depends on the device capabilities and the notification center UI style. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [NotificationBasicContent](arkts-notification-notificationbasiccontent-i-sys.md) | Describes the basic text notification, which is used to display the title and body content. It serves as thebasic content structure for other notification types. Other notification types (such as long text, multi-linetext, picture, and live view) inherit this API and extend their own specific fields on this basis. |
| [NotificationCapsule](arkts-notification-notificationcapsule-i-sys.md) | Describes the notification capsule, which is used to display the capsule form in the live view.&gt; **NOTE**&gt;&gt; The actual display effect depends on the device capabilities and the notification center UI style. |
| [NotificationContent](arkts-notification-notificationcontent-i-sys.md) | Describes the notification contents. |
| [NotificationIconButton](arkts-notification-notificationiconbutton-i-sys.md) | Describes the information of a system notification button. |
| [NotificationLiveViewContent](arkts-notification-notificationliveviewcontent-i-sys.md) | Describes the common live view. |
| [NotificationMultiLineContent](arkts-notification-notificationmultilinecontent-i-sys.md) | Describes the multi-line text notification. This API is inherited from NotificationBasicContent.&gt; **NOTE**&gt;&gt; - When this notification type forms a group notification with other notifications, its display effect defaults&gt; to the collapsed state, and the displayed title and body are the **title** and **text** inherited from&gt; NotificationBasicContent. When this notification type is displayed alone and does not form a group notification&gt; with other notifications, its display effect defaults to the expanded state, where the displayed title is the&gt; expanded title **longTitle**, and the multi-line text content **lines** is displayed as the body.&gt;&gt; - When a user taps a group notification to view the notification details, the display effect of this&gt; notification changes to the expanded state.&gt;&gt; - The actual display effect depends on the device capabilities and the notification center UI style. |
| [NotificationSystemLiveViewContent](arkts-notification-notificationsystemliveviewcontent-i-sys.md) | Describes the system live view notification content, which is used to display real-time status information inthe live view. Third-party applications are not supported to directly create this notification type. After thesystem proxy creates a system live view notification, a third-party application can publish a notification withthe same ID to update the specified content. This API is inherited from NotificationBasicContent.&gt; **NOTE**&gt;&gt; The actual display effect depends on the device capabilities and the notification center UI style. |
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

