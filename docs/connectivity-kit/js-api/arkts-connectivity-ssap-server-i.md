# Server

Manages SSAP server. Before calling a SSAP server method,you must use {@link createServer} to create a SSAP server instance.

**Since:** 26.0.0

<!--Device-ssap-interface Server--><!--Device-ssap-interface Server-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

## Modules to Import

```TypeScript
import { ssap } from '@kit.ConnectivityKit';
```

## addService

```TypeScript
addService(service: Service): void
```

Adds a SSAP service.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-addService(service: Service): void--><!--Device-Server-addService(service: Service): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| service | [Service](arkts-connectivity-ssap-service-i.md) | Yes | ssap service need to be added and registered. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100043 | Invalid UUID. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

## close

```TypeScript
close(): void
```

Closes this {@code Server} object and unregisters its callbacks.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-close(): void--><!--Device-Server-close(): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## notifyPropertyChanged

```TypeScript
notifyPropertyChanged(address: string, property: Property): Promise<void>
```

Notifies the client that the value of a property on the server has changed.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-notifyPropertyChanged(address: string, property: Property): Promise<void>--><!--Device-Server-notifyPropertyChanged(address: string, property: Property): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| address | string | Yes | Indicates the device address.<br>The length must be 17, The value consists of hexadecimal digits and colons (:),for example, 11:22:33:AA:BB:FF. |
| property | [Property](arkts-connectivity-ssap-property-i.md) | Yes | Indicates the property to notify. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100041 | Invalid address. |
| 36100043 | Invalid UUID in property. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

## offConnectionStateChange

```TypeScript
offConnectionStateChange(callback?: Callback<ConnectionChangeState>): void
```

Unsubscribes from server connection state changed events.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-offConnectionStateChange(callback?: Callback<ConnectionChangeState>): void--><!--Device-Server-offConnectionStateChange(callback?: Callback<ConnectionChangeState>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<ConnectionChangeState> | No | Callback used to listen for the SSAP connection state changed event. |

## offMtuChange

```TypeScript
offMtuChange(callback?: Callback<number>): void
```

Unsubscribes from MTU changed events.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-offMtuChange(callback?: Callback<int>): void--><!--Device-Server-offMtuChange(callback?: Callback<int>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<number> | No | Callback used to listen for the MTU changed event. |

## offPropertyRead

```TypeScript
offPropertyRead(callback?: Callback<PropertyReadRequest>): void
```

Unsubscribes from property read events from the client.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-offPropertyRead(callback?: Callback<PropertyReadRequest>): void--><!--Device-Server-offPropertyRead(callback?: Callback<PropertyReadRequest>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<PropertyReadRequest> | No | Callback used to listen for the property operation event. |

## offPropertyWrite

```TypeScript
offPropertyWrite(callback?: Callback<PropertyWriteRequest>): void
```

Unsubscribes from property write events from the client.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-offPropertyWrite(callback?: Callback<PropertyWriteRequest>): void--><!--Device-Server-offPropertyWrite(callback?: Callback<PropertyWriteRequest>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<PropertyWriteRequest> | No | Callback used to listen for the property operation event. |

## onConnectionStateChange

```TypeScript
onConnectionStateChange(callback: Callback<ConnectionChangeState>): void
```

Subscribes to server connection state changed events.

This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission.If the application is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission,the callback returns the real device address; otherwise, a random device address is returned.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-onConnectionStateChange(callback: Callback<ConnectionChangeState>): void--><!--Device-Server-onConnectionStateChange(callback: Callback<ConnectionChangeState>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<ConnectionChangeState> | Yes | Callback used to listen for the SSAP connection state changed event. |

## onMtuChange

```TypeScript
onMtuChange(callback: Callback<number>): void
```

Subscribes to MTU changed events.

This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-onMtuChange(callback: Callback<int>): void--><!--Device-Server-onMtuChange(callback: Callback<int>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<number> | Yes | Callback used to listen for the MTU changed event. |

## onPropertyRead

```TypeScript
onPropertyRead(callback: Callback<PropertyReadRequest>): void
```

Subscribes to property read events from the client.

This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission.If the application is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission,the callback returns the real device address; otherwise, a random device address is returned.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-onPropertyRead(callback: Callback<PropertyReadRequest>): void--><!--Device-Server-onPropertyRead(callback: Callback<PropertyReadRequest>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<PropertyReadRequest> | Yes | Callback used to listen for the property operation event. |

## onPropertyWrite

```TypeScript
onPropertyWrite(callback: Callback<PropertyWriteRequest>): void
```

Subscribes to property write events from the client.

This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission.If the application is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission,the callback returns the real device address; otherwise, a random device address is returned.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-onPropertyWrite(callback: Callback<PropertyWriteRequest>): void--><!--Device-Server-onPropertyWrite(callback: Callback<PropertyWriteRequest>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<PropertyWriteRequest> | Yes | Callback used to listen for the property operation event. |

## removeService

```TypeScript
removeService(serviceUuid: string): void
```

Removes a specific SSAP service.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-removeService(serviceUuid: string): void--><!--Device-Server-removeService(serviceUuid: string): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| serviceUuid | string | Yes | Specific SSAP service to be removed<br>The length must be 36, The value consists of 36 hexadecimal digits and hyphens (-), for example,FFFFFFFF-1234-5678-ABCD-000000001234, indicating a 128-bit identifier.<br>NearLink standard UUIDs are not allowed. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100043 | Invalid UUID. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

## sendResponse

```TypeScript
sendResponse(response: ServerResponse): void
```

Responds to read or write requests from the client.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Server-sendResponse(response: ServerResponse): void--><!--Device-Server-sendResponse(response: ServerResponse): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| response | [ServerResponse](arkts-connectivity-ssap-serverresponse-i.md) | Yes | Indicates the response. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100041 | Invalid address. |
| 36100099 | Operation failed. |

