# once

## Modules to Import

```TypeScript
import { stationary } from '@ohos.stationary';
```

## once

```TypeScript
function once(activity: ActivityType, callback: Callback<ActivityResponse>): void
```

Obtains the device status.

**Since:** 9

**System capability:** SystemCapability.Msdp.DeviceStatus.Stationary

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| activity | ActivityType | Yes | Device status type. |
| callback | Callback&lt;ActivityResponse&gt; | Yes | Callback used to receive reported data. |

**Example**

```TypeScript
stationary.once('still', (data) => {
    console.info('data=' + JSON.stringify(data));
})

```

