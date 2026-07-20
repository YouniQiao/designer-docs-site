# once

## Modules to Import

```TypeScript
import { stationary } from '@kit.MultimodalAwarenessKit';
```

## once

```TypeScript
function once(activity: ActivityType, callback: Callback<ActivityResponse>): void
```

Obtains the device status.

**Since:** 9

<!--Device-stationary-function once(activity: ActivityType, callback: Callback<ActivityResponse>): void--><!--Device-stationary-function once(activity: ActivityType, callback: Callback<ActivityResponse>): void-End-->

**System capability:** SystemCapability.Msdp.DeviceStatus.Stationary

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| activity | [ActivityType](arkts-multimodalawareness-stationary-activitytype-t.md) | Yes | Device status type. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<ActivityResponse> | Yes | Callback used to receive reported data. |

**Example**

```TypeScript
stationary.once('still', (data) => {
    console.info('data=' + JSON.stringify(data));
})

```

