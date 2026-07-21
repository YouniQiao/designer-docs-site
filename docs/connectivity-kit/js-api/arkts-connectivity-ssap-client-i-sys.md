# Client

Manages SSAP client. Before calling a SSAP client method,you must use {@link createClient} to create a ssap client instance.

**Since:** 26.0.0

<!--Device-ssap-interface Client--><!--Device-ssap-interface Client-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

## Modules to Import

```TypeScript
import { ssap } from '@kit.ConnectivityKit';
```

<a id="callmethod"></a>
## callMethod

```TypeScript
callMethod(method: Method): Promise<Method>
```

Calls the method of a server.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-callMethod(method: Method): Promise<Method>--><!--Device-Client-callMethod(method: Method): Promise<Method>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| method | [Method](arkts-connectivity-ssap-method-i-sys.md) | Yes | Indicates the Method to call. |

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

<a id="offeventnotify"></a>
## offEventNotify

```TypeScript
offEventNotify(callback?: Callback<Event>): void
```

Unsubscribes from event notifications.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-offEventNotify(callback?: Callback<Event>): void--><!--Device-Client-offEventNotify(callback?: Callback<Event>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;Event&gt; | No | Callback used to listen for the event notified event. |

<a id="oneventnotify"></a>
## onEventNotify

```TypeScript
onEventNotify(callback: Callback<Event>): void
```

Subscribes to event notifications.

This event is accessible only to system applications that granted the ohos.permission.NEARLINK_ACCESS permission.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-onEventNotify(callback: Callback<Event>): void--><!--Device-Client-onEventNotify(callback: Callback<Event>): void-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;Event&gt; | Yes | Callback used to listen for the event notified event. |

<a id="readdescriptor"></a>
## readDescriptor

```TypeScript
readDescriptor(descriptor: PropertyDescriptor): Promise<PropertyDescriptor>
```

Reads the descriptor of a server.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-readDescriptor(descriptor: PropertyDescriptor): Promise<PropertyDescriptor>--><!--Device-Client-readDescriptor(descriptor: PropertyDescriptor): Promise<PropertyDescriptor>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | [PropertyDescriptor](../../apis-na/arkts-apis/arkts-na-lib-es5-propertydescriptor-i.md) | Yes | Indicates the descriptor to read. |

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

<a id="setpropertyindication"></a>
## setPropertyIndication

```TypeScript
setPropertyIndication(property: Property, enable: boolean): Promise<void>
```

Enables or disables indication of a property when value changed.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-setPropertyIndication(property: Property, enable: boolean): Promise<void>--><!--Device-Client-setPropertyIndication(property: Property, enable: boolean): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | [Property](arkts-connectivity-ssap-property-i.md) | Yes | Indicates the property to indicate. |
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

<a id="writedescriptor"></a>
## writeDescriptor

```TypeScript
writeDescriptor(descriptor: PropertyDescriptor): Promise<void>
```

Writes the descriptor of a server.

This method does not support writing client property configuration descriptors. To write client property configuration descriptors, call [setPropertyNotification](arkts-connectivity-ssap-client-i.md#setpropertynotification-1) or [setPropertyIndication](arkts-connectivity-ssap-client-i-sys.md#setpropertyindication-1) instead.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

<!--Device-Client-writeDescriptor(descriptor: PropertyDescriptor): Promise<void>--><!--Device-Client-writeDescriptor(descriptor: PropertyDescriptor): Promise<void>-End-->

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | [PropertyDescriptor](../../apis-na/arkts-apis/arkts-na-lib-es5-propertydescriptor-i.md) | Yes | Indicates the descriptor to write.<br>The descriptor type should not be CLIENT_PROPERTY_CONFIG. |

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

