---
last_update:
  date: 2026-07-04
---

# isNotificationSlotEnabledByBundles（系统接口）

## 导入模块

```TypeScript
import { notificationManager } from '@ohos.notificationManager';
```

## isNotificationSlotEnabledByBundles

```TypeScript
function isNotificationSlotEnabledByBundles(bundles: Array<BundleOption>, type: SlotType): Promise<Map<BundleOption, boolean>>
```

批量获取多个应用的指定渠道类型的使能状态。使用Promise异步回调。

**起始版本：** 26.0.0

**需要权限：** ohos.permission.NOTIFICATION_CONTROLLER

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundles | Array&lt;BundleOption&gt; | 是 | 应用包信息数组。 |
| type | SlotType | 是 | 渠道类型。所有应用共享同一个渠道类型。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Map&lt;BundleOption, boolean&gt;&gt; | 以Promise形式返回批量查询结果，key为应用包信息，value为渠道使能状态（true：使能，false：禁止）。未创建渠道的应用不会出现在返回结果中。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [201](../../errorcode-universal.md#201-权限校验失败) | Permission denied. |
| [202](../../errorcode-universal.md#202-系统api权限校验失败) | Not system application to call the interface. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-请求广告返回错误码) | Capability not supported. |
| [1600001](../errorcode-notification.md#1600001-内部错误) | Internal error. |
| [1600003](../errorcode-notification.md#1600003-连接通知服务失败) | Failed to connect to the service. |

