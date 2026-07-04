# Stream

Provides a stream for file operations. Before calling any API of the **Stream** class, use **createStream()** to create a **Stream** instance synchronously or asynchronously.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:Stream](arkts-corefile-stream-i.md#stream)

**System capability:** SystemCapability.FileManagement.File.FileIO

## close

```TypeScript
close(): Promise<void>
```

Closes the file stream. This API uses a promise to return the result.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [close](arkts-corefile-stream-i.md#close-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns the file stream closed. |

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

**Substitutes:** [close](arkts-corefile-stream-i.md#close-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback invoked when the file stream is closed asynchronously. |

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

**Substitutes:** [closeSync](arkts-corefile-stream-i.md#closesync-1)

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

**Substitutes:** [flush](arkts-corefile-stream-i.md#flush-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns the file stream flushed. |

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

**Substitutes:** [flush](arkts-corefile-stream-i.md#flush-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback invoked when the file stream is asynchronously flushed. |

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

**Substitutes:** [flushSync](arkts-corefile-stream-i.md#flushsync-1)

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

**Substitutes:** [read](arkts-corefile-stream-i.md#read-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | Buffer used to store the file read. |
| options | {      position?: number;      offset?: number;      length?: number;    } | No | The options are as follows:<br>- **offset** (number): position to store the data readin the buffer relative to the start address of the buffer, in bytes. This parameter is optional. The defaultvalue is **0**.<br>- **length** (number): length of the data to read. This parameter is optional. The defaultvalue is the buffer length minus the offset, in bytes.<br>- **position** (number): position of the data to readin the file. This parameter is optional. By default, data is read from the current position, in bytes.<br>Constraints: offset + length &lt;= Buffer size |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ReadOut&gt; | Promise that returns the data read. |

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

**Substitutes:** [read](arkts-corefile-stream-i.md#read-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | buffer. |
| callback | AsyncCallback&lt;ReadOut&gt; | Yes | callback. |

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

**Substitutes:** [read](arkts-corefile-stream-i.md#read-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | Buffer used to store the file read. |
| options | {      position?: number;      offset?: number;      length?: number;    } | Yes | The options are as follows:<br>- **offset** (number): position to store the data readin the buffer relative to the start address of the buffer, in bytes. This parameter is optional. The defaultvalue is **0**.<br>- **length** (number): length of the data to read, in bytes. This parameter is optional. Thedefault value is the buffer length minus the offset.<br>- **position** (number): position of the data to readin the file, in bytes. This parameter is optional. By default, data is read from the current position.<br>Constraints: offset + length &lt;= Buffer size |
| callback | AsyncCallback&lt;ReadOut&gt; | Yes | Callback invoked when data is read asynchronously from the streamfile. |

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

**Substitutes:** [readSync](arkts-corefile-stream-i.md#readsync-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | Buffer used to store the file read. |
| options | {      position?: number;      offset?: number;      length?: number;    } | No | The options are as follows:<br>- **offset** (number): position to store the data readin the buffer relative to the start address of the buffer, in bytes. This parameter is optional. The defaultvalue is **0**.<br>- **length** (number): length of the data to read. This parameter is optional. The defaultvalue is the buffer length minus the offset, in bytes.<br>- **position** (number): position of the data to readin the file, in bytes. This parameter is optional. By default, data is read from the current position.<br>Constraints: offset + length &lt;= Buffer size |

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

**Substitutes:** [write](arkts-corefile-stream-i.md#write-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | Data to write. It can be a string or data from a buffer. |
| options | {      offset?: number;      length?: number;      position?: number;      encoding?: string;    } | No | The options are as follows:<br>- **offset** (number): offset of the write positionrelative to the start address of the data, in bytes. This parameter is optional. The default value is **0**.<br>- **length** (number): length of the data to write, in bytes. This parameter is optional. The default value isthe buffer length minus the offset.<br>- **position** (number): start position to write the data into the file,in bytes. This parameter is optional. By default, data is written from the current position.<br>- **encoding**(string): format of the data to be encoded when the data is a string. The default value is **'utf-8'**, whichis the only value supported.<br>Constraints: offset + length &lt;= Buffer size |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Promise that returns the length of the data written, in bytes. |

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

**Substitutes:** [write](arkts-corefile-stream-i.md#write-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | Data to write. It can be a string or data from a buffer. |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback invoked when the data is written asynchronously, which isused to return the length of the data written, in bytes. |

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

**Substitutes:** [write](arkts-corefile-stream-i.md#write-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | Data to write. It can be a string or data from a buffer. |
| options | {      offset?: number;      length?: number;      position?: number;      encoding?: string;    } | Yes | The options are as follows:<br>- **offset** (number): offset of the write positionrelative to the start address of the data, in bytes. This parameter is optional. The default value is **0**.<br>- **length** (number): length of the data to write, in bytes. This parameter is optional. The default value isthe buffer length minus the offset.<br>- **position** (number): start position to write the data into the file,in bytes. This parameter is optional. By default, data is written from the current position.<br>- **encoding**(string): format of the data to be encoded when the data is a string. The default value is **'utf-8'**, whichis the only value supported.<br>Constraints: offset + length &lt;= Buffer size |
| callback | AsyncCallback&lt;number&gt; | Yes | Callback invoked when the data is written asynchronously, which isused to return the length of the data written, in bytes. |

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

**Substitutes:** [writeSync](arkts-corefile-stream-i.md#writesync-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | Data to write. It can be a string or data from a buffer. |
| options | {      offset?: number;      length?: number;      position?: number;      encoding?: string;    } | No | The options are as follows:<br>- **offset** (number): offset of the write positionrelative to the start address of the data, in bytes. This parameter is optional. The default value is **0**.<br>- **length** (number): length of the data to write. This parameter is optional. The default value is thebuffer length minus the offset.<br>- **position** (number): start position to write the data into the file, inbytes. This parameter is optional. By default, data is written from the current position.<br>- **encoding** (string): format of the data to be encoded when the data is a string. The default value is **'utf-8'**, which isthe only value supported.<br>Constraints: offset + length &lt;= Buffer size |

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

