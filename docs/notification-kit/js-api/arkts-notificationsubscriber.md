# notificationSubscriber

## Summary

### Interfaces

| Name | Description |
| --- | --- |
| [BadgeEnabledChangedCallback](arkts-badgeenabledchangedcallback-i.md) | 注册应用角标使能状态变化的回调函数类型。 type BadgeEnabledChangedCallback = (data: EnabledNotificationCallbackData) => void |
| <!--DelRow-->[BadgeNumberCallbackData](arkts-badgenumbercallbackdata-i.md) | 应用通知角标数量状态变化的回调函数类型。 |
| <!--DelRow-->[EnabledNotificationCallbackData](arkts-enablednotificationcallbackdata-i.md) | 应用角标使能状态变化。 |
| <!--DelRow-->[EnabledPriorityNotificationByBundleCallbackData](arkts-enabledprioritynotificationbybundlecallbackdata-i.md) | 应用通知优先级开关状态 |
| <!--DelRow-->[EnabledPriorityNotificationCallbackData](arkts-enabledprioritynotificationcallbackdata-i.md) | 通知优先级总开关状态。 |
| <!--DelRow-->[EnabledSilentReminderCallbackData](arkts-enabledsilentremindercallbackdata-i.md) | 应用通知静默提醒使能状态变化。 |
| <!--DelRow-->[NotificationClassification](arkts-notificationclassification-i.md) | 描述通知分类信息。 |
| <!--DelRow-->[NotificationSubscriber](arkts-notificationsubscriber-i.md) | 提供订阅者接收到新通知、取消通知等的回调方法。 |
| <!--DelRow-->[NotificationSwitchChangedCallbackData](arkts-notificationswitchchangedcallbackdata-i.md) | 描述通知开关状态变化的回调数据。 |
| <!--DelRow-->[SubscribeCallbackData](arkts-subscribecallbackdata-i.md) | 返回携带系统属性值的通知信息。 |
| <!--DelRow-->[VoiceContent](arkts-voicecontent-i.md) | 通知消息中语音播报内容定义 |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[BadgeEnabledChangedCallback](arkts-badgeenabledchangedcallback-t.md) | type BadgeEnabledChangedCallback = (data: EnabledNotificationCallbackData) => void 注册应用角标使能状态变化的回调函数类型。 |
| <!--DelRow-->[EnabledSilentReminderChangedCallback](arkts-enabledsilentreminderchangedcallback-t.md) | 注册应用通知静默提醒使能状态变化的回调函数类型。 type EnabledSilentReminderChangedCallback = (callbackData: EnabledSilentReminderCallbackData) => void |
| <!--DelRow-->[NotificationSwitchChangedCallback](arkts-notificationswitchchangedcallback-t.md) | 注册由[notificationManager.setNotificationSwitch]{@link ../@ohos.notificationManager:notificationManager.setNotificationSwitch}接口设置的通知开关状态变化的回调函数类型。 |
| <!--DelRow-->[SystemUpdateCallback](arkts-systemupdatecallback-t.md) | type SystemUpdateCallback = (data: SubscribeCallbackData) => void |

