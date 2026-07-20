# Video properties/events

In addition to the [universal attributes](arkts-arkui-common-commonmethod-c.md), the following attributes are supported.

In addition to the [universal events](arkts-arkui-common-commonmethod-c.md), the following events are supported.

**Inheritance/Implementation:** VideoAttribute extends [CommonMethod<VideoAttribute>](CommonMethod<VideoAttribute>)

**Since:** 7

<!--Device-unnamed-declare class VideoAttribute extends CommonMethod<VideoAttribute>--><!--Device-unnamed-declare class VideoAttribute extends CommonMethod<VideoAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## analyzerConfig

```TypeScript
analyzerConfig(config: ImageAnalyzerConfig)
```

Sets the AI image analysis types, including subject recognition, text recognition, and object lookup. This attribute can be dynamically set using [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1).

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-VideoAttribute-analyzerConfig(config: ImageAnalyzerConfig): VideoAttribute--><!--Device-VideoAttribute-analyzerConfig(config: ImageAnalyzerConfig): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| config | [ImageAnalyzerConfig](../arkts-apis/arkts-arkui-image-common-imageanalyzerconfig-i.md) | Yes | AI image analysis types. |

## autoPlay

```TypeScript
autoPlay(value: boolean)
```

Sets whether to enable autoplay. This attribute can be dynamically set using [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoAttribute-autoPlay(value: boolean): VideoAttribute--><!--Device-VideoAttribute-autoPlay(value: boolean): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to enable autoplay.<br>**true**: Enable autoplay.<br>**false**: Disable autoplay.<br>Default value: **false**. |

## controls

```TypeScript
controls(value: boolean)
```

Sets whether to display the video playback control bar. This attribute can be dynamically set using [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoAttribute-controls(value: boolean): VideoAttribute--><!--Device-VideoAttribute-controls(value: boolean): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to display the video playback control bar.<br>**true**: Display the video playback control bar.<br>**false**: Do not display the video playback control bar.<br>Default value: **true** |

## enableAnalyzer

```TypeScript
enableAnalyzer(enable: boolean)
```

Sets whether to enable the AI image analyzer, which supports subject recognition, text recognition, and object lookup. This attribute can be dynamically set using [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1).

After this feature is enabled, the video automatically enters an analysis state to process the current frame when playback is paused, and exits the analysis state when playback is resumed.

Note that if this attribute and the [overlay](arkts-arkui-common-commonmethod-c.md#overlay-1) attribute are both set,[CustomBuilder](arkts-arkui-custombuilder-t.md) specified in [overlay](arkts-arkui-common-commonmethod-c.md) has no effect.

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1) since API version 20.

After this feature is enabled, the video automatically enters an analysis state to process the current frame when playback is paused, and exits the analysis state when playback is resumed.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-VideoAttribute-enableAnalyzer(enable: boolean): VideoAttribute--><!--Device-VideoAttribute-enableAnalyzer(enable: boolean): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | Whether to enable the AI image analyzer.<br>**true**: Enable the AI image analyzer.**false**: Disable the AI image analyzer.<br>Default value: **false** |

## enableShortcutKey

```TypeScript
enableShortcutKey(enabled: boolean)
```

Sets whether the component responds to keyboard shortcuts when it has focus. This attribute can be dynamically set using [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1).

Currently, the component can respond to the following keys when it is in focus: spacebar for playing or pausing the video, up or down arrow key for adjusting the video volume, and left or right arrow key for fast forwarding or rewinding the video.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-VideoAttribute-enableShortcutKey(enabled: boolean): VideoAttribute--><!--Device-VideoAttribute-enableShortcutKey(enabled: boolean): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Whether the component responds to keyboard shortcuts when it has focus.<br>**true**:The component responds to keyboard shortcuts when it has focus.<br>**false**: The component does not respond to keyboard shortcuts when it has focus.<br>Default value: **false**. |

## loop

```TypeScript
loop(value: boolean)
```

Sets whether to repeat the video. This attribute can be dynamically set using [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoAttribute-loop(value: boolean): VideoAttribute--><!--Device-VideoAttribute-loop(value: boolean): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to repeat the video.<br>**true**: Repeat the video.<br>**false**: Do not repeat the video.<br>Default value: **false**. |

## muted

```TypeScript
muted(value: boolean)
```

Sets whether to mute the video. This attribute can be dynamically set using [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoAttribute-muted(value: boolean): VideoAttribute--><!--Device-VideoAttribute-muted(value: boolean): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to mute the video.<br>**true**: Mute the video.<br>**false**: Unmute the video.<br>Default value: **false**. |

## objectFit

```TypeScript
objectFit(value: ImageFit)
```

Sets the fill mode for the video content. This attribute can be dynamically set using [attributeModifier](arkts-arkui-common-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoAttribute-objectFit(value: ImageFit): VideoAttribute--><!--Device-VideoAttribute-objectFit(value: ImageFit): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ImageFit](../arkts-apis/arkts-arkui-enums-imagefit-e.md) | Yes | Fill mode of the video content.<br>Default value: **Cover**<br>Constraints: The enumerated value **Matrix** in **ImageFit** is not supported and will behave as **Cover**.<br>Invalid values,including **undefined**, **null**, and values outside the [ImageFit](../arkts-apis/arkts-arkui-enums-imagefit-e.md) enumeration range,will result in an effect the same as **Cover**. |

## onError

```TypeScript
onError(event: VoidCallback | import('../api/@ohos.base').ErrorCallback)
```

Called when playback fails.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoAttribute-onError(event: VoidCallback | import('../api/@ohos.base').ErrorCallback): VideoAttribute--><!--Device-VideoAttribute-onError(event: VoidCallback | import('../api/@ohos.base').ErrorCallback): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback \| import('../api/@ohos.base').ErrorCallback | Yes | [since 7 - 19] |

## onFinish

```TypeScript
onFinish(event: VoidCallback)
```

Called when the video playback ends.Anonymous Object Rectification.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoAttribute-onFinish(event: VoidCallback): VideoAttribute--><!--Device-VideoAttribute-onFinish(event: VoidCallback): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [VoidCallback](../arkts-apis/arkts-arkui-voidcallback-t.md) | Yes | [since 7 - 17] |

## onFullscreenChange

```TypeScript
onFullscreenChange(callback: Callback<FullscreenInfo>)
```

Called when the video enters and exits the full screen.Anonymous Object Rectification.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoAttribute-onFullscreenChange(callback: Callback<FullscreenInfo>): VideoAttribute--><!--Device-VideoAttribute-onFullscreenChange(callback: Callback<FullscreenInfo>): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<FullscreenInfo> | Yes | [since 7 - 17] |

## onPause

```TypeScript
onPause(event: VoidCallback)
```

Called when the video is paused.Anonymous Object Rectification.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoAttribute-onPause(event: VoidCallback): VideoAttribute--><!--Device-VideoAttribute-onPause(event: VoidCallback): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [VoidCallback](../arkts-apis/arkts-arkui-voidcallback-t.md) | Yes | [since 7 - 17] |

## onPrepared

```TypeScript
onPrepared(callback: Callback<PreparedInfo>)
```

Called when the video preparation is complete.Anonymous Object Rectification.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoAttribute-onPrepared(callback: Callback<PreparedInfo>): VideoAttribute--><!--Device-VideoAttribute-onPrepared(callback: Callback<PreparedInfo>): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<PreparedInfo> | Yes | [since 7 - 17] |

## onSeeked

```TypeScript
onSeeked(callback: Callback<PlaybackInfo>)
```

Called when the playback time information is reported after the operation progress bar is completed.Anonymous Object Rectification.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoAttribute-onSeeked(callback: Callback<PlaybackInfo>): VideoAttribute--><!--Device-VideoAttribute-onSeeked(callback: Callback<PlaybackInfo>): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<PlaybackInfo> | Yes | [since 7 - 17] |

## onSeeking

```TypeScript
onSeeking(callback: Callback<PlaybackInfo>)
```

Called when the time information is reported when the progress bar process is operated.Anonymous Object Rectification.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoAttribute-onSeeking(callback: Callback<PlaybackInfo>): VideoAttribute--><!--Device-VideoAttribute-onSeeking(callback: Callback<PlaybackInfo>): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<PlaybackInfo> | Yes | [since 7 - 17] |

## onStart

```TypeScript
onStart(event: VoidCallback)
```

Called when the video is played.Anonymous Object Rectification.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoAttribute-onStart(event: VoidCallback): VideoAttribute--><!--Device-VideoAttribute-onStart(event: VoidCallback): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [VoidCallback](../arkts-apis/arkts-arkui-voidcallback-t.md) | Yes | [since 7 - 17] |

## onStop

```TypeScript
onStop(event: Callback<void>)
```

Called when the video is stopped.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-VideoAttribute-onStop(event: Callback<void>): VideoAttribute--><!--Device-VideoAttribute-onStop(event: Callback<void>): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<void> | Yes |  |

## onUpdate

```TypeScript
onUpdate(callback: Callback<PlaybackInfo>)
```

Called when the playback progress changes.Anonymous Object Rectification.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoAttribute-onUpdate(callback: Callback<PlaybackInfo>): VideoAttribute--><!--Device-VideoAttribute-onUpdate(callback: Callback<PlaybackInfo>): VideoAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<PlaybackInfo> | Yes | [since 7 - 17] |

