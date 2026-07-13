# MetadataOutput

Implements metadata streams. It inherits from [CameraOutput](arkts-camera-cameraoutput-i.md).

**Inheritance/Implementation:** MetadataOutput extends [CameraOutput](arkts-camera-cameraoutput-i.md)

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## isLockMetadataObjectTrackingSupported

```TypeScript
isLockMetadataObjectTrackingSupported(): boolean
```

Confirm if lock metadata object tracking supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | TRUE if the lock metadata object tracking is supported. |

## lockMetadataObjectTracking

```TypeScript
lockMetadataObjectTracking(point: Point): void
```

Lock metadata object tracking.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | Point | Yes | lock metadata object tracking point. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config, only throw in session usage. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## off('metadataObjectsAvailable')

```TypeScript
off(type: 'metadataObjectsAvailable', callback?: AsyncCallback<Array<MetadataObject>>): void
```

Unsubscribes from events indicating available metadata objects.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'metadataObjectsAvailable' | Yes | Event type. The value is fixed at **'metadataObjectsAvailable'**.The event can be listened for when a metadataOutput instance is created. |
| callback | AsyncCallback&lt;Array&lt;MetadataObject&gt;&gt; | No | Callback used to return the result. If this parameteris specified, the subscription to the specified event with the specified callback is canceled. (The callbackobject cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all thecallbacks are canceled. |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from metadata error events.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when ametadataOutput instance is created. |
| callback | ErrorCallback | No | Callback used to return the result. If this parameter is specified, thesubscription to the specified event with the specified callback is canceled. (The callback object cannot bean anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks arecanceled. |

## on('metadataObjectsAvailable')

```TypeScript
on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>): void
```

Subscribes to events indicating available metadata objects. This API uses an asynchronous callback to return the
result.

> **NOTE**
>
> Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'metadataObjectsAvailable' | Yes | Event type. The value is fixed at **'metadataObjectsAvailable'**.The event can be listened for when a metadataOutput instance is created.<br>This event is triggered and thecorresponding metadata is returned when valid metadata is detected. If the input field is incorrect, no validlistening will be created. |
| callback | AsyncCallback&lt;Array&lt;MetadataObject&gt;&gt; | Yes | Callback used to return the metadata. |

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

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at **'error'**. The event can be listened for when ametadataOutput instance is created. This event is triggered and the corresponding error message is returnedwhen an error occurs during the use of a metadata-related API such as[start](arkts-camera-metadataoutput-i.md#start-2) or[CameraOutput.release](arkts-camera-cameraoutput-i.md#release-2). |
| callback | ErrorCallback | Yes | Callback used to return an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md). |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts to output metadata. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the metadata output startssuccessfully, **err** is **undefined**; otherwise, **err** is an error object with an error code defined in[CameraErrorCode](arkts-camera-cameraerrorcode-e.md). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

## start

```TypeScript
start(): Promise<void>
```

Starts to output metadata. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

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

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops outputting metadata. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the metadata output stopssuccessfully, **err** is **undefined**; otherwise, **err** is an error object. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops outputting metadata. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

## unlockMetadataObjectTracking

```TypeScript
unlockMetadataObjectTracking(): void
```

Unlock metadata object tracking.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7400103](../errorcode-camera.md#7400103-session-not-configured) | Session not config, only throw in session usage. |
| [7400201](../errorcode-camera.md#7400201-camera-service-error) | Camera service fatal error. |

