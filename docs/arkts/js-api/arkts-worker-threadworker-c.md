# ThreadWorker

使用以下方法前，需先构造ThreadWorker实例。ThreadWorker类继承WorkerEventTarget。

**Inheritance:** ThreadWorkerimplements: WorkerEventTarget.

**Since:** 9

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { MessageEvents,PostMessageOptions,MessageEvent,Priority,WorkerEventTarget,ThreadWorkerPriority,ThreadWorkerGlobalScope,DedicatedWorkerGlobalScope,ErrorEvent,Event,EventListener,WorkerOptions,EventTarget,WorkerEventListener } from '@kit.ArkTS';
```

## addEventListener

```TypeScript
addEventListener(type: string, listener: WorkerEventListener): void
```

向宿主线程的Worker实例对象添加一个事件监听，该接口与on9+接口功能一致。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 监听的事件类型。 |
| listener | WorkerEventListener | Yes | 当指定类型的事件发生时调用的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |
| 10200005 | The called API is not supported in the worker thread. |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.ThreadWorker("entry/ets/workers/worker.ets");

workerInstance.addEventListener("alert", () => {
  console.info("alert listener callback");
})

// Execute the callback of the alert type.
workerInstance.dispatchEvent({type: "alert", timeStamp: 0}); // timeStamp is not supported yet.

```

## constructor

```TypeScript
constructor(scriptURL: string, options?: WorkerOptions)
```

ThreadWorker构造函数，用于创建一个ThreadWorker实例。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scriptURL | string | Yes | Worker线程文件的路径。详细规则请参考  文件路径注意事项。 |
| options | WorkerOptions | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200003 | Worker initialization failed. |
| 10200007 | The worker file path is invalid. |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

// URL of the Worker file: "entry/src/main/ets/workers/worker.ets"
const workerInstance = new worker.ThreadWorker('entry/ets/workers/worker.ets', {name: "WorkerThread"});

```

## dispatchEvent

```TypeScript
dispatchEvent(event: Event): boolean
```

分发定义在Worker线程的事件。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | Event | Yes | 需要分发的事件。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.ThreadWorker("entry/ets/workers/worker.ets");

workerInstance.addEventListener("alert", () => {
  console.info("alert listener callback");
})

let result: Boolean = workerInstance.dispatchEvent({type: "alert", timeStamp: 0}); // timeStamp is not supported yet.

console.info("dispatchEvent result is: ", result);

```

## off(string)

```TypeScript
off(type: string, listener?: WorkerEventListener): void
```

移除宿主线程的Worker实例对象中类型为type的事件监听，该接口与removeEventListener9+接口功能一致。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 需要移除的事件类型。 |
| listener | WorkerEventListener | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |
| 10200005 | The called API is not supported in the worker thread. |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.ThreadWorker("entry/ets/workers/worker.ets");

const handler1 = () => console.info("Handler 1");
const handler2 = () => console.info("Handler 2");

// Register two listeners.
workerInstance.on("alert", handler1);
workerInstance.on("alert", handler2);

// First trigger: Both listeners are executed.
workerInstance.dispatchEvent({type: "alert", timeStamp: 0}); // timeStamp is not supported yet.

// Remove the handler1 listener.
workerInstance.off("alert", handler1);

// Second trigger: Only handler2 is executed.
workerInstance.dispatchEvent({type: "alert", timeStamp: 0}); // timeStamp is not supported yet.

// Remove all listeners of the alert type.
workerInstance.off("alert");

```

## on(string)

```TypeScript
on(type: string, listener: WorkerEventListener): void
```

向宿主线程的Worker实例对象添加一个事件监听，该接口与addEventListener9+接口功能一致。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 监听的事件类型。 |
| listener | WorkerEventListener | Yes | 当指定类型的事件发生时调用的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |
| 10200005 | The called API is not supported in the worker thread. |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.ThreadWorker("entry/ets/workers/worker.ets");

workerInstance.on("alert", () => {
    console.info("alert listener callback");
})

// Event listeners added using on can be executed multiple times.
workerInstance.dispatchEvent({type: "alert", timeStamp: 0}); // timeStamp is not supported yet.
workerInstance.dispatchEvent({type: "alert", timeStamp: 0}); // timeStamp is not supported yet.

```

## once(string)

```TypeScript
once(type: string, listener: WorkerEventListener): void
```

向宿主线程的Worker实例对象添加一个事件监听，该事件监听只执行一次，执行完后会自动删除。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 监听的事件类型。 |
| listener | WorkerEventListener | Yes | listener 当指定类型的事件发生时调用的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |
| 10200005 | The called API is not supported in the worker thread. |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.ThreadWorker("entry/ets/workers/worker.ets");

workerInstance.once("alert", () => {
  console.info("alert listener callback");
})

workerInstance.dispatchEvent({type: "alert", timeStamp: 0}); // timeStamp is not supported yet.

// Event listeners added using once are automatically removed after being executed once and cannot be executed multiple times.
// workerInstance.dispatchEvent({type: "alert", timeStamp: 0}); // timeStamp is not supported yet.

```

## postMessage

```TypeScript
postMessage(message: Object, transfer: ArrayBuffer[]): void
```

宿主线程通过转移对象所有权的方式向Worker线程发送消息。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | Object | Yes | 发送至Worker线程的数据，该数据对象必须是可序列化对象。  支持的参数类型请参考序列化支持类型。 |
| transfer | ArrayBuffer[] | Yes | 表示可转移的ArrayBuffer实例对象数组，该数组中对象的所有权  会被转移到Worker线程，转移后该对象仅在Worker线程中可用。该数组不可传入null。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |
| 10200006 | An exception occurred during serialization. |

**Example**

```TypeScript
// Worker.ets
import { worker, MessageEvents, ErrorEvent } from '@kit.ArkTS';

// Create an object in the Worker thread for communicating with the host thread.
const workerPort = worker.workerPort;

// The Worker thread receives information from the host thread.
workerPort.onmessage = (e: MessageEvents): void => {
  // data carries the information sent by the host thread.
  let data: ArrayBuffer = e.data;
  // Write data to the received buffer.
  const view = new Int8Array(data).fill(3);
  // The Worker thread sends information to the host thread.
  workerPort.postMessage(view);
}

// Trigger a callback when an error occurs in the Worker thread.
workerPort.onerror = (err: ErrorEvent) => {
  console.error("worker.ets onerror" + err.message);
}


// Index.ets
import { worker, MessageEvents, ErrorEvent } from '@kit.ArkTS';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            // Create a Worker instance in the host thread.
            const workerInstance = new worker.ThreadWorker("entry/ets/workers/Worker.ets");
            // The host thread transfers information to the Worker thread.
            const buffer = new ArrayBuffer(8);
            workerInstance.postMessage(buffer, [buffer]);

            // The ownership of the buffer is transferred to the Worker thread and is unavailable in the host thread.
            // const view = new Int8Array(buffer).fill(3);

            // The host thread receives information from the Worker thread.
            workerInstance.onmessage = (e: MessageEvents): void => {
              // data carries the information sent by the Worker thread.
              let data: Int8Array = e.data;
              console.info("main thread data is  " + data);
              // Terminate the Worker instance.
              workerInstance.terminate();
            }
            // Call onexit().
            workerInstance.onexit = (code) => {
              console.info("main thread terminate");
            }
            // Listen for Worker errors.
            workerInstance.onAllErrors = (err: ErrorEvent) => {
              console.error("main error message " + err.message);
            }
          })
      }
      .width('100%')
      .height('100%')
    }
  }
}

```

## postMessage

```TypeScript
postMessage(message: Object, options?: PostMessageOptions): void
```

宿主线程可以通过转移对象所有权或拷贝数据的方式向Worker线程发送消息。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | Object | Yes | 发送至Worker线程的数据，该数据对象必须是可序列化对象。  支持的参数类型请参考序列化支持类型。 |
| options | PostMessageOptions | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |
| 10200006 | An exception occurred during serialization. |

**Example**

```TypeScript
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.ThreadWorker("entry/ets/workers/worker.ets");

workerInstance.postMessage("hello world");

let buffer = new ArrayBuffer(8);

// When the options parameter is specified, the ownership of the buffer is transferred to the Worker thread and will no longer be accessible from the host thread.
workerInstance.postMessage(buffer, [buffer]);

// When the options parameter is not provided, it defaults to undefined, and the buffer is sent to the Worker thread by copying the data.
workerInstance.postMessage(buffer);

```

## postMessageWithSharedSendable

```TypeScript
postMessageWithSharedSendable(message: Object, transfer?: ArrayBuffer[]): void
```

宿主线程向Worker线程发送消息，消息中的Sendable对象通过引用传递， 非Sendable对象通过拷贝数据的方式传递。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | Object | Yes | 发送至Worker线程的数据，该数据对象必须是可序列化或可共享。  支持的序列化类型请参考序列化支持类型。  支持的共享类型请参考Sendable支持的数据类型。 |
| transfer | ArrayBuffer[] | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |
| 10200006 | An exception occurred during serialization. |

**Example**

```TypeScript
// Index.ets
// Create a SendableObject instance and pass it to the Worker thread through the host thread.

import { worker } from '@kit.ArkTS';
import { SendableObject } from './sendable';

const workerInstance = new worker.ThreadWorker("entry/ets/workers/Worker.ets");
let object: SendableObject = new SendableObject();
workerInstance.postMessageWithSharedSendable(object);

// Use the postMessage API to pass Sendable objects by copying the data.
workerInstance.postMessage(object);


// sendable.ets
// Define SendableObject.

@Sendable
export class SendableObject {
  a:number = 45;
}


// The worker file path is entry/src/main/ets/workers/Worker.ets.
// Worker.ets
// Receive and access the data passed from the host thread to the Worker thread.

import { SendableObject } from '../pages/sendable';
import { worker, ThreadWorkerGlobalScope, MessageEvents, ErrorEvent } from '@kit.ArkTS';

const workerPort: ThreadWorkerGlobalScope = worker.workerPort;

workerPort.onmessage = (e: MessageEvents) => {
  let obj: SendableObject = e.data;
  console.info("sendable obj is: " + obj.a);
}

```

## registerGlobalCallObject

```TypeScript
registerGlobalCallObject(instanceName: string, globalCallObject: Object): void
```

在宿主线程的ThreadWorker实例上注册一个对象，该对象的方法可在Worker线程中通过 callGlobalCallObjectMethod调用。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| instanceName | string | Yes | 注册对象时使用的键，调用时通过该键值找到被注册的对象。 |
| globalCallObject | Object | Yes | 被注册的对象，ThreadWorker实例会持有该对象的强引用。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |

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


// worker.ets
import { worker, MessageEvents } from '@kit.ArkTS';

const workerPort = worker.workerPort;
workerPort.onmessage = (e: MessageEvents): void => {
  try {
    // The method to call does not carry an input parameter.
    let res : string = workerPort.callGlobalCallObjectMethod("myObj", "getMessage", 0) as string;
    console.info("worker:", res) // worker: this is a message from TestObj
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

## removeAllListener

```TypeScript
removeAllListener(): void
```

移除宿主线程中Worker实例对象的所有事件监听。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

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
workerInstance.addEventListener("alert", () => {
    console.info("alert listener callback");
})
workerInstance.removeAllListener();

```

## removeEventListener

```TypeScript
removeEventListener(type: string, callback?: WorkerEventListener): void
```

移除宿主线程的Worker实例对象中类型为type的事件监听，该接口与off9+接口功能一致。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 需要移除的事件类型。 |
| callback | WorkerEventListener | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |

**Example**

```TypeScript
// Index.ets
import { worker } from '@kit.ArkTS';

const workerInstance = new worker.ThreadWorker("entry/ets/workers/worker.ets");

workerInstance.addEventListener("alert", () => {
  console.info("alert listener callback");
})

workerInstance.dispatchEvent({type: "alert", timeStamp: 0}); // timeStamp is not supported yet.

workerInstance.removeEventListener("alert");

```

## terminate

```TypeScript
terminate(): void
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
workerInstance.terminate();

```

## unregisterGlobalCallObject

```TypeScript
unregisterGlobalCallObject(instanceName?: string): void
```

取消在宿主线程ThreadWorker实例上注册的对象，该方法会释放ThreadWorker实例与目标对象之间的强引用。 如果无匹配对象，该方法不会报错。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| instanceName | string | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200004 | The Worker instance is not running. |

**Example**

```TypeScript
// Index.ets
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
workerInstance.registerGlobalCallObject("myObj", registerObj);
// Unregister the object.
workerInstance.unregisterGlobalCallObject("myObj");
// Unregister all objects from the ThreadWorker instance.
//workerInstance.unregisterGlobalCallObject();
workerInstance.postMessage("start worker");

```

## onmessage

```TypeScript
onmessage?: (event: MessageEvents) => void
```

表示宿主线程接收到来自其创建的Worker通过workerPort.postMessage接口发送的消息时 被调用的事件处理程序，处理程序在宿主线程中执行。其中回调函数中event类型为MessageEvents， 表示收到的Worker线程发送的消息数据。

**Type:** (event: MessageEvents) => void

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## onmessageerror

```TypeScript
onmessageerror?: (event: MessageEvents) => void
```

当Worker线程收到一条无法被序列化的消息时被调用的事件处理程序， 该事件处理程序在宿主线程中执行。 其中回调函数中event类型为MessageEvents，表示收到的消息数据。

**Type:** (event: MessageEvents) => void

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## onerror

```TypeScript
onerror?: (err: ErrorEvent) => void
```

用于处理onmessage回调函数中同步代码产生的异常，处理程序在宿主线程中执行。 回调函数的err类型为ErrorEvent，表示收到的异常数据。

**Type:** (err: ErrorEvent) => void

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## onexit

```TypeScript
onexit?: (code: number) => void
```

当Worker线程销毁时被调用的事件处理程序，该处理程序在宿主线程中执行。回调函数的code参数类型为number， 异常退出时code为1，正常退出时code为0。默认值为undefined。

**Type:** (code: number) => void

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## onAllErrors

```TypeScript
onAllErrors?: ErrorCallback
```

表示Worker线程生命周期内发生异常被调用的事件处理程序，处理程序在宿主线程中执行。 onerror接口仅能捕获onmessage回调中同步方法产生的异常， 无法捕获多线程回调和模块化相关异常。 一旦捕获异常，Worker线程会进入销毁流程，无法继续使用。 onAllErrors接口可以捕获Worker线程的onmessage回调、timer回调以及文件执行等流程中产生的全局异常。 捕获异常后，Worker线程仍然存活，可以继续使用。 推荐使用onAllErrors替代onerror。

**Type:** ErrorCallback

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

