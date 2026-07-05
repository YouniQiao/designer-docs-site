# RandomAccessFile

随机读写文件流。在调用RandomAccessFile的方法前，需要先通过createRandomAccessFile()方法（同步或异步）来构建一个RandomAccessFile实例。

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## close

```TypeScript
close(): void
```

以同步方式关闭RandomAccessFile对象。

**Since:** 10

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
let randomAccessFile = fileIo.createRandomAccessFileSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
randomAccessFile.close();

```

## getReadStream

```TypeScript
getReadStream(): ReadStream
```

获取当前 RandomAccessFile 的一个 ReadStream 实例。

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| ReadStream | 文件可读流。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

**Example**

```TypeScript
const filePath = pathDir + "/test.txt";
const randomAccessFile = fileIo.createRandomAccessFileSync(filePath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
const rs = randomAccessFile.getReadStream();
rs.close();
randomAccessFile.close();

```

## getWriteStream

```TypeScript
getWriteStream(): WriteStream
```

获取当前 RandomAccessFile 的一个 WriteStream 实例。

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| WriteStream | 文件可写流。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error |
| 13900008 | Bad file descriptor |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

**Example**

```TypeScript
const filePath = pathDir + "/test.txt";
const randomAccessFile = fileIo.createRandomAccessFileSync(filePath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
const ws = randomAccessFile.getWriteStream();
ws.close();
randomAccessFile.close();

```

## read

```TypeScript
read(
    buffer: ArrayBuffer,
    options?: ReadOptions
  ): Promise<number>
```

从文件读取数据，使用promise异步回调。

**Since:** 10

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
import { ReadOptions } from '@kit.CoreFileKit';

let filePath = pathDir + "/test.txt";
let file = fileIo.openSync(filePath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
let randomAccessFile = fileIo.createRandomAccessFileSync(file);
let bufferLength: number = 4096;
let readOption: ReadOptions = {
  offset: 1,
  length: 5
};
let arrayBuffer = new ArrayBuffer(bufferLength);
randomAccessFile.read(arrayBuffer, readOption).then((readLength: number) => {
  console.info(`Succeeded in reading, read length: ${readLength}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to read. Code: ${err.code}, message: ${err.message}`);
}).finally(() => {
  randomAccessFile.close();
  fileIo.closeSync(file);
});

```

## read

```TypeScript
read(buffer: ArrayBuffer, callback: AsyncCallback<number>): void
```

从文件读取数据，使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | 用于读取文件的缓冲区。 |
| callback | AsyncCallback&lt;number> | Yes | 异步读取完成后的回调。返回实际读取的数据长度，单位为Byte。 |

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

从文件读取数据，使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | 用于读取文件的缓冲区。 |
| options | ReadOptions | Yes |  |
| callback | AsyncCallback&lt;number> | Yes | 异步读取完成后的回调。返回实际读取的数据长度，单位为Byte。 |

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

以同步方法从文件读取数据。

**Since:** 10

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
let filePath = pathDir + "/test.txt";
let file = fileIo.openSync(filePath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
let randomAccessFile = fileIo.createRandomAccessFileSync(file);
let length: number = 4096;
let arrayBuffer = new ArrayBuffer(length);
let readLength = randomAccessFile.readSync(arrayBuffer);
randomAccessFile.close();
fileIo.closeSync(file);

```

## setFilePointer

```TypeScript
setFilePointer(filePointer: number): void
```

设置文件偏移指针。

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filePointer | number | Yes | RandomAccessFile对象的偏移指针，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900004 | Interrupted system call |
| 13900005 | I/O error |
| 13900008 | Bad file descriptor |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

**Example**

```TypeScript
let filePath = pathDir + "/test.txt";
let randomAccessFile = fileIo.createRandomAccessFileSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
randomAccessFile.setFilePointer(1);
randomAccessFile.close();

```

## write

```TypeScript
write(
    buffer: ArrayBuffer | string,
    options?: WriteOptions
  ): Promise<number>
```

将数据写入文件，使用promise异步回调。

**Since:** 10

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
let file = fileIo.openSync(filePath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
let randomAccessFile = fileIo.createRandomAccessFileSync(file);
let bufferLength: number = 4096;
let writeOption: WriteOptions = {
  offset: 1,
  length: 5,
  encoding: 'utf-8'
};
let arrayBuffer = new ArrayBuffer(bufferLength);
randomAccessFile.write(arrayBuffer, writeOption).then((bytesWritten: number) => {
  console.info(`Succeeded in writing, bytes written: ${bytesWritten}`);
}).catch((err: BusinessError) => {
  console.error(`Failed to write. Code: ${err.code}, message: ${err.message}`);
}).finally(() => {
  randomAccessFile.close();
  fileIo.closeSync(file);
});


```

## write

```TypeScript
write(buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void
```

将数据写入文件，使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | 待写入文件的数据，可来自缓冲区或字符串。 |
| callback | AsyncCallback&lt;number> | Yes | 异步写入完成后执行的回调函数。返回实际写入数据长度，单位为Byte。 |

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

将数据写入文件，使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | 待写入文件的数据，可来自缓冲区或字符串。 |
| options | WriteOptions | Yes |  |
| callback | AsyncCallback&lt;number> | Yes | 异步写入完成后执行的回调函数。返回实际写入数据长度，单位为Byte。 |

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

以同步方法将数据写入文件。

**Since:** 10

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
let randomAccessFile = fileIo.createRandomAccessFileSync(filePath, fileIo.OpenMode.CREATE | fileIo.OpenMode.READ_WRITE);
let writeOption: WriteOptions = {
  offset: 5,
  length: 5,
  encoding: 'utf-8'
};
let bytesWritten = randomAccessFile.writeSync("hello, world", writeOption);
randomAccessFile.close();

```

## filePointer

```TypeScript
readonly filePointer: number
```

RandomAccessFile对象的偏移指针，单位为Byte。

**Type:** number

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

## fd

```TypeScript
readonly fd: number
```

打开的文件描述符。

**Type:** number

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

