# off

## off

```TypeScript
function off(activity: ActivityType, event: ActivityEvent, callback?: Callback<ActivityResponse>): void
```

Unsubscribes from the device status.

**Since:** 9

**System capability:** SystemCapability.Msdp.DeviceStatus.Stationary

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| activity | ActivityType | Yes | Device status type. |
| event | ActivityEvent | Yes | Event type. |
| callback | Callback&lt;ActivityResponse> | No |  |

**Example**

```TypeScript
stationary.off('still', stationary.ActivityEvent.ENTER);

```

