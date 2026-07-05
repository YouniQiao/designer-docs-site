# ImageParticleParameters

设置图片选项。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## objectFit

```TypeScript
objectFit?: ImageFit
```

图片显示模式。

**Type:** ImageFit

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
size: ParticleTuple<Dimension, Dimension>
```

图像尺寸。 默认值：[0, 0]

**Type:** ParticleTuple<Dimension, Dimension>

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## src

```TypeScript
src: ResourceStr
```

图片路径，支持本地图片和网络图片，引用方式请参考[加载图片资源](docroot://ui/arkts-graphics-display.md#加载图片资源)。 暂不支持svg图片类型。 src未发生变化时，会优先使用缓存的资源，无法动态切换资源。如需动态切换资源建议切换为不同的src。

**Type:** ResourceStr

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

