# on

## on('attachStateChange')

```TypeScript
function on(type: 'attachStateChange', callback: Callback<AttachStateChangeInfo>): void
```

Subscribes to device attachment state change events.

**起始版本：** 20

**系统能力：** SystemCapability.Mechanic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'attachStateChange' | 是 | Event type. |
| callback | Callback&lt;AttachStateChangeInfo> | 是 | Callback used to return the state change. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 33300001 | Service exception. |

**示例：**

```TypeScript
// 定义连接状态变化回调函数，result为设备连接状态变化信息
let callback = (result: mechanicManager.AttachStateChangeInfo) => {
  console.info(`'callback result:' ${result}`);
};

// 打印日志，表示开始注册监听
console.info('Register');
// 注册"attachStateChange"事件监听，当设备连接状态变化时触发callback回调
mechanicManager.on("attachStateChange", callback);
// 打印日志，表示注册监听成功
console.info('Succeeded in registering callback.');

```

## on('trackingStateChange')

```TypeScript
function on(type: 'trackingStateChange', callback: Callback<TrackingEventInfo>): void
```

Subscribes to tracking events.

**起始版本：** 20

**系统能力：** SystemCapability.Mechanic.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'trackingStateChange' | 是 | Event type. |
| callback | Callback&lt;TrackingEventInfo> | 是 | Callback used to return the tracking event information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 33300001 | Service exception. |

**示例：**

```TypeScript
// 定义跟踪状态变化回调函数，result为跟踪事件信息
let callback = (result: mechanicManager.TrackingEventInfo) => {
  console.info(`'callback result:' ${result}`);
};

console.info('Register');
// 注册"trackingStateChange"事件监听，当跟踪状态变化时触发callback回调
mechanicManager.on("trackingStateChange", callback);
console.info('Succeeded in registering callback.');

```

