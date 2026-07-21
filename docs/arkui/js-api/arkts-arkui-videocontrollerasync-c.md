# VideoControllerAsync

Video playback controller class for asynchronous operations.Provides methods to control video playback, timing, and display mode.

**Since:** 26.0.0

<!--Device-unnamed-declare class VideoControllerAsync--><!--Device-unnamed-declare class VideoControllerAsync-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

Creates a VideoControllerAsync instance.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-VideoControllerAsync-constructor()--><!--Device-VideoControllerAsync-constructor()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="exitfullscreen"></a>
## exitFullscreen

```TypeScript
exitFullscreen()
```

Exits fullscreen display mode.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-VideoControllerAsync-exitFullscreen()--><!--Device-VideoControllerAsync-exitFullscreen()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="pause"></a>
## pause

```TypeScript
pause(): Promise<void>
```

Pauses video playback asynchronously.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-VideoControllerAsync-pause(): Promise<void>--><!--Device-VideoControllerAsync-pause(): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="requestfullscreen"></a>
## requestFullscreen

```TypeScript
requestFullscreen(value: boolean)
```

Requests fullscreen display for the video.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-VideoControllerAsync-requestFullscreen(value: boolean)--><!--Device-VideoControllerAsync-requestFullscreen(value: boolean)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | true to enter fullscreen, false otherwise. |

<a id="reset"></a>
## reset

```TypeScript
reset(): Promise<void>
```

Resets the video controller asynchronously.Restores the controller to its initial state.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-VideoControllerAsync-reset(): Promise<void>--><!--Device-VideoControllerAsync-reset(): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="setcurrenttime"></a>
## setCurrentTime

```TypeScript
setCurrentTime(value: number, seekMode?: SeekMode)
```

Sets the current playback time with specified seek mode.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-VideoControllerAsync-setCurrentTime(value: double, seekMode?: SeekMode)--><!--Device-VideoControllerAsync-setCurrentTime(value: double, seekMode?: SeekMode)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | The target time in seconds.<br>Unit: Seconds. The value must be greater than or equal to 0. Value constraint: The maximum value is the total duration of the video. If the duration exceeds the maximum value, the system jumps to the end of the video. |
| seekMode | [SeekMode](../../apis-media-kit/arkts-apis/arkts-media-media-seekmode-e.md) | No | The seek mode to use for time adjustment. |

<a id="start"></a>
## start

```TypeScript
start(): Promise<void>
```

Starts video playback asynchronously.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-VideoControllerAsync-start(): Promise<void>--><!--Device-VideoControllerAsync-start(): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="stop"></a>
## stop

```TypeScript
stop(): Promise<void>
```

Stops video playback asynchronously.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-VideoControllerAsync-stop(): Promise<void>--><!--Device-VideoControllerAsync-stop(): Promise<void>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

