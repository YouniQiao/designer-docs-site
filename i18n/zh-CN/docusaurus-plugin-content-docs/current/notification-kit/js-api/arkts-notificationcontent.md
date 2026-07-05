# notificationContent

## 汇总

### 接口

| 名称 | 描述 |
| --- | --- |
| [NotificationBasicContent](arkts-notificationbasiccontent-i.md) | 描述普通文本通知。 |
| [NotificationButton](arkts-notificationbutton-i.md) | 描述通知按钮。 |
| [NotificationCapsule](arkts-notificationcapsule-i.md) | 描述通知胶囊。 |
| [NotificationContent](arkts-notificationcontent-i.md) | 通知内容。 |
| <!--DelRow-->[NotificationIconButton](arkts-notificationiconbutton-i.md) | 描述系统通知按钮。 |
| <!--DelRow-->[NotificationLiveViewContent](arkts-notificationliveviewcontent-i.md) | 描述普通实况通知。 |
| [NotificationLongTextContent](arkts-notificationlongtextcontent-i.md) | 描述长文本通知。继承自[NotificationBasicContent]{@link NotificationBasicContent}。 > **说明：** > > 实际显示效果依赖于设备能力和通知中心UI样式。 |
| [NotificationMultiLineContent](arkts-notificationmultilinecontent-i.md) | 描述多行文本通知。继承自[NotificationBasicContent]{@link NotificationBasicContent}。 > **说明：** > > - 当该类型通知与其他通知形成组通知时，该通知显示默认与[普通文本]{@link NotificationBasicContent}相同。展开组通知后，标题显示为展开时的标题`longTitle`，多行文本内容`lines`多行显 > 示。 当该类型通知单独呈现时，该通知标题显示为展开时的标题`longTitle`，多行文本内容`lines`多行显示。 > - 实际显示效果依赖于设备能力和通知中心UI样式。 |
| [NotificationPictureContent](arkts-notificationpicturecontent-i.md) | 描述附有图片的通知。继承自[NotificationBasicContent]{@link NotificationBasicContent}。 > **说明：** > > 实际显示效果依赖于设备能力和通知中心UI样式。 |
| [NotificationProgress](arkts-notificationprogress-i.md) | 描述通知进度。 |
| [NotificationSystemLiveViewContent](arkts-notificationsystemliveviewcontent-i.md) | 描述系统实况窗通知内容。不支持三方应用直接创建该类型通知，可以由系统代理创建系统实况窗类型通知后，三方应用发布同ID的通知来更新指定内容。继承自 [NotificationBasicContent]{@link NotificationBasicContent}。 |
| [NotificationTime](arkts-notificationtime-i.md) | 描述通知计时信息。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[LiveViewStatus](arkts-liveviewstatus-e.md) | 描述普通实况通知的状态。 |
| <!--DelRow-->[LiveViewTypes](arkts-liveviewtypes-e.md) | 描述实况通知的类型。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[IconType](arkts-icontype-t.md) | 描述图标的类型。 |

