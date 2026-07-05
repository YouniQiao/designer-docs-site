# Stream

文件流，在调用Stream的方法前，需要先通过createStream()方法（同步或异步）来构建一个Stream实例。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.file.fs:Stream

**系统能力：** SystemCapability.FileManagement.File.FileIO

## close

```TypeScript
close(): Promise<void>
```

关闭文件流，使用Promise异步回调。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:Stream.close

**系统能力：** SystemCapability.FileManagement.File.FileIO

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。返回表示异步关闭文件流的结果。 |

**示例：**

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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:Stream.close

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 |  |

**示例：**

```TypeScript
import { BusinessError } from '@ohos.base';
let filePath = pathDir + "/test.txt";
let ss = fileio.createStreamSync(filePath, "r+");
ss.close((err: BusinessError) => {
  // do something
});

```

## closeSync

```TypeScript
closeSync(): void
```

同步关闭文件流。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.file.fs:Stream.closeSync

**系统能力：** SystemCapability.FileManagement.File.FileIO

**示例：**

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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:Stream.flush

**系统能力：** SystemCapability.FileManagement.File.FileIO

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。返回表示异步刷新文件流的结果。 |

**示例：**

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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:Stream.flush

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 |  |

**示例：**

```TypeScript
import { BusinessError } from '@ohos.base';
let filePath = pathDir + "/test.txt";
let ss = fileio.createStreamSync(filePath, "r+");
ss.flush((err: BusinessError) => {
  // do something
});

```

## flushSync

```TypeScript
flushSync(): void
```

同步刷新文件流。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:Stream.flushSync

**系统能力：** SystemCapability.FileManagement.File.FileIO

**示例：**

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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:Stream.read

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | 是 | 用于读取文件的缓冲区。 |
| options | {
      position?: number;
      offset?: number;
      length?: number;
    } | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ReadOut> |  |

**示例：**

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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:Stream.read

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | 是 | buffer. |
| callback | AsyncCallback&lt;ReadOut> | 是 |  |

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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:Stream.read

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | 是 | 用于读取文件的缓冲区。 |
| options | {
      position?: number;
      offset?: number;
      length?: number;
    } | 是 |  |
| callback | AsyncCallback&lt;ReadOut> | 是 |  |

**示例：**

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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:Stream.readSync

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | 是 | 用于读取文件的缓冲区。 |
| options | {
      position?: number;
      offset?: number;
      length?: number;
    } | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 实际读取的长度，单位为Byte。 |

**示例：**

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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:Stream.write

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | 是 | 待写入文件的数据，可来自缓冲区或字符串。 |
| options | {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    } | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number> |  |

**示例：**

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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:Stream.write

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | 是 | Data to write. It can be a string or data from a buffer. |
| callback | AsyncCallback&lt;number> | 是 |  |

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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:Stream.write

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | 是 | 待写入文件的数据，可来自缓冲区或字符串。 |
| options | {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    } | 是 |  |
| callback | AsyncCallback&lt;number> | 是 |  |

**示例：**

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
    // do something
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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:Stream.writeSync

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buffer | ArrayBuffer \| string | 是 | 待写入文件的数据，可来自缓冲区或字符串。 |
| options | {
      offset?: number;
      length?: number;
      position?: number;
      encoding?: string;
    } | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 实际写入的长度，单位为Byte。 |

**示例：**

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

