# CanvasAttribute

除支持[通用属性](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md)外，还支持以下属性： 除支持[通用事件](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md)外，还支持如下事件：

**Inheritance:** CanvasAttributeextends: CommonMethod<CanvasAttribute>.

**Since:** 8

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enableAnalyzer

```TypeScript
enableAnalyzer(enable: boolean)
```

设置组件支持AI分析，当前支持主体识别、文字识别和对象查找等功能，支持[attributeModifier]CommonMethod#attributeModifier 动态设置属性方法。 需要搭配[CanvasRenderingContext2D](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md)中的 [StartImageAnalyzer](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md#startimageanalyzer12)和 [StopImageAnalyzer](docroot://reference/apis-arkui/arkui-ts/ts-canvasrenderingcontext2d.md#stopimageanalyzer12) 一起使用。 不能和[overlay]CommonMethod#overlay属性同时使用， 两者同时设置时overlay中CustomBuilder属性将失效。该特性依赖设备能力。 > **说明：** > > 从API version 20开始，该接口支持在 > [attributeModifier]CommonMethod#attributeModifier > 中调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | 组件支持AI分析，需要组件内容支持主体识别、文字识别或对象查找。  设置为true时，组件可进行AI分析，设置为false时，组件不可进行AI分析。  异常值null和undefined按默认值处理。  默认值：false |

## onReady

```TypeScript
onReady(event: VoidCallback)
```

Canvas组件初始化完成或者发生大小变化时的事件回调，支持 [attributeModifier]CommonMethod#attributeModifier 动态设置属性方法。 当该事件被触发时画布被清空，该事件之后Canvas组件宽高确定且可获取，可使用Canvas相关API进行绘制。 当Canvas组件仅发生位置变化时，只触发 [onAreaChange](docroot://reference/apis-arkui/arkui-ts/ts-universal-component-area-change-event.md#onareachange) 事件，不触发onReady事件。 [onAreaChange](docroot://reference/apis-arkui/arkui-ts/ts-universal-component-area-change-event.md#onareachange) 事件在onReady事件后触发。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback | Yes | Canvas组件初始化完成或者发生大小变化时的事件回调事件。 |

## onReady

```TypeScript
onReady(event: Callback<DrawingRenderingContext | undefined> | undefined)
```

Canvas组件初始化完成或者发生大小变化时的事件回调，支持 [attributeModifier]CommonMethod#attributeModifier 动态设置属性方法。 当该事件被触发时画布被清空，该事件之后Canvas组件宽高确定且可获取，可使用Canvas相关API进行绘制。 当Canvas组件仅发生位置变化时，只触发 [onAreaChange]CommonMethod#onAreaChange事件，不触发onReady事件。 [onAreaChange]CommonMethod#onAreaChange事件在onReady事件后触发。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**Widget capability:** This API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;DrawingRenderingContext \| undefined> \| undefined | Yes | Canvas组件初始化完成或者发生大小变化时的回调事件。  关于Callback类型的入参：  1. 只有使用[CanvasParams](arkts-canvasparams-i.md#CanvasParams)创建的Canvas组件在该回调中返回  DrawingRenderingContext对象，否则返回undefined。  2. 该回调返回的DrawingRenderingContext对象不允许作为参数创建Canvas组件，  否则会导致应用崩溃。 |

