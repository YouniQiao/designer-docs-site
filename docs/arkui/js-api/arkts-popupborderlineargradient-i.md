# PopupBorderLinearGradient

弹出边框线性渐变色。

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## colors

```TypeScript
colors: Array<[ResourceColor, number]>
```

指定渐变色颜色和其对应的百分比位置的数组，设置非法颜色直接跳过。 **说明：** 颜色设置方式可参考：[ResourceColor]ResourceColor，非[ResourceColor]ResourceColor范围内的颜色值即为非法颜色。 数组内颜色设置为undefined或者null时，默认为黑色。 colors参数的约束： [ResourceColor]ResourceColor表示填充的颜色，number表示指定颜色所处的位置，取值范围为[0,1.0]，0表示需要设置渐变色的容器的起始位置，1.0表示容器的结束位置。为实现多个颜色渐 变效果，建议多个数组中number参数递增设置，如后一个数组number参数比前一个数组number小时，按照等于前一个数组number的值处理。

**Type:** Array<[ResourceColor, number]>

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## direction

```TypeScript
direction?: GradientDirection
```

线性渐变的方向。 默认值：GradientDirection.Bottom **说明：** 当线性渐变的方向设置为GradientDirection.None时，显示默认值。

**Type:** GradientDirection

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

