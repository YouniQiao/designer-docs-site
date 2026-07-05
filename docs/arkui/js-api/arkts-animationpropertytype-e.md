# AnimationPropertyType

```TypeScript
declare enum AnimationPropertyType
```

用于动画的属性类型。

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ROTATION

```TypeScript
ROTATION = 0
```

x、y、z方向的旋转角属性。该属性对应参数个数为3，属性的单位为度（°）。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## TRANSLATION

```TypeScript
TRANSLATION = 1
```

x、y方向的平移属性。该属性对应参数个数为2，属性的单位为px。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## SCALE

```TypeScript
SCALE = 2
```

x、y方向的缩放属性。该属性对应参数个数为2，属性的取值范围为(-∞, +∞) 。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## OPACITY

```TypeScript
OPACITY = 3
```

透明度属性。该属性对应参数个数为1，属性的取值范围为[0,1]。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

