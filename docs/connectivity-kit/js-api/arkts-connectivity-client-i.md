# Client

Manages SSAP client. Before calling a SSAP client method,
you must use {@link createClient} to create a ssap client instance.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## close

```TypeScript
close(): void
```

Closes the client.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## connect

```TypeScript
connect(): Promise<void>
```

Connects to the server.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

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

## disconnect

```TypeScript
disconnect(): Promise<void>
```

Disconnects from or stops an ongoing connection to a server.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

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

## getServices

```TypeScript
getServices(): Promise<Service[]>
```

Starts discovering all services on server.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

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

## offConnectionStateChange

```TypeScript
offConnectionStateChange(callback?: Callback<ConnectionChangeState>): void
```

Unsubscribes from client connection state changed events.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ConnectionChangeState&gt; | No | Callback used to listen for the SSAP connection state changed event. |

## offMtuChange

```TypeScript
offMtuChange(callback?: Callback<number>): void
```

Unsubscribes from MTU changed events.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;number&gt; | No | Callback used to listen for the MTU changed event. |

## offPropertyChange

```TypeScript
offPropertyChange(callback?: Callback<Property>): void
```

Unsubscribe property value changed event.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Property&gt; | No | Callback used to listen for the property value changed event. |

## onConnectionStateChange

```TypeScript
onConnectionStateChange(callback: Callback<ConnectionChangeState>): void
```

Subscribes to client connection state changed events.

This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission.
If the application is granted the ohos.permission.GET_NEARLINK_PEER_MAC permission,
the callback returns the real device address; otherwise, a random device address is returned.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ConnectionChangeState&gt; | Yes | Callback used to listen for the SSAP connection state changed event. |

## onMtuChange

```TypeScript
onMtuChange(callback: Callback<number>): void
```

Subscribes to MTU changed events.

This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;number&gt; | Yes | Callback used to listen for the MTU changed event. |

## onPropertyChange

```TypeScript
onPropertyChange(callback: Callback<Property>): void
```

Subscribe property value changed event.

This event is accessible only to applications that granted the ohos.permission.NEARLINK_ACCESS permission.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Property&gt; | Yes | Callback used to listen for the property value changed event. |

## readProperty

```TypeScript
readProperty(property: Property): Promise<Property>
```

Reads the property of a server.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | Property | Yes | Indicates the property to read. |

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

## requestMtuSize

```TypeScript
requestMtuSize(mtu: number): Promise<void>
```

Negotiate the MTU size with server.
The negotiation result needs to be obtained by subscribing to MTU event.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

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

## setPropertyNotification

```TypeScript
setPropertyNotification(property: Property, enable: boolean): Promise<void>
```

Enables or disables notification of a property when value changed.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | Property | Yes | Indicates the property to set notification strategy. |
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

## writeProperty

```TypeScript
writeProperty(property: Property, writeType: PropertyWriteType): Promise<void>
```

Writes the property of a server.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | Property | Yes | Indicates the property to write. |
| writeType | PropertyWriteType | Yes | Indicates the write type. |

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

