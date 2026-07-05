# Readable

可从中读取数据的流。可读流用于从源（如文件或网络套接字）读取数据。

**Since:** 12

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { stream } from '@kit.ArkTS';
```

## constructor

```TypeScript
constructor()
```

创建**Readable**对象的构造函数。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
let readableStream = new stream.Readable();

```

## constructor

```TypeScript
constructor(options: ReadableOptions)
```

创建**Readable**对象的构造函数。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ReadableOptions | Yes | Readable构造函数中的选项。 |

**Example**

```TypeScript
let option : stream.ReadableOptions = {
  encoding : 'utf-8'
};
let readableStream = new stream.Readable(option);

```

## doInitialize

```TypeScript
doInitialize(callback: Function): void
```

需要由开发者实现此API。在可读流首次调用[on]stream.Writable#on(event: string, callback: Callback<emitter.EventData>)时调用此API。使用异步回调返回结果。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Function | Yes | 回调函数。 |

**Example**

```TypeScript
class MyReadable extends stream.Readable {
  doInitialize(callback: Function) {
    super.doInitialize(callback);
    console.info("Readable doInitialize"); // Readable doInitialize
}

  doRead(size: number) {
  }
}

let myReadable = new MyReadable();
myReadable.on('data', () => {
});

```

## doRead

```TypeScript
doRead(size: int): void
```

数据读取API，需在子类中实现。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | int | Yes | 待读取的字节数。取值范围：0 &lt;= size &lt;= Number.MAX_VALUE |

**Example**

```TypeScript
class TestReadable extends stream.Readable {
  constructor() {
    super();
  }

  doRead(size: number) {
    console.info("doRead called"); // doRead called
  }
}

let readable = new TestReadable();
readable.on('data', () => {
});

```

## isPaused

```TypeScript
isPaused(): boolean
```

检查可读流是否已暂停。流在调用[pause()]stream.Readable.pause后暂停，在调用[resume()]stream.Readable.resume后从暂停状态恢复。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 检查结果。流已暂停返回true，否则返回false。 |

**Example**

```TypeScript
class TestReadable extends stream.Readable {
  constructor() {
    super();
  }

  doRead(size: number) {
  }
}

let readableStream = new TestReadable();
console.info("Readable isPaused", readableStream.isPaused()); // Readable isPaused false
readableStream.pause();
console.info("Readable isPaused", readableStream.isPaused()); // Readable isPaused true

```

## off

```TypeScript
off(event: string, callback?: Callback<emitter.EventData>): void
```

取消注册用于监听可读流上不同事件的事件处理回调。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | 事件类型。支持以下事件： |
| callback | Callback&lt;emitter.EventData> | No | 回调函数。 |

**Example**

```TypeScript
class TestReadable extends stream.Readable {
  constructor() {
    super();
  }

  doRead(size: number) {
  }
}

let readable = new TestReadable();

function read() {
  console.info("read() called");
}

readable.setEncoding('utf8');
readable.on('readable', read);
readable.off('readable');
readable.push('test');
// After off is used to unregister the listening of the readable stream events, the read function is not called and "read() called" is not printed.

```

## off

```TypeScript
off(event: string, callback?: Function): void
```

取消事件消息。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | 注册的事件。 |
| callback | Function | No |  |

## on

```TypeScript
on(event: string, callback: Callback<emitter.EventData>): void
```

注册事件处理回调，以监听可读流上的不同事件。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | 事件类型。支持以下事件： |
| callback | Callback&lt;emitter.EventData> | Yes | 用于返回事件数据的回调函数。 |

**Example**

```TypeScript
class TestReadable extends stream.Readable {
  constructor() {
    super();
  }

  doRead(size: number) {
    throw new Error('Simulated error');
  }
}

let readable = new TestReadable();
readable.push('test');
readable.on('error', () => {
  console.info("error event called"); // error event called
});

```

## on

```TypeScript
on(event: string, callback: Function): void
```

注册事件消息。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | string | Yes | 注册的事件。 |
| callback | Function | Yes | 事件回调。 |

## pause

```TypeScript
pause(): Readable
```

暂停流动模式下的可读流。可以使用**isPaused**检查流是否已暂停。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| Readable | 当前Readable对象。 |

**Example**

```TypeScript
class TestReadable extends stream.Readable {
  constructor() {
    super();
  }

  doRead(size: number) {
  }
}

let readableStream = new TestReadable();
readableStream.pause();
console.info("Readable test pause", readableStream.isPaused()); // Readable test pause true

```

## pipe

```TypeScript
pipe(destination: Writable, options?: Object): Writable
```

将一个可写流附加到可读流上，以实现数据的自动传输。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| destination | Writable | Yes | 接收数据的可写流。 |
| options | Object | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Writable | 当前Writable对象。 |

**Example**

```TypeScript
class TestReadable extends stream.Readable {
  constructor() {
    super();
  }

  doRead(size: number) {
    this.push('test');
    this.push(null);
  }
}

class TestWritable extends stream.Writable {
  constructor() {
    super();
  }

  doWrite(chunk: string | Uint8Array, encoding: string, callback: Function) {
    console.info("Readable test pipe", chunk); // Readable test pipe test
    callback();
  }
}

let readable = new TestReadable();
let writable = new TestWritable();
readable.pipe(writable);

```

## push

```TypeScript
push(chunk: Uint8Array | string | undefined | null, encoding?: string): boolean
```

将数据推入可读流的缓冲区。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| chunk | Uint8Array \| string \| undefined \| null | Yes | 待读取的数据。 从API version 22起有兼容性变更。在API version 21及之前版本，类型为 `Uint8Array \| string \| null`。 [since 23] |
| encoding | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 表示可读流缓冲区中是否还有空间。true表示缓冲区中还有空间；false表示缓冲区已满。如果传入null，则始终返回false，表示没有可推送的数据块。 |

**Example**

```TypeScript
class TestReadable extends stream.Readable {
  constructor() {
    super();
  }

  doRead(size: number) {
  }
}

let readable = new TestReadable();
let testData = 'Hello world';
readable.push(testData);
console.info("Readable push test", readable.readableLength); // Readable push test 11

```

## read

```TypeScript
read(size?: number): string | null
```

从可读流的缓冲区中读取数据，并返回读取的数据。如果没有读取到数据，则返回**null**。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | No | 待读取的字节数。默认值为undefined。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 从可读流中读取的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200038 | The doRead method has not been implemented. |

**Example**

```TypeScript
class TestReadable extends stream.Readable {
  constructor() {
    super();
  }

  doRead(size: number) {
  }
}

let readableStream = new TestReadable();
readableStream.push('test');
readableStream.pause();
let dataChunk = readableStream.read();
console.info('Readable data is', dataChunk); // Readable data is test

```

## read

```TypeScript
read(size?: int): buffer.Buffer | string | null
```

从缓冲区中读取指定大小的数据。如果可用缓冲区足够，则返回指定大小的结果；否则，如果Readable已结束，则返回所有剩余的缓冲区。

**Since:** 23

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| buffer.Buffer | 如果没有可读取的数据，则返回null。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200038 | The doRead method has not been implemented. |

## resume

```TypeScript
resume(): Readable
```

恢复已显式暂停的可读流。可以使用**isPaused**检查流是否已暂停。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| Readable | 当前Readable对象。 |

**Example**

```TypeScript
class TestReadable extends stream.Readable {
  constructor() {
    super();
  }

  doRead(size: number) {
  }
}

let readableStream = new TestReadable();
readableStream.resume();
console.info("Readable test resume", !readableStream.isPaused()); // After a successful switching, the log "Readable test resume true" is displayed.

```

## setEncoding

```TypeScript
setEncoding(encoding?: string): boolean
```

设置可读流的编码格式。 如果缓冲区中包含数据，则不允许设置编码格式，并返回**false**。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encoding | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 操作结果。设置成功返回true，否则返回false。 |

**Example**

```TypeScript
class TestReadable extends stream.Readable {
  constructor() {
    super();
  }

  doRead(size: number) {
  }
}

let readableStream = new TestReadable();
let result = readableStream.setEncoding('utf8');
console.info("Readable result", result); // Readable result true

```

## unpipe

```TypeScript
unpipe(destination?: Writable): Readable
```

将之前附加到可读流的可写流分离。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| destination | Writable | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Readable | 当前Readable对象。 |

**Example**

```TypeScript
class TestReadable extends stream.Readable {
  constructor() {
    super();
  }

  doRead(size: number) {
    this.push('test');
    this.push(null);
  }
}

class TestWritable extends stream.Writable {
  constructor() {
    super();
  }

  doWrite(chunk: string | Uint8Array, encoding: string, callback: Function) {
    callback();
  }
}

let readable = new TestReadable();
let writable = new TestWritable();
readable.pipe(writable);
readable.unpipe(writable);
readable.on('data', () => {
  console.info("Readable test unpipe data event triggered");
});
// After successful detaching, the data event is not triggered and "Readable test unpipe data event triggered" is not printed.

```

## readable

```TypeScript
get readable(): boolean
```

如果调用readable.read()是安全的，返回true，即表示流未被销毁、未发出'error'或'end'。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## readableHighWatermark

```TypeScript
get readableHighWatermark(): int
```

返回创建此Readable时传入的highWatermark的值。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## readableEnded

```TypeScript
get readableEnded(): boolean
```

是否已生成所有数据。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## readableFlowing

```TypeScript
get readableFlowing(): boolean | null
```

此属性反映可读流的当前状态 null/true/false。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## readableObjectMode

```TypeScript
get readableObjectMode(): boolean
```

返回布尔值，表示是否处于ObjectMode。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## readableEncoding

```TypeScript
get readableEncoding(): string | null
```

获取给定Readable流的encoding属性的getter。encoding属性可通过readable.setEncoding()方法设置。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## readableLength

```TypeScript
get readableLength(): int
```

可读取的数据大小，单位为字节或对象。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

