# VideoController

A **VideoController** object can control one or more **Video** components.

**Since:** 7

<!--Device-unnamed-declare class VideoController--><!--Device-unnamed-declare class VideoController-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

A constructor used to create a **VideoController** object.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoController-constructor()--><!--Device-VideoController-constructor()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="exitfullscreen"></a>
## exitFullscreen

```TypeScript
exitFullscreen()
```

Exits full-screen mode.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoController-exitFullscreen()--><!--Device-VideoController-exitFullscreen()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="pause"></a>
## pause

```TypeScript
pause()
```

Pauses playback. The current frame is then displayed, and playback will be resumed from this paused position.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoController-pause()--><!--Device-VideoController-pause()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="requestfullscreen"></a>
## requestFullscreen

```TypeScript
requestFullscreen(value: boolean)
```

Requests full-screen playback.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoController-requestFullscreen(value: boolean)--><!--Device-VideoController-requestFullscreen(value: boolean)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to request full-screen playback (filling the application window).<br>**true**:Request full-screen playback.<br>**false**: Do not request full-screen playback.<br>Default value: **false**. |

<a id="reset"></a>
## reset

```TypeScript
reset(): void
```

Resets the **AVPlayer** instance of this component, which displays the current frame and sets the playback to start from the beginning for subsequent playbacks.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-VideoController-reset(): void--><!--Device-VideoController-reset(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="setcurrenttime"></a>
## setCurrentTime

```TypeScript
setCurrentTime(value: number)
```

Sets the video playback position.

> **NOTE**  
>  
> To start playback from a specific position, disable autoplay, wait for video preparation to complete, and then  
> seek to the target position.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoController-setCurrentTime(value: number)--><!--Device-VideoController-setCurrentTime(value: number)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Video playback position.<br>Value range: [0, [duration](arkts-arkui-preparedinfo-i.md)]<br>When the set value is greater than the duration, the progress will jump to the end; when the set value is less than 0, no progress jump will occur.<br>Unit: second<br>Since API version 8, seek mode configuration is supported. For details, see [setCurrentTime<sup>8+</sup>](arkts-arkui-videocontroller-c.md#setcurrenttime-1). |

<a id="setcurrenttime-1"></a>
## setCurrentTime

```TypeScript
setCurrentTime(value: number, seekMode: SeekMode)
```

Sets the video playback position with the specified seek mode.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoController-setCurrentTime(value: number, seekMode: SeekMode)--><!--Device-VideoController-setCurrentTime(value: number, seekMode: SeekMode)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Video playback position.<br>Value range: [0, [duration](arkts-arkui-preparedinfo-i.md)]<br>When the set value is greater than the duration, the progress will jump to the end; when the set value is less than 0, no progress jump will occur.<br>Unit: second |
| seekMode | [SeekMode](../../apis-media-kit/arkts-apis/arkts-media-media-seekmode-e.md) | Yes | Seek mode. |

<a id="start"></a>
## start

```TypeScript
start()
```

Starts playback.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoController-start()--><!--Device-VideoController-start()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="stop"></a>
## stop

```TypeScript
stop()
```

Stops playback. The current frame is then displayed, and playback will restart from the very beginning.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-VideoController-stop()--><!--Device-VideoController-stop()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

