# px2vp

## px2vp

```TypeScript
declare function px2vp(value: number): number
```

Converts a number in units of px to a number in units of vp. By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion. If no UI instance is available, the virtual pixel ratio of the default screen is used instead.

**Since:** 11

**Deprecated since:** 18

**Substitute:** ohos.arkui.UIContext.UIContext#px2vp

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Value range of value: (-∞, +∞). |

**Return value:**

| Type | Description |
| --- | --- |
| number | Value range of the return value: (-∞, +∞). |

