# UnionEffectContainerOptions

设置UnionEffectContainer构造参数。

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## spacing

```TypeScript
spacing?: number
```

spacing表示后代组件发生融合形变的程度。它不代表实际的间距，只有设置了使用祖先组件UnionEffectContainer融合效果的后代组件且后代组件靠近到一定程度时才会发生融合。 **说明：** 设置的spacing大于0，且设置了祖先组件UnionEffectContainer融合效果的后代组件彼此靠近到一定程度，这些后代组件会开始相互融合形变，且随着距离的变近融合形变的效果越强。该值越大，后代组件彼此靠近时，它们的 融合会越早开始，越容易发生融合形变。 默认值：0，此时子组件形状会融合在一起，但不会有形变效果。 取值范围：[0, +∞)。小于0时按0处理。

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

