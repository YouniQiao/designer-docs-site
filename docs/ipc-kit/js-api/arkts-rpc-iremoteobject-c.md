# IRemoteObject

Provides methods to query of obtain interface descriptors, add or delete death notifications, dump object status to specific files, and send messages.

**Since:** 7

**System capability:** SystemCapability.Communication.IPC.Core

## Modules to Import

```TypeScript
import { rpc } from '@kit.IPCKit';
```

## addDeathRecipient

```TypeScript
addDeathRecipient(recipient: DeathRecipient, flags: number): boolean
```

Adds a callback for receiving death notifications of the remote object.

**Since:** 7

**Deprecated since:** 9

**Substitute:** registerDeathRecipient(recipient:

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recipient | DeathRecipient | Yes | Callback to register. |
| flags | number | Yes | Flag of the death notification. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the callback is added successfully; returns false otherwise. |

## getDescriptor

```TypeScript
getDescriptor(): string
```

Obtains the interface descriptor (which is a string) of this object.

**Since:** 9

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Interface descriptor obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1900008 | The proxy or remote object is invalid. |

## getInterfaceDescriptor

```TypeScript
getInterfaceDescriptor(): string
```

Obtains the interface descriptor (which is a string) of this object.

**Since:** 7

**Deprecated since:** 9

**Substitute:** getDescriptor()

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Interface descriptor obtained. |

## getLocalInterface

```TypeScript
getLocalInterface(descriptor: string): IRemoteBroker
```

Obtains the string of the interface descriptor.

**Since:** 9

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | string | Yes | Interface descriptor. |

**Return value:**

| Type | Description |
| --- | --- |
| IRemoteBroker | IRemoteBroker object bound to the specified interface token. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match;  3.The string length is greater than or equal to 40960 bytes;  4.The number of bytes copied to the buffer is different from the length of the obtained string. |

## isObjectDead

```TypeScript
isObjectDead(): boolean
```

Checks whether this object is dead.

**Since:** 7

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the object is dead; returns false otherwise. |

## queryLocalInterface

```TypeScript
queryLocalInterface(descriptor: string): IRemoteBroker
```

Obtains the string of the interface descriptor.

**Since:** 7

**Deprecated since:** 9

**Substitute:** getLocalInterface(descriptor:

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| descriptor | string | Yes | Interface descriptor. |

**Return value:**

| Type | Description |
| --- | --- |
| IRemoteBroker | IRemoteBroker object bound to the specified interface token. |

## registerDeathRecipient

```TypeScript
registerDeathRecipient(recipient: DeathRecipient, flags: int): void
```

Registers a callback for receiving death notifications of the remote object.

**Since:** 9

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recipient | DeathRecipient | Yes | Callback to register. |
| flags | int | Yes | Flag of the death notification. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match;  3.The callback used to receive remote object death notifications is empty. |
| 1900005 | Operation allowed only for the proxy object. |
| 1900008 | The proxy or remote object is invalid. |

## removeDeathRecipient

```TypeScript
removeDeathRecipient(recipient: DeathRecipient, flags: number): boolean
```

Removes the callback used to receive death notifications of the remote object.

**Since:** 7

**Deprecated since:** 9

**Substitute:** unregisterDeathRecipient(recipient:

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recipient | DeathRecipient | Yes | Callback to unregister. |
| flags | number | Yes | Flag of the death notification. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the callback is removed; returns false otherwise. |

## sendMessageRequest

```TypeScript
sendMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption
    ): Promise<RequestResult>
```

Sends a **MessageSequence** message to the remote process in synchronous or asynchronous mode. If asynchronous mode is set in **options**, a promise will be fulfilled immediately and the reply message is empty. The specific reply needs to be obtained from the callback on the service side. If synchronous mode is set in **options**, a promise will be fulfilled when the response to **sendMessageRequest** is returned, and the reply message contains the returned information.

**Since:** 9

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | int | Yes | Message code [1-16777215] called by the request, which is determined by the communication  parties. If the method is generated by an IDL tool, the message code is automatically generated by the IDL  tool. |
| data | MessageSequence | Yes | MessageSequence object holding the data to send. |
| reply | MessageSequence | Yes | MessageSequence object that receives the response. |
| options | MessageOption | Yes | Request sending mode, which can be synchronous (default) or asynchronous. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;RequestResult> | Promise used to return a requestResult instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match;  3.Failed to obtain the passed object instance. |

## sendMessageRequest

```TypeScript
sendMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption,
      callback: AsyncCallback<RequestResult>
    ): void
```

Sends a **MessageSequence** message to the remote process in synchronous or asynchronous mode. If asynchronous mode is set in **options**, a callback will be called immediately, and the reply message is empty. The specific reply needs to be obtained from the callback on the service side. If synchronous mode is set in **options**, a callback will be invoked when the response to **sendRequest** is returned, and the reply message contains the returned information.

**Since:** 9

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | int | Yes | Message code [1-16777215] called by the request, which is determined by the communication  parties. If the method is generated by an IDL tool, the message code is automatically generated by the IDL  tool. |
| data | MessageSequence | Yes | MessageSequence object holding the data to send. |
| reply | MessageSequence | Yes | MessageSequence object that receives the response. |
| options | MessageOption | Yes | Request sending mode, which can be synchronous (default) or asynchronous. |
| callback | AsyncCallback&lt;RequestResult> | Yes | Callback for receiving the sending result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match;  3.Failed to obtain the passed object instance. |

## sendRequest

```TypeScript
sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean
```

Sends a **MessageParcel** message to the remote process in synchronous or asynchronous mode. If asynchronous mode is set in **options**, a promise will be fulfilled immediately and the reply message does not contain any content. If synchronous mode is set in **options**, a promise will be fulfilled when the response to **sendRequest** is returned, and the reply message contains the returned information.

**Since:** 7

**Deprecated since:** 9

**Substitute:** sendMessageRequest(code:

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | number | Yes | Message code [1-16777215] called by the request, which is determined by the  communication parties. If the method is generated by an IDL tool, the message code is automatically generated  by the IDL tool. |
| data | MessageParcel | Yes | MessageParcel object holding the data to send. |
| reply | MessageParcel | Yes | MessageParcel object that receives the response. |
| options | MessageOption | Yes | Request sending mode, which can be synchronous (default) or asynchronous. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the message is sent successfully; returns false otherwise. |

## sendRequest

```TypeScript
sendRequest(
      code: number,
      data: MessageParcel,
      reply: MessageParcel,
      options: MessageOption
    ): Promise<SendRequestResult>
```

Sends a **MessageParcel** message to the remote process in synchronous or asynchronous mode. If asynchronous mode is set in **options**, a promise will be fulfilled immediately and the reply message is empty. The specific reply needs to be obtained from the callback on the service side. If synchronous mode is set in **options**, a promise will be fulfilled when the response to **sendRequest** is returned, and the reply message contains the returned information.

**Since:** 8

**Deprecated since:** 9

**Substitute:** sendMessageRequest(code:

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | number | Yes | Message code [1-16777215] called by the request, which is determined by the  communication parties. If the method is generated by an IDL tool, the message code is automatically generated  by the IDL tool. |
| data | MessageParcel | Yes | MessageParcel object holding the data to send. |
| reply | MessageParcel | Yes | MessageParcel object that receives the response. |
| options | MessageOption | Yes | Request sending mode, which can be synchronous (default) or asynchronous. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;SendRequestResult> | Promise used to return a sendRequestResult instance. |

## sendRequest

```TypeScript
sendRequest(
      code: number,
      data: MessageParcel,
      reply: MessageParcel,
      options: MessageOption,
      callback: AsyncCallback<SendRequestResult>
    ): void
```

Sends a **MessageParcel** message to the remote process in synchronous or asynchronous mode. If asynchronous mode is set in **options**, a callback will be called immediately, and the reply message is empty. The specific reply needs to be obtained from the callback on the service side. If synchronous mode is set in **options**, a callback will be invoked when the response to **sendRequest** is returned, and the reply message contains the returned information.

**Since:** 8

**Deprecated since:** 9

**Substitute:** sendMessageRequest(code:

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| code | number | Yes | Message code [1-16777215] called by the request, which is determined by the  communication parties. If the method is generated by an IDL tool, the message code is automatically generated  by the IDL tool. |
| data | MessageParcel | Yes | MessageParcel object holding the data to send. |
| reply | MessageParcel | Yes | MessageParcel object that receives the response. |
| options | MessageOption | Yes | Request sending mode, which can be synchronous (default) or asynchronous. |
| callback | AsyncCallback&lt;SendRequestResult> | Yes | Callback for receiving the sending result. |

## unregisterDeathRecipient

```TypeScript
unregisterDeathRecipient(recipient: DeathRecipient, flags: int): void
```

Unregisters from the callback used to receive death notifications of the remote object.

**Since:** 9

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| recipient | DeathRecipient | Yes | Callback to unregister. |
| flags | int | Yes | Flag of the death notification. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match;  3.The callback used to receive remote object death notifications is empty. |
| 1900005 | Operation allowed only for the proxy object. |
| 1900008 | The proxy or remote object is invalid. |

