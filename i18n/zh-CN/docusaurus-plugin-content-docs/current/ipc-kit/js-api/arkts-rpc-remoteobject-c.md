# RemoteObject

Provides methods to implement **RemoteObject**. The service provider must inherit from this class.

**继承实现关系：** RemoteObject继承自：IRemoteObject。

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

## 导入模块

```TypeScript
import { rpc } from '@kit.IPCKit';
```

## attachLocalInterface

```TypeScript
attachLocalInterface(localInterface: IRemoteBroker, descriptor: string): void
```

Binds an interface descriptor to an **IRemoteBroker** object.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** modifyLocalInterface(localInterface:

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| localInterface | IRemoteBroker | 是 | IRemoteBroker object. |
| descriptor | string | 是 | Interface descriptor. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyDeathRecipient implements rpc.DeathRecipient {
  onRemoteDied() {
    hilog.info(0x0000, 'testTag', 'server died');
  }
}
class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
    this.attachLocalInterface(this, descriptor);
  }
  addDeathRecipient(recipient: MyDeathRecipient, flags: number): boolean {
    // 方法逻辑需开发者根据业务需要实现
    return true;
  }
  removeDeathRecipient(recipient: MyDeathRecipient, flags: number): boolean {
    // 方法逻辑需开发者根据业务需要实现
    return true;
  }
}
let testRemoteObject = new TestRemoteObject("testObject");

```

## constructor

```TypeScript
constructor(descriptor: string)
```

A constructor used to create a **RemoteObject** object.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| descriptor | string | 是 | Interface descriptor. The length of the string must be less than 40960 bytes. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
}

```

## getCallingPid

```TypeScript
getCallingPid(): int
```

Obtains the PID of the remote process.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | PID of the remote process obtained. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    // 根据业务实际逻辑，进行相应处理
    return true;
  }
}
try {
  let testRemoteObject = new TestRemoteObject("testObject");
  hilog.info(0x0000, 'testTag', 'RpcServer: getCallingPid: ' + testRemoteObject.getCallingPid());
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error: ' + error);
}

```

## getCallingUid

```TypeScript
getCallingUid(): int
```

Obtains the UID of the remote process.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Return the UID of the {@link RemoteProxy} object. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    // 根据业务实际逻辑，进行相应处理
    return true;
  }
}
try {
  let testRemoteObject = new TestRemoteObject("testObject");
  hilog.info(0x0000, 'testTag', 'RpcServer: getCallingUid: ' + testRemoteObject.getCallingUid());
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error: ' + error);
}

```

## getDescriptor

```TypeScript
getDescriptor(): string
```

Obtains the interface descriptor of this object. The interface descriptor is a string.

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

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    // 根据业务实际逻辑，进行相应处理
    return true;
  }
}
try {
  let testObject = new TestRemoteObject("ipcTest");
  let descriptor = testObject.getDescriptor();
  hilog.info(0x0000, 'testTag', 'RpcServer: descriptor is ' + descriptor);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

## getInterfaceDescriptor

```TypeScript
getInterfaceDescriptor(): string
```

Obtains the interface descriptor.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** rpc.IRemoteObject#getDescriptor()

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Interface descriptor obtained. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    // 根据业务实际逻辑，进行相应处理
    return true;
  }
}

try {
  let testRemoteObject = new TestRemoteObject("testObject");
  let descriptor = testRemoteObject.getInterfaceDescriptor();
  hilog.info(0x0000, 'testTag', 'RpcServer: descriptor is: ' + descriptor);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

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
| descriptor | string | 是 | String of the interface descriptor. The length of the string must be less than  40960 bytes. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IRemoteBroker | IRemoteBroker object bound to the specified interface token. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match;  3.The string length is greater than or equal to 40960 bytes;  4.The number of bytes copied to the buffer is different from the length of the obtained string. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    // 根据业务实际逻辑，进行相应处理
    return true;
  }
}
try {
  let testRemoteObject = new TestRemoteObject("testObject");
  testRemoteObject.getLocalInterface("testObject");
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

## modifyLocalInterface

```TypeScript
modifyLocalInterface(localInterface: IRemoteBroker, descriptor: string): void
```

Binds an interface descriptor to an **IRemoteBroker** object.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| localInterface | IRemoteBroker | 是 | IRemoteBroker object. |
| descriptor | string | 是 | IRemoteBroker object bound to the interface descriptor. The length of the  descriptor must be less than 40960 bytes. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match;  3.The string length is greater than or equal to 40960 bytes;  4.The number of bytes copied to the buffer is different from the length of the obtained string. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class MyDeathRecipient implements rpc.DeathRecipient {
  onRemoteDied() {
    hilog.info(0x0000, 'testTag', 'server died');
  }
}
class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
    try {
      this.modifyLocalInterface(this, descriptor);
    } catch (error) {
      let e: BusinessError = error as BusinessError;
      hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
      hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
    }
  }
  registerDeathRecipient(recipient: MyDeathRecipient, flags: number) {
    // 方法逻辑需开发者根据业务需要实现
  }
  unregisterDeathRecipient(recipient: MyDeathRecipient, flags: number) {
    // 方法逻辑需开发者根据业务需要实现
  }
}
let testRemoteObject = new TestRemoteObject("testObject");

```

## onRemoteMessageRequest

```TypeScript
onRemoteMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption
    ): boolean | Promise<boolean>
```

Called to return a response to **sendMessageRequest()**. The server processes the request synchronously or asynchronously and returns the result in this API. > **NOTE** > > - You are advised to overload **onRemoteMessageRequest** preferentially, which implements synchronous and > asynchronous message processing. > > - If both **onRemoteRequest()** and **onRemoteMessageRequest()** are overloaded, only > **onRemoteMessageRequest()** takes effect.

**起始版本：** 9

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | int | 是 | Service request code sent by the remote end. |
| data | MessageSequence | 是 | MessageSequence object that holds the parameters called by the client. |
| reply | MessageSequence | 是 | MessageSequence object to which the result is written. |
| options | MessageOption | 是 | Whether the operation is synchronous or asynchronous. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | - If the request is processed synchronously in  onRemoteMessageRequest, a Boolean value is returned. The value true means that the operation is  successful, and false means the opposite. - If the request is processed asynchronously in  onRemoteMessageRequest, a promise object is returned. The value true means that the operation is  successful, and false means the opposite. |

**示例：**

```TypeScript
// 重写onRemoteMessageRequest方法同步处理请求
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }

  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean {
    if (code === 1) {
      hilog.info(0x0000, 'testTag', 'RpcServer: sync onRemoteMessageRequest is called');
      return true;
    } else {
      hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
      return false;
    }
  }
}


// 重写onRemoteMessageRequest方法异步处理请求
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }

  async onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): Promise<boolean> {
    if (code === 1) {
      hilog.info(0x0000, 'testTag', 'RpcServer: async onRemoteMessageRequest is called');
    } else {
      hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
      return false;
    }
    await new Promise((resolve: (data: rpc.RequestResult) => void) => {
      setTimeout(resolve, 100);
    })
    return true;
  }
}


// 同时重写onRemoteMessageRequest和onRemoteRequest方法同步处理请求
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }

  onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel, option: rpc.MessageOption): boolean {
     if (code === 1) {
        hilog.info(0x0000, 'testTag', 'RpcServer: sync onRemoteMessageRequest is called');
        return true;
     } else {
        hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
        return false;
     }
  }
    // 同时调用仅会执行onRemoteMessageRequest
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    if (code === 1) {
      hilog.info(0x0000, 'testTag', 'RpcServer: async onRemoteMessageRequest is called');
    } else {
      hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
      return false;
    }
    return true;
  }
}

```

## onRemoteMessageRequest

```TypeScript
onRemoteMessageRequest(
      code: int,
      data: MessageSequence,
      reply: MessageSequence,
      options: MessageOption,
      callingInfo?: CallingInfo
    ): boolean | Promise<boolean>
```

Provides a response to **sendMessageRequest()**. The server processes the request and returns a response in this API. The IPC context can be obtained from the input parameter **callingInfo**. > **NOTE** > > You are advised to overload the **onRemoteMessageRequest** method with the **CallingInfo** parameter to > implement synchronous and asynchronous message processing. > If both **onRemoteRequest()** and **onRemoteMessageRequest()** are overloaded, only > **onRemoteMessageRequest()** takes effect.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | int | 是 | Service request code sent by the remote end. |
| data | MessageSequence | 是 | MessageSequence object that holds the parameters called by the client. |
| reply | MessageSequence | 是 | MessageSequence object to which the result is written. |
| options | MessageOption | 是 | Whether the operation is synchronous or asynchronous. |
| callingInfo | CallingInfo | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | - If the request is processed synchronously in  onRemoteMessageRequest, a Boolean value is returned. The value true means that the operation is  successful, and false means the opposite. - If the request is processed asynchronously in  onRemoteMessageRequest, a promise object is returned. The value true means that the operation is  successful, and false means the opposite. |

**示例：**

```TypeScript
// 重写onRemoteMessageRequest方法同步处理请求
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }

  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption, callingInfo?: rpc.CallingInfo): boolean | Promise<boolean> {
    if (code === 1) {
      hilog.info(0x0000, 'testTag', 'RpcServer: sync onRemoteMessageRequest is called');
      let pid = callingInfo?.callerPid;
      return true;
    } else {
      hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
      return false;
    }
  }
}


// 重写onRemoteMessageRequest方法异步处理请求
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }

  async onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption, callingInfo?: rpc.CallingInfo): Promise<boolean> {
    if (code === 1) {
      hilog.info(0x0000, 'testTag', 'RpcServer: async onRemoteMessageRequest is called');
      let pid = callingInfo?.callerPid;
    } else {
      hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
      return false;
    }
    await new Promise((resolve: (data: rpc.RequestResult) => void) => {
      setTimeout(resolve, 100);
    })
    return true;
  }
}


// 同时重写onRemoteMessageRequest和onRemoteRequest方法同步处理请求
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }

  onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel, option: rpc.MessageOption): boolean {
     if (code === 1) {
        hilog.info(0x0000, 'testTag', 'RpcServer: sync onRemoteMessageRequest is called');
        return true;
     } else {
        hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
        return false;
     }
  }
    // 同时调用仅会执行onRemoteMessageRequest
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption, callingInfo?: rpc.CallingInfo): boolean | Promise<boolean> {
    if (code === 1) {
      hilog.info(0x0000, 'testTag', 'RpcServer: async onRemoteMessageRequest is called');
      let pid = callingInfo?.callerPid;
    } else {
      hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
      return false;
    }
    return true;
  }
}

```

## onRemoteRequest

```TypeScript
onRemoteRequest(code: number, data: MessageParcel, reply: MessageParcel, options: MessageOption): boolean
```

Called to return a response to **sendRequest()**. The server processes the request and returns a response in this function.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** onRemoteMessageRequest(code:

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | number | 是 | Service request code sent by the remote end. |
| data | MessageParcel | 是 | MessageParcel object that holds the parameters called by the client. |
| reply | MessageParcel | 是 | MessageParcel object carrying the result. |
| options | MessageOption | 是 | Whether the operation is synchronous or asynchronous. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel, option: rpc.MessageOption): boolean {
    if (code === 1) {
      hilog.info(0x0000, 'testTag', 'RpcServer: onRemoteRequest called');
      return true;
    } else {
      hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
      return false;
    }
  }
}

```

## queryLocalInterface

```TypeScript
queryLocalInterface(descriptor: string): IRemoteBroker
```

Checks whether the remote object corresponding to the specified interface token exists.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** rpc.IRemoteObject#getLocalInterface(descriptor:

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| descriptor | string | 是 | Interface descriptor. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IRemoteBroker | Returns the remote object if a match is found; returns Null otherwise. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    // 根据业务实际逻辑，进行相应处理
    return true;
  }
}
try {
  let testRemoteObject = new TestRemoteObject("testObject");
  testRemoteObject.queryLocalInterface("testObject");
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error: ' + error);
}

```

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

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    // 根据业务实际逻辑，进行相应处理
    return true;
  }
}
try {
  let testRemoteObject = new TestRemoteObject("testObject");
  let option = new rpc.MessageOption();
  let data = rpc.MessageSequence.create();
  let reply = rpc.MessageSequence.create();
  data.writeInt(1);
  data.writeString("hello");
  testRemoteObject.sendMessageRequest(1, data, reply, option)
    .then((result: rpc.RequestResult) => {
      if (result.errCode === 0) {
        hilog.info(0x0000, 'testTag', 'sendMessageRequest got result');
        let num = result.reply.readInt();
        let msg = result.reply.readString();
        hilog.info(0x0000, 'testTag', 'reply num: ' + num);
        hilog.info(0x0000, 'testTag', 'reply msg: ' + msg);
      } else {
        hilog.error(0x0000, 'testTag', 'sendMessageRequest failed, errCode: ' + result.errCode);
      }
    }).catch((e: Error) => {
      hilog.error(0x0000, 'testTag', 'sendMessageRequest failed, error: ' + JSON.stringify(e));
    }).finally (() => {
      hilog.info(0x0000, 'testTag', 'sendMessageRequest ends, reclaim parcel');
      data.reclaim();
      reply.reclaim();
    });
} catch (error) {
  hilog.error(0x0000, 'testTag', 'sendMessageRequest failed, error: ' + error);
}

```

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

Sends a **MessageSequence** message to the remote process in synchronous or asynchronous mode. If asynchronous mode is set in **options**, a callback will be called immediately, and the reply message is empty. The specific reply needs to be obtained from the callback on the service side. If synchronous mode is set in **options**, a callback will be invoked when the response to **sendMessageRequest** is returned, and the reply message contains the returned information.

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

Sends a **MessageParcel** message to the remote process in synchronous or asynchronous mode. If asynchronous mode is set in **options**, a promise will be fulfilled immediately and the reply message is empty. The specific reply needs to be obtained from the callback on the service side. If synchronous mode is set in **options**, a promise will be fulfilled when the response to **sendRequest** is returned, and the reply message contains the returned information.

**起始版本：** 7

**废弃版本：** 8

**替代接口：** rpc.IRemoteObject#sendMessageRequest(code:

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

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class testRemoteObject extends rpc.RemoteObject {
  onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel,
    option: rpc.MessageOption): boolean {
    // 根据业务实际逻辑，进行相应处理
    return true;
  }
}
try {
  let testRemoteObject = new TestRemoteObject("testObject");
  let option = new rpc.MessageOption();
  let data = rpc.MessageParcel.create();
  let reply = rpc.MessageParcel.create();
  data.writeInt(1);
  data.writeString("hello");
  let ret: boolean = testRemoteObject.sendRequest(1, data, reply, option);
  if (ret) {
    hilog.info(0x0000, 'testTag', 'sendRequest got result');
    let msg = reply.readString();
    hilog.info(0x0000, 'testTag', 'reply msg: ' + msg);
  } else {
    hilog.error(0x0000, 'testTag', 'sendRequest failed');
  }
  hilog.info(0x0000, 'testTag', 'sendRequest ends, reclaim parcel');
  data.reclaim();
  reply.reclaim();
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

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

**替代接口：** rpc.IRemoteObject#sendMessageRequest(code:

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

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel, option: rpc.MessageOption): boolean {
    // 根据业务实际逻辑，进行相应处理
    return true;
  }
}
try {
  let testRemoteObject = new TestRemoteObject("testObject");
  let option = new rpc.MessageOption();
  let data = rpc.MessageParcel.create();
  let reply = rpc.MessageParcel.create();
  data.writeInt(1);
  data.writeString("hello");
  let a = testRemoteObject.sendRequest(1, data, reply, option) as Object;
  let b = a as Promise<rpc.SendRequestResult>;
  b.then((result: rpc.SendRequestResult) => {
    if (result.errCode === 0) {
      hilog.info(0x0000, 'testTag', 'sendRequest got result');
      let num = result.reply.readInt();
      let msg = result.reply.readString();
      hilog.info(0x0000, 'testTag', 'reply num: ' + num);
      hilog.info(0x0000, 'testTag', 'reply msg: ' + msg);
    } else {
      hilog.error(0x0000, 'testTag', 'sendRequest failed, errCode: ' + result.errCode);
    }
  }).catch((e: Error) => {
    hilog.error(0x0000, 'testTag', 'sendRequest failed, error: ' + JSON.stringify(e));
  }).finally (() => {
    hilog.info(0x0000, 'testTag', 'sendRequest ends, reclaim parcel');
    data.reclaim();
    reply.reclaim();
  });
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error: ' + error);
}

```

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

**替代接口：** rpc.IRemoteObject#sendMessageRequest(code:

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| code | number | 是 | Message code [1-16777215] called by the request, which is determined by the  communication parties. If the method is generated by an IDL tool, the message code is automatically generated  by the IDL tool. |
| data | MessageParcel | 是 | MessageParcel object holding the data to send. |
| reply | MessageParcel | 是 | MessageParcel object that receives the response. |
| options | MessageOption | 是 | Request sending mode, which can be synchronous (default) or asynchronous. |
| callback | AsyncCallback&lt;SendRequestResult> | 是 | Callback for receiving the sending result. |

