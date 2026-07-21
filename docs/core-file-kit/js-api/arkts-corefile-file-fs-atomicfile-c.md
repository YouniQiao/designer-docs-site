# AtomicFile

AtomicFile is a class used to perform atomic read and write operations on files.

A temporary file is written and renamed to the original file location, which ensures file integrity. If the write operation fails, the temporary file is deleted without modifying the original file content.

You can call **finishWrite()** or **failWrite()** to write or roll back file content.

**Since:** 15

<!--Device-unnamed-export class AtomicFile--><!--Device-unnamed-export class AtomicFile-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options, ReaderIteratorResult, Watcher, ReadTextOptions, WatchEventListener, TaskSignal, WriteOptions, ListFileExtOptions, DfsListeners, Filter, ReadOptions, ListFileOptions, WatchEvent, FileFilter, ConflictFiles } from '@kit.CoreFileKit';
```

<a id="constructor"></a>
## constructor

```TypeScript
constructor(path: string)
```

Creates an **AtomicFile** class for a file in a specified path.

**Since:** 15

<!--Device-AtomicFile-constructor(path: string)--><!--Device-AtomicFile-constructor(path: string)-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | Application sandbox path of the file. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) |  |

<a id="delete"></a>
## delete

```TypeScript
delete(): void
```

Deletes the **AtomicFile** class, including the original files and temporary files.

**Since:** 15

<!--Device-AtomicFile-delete(): void--><!--Device-AtomicFile-delete(): void-End-->

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

<a id="failwrite"></a>
## failWrite

```TypeScript
failWrite(): void
```

Rolls back the file after the file fails to be written.

**Since:** 15

<!--Device-AtomicFile-failWrite(): void--><!--Device-AtomicFile-failWrite(): void-End-->

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

<a id="finishwrite"></a>
## finishWrite

```TypeScript
finishWrite(): void
```

Finishes writing file data when the write operation is complete.

**Since:** 15

<!--Device-AtomicFile-finishWrite(): void--><!--Device-AtomicFile-finishWrite(): void-End-->

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

<a id="getbasefile"></a>
## getBaseFile

```TypeScript
getBaseFile(): File
```

Obtains the file object through the **AtomicFile** object.

The FD needs to be closed by calling **close()**.

**Since:** 15

<!--Device-AtomicFile-getBaseFile(): File--><!--Device-AtomicFile-getBaseFile(): File-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| [File](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-request-file-i.md) | File object opened. |

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

<a id="openread"></a>
## openRead

```TypeScript
openRead(): ReadStream
```

Creates a **ReadStream** instance.

**Since:** 15

<!--Device-AtomicFile-openRead(): ReadStream--><!--Device-AtomicFile-openRead(): ReadStream-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| [ReadStream](arkts-corefile-file-fs-readstream-c.md) | **ReadStream** instance obtained. |

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

<a id="readfully"></a>
## readFully

```TypeScript
readFully(): ArrayBuffer
```

Reads all content of a file.

**Since:** 15

<!--Device-AtomicFile-readFully(): ArrayBuffer--><!--Device-AtomicFile-readFully(): ArrayBuffer-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| ArrayBuffer | Full content of a file. |

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

<a id="startwrite"></a>
## startWrite

```TypeScript
startWrite(): WriteStream
```

Starts to write new file data in the **WriteStream** object returned.

If the file does not exist, create a file.

Call **finishWrite()** if the write operation is successful; call **failWrite()** if the write operation fails.

**Since:** 15

<!--Device-AtomicFile-startWrite(): WriteStream--><!--Device-AtomicFile-startWrite(): WriteStream-End-->

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| [WriteStream](arkts-corefile-file-fs-writestream-c.md) | **WriteStream** instance obtained. |

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

