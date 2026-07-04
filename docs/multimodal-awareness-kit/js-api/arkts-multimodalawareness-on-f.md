# on

## Modules to Import

```TypeScript
import { stationary } from '@ohos.stationary';
```

## on

```TypeScript
function on(activity: ActivityType, event: ActivityEvent, reportLatencyNs: number, callback: Callback<ActivityResponse>): void
```

Subscribes to the device status.

**Since:** 9

**System capability:** SystemCapability.Msdp.DeviceStatus.Stationary

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| activity | ActivityType | Yes | Device status type. |
| event | ActivityEvent | Yes | Event type. |
| reportLatencyNs | number | Yes | Report delay, in ns. The value ranges from **1000000000** to **3000000000**. |
| callback | Callback&lt;ActivityResponse&gt; | Yes | Callback used to receive reported data. |

**Example**

```TypeScript
let reportLatencyNs = 1000000000;
stationary.on('still', stationary.ActivityEvent.ENTER, reportLatencyNs, (data) => {
    console.info('data=' + JSON.stringify(data));
})

```

