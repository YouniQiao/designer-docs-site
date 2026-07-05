# ScrollAnimationOptions

自定义滚动动画的参数。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## duration

```TypeScript
duration?: number
```

滚动时长。 <p><strong>说明</strong> <br>设置为小于0的值时，按默认值处理。 </p>

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## curve

```TypeScript
curve?: Curve | ICurve
```

滚动曲线。

**Type:** Curve | ICurve

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## canOverScroll

```TypeScript
canOverScroll?: boolean
```

是否启用过滚动。 <p><strong>说明</strong> <br> 设置为<em>true</em>时可以滚动超出边界并触发回弹动画，同时组件的<em>edgeEffect</em>属性需设置为EdgeEffect.Spring。 </p>

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

