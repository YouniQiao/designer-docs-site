# Shape

Provides interfaces for drawing components.


## Shape

```TypeScript
Shape(value?: PixelMap)
```

Use the new function to create Shape.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PixelMap | No |  |

## Shape

```TypeScript
Shape(value: PixelMap)
```

Since API version 9, this API is supported in ArkTS widgets, except that **PixelMap** objects are not supported.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PixelMap | Yes | Drawing target. You can draw a shape in a specified **PixelMap** object. If thisparameter is not set, the shape is drawn in the current drawing target by default.<br>The **undefined** and**null** values are treated as invalid and will not take effect. |

## Shape

```TypeScript
Shape()
```

Called when a component is drawn.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Summary

- [ViewportRect](arkts-arkui-shape-viewportrect-i.md)
