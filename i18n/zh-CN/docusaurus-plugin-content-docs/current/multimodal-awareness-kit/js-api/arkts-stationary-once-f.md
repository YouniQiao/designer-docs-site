# once

## once

```TypeScript
function once(activity: ActivityType, callback: Callback<ActivityResponse>): void
```

Obtains the device status.

**起始版本：** 9

**系统能力：** SystemCapability.Msdp.DeviceStatus.Stationary

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| activity | ActivityType | 是 | Device status type. |
| callback | Callback&lt;ActivityResponse> | 是 | Callback used to receive reported data. |

**示例：**

```TypeScript
stationary.once('still', (data) => {
    console.info('data=' + JSON.stringify(data));
})

```

