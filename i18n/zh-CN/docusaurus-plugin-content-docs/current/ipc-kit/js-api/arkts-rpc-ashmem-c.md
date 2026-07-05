# Ashmem

Provides methods related to anonymous shared memory objects, including creating, closing, mapping, and unmapping an **Ashmem** object, reading data from and writing data to an **Ashmem** object, obtaining the **Ashmem** size, and setting **Ashmem** protection. The shared memory applies only to cross-process communication within the local device.

**起始版本：** 8

**系统能力：** SystemCapability.Communication.IPC.Core

## 导入模块

```TypeScript
import { rpc } from '@kit.IPCKit';
```

## closeAshmem

```TypeScript
closeAshmem(): void
```

Closes this **Ashmem** object. > **NOTE** > > Before closing the **Ashmem** object, you need to remove the address mapping.

**起始版本：** 8

**系统能力：** SystemCapability.Communication.IPC.Core

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  ashmem.closeAshmem();
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error is ' + error);
}

```

## create

```TypeScript
static create(name: string, size: int): Ashmem
```

Creates an **Ashmem** object with the specified name and size. This API is a static method.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Name of the Ashmem object to create. The length of the Ashmem name cannot be 0. |
| size | int | 是 | Size of the Ashmem object, in bytes. The value must be greater than 0. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Ashmem | Returns the Ashmem object if it is created successfully; returns null otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match;  3.The Ashmem name passed is empty;  4.The Ashmem size passed is less than or equal to 0. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  hilog.info(0x0000, 'testTag', 'create ashmem: ' + ashmem);
  let size = ashmem.getAshmemSize();
  hilog.info(0x0000, 'testTag',  'size is ' + size);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

## create

```TypeScript
static create(ashmem: Ashmem): Ashmem
```

Creates an **Ashmem** object by copying the file descriptor of an existing **Ashmem** object. The two **Ashmem** objects point to the same shared memory region.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ashmem | Ashmem | 是 | Existing Ashmem object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Ashmem | Ashmem object created. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The passed parameter is not an Ashmem object;  3.The ashmem instance for obtaining packaging is empty. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  let ashmem2 = rpc.Ashmem.create(ashmem);
  let size = ashmem2.getAshmemSize();
  hilog.info(0x0000, 'testTag', 'size is ' + size);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

## createAshmem

```TypeScript
static createAshmem(name: string, size: number): Ashmem
```

Creates an **Ashmem** object with the specified name and size. This API is a static method.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** create()

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Name of the Ashmem object to create. |
| size | number | 是 | Size (in bytes) of the Ashmem object to create. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Ashmem | Returns the Ashmem object if it is created successfully; returns null otherwise. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let ashmem = rpc.Ashmem.createAshmem("ashmem", 1024*1024);
  hilog.info(0x0000, 'testTag', 'create ashmem: ' + ashmem);
  let size = ashmem.getAshmemSize();
  hilog.info(0x0000, 'testTag',  'size is ' + size);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

## createAshmemFromExisting

```TypeScript
static createAshmemFromExisting(ashmem: Ashmem): Ashmem
```

Creates an **Ashmem** object by copying the file descriptor of an existing **Ashmem** object. The two **Ashmem** objects point to the same shared memory region.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** create()

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ashmem | Ashmem | 是 | Existing Ashmem object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Ashmem | Ashmem object created. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  let ashmem2 = rpc.Ashmem.createAshmemFromExisting(ashmem);
  let size = ashmem2.getAshmemSize();
  hilog.info(0x0000, 'testTag', 'size is ' + size);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error is ' + error);
}

```

## getAshmemSize

```TypeScript
getAshmemSize(): int
```

Obtains the memory size of this **Ashmem** object.

**起始版本：** 8

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Ashmem size obtained. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  let size = ashmem.getAshmemSize();
  hilog.info(0x0000, 'testTag', ' size is ' + size);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error is ' + error);
}

```

## mapAshmem

```TypeScript
mapAshmem(mapType: number): boolean
```

Creates the shared file mapping on the virtual address space of this process. The size of the mapping region is specified by this **Ashmem** object.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** mapTypedAshmem(mapType:

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mapType | number | 是 | Protection level of the memory region to which the shared file is mapped. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the mapping is created; returns false otherwise. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  let mapReadAndWrite = ashmem.mapAshmem(rpc.Ashmem.PROT_READ | rpc.Ashmem.PROT_WRITE);
  hilog.info(0x0000, 'testTag', 'map ashmem result is ' + mapReadAndWrite);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error is ' + error);
}

```

## mapReadAndWriteAshmem

```TypeScript
mapReadAndWriteAshmem(): boolean
```

Maps the shared file to the readable and writable virtual address space of the process.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** mapReadWriteAshmem()

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the mapping is created; returns false otherwise. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  let mapResult = ashmem.mapReadAndWriteAshmem();
  hilog.info(0x0000, 'testTag', 'map ashmem result is ' + mapResult);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error is ' + error);
}

```

## mapReadOnlyAshmem

```TypeScript
mapReadOnlyAshmem(): boolean
```

Maps the shared file to the read-only virtual address space of the process.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** mapReadonlyAshmem()

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the mapping is created; returns false otherwise. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  let mapResult = ashmem.mapReadOnlyAshmem();
  hilog.info(0x0000, 'testTag', 'Ashmem mapReadOnlyAshmem result is ' + mapResult);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error is ' + error);
}

```

## mapReadonlyAshmem

```TypeScript
mapReadonlyAshmem(): void
```

Maps the shared file to the read-only virtual address space of the process.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1900001 | Failed to call mmap. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  ashmem.mapReadonlyAshmem();
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

## mapReadWriteAshmem

```TypeScript
mapReadWriteAshmem(): void
```

Maps the shared file to the readable and writable virtual address space of the process.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 1900001 | Failed to call mmap. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  ashmem.mapReadWriteAshmem();
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

## mapTypedAshmem

```TypeScript
mapTypedAshmem(mapType: int): void
```

Creates the shared file mapping on the virtual address space of this process. The size of the mapping region is specified by this **Ashmem** object.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mapType | int | 是 | Protection level of the memory region to which the shared file is mapped. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match;  3.The passed mapType exceeds the maximum protection level. |
| 1900001 | Failed to call mmap. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  ashmem.mapTypedAshmem(rpc.Ashmem.PROT_READ | rpc.Ashmem.PROT_WRITE);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

## PROT_EXEC

```TypeScript
static get PROT_EXEC(): int
```

The mapped memory is executable.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Return vaule indicating the mapped memory is executable. |

## PROT_NONE

```TypeScript
static get PROT_NONE(): int
```

The mapped memory is inaccessible.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Return vaule indicating the mapped memory is inaccessible. |

## PROT_READ

```TypeScript
static get PROT_READ(): int
```

The mapped memory is readable.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Return vaule indicating the mapped memory is readable. |

## PROT_WRITE

```TypeScript
static get PROT_WRITE(): int
```

The mapped memory is writable.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.IPC.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Return vaule indicating the mapped memory is writable. |

## readAshmem

```TypeScript
readAshmem(size: number, offset: number): number[]
```

Reads data from the shared file associated with this **Ashmem** object. > **NOTE** > > - Before writing an **Ashmem** object, you need to call > [mapReadWriteAshmem]rpc.Ashmem#mapReadWriteAshmem() for mapping.

**起始版本：** 9

**废弃版本：** 11

**替代接口：** readDataFromAshmem(size:

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| size | number | 是 | Size of the data to read. |
| offset | number | 是 | Start position of the data to read in the memory region associated with this  Ashmem object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number[] | Data read. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match. |
| 1900004 | Failed to read data from the shared memory. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  ashmem.mapReadWriteAshmem();
  let ByteArrayVar = [1, 2, 3, 4, 5];
  ashmem.writeAshmem(ByteArrayVar, 5, 0);
  let readResult = ashmem.readAshmem(5, 0);
  hilog.info(0x0000, 'testTag', 'read from Ashmem result is ' + readResult);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

## readDataFromAshmem

```TypeScript
readDataFromAshmem(size: int, offset: int): ArrayBuffer
```

Reads data from the shared file associated with this **Ashmem** object. > **NOTE** > > Before writing an **Ashmem** object, you need to call > [mapReadWriteAshmem]rpc.Ashmem#mapReadWriteAshmem() for mapping.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| size | int | 是 | Size of the data to read. |
| offset | int | 是 | Start position of the data to read in the memory region associated with this Ashmem  object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ArrayBuffer | Data read. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match. |
| 1900004 | Failed to read data from the shared memory. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let buffer = new ArrayBuffer(1024);
  let int32View = new Int32Array(buffer);
  for (let i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2 + 1;
  }
  let size = buffer.byteLength;
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  ashmem.mapReadWriteAshmem();
  ashmem.writeDataToAshmem(buffer, size, 0);
  let readResult = ashmem.readDataFromAshmem(size, 0);
  let readInt32View = new Int32Array(readResult);
  hilog.info(0x0000, 'testTag', 'read from Ashmem result is ' + readInt32View);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

## readFromAshmem

```TypeScript
readFromAshmem(size: number, offset: number): number[]
```

Reads data from the shared file associated with this **Ashmem** object. > **NOTE** > > - Before writing an **Ashmem** object, you need to call > [mapReadWriteAshmem]rpc.Ashmem#mapReadWriteAshmem() for mapping.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** readDataFromAshmem(size:

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| size | number | 是 | Size of the data to read. |
| offset | number | 是 | Start position of the data to read in the memory region associated with this  Ashmem object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number[] | Data read. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  let mapResult = ashmem.mapReadAndWriteAshmem();
  hilog.info(0x0000, 'testTag', 'RpcTest map ashmem result is ' + mapResult);
  let ByteArrayVar = [1, 2, 3, 4, 5];
  let writeResult = ashmem.writeToAshmem(ByteArrayVar, 5, 0);
  hilog.info(0x0000, 'testTag', 'write to Ashmem result is ' + writeResult);
  let readResult = ashmem.readFromAshmem(5, 0);
  hilog.info(0x0000, 'testTag', 'read to Ashmem result is ' + readResult);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error is ' + error);
}

```

## setProtection

```TypeScript
setProtection(protectionType: number): boolean
```

Sets the protection level of the memory region to which the shared file is mapped.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** setProtectionType(protectionType:

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| protectionType | number | 是 | Protection type to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the operation is successful; returns false otherwise. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  let result = ashmem.setProtection(rpc.Ashmem.PROT_READ);
  hilog.info(0x0000, 'testTag', 'Ashmem setProtection result is ' + result);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

## setProtectionType

```TypeScript
setProtectionType(protectionType: int): void
```

Sets the protection level of the memory region to which the shared file is mapped.

**起始版本：** 9

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| protectionType | int | 是 | Protection type to set. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match. |
| 1900002 | Failed to call ioctl. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  ashmem.setProtectionType(rpc.Ashmem.PROT_READ);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'Rpc set protection type fail, errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'Rpc set protection type fail, errorMessage ' + e.message);
}

```

## unmapAshmem

```TypeScript
unmapAshmem(): void
```

Deletes the mappings for the specified address range of this **Ashmem** object.

**起始版本：** 8

**系统能力：** SystemCapability.Communication.IPC.Core

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  ashmem.unmapAshmem();
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error is ' + error);
}

```

## writeAshmem

```TypeScript
writeAshmem(buf: number[], size: number, offset: number): void
```

Writes data to the shared file associated with this **Ashmem** object. > **NOTE** > > - Before writing an **Ashmem** object, you need to call > [mapReadWriteAshmem]rpc.Ashmem#mapReadWriteAshmem() for mapping.

**起始版本：** 9

**废弃版本：** 11

**替代接口：** writeDataToAshmem(buf:

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buf | number[] | 是 | Data to write. |
| size | number | 是 | Size of the data to write. |
| offset | number | 是 | Start position of the data to write in the memory region associated with this  Ashmem object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match;  3.The element does not exist in the array. |
| 1900003 | Failed to write data to the shared memory. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  ashmem.mapReadWriteAshmem();
  let ByteArrayVar = [1, 2, 3, 4, 5];
  ashmem.writeAshmem(ByteArrayVar, 5, 0);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'Rpc write to ashmem fail, errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'Rpc write to ashmem fail, errorMessage ' + e.message);
}

```

## writeDataToAshmem

```TypeScript
writeDataToAshmem(buf: ArrayBuffer, size: int, offset: int): void
```

Writes data to the shared file associated with this **Ashmem** object. > **NOTE** > > Before writing an **Ashmem** object, you need to call > [mapReadWriteAshmem]rpc.Ashmem#mapReadWriteAshmem() for mapping.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buf | ArrayBuffer | 是 | Data to write. |
| size | int | 是 | Size of the data to write. |
| offset | int | 是 | Start position of the data to write in the memory region associated with this Ashmem  object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.The number of parameters is incorrect;  2.The parameter type does not match;  3.Failed to obtain arrayBuffer information. |
| 1900003 | Failed to write data to the shared memory. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let buffer = new ArrayBuffer(1024);
  let int32View = new Int32Array(buffer);
  for (let i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2 + 1;
  }
  let size = buffer.byteLength;
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  ashmem.mapReadWriteAshmem();
  ashmem.writeDataToAshmem(buffer, size, 0);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

## writeToAshmem

```TypeScript
writeToAshmem(buf: number[], size: number, offset: number): boolean
```

Writes data to the shared file associated with this **Ashmem** object. > **NOTE** > > - Before writing an **Ashmem** object, you need to call > [mapReadWriteAshmem]rpc.Ashmem#mapReadWriteAshmem() for mapping.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** writeDataToAshmem(buf:

**系统能力：** SystemCapability.Communication.IPC.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| buf | number[] | 是 | Data to write. |
| size | number | 是 | Size of the data to write. |
| offset | number | 是 | Start position of the data to write in the memory region associated with this  Ashmem object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the data is written successfully; returns false otherwise. |

**示例：**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
  let mapResult = ashmem.mapReadAndWriteAshmem();
  hilog.info(0x0000, 'testTag', 'RpcTest map ashmem result is ' + mapResult);
  let ByteArrayVar = [1, 2, 3, 4, 5];
  let writeResult = ashmem.writeToAshmem(ByteArrayVar, 5, 0);
  hilog.info(0x0000, 'testTag', 'write to Ashmem result is ' + writeResult);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error is ' + error);
}

```

## PROT_WRITE

```TypeScript
static readonly PROT_WRITE: number
```

Mapped memory protection type, indicating that the mapped memory is readable.

**类型：** number

**起始版本：** 8

**系统能力：** SystemCapability.Communication.IPC.Core

## PROT_NONE

```TypeScript
static readonly PROT_NONE: number
```

Mapped memory protection type, indicating that the mapped memory cannot be accessed.

**类型：** number

**起始版本：** 8

**系统能力：** SystemCapability.Communication.IPC.Core

## PROT_EXEC

```TypeScript
static readonly PROT_EXEC: number
```

Mapped memory protection type, indicating that the mapped memory is executable.

**类型：** number

**起始版本：** 8

**系统能力：** SystemCapability.Communication.IPC.Core

## PROT_READ

```TypeScript
static readonly PROT_READ: number
```

Mapped memory protection type, indicating that the mapped memory is readable.

**类型：** number

**起始版本：** 8

**系统能力：** SystemCapability.Communication.IPC.Core

