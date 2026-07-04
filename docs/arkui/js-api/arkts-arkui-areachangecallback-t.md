# AreaChangeCallback

```TypeScript
declare type AreaChangeCallback = (oldValue: Area, newValue: Area) => void
```

Callback type for the component area change event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oldValue | Area | Yes | Information before the area change, including the width, height, coordinates relative tothe parent element, and position coordinates of the upper-left corner in the current window coordinate system. |
| newValue | Area | Yes | Information after the area change, including the width, height, coordinates relative tothe parent element, and position coordinates of the upper-left corner in the current window coordinate system. |

