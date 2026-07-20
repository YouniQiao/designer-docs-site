# Stream

Provides a stream for file operations. Before calling any API of the **Stream** class, use **createStream()** to create a **Stream** instance synchronously or asynchronously.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:Stream](arkts-corefile-file-fs-stream-i.md)

<!--Device-unnamed-declare interface Stream--><!--Device-unnamed-declare interface Stream-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

## close

```TypeScript
close(): Promise<void>
```

Closes the file stream. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [close](arkts-corefile-file-fs-stream-i.md#close-1)

<!--Device-Stream-close(): Promise<void>--><!--Device-Stream-close(): Promise<void>-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns the file stream closed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
let filePath = pathDir + "/test.txt";
let ss = fileio.createStreamSync(filePath, "r+");
ss.close().then(() => {
  console.info("close fileStream succeed");
}).catch((err: BusinessError) => {
  console.error("close fileStream  failed with error:" + err);
});

```

## close

```TypeScript
close(callback: AsyncCallback<void>): void
```

Closes the file stream. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [close](arkts-corefile-file-fs-stream-i.md#close-1)

<!--Device-Stream-close(callback: AsyncCallback<void>): void--><!--Device-Stream-close(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback invoked when the file stream is closed asynchronously. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
let filePath = pathDir + "/test.txt";
let ss = fileio.createStreamSync(filePath, "r+");
ss.close((err: BusinessError) => {
  // Do something.
});

```

## closeSync

```TypeScript
closeSync(): void
```

Closes the file stream. This API returns the result synchronously.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [closeSync](arkts-corefile-file-fs-stream-i.md#closesync-1)

<!--Device-Stream-closeSync(): void--><!--Device-Stream-closeSync(): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Example**

```TypeScript
let filePath = pathDir + "/test.txt";
let ss = fileio.createStreamSync(filePath, "r+");
ss.closeSync();

```

## flush

```TypeScript
flush(): Promise<void>
```

Flushes the file stream. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [flush](arkts-corefile-file-fs-stream-i.md#flush-1)

<!--Device-Stream-flush(): Promise<void>--><!--Device-Stream-flush(): Promise<void>-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns the file stream flushed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
let filePath = pathDir + "/test.txt";
let ss = fileio.createStreamSync(filePath, "r+");
ss.flush().then(() => {
  console.info("flush succeed");
}).catch((err: BusinessError) => {
  console.error("flush failed with error:" + err);
});

```

## flush

```TypeScript
flush(callback: AsyncCallback<void>): void
```

Flushes the file stream. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [flush](arkts-corefile-file-fs-stream-i.md#flush-1)

<!--Device-Stream-flush(callback: AsyncCallback<void>): void--><!--Device-Stream-flush(callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback invoked when the file stream is asynchronously flushed. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
let filePath = pathDir + "/test.txt";
let ss = fileio.createStreamSync(filePath, "r+");
ss.flush((err: BusinessError) => {
  // Do something.
});

```

## flushSync

```TypeScript
flushSync(): void
```

Flushes the file stream. This API returns the result synchronously.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [flushSync](arkts-corefile-file-fs-stream-i.md#flushsync-1)

<!--Device-Stream-flushSync(): void--><!--Device-Stream-flushSync(): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Example**

```TypeScript
let filePath = pathDir + "/test.txt";
let ss = fileio.createStreamSync(filePath, "r+");
ss.flushSync();

```

## read

```TypeScript
read(
    buffer: ArrayBuffer,
    options?: {
      position?: number;
      offset?: number;
      length?: number;
    }
  ): Promise<ReadOut>
```

Reads data from a stream file. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [read](arkts-corefile-file-fs-stream-i.md#read-1)

<!--Device-Stream-read(
    buffer: ArrayBuffer,
    options?: {
      position?: number;
      offset?: number;
      length?: number;
    }
  ): Promise<ReadOut>--><!--Device-Stream-read(
    buffer: ArrayBuffer,
    options?: {
      position?: number;
      offset?: number;
      length?: number;
    }
  ): Promise<ReadOut>-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | [ArrayBuffer](../../apis-arkts/arkts-apis/arkts-arkts-collections-arraybuffer-c.md) | Yes | Buffer used to store the file read. |
| options | {       position?: number;       offset?: number;       length?: number;     } | No | The options are as follows:<br>- **offset** (number): position to store the data read in the buffer relative to the start address of the buffer, in bytes. This parameter is optional. The default value is **0**.<br>- **length** (number): length of the data to read. This parameter is optional. The default value is the buffer length minus the offset, in bytes.<br>- **position** (number): position of the data to read in the file. This parameter is optional. By default, data is read from the current position, in bytes.<br>Constraints: offset + length &lt;= Buffer size |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<ReadOut> | Promise that returns the data read. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
import buffer from '@ohos.buffer';
let filePath = pathDir + "/test.txt";
let ss = fileio.createStreamSync(filePath, "r+");
let arrayBuffer = new ArrayBuffer(4096);
class Option {
  offset: number = 0;
  length: number = 4096;
  position: number = 0;
}
let option = new Option();
option.offset = 1;
option.length = 5;
option.position = 5;
ss.read(arrayBuffer, option).then((readResult: fileio.ReadOut) => {
  console.info("read data succeed");
  let buf = buffer.from(arrayBuffer, 0, readResult.bytesRead);
  console.info(`The content of file: ${buf.toString()}`);
}).catch((err: BusinessError) => {
  console.error("read data failed with error:" + err);
});

```

## read

```TypeScript
read(buffer: ArrayBuffer, callback: AsyncCallback<ReadOut>): void
```

read.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [read](arkts-corefile-file-fs-stream-i.md#read-1)

<!--Device-Stream-read(buffer: ArrayBuffer, callback: AsyncCallback<ReadOut>): void--><!--Device-Stream-read(buffer: ArrayBuffer, callback: AsyncCallback<ReadOut>): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | [ArrayBuffer](../../apis-arkts/arkts-apis/arkts-arkts-collections-arraybuffer-c.md) | Yes | buffer. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<ReadOut> | Yes | callback. |

## read

```TypeScript
read(
    buffer: ArrayBuffer,
    options: {
      position?: number;
      offset?: number;
      length?: number;
    },
    callback: AsyncCallback<ReadOut>
  ): void
```

Reads data from a stream file. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [read](arkts-corefile-file-fs-stream-i.md#read-1)

<!--Device-Stream-read(
    buffer: ArrayBuffer,
    options: {
      position?: number;
      offset?: number;
      length?: number;
    },
    callback: AsyncCallback<ReadOut>
  ): void--><!--Device-Stream-read(
    buffer: ArrayBuffer,
    options: {
      position?: number;
      offset?: number;
      length?: number;
    },
    callback: AsyncCallback<ReadOut>
  ): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | [ArrayBuffer](../../apis-arkts/arkts-apis/arkts-arkts-collections-arraybuffer-c.md) | Yes | Buffer used to store the file read. |
| options | {       position?: number;       offset?: number;       length?: number;     } | Yes | The options are as follows:<br>- **offset** (number): position to store the data read in the buffer relative to the start address of the buffer, in bytes. This parameter is optional. The default value is **0**.<br>- **length** (number): length of the data to read, in bytes. This parameter is optional. The default value is the buffer length minus the offset.<br>- **position** (number): position of the data to read in the file, in bytes. This parameter is optional. By default, data is read from the current position.<br>Constraints: offset + length &lt;= Buffer size |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<ReadOut> | Yes | Callback invoked when data is read asynchronously from the stream file. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
import buffer from '@ohos.buffer';
let filePath = pathDir + "/test.txt";
let ss = fileio.createStreamSync(filePath, "r+");
let arrayBuffer = new ArrayBuffer(4096);
class Option {
  offset: number = 0;
  length: number = 4096;
  position: number = 0;
}
let option = new Option();
option.offset = 1;
option.length = 5;
option.position = 5;
ss.read(arrayBuffer, option, (err: BusinessError, readResult: fileio.ReadOut) => {
  if (readResult.bytesRead) {
    console.info("read data succeed");
    let buf = buffer.from(arrayBuffer, 0, readResult.bytesRead);
    console.info(`The content of file: ${buf.toString()}`);
  }
});

```

## readSync

```TypeScript
readSync(
    buffer: ArrayBuffer,
    options?: {
      position?: number;
      offset?: number;
      length?: number;
    }
  ): number
```

Reads data from a stream file. This API returns the result synchronously.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readSync](arkts-corefile-file-fs-stream-i.md#readsync-1)

<!--Device-Stream-readSync(
    buffer: ArrayBuffer,
    options?: {
      position?: number;
      offset?: number;
      length?: number;
    }
  ): number--><!--Device-Stream-readSync(
    buffer: ArrayBuffer,
    options?: {
      position?: number;
      offset?: number;
      length?: number;
    }
  ): number-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | [ArrayBuffer](../../apis-arkts/arkts-apis/arkts-arkts-collections-arraybuffer-c.md) | Yes | Buffer used to store the file read. |
| options | {       position?: number;       offset?: number;       length?: number;     } | No | The options are as follows:<br>- **offset** (number): position to store the data read in the buffer relative to the start address of the buffer, in bytes. This parameter is optional. The default value is **0**.<br>- **length** (number): length of the data to read. This parameter is optional. The default value is the buffer length minus the offset, in bytes.<br>- **position** (number): position of the data to read in the file, in bytes. This parameter is optional. By default, data is read from the current position.<br>Constraints: offset + length &lt;= Buffer size |

**Return value:**

| Type | Description |
| --- | --- |
| number | Length of the data read, in bytes. |

**Example**

```TypeScript
let filePath = pathDir + "/test.txt";
let ss = fileio.createStreamSync(filePath, "r+");
class Option {
  offset: number = 0;
  length: number = 4096;
  position: number = 0;
}
let option = new Option();
option.offset = 1;
option.length = 5;
option.position = 5;
let buf = new ArrayBuffer(4096)
let num = ss.readSync(buf, option);

```

## write

```TypeScript
write(
    buffer: ArrayBuffer | string,
    options?: {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    }
  ): Promise<number>
```

Writes data to a stream file. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [write](arkts-corefile-file-fs-stream-i.md#write-1)

<!--Device-Stream-write(
    buffer: ArrayBuffer | string,
    options?: {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    }
  ): Promise<number>--><!--Device-Stream-write(
    buffer: ArrayBuffer | string,
    options?: {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    }
  ): Promise<number>-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | Data to write. It can be a string or data from a buffer. |
| options | {       offset?: number;       length?: number;       position?: number;       encoding?: string;     } | No | The options are as follows:<br>- **offset** (number): offset of the write position relative to the start address of the data, in bytes. This parameter is optional. The default value is **0**.<br  >- **length** (number): length of the data to write, in bytes. This parameter is optional. The default value is the buffer length minus the offset.<br>- **position** (number): start position to write the data into the file,in bytes. This parameter is optional. By default, data is written from the current position.<br>- **encoding**(string): format of the data to be encoded when the data is a string. The default value is **'utf-8'**, which is the only value supported.<br>Constraints: offset + length &lt;= Buffer size |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | Promise that returns the length of the data written, in bytes. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
let filePath = pathDir + "/test.txt";
let ss = fileio.createStreamSync(filePath, "r+");
class Option {
  offset: number = 0;
  length: number = 4096;
  position: number = 0;
  encoding: string = 'utf-8';
}
let option = new Option();
option.offset = 1;
option.length = 5;
option.position = 5;
ss.write("hello, world", option).then((number: number) => {
  console.info("write succeed and size is:" + number);
}).catch((err: BusinessError) => {
  console.error("write failed with error:" + err);
});

```

## write

```TypeScript
write(buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void
```

Writes data to a stream file. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [write](arkts-corefile-file-fs-stream-i.md#write-1)

<!--Device-Stream-write(buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void--><!--Device-Stream-write(buffer: ArrayBuffer | string, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | Data to write. It can be a string or data from a buffer. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Callback invoked when the data is written asynchronously, which is used to return the length of the data written, in bytes. |

## write

```TypeScript
write(
    buffer: ArrayBuffer | string,
    options: {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    },
    callback: AsyncCallback<number>
  ): void
```

Writes data to a stream file. This API uses an asynchronous callback to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [write](arkts-corefile-file-fs-stream-i.md#write-1)

<!--Device-Stream-write(
    buffer: ArrayBuffer | string,
    options: {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    },
    callback: AsyncCallback<number>
  ): void--><!--Device-Stream-write(
    buffer: ArrayBuffer | string,
    options: {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    },
    callback: AsyncCallback<number>
  ): void-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | Data to write. It can be a string or data from a buffer. |
| options | {       offset?: number;       length?: number;       position?: number;       encoding?: string;     } | Yes | The options are as follows:<br>- **offset** (number): offset of the write position relative to the start address of the data, in bytes. This parameter is optional. The default value is **0**.<br  >- **length** (number): length of the data to write, in bytes. This parameter is optional. The default value is the buffer length minus the offset.<br>- **position** (number): start position to write the data into the file,in bytes. This parameter is optional. By default, data is written from the current position.<br>- **encoding**(string): format of the data to be encoded when the data is a string. The default value is **'utf-8'**, which is the only value supported.<br>Constraints: offset + length &lt;= Buffer size |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number> | Yes | Callback invoked when the data is written asynchronously, which is used to return the length of the data written, in bytes. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
let filePath = pathDir + "/test.txt";
let ss = fileio.createStreamSync(filePath, "r+");
class Option {
  offset: number = 0;
  length: number = 4096;
  position: number = 0;
  encoding: string = 'utf-8';
}
let option = new Option();
option.offset = 1;
option.length = 5;
option.position = 5;
ss.write("hello, world", option, (err: BusinessError, bytesWritten: number) => {
  if (bytesWritten) {
    // Do something.
    console.info("write succeed and size is:" + bytesWritten);
  }
});

```

## writeSync

```TypeScript
writeSync(
    buffer: ArrayBuffer | string,
    options?: {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    }
  ): number
```

Writes data to a stream file. This API returns the result synchronously.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeSync](arkts-corefile-file-fs-stream-i.md#writesync-1)

<!--Device-Stream-writeSync(
    buffer: ArrayBuffer | string,
    options?: {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    }
  ): number--><!--Device-Stream-writeSync(
    buffer: ArrayBuffer | string,
    options?: {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    }
  ): number-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | Data to write. It can be a string or data from a buffer. |
| options | {       offset?: number;       length?: number;       position?: number;       encoding?: string;     } | No | The options are as follows:<br>- **offset** (number): offset of the write position relative to the start address of the data, in bytes. This parameter is optional. The default value is **0**.<br  >- **length** (number): length of the data to write. This parameter is optional. The default value is the buffer length minus the offset.<br>- **position** (number): start position to write the data into the file, in bytes. This parameter is optional. By default, data is written from the current position.<br>- **encoding** (string): format of the data to be encoded when the data is a string. The default value is **'utf-8'**, which is the only value supported.<br>Constraints: offset + length &lt;= Buffer size |

**Return value:**

| Type | Description |
| --- | --- |
| number | Length of the data written in the file, in bytes. |

**Example**

```TypeScript
let filePath = pathDir + "/test.txt";
let ss = fileio.createStreamSync(filePath,"r+");
class Option {
  offset: number = 0;
  length: number = 4096;
  position: number = 0;
  encoding: string = 'utf-8';
}
let option = new Option();
option.offset = 1;
option.length = 5;
option.position = 5;
let num = ss.writeSync("hello, world", option);

```

