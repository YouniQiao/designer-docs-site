# @ohos.notificationExtensionSubscription

本模块提供管理通知扩展的能力，具体包括：打开通知扩展订阅设置界面、订阅和取消订阅通知扩展、获取和设置通知授权状态。

**起始版本：** 22

**系统能力：** SystemCapability.Notification.Notification

## 导入模块

```TypeScript
import { notificationExtensionSubscription } from '@kit.NotificationKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getAllSubscriptionBundles](arkts-notificationextensionsubscription-getallsubscriptionbundles-f-sys.md#getAllSubscriptionBundles-1) | 获取所有具有ohos.permission.SUBSCRIBE_NOTIFICATION权限并且实现了 [NotificationSubscriberExtensionAbility]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility}的应用列表。 使用Promise异步回调。 |
| [getSubscribeInfo](arkts-notificationextensionsubscription-getsubscribeinfo-f.md#getSubscribeInfo-1) | 获取当前应用的通知扩展订阅信息。使用Promise异步回调。 |
| [getUserGrantedEnabledBundles](arkts-notificationextensionsubscription-getusergrantedenabledbundles-f.md#getUserGrantedEnabledBundles-1) | 获取指定应用中“已获取的本机通知”通知开关开启的应用列表。使用Promise异步回调。 |
| <!--DelRow-->[getUserGrantedEnabledBundles](arkts-notificationextensionsubscription-getusergrantedenabledbundles-f-sys.md#getUserGrantedEnabledBundles-1) | 获取指定应用中“已获取的本机通知”通知开关开启的应用列表。使用Promise异步回调。 |
| <!--DelRow-->[getUserGrantedState](arkts-notificationextensionsubscription-getusergrantedstate-f-sys.md#getUserGrantedState-1) | 查询指定应用的“允许获取本机通知”的开关状态。使用Promise异步回调。 |
| [isUserGranted](arkts-notificationextensionsubscription-isusergranted-f.md#isUserGranted-1) | 查询“允许获取本机通知”的开关状态。使用Promise异步回调。 |
| [openSubscriptionSettings](arkts-notificationextensionsubscription-opensubscriptionsettings-f.md#openSubscriptionSettings-1) | 打开应用的通知扩展订阅授权页面，以半模态弹窗形式显示。用户可在该页面授权“允许获取本机通知”开关与“已获取的本机通知”应用开关。 使用Promise异步回调。 |
| [openSubscriptionSettingsWithResult](arkts-notificationextensionsubscription-opensubscriptionsettingswithresult-f.md#openSubscriptionSettingsWithResult-1) | 打开应用的通知扩展订阅授权页面，以半模态弹窗形式显示。用户可在该页面授权“允许获取本机通知”开关与“已获取的本机通知”应用开关。 使用Promise异步回调，当半模态窗口关闭时返回用户设置的授权的结果。 |
| <!--DelRow-->[setUserGrantedBundleState](arkts-notificationextensionsubscription-setusergrantedbundlestate-f-sys.md#setUserGrantedBundleState-1) | 设置指定应用中“已获取的本机通知”的应用通知开关状态。使用Promise异步回调。 |
| <!--DelRow-->[setUserGrantedState](arkts-notificationextensionsubscription-setusergrantedstate-f-sys.md#setUserGrantedState-1) | 设置指定应用的“允许获取本机通知”的开关状态。使用Promise异步回调。 |
| [subscribe](arkts-notificationextensionsubscription-subscribe-f.md#subscribe-1) | 订阅通知扩展。使用[蓝牙模块](docroot://connectivity/connectivity-kit-intro.md#蓝牙简介)相关接口获取蓝牙设备的唯一地址后 方可订阅。使用Promise异步回调。 |
| [unsubscribe](arkts-notificationextensionsubscription-unsubscribe-f.md#unsubscribe-1) | 取消通知扩展的订阅。使用Promise异步回调。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [BundleOption](arkts-notificationextensionsubscription-bundleoption-t.md) | 指定应用的包信息。 |
| [GrantedBundleInfo](arkts-notificationextensionsubscription-grantedbundleinfo-t.md) | 授权应用的包信息。 |
| [NotificationExtensionSubscriptionInfo](arkts-notificationextensionsubscription-notificationextensionsubscriptioninfo-t.md) | 用于描述通知扩展订阅的信息。 |
| [NotificationInfo](arkts-notificationextensionsubscription-notificationinfo-t.md) | 通知订阅扩展能力中 [onReceiveMessage]{@link @ohos.application.NotificationSubscriberExtensionAbility:NotificationSubscriberExtensionAbility.onReceiveMessage} 回调的通知信息。 |
| [UserGrantSetting](arkts-notificationextensionsubscription-usergrantsetting-t.md) | 用户授权的设置信息。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [SubscribeType](arkts-notificationextensionsubscription-subscribetype-e.md) | 表示通知扩展订阅的类型。 |

