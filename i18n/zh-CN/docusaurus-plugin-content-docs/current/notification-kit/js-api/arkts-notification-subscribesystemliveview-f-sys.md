---
last_update:
  date: 2026-07-04
---

# subscribeSystemLiveView（系统接口）

## 导入模块

```TypeScript
import { notificationManager } from '@ohos.notificationManager';
```

## subscribeSystemLiveView

```TypeScript
function subscribeSystemLiveView(subscriber: SystemLiveViewSubscriber): Promise<void>
```

订阅系统实况窗。使用Promise异步回调。

**起始版本：** 11

**系统能力：** SystemCapability.Notification.Notification

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| subscriber | SystemLiveViewSubscriber | 是 | 系统实况窗订阅者。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void&gt; | Promise对象。无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [202](../../errorcode-universal.md#202-系统api权限校验失败) | Not system application to call the interface. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-请求广告返回错误码) | Capability not supported.<br>**适用版本：** 18 |
| [1600001](../errorcode-notification.md#1600001-内部错误) | Internal error. |
| [1600002](../errorcode-notification.md#1600002-序列化或反序列化错误) | Marshalling or unmarshalling error. |
| [1600003](../errorcode-notification.md#1600003-连接通知服务失败) | Failed to connect to the service. |
| [1600012](../errorcode-notification.md#1600012-内存空间不足) | No memory space. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let onResponseCallback = (id:number, option:notificationManager.ButtonOptions) => {
    console.info(`notificationId: ${id},onResponseCallback: ${JSON.stringify(option)}`);
}
let subscriber: notificationManager.SystemLiveViewSubscriber  = {
    onResponse: onResponseCallback,
};
notificationManager.subscribeSystemLiveView(subscriber).then(() => {
    console.info("subscribeSystemLiveView success");
}).catch((err: BusinessError) => {
    console.error(`subscribeSystemLiveView failed, code is ${err.code}, message is ${err.message}`);
});

```

