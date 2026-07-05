# RepeatMode

```TypeScript
declare enum RepeatMode
```

Defines the Border Image Repeat Mode.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Repeat

```TypeScript
Repeat = 0
```

The source image's slices are tiled. Tiles beyond the border box will be clipped.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Stretch

```TypeScript
Stretch = 1
```

The source image's slices are stretched to fill the border box.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Round

```TypeScript
Round = 2
```

The source image's slices are tiled to fill the border box. Tiles may be compressed when needed.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Space

```TypeScript
Space = 3
```

The source image's slices are tiled to fill the border box. Extra space will be distributed in between tiles.

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

