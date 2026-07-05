# @ohos.notificationSubscribe

本模块提供通知订阅、取消订阅、通知移除等，一般情况下，只有系统应用具有这些操作权限。 > **说明：** > > 本模块接口均为系统接口。

**Since:** 9

**System capability:** SystemCapability.Notification.Notification

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { notificationSubscribe } from '@kit.NotificationKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[distributeOperation](arkts-notificationsubscribe-distributeoperation-f-sys.md#distributeOperation-1) | 触发指定通知的跨设备协同操作（例如通知跨设备点击跳转、通知跨设备快捷回复等）。使用Promise异步回调。 |
| <!--DelRow-->[remove](arkts-notificationsubscribe-remove-f-sys.md#remove-1) | 根据应用的包信息和通知键值，删除指定通知。使用callback异步回调。 |
| <!--DelRow-->[remove](arkts-notificationsubscribe-remove-f-sys.md#remove-2) | 根据应用的包信息和通知键值，删除指定通知。使用Promise异步回调。 |
| <!--DelRow-->[remove](arkts-notificationsubscribe-remove-f-sys.md#remove-3) | 通过通知的唯一ID，删除指定通知。使用callback异步回调。 |
| <!--DelRow-->[remove](arkts-notificationsubscribe-remove-f-sys.md#remove-4) | 批量删除指定通知。使用callback异步回调。 |
| <!--DelRow-->[remove](arkts-notificationsubscribe-remove-f-sys.md#remove-5) | 通过通知的唯一ID，删除指定通知。使用Promise异步回调。 |
| <!--DelRow-->[remove](arkts-notificationsubscribe-remove-f-sys.md#remove-6) | 批量删除指定通知。使用Promise异步回调。 |
| <!--DelRow-->[removeAll](arkts-notificationsubscribe-removeall-f-sys.md#removeAll-1) | 删除指定应用的所有通知。使用callback异步回调。 |
| <!--DelRow-->[removeAll](arkts-notificationsubscribe-removeall-f-sys.md#removeAll-2) | 删除所有通知。使用callback异步回调。 |
| <!--DelRow-->[removeAll](arkts-notificationsubscribe-removeall-f-sys.md#removeAll-3) | 删除指定用户下的所有通知。使用callback异步回调。 |
| <!--DelRow-->[removeAll](arkts-notificationsubscribe-removeall-f-sys.md#removeAll-4) | 删除指定用户下的所有通知。使用Promise异步回调。 |
| <!--DelRow-->[removeAll](arkts-notificationsubscribe-removeall-f-sys.md#removeAll-5) | 删除指定应用的所有通知。使用Promise异步回调。 |
| <!--DelRow-->[subscribe](arkts-notificationsubscribe-subscribe-f-sys.md#subscribe-1) | 订阅当前用户下所有应用的通知。使用callback异步回调。 |
| <!--DelRow-->[subscribe](arkts-notificationsubscribe-subscribe-f-sys.md#subscribe-2) | 订阅通知并指定订阅信息。使用callback异步回调。 |
| <!--DelRow-->[subscribe](arkts-notificationsubscribe-subscribe-f-sys.md#subscribe-3) | 订阅通知并指定订阅信息。使用Promise异步回调。 |
| <!--DelRow-->[subscribeNotification](arkts-notificationsubscribe-subscribenotification-f-sys.md#subscribeNotification-1) | 订阅通知；订阅后，通过订阅者中的回调函数接收新消息。使用Promise异步回调。 |
| <!--DelRow-->[subscribeNotification](arkts-notificationsubscribe-subscribenotification-f-sys.md#subscribeNotification-2) | 订阅通知；订阅后，通过订阅者中的回调函数接收新消息。使用Promise异步回调。 |
| <!--DelRow-->[subscribeSelf](arkts-notificationsubscribe-subscribeself-f-sys.md#subscribeSelf-1) | 订阅本应用的通知并指定订阅信息。使用Promise异步回调。 |
| <!--DelRow-->[unsubscribe](arkts-notificationsubscribe-unsubscribe-f-sys.md#unsubscribe-1) | 取消订阅。使用callback异步回调。 |
| <!--DelRow-->[unsubscribe](arkts-notificationsubscribe-unsubscribe-f-sys.md#unsubscribe-2) | 取消订阅。使用Promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[NotificationKey](arkts-notificationsubscribe-notificationkey-i-sys.md) | 通知键值。 |
| <!--DelRow-->[OperationInfo](arkts-notificationsubscribe-operationinfo-i-sys.md) | 跨设备协同操作信息。 |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[BadgeNumberCallbackData](arkts-notificationsubscribe-badgenumbercallbackdata-t-sys.md) | 回调返回监听到的应用信息。 |
| <!--DelRow-->[BundleOption](arkts-notificationsubscribe-bundleoption-t-sys.md) | 描述BundleOption信息，即应用的包信息。 |
| <!--DelRow-->[EnabledNotificationCallbackData](arkts-notificationsubscribe-enablednotificationcallbackdata-t-sys.md) | 回调返回监听到的应用信息。 |
| <!--DelRow-->[EnabledPriorityNotificationByBundleCallbackData](arkts-notificationsubscribe-enabledprioritynotificationbybundlecallbackdata-t-sys.md) | 返回应用通知优先级开关状态。 |
| <!--DelRow-->[EnabledPriorityNotificationCallbackData](arkts-notificationsubscribe-enabledprioritynotificationcallbackdata-t-sys.md) | 返回通知优先级总开关状态。 |
| <!--DelRow-->[EnabledSilentReminderCallbackData](arkts-notificationsubscribe-enabledsilentremindercallbackdata-t-sys.md) | 回调返回监听到的静默提醒使能状态信息。 |
| <!--DelRow-->[EnabledSilentReminderChangedCallback](arkts-notificationsubscribe-enabledsilentreminderchangedcallback-t-sys.md) | 注册应用通知静默提醒使能状态变化的回调函数类型。 |
| <!--DelRow-->[NotificationClassification](arkts-notificationsubscribe-notificationclassification-t-sys.md) | 描述通知分类信息。 |
| <!--DelRow-->[NotificationSubscribeInfo](arkts-notificationsubscribe-notificationsubscribeinfo-t-sys.md) | 通知发布者的信息。 |
| <!--DelRow-->[NotificationSubscriber](arkts-notificationsubscribe-notificationsubscriber-t-sys.md) | 作为订阅通知接口subscribe的入参，提供订阅者接收到新通知、取消通知等的回调方法。 |
| <!--DelRow-->[NotificationSwitchChangedCallback](arkts-notificationsubscribe-notificationswitchchangedcallback-t-sys.md) | 注册由[notificationManager.setNotificationSwitch]{@link ./@ohos.notificationManager:notificationManager.setNotificationSwitch}接口设置的通知开关状态变化的回调函数类型。 |
| <!--DelRow-->[NotificationSwitchChangedCallbackData](arkts-notificationsubscribe-notificationswitchchangedcallbackdata-t-sys.md) | 描述通知开关状态变化的回调数据。 |
| <!--DelRow-->[SubscribeCallbackData](arkts-notificationsubscribe-subscribecallbackdata-t-sys.md) | 携带系统属性值的通知信息。 |
| <!--DelRow-->[VoiceContent](arkts-notificationsubscribe-voicecontent-t-sys.md) | 通知消息中语音播报内容定义。 |
| <!--DelRow-->[VoiceContentOptions](arkts-notificationsubscribe-voicecontentoptions-t-sys.md) | 实况通知语音播报内容配置项。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[RemoveReason](arkts-notificationsubscribe-removereason-e-sys.md) | 通知删除原因。 |

