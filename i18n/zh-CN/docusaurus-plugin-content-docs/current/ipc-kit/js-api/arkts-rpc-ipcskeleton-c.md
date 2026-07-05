# IPCSkeleton

Obtains IPC context, including the UID and PID, local and remote device IDs, and whether the method is invoked on the same device.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

## 导入模块

```TypeScript
import { rpc } from '@kit.IPCKit';
```

## flushCmdBuffer

```TypeScript
static flushCmdBuffer(object: IRemoteObject): void
```

Flushes all suspended commands from the specified **RemoteProxy** to the corresponding **RemoteObject**. This API is a static method. You are advised to call this API before performing any sensitive operation.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| object | IRemoteObject | 是 | RemoteProxy specified. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match. |

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
  let remoteObject = new TestRemoteObject("aaa");
  rpc.IPCSkeleton.flushCmdBuffer(remoteObject);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'proxy flushCmdBuffer fail, errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'proxy flushCmdBuffer fail, errorMessage ' + e.message);
}

```

## flushCommands

```TypeScript
static flushCommands(object: IRemoteObject): number
```

Flushes all suspended commands from the specified **RemoteProxy** to the corresponding **RemoteObject**. This API is a static method. You are advised to call this API before performing any sensitive operation.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** static

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| object | IRemoteObject | 是 | RemoteProxy specified. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Returns 0 if the operation is successful; returns an error code if the input object is  null or a RemoteObject, or if the operation fails. |

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
  let remoteObject = new TestRemoteObject("aaa");
  let ret = rpc.IPCSkeleton.flushCommands(remoteObject);
  hilog.info(0x0000, 'testTag', 'RpcServer: flushCommands result: ' + ret);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'proxy flushCmdBuffer fail, errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'proxy flushCmdBuffer fail, errorMessage ' + e.message);
}

```

## getCallingDeviceID

```TypeScript
static getCallingDeviceID(): string
```

Obtains the ID of the device hosting the caller's process. This API is a static method.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Device ID obtained. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    try {
      let callerDeviceID = rpc.IPCSkeleton.getCallingDeviceID();
      hilog.info(0x0000, 'testTag', 'RpcServer: callerDeviceID is ' + callerDeviceID);
    } catch (error) {
      hilog.error(0x0000, 'testTag', 'error ' + error);
    }
    return true;
  }
}

```

## getCallingPid

```TypeScript
static getCallingPid(): int
```

Obtains the PID of the caller. This API is a static method, which is invoked by the **RemoteObject** object in the **onRemoteRequest** method. If this method is not invoked in the IPC context (**onRemoteRequest**), the PID of the process will be returned.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | PID of the caller. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    try {
      let callerPid = rpc.IPCSkeleton.getCallingPid();
      hilog.info(0x0000, 'testTag', 'RpcServer: getCallingPid result: ' + callerPid);
    } catch (error) {
      hilog.error(0x0000, 'testTag', 'error ' + error);
    }
    return true;
  }
}

```

## getCallingTokenId

```TypeScript
static getCallingTokenId(): long
```

Obtains the caller's token ID, which is used to verify the caller identity.

**起始版本：** 8

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Token ID of the caller obtained. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    try {
      let callerTokenId = rpc.IPCSkeleton.getCallingTokenId();
      hilog.info(0x0000, 'testTag', 'RpcServer: getCallingTokenId result: ' + callerTokenId);
    } catch (error) {
      hilog.error(0x0000, 'testTag', 'error ' + error);
    }
    return true;
  }
}

```

## getCallingUid

```TypeScript
static getCallingUid(): int
```

Obtains the UID of the caller. This API is a static method, which is invoked by the **RemoteObject** object in the **onRemoteRequest** method. If this method is not invoked in the IPC context (**onRemoteRequest**), the UID of the process will be returned.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | UID of the caller. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    try {
      let callerUid = rpc.IPCSkeleton.getCallingUid();
      hilog.info(0x0000, 'testTag', 'RpcServer: getCallingUid result: ' + callerUid);
    } catch (error) {
      hilog.error(0x0000, 'testTag', 'error ' + error);
    }
    return true;
  }
}

```

## getContextObject

```TypeScript
static getContextObject(): IRemoteObject
```

Obtains the system capability manager. This API is a static method.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IRemoteObject | System capability manager obtained. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let samgr = rpc.IPCSkeleton.getContextObject();
  hilog.info(0x0000, 'testTag', 'RpcServer: getContextObject result: ' + samgr);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

## getLocalDeviceID

```TypeScript
static getLocalDeviceID(): string
```

Obtains the local device ID. This API is a static method.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Local device ID obtained. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    try {
      let localDeviceID = rpc.IPCSkeleton.getLocalDeviceID();
      hilog.info(0x0000, 'testTag', 'RpcServer: localDeviceID is ' + localDeviceID);
    } catch (error) {
      hilog.error(0x0000, 'testTag', 'error ' + error);
    }
    return true;
  }
}

```

## isLocalCalling

```TypeScript
static isLocalCalling(): boolean
```

Checks whether the peer process is a process of the local device. This API is a static method.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the local and peer processes are on the same device; returns false  otherwise. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    try {
      let isLocalCalling = rpc.IPCSkeleton.isLocalCalling();
      hilog.info(0x0000, 'testTag', 'RpcServer: isLocalCalling is ' + isLocalCalling);
    } catch (error) {
      hilog.error(0x0000, 'testTag', 'error ' + error);
    }
    return true;
  }
}

```

## resetCallingIdentity

```TypeScript
static resetCallingIdentity(): string
```

Resets the UID and PID of the remote user to those of the local user. This API is a static method and is used in scenarios such as identity authentication.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | String containing the UID and PID of the remote user. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    try {
      let callingIdentity = rpc.IPCSkeleton.resetCallingIdentity();
      hilog.info(0x0000, 'testTag', 'RpcServer: callingIdentity is ' + callingIdentity);
    } catch (error) {
      hilog.error(0x0000, 'testTag', 'error ' + error);
    }
    return true;
  }
}

```

## restoreCallingIdentity

```TypeScript
static restoreCallingIdentity(identity: string): void
```

Restores the UID and PID of the remote user. This API is a static method. It is usually called after **resetCallingIdentity**, and the UID and PID of the remote user returned by **resetCallingIdentity** are required.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| identity | string | 是 | A string containing the UID and PID of the remote user. The length of the string  must be less than 40960 bytes. are returned by resetCallingIdentity. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match;  3.The string length is greater than or equal to 40960 bytes;  4.The number of bytes copied to the buffer is different from the length of the obtained string. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    try {
      let callingIdentity = rpc.IPCSkeleton.resetCallingIdentity();
      hilog.info(0x0000, 'testTag', 'RpcServer: callingIdentity is ' + callingIdentity);
      rpc.IPCSkeleton.restoreCallingIdentity(callingIdentity);
    } catch (error) {
      hilog.error(0x0000, 'testTag', 'error ' + error);
    }
    return true;
  }
}

```

## setCallingIdentity

```TypeScript
static setCallingIdentity(identity: string): boolean
```

Sets the UID and PID of the remote user. This API is a static method. It is usually called after **resetCallingIdentity**, and the UID and PID of the remote user returned by **resetCallingIdentity** are required.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** static

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| identity | string | 是 | String containing the remote user's UID and PID, which are returned by  resetCallingIdentity. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class Stub extends rpc.RemoteObject {
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    try {
      let callingIdentity = rpc.IPCSkeleton.resetCallingIdentity();
      hilog.info(0x0000, 'testTag', 'RpcServer: callingIdentity is ' + callingIdentity);
      let ret = rpc.IPCSkeleton.setCallingIdentity(callingIdentity);
      hilog.info(0x0000, 'testTag', 'RpcServer: setCallingIdentity is ' + ret);
    } catch (error) {
      hilog.error(0x0000, 'testTag', 'error ' + error);
    }
    return true;
  }
}

```

