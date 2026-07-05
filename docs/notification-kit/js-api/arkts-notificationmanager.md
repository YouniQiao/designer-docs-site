# @ohos.notificationManager

本模块提供通知管理的能力，包括发布、更新、取消通知，创建、获取、移除通知渠道，获取发布通知应用的使能状态，获取通知的相关信息等。

**Since:** 9

**System capability:** SystemCapability.Notification.Notification

## Modules to Import

```TypeScript
import { notificationManager } from '@kit.NotificationKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[addDoNotDisturbProfile](arkts-notificationmanager-adddonotdisturbprofile-f-sys.md#addDoNotDisturbProfile-1) | 添加勿扰模式配置信息。使用Promise异步回调。 |
| <!--DelRow-->[addDoNotDisturbProfile](arkts-notificationmanager-adddonotdisturbprofile-f-sys.md#addDoNotDisturbProfile-2) | 向指定用户添加勿扰模式配置信息。使用Promise异步回调。 |
| [addSlot](arkts-notificationmanager-addslot-f.md#addSlot-1) | 创建指定类型的通知渠道。使用callback异步回调。 |
| [addSlot](arkts-notificationmanager-addslot-f.md#addSlot-2) | 创建指定类型的通知渠道。使用Promise异步回调。 |
| <!--DelRow-->[addSlot](arkts-notificationmanager-addslot-f-sys.md#addSlot-1) | 创建通知渠道。使用callback异步回调。 |
| <!--DelRow-->[addSlot](arkts-notificationmanager-addslot-f-sys.md#addSlot-2) | 创建通知渠道。使用Promise异步回调。 |
| <!--DelRow-->[addSlots](arkts-notificationmanager-addslots-f-sys.md#addSlots-1) | 创建多个通知渠道。使用callback异步回调。 |
| <!--DelRow-->[addSlots](arkts-notificationmanager-addslots-f-sys.md#addSlots-2) | 创建多个通知渠道。使用Promise异步回调。 |
| [cancel](arkts-notificationmanager-cancel-f.md#cancel-1) | 根据指定的通知ID取消已发布的通知。使用callback异步回调。 |
| [cancel](arkts-notificationmanager-cancel-f.md#cancel-2) | 根据通知ID和标签取消已发布的通知。使用callback异步回调。 |
| [cancel](arkts-notificationmanager-cancel-f.md#cancel-3) | 根据通知ID和标签取消已发布的通知，若标签为空，则取消与指定通知ID匹配的已发布通知。使用Promise异步回调。 |
| <!--DelRow-->[cancel](arkts-notificationmanager-cancel-f-sys.md#cancel-1) | 代理取消当前用户其他应用的通知。使用Promise异步回调。 需要当前应用与其他应用存在代理关系，或者当前应用有ohos.permission.NOTIFICATION_AGENT_CONTROLLER权限。 |
| [cancelAll](arkts-notificationmanager-cancelall-f.md#cancelAll-1) | 取消当前应用所有已发布的通知。使用callback异步回调。 |
| [cancelAll](arkts-notificationmanager-cancelall-f.md#cancelAll-2) | 取消当前应用所有已发布的通知。使用Promise异步回调。 |
| <!--DelRow-->[cancelAsBundle](arkts-notificationmanager-cancelasbundle-f-sys.md#cancelAsBundle-1) | 取消代理通知。使用callback异步回调。 |
| <!--DelRow-->[cancelAsBundle](arkts-notificationmanager-cancelasbundle-f-sys.md#cancelAsBundle-2) | 取消代理通知。使用Promise异步回调。 |
| <!--DelRow-->[cancelAsBundle](arkts-notificationmanager-cancelasbundle-f-sys.md#cancelAsBundle-3) | 取消代理通知。使用Promise异步回调。 |
| [cancelGroup](arkts-notificationmanager-cancelgroup-f.md#cancelGroup-1) | 取消当前应用指定组下的通知。使用callback异步回调。 |
| [cancelGroup](arkts-notificationmanager-cancelgroup-f.md#cancelGroup-2) | 取消当前应用指定组下的通知。使用Promise异步回调。 |
| <!--DelRow-->[disableNotificationFeature](arkts-notificationmanager-disablenotificationfeature-f-sys.md#disableNotificationFeature-1) | 将应用包名添加到通知发布权限管控名单，以阻止应用发布通知。支持启用或关闭该功能。 |
| <!--DelRow-->[disableNotificationFeature](arkts-notificationmanager-disablenotificationfeature-f-sys.md#disableNotificationFeature-2) | 将应用包名添加到通知发布权限管控名单，以阻止应用发布通知。使用Promise异步回调。 |
| <!--DelRow-->[displayBadge](arkts-notificationmanager-displaybadge-f-sys.md#displayBadge-1) | 设定指定应用的角标使能状态。使用callback异步回调。 |
| <!--DelRow-->[displayBadge](arkts-notificationmanager-displaybadge-f-sys.md#displayBadge-2) | 设定指定应用的角标使能状态。使用Promise异步回调。 |
| <!--DelRow-->[getActiveNotificationByFilter](arkts-notificationmanager-getactivenotificationbyfilter-f-sys.md#getActiveNotificationByFilter-1) | 获取满足条件的普通实况通知信息。使用callback异步回调。 |
| <!--DelRow-->[getActiveNotificationByFilter](arkts-notificationmanager-getactivenotificationbyfilter-f-sys.md#getActiveNotificationByFilter-2) | 获取满足条件的普通实况通知信息。使用callback异步回调。 |
| <!--DelRow-->[getActiveNotificationByFilter](arkts-notificationmanager-getactivenotificationbyfilter-f-sys.md#getActiveNotificationByFilter-3) | 获取满足条件的普通实况通知信息。使用Promise异步回调。 |
| <!--DelRow-->[getActiveNotificationByFilter](arkts-notificationmanager-getactivenotificationbyfilter-f-sys.md#getActiveNotificationByFilter-4) | 获取满足条件的普通实况通知信息。使用Promise异步回调。 |
| [getActiveNotificationCount](arkts-notificationmanager-getactivenotificationcount-f.md#getActiveNotificationCount-1) | 获取当前应用未删除的通知数。使用callback异步回调。 |
| [getActiveNotificationCount](arkts-notificationmanager-getactivenotificationcount-f.md#getActiveNotificationCount-2) | 获取当前应用未删除的通知数。使用Promise异步回调。 |
| [getActiveNotifications](arkts-notificationmanager-getactivenotifications-f.md#getActiveNotifications-1) | 获取当前应用未删除的通知列表。使用callback异步回调。 |
| [getActiveNotifications](arkts-notificationmanager-getactivenotifications-f.md#getActiveNotifications-2) | 获取当前应用未删除的通知列表。使用Promise异步回调。 |
| <!--DelRow-->[getAllActiveNotifications](arkts-notificationmanager-getallactivenotifications-f-sys.md#getAllActiveNotifications-1) | 获取当前未删除的所有通知。使用callback异步回调。 |
| <!--DelRow-->[getAllActiveNotifications](arkts-notificationmanager-getallactivenotifications-f-sys.md#getAllActiveNotifications-2) | 获取当前未删除的所有通知。使用Promise异步回调。 |
| <!--DelRow-->[getAllNotificationEnabledBundles](arkts-notificationmanager-getallnotificationenabledbundles-f-sys.md#getAllNotificationEnabledBundles-1) | 获取允许通知的应用程序列表。使用Promise异步回调。 |
| <!--DelRow-->[getAllNotificationEnabledBundles](arkts-notificationmanager-getallnotificationenabledbundles-f-sys.md#getAllNotificationEnabledBundles-2) | 获取指定用户下允许通知的应用程序列表。使用Promise异步回调。 |
| <!--DelRow-->[getBadgeDisplayStatusByBundles](arkts-notificationmanager-getbadgedisplaystatusbybundles-f-sys.md#getBadgeDisplayStatusByBundles-1) | 批量获取应用角标显示状态。使用Promise异步回调。 |
| [getBadgeNumber](arkts-notificationmanager-getbadgenumber-f.md#getBadgeNumber-1) | 获取当前应用角标数量。使用Promise异步回调。 |
| <!--DelRow-->[getBundlePriorityConfig](arkts-notificationmanager-getbundlepriorityconfig-f-sys.md#getBundlePriorityConfig-1) | 获取应用的优先功能配置。 |
| <!--DelRow-->[getDeviceRemindType](arkts-notificationmanager-getdeviceremindtype-f-sys.md#getDeviceRemindType-1) | 获取通知的提醒方式。使用callback异步回调。 |
| <!--DelRow-->[getDeviceRemindType](arkts-notificationmanager-getdeviceremindtype-f-sys.md#getDeviceRemindType-2) | 获取通知的提醒方式。使用Promise异步回调。 |
| <!--DelRow-->[getDistributedDeviceList](arkts-notificationmanager-getdistributeddevicelist-f-sys.md#getDistributedDeviceList-1) | 查询支持跨设备协同通知的设备类型。使用Promise异步回调。 |
| <!--DelRow-->[getDoNotDisturbDate](arkts-notificationmanager-getdonotdisturbdate-f-sys.md#getDoNotDisturbDate-1) | 查询免打扰时间。使用callback异步回调。 |
| <!--DelRow-->[getDoNotDisturbDate](arkts-notificationmanager-getdonotdisturbdate-f-sys.md#getDoNotDisturbDate-2) | 查询免打扰时间。使用Promise异步回调。 |
| <!--DelRow-->[getDoNotDisturbDate](arkts-notificationmanager-getdonotdisturbdate-f-sys.md#getDoNotDisturbDate-3) | 查询指定用户的免打扰时间。使用callback异步回调。 |
| <!--DelRow-->[getDoNotDisturbDate](arkts-notificationmanager-getdonotdisturbdate-f-sys.md#getDoNotDisturbDate-4) | 查询指定用户的免打扰时间。使用Promise异步回调。 |
| <!--DelRow-->[getDoNotDisturbProfile](arkts-notificationmanager-getdonotdisturbprofile-f-sys.md#getDoNotDisturbProfile-1) | 查询勿扰模式配置信息。使用Promise异步回调。 |
| <!--DelRow-->[getDoNotDisturbProfile](arkts-notificationmanager-getdonotdisturbprofile-f-sys.md#getDoNotDisturbProfile-2) | 查询指定用户的勿扰模式配置信息。使用Promise异步回调。 |
| [getNotificationParameters](arkts-notificationmanager-getnotificationparameters-f.md#getNotificationParameters-1) | 获取通知[NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest}中wantAgent字段的部分信息。使用Promise异 步回调。 |
| [getNotificationParameters](arkts-notificationmanager-getnotificationparameters-f.md#getNotificationParameters-2) | 获取通知[NotificationRequest]{@link ./notification/notificationRequest:NotificationRequest}中wantAgent字段的部分信息。使用Promise异 步回调。 |
| [getNotificationSetting](arkts-notificationmanager-getnotificationsetting-f.md#getNotificationSetting-1) | 获取应用程序的通知设置。使用Promise异步回调。 |
| <!--DelRow-->[getNotificationStatisticsByBundle](arkts-notificationmanager-getnotificationstatisticsbybundle-f-sys.md#getNotificationStatisticsByBundle-1) | 批量获取指定应用列表的通知统计信息，使用Promise异步回调。 |
| <!--DelRow-->[getNotificationSwitch](arkts-notificationmanager-getnotificationswitch-f-sys.md#getNotificationSwitch-1) | 获取通知开关状态。使用Promise异步回调。 |
| <!--DelRow-->[getPriorityEnabledByBundles](arkts-notificationmanager-getpriorityenabledbybundles-f-sys.md#getPriorityEnabledByBundles-1) | 批量获取应用通知优先级开关状态。使用Promise异步回调。 |
| <!--DelRow-->[getPriorityStrategyByBundles](arkts-notificationmanager-getprioritystrategybybundles-f-sys.md#getPriorityStrategyByBundles-1) | 批量获取应用通知优先策略。使用Promise异步回调。 |
| <!--DelRow-->[getReminderInfoByBundles](arkts-notificationmanager-getreminderinfobybundles-f-sys.md#getReminderInfoByBundles-1) | 批量获取指定应用提醒信息。使用Promise异步回调。 |
| <!--DelRow-->[getRingtoneInfoByBundle](arkts-notificationmanager-getringtoneinfobybundle-f-sys.md#getRingtoneInfoByBundle-1) | 获取应用自定义铃声信息。使用Promise异步回调。 |
| [getSlot](arkts-notificationmanager-getslot-f.md#getSlot-1) | 获取指定类型的通知渠道。使用callback异步回调。 |
| [getSlot](arkts-notificationmanager-getslot-f.md#getSlot-2) | 获取指定类型的通知渠道。使用callback异步回调。 |
| [getSlot](arkts-notificationmanager-getslot-f.md#getSlot-3) | 获取指定类型的通知渠道。使用Promise异步回调。 |
| [getSlot](arkts-notificationmanager-getslot-f.md#getSlot-4) | 获取指定类型的通知渠道。使用Promise异步回调。 |
| <!--DelRow-->[getSlotByBundle](arkts-notificationmanager-getslotbybundle-f-sys.md#getSlotByBundle-1) | 获取指定应用指定类型的通知渠道。使用Promise异步回调。 获取前需要先通过[addSlot]{@link notificationManager.addSlot(slot: NotificationSlot, callback: AsyncCallback<void>)}创建通知渠道。 |
| <!--DelRow-->[getSlotByBundle](arkts-notificationmanager-getslotbybundle-f-sys.md#getSlotByBundle-2) | 获取指定应用指定类型的通知渠道。使用Promise异步回调。 获取前需要先通过[addSlot]{@link notificationManager.addSlot(slot: NotificationSlot, callback: AsyncCallback<void>)}创建通知渠道。 |
| <!--DelRow-->[getSlotFlagsByBundle](arkts-notificationmanager-getslotflagsbybundle-f-sys.md#getSlotFlagsByBundle-1) | 获取指定应用的通知渠道标识位。使用Promise异步回调。 |
| <!--DelRow-->[getSlotNumByBundle](arkts-notificationmanager-getslotnumbybundle-f-sys.md#getSlotNumByBundle-1) | 获取指定应用的通知渠道数量。使用callback异步回调。 |
| <!--DelRow-->[getSlotNumByBundle](arkts-notificationmanager-getslotnumbybundle-f-sys.md#getSlotNumByBundle-2) | 获取指定应用的通知渠道数量。使用Promise异步回调。 |
| [getSlots](arkts-notificationmanager-getslots-f.md#getSlots-1) | 获取当前应用的所有通知渠道。使用callback异步回调。 |
| [getSlots](arkts-notificationmanager-getslots-f.md#getSlots-2) | 获取当前应用的所有通知渠道。使用Promise异步回调。 |
| <!--DelRow-->[getSlotsByBundle](arkts-notificationmanager-getslotsbybundle-f-sys.md#getSlotsByBundle-1) | 获取指定应用的所有通知渠道。使用callback异步回调。 |
| <!--DelRow-->[getSlotsByBundle](arkts-notificationmanager-getslotsbybundle-f-sys.md#getSlotsByBundle-2) | 获取指定应用的所有通知渠道。使用Promise异步回调。 |
| <!--DelRow-->[getSyncNotificationEnabledWithoutApp](arkts-notificationmanager-getsyncnotificationenabledwithoutapp-f-sys.md#getSyncNotificationEnabledWithoutApp-1) | 获取同步通知到未安装应用程序设备的开关是否开启(callback形式)。 |
| <!--DelRow-->[getSyncNotificationEnabledWithoutApp](arkts-notificationmanager-getsyncnotificationenabledwithoutapp-f-sys.md#getSyncNotificationEnabledWithoutApp-2) | 获取同步通知到未安装应用程序设备的开关是否开启(Promise形式)。 |
| <!--DelRow-->[isBadgeDisplayed](arkts-notificationmanager-isbadgedisplayed-f-sys.md#isBadgeDisplayed-1) | 获取指定应用的角标使能状态。使用callback异步回调。 |
| <!--DelRow-->[isBadgeDisplayed](arkts-notificationmanager-isbadgedisplayed-f-sys.md#isBadgeDisplayed-2) | 获取指定应用的角标使能状态。使用Promise异步回调。 |
| [isDistributedEnabled](arkts-notificationmanager-isdistributedenabled-f.md#isDistributedEnabled-1) | 查询设备是否支持跨设备协同通知。使用callback异步回调。 |
| [isDistributedEnabled](arkts-notificationmanager-isdistributedenabled-f.md#isDistributedEnabled-2) | 查询设备是否支持跨设备协同通知。使用Promise异步回调。 |
| <!--DelRow-->[isDistributedEnabled](arkts-notificationmanager-isdistributedenabled-f-sys.md#isDistributedEnabled-1) | 查询设备是否支持跨设备协同通知。使用Promise异步回调。 |
| <!--DelRow-->[isDistributedEnabledByBundle](arkts-notificationmanager-isdistributedenabledbybundle-f-sys.md#isDistributedEnabledByBundle-1) | 根据应用的包获取应用程序是否支持分布式通知。使用callback异步回调。 |
| <!--DelRow-->[isDistributedEnabledByBundle](arkts-notificationmanager-isdistributedenabledbybundle-f-sys.md#isDistributedEnabledByBundle-2) | 查询指定应用是否支持分布式通知。使用Promise异步回调。 |
| <!--DelRow-->[isDistributedEnabledByBundle](arkts-notificationmanager-isdistributedenabledbybundle-f-sys.md#isDistributedEnabledByBundle-3) | 获取指定应用是否支持跨设备协同。使用Promise异步回调。 |
| <!--DelRow-->[isDistributedEnabledBySlot](arkts-notificationmanager-isdistributedenabledbyslot-f-sys.md#isDistributedEnabledBySlot-1) | 查询指定渠道的通知是否支持通知跨设备协同至指定类型设备。使用Promise异步回调。 |
| [isGeofenceEnabled](arkts-notificationmanager-isgeofenceenabled-f.md#isGeofenceEnabled-1) | 检查地理围栏功能是否已启用。使用Promise异步回调。 |
| <!--DelRow-->[isNotificationEnabled](arkts-notificationmanager-isnotificationenabled-f-sys.md#isNotificationEnabled-1) | 获取指定应用的通知使能状态。使用callback异步回调。 |
| <!--DelRow-->[isNotificationEnabled](arkts-notificationmanager-isnotificationenabled-f-sys.md#isNotificationEnabled-2) | 获取指定应用的通知使能状态。使用Promise异步回调。 |
| <!--DelRow-->[isNotificationEnabled](arkts-notificationmanager-isnotificationenabled-f-sys.md#isNotificationEnabled-3) | 查询当前应用通知使能状态。使用callback异步回调。 |
| <!--DelRow-->[isNotificationEnabled](arkts-notificationmanager-isnotificationenabled-f-sys.md#isNotificationEnabled-4) | 查询当前应用通知使能状态。使用Promise异步回调。 |
| <!--DelRow-->[isNotificationEnabled](arkts-notificationmanager-isnotificationenabled-f-sys.md#isNotificationEnabled-5) | 获取指定用户ID下的通知使能状态。使用callback异步回调。 |
| <!--DelRow-->[isNotificationEnabled](arkts-notificationmanager-isnotificationenabled-f-sys.md#isNotificationEnabled-6) | 获取指定用户下的通知使能状态。使用Promise异步回调。 |
| [isNotificationEnabledSync](arkts-notificationmanager-isnotificationenabledsync-f.md#isNotificationEnabledSync-1) | 同步查询当前应用通知使能状态。 |
| <!--DelRow-->[isNotificationSlotEnabled](arkts-notificationmanager-isnotificationslotenabled-f-sys.md#isNotificationSlotEnabled-1) | 获取指定应用的指定渠道类型的使能状态。使用callback异步回调。 |
| <!--DelRow-->[isNotificationSlotEnabled](arkts-notificationmanager-isnotificationslotenabled-f-sys.md#isNotificationSlotEnabled-2) | 获取指定应用的指定渠道类型的使能状态。使用Promise异步回调。 |
| <!--DelRow-->[isNotificationSlotEnabledByBundles](arkts-notificationmanager-isnotificationslotenabledbybundles-f-sys.md#isNotificationSlotEnabledByBundles-1) | 批量获取多个应用的指定渠道类型的使能状态。使用Promise异步回调。 |
| <!--DelRow-->[isPriorityEnabled](arkts-notificationmanager-ispriorityenabled-f-sys.md#isPriorityEnabled-1) | 获取通知优先级总开关状态。 |
| <!--DelRow-->[isPriorityEnabledByBundle](arkts-notificationmanager-ispriorityenabledbybundle-f-sys.md#isPriorityEnabledByBundle-1) | 获取应用通知优先级开关状态。 |
| <!--DelRow-->[isPriorityIntelligentEnabled](arkts-notificationmanager-ispriorityintelligentenabled-f-sys.md#isPriorityIntelligentEnabled-1) | 获取优先通知智能服务使能状态。使用Promise异步回调。 |
| <!--DelRow-->[isSilentReminderEnabled](arkts-notificationmanager-issilentreminderenabled-f-sys.md#isSilentReminderEnabled-1) | 查询静默提醒的开关状态。使用Promise进行异步回调。 |
| <!--DelRow-->[isSmartReminderEnabled](arkts-notificationmanager-issmartreminderenabled-f-sys.md#isSmartReminderEnabled-1) | 获取设备是否与其他设备协同智能提醒。使用Promise异步回调。 |
| <!--DelRow-->[isSupportDoNotDisturbMode](arkts-notificationmanager-issupportdonotdisturbmode-f-sys.md#isSupportDoNotDisturbMode-1) | 查询是否支持免打扰功能。使用callback异步回调。 |
| <!--DelRow-->[isSupportDoNotDisturbMode](arkts-notificationmanager-issupportdonotdisturbmode-f-sys.md#isSupportDoNotDisturbMode-2) | 查询是否支持免打扰功能。使用Promise异步回调。 |
| [isSupportTemplate](arkts-notificationmanager-issupporttemplate-f.md#isSupportTemplate-1) | 在使用[通知模板]{@link ./notification/notificationTemplate:NotificationTemplate}发布通知前， 可以通过该接口查询是否支持对应的通知模板。使用callback异步回调。 |
| [isSupportTemplate](arkts-notificationmanager-issupporttemplate-f.md#isSupportTemplate-2) | 在使用[通知模板]{@link ./notification/notificationTemplate:NotificationTemplate}发布通知前， 可以通过该接口查询是否支持对应的通知模板。使用Promise异步回调。 |
| <!--DelRow-->[off](arkts-notificationmanager-off-f-sys.md#off-1) | 取消通知监听回调。 |
| <!--DelRow-->[offBadgeNumberQuery](arkts-notificationmanager-offbadgenumberquery-f-sys.md#offBadgeNumberQuery-1) | 取消应用角标数量查询回调。 |
| <!--DelRow-->[offCheckNotification](arkts-notificationmanager-offchecknotification-f-sys.md#offCheckNotification-1) | 通知监听回调。 |
| <!--DelRow-->[on](arkts-notificationmanager-on-f-sys.md#on-1) | 注册通知监听回调。通知服务将通知信息回调给校验程序，校验程序返回校验结果决定该通知是否发布，如营销类通知发布频率控制等。 系统中每个[SlotType]{@link @ohos.notificationManager:notificationManager.SlotType}只允许存在一个注册者。 |
| <!--DelRow-->[on](arkts-notificationmanager-on-f-sys.md#on-2) | 注册通知监听回调。通知服务将通知信息回调给校验程序，校验程序返回校验结果决定该通知是否发布，如营销类通知发布频率控制等。使用Promise异步回调。 系统中每个[SlotType]{@link @ohos.notificationManager:notificationManager.SlotType}只允许存在一个注册者。 |
| <!--DelRow-->[onBadgeNumberQuery](arkts-notificationmanager-onbadgenumberquery-f-sys.md#onBadgeNumberQuery-1) | 注册应用角标数量查询回调。 |
| <!--DelRow-->[onCheckNotification](arkts-notificationmanager-onchecknotification-f-sys.md#onCheckNotification-1) | 通知监听回调。 |
| <!--DelRow-->[onCheckNotification](arkts-notificationmanager-onchecknotification-f-sys.md#onCheckNotification-2) | 通知监听回调。 |
| [openNotificationSettings](arkts-notificationmanager-opennotificationsettings-f.md#openNotificationSettings-1) | 拉起应用的通知设置界面，该页面以半模态形式呈现，可用于设置通知开关、通知提醒方式等。使用Promise异步回调。 |
| [openNotificationSettingsWithResult](arkts-notificationmanager-opennotificationsettingswithresult-f.md#openNotificationSettingsWithResult-1) | 拉起应用的通知设置界面，该页面以半模态形式呈现，可用于设置通知开关、通知提醒方式等。使用Promise异步回调, 当半模态窗口关闭时返回用户设置的状态。 |
| [publish](arkts-notificationmanager-publish-f.md#publish-1) | 发布通知。使用callback异步回调。 如果新发布通知与已发布通知的ID和标签都相同，则新通知将取代原有通知。 |
| [publish](arkts-notificationmanager-publish-f.md#publish-2) | 发布通知。使用Promise异步回调。 如果新发布通知与已发布通知的ID和标签都相同，则新通知将取代原有通知。 |
| <!--DelRow-->[publish](arkts-notificationmanager-publish-f-sys.md#publish-1) | 发布通知给指定的用户。使用callback异步回调。 |
| <!--DelRow-->[publish](arkts-notificationmanager-publish-f-sys.md#publish-2) | 发布通知给指定的用户。使用Promise异步回调。 |
| <!--DelRow-->[publishAsBundle](arkts-notificationmanager-publishasbundle-f-sys.md#publishAsBundle-1) | 发布代理通知。使用callback异步回调。 |
| <!--DelRow-->[publishAsBundle](arkts-notificationmanager-publishasbundle-f-sys.md#publishAsBundle-2) | 发布代理通知。使用Promise异步回调。 |
| <!--DelRow-->[publishAsBundle](arkts-notificationmanager-publishasbundle-f-sys.md#publishAsBundle-3) | 发布代理通知。使用Promise异步回调。 |
| [removeAllSlots](arkts-notificationmanager-removeallslots-f.md#removeAllSlots-1) | 删除当前应用所有通知渠道。使用callback异步回调。 |
| [removeAllSlots](arkts-notificationmanager-removeallslots-f.md#removeAllSlots-2) | 删除当前应用所有通知渠道。使用Promise异步回调。 |
| <!--DelRow-->[removeDoNotDisturbProfile](arkts-notificationmanager-removedonotdisturbprofile-f-sys.md#removeDoNotDisturbProfile-1) | 删除勿扰模式配置。使用Promise异步回调。 |
| <!--DelRow-->[removeDoNotDisturbProfile](arkts-notificationmanager-removedonotdisturbprofile-f-sys.md#removeDoNotDisturbProfile-2) | 删除指定用户的勿扰模式配置。使用Promise异步回调。 |
| <!--DelRow-->[removeGroupByBundle](arkts-notificationmanager-removegroupbybundle-f-sys.md#removeGroupByBundle-1) | 删除指定应用的指定组下的通知。使用callback异步回调。 |
| <!--DelRow-->[removeGroupByBundle](arkts-notificationmanager-removegroupbybundle-f-sys.md#removeGroupByBundle-2) | 删除指定应用的指定组下的通知。使用Promise异步回调。 |
| [removeSlot](arkts-notificationmanager-removeslot-f.md#removeSlot-1) | 删除当前应用指定类型的通知渠道。使用callback异步回调。 |
| [removeSlot](arkts-notificationmanager-removeslot-f.md#removeSlot-2) | 删除当前应用指定类型的通知渠道。使用Promise异步回调。 |
| [requestEnableNotification](arkts-notificationmanager-requestenablenotification-f.md#requestEnableNotification-1) | 当前应用请求通知使能。使用callback异步回调。 > **说明：** > > 从API version 9开始支持，从API version 12开始废弃，建议使用有context入参的 > [requestEnableNotification]{@link notificationManager.requestEnableNotification(context: UIAbilityContext, callback: AsyncCallback<void>)} > 替代。 |
| [requestEnableNotification](arkts-notificationmanager-requestenablenotification-f.md#requestEnableNotification-2) | 应用需要获取用户授权才能发送通知。在通知发布前调用该接口，可以拉起通知授权弹窗，让用户选择是否允许发送通知。使用callback异步回调。 > **说明：** > > - 仅当应用界面加载完成后（即调用 > [loadContent]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession.loadContent}成功），方可使用该接口 > 。 > > - 在使用该接口拉起通知授权弹窗后，如果用户拒绝授权，将无法使用该接口再次拉起弹窗。开发者可以调用 > [openNotificationSettingsWithResult]{@link notificationManager.openNotificationSettingsWithResult}二次申请授权，拉起通知管理弹窗 > 。 |
| [requestEnableNotification](arkts-notificationmanager-requestenablenotification-f.md#requestEnableNotification-3) | 当前应用请求通知使能。使用Promise异步回调。 > **说明：** > > 从API version 9开始支持，从API version 12开始废弃，建议使用有context入参的 > [requestEnableNotification]{@link notificationManager.requestEnableNotification(context: UIAbilityContext)}替代。 |
| [requestEnableNotification](arkts-notificationmanager-requestenablenotification-f.md#requestEnableNotification-4) | 应用需要获取用户授权才能发送通知。在通知发布前调用该接口，可以拉起通知授权弹窗，让用户选择是否允许发送通知。使用Promise异步回调。 > **说明：** > > - 仅当应用界面加载完成后（即调用 > [loadContent]{@link @ohos.app.ability.UIExtensionContentSession:UIExtensionContentSession.loadContent}成功），方可使用该接口 > 。 > > - 在使用该接口拉起通知授权弹窗后，如果用户拒绝授权，将无法使用该接口再次拉起弹窗。开发者可以调用 > [openNotificationSettingsWithResult]{@link notificationManager.openNotificationSettingsWithResult}二次申请授权，拉起通知管理弹窗 > 。 |
| <!--DelRow-->[setAdditionalConfig](arkts-notificationmanager-setadditionalconfig-f-sys.md#setAdditionalConfig-1) | 设置通知的系统附加配置信息。使用Promise异步回调。 |
| <!--DelRow-->[setBadgeDisplayStatusByBundles](arkts-notificationmanager-setbadgedisplaystatusbybundles-f-sys.md#setBadgeDisplayStatusByBundles-1) | 批量设置指定应用是否显示角标。使用Promise异步回调。 |
| [setBadgeNumber](arkts-notificationmanager-setbadgenumber-f.md#setBadgeNumber-1) | 设定角标个数，在应用的桌面图标上呈现。使用callback异步回调。 |
| [setBadgeNumber](arkts-notificationmanager-setbadgenumber-f.md#setBadgeNumber-2) | 设定角标个数，在应用的桌面图标上呈现。使用Promise异步回调。 |
| <!--DelRow-->[setBadgeNumberByBundle](arkts-notificationmanager-setbadgenumberbybundle-f-sys.md#setBadgeNumberByBundle-1) | 代理其他应用设定角标个数。使用Promise异步回调。 |
| <!--DelRow-->[setBundlePriorityConfig](arkts-notificationmanager-setbundlepriorityconfig-f-sys.md#setBundlePriorityConfig-1) | 设置应用的优先功能配置。 |
| <!--DelRow-->[setDistributedEnable](arkts-notificationmanager-setdistributedenable-f-sys.md#setDistributedEnable-1) | 设置设备是否支持分布式通知。使用callback异步回调。 |
| <!--DelRow-->[setDistributedEnable](arkts-notificationmanager-setdistributedenable-f-sys.md#setDistributedEnable-2) | 设置设备是否支持分布式通知。使用Promise异步回调。 |
| <!--DelRow-->[setDistributedEnableByBundle](arkts-notificationmanager-setdistributedenablebybundle-f-sys.md#setDistributedEnableByBundle-1) | 设置指定应用是否支持分布式通知。使用callback异步回调。 |
| <!--DelRow-->[setDistributedEnableByBundle](arkts-notificationmanager-setdistributedenablebybundle-f-sys.md#setDistributedEnableByBundle-2) | 设置指定应用是否支持分布式通知。使用Promise异步回调。 |
| <!--DelRow-->[setDistributedEnableByBundles](arkts-notificationmanager-setdistributedenablebybundles-f-sys.md#setDistributedEnableByBundles-1) | 批量设置应用是否支持跨设备协同。使用Promise异步回调。 |
| <!--DelRow-->[setDistributedEnabled](arkts-notificationmanager-setdistributedenabled-f-sys.md#setDistributedEnabled-1) | 设置设备是否支持跨设备协同通知。使用Promise异步回调。 |
| <!--DelRow-->[setDistributedEnabledByBundle](arkts-notificationmanager-setdistributedenabledbybundle-f-sys.md#setDistributedEnabledByBundle-1) | 设置指定应用是否支持跨设备协同。使用Promise异步回调。 |
| <!--DelRow-->[setDistributedEnabledBySlot](arkts-notificationmanager-setdistributedenabledbyslot-f-sys.md#setDistributedEnabledBySlot-1) | 设置指定渠道的通知是否支持通知跨设备协同至指定类型设备。使用Promise异步回调。 |
| <!--DelRow-->[setDoNotDisturbDate](arkts-notificationmanager-setdonotdisturbdate-f-sys.md#setDoNotDisturbDate-1) | 设置免打扰时间。使用callback异步回调。 |
| <!--DelRow-->[setDoNotDisturbDate](arkts-notificationmanager-setdonotdisturbdate-f-sys.md#setDoNotDisturbDate-2) | 设置免打扰时间。使用Promise异步回调。 |
| <!--DelRow-->[setDoNotDisturbDate](arkts-notificationmanager-setdonotdisturbdate-f-sys.md#setDoNotDisturbDate-3) | 指定用户设置免打扰时间。使用callback异步回调。 |
| <!--DelRow-->[setDoNotDisturbDate](arkts-notificationmanager-setdonotdisturbdate-f-sys.md#setDoNotDisturbDate-4) | 指定用户设置免打扰时间。使用Promise异步回调。 |
| <!--DelRow-->[setGeofenceEnabled](arkts-notificationmanager-setgeofenceenabled-f-sys.md#setGeofenceEnabled-1) | 设置地理围栏的启用状态。使用Promise异步回调。 |
| <!--DelRow-->[setNotificationEnable](arkts-notificationmanager-setnotificationenable-f-sys.md#setNotificationEnable-1) | 设定指定应用的通知使能状态。使用callback异步回调。 |
| <!--DelRow-->[setNotificationEnable](arkts-notificationmanager-setnotificationenable-f-sys.md#setNotificationEnable-2) | 设定指定应用的通知使能状态。使用Promise异步回调。 |
| <!--DelRow-->[setNotificationEnableSlot](arkts-notificationmanager-setnotificationenableslot-f-sys.md#setNotificationEnableSlot-1) | 设置指定应用的指定渠道类型的使能状态。使用callback异步回调。 |
| <!--DelRow-->[setNotificationEnableSlot](arkts-notificationmanager-setnotificationenableslot-f-sys.md#setNotificationEnableSlot-2) | 设置指定应用的指定渠道类型的使能状态。使用callback异步回调。 |
| <!--DelRow-->[setNotificationEnableSlot](arkts-notificationmanager-setnotificationenableslot-f-sys.md#setNotificationEnableSlot-3) | 设置指定应用的指定渠道类型的使能状态。使用promise异步回调。 |
| <!--DelRow-->[setNotificationSwitch](arkts-notificationmanager-setnotificationswitch-f-sys.md#setNotificationSwitch-1) | 设置通知开关状态。使用Promise异步回调。 |
| <!--DelRow-->[setPriorityEnabled](arkts-notificationmanager-setpriorityenabled-f-sys.md#setPriorityEnabled-1) | 设置通知优先级总开关。 |
| <!--DelRow-->[setPriorityEnabledByBundle](arkts-notificationmanager-setpriorityenabledbybundle-f-sys.md#setPriorityEnabledByBundle-1) | 设置应用通知优先级开关。 |
| <!--DelRow-->[setPriorityEnabledByBundles](arkts-notificationmanager-setpriorityenabledbybundles-f-sys.md#setPriorityEnabledByBundles-1) | 批量设置应用通知优先级开关状态。使用Promise异步回调。 |
| <!--DelRow-->[setPriorityIntelligentEnabled](arkts-notificationmanager-setpriorityintelligentenabled-f-sys.md#setPriorityIntelligentEnabled-1) | 设置优先通知智能服务使能状态。使用Promise异步回调。 |
| <!--DelRow-->[setPriorityStrategyByBundles](arkts-notificationmanager-setprioritystrategybybundles-f-sys.md#setPriorityStrategyByBundles-1) | 批量设置应用通知优先策略。使用Promise异步回调。 |
| <!--DelRow-->[setReminderInfoByBundles](arkts-notificationmanager-setreminderinfobybundles-f-sys.md#setReminderInfoByBundles-1) | 批量设置指定应用提醒信息。使用Promise异步回调。 |
| <!--DelRow-->[setRingtoneInfoByBundle](arkts-notificationmanager-setringtoneinfobybundle-f-sys.md#setRingtoneInfoByBundle-1) | 设置应用自定义铃声信息。使用Promise异步回调。 |
| <!--DelRow-->[setSilentReminderEnabled](arkts-notificationmanager-setsilentreminderenabled-f-sys.md#setSilentReminderEnabled-1) | 设置静默提醒的开关状态。使用Promise进行异步回调。 |
| <!--DelRow-->[setSlotByBundle](arkts-notificationmanager-setslotbybundle-f-sys.md#setSlotByBundle-1) | 设置指定应用的通知渠道。使用callback异步回调。 设置前需要先通过[addSlot]{@link notificationManager.addSlot(slot: NotificationSlot, callback: AsyncCallback<void>)}创建通知渠道。 |
| <!--DelRow-->[setSlotByBundle](arkts-notificationmanager-setslotbybundle-f-sys.md#setSlotByBundle-2) | 设置指定应用的通知渠道。使用Promise异步回调。 设置前需要先通过[addSlot]{@link notificationManager.addSlot(slot: NotificationSlot, callback: AsyncCallback<void>)}创建通知渠道。 |
| <!--DelRow-->[setSlotFlagsByBundle](arkts-notificationmanager-setslotflagsbybundle-f-sys.md#setSlotFlagsByBundle-1) | 设定指定应用的通知提醒方式开关。使用Promise异步回调。 |
| <!--DelRow-->[setSmartReminderEnabled](arkts-notificationmanager-setsmartreminderenabled-f-sys.md#setSmartReminderEnabled-1) | 设置设备是否与其他设备协同智能提醒。使用Promise异步回调。 |
| <!--DelRow-->[setSyncNotificationEnabledWithoutApp](arkts-notificationmanager-setsyncnotificationenabledwithoutapp-f-sys.md#setSyncNotificationEnabledWithoutApp-1) | 设置是否将通知同步到未安装应用程序的设备(callback形式)。 |
| <!--DelRow-->[setSyncNotificationEnabledWithoutApp](arkts-notificationmanager-setsyncnotificationenabledwithoutapp-f-sys.md#setSyncNotificationEnabledWithoutApp-2) | 设置是否将通知同步到未安装应用程序的设备(Promise形式)。 |
| <!--DelRow-->[setTargetDeviceStatus](arkts-notificationmanager-settargetdevicestatus-f-sys.md#setTargetDeviceStatus-1) | 设置设备配对成功后的状态。当发布通知时，会根据各个设备的状态来确定当前设备的通知提醒方式。 |
| <!--DelRow-->[snoozeNotification](arkts-notificationmanager-snoozenotification-f-sys.md#snoozeNotification-1) | 设置通知稍后提醒。该通知在指定时间后再次提醒，每次设置只会提醒一次，提醒方式与该通知相同。 设置后该通知被删除。 |
| <!--DelRow-->[subscribeSystemLiveView](arkts-notificationmanager-subscribesystemliveview-f-sys.md#subscribeSystemLiveView-1) | 订阅系统实况窗。使用Promise异步回调。 |
| <!--DelRow-->[triggerSystemLiveView](arkts-notificationmanager-triggersystemliveview-f-sys.md#triggerSystemLiveView-1) | 触发系统实况窗。使用Promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[BundleNotificationStatistics](arkts-notificationmanager-bundlenotificationstatistics-i-sys.md) | 描述指定应用通知统计信息。 |
| <!--DelRow-->[ButtonOptions](arkts-notificationmanager-buttonoptions-i-sys.md) | 描述触发按钮信息。 |
| <!--DelRow-->[DistributedBundleEnableInfo](arkts-notificationmanager-distributedbundleenableinfo-i-sys.md) | 描述多设备协同的包信息。 |
| <!--DelRow-->[DoNotDisturbDate](arkts-notificationmanager-donotdisturbdate-i-sys.md) | 免打扰时间选项。 |
| <!--DelRow-->[DoNotDisturbProfile](arkts-notificationmanager-donotdisturbprofile-i-sys.md) | 勿扰模式的配置信息。 |
| <!--DelRow-->[NotificationCheckInfo](arkts-notificationmanager-notificationcheckinfo-i-sys.md) | 通知校验参数。 |
| <!--DelRow-->[NotificationCheckResult](arkts-notificationmanager-notificationcheckresult-i-sys.md) | 通知校验结果。 |
| <!--DelRow-->[NotificationReminderInfo](arkts-notificationmanager-notificationreminderinfo-i-sys.md) | 描述指定应用提醒方式信息。 |
| [NotificationSetting](arkts-notificationmanager-notificationsetting-i.md) | 通知提醒方式开关的设置状态。 |
| <!--DelRow-->[RingtoneInfo](arkts-notificationmanager-ringtoneinfo-i-sys.md) | 描述自定义铃声信息。 |
| <!--DelRow-->[SystemLiveViewSubscriber](arkts-notificationmanager-systemliveviewsubscriber-i-sys.md) | 系统实况窗订阅者。 |

### Types

| Name | Description |
| --- | --- |
| [BundleOption](arkts-notificationmanager-bundleoption-t.md) | 指定应用的包信息。 |
| <!--DelRow-->[CoordinateSystemType](arkts-notificationmanager-coordinatesystemtype-t-sys.md) | 表示地理围栏坐标系类型的枚举。 |
| [DistributedOptions](arkts-notificationmanager-distributedoptions-t.md) | 分布式选项。 |
| <!--DelRow-->[Geofence](arkts-notificationmanager-geofence-t-sys.md) | 地理围栏的配置信息。 |
| <!--DelRow-->[GroupInfo](arkts-notificationmanager-groupinfo-t-sys.md) | 组通知定制信息。 |
| <!--DelRow-->[LiveViewStatus](arkts-notificationmanager-liveviewstatus-t-sys.md) | 描述普通实况通知的状态。 |
| <!--DelRow-->[LiveViewTypes](arkts-notificationmanager-liveviewtypes-t-sys.md) | 描述实况通知的类型。 |
| <!--DelRow-->[MonitorEvent](arkts-notificationmanager-monitorevent-t-sys.md) | 表示地理围栏的监控事件类型的枚举。 |
| [NotificationActionButton](arkts-notificationmanager-notificationactionbutton-t.md) | 通知中显示的操作按钮。 |
| [NotificationBasicContent](arkts-notificationmanager-notificationbasiccontent-t.md) | 普通文本通知。 |
| [NotificationButton](arkts-notificationmanager-notificationbutton-t.md) | 通知按钮。 |
| [NotificationCapsule](arkts-notificationmanager-notificationcapsule-t.md) | 通知胶囊。 |
| <!--DelRow-->[NotificationCheckRequest](arkts-notificationmanager-notificationcheckrequest-t-sys.md) | 描述通知的鉴权信息。 |
| [NotificationContent](arkts-notificationmanager-notificationcontent-t.md) | 通知内容。 |
| <!--DelRow-->[NotificationFilter](arkts-notificationmanager-notificationfilter-t-sys.md) | 描述查询普通实况窗时的筛选条件。 |
| <!--DelRow-->[NotificationFlags](arkts-notificationmanager-notificationflags-t-sys.md) | 描述通知标志位。 |
| <!--DelRow-->[NotificationFlagStatus](arkts-notificationmanager-notificationflagstatus-t-sys.md) | 描述通知标志状态。 |
| <!--DelRow-->[NotificationIconButton](arkts-notificationmanager-notificationiconbutton-t-sys.md) | 系统通知按钮。 |
| <!--DelRow-->[NotificationLiveViewContent](arkts-notificationmanager-notificationliveviewcontent-t-sys.md) | 描述普通实况通知。 |
| [NotificationLongTextContent](arkts-notificationmanager-notificationlongtextcontent-t.md) | 长文本通知。 |
| [NotificationMultiLineContent](arkts-notificationmanager-notificationmultilinecontent-t.md) | 多行文本通知。 |
| [NotificationParameters](arkts-notificationmanager-notificationparameters-t.md) | 描述NotificationRequest中wantAgent的部分信息。 |
| [NotificationPictureContent](arkts-notificationmanager-notificationpicturecontent-t.md) | 附有图片的通知。 |
| [NotificationProgress](arkts-notificationmanager-notificationprogress-t.md) | 通知进度。 |
| [NotificationRequest](arkts-notificationmanager-notificationrequest-t.md) | 通知请求。 |
| [NotificationSlot](arkts-notificationmanager-notificationslot-t.md) | 通知渠道。 |
| <!--DelRow-->[NotificationSorting](arkts-notificationmanager-notificationsorting-t-sys.md) | 提供有关活动通知的排序信息。 |
| [NotificationSystemLiveViewContent](arkts-notificationmanager-notificationsystemliveviewcontent-t.md) | 系统实况窗通知内容。 |
| [NotificationTemplate](arkts-notificationmanager-notificationtemplate-t.md) | 通知模板。 |
| [NotificationTime](arkts-notificationmanager-notificationtime-t.md) | 通知计时信息。 |
| [NotificationUserInput](arkts-notificationmanager-notificationuserinput-t.md) | 保存用户输入的通知消息。 |
| <!--DelRow-->[Trigger](arkts-notificationmanager-trigger-t-sys.md) | 触发条件的具体信息。 |
| <!--DelRow-->[TriggerType](arkts-notificationmanager-triggertype-t-sys.md) | 触发条件的事件类型的枚举。 |
| <!--DelRow-->[UnifiedGroupInfo](arkts-notificationmanager-unifiedgroupinfo-t-sys.md) | 描述通知智能聚合信息字段。 |

### Enums

| Name | Description |
| --- | --- |
| [ContentType](arkts-notificationmanager-contenttype-e.md) | 通知内容类型。 |
| <!--DelRow-->[DeviceRemindType](arkts-notificationmanager-deviceremindtype-e-sys.md) | 通知提醒方式。 |
| <!--DelRow-->[DoNotDisturbType](arkts-notificationmanager-donotdisturbtype-e-sys.md) | 免打扰设置的时间类型。 |
| <!--DelRow-->[NotificationControlFlagStatus](arkts-notificationmanager-notificationcontrolflagstatus-e-sys.md) | 每个bit位都可以控制通知的提示方式。当notificationControlFlags和下表中枚举值进行按位或操作，则表示关闭其提示方式。 |
| <!--DelRow-->[PriorityEnableStatus](arkts-notificationmanager-priorityenablestatus-e-sys.md) | 描述应用通知的优先级开关状态。 |
| [PriorityNotificationType](arkts-notificationmanager-prioritynotificationtype-e.md) | 描述通知的优先级类型。 |
| <!--DelRow-->[PriorityStrategyStatus](arkts-notificationmanager-prioritystrategystatus-e-sys.md) | 描述应用通知的优先策略。 |
| <!--DelRow-->[RingtoneType](arkts-notificationmanager-ringtonetype-e-sys.md) | 描述自定义铃声类型。 |
| [SlotLevel](arkts-notificationmanager-slotlevel-e.md) | 通知级别。 |
| [SlotType](arkts-notificationmanager-slottype-e.md) | 通知渠道类型。 |
| <!--DelRow-->[SourceType](arkts-notificationmanager-sourcetype-e-sys.md) | 通知来源类型。 |
| <!--DelRow-->[SwitchState](arkts-notificationmanager-switchstate-e-sys.md) | 描述通知相关开关的设置状态。 |

