# MetadataOutput

Implements metadata streams. It inherits from [CameraOutput]camera.CameraOutput.

**Inheritance:** MetadataOutputextends: CameraOutput.

**Since:** 10

**System capability:** SystemCapability.Multimedia.Camera.Core

## Modules to Import

```TypeScript
import { camera } from '@kit.CameraKit';
```

## addMetadataObjectTypes

```TypeScript
addMetadataObjectTypes(types: Array<MetadataObjectType>): void
```

Adds the types of metadata objects to be detected.

**Since:** 13

**Atomic service API:** From API version 23 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| types | Array&lt;MetadataObjectType> | Yes | Metadata object types, which are obtained through  getSupportedOutputCapability. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 13 - 22] |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## isLockMetadataObjectTrackingSupported

```TypeScript
isLockMetadataObjectTrackingSupported(): boolean
```

Confirm if lock metadata object tracking supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

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

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| point | Point | Yes | lock metadata object tracking point. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |
| 7400201 | Camera service fatal error. |

## off('metadataObjectsAvailable')

```TypeScript
off(type: 'metadataObjectsAvailable', callback?: AsyncCallback<Array<MetadataObject>>): void
```

Unsubscribes from events indicating available metadata objects.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'metadataObjectsAvailable' | Yes | Event type. The value is fixed at 'metadataObjectsAvailable'.  The event can be listened for when a metadataOutput instance is created. |
| callback | AsyncCallback&lt;Array&lt;MetadataObject>> | No | Callback used to return the result. If this parameter  is specified, the subscription to the specified event with the specified callback is canceled. (The callback  object cannot be an anonymous function.) Otherwise, the subscriptions to the specified event with all the  callbacks are canceled. |

## off('error')

```TypeScript
off(type: 'error', callback?: ErrorCallback): void
```

Unsubscribes from metadata error events.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at 'error'. The event can be listened for when a  metadataOutput instance is created. |
| callback | ErrorCallback | No | Callback used to return the result. If this parameter is specified, the  subscription to the specified event with the specified callback is canceled. (The callback object cannot be  an anonymous function.) Otherwise, the subscriptions to the specified event with all the callbacks are  canceled. |

## offError

```TypeScript
offError(callback?: ErrorCallback): void
```

Unsubscribes from error events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | No |  |

## offMetadataObjectsAvailable

```TypeScript
offMetadataObjectsAvailable(callback?: AsyncCallback<Array<MetadataObject>>): void
```

Unsubscribes from metadata objects available event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;MetadataObject>> | No |  |

## on('metadataObjectsAvailable')

```TypeScript
on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>): void
```

Subscribes to events indicating available metadata objects. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'metadataObjectsAvailable' | Yes | Event type. The value is fixed at 'metadataObjectsAvailable'.  The event can be listened for when a metadataOutput instance is created. This event is triggered and the  corresponding metadata is returned when valid metadata is detected. If the input field is incorrect, no valid  listening will be created. |
| callback | AsyncCallback&lt;Array&lt;MetadataObject>> | Yes | Callback used to return the metadata. |

## on('error')

```TypeScript
on(type: 'error', callback: ErrorCallback): void
```

Subscribes to metadata error events. This API uses an asynchronous callback to return the result. > **NOTE** > > Currently, you cannot use **off()** to unregister the callback in the callback method of **on()**.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'error' | Yes | Event type. The value is fixed at 'error'. The event can be listened for when a  metadataOutput instance is created. This event is triggered and the corresponding error message is returned  when an error occurs during the use of a metadata-related API such as  [start]camera.MetadataOutput.start() or  [CameraOutput.release]camera.CameraOutput.release(). |
| callback | ErrorCallback | Yes | Callback used to return an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

## onError

```TypeScript
onError(callback: ErrorCallback): void
```

Subscribes to error events.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | Yes | Callback used to get the metadata output errors. |

## onMetadataObjectsAvailable

```TypeScript
onMetadataObjectsAvailable(callback: AsyncCallback<Array<MetadataObject>>): void
```

Subscribes to metadata objects available event callback.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;MetadataObject>> | Yes | Callback used to get the available metadata objects. |

## removeMetadataObjectTypes

```TypeScript
removeMetadataObjectTypes(types: Array<MetadataObjectType>): void
```

Removes the types of metadata objects to be detected.

**Since:** 13

**Atomic service API:** From API version 23 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| types | Array&lt;MetadataObjectType> | Yes | Metadata object types, which are obtained through  getSupportedOutputCapability. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System Application. [since 13 - 22] |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## start

```TypeScript
start(callback: AsyncCallback<void>): void
```

Starts to output metadata. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the metadata output starts  successfully, err is undefined; otherwise, err is an error object with an error code defined in  [CameraErrorCode]camera.CameraErrorCode. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## start

```TypeScript
start(): Promise<void>
```

Starts to output metadata. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config. |
| 7400201 | Camera service fatal error. |

## stop

```TypeScript
stop(callback: AsyncCallback<void>): void
```

Stops outputting metadata. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | Callback used to return the result. If the metadata output stops  successfully, err is undefined; otherwise, err is an error object. |

## stop

```TypeScript
stop(): Promise<void>
```

Stops outputting metadata. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** From API version 19 this API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

## unlockMetadataObjectTracking

```TypeScript
unlockMetadataObjectTracking(): void
```

Unlock metadata object tracking.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Multimedia.Camera.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |
| 7400201 | Camera service fatal error. |

