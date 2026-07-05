# DistortionParam

空间扭曲形变参数。 > **说明：** > > - 四个角的坐标可以按照如下坐标系设置。一个组件，左上角位置为[0, 0]，右上角位置为[1, 0]，左下角位置为[0, 1]，右下角位置为[1, 1]。 > > - 如bottomLeft属性设置为[0.5, 0.5]，则表示左下角形变到组件中心点的位置，产生对应的形变效果。 > > - 设置四个角坐标位置时请符合空间感逻辑。如topLeft = [0, 0.7]，bottomLeft = [0, 0.2]，左上角的位置低于左下角的位置，违背空间感的逻辑，可能导致渲染异常。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## bottomLeft

```TypeScript
bottomLeft: Vector2
```

左下角的坐标。 默认值：[0, 1]

**Type:** Vector2

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## bottomRight

```TypeScript
bottomRight: Vector2
```

右下角的坐标。 默认值：[1, 1]

**Type:** Vector2

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## topLeft

```TypeScript
topLeft: Vector2
```

左上角的坐标。 默认值：[0, 0]

**Type:** Vector2

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## topRight

```TypeScript
topRight: Vector2
```

右上角的坐标。 默认值：[1, 0]

**Type:** Vector2

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## barrelDistortion

```TypeScript
barrelDistortion: Vector4
```

四条边的桶形扭曲程度参数。 Vector4中四个值分别控制：x是左边，y是右边，z是上边，w是下边。 默认值：[0, 0, 0, 0] 正数表示边向外凸出的扭曲，负数表示边向内凹陷的扭曲。扭曲参数绝对值达到1时，扭曲程度为极端扭曲。 x、y、z、w 各值建议设置范围：[-1, 1]

**Type:** Vector4

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

