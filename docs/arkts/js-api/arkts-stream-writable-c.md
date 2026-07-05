# Writable

可写入数据的流。可写流允许将数据写入目标，目标可以是文件、HTTP响应、标准输出、另一个流等。

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

创建**Writable**对象的构造函数。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Example**

```TypeScript
let writableStream = new stream.Writable();

```

## cork

```TypeScript
cork(): boolean
```

强制将后续写入的数据缓存起来。调用此API可优化连续写入操作的性能。调用此API后，**writableCorked**的值加1。建议与[uncork()]stream.Writable.uncork配合使用。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 操作结果。true表示成功；false表示失败。 |

**Example**

```TypeScript
class TestWritable extends stream.Writable {
  constructor() {
    super();
  }

  doWrite(chunk: string | Uint8Array, encoding: string, callback: Function) {
    callback();
  }
}

let writableStream = new TestWritable();
let result = writableStream.cork();
console.info("Writable cork result", result); // Writable cork result true

```

## doInitialize

```TypeScript
doInitialize(callback: Function): void
```

需要由开发者实现此API，但不要直接调用。此API在可写流初始化期间自动调用。使用异步回调返回结果。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Function | Yes | 回调函数。 |

**Example**

```TypeScript
class MyWritable extends stream.Writable {
  doInitialize(callback: Function) {
    super.doInitialize(callback);
    console.info("Writable doInitialize"); // Writable doInitialize
  }

  doWrite(chunk: string | Uint8Array, encoding: string, callback: Function) {
    super.doWrite(chunk, encoding, callback);
  }
}

new MyWritable();

```

## doWrite

```TypeScript
doWrite(chunk: string | Uint8Array, encoding: string, callback: Function): void
```

数据写入API。需要由开发者实现此API，但不要直接调用。此API在写入数据时自动调用。使用异步回调返回结果。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| chunk | string \| Uint8Array | Yes | 待写入的数据。 |
| encoding | string | Yes | 编码格式。目前支持'utf8'、'gb18030'、'gbk'和'gb2312'。 |
| callback | Function | Yes | 回调函数。 |

**Example**

```TypeScript
class TestWritable extends stream.Writable {
  constructor() {
    super();
  }

  doWrite(chunk: string | Uint8Array, encoding: string, callback: Function) {
    console.info("Writable chunk is", chunk); // Writable chunk is data
    callback();
  }
}

let writableStream = new TestWritable();
writableStream.write('data', 'utf8');

```

## doWritev

```TypeScript
doWritev(chunks: string[] | Uint8Array[], callback: Function): void
```

批量数据写入API。需要由开发者实现此API，但不要直接调用。此API在写入数据时自动调用。使用异步回调返回结果。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| chunks | string[] \| Uint8Array[] | Yes | 批量写入的数据数组。 |
| callback | Function | Yes | 回调函数。 |

**Example**

```TypeScript
class TestWritable extends stream.Writable {
  constructor() {
    super();
  }

  doWritev(chunks: string[] | Uint8Array[], callback: Function) {
    console.info("Writable chunk", chunks);
    callback();
  }
  // Writable chunk data1
  // Writable chunk data2
}

let writableStream = new TestWritable();
writableStream.write('data1', 'utf8');
writableStream.write('data2', 'utf8');
writableStream.uncork();
writableStream.end();

```

## end

```TypeScript
end(chunk?: string | Uint8Array, encoding?: string, callback?: Function): Writable
```

结束可写流的写入过程。如果**writableCorked**的值大于0，则将其置为**0**，并输出缓冲区中的剩余数据。如果传入**chunk**参数，则将其视为最后一个数据块，根据当前执行上下文使用**write**或**doWrite** API写入。如果使用**doWrite**写入，**encoding**参数的有效性检查由**doWrite**决定。如果单独使用**end**（不使用**write**）且传入**chunk**参数，则数据通过**doWrite**写入。使用异步回调返回结果。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| chunk | string \| Uint8Array | No |  |
| encoding | string | No |  |
| callback | Function | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Writable | 当前Writable对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200035 | The doWrite method has not been implemented. |

**Example**

```TypeScript
class TestWritable extends stream.Writable {
  constructor() {
    super();
  }

  doWrite(chunk: string | Uint8Array, encoding: string, callback: Function) {
    console.info("Writable chunk is", chunk);
    callback();
  }
  // Writable chunk is test
  // Writable chunk is finish
}

let writableStream = new TestWritable();
writableStream.write('test', 'utf8');
writableStream.end('finish', 'utf8', () => {
  console.info("Writable is end"); // Writable is end
});

```

## off

```TypeScript
off(event: string, callback?: Callback<emitter.EventData>): void
```

取消注册用于监听可写流上不同事件的事件处理回调。

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
class TestWritable extends stream.Writable {
  constructor() {
    super();
 }

  doWrite(chunk: string | Uint8Array, encoding: string, callback: Function) {
    callback();
  }
}

let writableStream = new TestWritable();
let testListenerCalled = false;
let testListener = () => {
  testListenerCalled = true;
};
writableStream.on('finish', testListener);
writableStream.off('finish');
writableStream.write('test');
writableStream.end();
setTimeout(() => {
  console.info("Writable off test", testListenerCalled.toString()); // Writable off test false
}, 0);

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

注册事件处理回调，以监听可写流上的不同事件。

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
class TestWritable extends stream.Writable {
  constructor() {
    super();
  }

  doWrite(chunk: string | Uint8Array, encoding: string, callback: Function) {
    callback(new Error());
  }
}

let callbackCalled = false;
let writable = new TestWritable();
writable.on('error', () => {
  console.info("Writable event test", callbackCalled.toString()); // Writable event test false
});
writable.write('hello', 'utf8', () => {
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

## setDefaultEncoding

```TypeScript
setDefaultEncoding(encoding?: string): boolean
```

设置可写流的默认编码格式。

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
| boolean | 操作结果。true表示成功；false表示失败。 |

**Example**

```TypeScript
class TestWritable extends stream.Writable {
  constructor() {
    super();
  }

  doWrite(chunk: string | Uint8Array, encoding: string, callback: Function) {
    callback();
  }
}

let writableStream = new TestWritable();
let result = writableStream.setDefaultEncoding('utf8');
console.info("Writable is result", result); // Writable is result true

```

## uncork

```TypeScript
uncork(): boolean
```

释放cork状态，刷新缓冲区中的数据并写入目标位置。调用此API后，**writableCorked**的值减1。如果值变为**0**，则流不再处于cork状态；否则，流仍处于cork状态。建议与[cork()]stream.Writable.cork配合使用。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 操作结果。true表示成功；false表示失败。 |

**Example**

```TypeScript
class TestWritable extends stream.Writable {
  constructor() {
    super();
  }

  doWrite(chunk: string | Uint8Array, encoding: string, callback: Function) {
    callback();
  }
}

let writableStream = new TestWritable();
writableStream.cork();
writableStream.write('data1', 'utf8');
writableStream.write('data2', 'utf8');
writableStream.uncork();
writableStream.end();
writableStream.on('finish', () => {
  console.info("all Data is End"); // all Data is End
});

```

## write

```TypeScript
write(chunk?: string | Uint8Array, encoding?: string, callback?: Function): boolean
```

向流的缓冲区写入数据。使用异步回调返回结果。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| chunk | string \| Uint8Array | No |  |
| encoding | string | No |  |
| callback | Function | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 表示可写流缓冲区中是否还有空间。true表示缓冲区中还有空间；false表示缓冲区已满，不建议继续写入数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 10200035 | The doWrite method has not been implemented. |
| 10200036 | The stream has been ended. |
| 10200037 | The callback is invoked multiple times consecutively. |

**Example**

```TypeScript
class TestWritable extends stream.Writable {
  constructor() {
    super();
  }

  doWrite(chunk: string | Uint8Array, encoding: string, callback: Function) {
    console.info("Writable chunk is", chunk); // Writable chunk is test
    callback();
  }
}

let writableStream = new TestWritable();
writableStream.write('test', 'utf8');

```

## writableCorked

```TypeScript
get writableCorked(): int
```

为完全释放流，需要调用writable.uncork()的次数。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## writableHighWatermark

```TypeScript
get writableHighWatermark(): int
```

highWatermark的值。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## writableFinished

```TypeScript
get writableFinished(): boolean
```

是否已调用Writable.end并刷新了所有缓冲区。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## writableEnded

```TypeScript
get writableEnded(): boolean
```

是否已调用Writable.end。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## writableObjectMode

```TypeScript
get writableObjectMode(): boolean
```

返回布尔值，表示是否处于ObjectMode。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## writableLength

```TypeScript
get writableLength(): int
```

可刷新的数据大小，单位为字节或对象。

**Type:** int

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## writable

```TypeScript
get writable(): boolean
```

如果调用writable.write()是安全的，返回true，即表示流未被销毁、未出错或未结束。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

