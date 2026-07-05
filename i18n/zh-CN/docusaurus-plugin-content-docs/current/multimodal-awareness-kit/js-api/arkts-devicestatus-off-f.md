# off

## off('steadyStandingDetect')

```TypeScript
function off(type: 'steadyStandingDetect', callback?: Callback<SteadyStandingStatus>): void
```

Unsubscribes from steady standing state events.

**起始版本：** 18

**系统能力：** SystemCapability.MultimodalAwareness.DeviceStatus

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'steadyStandingDetect' | 是 | Event type. This field has a fixed value of steadyStandingDetect. |
| callback | Callback&lt;SteadyStandingStatus> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 32500001 | Service exception. |
| 32500003 | Unsubscription failed. |

**示例：**

```TypeScript
try {
   deviceStatus.off('steadyStandingDetect');
} catch (err) {
   console.error('off failed, err = ' + err);
}


// 定义callback变量
let callback : Callback<deviceStatus.SteadyStandingStatus> = (data : deviceStatus.SteadyStandingStatus) => {
   console.info('succeed to get status, now status = ' + data);
};
// 以callback为回调函数，订阅设备静止姿态感知（支架态）事件
try {
   deviceStatus.on('steadyStandingDetect', callback);
} catch (err) {
   console.error('on failed, err = ' + err);
}
// 取消该客户端订阅设备静止姿态感知（支架态）事件的特定回调函数
try {
   deviceStatus.off('steadyStandingDetect', callback);
} catch (err) {
   console.error('off failed, err = ' + err);
}

```

