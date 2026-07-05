# on

## on('steadyStandingDetect')

```TypeScript
function on(type: 'steadyStandingDetect', callback: Callback<SteadyStandingStatus>): void
```

Subscribes to steady standing state events.

**起始版本：** 18

**系统能力：** SystemCapability.MultimodalAwareness.DeviceStatus

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'steadyStandingDetect' | 是 | Event type. This field has a fixed value of steadyStandingDetect. |
| callback | Callback&lt;SteadyStandingStatus> | 是 | Callback used to return the steady standing state of the  device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. Function can not work correctly due to limited  device capabilities. |
| 32500001 | Service exception. |
| 32500002 | Subscription failed. |

**示例：**

```TypeScript
try {
   deviceStatus.on('steadyStandingDetect', (data:deviceStatus.SteadyStandingStatus) => {
      console.info('succeed to get status, now status = ' + data);
   });
} catch (err) {
   console.error('on failed, err = ' + err);
}

```

