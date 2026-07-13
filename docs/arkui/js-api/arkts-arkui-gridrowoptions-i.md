# GridRowOptions

Defines layout options of the **GridRow** container.

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## breakpoints

```TypeScript
breakpoints?: BreakPoints
```

Array of breakpoint values and the corresponding reference based on the application window or container size.

Default value:

```
{
value: ["320vp", "600vp", "840vp"],
reference: BreakpointsReference.WindowSize
}
```

Invalid values are treated as the default value.

Unit: vp.

**Type:** BreakPoints

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## columns

```TypeScript
columns?: number | GridRowColumnOption
```

Number of columns in the grid layout.

The value is an integer greater than 0.

- Before API version 20: The default value is 12.
- API version 20 or later: The default value is { xs: 2, sm: 4, md: 8, lg: 12, xl: 12, xxl: 12 }.

Invalid values are treated as the default value.

**Type:** number | GridRowColumnOption

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## direction

```TypeScript
direction?: GridRowDirection
```

Arrangement direction of the grid layout.

Default value: **GridRowDirection.Row**

Invalid values are treated as the default value.

**Type:** GridRowDirection

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## gutter

```TypeScript
gutter?: Length | GutterOption
```

Gutter of the grid layout.

Default value: **0**

Invalid values are treated as the default value.

Unit: vp.

**Type:** Length | GutterOption

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

