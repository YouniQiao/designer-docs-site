# MessageOption

Defines the options used to construct the **MessageOption** object.

**Since:** 7

**System capability:** SystemCapability.Communication.IPC.Core

## Modules to Import

```TypeScript
import { rpc } from '@kit.IPCKit';
```

## constructor

```TypeScript
constructor(syncFlags?: number, waitTime?: number)
```

A constructor used to create a **MessageOption** object.

**Since:** 7

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| syncFlags | number | No | Call flag to set. The options are as follows: 0 (synchronous call) and 1  (asynchronous call). The default value is synchronous. |
| waitTime | number | No | Maximum wait time for an RPC call, in seconds. The default value is  TF_WAIT_TIME. |

**Example**

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

**Since:** 9

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| async | boolean | No | Whether to execute the call asynchronously. The value true means to execute the  call asynchronously; the value false means to execute the call synchronously. The default value is  synchronous. |

**Example**

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

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isAsync | boolean | Yes | Specifies whether the SendRequest is called synchronously (default) or  asynchronously. |

## constructor

```TypeScript
constructor()
```

A constructor used to create a MessageOption instance.

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

## constructor

```TypeScript
constructor(syncFlags: int)
```

A constructor used to create a MessageOption instance.

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| syncFlags | int | Yes | Specifies whether the SendRequest is called synchronously (default) or asynchronously. |

## constructor

```TypeScript
constructor(syncFlags: int, waitTime: int)
```

A constructor used to create a MessageOption instance.

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| syncFlags | int | Yes | Specifies whether the SendRequest is called synchronously (default) or asynchronously. |
| waitTime | int | Yes | Maximum wait time for a RPC call, in seconds. The default value is TF_WAIT_TIME. |

## getFlags

```TypeScript
getFlags(): int
```

Obtains the call flag, which can be synchronous or asynchronous.

**Since:** 7

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| int | Call flag obtained. 0: synchronous call flag; 1: asynchronous call flag. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let option = new rpc.MessageOption();
  hilog.info(0x0000, 'testTag', 'create object successfully');
  let flag = option.getFlags();
  hilog.info(0x0000, 'testTag', 'run getFlags success, flag is ' + flag);
  option.setFlags(rpc.MessageOption.TF_ASYNC);
  hilog.info(0x0000, 'testTag', 'run setFlags success');
  let flag2 = option.getFlags();
  hilog.info(0x0000, 'testTag', 'run getFlags success, flag2 is ' + flag2);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

## getWaitTime

```TypeScript
getWaitTime(): int
```

Obtains the maximum wait time for this RPC call.

**Since:** 7

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| int | Return the maximum waiting time obtained by the RPC, in seconds. The default value is  TF_WAIT_TIME. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let option = new rpc.MessageOption();
  let time = option.getWaitTime();
  hilog.info(0x0000, 'testTag', 'run getWaitTime success, time is ' + time);
  option.setWaitTime(16);
  let time2 = option.getWaitTime();
  hilog.info(0x0000, 'testTag', 'run getWaitTime success, time is ' + time2);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

## isAsync

```TypeScript
isAsync(): boolean
```

Checks whether **SendMessageRequest** is called synchronously or asynchronously.

**Since:** 9

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if SendMessageRequest is called asynchronously; returns false if it  is called synchronously. |

**Example**

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

**Since:** 9

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isAsync | boolean | Yes | Whether to execute the call asynchronously. The value true means to execute the  call asynchronously; the value false means to execute the call synchronously. |

**Example**

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

**Since:** 7

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flags | int | Yes | Call flag to set. 0: synchronous call flag; 1: asynchronous call flag. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let option = new rpc.MessageOption();
  option.setFlags(rpc.MessageOption.TF_ASYNC);
  hilog.info(0x0000, 'testTag', 'run setFlags success');
  let flag = option.getFlags();
  hilog.info(0x0000, 'testTag', 'run getFlags success, flag is ' + flag);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

## setWaitTime

```TypeScript
setWaitTime(waitTime: int): void
```

Sets the maximum wait time for this RPC call.

**Since:** 7

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| waitTime | int | Yes | Indicates the maximum waiting time for RPC, in seconds. The upper limit is 3000  seconds. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let option = new rpc.MessageOption();
  option.setWaitTime(16);
  let time = option.getWaitTime();
  hilog.info(0x0000, 'testTag', 'run getWaitTime success, time is ' + time);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

## TF_ACCEPT_FDS

```TypeScript
static get TF_ACCEPT_FDS(): int
```

Indicates the sendRequest API for returning the file descriptor.

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| int | Return vaule indicating the sendRequest API for returning the file descriptor. |

## TF_ASYNC

```TypeScript
static get TF_ASYNC(): int
```

Indicates asynchronous call.

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| int | Return vaule indicating asynchronous call. |

## TF_SYNC

```TypeScript
static get TF_SYNC(): int
```

Indicates synchronous call.

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| int | Return vaule indicating synchronous call. |

## TF_WAIT_TIME

```TypeScript
static get TF_WAIT_TIME(): int
```

Indicates the wait time for RPC, in seconds. It is NOT used in IPC case.

**Since:** 23

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| int | Return vaule indicating the wait time for RPC, in seconds. It is NOT used in IPC case. |

## TF_ACCEPT_FDS

```TypeScript
static readonly TF_ACCEPT_FDS: number
```

Indication to **sendMessageRequest** for passing the file descriptor.

**Type:** number

**Since:** 7

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.IPC.Core

## TF_ASYNC

```TypeScript
static readonly TF_ASYNC: number
```

Asynchronous call.

**Type:** number

**Since:** 7

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.IPC.Core

## TF_WAIT_TIME

```TypeScript
static readonly TF_WAIT_TIME: number
```

RPC wait time, in seconds. This parameter cannot be used in IPC. The default waiting time is 8 seconds. You are advised not to change the waiting time.

**Type:** number

**Since:** 7

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.IPC.Core

## TF_SYNC

```TypeScript
static readonly TF_SYNC: number
```

Synchronous call.

**Type:** number

**Since:** 7

**Atomic service API:** From API version 26.0.0 this API can be used in atomic services.

**System capability:** SystemCapability.Communication.IPC.Core

