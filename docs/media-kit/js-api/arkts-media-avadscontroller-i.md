# AVAdsController

Definition of the Ad Content Control Interface

**Since:** 26.0.0

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

## addAdsMediaSource

```TypeScript
addAdsMediaSource(src: MediaSource, start: int): Promise<string>
```

Add an advertisement film source to the advertisement controller, The insertion time (relative to the playback progress of the main media asset) can be specified.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | MediaSource | Yes | Video source to be inserted into the main content for playback. |
| start | int | Yes | Progress value of inserting data to the main media asset.  Unit: milliseconds. The value should be an integer. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Returns the ID of the added media source in the ad controller. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400108 | Insert a media asset whose start value exceeds the value of the main content. |

## disableAllAdsMediaSource

```TypeScript
disableAllAdsMediaSource(): void
```

Disable playback of the remaining broadcast content in the current session

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## offAdsEventListenerLoadingError

```TypeScript
offAdsEventListenerLoadingError(callback?: OnAdsEventLoadingErrorHandle): void
```

Unregisters the event processing function when the ad content fails to be loaded.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnAdsEventLoadingErrorHandle | No |  |

## offAdsListenerAdsCompleted

```TypeScript
offAdsListenerAdsCompleted(callback?: Callback<string>): void
```

Unregisters the processing function of the event triggered by the completion of ad content playing.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | No |  |

## offAdsListenerAdsSkipped

```TypeScript
offAdsListenerAdsSkipped(callback?: Callback<string>): void
```

Unregisters the processing function of the event triggered when advertisement is skipped.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | No |  |

## offAdsListenerAdsStarted

```TypeScript
offAdsListenerAdsStarted(callback?: OnAdsEventAdsStartedHandle): void
```

Unregisters the processing function for the event triggered when a new ad content is played.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnAdsEventAdsStartedHandle | No |  |

## onAdsEventListenerLoadingError

```TypeScript
onAdsEventListenerLoadingError(callback: OnAdsEventLoadingErrorHandle): void
```

Registers the event processing function when the ad content fails to be loaded.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnAdsEventLoadingErrorHandle | Yes | This function is used to process ad content loading failures.  This function needs to be implemented by the application.  The first parameter is used to transfer the advertisement ID, and the second parameter is used to  transfer the failure cause. |

## onAdsListenerAdsCompleted

```TypeScript
onAdsListenerAdsCompleted(callback: Callback<string>): void
```

Registers the processing function of the event triggered by the completion of ad content playing.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | Yes | Processing function of the ad event, which contains the ID of the ad that  is played. |

## onAdsListenerAdsSkipped

```TypeScript
onAdsListenerAdsSkipped(callback: Callback<string>): void
```

Registers the processing function of the event triggered when advertisement is skipped.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | Yes | Processing function for the advertisement to be jumped out of date. The  parameter is passed as the ID of the skipped advertisement. |

## onAdsListenerAdsStarted

```TypeScript
onAdsListenerAdsStarted(callback: OnAdsEventAdsStartedHandle): void
```

Registers the processing function for the event triggered when a new ad content is played.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnAdsEventAdsStartedHandle | Yes | Processing function when the ad content starts to be played.  The logic for switching the playback page is commonly used.  The first parameter indicates the ID of the advertisement that is being played, and the second parameter  indicates the duration of the advertisement. |

## release

```TypeScript
release(): void
```

Release the AVAdsController object.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

## removeAdsMediaSource

```TypeScript
removeAdsMediaSource(id: string): void
```

Remove the ad source specified in the AdsController.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | UUID value of the MediaSource. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 5400108 | If the specified ID is not in the AdsController. |

## skipCurrentAdsMediaSource

```TypeScript
skipCurrentAdsMediaSource(): void
```

Skip the ad content that is being played.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Media.AVPlayer

