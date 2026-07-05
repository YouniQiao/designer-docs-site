# ThreadWorkerGlobalScope

Worker线程用于与宿主线程通信的类。其中postMessage接口用于向宿主线程发送消息，close接口用于销毁Worker线程。 ThreadWorkerGlobalScope类继承GlobalScope9+。

**Inheritance:** ThreadWorkerGlobalScopeextends: GlobalScope.

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## callGlobalCallObjectMethod

```TypeScript
callGlobalCallObjectMethod(instanceName: string, methodName: string, timeout: number, ...args: Object[]): Object
```

Worker线程调用宿主线程上注册的对象的指定方法，此调用对Worker线程同步，对宿主线程异步， 返回值通过数据拷贝传递。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| instanceName | string | Yes | 注册对象时使用的键，用于在宿主线程中查找对象。 |
| methodName | string | Yes | 在已注册对象上调用的方法名。该方法不能使用async修饰，  也不能基于底层异步机制返回结果，否则会抛出异常。 |
| timeout | number | Yes | 表示从Worker线程发起调用开始到在主线程中执行目标方法的最大等待时间，  单位为ms，取整数，取值范围为[1-5000]。也可取特殊值0，此时表示本次调用等待时间为5000ms。  该值应为整数。  单位：ms。 |
| args | Object[] | Yes | 注册对象上所调用方法的参数数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| Object | 返回值为调用方法在宿主线程的返回值，无返回值时返回void。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |
| 10200006 | An exception occurred during serialization. |
| 10200019 | The globalCallObject is not registered. |
| 10200020 | The method to be called is not callable or is an async method or a generator. |
| 10200021 | The global call exceeds the timeout. |

**Example**

```TypeScript
//Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.ThreadWorker("entry/ets/workers/worker.ets");
class TestObj {
  private message : string = "this is a message from TestObj";
  public getMessage() : string {
    return this.message;
  }
  public getMessageWithInput(str : string) : string {
    return this.message + " with input: " + str;
  }
}
let registerObj = new TestObj();
// Register registerObj with the ThreadWorker instance.
workerInstance.registerGlobalCallObject("myObj", registerObj);
workerInstance.postMessage("start worker");
// Call the following method when the component lifecycle ends:
// workerInstance.unregisterGlobalCallObject("myObj");


// worker.ets
import { worker, MessageEvents } from '@kit.ArkTS';

const workerPort = worker.workerPort;
workerPort.onmessage = (e: MessageEvents): void => {
  try {
    // The method to call does not carry an input parameter.
    let res : string = workerPort.callGlobalCallObjectMethod("myObj", "getMessage", 0) as string;
    console.info("worker:", res); // worker: this is a message from TestObj
  } catch (error) {
    // Exception handling.
    console.error("worker: error code is " + error.code + " error message is " + error.message);
  }
  try {
    // The method to call carries input parameters.
    let res : string = workerPort.callGlobalCallObjectMethod("myObj", "getMessageWithInput", 0, "hello there!") as string;
    console.info("worker:", res); //worker: this is a message from TestObj with input: hello there!
  } catch (error) {
    // Exception handling.
    console.error("worker: error code is " + error.code + " error message is " + error.message);
  }
}

```

## close

```TypeScript
close(): void
```

销毁Worker线程，终止Worker接收消息。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.ThreadWorker("entry/ets/workers/worker.ets");
workerInstance.postMessage("hello world");


// worker.ets
import { worker, MessageEvents } from '@kit.ArkTS';

const workerPort = worker.workerPort;
workerPort.onmessage = (e: MessageEvents): void => {
    workerPort.close();
}

```

## postMessage

```TypeScript
postMessage(messageObject: Object, transfer: ArrayBuffer[]): void
```

Worker线程通过转移对象所有权的方式向宿主线程发送消息。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| messageObject | Object | Yes | 发送至宿主线程的数据，该数据对象必须是可序列化对象。  支持的参数类型请参考序列化支持类型。 |
| transfer | ArrayBuffer[] | Yes | 表示可转移的ArrayBuffer实例对象数组，该数组中对象的所有权  会被转移到宿主线程，转移后该对象仅在宿主线程中可用。该数组不可传入null。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |
| 10200006 | An exception occurred during serialization. |

**Example**

```TypeScript
// Index.ets
import { worker, MessageEvents } from '@kit.ArkTS';

const workerInstance = new worker.ThreadWorker("entry/ets/workers/worker.ets");
workerInstance.postMessage("hello world");
workerInstance.onmessage = (e: MessageEvents): void => {
    console.info("receive data from worker.ets");
}


// worker.ets
import { worker, MessageEvents } from '@kit.ArkTS';

const workerPort = worker.workerPort;
workerPort.onmessage = (e: MessageEvents): void => {
    let buffer = new ArrayBuffer(8);
    workerPort.postMessage(buffer, [buffer]);
}

```

## postMessage

```TypeScript
postMessage(messageObject: Object, options?: PostMessageOptions): void
```

Worker线程通过转移对象所有权或拷贝数据的方式向宿主线程发送消息。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| messageObject | Object | Yes | 发送至宿主线程的数据，该数据对象必须是可序列化对象。  支持的参数类型请参考序列化支持类型。 |
| options | PostMessageOptions | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |
| 10200006 | An exception occurred during serialization. |

**Example**

```TypeScript
// Index.ets
import { worker, MessageEvents } from '@kit.ArkTS';

const workerInstance = new worker.ThreadWorker("entry/ets/workers/worker.ets");
workerInstance.postMessage("hello world");
workerInstance.onmessage = (e: MessageEvents): void => {
    console.info("receive data from worker.ets");
}


// worker.ets
import { worker, MessageEvents } from '@kit.ArkTS';

const workerPort = worker.workerPort;
workerPort.onmessage = (e: MessageEvents): void => {
    workerPort.postMessage("receive data from main thread");
}

```

## postMessageAtFront

```TypeScript
postMessageAtFront?(message: Object, priority: Priority, transfer?: ArrayBuffer[]): void
```

Worker线程通过转移对象所有权的方式向宿主线程发送插队消息，并插入到对应优先级队列的队头。 除Worker线程向主线程发送的场景外，该接口与postMessage功能一致。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | Object | Yes | 发送至宿主线程的数据，该数据对象必须是可序列化或可共享。  支持的序列化类型请参考序列化支持类型。  支持的共享类型请参考Sendable支持的数据类型。 |
| priority | Priority | Yes | Worker EventHandler的优先级。 |
| transfer | ArrayBuffer[] | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |
| 10200006 | An exception occurred during serialization. |

## postMessageWithSharedSendable

```TypeScript
postMessageWithSharedSendable(message: Object, transfer?: ArrayBuffer[]): void
```

Worker线程向宿主线程发送消息，消息中的Sendable对象通过引用传递， 非Sendable对象通过拷贝数据的方式传递。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | Object | Yes | 发送至宿主线程的数据，该数据对象必须是可序列化或可共享。  支持的序列化类型请参考序列化支持类型。  支持的共享类型请参考Sendable支持的数据类型。 |
| transfer | ArrayBuffer[] | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |
| 10200006 | An exception occurred during serialization. |

**Example**

```TypeScript
// The worker file path is entry/src/main/ets/workers/Worker.ets.
// Worker.ets
// Create a SendableObject instance and pass it to the host thread through the Worker thread.

import { SendableObject } from '../pages/sendable';
import { worker, ThreadWorkerGlobalScope, MessageEvents, ErrorEvent } from '@kit.ArkTS';

const workerPort: ThreadWorkerGlobalScope = worker.workerPort;
workerPort.onmessage = (e: MessageEvents) => {
  let object: SendableObject = new SendableObject();
  workerPort.postMessageWithSharedSendable(object);
}


// sendable.ets
// Define SendableObject.

@Sendable
export class SendableObject {
  a:number = 45;
}


// Index.ets
// Receive the data passed from the Worker thread to the host thread and access its properties.

import { worker, MessageEvents } from '@kit.ArkTS';
import { SendableObject } from './sendable';

const workerInstance = new worker.ThreadWorker("entry/ets/workers/Worker.ets");
workerInstance.postMessage(1);
workerInstance.onmessage = (e: MessageEvents) => {
  let obj: SendableObject = e.data;
  console.info("sendable index obj is: " + obj.a);
}

```

## onmessage

```TypeScript
onmessage?: (this: ThreadWorkerGlobalScope, ev: MessageEvents) => void
```

当Worker线程收到来自其宿主线程通过postMessage接口发送的消息时调用的事件处理程序， 该事件处理程序在Worker线程中执行。其中this指调用者对象本身ThreadWorkerGlobalScope， ev类型为MessageEvents，表示收到的消息数据。

**Type:** (this: ThreadWorkerGlobalScope, ev: MessageEvents) => void

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## onmessageerror

```TypeScript
onmessageerror?: (this: ThreadWorkerGlobalScope, ev: MessageEvents) => void
```

当Worker线程收到一条无法被反序列化的消息时调用的事件处理程序， 该事件处理程序在Worker线程中执行。其中this指调用者对象本身ThreadWorkerGlobalScope， ev类型为MessageEvents，表示收到的消息数据。

**Type:** (this: ThreadWorkerGlobalScope, ev: MessageEvents) => void

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

