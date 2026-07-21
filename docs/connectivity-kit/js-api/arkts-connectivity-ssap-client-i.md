# Client

Manages SSAP client. Before calling a SSAP client method,you must use {@link createClient} to create a ssap client instance.

**Since:** 26.0.0

<!--Device-ssap-interface Client--><!--Device-ssap-interface Client-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

## Modules to Import

```TypeScript
import { ssap } from '@kit.ConnectivityKit';
```

<a id="close"></a>
## close

```TypeScript
close(): void
```

Closes the client.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-close(): void--><!--Device-Client-close(): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

<a id="connect"></a>
## connect

```TypeScript
connect(): Promise<void>
```

Connects to the server.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-connect(): Promise<void>--><!--Device-Client-connect(): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

<a id="disconnect"></a>
## disconnect

```TypeScript
disconnect(): Promise<void>
```

Disconnects from or stops an ongoing connection to a server.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-disconnect(): Promise<void>--><!--Device-Client-disconnect(): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

<a id="getservices"></a>
## getServices

```TypeScript
getServices(): Promise<Service[]>
```

Starts discovering all services on server.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-getServices(): Promise<Service[]>--><!--Device-Client-getServices(): Promise<Service[]>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Service[]&gt; | Returns the service list of the server. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

<a id="offconnectionstatechange"></a>
## offConnectionStateChange

```TypeScript
offConnectionStateChange(callback?: Callback<ConnectionChangeState>): void
```

Unsubscribes from client connection state changed events.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-offConnectionStateChange(callback?: Callback<ConnectionChangeState>): void--><!--Device-Client-offConnectionStateChange(callback?: Callback<ConnectionChangeState>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;ConnectionChangeState&gt; | No | Callback used to listen for the SSAP connection state changed event. |

<a id="offmtuchange"></a>
## offMtuChange

```TypeScript
offMtuChange(callback?: Callback<number>): void
```

Unsubscribes from MTU changed events.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-offMtuChange(callback?: Callback<int>): void--><!--Device-Client-offMtuChange(callback?: Callback<int>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;number&gt; | No | Callback used to listen for the MTU changed event. |

<a id="offpropertychange"></a>
## offPropertyChange

```TypeScript
offPropertyChange(callback?: Callback<Property>): void
```

Unsubscribe property value changed event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-offPropertyChange(callback?: Callback<Property>): void--><!--Device-Client-offPropertyChange(callback?: Callback<Property>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;Property&gt; | No | Callback used to listen for the property value changed event. |

<a id="onconnectionstatechange"></a>
## onConnectionStateChange

```TypeScript
onConnectionStateChange(callback: Callback<ConnectionChangeState>): void
```

Subscribes to client connection state changed events.

This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission.If the application is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission,the callback returns the real device address; otherwise, a random device address is returned.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-onConnectionStateChange(callback: Callback<ConnectionChangeState>): void--><!--Device-Client-onConnectionStateChange(callback: Callback<ConnectionChangeState>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;ConnectionChangeState&gt; | Yes | Callback used to listen for the SSAP connection state changed event. |

<a id="onmtuchange"></a>
## onMtuChange

```TypeScript
onMtuChange(callback: Callback<number>): void
```

Subscribes to MTU changed events.

This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-onMtuChange(callback: Callback<int>): void--><!--Device-Client-onMtuChange(callback: Callback<int>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;number&gt; | Yes | Callback used to listen for the MTU changed event. |

<a id="onpropertychange"></a>
## onPropertyChange

```TypeScript
onPropertyChange(callback: Callback<Property>): void
```

Subscribe property value changed event.

This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-onPropertyChange(callback: Callback<Property>): void--><!--Device-Client-onPropertyChange(callback: Callback<Property>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;Property&gt; | Yes | Callback used to listen for the property value changed event. |

<a id="readproperty"></a>
## readProperty

```TypeScript
readProperty(property: Property): Promise<Property>
```

Reads the property of a server.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-readProperty(property: Property): Promise<Property>--><!--Device-Client-readProperty(property: Property): Promise<Property>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | [Property](arkts-connectivity-ssap-property-i.md) | Yes | Indicates the property to read. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Property&gt; | Promise used to return the property value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100043 | Invalid UUID in property. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

<a id="requestmtusize"></a>
## requestMtuSize

```TypeScript
requestMtuSize(mtu: number): Promise<void>
```

Negotiate the MTU size with server.The negotiation result needs to be obtained by subscribing to MTU event.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-requestMtuSize(mtu: int): Promise<void>--><!--Device-Client-requestMtuSize(mtu: int): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mtu | number | Yes | The maximum transmission unit.<br>Unit: byte. Recommended value range: [22, 1024]. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

<a id="setpropertynotification"></a>
## setPropertyNotification

```TypeScript
setPropertyNotification(property: Property, enable: boolean): Promise<void>
```

Enables or disables notification of a property when value changed.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-setPropertyNotification(property: Property, enable: boolean): Promise<void>--><!--Device-Client-setPropertyNotification(property: Property, enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | [Property](arkts-connectivity-ssap-property-i.md) | Yes | Indicates the property to set notification strategy. |
| enable | boolean | Yes | Specifies whether to enable notification of the property. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100043 | Invalid UUID in property. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

<a id="writeproperty"></a>
## writeProperty

```TypeScript
writeProperty(property: Property, writeType: PropertyWriteType): Promise<void>
```

Writes the property of a server.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-writeProperty(property: Property, writeType: PropertyWriteType): Promise<void>--><!--Device-Client-writeProperty(property: Property, writeType: PropertyWriteType): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | [Property](arkts-connectivity-ssap-property-i.md) | Yes | Indicates the property to write. |
| writeType | [PropertyWriteType](arkts-connectivity-ssap-propertywritetype-e.md) | Yes | Indicates the write type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100043 | Invalid UUID in property. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

