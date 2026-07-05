# oh_axis_type.h

## Overview

Defines the device axis event struct and enumerates device axis events. The axis type defines the physicalbehavior characteristics of an input device in different interaction scenarios. The system uses the axis type todistinguish and transmit different gesture interaction information.

**Library**: liboh_input.so

**System capability**: SystemCapability.MultimodalInput.Input.Core

**Since**: 12

**Related module**: [input](capi-input.md)

## Summary

### Enum

| Name | typedef keyword | Description |
| -- | -- | -- |
| [InputEvent_AxisType](#inputevent_axistype) | InputEvent_AxisType | Defines the axis type of an input device. |
| [InputEvent_AxisEventType](#inputevent_axiseventtype) | InputEvent_AxisEventType | Event type of the input device. |
| [InputEvent_AxisAction](#inputevent_axisaction) | InputEvent_AxisAction | Action of the input device. |

## Enum type description

### InputEvent_AxisType

```c
enum InputEvent_AxisType
```

**Description**

Defines the axis type of an input device.

**Since**: 12

| Enum item | Description |
| -- | -- |
| AXIS_TYPE_UNKNOWN |  |
| AXIS_TYPE_SCROLL_VERTICAL |  |
| AXIS_TYPE_SCROLL_HORIZONTAL |  |
| AXIS_TYPE_PINCH |  |
| AXIS_TYPE_ROTATE |  |

### InputEvent_AxisEventType

```c
enum InputEvent_AxisEventType
```

**Description**

Event type of the input device.

**Since**: 12

| Enum item | Description |
| -- | -- |
| AXIS_EVENT_TYPE_PINCH = 1 | Two-finger pinch event. The value can be **AXIS_TYPE_PINCH** or **AXIS_TYPE_ROTATE**, both of which areof the [InputEvent_AxisType](capi-oh-axis-type-h.md#inputevent_axistype) type.<br>**Since**: 12 |
| AXIS_EVENT_TYPE_SCROLL = 2 | Scroll event. The value can be **AXIS_TYPE_SCROLL_VERTICAL** or **AXIS_TYPE_SCROLL_HORIZONTAL**, both ofwhich are of the [InputEvent_AxisType](capi-oh-axis-type-h.md#inputevent_axistype) type. For a mouse wheel event, only **AXIS_TYPE_SCROLL_VERTICALis supported.<br>**Since**: 12 |

### InputEvent_AxisAction

```c
enum InputEvent_AxisAction
```

**Description**

Action of the input device.

**Since**: 12

| Enum item | Description |
| -- | -- |
| AXIS_ACTION_CANCEL = 0 |  |
| AXIS_ACTION_BEGIN |  |
| AXIS_ACTION_UPDATE |  |
| AXIS_ACTION_END |  |


