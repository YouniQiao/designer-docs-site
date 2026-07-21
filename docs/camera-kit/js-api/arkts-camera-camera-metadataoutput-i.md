# MetadataOutput

Implements metadata streams. It inherits from [CameraOutput](arkts-camera-camera-cameraoutput-i.md).

**Inheritance/Implementation:** MetadataOutput extends [CameraOutput](arkts-camera-camera-cameraoutput-i.md)

**Since:** 10

<!--Device-camera-interface MetadataOutput extends CameraOutput--><!--Device-camera-interface MetadataOutput extends CameraOutput-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

<a id="islockmetadataobjecttrackingsupported"></a>
## isLockMetadataObjectTrackingSupported

```TypeScript
isLockMetadataObjectTrackingSupported(): boolean
```

Confirm if lock metadata object tracking supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MetadataOutput-isLockMetadataObjectTrackingSupported(): boolean--><!--Device-MetadataOutput-isLockMetadataObjectTrackingSupported(): boolean-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | TRUE if the lock metadata object tracking is supported. |

<a id="lockmetadataobjecttracking"></a>
## lockMetadataObjectTracking

```TypeScript
lockMetadataObjectTracking(point: Point): void
```

Lock metadata object tracking.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MetadataOutput-lockMetadataObjectTracking(point: Point): void--><!--Device-MetadataOutput-lockMetadataObjectTracking(point: Point): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | [Point](../../apis-test-kit/arkts-apis/arkts-test-uitest-point-i.md) | Yes | lock metadata object tracking point. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config, only throw in session usage. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="off"></a>
## off('metadataObjectsAvailable')

```TypeScript
off(type: 'metadataObjectsAvailable', callback?: AsyncCallback<Array<MetadataObject>>): void
```

Unsubscribes from events indicating available metadata objects.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-MetadataOutput-off(type: 'metadataObjectsAvailable', callback?: AsyncCallback<Array<MetadataObject>>): void--><!--Device-MetadataOutput-off(type: 'metadataObjectsAvailable', callback?: AsyncCallback<Array<MetadataObject>>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'metadataObjectsAvailable' | Yes | Event type. The value is fixed at **'metadataObjectsAvailable'**.The event can be listened for when a metadataOutput instance is created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;MetadataObject&gt;&gt; | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="off-1"></a>
## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from metadata error events.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-MetadataOutput-off(type: 'error', callback?: ErrorCallback): void--><!--Device-MetadataOutput-off(type: 'error', callback?: ErrorCallback): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when a metadataOutput instance is created. |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | No | Callback used to return the result. If this parameter is specified, the subscription to the specified event with the specified callback is canceled. (The callback object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are canceled. |

<a id="on"></a>
## on('metadataObjectsAvailable')

```TypeScript
on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>): void
```

Subscribes to events indicating available metadata objects. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-MetadataOutput-on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>): void--><!--Device-MetadataOutput-on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'metadataObjectsAvailable' | Yes | Event type. The value is fixed at **'metadataObjectsAvailable'**.The event can be listened for when a metadataOutput instance is created.<br>This event is triggered and the corresponding metadata is returned when valid metadata is detected. If the input field is incorrect, no valid listening will be created. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;Array&lt;MetadataObject&gt;&gt; | Yes | Callback used to return the metadata. |

<a id="on-1"></a>
## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to metadata error events. This API uses an asynchronous callback to return the result.

> **NOTE**  
>  
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-MetadataOutput-on(type: 'error', callback: ErrorCallback): void--><!--Device-MetadataOutput-on(type: 'error', callback: ErrorCallback): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when a metadataOutput instance is created. This event is triggered and the corresponding error message is returned when an error occurs during the use of a metadata-related API such as [start](arkts-camera-camera-metadataoutput-i.md#start-1) or [CameraOutput.release](arkts-camera-camera-cameraoutput-i.md#release-1). |
| callback | [ErrorCallback](../../apis-arkui/arkts-components/arkts-arkui-errorcallback-t-sys.md) | Yes | Callback used to return an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md). |

<a id="start"></a>
## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts to output metadata. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-MetadataOutput-start(callback: AsyncCallback<void>): void--><!--Device-MetadataOutput-start(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the metadata output starts successfully, **err** is **undefined**; otherwise, **err** is an error object with an error code defined in [CameraErrorCode](arkts-camera-camera-cameraerrorcode-e.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="start-1"></a>
## start

```TypeScript
start(): Promise<void>
```

Starts to output metadata. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-MetadataOutput-start(): Promise<void>--><!--Device-MetadataOutput-start(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

<a id="stop"></a>
## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops outputting metadata. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-MetadataOutput-stop(callback: AsyncCallback<void>): void--><!--Device-MetadataOutput-stop(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;void&gt; | Yes | Callback used to return the result. If the metadata output stops successfully, **err** is **undefined**; otherwise, **err** is an error object. |

<a id="stop-1"></a>
## stop

```TypeScript
stop(): Promise<void>
```

Stops outputting metadata. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-MetadataOutput-stop(): Promise<void>--><!--Device-MetadataOutput-stop(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

<a id="unlockmetadataobjecttracking"></a>
## unlockMetadataObjectTracking

```TypeScript
unlockMetadataObjectTracking(): void
```

Unlock metadata object tracking.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MetadataOutput-unlockMetadataObjectTracking(): void--><!--Device-MetadataOutput-unlockMetadataObjectTracking(): void-End-->

**System capability:** SystemCapability.Multimedia.Camera.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config, only throw in session usage. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

