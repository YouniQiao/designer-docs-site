# BorderImageOption

Border image option

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fill

```TypeScript
fill?: boolean
```

Whether to fill the center of the border image.
true: Fill the center of the border image.
false: Do not fill the center of the border image.

**Type:** boolean

**Default:** false

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## outset

```TypeScript
outset?: Length | EdgeWidths | LocalizedEdgeWidths
```

Amount by which the border image is extended beyond the border box.

**Type:** Length | EdgeWidths | LocalizedEdgeWidths

**Default:** 0

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## repeat

```TypeScript
repeat?: RepeatMode
```

Repeat mode of the source image's slices on the border.

**Type:** RepeatMode

**Default:** RepeatMode.Stretch

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## slice

```TypeScript
slice?: Length | EdgeWidths | LocalizedEdgeWidths
```

Slice width of the upper left corner, upper right corner, lower left corner,
and lower right corner of the border image.

**Type:** Length | EdgeWidths | LocalizedEdgeWidths

**Default:** 0

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## source

```TypeScript
source?: string | Resource | LinearGradient
```

Source or gradient color of the border image.
When the type is string, this parameter sets the border image source.
For details about how to reference image resources, see Loading Image Resources.

<p><strong>NOTE</strong>:
<br>The border image source applies only to container components, such as Row, Column, and Flex.
</p>

**Type:** string | Resource | LinearGradient

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## width

```TypeScript
width?: Length | EdgeWidths | LocalizedEdgeWidths
```

Width of the border image.

**Type:** Length | EdgeWidths | LocalizedEdgeWidths

**Default:** 0

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

