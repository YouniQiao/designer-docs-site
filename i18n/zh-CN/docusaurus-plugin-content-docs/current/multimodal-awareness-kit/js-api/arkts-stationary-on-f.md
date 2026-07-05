# on

## on

```TypeScript
function on(activity: ActivityType, event: ActivityEvent, reportLatencyNs: number, callback: Callback<ActivityResponse>): void
```

Subscribes to the device status.

**起始版本：** 9

**系统能力：** SystemCapability.Msdp.DeviceStatus.Stationary

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| activity | ActivityType | 是 | Device status type. |
| event | ActivityEvent | 是 | Event type. |
| reportLatencyNs | number | 是 | Report delay, in ns. The value ranges from 1000000000 to 3000000000. |
| callback | Callback&lt;ActivityResponse> | 是 | Callback used to receive reported data. |

**示例：**

```TypeScript
let reportLatencyNs = 1000000000;
stationary.on('still', stationary.ActivityEvent.ENTER, reportLatencyNs, (data) => {
    console.info('data=' + JSON.stringify(data));
})

```

