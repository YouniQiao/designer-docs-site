# OverlayOptions

> **NOTE**
>
> To standardize anonymous object definitions, the element definitions here have been revised in API version 12.
> While historical version information is preserved for anonymous objects, there may be cases where the outer element
> 's @since version number is higher than inner elements'. This does not affect interface usability.

> **NOTE**
>
> When both **align** and **offset** are set, the effects are combined. The overlay is first aligned relative to the
> component and then offset from its current upper left corner.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## align

```TypeScript
align?: Alignment
```

Alignment of the overlay relative to the component.

Default value: **TopStart**

**Type:** Alignment

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## offset

```TypeScript
offset?: OverlayOffset
```

Offset of the overlay from the upper left corner. By default, the overlay is in the upper left corner of the
component.

**Type:** OverlayOffset

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

