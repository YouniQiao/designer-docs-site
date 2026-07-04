# off

## Modules to Import

```TypeScript
import { stationary } from '@ohos.stationary';
```

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
| callback | Callback&lt;ActivityResponse&gt; | No | Callback used to receive reported data. If no value or**undefined** is passed, all callbacks associated with the specified event in the process will be unregistered. |

**Example**

```TypeScript
stationary.off('still', stationary.ActivityEvent.ENTER);

```

