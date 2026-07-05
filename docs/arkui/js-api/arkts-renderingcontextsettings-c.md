# RenderingContextSettings

用来配置CanvasRenderingContext2D对象的参数，包括是否开启抗锯齿。

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(antialias?: boolean)
```

构造CanvasRenderingContext2D对象，支持配置开启抗锯齿。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| antialias | boolean | No | 表明canvas是否开启抗锯齿。  异常值undefined按默认值处理。  false：表示不开启抗锯齿功能，true：表示开启抗锯齿。  默认值：false  说明：  绘制文本默认开启抗锯齿效果，RenderingContextSettings的antialias无法影响绘制文本的抗锯齿效果，  如需修改文本抗锯齿效果，请使用[antialias24+](#antialias24)接口。 |

## antialias

```TypeScript
antialias?: boolean
```

表明canvas是否开启抗锯齿。 <br>异常值undefined按默认值处理。 <br>false：表示不开启抗锯齿功能，true：表示开启抗锯齿。 <br>默认值：false <br>**说明：**<br> 绘制文本默认开启抗锯齿效果，RenderingContextSettings的antialias无法影响绘制文本的抗锯齿效果， 如需修改文本抗锯齿效果，请使用[antialias<sup>24+</sup>](#antialias24)接口。

**Type:** boolean

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

