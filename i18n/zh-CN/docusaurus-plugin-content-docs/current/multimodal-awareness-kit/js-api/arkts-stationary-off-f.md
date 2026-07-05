# off

## off

```TypeScript
function off(activity: ActivityType, event: ActivityEvent, callback?: Callback<ActivityResponse>): void
```

Unsubscribes from the device status.

**起始版本：** 9

**系统能力：** SystemCapability.Msdp.DeviceStatus.Stationary

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| activity | ActivityType | 是 | Device status type. |
| event | ActivityEvent | 是 | Event type. |
| callback | Callback&lt;ActivityResponse> | 否 |  |

**示例：**

```TypeScript
stationary.off('still', stationary.ActivityEvent.ENTER);

```

