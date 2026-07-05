# IRemoteObject

Provides methods to query of obtain interface descriptors, add or delete death notifications, dump object status to specific files, and send messages.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

## 导入模块

```TypeScript
import { rpc } from '@kit.IPCKit';
```

## addDeathRecipient

```TypeScript
addDeathRecipient(recipient: DeathRecipient, flags: number): boolean
```

Adds a callback for receiving death notifications of the remote object.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** registerDeathRecipient(recipient:

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| recipient | DeathRecipient | 是 | Callback to register. |
| flags | number | 是 | Flag of the death notification. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the callback is added successfully; returns false otherwise. |

## getDescriptor

```TypeScript
getDescriptor(): string
```

Obtains the interface descriptor (which is a string) of this object.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Interface descriptor obtained. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1900008 | The proxy or remote object is invalid. |

## getInterfaceDescriptor

```TypeScript
getInterfaceDescriptor(): string
```

Obtains the interface descriptor (which is a string) of this object.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** getDescriptor()

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Interface descriptor obtained. |

## getLocalInterface

```TypeScript
getLocalInterface(descriptor: string): IRemoteBroker
```

Obtains the string of the interface descriptor.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| descriptor | string | 是 | Interface descriptor. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IRemoteBroker | IRemoteBroker object bound to the specified interface token. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match;  3.The string length is greater than or equal to 40960 bytes;  4.The number of bytes copied to the buffer is different from the length of the obtained string. |

## isObjectDead

```TypeScript
isObjectDead(): boolean
```

Checks whether this object is dead.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the object is dead; returns false otherwise. |

## queryLocalInterface

```TypeScript
queryLocalInterface(descriptor: string): IRemoteBroker
```

Obtains the string of the interface descriptor.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** getLocalInterface(descriptor:

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| descriptor | string | 是 | Interface descriptor. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IRemoteBroker | IRemoteBroker object bound to the specified interface token. |

## registerDeathRecipient

```TypeScript
registerDeathRecipient(recipient: DeathRecipient, flags: int): void
```

Registers a callback for receiving death notifications of the remote object.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| recipient | DeathRecipient | 是 | Callback to register. |
| flags | int | 是 | Flag of the death notification. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match;  3.The callback used to receive remote object death notifications is empty. |
| 1900005 | Operation allowed only for the proxy object. |
| 1900008 | The proxy or remote object is invalid. |

## removeDeathRecipient

```TypeScript
removeDeathRecipient(recipient: DeathRecipient, flags: number): boolean
```

Removes the callback used to receive death notifications of the remote object.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** unregisterDeathRecipient(recipient:

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| recipient | DeathRecipient | 是 | Callback to unregister. |
| flags | number | 是 | Flag of the death notification. |

**返回值：**

| 类型 | 说明 |
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

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | int | 是 | Message code [1-16777215] called by the request, which is determined by the communication  parties. If the method is generated by an IDL tool, the message code is automatically generated by the IDL  tool. |
| data | MessageSequence | 是 | MessageSequence object holding the data to send. |
| reply | MessageSequence | 是 | MessageSequence object that receives the response. |
| options | MessageOption | 是 | Request sending mode, which can be synchronous (default) or asynchronous. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;RequestResult> | Promise used to return a requestResult instance. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | int | 是 | Message code [1-16777215] called by the request, which is determined by the communication  parties. If the method is generated by an IDL tool, the message code is automatically generated by the IDL  tool. |
| data | MessageSequence | 是 | MessageSequence object holding the data to send. |
| reply | MessageSequence | 是 | MessageSequence object that receives the response. |
| options | MessageOption | 是 | Request sending mode, which can be synchronous (default) or asynchronous. |
| callback | AsyncCallback&lt;RequestResult> | 是 | Callback for receiving the sending result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match;  3.Failed to obtain the passed object instance. |

## sendRequest

```TypeScript
sendRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean
```

Sends a **MessageParcel** message to the remote process in synchronous or asynchronous mode. If asynchronous mode is set in **options**, a promise will be fulfilled immediately and the reply message does not contain any content. If synchronous mode is set in **options**, a promise will be fulfilled when the response to **sendRequest** is returned, and the reply message contains the returned information.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** sendMessageRequest(code:

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | number | 是 | Message code [1-16777215] called by the request, which is determined by the  communication parties. If the method is generated by an IDL tool, the message code is automatically generated  by the IDL tool. |
| data | MessageParcel | 是 | MessageParcel object holding the data to send. |
| reply | MessageParcel | 是 | MessageParcel object that receives the response. |
| options | MessageOption | 是 | Request sending mode, which can be synchronous (default) or asynchronous. |

**返回值：**

| 类型 | 说明 |
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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sendMessageRequest(code:

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | number | 是 | Message code [1-16777215] called by the request, which is determined by the  communication parties. If the method is generated by an IDL tool, the message code is automatically generated  by the IDL tool. |
| data | MessageParcel | 是 | MessageParcel object holding the data to send. |
| reply | MessageParcel | 是 | MessageParcel object that receives the response. |
| options | MessageOption | 是 | Request sending mode, which can be synchronous (default) or asynchronous. |

**返回值：**

| 类型 | 说明 |
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

**起始版本：** 8

**废弃版本：** 9

**替代接口：** sendMessageRequest(code:

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | number | 是 | Message code [1-16777215] called by the request, which is determined by the  communication parties. If the method is generated by an IDL tool, the message code is automatically generated  by the IDL tool. |
| data | MessageParcel | 是 | MessageParcel object holding the data to send. |
| reply | MessageParcel | 是 | MessageParcel object that receives the response. |
| options | MessageOption | 是 | Request sending mode, which can be synchronous (default) or asynchronous. |
| callback | AsyncCallback&lt;SendRequestResult> | 是 | Callback for receiving the sending result. |

## unregisterDeathRecipient

```TypeScript
unregisterDeathRecipient(recipient: DeathRecipient, flags: int): void
```

Unregisters from the callback used to receive death notifications of the remote object.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| recipient | DeathRecipient | 是 | Callback to unregister. |
| flags | int | 是 | Flag of the death notification. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match;  3.The callback used to receive remote object death notifications is empty. |
| 1900005 | Operation allowed only for the proxy object. |
| 1900008 | The proxy or remote object is invalid. |

