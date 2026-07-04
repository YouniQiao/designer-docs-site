# Input_InterceptorEventCallback

```c
typedef struct Input_InterceptorEventCallback {...} Input_InterceptorEventCallback
```

## Overview

Defines the structure for the interceptor of event callbacks,including mouseCallback, touchCallback, and axisCallback.

**Since**: 12

**Related module**: [input](capi-input.md)

**Header file**: [oh_input_manager.h](capi-oh-input-manager-h.md)

## Summary

### Member variables

| Name | Description |
| -- | -- |
| [Input_MouseEventCallback](capi-oh-input-manager-h.md#input_mouseeventcallback) mouseCallback | Defines a lifecycle callback for **mouseEvent**. |
| [Input_TouchEventCallback](capi-oh-input-manager-h.md#input_toucheventcallback) touchCallback | Defines a lifecycle callback for **touchEvent**. |
| [Input_AxisEventCallback](capi-oh-input-manager-h.md#input_axiseventcallback) axisCallback | Defines a lifecycle callback for **axisEvent**. |


