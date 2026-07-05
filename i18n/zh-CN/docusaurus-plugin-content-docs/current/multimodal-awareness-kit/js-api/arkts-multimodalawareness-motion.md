# @ohos.multimodalAwareness.motion

The **motion** module provides the user motion awareness capabilities, including user gestures and actions.

**起始版本：** 15

**系统能力：** SystemCapability.MultimodalAwareness.Motion

## 导入模块

```TypeScript
import { motion } from '@kit.MultimodalAwarenessKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getRecentOperatingHandStatus](arkts-motion-getrecentoperatinghandstatus-f.md#getRecentOperatingHandStatus-1) | Obtains the latest operating hand status. |
| [off](arkts-motion-off-f.md#off-1) | Unsubscribes from operating hand change events. |
| [off](arkts-motion-off-f.md#off-2) | Disables listening for holding hand status changes. |
| [offHoldingHandChanged](arkts-motion-offholdinghandchanged-f.md#offHoldingHandChanged-1) | Unsubscribe from the holding hand changed event. |
| [offOperatingHandChanged](arkts-motion-offoperatinghandchanged-f.md#offOperatingHandChanged-1) | Unsubscribe from the operating hand changed event. |
| <!--DelRow-->[offPickupChange](arkts-motion-offpickupchange-f-sys.md#offPickupChange-1) | Unsubscribe to pick up sensor event. |
| <!--DelRow-->[offRotateChange](arkts-motion-offrotatechange-f-sys.md#offRotateChange-1) | Unsubscribe to rotate sensor event. |
| <!--DelRow-->[offSmartRotateChange](arkts-motion-offsmartrotatechange-f-sys.md#offSmartRotateChange-1) | Unsubscribe to smart rotate sensor event. |
| [on](arkts-motion-on-f.md#on-1) | Subscribes to operating hand change events. If the device does not support this function, error code 801 is returned. |
| [on](arkts-motion-on-f.md#on-2) | Enables listening for holding hand status changes. |
| [onHoldingHandChanged](arkts-motion-onholdinghandchanged-f.md#onHoldingHandChanged-1) | Subscribe to detect the holding hand changed event. |
| [onOperatingHandChanged](arkts-motion-onoperatinghandchanged-f.md#onOperatingHandChanged-1) | Subscribe to detect the operating hand changed event. |
| <!--DelRow-->[onPickupChange](arkts-motion-onpickupchange-f-sys.md#onPickupChange-1) | Subscribe to pick up sensor event. |
| <!--DelRow-->[onRotateChange](arkts-motion-onrotatechange-f-sys.md#onRotateChange-1) | Subscribe to rotate sensor event. |
| <!--DelRow-->[onSmartRotateChange](arkts-motion-onsmartrotatechange-f-sys.md#onSmartRotateChange-1) | Subscribe to smart rotate sensor event. |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[SmartRotateEvent](arkts-motion-smartrotateevent-i-sys.md) | The basic data structure of the smart rotate sensor event. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [HoldingHandStatus](arkts-motion-holdinghandstatus-e.md) | Represents the holding hand status. The holding hand status is returned if listening for holding hand status changes is enabled. |
| <!--DelRow-->[LogicalOrientation](arkts-motion-logicalorientation-e-sys.md) | Enum for logical orientation calculated by smart algorithms. |
| [OperatingHandStatus](arkts-motion-operatinghandstatus-e.md) | Defines the status of the operating hand. |
| <!--DelRow-->[PhysicalOrientation](arkts-motion-physicalorientation-e-sys.md) | Enum for physical orientation detected by the sensor. |
| <!--DelRow-->[PickupEvent](arkts-motion-pickupevent-e-sys.md) | Enum for pickup event. |
| <!--DelRow-->[RotateEvent](arkts-motion-rotateevent-e-sys.md) | Enum for rotate event. |

