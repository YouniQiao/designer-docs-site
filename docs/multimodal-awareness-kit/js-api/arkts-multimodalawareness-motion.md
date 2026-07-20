# @ohos.multimodalAwareness.motion

The **motion** module provides the user motion awareness capabilities, including user gestures and actions.

**Since:** 15

<!--Device-unnamed-declare namespace motion--><!--Device-unnamed-declare namespace motion-End-->

**System capability:** SystemCapability.MultimodalAwareness.Motion

## Modules to Import

```TypeScript
import { motion } from '@kit.MultimodalAwarenessKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getRecentOperatingHandStatus](arkts-multimodalawareness-motion-getrecentoperatinghandstatus-f.md#getrecentoperatinghandstatus-1) | Obtains the latest operating hand status. |
| [off](arkts-multimodalawareness-motion-off-f.md#off-1) | Unsubscribes from operating hand change events. |
| [off](arkts-multimodalawareness-motion-off-f.md#off-2) | Disables listening for holding hand status changes. |
| [on](arkts-multimodalawareness-motion-on-f.md#on-1) | Subscribes to operating hand change events.If the device does not support this function, error code 801 is returned. |
| [on](arkts-multimodalawareness-motion-on-f.md#on-2) | Enables listening for holding hand status changes. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [offHoverHandChange](arkts-multimodalawareness-motion-offhoverhandchange-f-sys.md#offhoverhandchange-1) | Unsubscribe to hover hand event. |
| [offPickupChange](arkts-multimodalawareness-motion-offpickupchange-f-sys.md#offpickupchange-1) | Unsubscribe to pick up sensor event. |
| [offRotateChange](arkts-multimodalawareness-motion-offrotatechange-f-sys.md#offrotatechange-1) | Unsubscribe to rotate sensor event. |
| [offSmartRotateChange](arkts-multimodalawareness-motion-offsmartrotatechange-f-sys.md#offsmartrotatechange-1) | Unsubscribe to smart rotate sensor event. |
| [onHoverHandChange](arkts-multimodalawareness-motion-onhoverhandchange-f-sys.md#onhoverhandchange-1) | Subscribes to hover hand events and immediately starts detection for five seconds. |
| [onHoverHandChange](arkts-multimodalawareness-motion-onhoverhandchange-f-sys.md#onhoverhandchange-2) | Subscribes to hover hand events and immediately starts detection. |
| [onPickupChange](arkts-multimodalawareness-motion-onpickupchange-f-sys.md#onpickupchange-1) | Subscribe to pick up sensor event. |
| [onRotateChange](arkts-multimodalawareness-motion-onrotatechange-f-sys.md#onrotatechange-1) | Subscribe to rotate sensor event. |
| [onSmartRotateChange](arkts-multimodalawareness-motion-onsmartrotatechange-f-sys.md#onsmartrotatechange-1) | Subscribe to smart rotate sensor event. |
<!--DelEnd-->

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [HoverHandDetectionArea](arkts-multimodalawareness-motion-hoverhanddetectionarea-i-sys.md) | The basic data structure of the hover hand detection area. |
| [SmartRotateEvent](arkts-multimodalawareness-motion-smartrotateevent-i-sys.md) | The basic data structure of the smart rotate sensor event. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [HoldingHandStatus](arkts-multimodalawareness-motion-holdinghandstatus-e.md) | Represents the holding hand status. The holding hand status is returned if listening for holding hand status changes is enabled. |
| [OperatingHandStatus](arkts-multimodalawareness-motion-operatinghandstatus-e.md) | Defines the status of the operating hand. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [HoverHandAction](arkts-multimodalawareness-motion-hoverhandaction-e-sys.md) | Enum for hover hand actions. |
| [LogicalOrientation](arkts-multimodalawareness-motion-logicalorientation-e-sys.md) | Enum for logical orientation calculated by smart algorithms. |
| [PhysicalOrientation](arkts-multimodalawareness-motion-physicalorientation-e-sys.md) | Enum for physical orientation detected by the sensor. |
| [PickupEvent](arkts-multimodalawareness-motion-pickupevent-e-sys.md) | Enum for pickup event. |
| [RotateEvent](arkts-multimodalawareness-motion-rotateevent-e-sys.md) | Enum for rotate event. |
<!--DelEnd-->

