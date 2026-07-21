# MovingPhotoViewAttribute

Defines the moving photo view attribute functions.

**Inheritance/Implementation:** MovingPhotoViewAttribute extends [CommonMethod<MovingPhotoViewAttribute>](CommonMethod<MovingPhotoViewAttribute>)

**Since:** 12

<!--Device-unnamed-declare class MovingPhotoViewAttribute extends CommonMethod<MovingPhotoViewAttribute>--><!--Device-unnamed-declare class MovingPhotoViewAttribute extends CommonMethod<MovingPhotoViewAttribute>-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

## Modules to Import

```TypeScript
import { PixelMapFormat, MovingPhotoViewAttribute, MovingPhotoView, MovingPhotoViewController, DynamicRangeMode } from '@kit.MediaLibraryKit';
```

<a id="autoplay"></a>
## autoPlay

```TypeScript
autoPlay(isAutoPlay: boolean): MovingPhotoViewAttribute
```

Sets whether to allow automatic play. If the value is true, the moving photo starts automatic after the resource is loaded.

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-MovingPhotoViewAttribute-autoPlay(isAutoPlay: boolean): MovingPhotoViewAttribute--><!--Device-MovingPhotoViewAttribute-autoPlay(isAutoPlay: boolean): MovingPhotoViewAttribute-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isAutoPlay | boolean | Yes | Whether to automatic play |

**Return value:**

| Type | Description |
| --- | --- |
| [MovingPhotoViewAttribute](arkts-medialibrary-multimedia-movingphotoview-movingphotoviewattribute-c.md) | @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core@crossplatform@atomicservice |

<a id="autoplayperiod"></a>
## autoPlayPeriod

```TypeScript
autoPlayPeriod(startTime: number, endTime: number): MovingPhotoViewAttribute
```

Sets automatic play period, If not set, the moving photo plays in the full video duration.If set, the moving photo plays in the automatic play period.

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-MovingPhotoViewAttribute-autoPlayPeriod(startTime: double, endTime: double): MovingPhotoViewAttribute--><!--Device-MovingPhotoViewAttribute-autoPlayPeriod(startTime: double, endTime: double): MovingPhotoViewAttribute-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startTime | number | Yes | video plays start time |
| endTime | number | Yes | video plays end time |

**Return value:**

| Type | Description |
| --- | --- |
| [MovingPhotoViewAttribute](arkts-medialibrary-multimedia-movingphotoview-movingphotoviewattribute-c.md) | @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core@crossplatform@atomicservice |

<a id="enableanalyzer"></a>
## enableAnalyzer

```TypeScript
enableAnalyzer(enabled: boolean): MovingPhotoViewAttribute
```

Sets whether to enable moving photo analyzer. If the value is true, the moving photo can be analyzed by AI.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-MovingPhotoViewAttribute-enableAnalyzer(enabled: boolean): MovingPhotoViewAttribute--><!--Device-MovingPhotoViewAttribute-enableAnalyzer(enabled: boolean): MovingPhotoViewAttribute-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | whether to enable moving photo analyzer |

**Return value:**

| Type | Description |
| --- | --- |
| [MovingPhotoViewAttribute](arkts-medialibrary-multimedia-movingphotoview-movingphotoviewattribute-c.md) | @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core@crossplatform@atomicservice |

<a id="muted"></a>
## muted

```TypeScript
muted(isMuted: boolean): MovingPhotoViewAttribute
```

Called when judging whether the video is muted.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MovingPhotoViewAttribute-muted(isMuted: boolean): MovingPhotoViewAttribute--><!--Device-MovingPhotoViewAttribute-muted(isMuted: boolean): MovingPhotoViewAttribute-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isMuted | boolean | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [MovingPhotoViewAttribute](arkts-medialibrary-multimedia-movingphotoview-movingphotoviewattribute-c.md) | @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core@crossplatform@atomicservice |

<a id="objectfit"></a>
## objectFit

```TypeScript
objectFit(value: ImageFit): MovingPhotoViewAttribute
```

Called when determining the zoom type of the view.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MovingPhotoViewAttribute-objectFit(value: ImageFit): MovingPhotoViewAttribute--><!--Device-MovingPhotoViewAttribute-objectFit(value: ImageFit): MovingPhotoViewAttribute-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ImageFit](../../apis-arkui/arkts-apis/arkts-arkui-imagefit-e.md) | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [MovingPhotoViewAttribute](arkts-medialibrary-multimedia-movingphotoview-movingphotoviewattribute-c.md) | @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core@crossplatform@atomicservice |

<a id="oncomplete"></a>
## onComplete

```TypeScript
onComplete(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when the image load completed.

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-MovingPhotoViewAttribute-onComplete(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute--><!--Device-MovingPhotoViewAttribute-onComplete(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [MovingPhotoViewEventCallback](arkts-medialibrary-movingphotovieweventcallback-t.md) | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [MovingPhotoViewAttribute](arkts-medialibrary-multimedia-movingphotoview-movingphotoviewattribute-c.md) | @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core@crossplatform@atomicservice |

<a id="onerror"></a>
## onError

```TypeScript
onError(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when playback fails.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MovingPhotoViewAttribute-onError(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute--><!--Device-MovingPhotoViewAttribute-onError(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [MovingPhotoViewEventCallback](arkts-medialibrary-movingphotovieweventcallback-t.md) | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [MovingPhotoViewAttribute](arkts-medialibrary-multimedia-movingphotoview-movingphotoviewattribute-c.md) | @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core@crossplatform@atomicservice |

<a id="onfinish"></a>
## onFinish

```TypeScript
onFinish(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when the video playback ends.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MovingPhotoViewAttribute-onFinish(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute--><!--Device-MovingPhotoViewAttribute-onFinish(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [MovingPhotoViewEventCallback](arkts-medialibrary-movingphotovieweventcallback-t.md) | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [MovingPhotoViewAttribute](arkts-medialibrary-multimedia-movingphotoview-movingphotoviewattribute-c.md) | @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core@crossplatform@atomicservice |

<a id="onpause"></a>
## onPause

```TypeScript
onPause(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when the video playback paused.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MovingPhotoViewAttribute-onPause(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute--><!--Device-MovingPhotoViewAttribute-onPause(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [MovingPhotoViewEventCallback](arkts-medialibrary-movingphotovieweventcallback-t.md) | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [MovingPhotoViewAttribute](arkts-medialibrary-multimedia-movingphotoview-movingphotoviewattribute-c.md) | @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core@crossplatform@atomicservice |

<a id="onprepared"></a>
## onPrepared

```TypeScript
onPrepared(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when playback prepared.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-MovingPhotoViewAttribute-onPrepared(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute--><!--Device-MovingPhotoViewAttribute-onPrepared(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [MovingPhotoViewEventCallback](arkts-medialibrary-movingphotovieweventcallback-t.md) | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [MovingPhotoViewAttribute](arkts-medialibrary-multimedia-movingphotoview-movingphotoviewattribute-c.md) | @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core@crossplatform@atomicservice |

<a id="onstart"></a>
## onStart

```TypeScript
onStart(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when the video is played.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MovingPhotoViewAttribute-onStart(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute--><!--Device-MovingPhotoViewAttribute-onStart(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [MovingPhotoViewEventCallback](arkts-medialibrary-movingphotovieweventcallback-t.md) | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [MovingPhotoViewAttribute](arkts-medialibrary-multimedia-movingphotoview-movingphotoviewattribute-c.md) | @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core@crossplatform@atomicservice |

<a id="onstop"></a>
## onStop

```TypeScript
onStop(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute
```

Called when the video playback stopped.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-MovingPhotoViewAttribute-onStop(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute--><!--Device-MovingPhotoViewAttribute-onStop(callback: MovingPhotoViewEventCallback): MovingPhotoViewAttribute-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [MovingPhotoViewEventCallback](arkts-medialibrary-movingphotovieweventcallback-t.md) | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| [MovingPhotoViewAttribute](arkts-medialibrary-multimedia-movingphotoview-movingphotoviewattribute-c.md) | @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core@crossplatform@atomicservice |

<a id="repeatplay"></a>
## repeatPlay

```TypeScript
repeatPlay(isRepeatPlay: boolean): MovingPhotoViewAttribute
```

Sets whether to allow repeat play. If the value is true, the moving photo plays repeat after the resource is loaded.

**Since:** 13

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-MovingPhotoViewAttribute-repeatPlay(isRepeatPlay: boolean): MovingPhotoViewAttribute--><!--Device-MovingPhotoViewAttribute-repeatPlay(isRepeatPlay: boolean): MovingPhotoViewAttribute-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isRepeatPlay | boolean | Yes | Whether to repeat play |

**Return value:**

| Type | Description |
| --- | --- |
| [MovingPhotoViewAttribute](arkts-medialibrary-multimedia-movingphotoview-movingphotoviewattribute-c.md) | @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core@crossplatform@atomicservice |

