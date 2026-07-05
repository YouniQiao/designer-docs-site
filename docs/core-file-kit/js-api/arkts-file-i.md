# File

由open接口打开的File对象。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## getParent

```TypeScript
getParent(): string
```

获取File对象对应文件父目录。

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回父目录路径。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900005 | I/O error |
| 13900042 | Unknown error |
| 14300002 | Invalid URI |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let filePath = pathDir + "/test.txt";
let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
console.info(`Succeeded in getting parent path, the parent path is: ${file.getParent(}`);
fileIo.closeSync(file);

```

## lock

```TypeScript
lock(exclusive?: boolean): Promise<void>
```

对文件阻塞式施加共享锁或独占锁，使用promise异步回调。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| exclusive | boolean | No | 是否施加独占锁，默认false。true：施加独占锁；false：不施加独占锁。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900004 | Interrupted system call |
| 13900008 | Bad file descriptor |
| 13900020 | Invalid argument |
| 13900034 | Operation would block |
| 13900042 | Unknown error |
| 13900043 | No record locks available |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let filePath = pathDir + "/test.txt";
let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
file.lock(true).then(() => {
  console.info(`Succeeded in locking file.`);
}).catch((err: BusinessError) => {
  console.error(`Failed to lock file. Code: ${err.code}, message: ${err.message}`);
}).finally(() => {
  fileIo.closeSync(file);
});

```

## lock

```TypeScript
lock(callback: AsyncCallback<void>): void
```

对文件阻塞式施加共享锁或独占锁，使Callback异步回调。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 异步文件上锁之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900004 | Interrupted system call |
| 13900008 | Bad file descriptor |
| 13900020 | Invalid argument |
| 13900034 | Operation would block |
| 13900042 | Unknown error |
| 13900043 | No record locks available |

## lock

```TypeScript
lock(exclusive: boolean, callback: AsyncCallback<void>): void
```

对文件阻塞式施加共享锁或独占锁，使Callback异步回调。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| exclusive | boolean | Yes | 是否施加独占锁，默认false。true：施加独占锁；false：不施加独占锁。 |
| callback | AsyncCallback&lt;void> | Yes | 异步文件上锁之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900004 | Interrupted system call |
| 13900008 | Bad file descriptor |
| 13900020 | Invalid argument |
| 13900034 | Operation would block |
| 13900042 | Unknown error |
| 13900043 | No record locks available |

## tryLock

```TypeScript
tryLock(exclusive?: boolean): void
```

文件非阻塞式施加共享锁或独占锁。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| exclusive | boolean | No | 是否施加独占锁，默认false。true：施加独占锁；false：不施加独占锁。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900004 | Interrupted system call |
| 13900008 | Bad file descriptor |
| 13900020 | Invalid argument |
| 13900034 | Operation would block |
| 13900042 | Unknown error |
| 13900043 | No record locks available |

**Example**

```TypeScript
let filePath = pathDir + "/test.txt";
let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
file.tryLock(true);
console.info(`Succeeded in locking file.`);
fileIo.closeSync(file);

```

## unlock

```TypeScript
unlock(): void
```

以同步方式解锁文件。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900004 | Interrupted system call |
| 13900008 | Bad file descriptor |
| 13900020 | Invalid argument |
| 13900034 | Operation would block |
| 13900042 | Unknown error |
| 13900043 | No record locks available |

**Example**

```TypeScript
let filePath = pathDir + "/test.txt";
let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
file.tryLock(true);
file.unlock();
console.info(`Succeeded in unlocking file.`);
fileIo.closeSync(file);

```

## path

```TypeScript
readonly path: string
```

文件路径。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

## name

```TypeScript
readonly name: string
```

文件名。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.FileManagement.File.FileIO

## fd

```TypeScript
readonly fd: number
```

打开的文件描述符。

**Type:** number

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

