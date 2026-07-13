# SwiperElement

The <swiper> component provides a swiper container.

**Since:** 4

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

## rotation

```TypeScript
rotation(obj?: FocusParamObj): void
```

Requests or cancels the crown rotation focus for a component.
If focus is set to true, the crown event focus is requested.
If focus is set to false, the crown event focus is canceled.
This attribute can be defaulted to true.

**Since:** 4

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| obj | FocusParamObj | No | { focus: true \| false } |

