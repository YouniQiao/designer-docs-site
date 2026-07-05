# @ohos.commonEventManager

本模块提供了公共事件相关的能力，包括发布公共事件、订阅公共事件、以及退订公共事件。

**起始版本：** 9

**系统能力：** SystemCapability.Notification.CommonEvent

## 导入模块

```TypeScript
import { commonEventManager } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [createSubscriber](arkts-commoneventmanager-createsubscriber-f.md#createSubscriber-1) | 创建订阅者。使用callback异步回调。 |
| [createSubscriber](arkts-commoneventmanager-createsubscriber-f.md#createSubscriber-2) | 创建订阅者。使用Promise异步回调。 |
| [createSubscriberSync](arkts-commoneventmanager-createsubscribersync-f.md#createSubscriberSync-1) | createSubscriber的同步接口。 |
| [publish](arkts-commoneventmanager-publish-f.md#publish-1) | 发布公共事件。使用callback异步回调。 |
| [publish](arkts-commoneventmanager-publish-f.md#publish-2) | 发布公共事件。使用callback异步回调。 |
| <!--DelRow-->[publishAsUser](arkts-commoneventmanager-publishasuser-f-sys.md#publishAsUser-1) | 向指定用户发布公共事件。使用callback异步回调。 |
| <!--DelRow-->[publishAsUser](arkts-commoneventmanager-publishasuser-f-sys.md#publishAsUser-2) | 向指定用户发布公共事件并指定发布信息。使用callback异步回调。 |
| <!--DelRow-->[removeStickyCommonEvent](arkts-commoneventmanager-removestickycommonevent-f-sys.md#removeStickyCommonEvent-1) | 移除粘性公共事件。使用callback异步回调。 |
| <!--DelRow-->[removeStickyCommonEvent](arkts-commoneventmanager-removestickycommonevent-f-sys.md#removeStickyCommonEvent-2) | 移除粘性公共事件。使用Promise异步回调。 |
| <!--DelRow-->[setStaticSubscriberState](arkts-commoneventmanager-setstaticsubscriberstate-f-sys.md#setStaticSubscriberState-1) | 为当前应用设置静态订阅事件使能或去使能状态。使用callback异步回调。 |
| <!--DelRow-->[setStaticSubscriberState](arkts-commoneventmanager-setstaticsubscriberstate-f-sys.md#setStaticSubscriberState-2) | 为当前应用设置静态订阅事件使能或去使能状态。使用Promise异步回调。 |
| <!--DelRow-->[setStaticSubscriberState](arkts-commoneventmanager-setstaticsubscriberstate-f-sys.md#setStaticSubscriberState-3) | 为当前应用设置静态订阅事件的使能状态，并且记录事件名称。使用Promise异步回调。 |
| <!--DelRow-->[setStaticSubscriberState](arkts-commoneventmanager-setstaticsubscriberstate-f-sys.md#setStaticSubscriberState-4) | 为当前应用设置静态订阅事件的使能状态，并且记录事件名称。使用Promise异步回调。 |
| [subscribe](arkts-commoneventmanager-subscribe-f.md#subscribe-1) | 订阅公共事件。使用callback异步回调。 |
| [subscribeToEvent](arkts-commoneventmanager-subscribetoevent-f.md#subscribeToEvent-1) | 订阅公共事件，并返回订阅成功或失败信息。使用Promise异步回调。 |
| [unsubscribe](arkts-commoneventmanager-unsubscribe-f.md#unsubscribe-1) | 取消订阅公共事件。使用callback异步回调。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [CommonEventData](arkts-commoneventmanager-commoneventdata-t.md) | 表示公共事件的数据。 |
| [CommonEventPublishData](arkts-commoneventmanager-commoneventpublishdata-t.md) | 描述公共事件内容和属性。 |
| [CommonEventSubscribeInfo](arkts-commoneventmanager-commoneventsubscribeinfo-t.md) | 用于表示订阅者的信息。 |
| [CommonEventSubscriber](arkts-commoneventmanager-commoneventsubscriber-t.md) | 描述公共事件的订阅者。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [Support](arkts-commoneventmanager-support-e.md) | 系统公共事件是指由系统服务或系统应用发布的事件，订阅这些公共事件需要特定的权限、使用相应的值。 |

