# ReadStream

文件可读流，需要先通过fileIo.createReadStream方法来构建一个ReadStream实例。ReadStream继承自数据流基类stream.Readable。 ReadStream读到的数据为解码后的字符串，其编码格式当前仅支持'utf-8'。

**Inheritance:** ReadStreamextends: stream.Readable.

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## close

```TypeScript
close(): void
```

关闭可读流。

**Since:** 12

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
const filePath = pathDir + "/test.txt";
const rs = fileIo.createReadStream(filePath);
rs.close();

```

## constructor

```TypeScript
constructor()
```

构造一个文件可读流.

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

## seek

```TypeScript
seek(offset: number, whence?: WhenceType): number
```

调整可读流偏移指针位置。

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | number | Yes | Relative offset, in bytes. |
| whence | WhenceType | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | Position of the current offset pointer (offset relative to the file header, in bytes). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error |
| 13900020 | Invalid argument |
| 13900026 | Illegal seek |
| 13900042 | Unknown error |

**Example**

```TypeScript
const filePath = pathDir + "/test.txt";
const rs = fileIo.createReadStream(filePath);
const curOff = rs.seek(5, fileIo.WhenceType.SEEK_SET);
console.info(`Succeeded in seeking, current offset is ${curOff}`);
rs.close();

```

## path

```TypeScript
readonly path: string
```

当前可读流对应的文件路径。

**Type:** string

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

## bytesRead

```TypeScript
readonly bytesRead: number
```

可读流已经读取的字节数。

**Type:** number

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

