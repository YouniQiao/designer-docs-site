# WriteStream

文件可写流，需要先通过 [fileIo.createWriteStream](docroot://reference/apis-core-file-kit/js-apis-file-fs.md#fileiocreatewritestream12)方法来构建一 个WriteStream实例。WriteStream继承自数据流基类[stream.Writable](../../apis-arkts/arkts-apis/arkts-stream-writable-c.md#Writable)。

**Inheritance:** WriteStreamextends: stream.Writable.

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

关闭可写流。

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
const ws = fileIo.createWriteStream(filePath);
ws.close();

```

## constructor

```TypeScript
constructor()
```

The WriteStream constructor.

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

## seek

```TypeScript
seek(offset: number, whence?: WhenceType): number
```

调整可写流的偏移指针位置。

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | number | Yes | 相对偏移位置，单位为Byte。 |
| whence | WhenceType | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 当前可写流偏移指针位置（相对于文件头的偏移量，单位为Byte）。 |

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
const ws = fileIo.createWriteStream(filePath);
const curOff = ws.seek(5, fileIo.WhenceType.SEEK_SET);
console.info(`Succeeded in seeking, current offset is ${curOff}`);
ws.close();

```

## bytesWritten

```TypeScript
readonly bytesWritten: number
```

可写流已经写入的字节数。

**Type:** number

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

## path

```TypeScript
readonly path: string
```

当前可写流对应的文件路径。

**Type:** string

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

