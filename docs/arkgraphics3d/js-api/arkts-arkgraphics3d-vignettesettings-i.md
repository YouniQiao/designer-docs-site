# VignetteSettings

Defines vignette parameters.

**Since:** 22

**System capability:** SystemCapability.ArkUi.Graphics3D

## intensity

```TypeScript
intensity?: number
```

Controls how strong the dark or bright edges are. When intensity > 0, the edges darken and the center brightens, creating a classic vignette effect. When intensity < 0, the center darkens and the edges brighten, producing an reverse vignette effect.

**Type:** number

**Default:** 0.4

**Since:** 22

**System capability:** SystemCapability.ArkUi.Graphics3D

## roundness

```TypeScript
roundness?: number
```

Controls the roundness of vignette between [0, 1]. Lower value will make the vignette effect more square.

**Type:** number

**Default:** sqrt(0.5)

**Since:** 22

**System capability:** SystemCapability.ArkUi.Graphics3D

