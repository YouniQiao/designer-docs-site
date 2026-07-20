# AVRecorder

AVRecorder is a class for audio and video recording management. It provides APIs to record media assets. Before calling any API in AVRecorder, you must use [createAVRecorder()](arkts-media-media-createavrecorder-f.md#createavrecorder-1) to create an AVRecorder instance.

For details about the audio and video recording demo, see [Audio Recording](../../../../media/media/using-avrecorder-for-recording.md) and [Video Recording](../../../../media/media/video-recording.md).

> **NOTE**  
>  
> > To use the camera to record videos, the camera module is required. For details about how to use the APIs  
> provided by the camera module, see [Camera Management](../../apis-camera-kit/arkts-apis/arkts-multimedia-camera.md).

**Since:** 9

<!--Device-media-interface AVRecorder--><!--Device-media-interface AVRecorder-End-->

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

## getInputMetaSurface

```TypeScript
getInputMetaSurface(type: MetaSourceType): Promise<string>
```

Get input meta surface for specified meta source type. it must be called between prepare completed and start.

**Since:** 12

<!--Device-AVRecorder-getInputMetaSurface(type: MetaSourceType): Promise<string>--><!--Device-AVRecorder-getInputMetaSurface(type: MetaSourceType): Promise<string>-End-->

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [MetaSourceType](arkts-media-media-metasourcetype-e-sys.md) | Yes | Meta source type. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<string> | A Promise instance used to return the input surface id in string. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Called from Non-System applications. Return by promise. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operate not permit. Return by promise. |
| [5400103](../errorcode-media.md#5400103-io-error) | IO error. Return by promise. |
| [5400105](../errorcode-media.md#5400105-play-service-dead) | Service died. Return by promise. |

## isWatermarkSupported

```TypeScript
isWatermarkSupported(): Promise<boolean>
```

Checks whether the device supports the hardware digital watermark. This API uses a promise to return the result.

This API can be called after the prepare(), start(), or paused() event is triggered.

**Since:** 13

<!--Device-AVRecorder-isWatermarkSupported(): Promise<boolean>--><!--Device-AVRecorder-isWatermarkSupported(): Promise<boolean>-End-->

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<boolean> | Promise used to return the check result. The value **true** means that the device supports the hardware digital watermark, and **false** means the opposite. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

avRecorder.isWatermarkSupported().then((isWatermarkSupported: boolean) => {
  console.info(`Succeeded in get, isWatermarkSupported: ${isWatermarkSupported}`);
}).catch((error: BusinessError) => {
  console.error(`Failed to get and catch error is ${error.message}`);
});

```

## setMetadata

```TypeScript
setMetadata(metadata: Record<string, string>): void
```

Set metadata (key-value pairs) for the recording file of the recorder.This metadata overwrites the value in config.metadata.customInfo (see {prepare()} and {AVRecorderConfig})if they have same key.

This API can be called only after the prepare() event is successfully triggered and before the stop() API is called.

**Since:** 26.0.0

<!--Device-AVRecorder-setMetadata(metadata: Record<string, string>): void--><!--Device-AVRecorder-setMetadata(metadata: Record<string, string>): void-End-->

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| metadata | [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)<string, string> | Yes | Tag and value of the metadata in key-value pairs.<br>- The first string is the key.<br>- The second string is the value.<br> The key string should start with "com.openharmony.", the length of value can't be more than 256 bytes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Not System App.<br>**Applicable version:** 19 - 24 |
| [5400101](../errorcode-media.md#5400101-memory-allocation-failed) | No memory.<br>**Applicable version:** 26.0.0 and later |
| [5400102](../errorcode-media.md#5400102-unsupported-operation) | Operation not allowed.<br>**Applicable version:** 26.0.0 and later |
| [5400108](../errorcode-media.md#5400108-parameter-value-out-of-range) | Parameter check failed.<br>**Applicable version:** 26.0.0 and later |

## setWatermark

```TypeScript
setWatermark(watermark: image.PixelMap, config: WatermarkConfig): Promise<void>
```

Sets a watermark for the AVRecorder. This API uses a promise to return the result.

This API can be called only after the prepare() event is triggered and before the start() event is triggered.

**Since:** 13

<!--Device-AVRecorder-setWatermark(watermark: image.PixelMap, config: WatermarkConfig): Promise<void>--><!--Device-AVRecorder-setWatermark(watermark: image.PixelMap, config: WatermarkConfig): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Media.AVRecorder

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| watermark | image.PixelMap | Yes | : Watermark image. |
| config | [WatermarkConfig](arkts-media-media-watermarkconfig-i-sys.md) | Yes | : Configures of the watermark. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | The parameter check failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

let watermark: image.PixelMap|undefined = undefined; // need data.
let watermarkConfig: media.WatermarkConfig = { top: 100, left: 100 }

avRecorder.setWatermark(watermark, watermarkConfig).then(() => {
  console.info('Succeeded in setWatermark');
}).catch((error: BusinessError) => {
  console.error(`Failed to setWatermark and catch error is ${error.message}`);
});

```

