# @ohos.stationary

The **stationary** module provides APIs to report the device status, including absolute still and relative still. > **NOTE** > > This module does not support x86 emulators.

**Since:** 9

**System capability:** SystemCapability.Msdp.DeviceStatus.Stationary

## Modules to Import

```TypeScript
import { stationary } from '@kit.MultimodalAwarenessKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [off](arkts-multimodalawareness-off-f.md#off-1) | Unsubscribes from the device status. |
| [on](arkts-multimodalawareness-on-f.md#on-1) | Subscribes to the device status. |
| [once](arkts-multimodalawareness-once-f.md#once-1) | Obtains the device status. |

### Interfaces

| Name | Description |
| --- | --- |
| [ActivityResponse](arkts-multimodalawareness-activityresponse-i.md) | Defines the response interface to receive the device status. |

### Enums

| Name | Description |
| --- | --- |
| [ActivityEvent](arkts-multimodalawareness-activityevent-e.md) | Enumerates the device status events. |
| [ActivityState](arkts-multimodalawareness-activitystate-e.md) | Enumerates the device statuses. |

### Types

| Name | Description |
| --- | --- |
| [ActivityType](arkts-multimodalawareness-activitytype-t.md) | Enumerates the device status types. |

