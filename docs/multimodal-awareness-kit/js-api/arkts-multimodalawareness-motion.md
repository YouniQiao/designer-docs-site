# @ohos.multimodalAwareness.motion

The **motion** module provides the user motion awareness capabilities, including user gestures and actions.

**Since:** 15

**System capability:** SystemCapability.MultimodalAwareness.Motion

## Modules to Import

```TypeScript
import { motion } from '@kit.MultimodalAwarenessKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getRecentOperatingHandStatus](arkts-multimodalawareness-getrecentoperatinghandstatus-f.md#getrecentoperatinghandstatus-1) | Obtains the latest operating hand status. |
| [off](arkts-multimodalawareness-off-f.md#off-1) | Unsubscribes from operating hand change events. |
| [off](arkts-multimodalawareness-off-f.md#off-2) | Disables listening for holding hand status changes. |
| [on](arkts-multimodalawareness-on-f.md#on-1) | Subscribes to operating hand change events.If the device does not support this function, error code 801 is returned. |
| [on](arkts-multimodalawareness-on-f.md#on-2) | Enables listening for holding hand status changes. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [offPickupChange](arkts-multimodalawareness-offpickupchange-f-sys.md#offpickupchange-1) | Unsubscribe to pick up sensor event. |
| [offRotateChange](arkts-multimodalawareness-offrotatechange-f-sys.md#offrotatechange-1) | Unsubscribe to rotate sensor event. |
| [offSmartRotateChange](arkts-multimodalawareness-offsmartrotatechange-f-sys.md#offsmartrotatechange-1) | Unsubscribe to smart rotate sensor event. |
| [onPickupChange](arkts-multimodalawareness-onpickupchange-f-sys.md#onpickupchange-1) | Subscribe to pick up sensor event. |
| [onRotateChange](arkts-multimodalawareness-onrotatechange-f-sys.md#onrotatechange-1) | Subscribe to rotate sensor event. |
| [onSmartRotateChange](arkts-multimodalawareness-onsmartrotatechange-f-sys.md#onsmartrotatechange-1) | Subscribe to smart rotate sensor event. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [SmartRotateEvent](arkts-multimodalawareness-smartrotateevent-i-sys.md) | The basic data structure of the smart rotate sensor event. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [HoldingHandStatus](arkts-multimodalawareness-holdinghandstatus-e.md) | Represents the holding hand status. The holding hand status is returned if listening for holding hand status changes is enabled. |
| [OperatingHandStatus](arkts-multimodalawareness-operatinghandstatus-e.md) | Defines the status of the operating hand. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [LogicalOrientation](arkts-multimodalawareness-logicalorientation-e-sys.md) | Enum for logical orientation calculated by smart algorithms. |
| [PhysicalOrientation](arkts-multimodalawareness-physicalorientation-e-sys.md) | Enum for physical orientation detected by the sensor. |
| [PickupEvent](arkts-multimodalawareness-pickupevent-e-sys.md) | Enum for pickup event. |
| [RotateEvent](arkts-multimodalawareness-rotateevent-e-sys.md) | Enum for rotate event. |
<!--DelEnd-->

