# TransitionEffect

定义TransitionEffect类指定转场效果。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## animation

```TypeScript
animation(value: AnimateParam): TransitionEffect
```

指定该TransitionEffect的动画参数。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | AnimateParam | Yes | 动画参数。该参数只用来指定动画参数，其入参AnimateParam的onFinish回调不生效。如果通过combine进行  TransitionEffect的组合，前一TransitionEffect的动画参数也可用于后一TransitionEffect。 |

**Return value:**

| Type | Description |
| --- | --- |
| TransitionEffect | 当前动画效果。 |

## asymmetric

```TypeScript
static asymmetric(
    appear: TransitionEffect,
    disappear: TransitionEffect
  ): TransitionEffect<"asymmetric">
```

设置非对称的转场效果，即出现、消失为两套独立不同的动画，效果不互为逆过程。具体效果可参考 [示例2](docroot://reference/apis-arkui/arkui-ts/ts-transition-animation-component.md#示例2使用不同接口实现图片出现消失)。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appear | TransitionEffect | Yes | 指定出现的转场效果。 如不通过asymmetric函数构造TransitionEffect，则表明该效果在组件出现和消失时均生效。 |
| disappear | TransitionEffect | Yes | 指定消失的转场效果。 如不通过asymmetric函数构造TransitionEffect，则表明该效果在组件出现和消失时均生效。 |

**Return value:**

| Type | Description |
| --- | --- |
| TransitionEffect&lt;"asymmetric"> | 当前动画非对称的转场效果。 |

## combine

```TypeScript
combine(transitionEffect: TransitionEffect): TransitionEffect
```

对TransitionEffect进行链式组合，以形成包含多种转场效果的TransitionEffect。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| transitionEffect | TransitionEffect | Yes | 被组合的过渡效果。 |

**Return value:**

| Type | Description |
| --- | --- |
| TransitionEffect | 组合过渡效应。 |

## constructor

```TypeScript
constructor(type: Type, effect: Effect)
```

构造TransitionEffect对象。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | Type | Yes | 转场类型。 |
| effect | Effect | Yes | 转场参数。 |

## move

```TypeScript
static move(edge: TransitionEdge): TransitionEffect<"move">
```

设置组件转场时从屏幕边缘滑入和滑出的效果。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| edge | TransitionEdge | Yes | 组件转场时从屏幕边缘滑入和滑出的效果，本质为平移效果，为插入时起点和删除时终点的值。 |

**Return value:**

| Type | Description |
| --- | --- |
| TransitionEffect&lt;"move"> | 当前动画从屏幕边缘滑入和滑出的效果。 |

## opacity

```TypeScript
static opacity(alpha: number): TransitionEffect<"opacity">
```

设置组件转场时的透明度效果。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alpha | number | Yes | 组件转场时的透明度效果，为插入时起点和删除时终点的值。 取值范围：[0, 1] 说明： 设置小于0的非法值按0处理，大于1的非法值按1处理。 |

**Return value:**

| Type | Description |
| --- | --- |
| TransitionEffect&lt;"opacity"> | 当前动画透明度效果。 |

## rotate

```TypeScript
static rotate(options: RotateOptions): TransitionEffect<"rotate">
```

设置组件转场时的旋转效果。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RotateOptions | Yes | 组件转场时的旋转效果，为插入时起点和删除时终点的值。 -x：横向的旋转向量分量。 -y：纵向的旋转向量分量。 -z：竖向的旋转向量分量。  - centerX、centerY指旋转中心点，centerX和centerY默认值是"50%"，即默认以组件的中心点为旋转中心点。 - 中心点为(0, 0)代表组件的左上角。 -centerZ指  z轴锚点，即3D旋转中心点的z轴分量，centerZ默认值是0。 -perspective指视距，不支持perspective属性做转场动画。 |

**Return value:**

| Type | Description |
| --- | --- |
| TransitionEffect&lt;"rotate"> | 当前动画旋转效果。 |

## scale

```TypeScript
static scale(options: ScaleOptions): TransitionEffect<"scale">
```

设置组件转场时的缩放效果。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ScaleOptions | Yes | 组件转场时的缩放效果，为插入时起点和删除时终点的值。设置的缩放值在组件当前的scale属性上进行叠加，如组件当前scale值为0.8，当转场缩放值设置为0.5时，  组件入场动画的缩放值将从0.4开始执行。 -x：横向放大倍数（或缩小比例）。 -y：纵向放大倍数（或缩小比例）。 -z：当前为二维显示，该参数无效。 - centerX、centerY指缩放  中心点，centerX和centerY默认值是"50%"，即默认以组件的中心点为缩放中心点。 - 中心点为(0, 0)代表组件的左上角。 说明： 设置centerX、centerY为非法字符串  时（例如，"illegalString"），默认值为"0"。 |

**Return value:**

| Type | Description |
| --- | --- |
| TransitionEffect&lt;"scale"> | 当前动画缩放效果。 |

## translate

```TypeScript
static translate(options: TranslateOptions): TransitionEffect<"translate">
```

设置组件转场时的平移效果。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TranslateOptions | Yes | 组件转场时的平移效果，为插入时起点和删除时终点的值。 -x：横向的平移距离。 -y：纵向的平移距离。 -z：竖向的平移距离。 |

**Return value:**

| Type | Description |
| --- | --- |
| TransitionEffect&lt;"translate"> | 当前动画平移效果。 |

## IDENTITY

```TypeScript
static readonly IDENTITY: TransitionEffect<"identity">
```

禁用转场效果。

**Type:** TransitionEffect<"identity">

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## SLIDE

```TypeScript
static readonly SLIDE: TransitionEffect<
    "asymmetric",
    {
      appear: TransitionEffect<"move", TransitionEdge>;
      disappear: TransitionEffect<"move", TransitionEdge>;
    }
  >
```

相当于TransitionEffect.asymmetric(TransitionEffect.move(TransitionEdge.START), TransitionEffect.move( TransitionEdge.END))。从START边滑入，END边滑出。即在LTR模式下，从左侧滑入，右侧滑出；在RTL模式下，从右侧滑入，左侧滑出。

**Type:** TransitionEffect<
    "asymmetric",
    {
      appear: TransitionEffect<"move", TransitionEdge>;
      disappear: TransitionEffect<"move", TransitionEdge>;
    }
  >

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## OPACITY

```TypeScript
static readonly OPACITY: TransitionEffect<"opacity">
```

为组件添加透明度转场效果，出现时透明度从0到1、消失时透明度从1到0，相当于TransitionEffect.opacity(0)。

**Type:** TransitionEffect<"opacity">

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## SLIDE_SWITCH

```TypeScript
static readonly SLIDE_SWITCH: TransitionEffect<"slideSwitch">
```

指定出现时从右侧先缩小再放大滑入、消失时从左侧先缩小再放大滑出的转场效果。自带动画参数，也可覆盖动画参数，自带的动画参数时长600ms，指定动画曲线cubicBezierCurve(0.24, 0.0, 0.50, 1.0)，最小 缩放比例为0.8。

**Type:** TransitionEffect<"slideSwitch">

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

