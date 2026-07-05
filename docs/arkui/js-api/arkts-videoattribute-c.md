# VideoAttribute

除支持[通用属性]common外，还支持以下属性： 除支持[通用事件]common外，还支持以下事件：

**Inheritance:** VideoAttributeextends: CommonMethod<VideoAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## analyzerConfig

```TypeScript
analyzerConfig(config: ImageAnalyzerConfig)
```

设置AI分析识别类型，包括主体识别、文字识别和对象查找等功能，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | ImageAnalyzerConfig | Yes | 设置AI分析识别类型。 |

## autoPlay

```TypeScript
autoPlay(value: boolean)
```

设置视频是否自动播放，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否自动播放。 true：开启自动播放；false：关闭自动播放。 默认值：false |

## controls

```TypeScript
controls(value: boolean)
```

设置控制视频播放的控制栏是否显示，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 控制视频播放的控制栏是否显示。 true：控制栏显示；false：控制栏不显示。 默认值：true |

## enableAnalyzer

```TypeScript
enableAnalyzer(enable: boolean)
```

设置组件支持AI分析，当前支持主体识别、文字识别和对象查找等功能，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。 使能后，视频播放暂停时自动进入分析状态，开始分析当前画面帧，视频继续播放后自动退出分析状态。 不能和[overlay]CommonMethod#overlay属性同时使用，两者同时设置时[overlay]CommonMethod#overlay中 [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8)属性将失效。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | 是否启用AI分析功能。 true：开启AI分析功能；false：关闭AI分析功能。 默认值：false |

## enableShortcutKey

```TypeScript
enableShortcutKey(enabled: boolean)
```

设置组件支持快捷键响应，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。 目前支持在组件获焦后响应空格键播放/暂停、上下方向键调整视频音量、左右方向键快进/快退。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | 是否启用快捷键响应。 true：开启快捷键响应；false：关闭快捷键响应。 默认值：false 说明： enabled设置为  false且Video组件的控制栏显示时，仍然可以通过左右方向键控制进度条快进或快退。 |

## loop

```TypeScript
loop(value: boolean)
```

设置是否单个视频循环播放，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 6

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否单个视频循环播放。 true：开启循环播放；false：关闭循环播放。 默认值：false |

## muted

```TypeScript
muted(value: boolean)
```

设置视频是否静音，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 视频是否静音。 true：开启静音；false：关闭静音。 默认值：false |

## objectFit

```TypeScript
objectFit(value: ImageFit)
```

设置视频的填充模式，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ImageFit | Yes | 视频填充模式。 默认值：Cover 约束：不支持ImageFit类型中的枚举值MATRIX，若设置，则作用效果与Cover一致。 异常值：若设置异常值  undefined、null，或不在[ImageFit]ImageFit枚举范围内的值，作用效果均与Cover一致。 |

## onError

```TypeScript
onError(event: VoidCallback | import('../api/@ohos.base').ErrorCallback)
```

播放失败时触发该事件，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback \| import('../api/@ohos.base').ErrorCallback | Yes | 视频播放失败时的回调函数。其中  [ErrorCallback](../../apis-basic-service-kit/arkts-apis/arkts-errorcallback-i.md#ErrorCallback)类型入参的回调函数用于接收异常信息，回调返回的错误码详细介绍请参见  [Video组件错误码](docroot://reference/apis-arkui/errorcode-video.md)和  [Media错误码](docroot://reference/apis-media-kit/errorcode-media.md)。 [since 20] |

## onFinish

```TypeScript
onFinish(event: VoidCallback)
```

播放结束时触发该事件，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback | Yes | 视频播放结束的回调函数。 [since 18] |

## onFullscreenChange

```TypeScript
onFullscreenChange(callback: Callback<FullscreenInfo>)
```

在全屏播放与非全屏播放状态之间切换时触发该事件，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;FullscreenInfo> | Yes | 在全屏播放与非全屏播放状态之间切换时的回调函数。 [since 18] |

## onPause

```TypeScript
onPause(event: VoidCallback)
```

暂停时触发该事件，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback | Yes | 视频暂停的回调函数。 [since 18] |

## onPrepared

```TypeScript
onPrepared(callback: Callback<PreparedInfo>)
```

视频准备完成时触发该事件，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PreparedInfo> | Yes | 视频准备完成时的回调函数。 [since 18] |

## onSeeked

```TypeScript
onSeeked(callback: Callback<PlaybackInfo>)
```

操作进度条完成后，上报播放时间信息，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PlaybackInfo> | Yes | 操作进度条完成后的回调函数。 [since 18] |

## onSeeking

```TypeScript
onSeeking(callback: Callback<PlaybackInfo>)
```

操作进度条过程时上报时间信息，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PlaybackInfo> | Yes | 操作进度条过程时的回调函数。 [since 18] |

## onStart

```TypeScript
onStart(event: VoidCallback)
```

播放时触发该事件，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback | Yes | 视频播放的回调函数。 [since 18] |

## onStop

```TypeScript
onStop(event: Callback<void>)
```

播放停止时触发该事件(当stop()方法被调用后触发)，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Callback&lt;void> | Yes | 视频播放停止时的回调函数。 |

## onUpdate

```TypeScript
onUpdate(callback: Callback<PlaybackInfo>)
```

播放进度变化时触发该事件，支持[attributeModifier]CommonMethod#attributeModifier动态设置属性方法。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;PlaybackInfo> | Yes | 播放进度变化时的回调函数。 [since 18] |

## surfaceBackgroundColor

```TypeScript
surfaceBackgroundColor(color: ColorMetrics)
```

Set background color of the surface holden by Video(only support Color.Black and Color.Transparent). The default value is Color.Black.

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | ColorMetrics | Yes |  |

