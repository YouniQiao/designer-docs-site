# AVAdsController

Definition of the Ad Content Control Interface

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

## 导入模块

```TypeScript
import { media } from '@kit.MediaKit';
```

## addAdsMediaSource

```TypeScript
addAdsMediaSource(src: MediaSource, start: int): Promise<string>
```

Add an advertisement film source to the advertisement controller, The insertion time (relative to the playback progress of the main media asset) can be specified.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| src | MediaSource | 是 | Video source to be inserted into the main content for playback. |
| start | int | 是 | Progress value of inserting data to the main media asset.  Unit: milliseconds. The value should be an integer. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Returns the ID of the added media source in the ad controller. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400108 | Insert a media asset whose start value exceeds the value of the main content. |

## disableAllAdsMediaSource

```TypeScript
disableAllAdsMediaSource(): void
```

Disable playback of the remaining broadcast content in the current session

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

## offAdsEventListenerLoadingError

```TypeScript
offAdsEventListenerLoadingError(callback?: OnAdsEventLoadingErrorHandle): void
```

Unregisters the event processing function when the ad content fails to be loaded.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnAdsEventLoadingErrorHandle | 否 |  |

## offAdsListenerAdsCompleted

```TypeScript
offAdsListenerAdsCompleted(callback?: Callback<string>): void
```

Unregisters the processing function of the event triggered by the completion of ad content playing.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | 否 |  |

## offAdsListenerAdsSkipped

```TypeScript
offAdsListenerAdsSkipped(callback?: Callback<string>): void
```

Unregisters the processing function of the event triggered when advertisement is skipped.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | 否 |  |

## offAdsListenerAdsStarted

```TypeScript
offAdsListenerAdsStarted(callback?: OnAdsEventAdsStartedHandle): void
```

Unregisters the processing function for the event triggered when a new ad content is played.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnAdsEventAdsStartedHandle | 否 |  |

## onAdsEventListenerLoadingError

```TypeScript
onAdsEventListenerLoadingError(callback: OnAdsEventLoadingErrorHandle): void
```

Registers the event processing function when the ad content fails to be loaded.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnAdsEventLoadingErrorHandle | 是 | This function is used to process ad content loading failures.  This function needs to be implemented by the application.  The first parameter is used to transfer the advertisement ID, and the second parameter is used to  transfer the failure cause. |

## onAdsListenerAdsCompleted

```TypeScript
onAdsListenerAdsCompleted(callback: Callback<string>): void
```

Registers the processing function of the event triggered by the completion of ad content playing.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | 是 | Processing function of the ad event, which contains the ID of the ad that  is played. |

## onAdsListenerAdsSkipped

```TypeScript
onAdsListenerAdsSkipped(callback: Callback<string>): void
```

Registers the processing function of the event triggered when advertisement is skipped.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | 是 | Processing function for the advertisement to be jumped out of date. The  parameter is passed as the ID of the skipped advertisement. |

## onAdsListenerAdsStarted

```TypeScript
onAdsListenerAdsStarted(callback: OnAdsEventAdsStartedHandle): void
```

Registers the processing function for the event triggered when a new ad content is played.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnAdsEventAdsStartedHandle | 是 | Processing function when the ad content starts to be played.  The logic for switching the playback page is commonly used.  The first parameter indicates the ID of the advertisement that is being played, and the second parameter  indicates the duration of the advertisement. |

## release

```TypeScript
release(): void
```

Release the AVAdsController object.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

## removeAdsMediaSource

```TypeScript
removeAdsMediaSource(id: string): void
```

Remove the ad source specified in the AdsController.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | UUID value of the MediaSource. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5400108 | If the specified ID is not in the AdsController. |

## skipCurrentAdsMediaSource

```TypeScript
skipCurrentAdsMediaSource(): void
```

Skip the ad content that is being played.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.AVPlayer

