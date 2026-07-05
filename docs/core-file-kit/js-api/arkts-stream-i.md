# Stream

文件流，在调用Stream的方法前，需要先通过 [fileIo.createStream](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileiocreatestream)方法或者 [fileIo.fdopenStream](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileiofdopenstream)（同步或异步）来构建一个Stream 实例。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## close

```TypeScript
close(): Promise<void>
```

关闭文件流，使用promise异步回调。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900025 | No space left on device |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let filePath = pathDir + "/test.txt";
let stream = fileIo.createStreamSync(filePath, "r+");
stream.close().then(() => {
  console.info(`Succeeded in closing file stream.`);
}).catch((err: BusinessError) => {
  console.error(`Failed to close file stream. Code: ${err.code}, message: ${err.message}`);
});

```

## close

```TypeScript
close(callback: AsyncCallback<void>): void
```

异步关闭文件流，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 异步关闭文件流之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900025 | No space left on device |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let filePath = pathDir + "/test.txt";
let stream = fileIo.createStreamSync(filePath, "r+");
stream.close((err: BusinessError) => {
  if (err) {
    console.error(`Failed to close stream. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in closing stream.`);
  }
});

```

## closeSync

```TypeScript
closeSync(): void
```

同步关闭文件流。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900025 | No space left on device |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

**Example**

```TypeScript
let filePath = pathDir + "/test.txt";
let stream = fileIo.createStreamSync(filePath, "r+");
stream.closeSync();

```

## flush

```TypeScript
flush(): Promise<void>
```

刷新文件流，使用promise异步回调。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。返回表示异步刷新文件流的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900010 | Try again |
| 13900013 | Bad address |
| 13900020 | Invalid argument |
| 13900024 | File too large |
| 13900025 | No space left on device |
| 13900034 | Operation would block |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let filePath = pathDir + "/test.txt";
let stream = fileIo.createStreamSync(filePath, "r+");
stream.flush().then(() => {
  console.info(`Succeeded in flushing.`);
  stream.close();
}).catch((err: BusinessError) => {
  console.error(`Failed to flush. Code: ${err.code}, message: ${err.message}`);
});

```

## flush

```TypeScript
flush(callback: AsyncCallback<void>): void
```

异步刷新文件流，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 异步刷新文件流后的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900010 | Try again |
| 13900013 | Bad address |
| 13900020 | Invalid argument |
| 13900024 | File too large |
| 13900025 | No space left on device |
| 13900034 | Operation would block |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let filePath = pathDir + "/test.txt";
let stream = fileIo.createStreamSync(filePath, "r+");
stream.flush((err: BusinessError) => {
  if (err) {
    console.error(`Failed to flush stream. Code: ${err.code}, message: ${err.message}`);
  } else {
    console.info(`Succeeded in flushing.`);
    stream.close();
  }
});

```

## flushSync

```TypeScript
flushSync(): void
```

同步刷新文件流。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900010 | Try again |
| 13900013 | Bad address |
| 13900020 | Invalid argument |
| 13900024 | File too large |
| 13900025 | No space left on device |
| 13900034 | Operation would block |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

**Example**

```TypeScript
let filePath = pathDir + "/test.txt";
let stream = fileIo.createStreamSync(filePath, "r+");
stream.flushSync();
stream.close();

```

## read

```TypeScript
read(
      buffer: ArrayBuffer,
      options?: ReadOptions
  ): Promise<number>
```

从流文件读取数据，使用promise异步回调。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | 用于读取文件的缓冲区。 |
| options | ReadOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象。返回读取的结果，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900010 | Try again |
| 13900013 | Bad address |
| 13900019 | Is a directory |
| 13900020 | Invalid argument |
| 13900034 | Operation would block |
| 13900042 | Unknown error |
| 13900044 | Network is unreachable [since 12] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { buffer } from '@kit.ArkTS';
import { ReadOptions } from '@kit.CoreFileKit';

let filePath = pathDir + "/test.txt";
let stream = fileIo.createStreamSync(filePath, "r+");
let arrayBuffer = new ArrayBuffer(4096);
let readOption: ReadOptions = {
  offset: 5,
  length: 5
};
stream.read(arrayBuffer, readOption).then((readLen: number) => {
  let buf = buffer.from(arrayBuffer, 0, readLen);
  console.info(`Succeeded in reading data, the content of file is: ${buf.toString()}`);
  stream.close();
}).catch((err: BusinessError) => {
  console.error(`Failed to read data. Code: ${err.code}, message: ${err.message}`);
});

```

## read

```TypeScript
read(buffer: ArrayBuffer, callback: AsyncCallback<number>): void
```

从流文件读取数据，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | 用于读取文件的缓冲区。 |
| callback | AsyncCallback&lt;number> | Yes | 异步读取完成后的回调。返回读取的结果，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900010 | Try again |
| 13900013 | Bad address |
| 13900019 | Is a directory |
| 13900020 | Invalid argument |
| 13900034 | Operation would block |
| 13900042 | Unknown error |

## read

```TypeScript
read(
      buffer: ArrayBuffer,
      options: ReadOptions,
      callback: AsyncCallback<number>
  ): void
```

从流文件读取数据，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | 用于读取文件的缓冲区。 |
| options | ReadOptions | Yes |  |
| callback | AsyncCallback&lt;number> | Yes | 异步读取完成后的回调。返回读取的结果，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900010 | Try again |
| 13900013 | Bad address |
| 13900019 | Is a directory |
| 13900020 | Invalid argument |
| 13900034 | Operation would block |
| 13900042 | Unknown error |

## readSync

```TypeScript
readSync(
      buffer: ArrayBuffer,
      options?: ReadOptions
  ): number
```

以同步方法从流文件读取数据。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | 用于读取文件的缓冲区。 |
| options | ReadOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 实际读取的长度，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900010 | Try again |
| 13900013 | Bad address |
| 13900019 | Is a directory |
| 13900020 | Invalid argument |
| 13900034 | Operation would block |
| 13900042 | Unknown error |
| 13900044 | Network is unreachable [since 12] |

**Example**

```TypeScript
import { ReadOptions } from '@kit.CoreFileKit';

let filePath = pathDir + "/test.txt";
let stream = fileIo.createStreamSync(filePath, "r+");
let readOption: ReadOptions = {
  offset: 5,
  length: 5
};
let buf = new ArrayBuffer(4096);
let num = stream.readSync(buf, readOption);
stream.close();

```

## write

```TypeScript
write(
      buffer: ArrayBuffer | string,
      options?: WriteOptions
  ): Promise<number>
```

将数据写入流文件，使用promise异步回调。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | 待写入文件的数据，可来自缓冲区或字符串。 |
| options | WriteOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | Promise对象。返回实际写入的长度，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900010 | Try again |
| 13900013 | Bad address |
| 13900020 | Invalid argument |
| 13900024 | File too large |
| 13900025 | No space left on device |
| 13900034 | Operation would block |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { WriteOptions } from '@kit.CoreFileKit';

let filePath = pathDir + "/test.txt";
let stream = fileIo.createStreamSync(filePath, "r+");
let writeOption: WriteOptions = {
  offset: 5,
  length: 5,
  encoding: 'utf-8'
};
stream.write("hello, world", writeOption).then((number: number) => {
  console.info(`Succeeded in writing, size is: ${number}`);
  stream.close();
}).catch((err: BusinessError) => {
  console.error(`Failed to write. Code: ${err.code}, message: ${err.message}`);
});

```

## write

```TypeScript
write(buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void
```

将数据写入流文件，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | 待写入文件的数据，可来自缓冲区或字符串。 |
| callback | AsyncCallback&lt;number> | Yes | 异步写入完成后执行的回调函数。返回实际写入的数据长度，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900010 | Try again |
| 13900013 | Bad address |
| 13900020 | Invalid argument |
| 13900024 | File too large |
| 13900025 | No space left on device |
| 13900034 | Operation would block |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

## write

```TypeScript
write(
      buffer: ArrayBuffer | string,
      options: WriteOptions,
      callback: AsyncCallback<number>
  ): void
```

将数据写入流文件，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | 待写入文件的数据，可来自缓冲区或字符串。 |
| options | WriteOptions | Yes |  |
| callback | AsyncCallback&lt;number> | Yes | 异步写入完成后执行的回调函数。返回实际写入的数据长度，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900010 | Try again |
| 13900013 | Bad address |
| 13900020 | Invalid argument |
| 13900024 | File too large |
| 13900025 | No space left on device |
| 13900034 | Operation would block |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

## writeSync

```TypeScript
writeSync(
      buffer: ArrayBuffer | string,
      options?: WriteOptions
  ): number
```

以同步方法将数据写入流文件。

**Since:** 9

**Atomic service API:** From API version 20 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | 待写入文件的数据，可来自缓冲区或字符串。 |
| options | WriteOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 实际写入的长度，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900010 | Try again |
| 13900013 | Bad address |
| 13900020 | Invalid argument |
| 13900024 | File too large |
| 13900025 | No space left on device |
| 13900034 | Operation would block |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

**Example**

```TypeScript
import { WriteOptions } from '@kit.CoreFileKit';

let filePath = pathDir + "/test.txt";
let stream = fileIo.createStreamSync(filePath,"r+");
let writeOption: WriteOptions = {
  offset: 5,
  length: 5,
  encoding: 'utf-8'
};
let num = stream.writeSync("hello, world", writeOption);
stream.close();

```

