# AtomicFile

AtomicFile是一个用于对文件进行原子读写操作的类。 在写操作时，通过写入临时文件，并在写入成功后将其重命名到原始文件位置来确保写入文件的完整性；而在写入失败时删除临时文件，不修改原始文件内容。 使用者可以自行调用finishWrite或failWrite来完成文件内容的写入或回滚。

**Since:** 15

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## constructor

```TypeScript
constructor(path: string)
```

对于给定路径的文件创建一个AtomicFile类。

**Since:** 15

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 文件的沙箱路径。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 |  |

## delete

```TypeScript
delete(): void
```

删除AtomicFile类，会删除原始文件和临时文件。

**Since:** 15

**System capability:** SystemCapability.FileManagement.File.FileIO

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 |  |
| 13900002 |  |
| 13900012 |  |
| 13900027 |  |
| 13900042 |  |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { util } from '@kit.ArkTS';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let pathDir = context.filesDir;

try {
  let file = new fileIo.AtomicFile(`${pathDir}/read.txt`);
  let writeStream = file.startWrite();
  writeStream.write("hello, world", "utf-8", ()=> {
    file.finishWrite();
    setTimeout(()=>{
      let data = file.readFully();
      let decoder = util.TextDecoder.create('utf-8');
      let str = decoder.decodeToString(new Uint8Array(data));
      file.delete();
      console.info(`Succeeded in delete atomicfile.`);
    },1000);
  })
} catch (err) {
  console.error(`Failed to AtomicFile. Code: ${err.code}, message: ${err.message}`);
}

```

## failWrite

```TypeScript
failWrite(): void
```

文件写入失败后调用，将执行文件回滚操作。

**Since:** 15

**System capability:** SystemCapability.FileManagement.File.FileIO

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900042 |  |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let pathDir = context.filesDir;

let file = new fileIo.AtomicFile(`${pathDir}/write.txt`);
try {
  let writeStream = file.startWrite();
  writeStream.write("hello, world", "utf-8", ()=> {
    console.info(`Succeeded in writing atomicFile.`);
  })
} catch (err) {
  file.failWrite();
  console.error(`Failed to AtomicFile. Code: ${err.code}, message: ${err.message}`);
}

```

## finishWrite

```TypeScript
finishWrite(): void
```

在完成对startWrite返回流的写入操作时调用，表示文件写入成功。

**Since:** 15

**System capability:** SystemCapability.FileManagement.File.FileIO

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900042 |  |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let pathDir = context.filesDir;

try {
  let file = new fileIo.AtomicFile(`${pathDir}/write.txt`);
  let writeStream = file.startWrite();
  writeStream.write("hello, world", "utf-8", ()=> {
    file.finishWrite();
  })
} catch (err) {
  console.error(`Failed to AtomicFile. Code: ${err.code}, message: ${err.message}`);
}

```

## getBaseFile

```TypeScript
getBaseFile(): File
```

通过AtomicFile对象获取文件对象。 文件描述符fd需要由用户调用close方法关闭。

**Since:** 15

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| File | 打开的File对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900002 |  |
| 13900005 |  |
| 13900012 |  |
| 13900042 |  |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let pathDir = context.filesDir;

try {
  let atomicFile = new fileIo.AtomicFile(`${pathDir}/write.txt`);
  let writeStream = atomicFile.startWrite();
  writeStream.write("hello, world", "utf-8", ()=> {
    atomicFile.finishWrite();
    let file = atomicFile.getBaseFile();
    console.info(`Succeeded in getting base file. fd: ${file.fd}, path: ${file.path}, name:${file.name}`);
  })
} catch (err) {
  console.error(`Failed to get baseFile. Code: ${err.code}, message: ${err.message}`);
}

```

## openRead

```TypeScript
openRead(): ReadStream
```

创建一个读文件流。

**Since:** 15

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| ReadStream | 文件可读流。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 |  |
| 13900002 |  |
| 13900012 |  |
| 13900042 |  |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let pathDir = context.filesDir;

try {
  let file = new fileIo.AtomicFile(`${pathDir}/read.txt`);
  let writeStream = file.startWrite();
  writeStream.write("hello, world", "utf-8", ()=> {
    file.finishWrite();
    setTimeout(()=>{
      let readStream = file.openRead();
      readStream.on('readable', () => {
        const data = readStream.read();
        if (!data) {
          console.error(`Failed to read atomicfile, data is null.`);
          return;
        }
        console.info(`Succeeded in reading atomicfile, data is: ${data}`);
      });
    },1000);
  })
} catch (err) {
  console.error(`Failed to AtomicFile. Code: ${err.code}, message: ${err.message}`);
}

```

## readFully

```TypeScript
readFully(): ArrayBuffer
```

读取文件全部内容。

**Since:** 15

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| ArrayBuffer | 文件的全部内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900005 |  |
| 13900042 |  |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';
import { util, buffer } from '@kit.ArkTS';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let pathDir = context.filesDir;

try {
  let file = new fileIo.AtomicFile(`${pathDir}/read.txt`);
  let writeStream = file.startWrite();
  writeStream.write("hello, world", "utf-8", ()=> {
    file.finishWrite();
    setTimeout(()=>{
      let data = file.readFully();
      let decoder = util.TextDecoder.create('utf-8');
      let str = decoder.decodeToString(new Uint8Array(data));
      console.info(`Succeeded in reading atomicfile fully, str is: ${str}`);
    },1000);
  })
} catch (err) {
  console.error(`Failed to AtomicFile. Code: ${err.code}, message: ${err.message}`);
}

```

## startWrite

```TypeScript
startWrite(): WriteStream
```

对文件开始新的写入操作。将返回一个WriteStream，用于在其中写入新的文件数据。 当文件不存在时新建文件。 在写入文件完成后，写入成功需要调用finishWrite()，写入失败需要调用failWrite()。

**Since:** 15

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| WriteStream | 文件可写流。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 |  |
| 13900002 |  |
| 13900012 |  |
| 13900027 |  |
| 13900042 |  |

**Example**

```TypeScript
import { common } from '@kit.AbilityKit';

// Obtain the context from the component and ensure that the return value of this.getUIContext().getHostContext() is UIAbilityContext.
let context = this.getUIContext().getHostContext() as common.UIAbilityContext;
let pathDir = context.filesDir;

try {
  let file = new fileIo.AtomicFile(`${pathDir}/write.txt`);
  let writeStream = file.startWrite();
  writeStream.write("hello, world", "utf-8", ()=> {
    file.finishWrite();
    console.info(`Succeeded in writing atomicfile finished.`);
  })
} catch (err) {
  console.error(`Failed to AtomicFile. Code: ${err.code}, message: ${err.message}`);
}

```

