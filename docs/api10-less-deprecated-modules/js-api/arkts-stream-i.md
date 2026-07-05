# Stream

文件流，在调用Stream的方法前，需要先通过createStream()方法（同步或异步）来构建一个Stream实例。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:Stream

**System capability:** SystemCapability.FileManagement.File.FileIO

## close

```TypeScript
close(): Promise<void>
```

关闭文件流，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:Stream.close

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。返回表示异步关闭文件流的结果。 |

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

异步关闭文件流，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:Stream.close

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes |  |

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

同步关闭文件流。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:Stream.closeSync

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

刷新文件流，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:Stream.flush

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。返回表示异步刷新文件流的结果。 |

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

异步刷新文件流，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:Stream.flush

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes |  |

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

同步刷新文件流。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:Stream.flushSync

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

从流文件读取数据，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:Stream.read

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | 用于读取文件的缓冲区。 |
| options | {
      position?: number;
      offset?: number;
      length?: number;
    } | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ReadOut> |  |

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

**Substitute:** @ohos.file.fs:Stream.read

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | buffer. |
| callback | AsyncCallback&lt;ReadOut> | Yes |  |

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

从流文件读取数据，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:Stream.read

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | 用于读取文件的缓冲区。 |
| options | {
      position?: number;
      offset?: number;
      length?: number;
    } | Yes |  |
| callback | AsyncCallback&lt;ReadOut> | Yes |  |

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

以同步方法从流文件读取数据。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:Stream.readSync

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | 用于读取文件的缓冲区。 |
| options | {
      position?: number;
      offset?: number;
      length?: number;
    } | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 实际读取的长度，单位为Byte。 |

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

将数据写入流文件，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:Stream.write

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | 待写入文件的数据，可来自缓冲区或字符串。 |
| options | {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    } | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> |  |

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

**Substitute:** @ohos.file.fs:Stream.write

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | Data to write. It can be a string or data from a buffer. |
| callback | AsyncCallback&lt;number> | Yes |  |

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

将数据写入流文件，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:Stream.write

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | 待写入文件的数据，可来自缓冲区或字符串。 |
| options | {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    } | Yes |  |
| callback | AsyncCallback&lt;number> | Yes |  |

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

以同步方法将数据写入流文件。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:Stream.writeSync

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | Yes | 待写入文件的数据，可来自缓冲区或字符串。 |
| options | {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    } | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 实际写入的长度，单位为Byte。 |

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

