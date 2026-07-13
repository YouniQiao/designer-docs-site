# Client

Manages SSAP client. Before calling a SSAP client method,
you must use {@link createClient} to create a ssap client instance.

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## callMethod

```TypeScript
callMethod(method: Method): Promise<Method>
```

Calls the method of a server.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| method | Method | Yes | Indicates the Method to call. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Method&gt; | Promise used to return the Method result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100043 | Invalid UUID. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

## offEventNotify

```TypeScript
offEventNotify(callback?: Callback<Event>): void
```

Unsubscribes from event notifications.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Event&gt; | No | Callback used to listen for the event notified event. |

## onEventNotify

```TypeScript
onEventNotify(callback: Callback<Event>): void
```

Subscribes to event notifications.

This event is accessible only to system applications that granted the ohos.permission.NEARLINK_ACCESS permission.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;Event&gt; | Yes | Callback used to listen for the event notified event. |

## readDescriptor

```TypeScript
readDescriptor(descriptor: PropertyDescriptor): Promise<PropertyDescriptor>
```

Reads the descriptor of a server.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | PropertyDescriptor | Yes | Indicates the descriptor to read. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PropertyDescriptor&gt; | Promise used to return the descriptor value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100043 | Invalid UUID in descriptor. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

## setPropertyIndication

```TypeScript
setPropertyIndication(property: Property, enable: boolean): Promise<void>
```

Enables or disables indication of a property when value changed.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | Property | Yes | Indicates the property to indicate. |
| enable | boolean | Yes | Specifies whether to enable indication of the property. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Returns the promise object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100030 | The connection is not established. |
| 36100043 | Invalid UUID in property. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

## writeDescriptor

```TypeScript
writeDescriptor(descriptor: PropertyDescriptor): Promise<void>
```

Writes the descriptor of a server.

This method does not support writing client property configuration descriptors. To write client property
configuration descriptors, call [setPropertyNotification](arkts-connectivity-client-i.md#setpropertynotification-1) or
[setPropertyIndication](arkts-connectivity-client-i-sys.md#setpropertyindication-1) instead.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | PropertyDescriptor | Yes | Indicates the descriptor to write.<br>The descriptor type should not be CLIENT_PROPERTY_CONFIG. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications are not allowed to use system APIs. |
| 36100003 | NearLink disabled. |
| 36100043 | Invalid UUID in descriptor. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

