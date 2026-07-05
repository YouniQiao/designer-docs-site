# MessageOption

Defines the options used to construct the **MessageOption** object.

**起始版本：** 7

**系统能力：** SystemCapability.Communication.IPC.Core

## 导入模块

```TypeScript
import { rpc } from '@kit.IPCKit';
```

## constructor

```TypeScript
constructor(syncFlags?: number, waitTime?: number)
```

A constructor used to create a **MessageOption** object.

**起始版本：** 7

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| syncFlags | number | 否 | Call flag to set. The options are as follows: 0 (synchronous call) and 1  (asynchronous call). The default value is synchronous. |
| waitTime | number | 否 | Maximum wait time for an RPC call, in seconds. The default value is  TF_WAIT_TIME. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';

class TestRemoteObject extends rpc.MessageOption {
  constructor(syncFlags?: number,waitTime?: number) {
    super(syncFlags,waitTime);
  }
}

```

## constructor

```TypeScript
constructor(async?: boolean)
```

A constructor used to create a **MessageOption** object.

**起始版本：** 9

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| async | boolean | 否 | Whether to execute the call asynchronously. The value true means to execute the  call asynchronously; the value false means to execute the call synchronously. The default value is  synchronous. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';

class TestRemoteObject extends rpc.MessageOption {
  constructor(async: boolean) {
    super(async);
  }
}

```

## constructor

```TypeScript
constructor(isAsync: boolean)
```

A constructor used to create a MessageOption instance.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isAsync | boolean | 是 | Specifies whether the SendRequest is called synchronously (default) or  asynchronously. |

## constructor

```TypeScript
constructor()
```

A constructor used to create a MessageOption instance.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.IPC.Core

## constructor

```TypeScript
constructor(syncFlags: int)
```

A constructor used to create a MessageOption instance.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| syncFlags | int | 是 | Specifies whether the SendRequest is called synchronously (default) or asynchronously. |

## constructor

```TypeScript
constructor(syncFlags: int, waitTime: int)
```

A constructor used to create a MessageOption instance.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| syncFlags | int | 是 | Specifies whether the SendRequest is called synchronously (default) or asynchronously. |
| waitTime | int | 是 | Maximum wait time for a RPC call, in seconds. The default value is TF_WAIT_TIME. |

## getFlags

```TypeScript
getFlags(): int
```

Obtains the call flag, which can be synchronous or asynchronous.

**起始版本：** 7

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Call flag obtained. 0: synchronous call flag; 1: asynchronous call flag. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let option = new rpc.MessageOption();
  hilog.info(0x0000, 'testTag', 'Succeeded in creating object');
  let flag = option.getFlags();
  hilog.info(0x0000, 'testTag', 'Succeeded in running getFlags, flag is ' + flag);
  option.setFlags(rpc.MessageOption.TF_ASYNC);
  hilog.info(0x0000, 'testTag', 'Succeeded in running setFlags');
  let flag2 = option.getFlags();
  hilog.info(0x0000, 'testTag', 'Succeeded in running getFlags, flag2 is ' + flag2);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

## getWaitTime

```TypeScript
getWaitTime(): int
```

Obtains the maximum wait time for this RPC call.

**起始版本：** 7

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Return the maximum waiting time obtained by the RPC, in seconds. The default value is  TF_WAIT_TIME. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let option = new rpc.MessageOption();
  let time = option.getWaitTime();
  hilog.info(0x0000, 'testTag', 'Succeeded in running getWaitTime, time is ' + time);
  option.setWaitTime(16);
  let time2 = option.getWaitTime();
  hilog.info(0x0000, 'testTag', 'Succeeded in running getWaitTime, time is ' + time2);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

## isAsync

```TypeScript
isAsync(): boolean
```

Checks whether **SendMessageRequest** is called synchronously or asynchronously.

**起始版本：** 9

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if SendMessageRequest is called asynchronously; returns false if it  is called synchronously. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let option = new rpc.MessageOption();
  let result = option.isAsync();
} catch (error) {
  hilog.info(0x0000, 'testTag', 'error ' + error);
}

```

## setAsync

```TypeScript
setAsync(isAsync: boolean): void
```

Sets whether **SendMessageRequest** is called synchronously or asynchronously.

**起始版本：** 9

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isAsync | boolean | 是 | Whether to execute the call asynchronously. The value true means to execute the  call asynchronously; the value false means to execute the call synchronously. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let option = new rpc.MessageOption();
  option.setAsync(true);
} catch (error) {
  hilog.info(0x0000, 'testTag', 'error ' + error);
}

```

## setFlags

```TypeScript
setFlags(flags: int): void
```

Sets the call flag, which can be synchronous or asynchronous.

**起始版本：** 7

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| flags | int | 是 | Call flag to set. 0: synchronous call flag; 1: asynchronous call flag. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let option = new rpc.MessageOption();
  option.setFlags(rpc.MessageOption.TF_ASYNC);
  hilog.info(0x0000, 'testTag', 'Succeeded in running setFlags');
  let flag = option.getFlags();
  hilog.info(0x0000, 'testTag', 'Succeeded in running getFlags, flag is ' + flag);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

## setWaitTime

```TypeScript
setWaitTime(waitTime: int): void
```

Sets the maximum wait time for this RPC call.

**起始版本：** 7

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| waitTime | int | 是 | Indicates the maximum waiting time for RPC, in seconds. The upper limit is 3000  seconds. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let option = new rpc.MessageOption();
  option.setWaitTime(16);
  let time = option.getWaitTime();
  hilog.info(0x0000, 'testTag', 'Succeeded in running getWaitTime, time is ' + time);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

## TF_ACCEPT_FDS

```TypeScript
static get TF_ACCEPT_FDS(): int
```

Indicates the sendRequest API for returning the file descriptor.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Return vaule indicating the sendRequest API for returning the file descriptor. |

## TF_ASYNC

```TypeScript
static get TF_ASYNC(): int
```

Indicates asynchronous call.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Return vaule indicating asynchronous call. |

## TF_SYNC

```TypeScript
static get TF_SYNC(): int
```

Indicates synchronous call.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Return vaule indicating synchronous call. |

## TF_WAIT_TIME

```TypeScript
static get TF_WAIT_TIME(): int
```

Indicates the wait time for RPC, in seconds. It is NOT used in IPC case.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Return vaule indicating the wait time for RPC, in seconds. It is NOT used in IPC case. |

## TF_ACCEPT_FDS

```TypeScript
static readonly TF_ACCEPT_FDS: number
```

Indication to **sendMessageRequest** for passing the file descriptor.

**类型：** number

**起始版本：** 7

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.IPC.Core

## TF_ASYNC

```TypeScript
static readonly TF_ASYNC: number
```

Asynchronous call.

**类型：** number

**起始版本：** 7

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.IPC.Core

## TF_WAIT_TIME

```TypeScript
static readonly TF_WAIT_TIME: number
```

RPC wait time, in seconds. This parameter cannot be used in IPC. The default waiting time is 8 seconds. You are advised not to change the waiting time.

**类型：** number

**起始版本：** 7

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.IPC.Core

## TF_SYNC

```TypeScript
static readonly TF_SYNC: number
```

Synchronous call.

**类型：** number

**起始版本：** 7

**原子化服务API：** 从API version 26.0.0开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.IPC.Core

