# MessageOption

Defines the options used to construct the **MessageOption** object.

**Since:** 7

<!--Device-rpc-class MessageOption--><!--Device-rpc-class MessageOption-End-->

**System capability:** SystemCapability.Communication.IPC.Core

## Modules to Import

```TypeScript
import { rpc } from '@kit.IPCKit';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(syncFlags?: number, waitTime?: number)
```

A constructor used to create a **MessageOption** object.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MessageOption-constructor(syncFlags?: number, waitTime?: number)--><!--Device-MessageOption-constructor(syncFlags?: number, waitTime?: number)-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| syncFlags | number | No | Call flag to set. The options are as follows: 0 (synchronous call) and 1(asynchronous call). The default value is **synchronous**. |
| waitTime | number | No | Maximum wait time for an RPC call, in seconds. The default value is **TF_WAIT_TIME**. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';

class TestRemoteObject extends rpc.MessageOption {
  constructor(syncFlags?: number,waitTime?: number) {
    super(syncFlags,waitTime);
  }
}

```

<a id="constructor-1"></a>
## constructor

```TypeScript
constructor(async?: boolean)
```

A constructor used to create a **MessageOption** object.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MessageOption-constructor(async?: boolean)--><!--Device-MessageOption-constructor(async?: boolean)-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| async | boolean | No | Whether to execute the call asynchronously. The value **true** means to execute the call asynchronously; the value **false** means to execute the call synchronously. The default value is **synchronous**. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';

class TestRemoteObject extends rpc.MessageOption {
  constructor(async: boolean) {
    super(async);
  }
}

```

<a id="getflags"></a>
## getFlags

```TypeScript
getFlags(): number
```

Obtains the call flag, which can be synchronous or asynchronous.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MessageOption-getFlags(): int--><!--Device-MessageOption-getFlags(): int-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Call flag obtained. **0**: synchronous call flag; **1**: asynchronous call flag. |

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

<a id="getwaittime"></a>
## getWaitTime

```TypeScript
getWaitTime(): number
```

Obtains the maximum wait time for this RPC call.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MessageOption-getWaitTime(): int--><!--Device-MessageOption-getWaitTime(): int-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Return the maximum waiting time obtained by the RPC, in seconds. The default value is **TF_WAIT_TIME**. |

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

<a id="isasync"></a>
## isAsync

```TypeScript
isAsync(): boolean
```

Checks whether **SendMessageRequest** is called synchronously or asynchronously.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MessageOption-isAsync(): boolean--><!--Device-MessageOption-isAsync(): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if **SendMessageRequest** is called asynchronously; returns **false** if it is called synchronously. |

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

<a id="setasync"></a>
## setAsync

```TypeScript
setAsync(isAsync: boolean): void
```

Sets whether **SendMessageRequest** is called synchronously or asynchronously.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MessageOption-setAsync(isAsync: boolean): void--><!--Device-MessageOption-setAsync(isAsync: boolean): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isAsync | boolean | Yes | Whether to execute the call asynchronously. The value **true** means to execute the call asynchronously; the value **false** means to execute the call synchronously. |

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

<a id="setflags"></a>
## setFlags

```TypeScript
setFlags(flags: number): void
```

Sets the call flag, which can be synchronous or asynchronous.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MessageOption-setFlags(flags: int): void--><!--Device-MessageOption-setFlags(flags: int): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| flags | number | Yes | Call flag to set. **0**: synchronous call flag; **1**: asynchronous call flag. |

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

<a id="setwaittime"></a>
## setWaitTime

```TypeScript
setWaitTime(waitTime: number): void
```

Sets the maximum wait time for this RPC call.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MessageOption-setWaitTime(waitTime: int): void--><!--Device-MessageOption-setWaitTime(waitTime: int): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| waitTime | number | Yes | Indicates the maximum waiting time for RPC, in seconds. The upper limit is 3000seconds. |

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
static readonly TF_ACCEPT_FDS: number
```

Indication to **sendMessageRequest** for passing the file descriptor.

**Type:** number

**Default:** 16

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MessageOption-static readonly TF_ACCEPT_FDS: number--><!--Device-MessageOption-static readonly TF_ACCEPT_FDS: number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

## TF_ASYNC

```TypeScript
static readonly TF_ASYNC: number
```

Asynchronous call.

**Type:** number

**Default:** 1

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MessageOption-static readonly TF_ASYNC: number--><!--Device-MessageOption-static readonly TF_ASYNC: number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

## TF_SYNC

```TypeScript
static readonly TF_SYNC: number
```

Synchronous call.

**Type:** number

**Default:** 0

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MessageOption-static readonly TF_SYNC: number--><!--Device-MessageOption-static readonly TF_SYNC: number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

## TF_WAIT_TIME

```TypeScript
static readonly TF_WAIT_TIME: number
```

RPC wait time, in seconds. This parameter cannot be used in IPC. The default waiting time is 8 seconds. You are advised not to change the waiting time.

**Type:** number

**Default:** 4 [since 7 - 10]
@default 8 [since 11]

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MessageOption-static readonly TF_WAIT_TIME: number--><!--Device-MessageOption-static readonly TF_WAIT_TIME: number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

