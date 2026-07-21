# MessageSequence

Provides APIs for reading and writing data in specific format. During RPC or IPC, the sender can use the **write()** method provided by **MessageSequence** to write data in specific format to a **MessageSequence** object. The receiver can use the **read()** method provided by **MessageSequence** to read data in specific format from a **MessageSequence** object. The data formats include basic data types and arrays, IPC objects,interface tokens, and custom sequenceable objects.

**Since:** 9

<!--Device-rpc-class MessageSequence--><!--Device-rpc-class MessageSequence-End-->

**System capability:** SystemCapability.Communication.IPC.Core

## Modules to Import

```TypeScript
import { rpc } from '@kit.IPCKit';
```

<a id="closefiledescriptor"></a>
## closeFileDescriptor

```TypeScript
static closeFileDescriptor(fd: number): void
```

Closes a file descriptor. This API is a static method.

**Since:** 9

<!--Device-MessageSequence-static closeFileDescriptor(fd: int): void--><!--Device-MessageSequence-static closeFileDescriptor(fd: int): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor to close. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let filePath = "path/to/file"; 
  let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
  rpc.MessageSequence.closeFileDescriptor(file.fd);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="containfiledescriptors"></a>
## containFileDescriptors

```TypeScript
containFileDescriptors(): boolean
```

Checks whether this **MessageSequence** object contains file descriptors.

**Since:** 9

<!--Device-MessageSequence-containFileDescriptors(): boolean--><!--Device-MessageSequence-containFileDescriptors(): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the **MessageSequence** object contains file descriptors; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let sequence = rpc.MessageSequence.create();
  let filePath = "path/to/file";
  let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
  let containFD = sequence.containFileDescriptors();
  hilog.info(0x0000, 'testTag', 'sequence after write fd containFd result is ' + containFD);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="create"></a>
## create

```TypeScript
static create(): MessageSequence
```

Creates a **MessageSequence** object. This API is a static method.

**Since:** 9

<!--Device-MessageSequence-static create(): MessageSequence--><!--Device-MessageSequence-static create(): MessageSequence-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| [MessageSequence](arkts-ipc-rpc-messagesequence-c.md) | **MessageSequence** object created. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  hilog.info(0x0000, 'testTag', 'data is ' + data);

  // When the MessageSequence object is no longer used, the service calls the reclaim method to release resources.
  data.reclaim();
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="dupfiledescriptor"></a>
## dupFileDescriptor

```TypeScript
static dupFileDescriptor(fd: number): number
```

Duplicates a file descriptor. This API is a static method.

**Since:** 9

<!--Device-MessageSequence-static dupFileDescriptor(fd: int): int--><!--Device-MessageSequence-static dupFileDescriptor(fd: int): int-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor to duplicate. |

**Return value:**

| Type | Description |
| --- | --- |
| number | New file descriptor. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900013](../errorcode-rpc.md#1900013-failed-to-invoke-dup) | Failed to call dup. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let filePath = "path/to/file"; 
  let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
  rpc.MessageSequence.dupFileDescriptor(file.fd);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="getcapacity"></a>
## getCapacity

```TypeScript
getCapacity(): number
```

Obtains the capacity of this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-getCapacity(): int--><!--Device-MessageSequence-getCapacity(): int-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Capacity of the obtained **MessageSequence** object, in bytes. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  let result = data.getCapacity();
  hilog.info(0x0000, 'testTag', 'capacity is ' + result);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="getrawdatacapacity"></a>
## getRawDataCapacity

```TypeScript
getRawDataCapacity(): number
```

Obtains the maximum amount of raw data that can be held by this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-getRawDataCapacity(): int--><!--Device-MessageSequence-getRawDataCapacity(): int-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Maximum amount of raw data that **MessageSequence** can hold, that is, 128 MB. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let sequence = rpc.MessageSequence.create();
  let result = sequence.getRawDataCapacity();
  hilog.info(0x0000, 'testTag', 'sequence get RawDataCapacity result is ' + result);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="getreadposition"></a>
## getReadPosition

```TypeScript
getReadPosition(): number
```

Obtains the read position of this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-getReadPosition(): int--><!--Device-MessageSequence-getReadPosition(): int-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Read position obtained. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeString("hello world");
  let readPos = data.getReadPosition();
  hilog.info(0x0000, 'testTag', 'readPos is ' + readPos);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="getreadablebytes"></a>
## getReadableBytes

```TypeScript
getReadableBytes(): number
```

Obtains the readable capacity of this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-getReadableBytes(): int--><!--Device-MessageSequence-getReadableBytes(): int-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Readable capacity of the **MessageSequence** instance, in bytes. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeString("hello world");
  let result = data.getReadableBytes();
  hilog.info(0x0000, 'testTag', 'RpcServer: getReadableBytes is ' + result);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="getsize"></a>
## getSize

```TypeScript
getSize(): number
```

Obtains the data size of this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-getSize(): int--><!--Device-MessageSequence-getSize(): int-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Size of the **MessageSequence** instance obtained, in bytes. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  let size = data.getSize();
  hilog.info(0x0000, 'testTag', 'size is ' + size);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="getwritablebytes"></a>
## getWritableBytes

```TypeScript
getWritableBytes(): number
```

Obtains the writable capacity (in bytes) of this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-getWritableBytes(): int--><!--Device-MessageSequence-getWritableBytes(): int-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Writable capacity of the **MessageSequence** instance, in bytes. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.setCapacity(100);
  let getWritableBytes = data.getWritableBytes();
  hilog.info(0x0000, 'testTag', 'RpcServer: getWritableBytes is ' + getWritableBytes);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="getwriteposition"></a>
## getWritePosition

```TypeScript
getWritePosition(): number
```

Obtains the write position of this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-getWritePosition(): int--><!--Device-MessageSequence-getWritePosition(): int-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Write position obtained. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeInt(10);
  let bwPos = data.getWritePosition();
  hilog.info(0x0000, 'testTag', 'bwPos is ' + bwPos);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readarraybuffer"></a>
## readArrayBuffer

```TypeScript
readArrayBuffer(typeCode: TypeCode): ArrayBuffer
```

Reads data of the ArrayBuffer type from this **MessageSequence**.

**Since:** 12

<!--Device-MessageSequence-readArrayBuffer(typeCode: TypeCode): ArrayBuffer--><!--Device-MessageSequence-readArrayBuffer(typeCode: TypeCode): ArrayBuffer-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| typeCode | [TypeCode](arkts-ipc-rpc-typecode-e.md) | Yes | TypedArray type of the ArrayBuffer data.<br>The underlying read mode is determined based on the enum value of **TypeCode** passed by the service. |

**Return value:**

| Type | Description |
| --- | --- |
| ArrayBuffer | Data of the ArrayBuffer type read, in bytes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match;3.The obtained value of typeCode is incorrect; |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
// In this example, the value of TypeCode is Int16Array.
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  let buffer = new ArrayBuffer(10);
  let int16View = new Int16Array(buffer);
  for (let i = 0; i < int16View.length; i++) {
    int16View[i] = i * 2 + 1;
  }
  data.writeArrayBuffer(buffer, rpc.TypeCode.INT16_ARRAY);
  let result = data.readArrayBuffer(rpc.TypeCode.INT16_ARRAY);
  let readInt16View = new Int16Array(result);
  hilog.info(0x0000, 'testTag', 'read ArrayBuffer result is ' + readInt16View);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readashmem"></a>
## readAshmem

```TypeScript
readAshmem(): Ashmem
```

Reads the anonymous shared object from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readAshmem(): Ashmem--><!--Device-MessageSequence-readAshmem(): Ashmem-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Ashmem](arkts-ipc-rpc-ashmem-c.md) | Anonymous share object obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let sequence = rpc.MessageSequence.create();
  let ashmem = rpc.Ashmem.create("ashmem", 1024);
  // Write data to ashmem.
  let buffer = new ArrayBuffer(1024);
  let int32View = new Int32Array(buffer);
  for (let i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2 + 1;
  }
  let size = buffer.byteLength;
  ashmem.mapReadWriteAshmem();
  ashmem.writeDataToAshmem(buffer, size, 0);
  // Write the size of the transferred data to this MessageSequence object.
  sequence.writeInt(size);
  // Write the ashmem object to the messageSequence object.
  sequence.writeAshmem(ashmem);

  // Read the size of the transferred data.
  let dataSize = sequence.readInt();
  // Read the ashmem object from this MessageSequence object.
  let ashmem1 = sequence.readAshmem();
  // Read data from the ashmem object.
  ashmem1.mapReadWriteAshmem();
  let readResult = ashmem1.readDataFromAshmem(dataSize, 0);
  let readInt32View = new Int32Array(readResult);
  hilog.info(0x0000, 'testTag', 'read from Ashmem result is ' + readInt32View);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readboolean"></a>
## readBoolean

```TypeScript
readBoolean(): boolean
```

Reads the Boolean value from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readBoolean(): boolean--><!--Device-MessageSequence-readBoolean(): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Boolean value read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeBoolean(false);
  let ret = data.readBoolean();
  hilog.info(0x0000, 'testTag', 'readBoolean is ' + ret);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readbooleanarray"></a>
## readBooleanArray

```TypeScript
readBooleanArray(dataIn: boolean[]): void
```

Reads the Boolean array from this **MessageSequence** object and writes it to the created empty array.

**Since:** 9

<!--Device-MessageSequence-readBooleanArray(dataIn: boolean[]): void--><!--Device-MessageSequence-readBooleanArray(dataIn: boolean[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | boolean[] | Yes | Boolean array to read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match. |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeBooleanArray([false, true, false]);
  let array: Array<boolean> = new Array(3);
  data.readBooleanArray(array);
  hilog.info(0x0000, 'testTag', 'readBooleanArray is ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readbooleanarray-1"></a>
## readBooleanArray

```TypeScript
readBooleanArray(): boolean[]
```

Reads the Boolean array from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readBooleanArray(): boolean[]--><!--Device-MessageSequence-readBooleanArray(): boolean[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean[] | Boolean array read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeBooleanArray([false, true, false]);
  let array = data.readBooleanArray();
  hilog.info(0x0000, 'testTag', 'readBooleanArray is ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readbyte"></a>
## readByte

```TypeScript
readByte(): number
```

Reads the byte value from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readByte(): int--><!--Device-MessageSequence-readByte(): int-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Byte value read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeByte(2);
  let ret = data.readByte();
  hilog.info(0x0000, 'testTag', 'readByte is: ' +  ret);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readbytearray"></a>
## readByteArray

```TypeScript
readByteArray(dataIn: number[]): void
```

Reads the byte array from this **MessageSequence** object and writes it to the created empty array.

**Since:** 9

<!--Device-MessageSequence-readByteArray(dataIn: int[]): void--><!--Device-MessageSequence-readByteArray(dataIn: int[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | number[] | Yes | Byte array to read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match. |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  let ByteArrayVar = [1, 2, 3, 4, 5];
  data.writeByteArray(ByteArrayVar);
  let array: Array<number> = new Array(5);
  data.readByteArray(array);
  hilog.info(0x0000, 'testTag', 'readByteArray is  ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readbytearray-1"></a>
## readByteArray

```TypeScript
readByteArray(): number[]
```

Reads the byte array from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readByteArray(): int[]--><!--Device-MessageSequence-readByteArray(): int[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Byte array read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  let ByteArrayVar = [1, 2, 3, 4, 5];
  data.writeByteArray(ByteArrayVar);
  let array = data.readByteArray();
  hilog.info(0x0000, 'testTag', 'readByteArray is  ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readchar"></a>
## readChar

```TypeScript
readChar(): number
```

Reads the character from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readChar(): int--><!--Device-MessageSequence-readChar(): int-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | **Char** value read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeChar(97);
  let ret = data.readChar();
  hilog.info(0x0000, 'testTag', 'readChar is ' + ret);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readchararray"></a>
## readCharArray

```TypeScript
readCharArray(dataIn: number[]): void
```

Reads the character array from this **MessageSequence** object and writes it to the created empty array.

**Since:** 9

<!--Device-MessageSequence-readCharArray(dataIn: int[]): void--><!--Device-MessageSequence-readCharArray(dataIn: int[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | number[] | Yes | Character array to read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match. |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeCharArray([97, 98, 88]);
  let array: Array<number> = new Array(3);
  data.readCharArray(array);
  hilog.info(0x0000, 'testTag', 'readCharArray is ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readchararray-1"></a>
## readCharArray

```TypeScript
readCharArray(): number[]
```

Reads the character array from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readCharArray(): int[]--><!--Device-MessageSequence-readCharArray(): int[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Character array read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeCharArray([97, 98, 88]);
  let array = data.readCharArray();
  hilog.info(0x0000, 'testTag', 'readCharArray is ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readdouble"></a>
## readDouble

```TypeScript
readDouble(): number
```

Reads the double value from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readDouble(): double--><!--Device-MessageSequence-readDouble(): double-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Double value read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeDouble(10.2);
  let ret = data.readDouble();
  hilog.info(0x0000, 'testTag', 'readDouble is ' +  ret);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readdoublearray"></a>
## readDoubleArray

```TypeScript
readDoubleArray(dataIn: number[]): void
```

Reads the double array from this **MessageSequence** object and writes it to the created empty array.

**Since:** 9

<!--Device-MessageSequence-readDoubleArray(dataIn: double[]): void--><!--Device-MessageSequence-readDoubleArray(dataIn: double[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | number[] | Yes | Double array to read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match. |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeDoubleArray([11.1, 12.2, 13.3]);
  let array: Array<number> = new Array(3);
  data.readDoubleArray(array);
  hilog.info(0x0000, 'testTag', 'readDoubleArray is ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readdoublearray-1"></a>
## readDoubleArray

```TypeScript
readDoubleArray(): number[]
```

Reads the double array from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readDoubleArray(): double[]--><!--Device-MessageSequence-readDoubleArray(): double[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Double array read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeDoubleArray([11.1, 12.2, 13.3]);
  let array = data.readDoubleArray();
  hilog.info(0x0000, 'testTag', 'readDoubleArray is ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readexception"></a>
## readException

```TypeScript
readException(): void
```

Reads the exception information from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readException(): void--><!--Device-MessageSequence-readException(): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

In the sample code provided in this topic, this.getUIContext().getHostContext() is used to obtain UIAbilityContext, where this indicates a UIAbility instance inherited from UIAbility. To use UIAbilityContext APIs on pages, see [Obtaining the Context of UIAbility](../../application-models/uiability-usage.md#obtaining-the-context-of-uiability).

```TypeScript
// If the FA model is used, import featureAbility from @kit.AbilityKit.
// import { featureAbility } from '@kit.AbilityKit';
import { rpc } from '@kit.IPCKit';
import { Want, common } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

let proxy: rpc.IRemoteObject | undefined;
let connect: common.ConnectOptions = {
  onConnect: (elementName, remoteProxy) => {
    hilog.info(0x0000, 'testTag', 'js onConnect called');
    proxy = remoteProxy;
  },
  onDisconnect: (elementName) => {
    hilog.info(0x0000, 'testTag', 'onDisconnect');
  },
  onFailed: () => {
    hilog.info(0x0000, 'testTag', 'onFailed');
  }
};
let want: Want = {
  // Obtain the package name and ability name on the server.
  bundleName: "com.ohos.server",
  abilityName: "com.ohos.server.EntryAbility",
};

// Use this method to connect to the ability for the FA model.
// FA.connectAbility(want,connect);

// Save the connection ID, which will be used for the subsequent service disconnection.
let context: common.UIAbilityContext = this.getUIContext().getHostContext(); // UIAbilityContext
// Save the connection ID, which will be used for the subsequent service disconnection.
let connectionId = context.connectServiceExtensionAbility(want, connect);

```

The proxy object in the onConnect callback can be assigned a value only after the ability is connected asynchronously. Then, sendMessageRequest() of the proxy object is called to send a message.

```TypeScript
import { rpc } from '@kit.IPCKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
  
try {
  let option = new rpc.MessageOption();
  let data = rpc.MessageSequence.create();
  let reply = rpc.MessageSequence.create();
  data.writeNoException();
  data.writeInt(6);
  if (proxy != undefined) {
    proxy.sendMessageRequest(1, data, reply, option)
      .then((result: rpc.RequestResult) => {
        if (result.errCode === 0) {
          hilog.info(0x0000, 'testTag', 'sendMessageRequest got result');
          result.reply.readException();
          let num = result.reply.readInt();
          hilog.info(0x0000, 'testTag', 'reply num: ' + num);
        } else {
          hilog.error(0x0000, 'testTag', 'sendMessageRequest failed, errCode: ' + result.errCode);
        }
      }).catch((e: Error) => {
        hilog.error(0x0000, 'testTag', 'sendMessageRequest got exception: ' + JSON.stringify(e));
      }).finally (() => {
        hilog.info(0x0000, 'testTag', 'sendMessageRequest ends, reclaim parcel');
        data.reclaim();
        reply.reclaim();
      });
  }
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readfiledescriptor"></a>
## readFileDescriptor

```TypeScript
readFileDescriptor(): number
```

Reads the file descriptor from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readFileDescriptor(): int--><!--Device-MessageSequence-readFileDescriptor(): int-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | File descriptor read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let sequence = rpc.MessageSequence.create();
  let filePath = "path/to/file";
  let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
  sequence.writeFileDescriptor(file.fd);
  let readFD = sequence.readFileDescriptor();
  hilog.info(0x0000, 'testTag', 'readFileDescriptor is ' + readFD);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readfloat"></a>
## readFloat

```TypeScript
readFloat(): number
```

Reads the double value from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readFloat(): double--><!--Device-MessageSequence-readFloat(): double-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Double value read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeFloat(1.2);
  let ret = data.readFloat();
  hilog.info(0x0000, 'testTag', 'readFloat is ' + ret);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readfloatarray"></a>
## readFloatArray

```TypeScript
readFloatArray(dataIn: number[]): void
```

Reads the double array from this **MessageSequence** object and writes it to the created empty array.

**Since:** 9

<!--Device-MessageSequence-readFloatArray(dataIn: double[]): void--><!--Device-MessageSequence-readFloatArray(dataIn: double[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | number[] | Yes | Double array to read. The system processes float data as that of the double type.Therefore, the total number of bytes occupied by a float array must be calculated as the double type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match. |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeFloatArray([1.2, 1.3, 1.4]);
  let array: Array<number> = new Array(3);
  data.readFloatArray(array);
  hilog.info(0x0000, 'testTag', 'readFloatArray is ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readfloatarray-1"></a>
## readFloatArray

```TypeScript
readFloatArray(): number[]
```

Reads the double array from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readFloatArray(): double[]--><!--Device-MessageSequence-readFloatArray(): double[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Double array read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeFloatArray([1.2, 1.3, 1.4]);
  let array = data.readFloatArray();
  hilog.info(0x0000, 'testTag', 'readFloatArray is ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readint"></a>
## readInt

```TypeScript
readInt(): number
```

Reads the integer from this **MessageSequence** object.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MessageSequence-readInt(): int--><!--Device-MessageSequence-readInt(): int-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Integer read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeInt(10);
  let ret = data.readInt();
  hilog.info(0x0000, 'testTag', 'readInt is ' + ret);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readintarray"></a>
## readIntArray

```TypeScript
readIntArray(dataIn: number[]): void
```

Reads the integer array from this **MessageSequence** object and writes it to the created empty array.

**Since:** 9

<!--Device-MessageSequence-readIntArray(dataIn: int[]): void--><!--Device-MessageSequence-readIntArray(dataIn: int[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | number[] | Yes | Integer array to read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match. |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeIntArray([100, 111, 112]);
  let array: Array<number> = new Array(3);
  data.readIntArray(array);
  hilog.info(0x0000, 'testTag', 'readIntArray is  ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readintarray-1"></a>
## readIntArray

```TypeScript
readIntArray(): number[]
```

Reads the integer array from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readIntArray(): int[]--><!--Device-MessageSequence-readIntArray(): int[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Integer array read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeIntArray([100, 111, 112]);
  let array = data.readIntArray();
  hilog.info(0x0000, 'testTag', 'readIntArray is ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readinterfacetoken"></a>
## readInterfaceToken

```TypeScript
readInterfaceToken(): string
```

Reads the interface token from this **MessageSequence** object. The interface token is read in the sequence in which it is written to the **MessageSequence** object. The local object can use it to verify the communication.

**Since:** 9

<!--Device-MessageSequence-readInterfaceToken(): string--><!--Device-MessageSequence-readInterfaceToken(): string-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Interface token obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeInterfaceToken("aaa");
  let interfaceToken = data.readInterfaceToken();
  hilog.info(0x0000, 'testTag', 'RpcServer: interfaceToken is ' + interfaceToken);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readlong"></a>
## readLong

```TypeScript
readLong(): number
```

Reads the long integer from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readLong(): long--><!--Device-MessageSequence-readLong(): long-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Long integer read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeLong(10000);
  let ret = data.readLong();
  hilog.info(0x0000, 'testTag', 'readLong is ' + ret);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readlongarray"></a>
## readLongArray

```TypeScript
readLongArray(dataIn: number[]): void
```

Reads the long array from this **MessageSequence** object and writes it to the created empty array.

**Since:** 9

<!--Device-MessageSequence-readLongArray(dataIn: long[]): void--><!--Device-MessageSequence-readLongArray(dataIn: long[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | number[] | Yes | Long array to read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match. |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeLongArray([1111, 1112, 1113]);
  let array: Array<number> = new Array(3);
  data.readLongArray(array);
  hilog.info(0x0000, 'testTag', 'readLongArray is ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readlongarray-1"></a>
## readLongArray

```TypeScript
readLongArray(): number[]
```

Reads the long integer array from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readLongArray(): long[]--><!--Device-MessageSequence-readLongArray(): long[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Long array read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeLongArray([1111, 1112, 1113]);
  let array = data.readLongArray();
  hilog.info(0x0000, 'testTag', 'readLongArray is ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readparcelable"></a>
## readParcelable

```TypeScript
readParcelable(dataIn: Parcelable): void
```

Reads the **Parcelable** object from this **MessageSequence** object to the specified object (**dataIn**).

**Since:** 9

<!--Device-MessageSequence-readParcelable(dataIn: Parcelable): void--><!--Device-MessageSequence-readParcelable(dataIn: Parcelable): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | [Parcelable](arkts-ipc-rpc-parcelable-i.md) | Yes | **Parcelable** object to read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect. |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |
| [1900012](../errorcode-rpc.md#1900012-js-callback-failed) | Failed to call the JS callback function. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class MyParcelable implements rpc.Parcelable {
  num: number = 0;
  str: string = '';
  constructor( num: number, str: string) {
    this.num = num;
    this.str = str;
  }
  marshalling(messageSequence: rpc.MessageSequence): boolean {
    messageSequence.writeInt(this.num);
    messageSequence.writeString(this.str);
    return true;
  }
  unmarshalling(messageSequence: rpc.MessageSequence): boolean {
    this.num = messageSequence.readInt();
    this.str = messageSequence.readString();
    return true;
  }
}

try {
  let parcelable = new MyParcelable(1, "aaa");
  let data = rpc.MessageSequence.create();
  data.writeParcelable(parcelable);
  let ret = new MyParcelable(0, "");
  data.readParcelable(ret);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readparcelablearray"></a>
## readParcelableArray

```TypeScript
readParcelableArray(parcelableArray: Parcelable[]): void
```

Reads the **Parcelable** array from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readParcelableArray(parcelableArray: Parcelable[]): void--><!--Device-MessageSequence-readParcelableArray(parcelableArray: Parcelable[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parcelableArray | [Parcelable](arkts-ipc-rpc-parcelable-i.md)[] | Yes | **Parcelable** array to read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match;4.The length of the array passed when reading is not equal to the length passed when writing to the array;5.The element does not exist in the array. |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |
| [1900012](../errorcode-rpc.md#1900012-js-callback-failed) | Failed to call the JS callback function. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class MyParcelable implements rpc.Parcelable {
  num: number = 0;
  str: string = '';
  constructor(num: number, str: string) {
    this.num = num;
    this.str = str;
  }
  marshalling(messageSequence: rpc.MessageSequence): boolean {
    messageSequence.writeInt(this.num);
    messageSequence.writeString(this.str);
    return true;
  }
  unmarshalling(messageSequence: rpc.MessageSequence): boolean {
    this.num = messageSequence.readInt();
    this.str = messageSequence.readString();
    return true;
  }
}

try {
  let parcelable = new MyParcelable(1, "aaa");
  let parcelable2 = new MyParcelable(2, "bbb");
  let parcelable3 = new MyParcelable(3, "ccc");
  let a = [parcelable, parcelable2, parcelable3];
  let data = rpc.MessageSequence.create();
  data.writeParcelableArray(a);
  let b = [new MyParcelable(0, ""), new MyParcelable(0, ""), new MyParcelable(0, "")];
  data.readParcelableArray(b);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'rpc write parcelable array fail, errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'rpc write parcelable array fail, errorMessage ' + e.message);
}

```

<a id="readrawdata"></a>
## readRawData

```TypeScript
readRawData(size: number): number[]
```

Reads raw data from this **MessageSequence** object.

**Since:** 9

**Deprecated since:** 11

**Substitutes:** [readRawDataBuffer(size:](arkts-ipc-rpc-messagesequence-c.md#readrawdatabuffer-1)

<!--Device-MessageSequence-readRawData(size: number): number[]--><!--Device-MessageSequence-readRawData(size: number): number[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Size of the raw data to read. |

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Raw data obtained, in bytes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let sequence = rpc.MessageSequence.create();
  let arr = [1, 2, 3, 4, 5];
  sequence.writeRawData(arr, arr.length);
  let size = arr.length;
  let result = sequence.readRawData(size);
  hilog.info(0x0000, 'testTag', 'sequence read raw data result is ' + result);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readrawdatabuffer"></a>
## readRawDataBuffer

```TypeScript
readRawDataBuffer(size: number): ArrayBuffer
```

Reads raw data from this **MessageSequence** object.

**Since:** 11

<!--Device-MessageSequence-readRawDataBuffer(size: int): ArrayBuffer--><!--Device-MessageSequence-readRawDataBuffer(size: int): ArrayBuffer-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Size of the raw data to read. |

**Return value:**

| Type | Description |
| --- | --- |
| ArrayBuffer | Raw data obtained, in bytes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let buffer = new ArrayBuffer(64 * 1024);
  let int32View = new Int32Array(buffer);
  for (let i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2 + 1;
  }
  let size = buffer.byteLength;
  let sequence = rpc.MessageSequence.create();
  sequence.writeRawDataBuffer(buffer, size);
  let result = sequence.readRawDataBuffer(size);
  let readInt32View = new Int32Array(result);
  hilog.info(0x0000, 'testTag', 'sequence read raw data result is ' + readInt32View);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readremoteobject"></a>
## readRemoteObject

```TypeScript
readRemoteObject(): IRemoteObject
```

Reads the remote object from **MessageSequence**. You can use this API to deserialize the **MessageSequence** object to generate an **IRemoteObject**. The remote object is read in the order in which it is written to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readRemoteObject(): IRemoteObject--><!--Device-MessageSequence-readRemoteObject(): IRemoteObject-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| [IRemoteObject](arkts-ipc-rpc-iremoteobject-c.md) | Remote object obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900008](../errorcode-rpc.md#1900008-invalid-ipc-object) | The proxy or remote object is invalid. |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    // Process services based on the actual service logic.
    return true;
  }
}

try {
  let data = rpc.MessageSequence.create();
  let testRemoteObject = new TestRemoteObject("testObject");
  data.writeRemoteObject(testRemoteObject);
  let proxy = data.readRemoteObject();
  hilog.info(0x0000, 'testTag', 'readRemoteObject is ' + proxy);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readremoteobjectarray"></a>
## readRemoteObjectArray

```TypeScript
readRemoteObjectArray(objects: IRemoteObject[]): void
```

Reads the **IRemoteObject** array from this **MessageSequence** object and writes it to the created empty array.

**Since:** 9

<!--Device-MessageSequence-readRemoteObjectArray(objects: IRemoteObject[]): void--><!--Device-MessageSequence-readRemoteObjectArray(objects: IRemoteObject[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| objects | [IRemoteObject](arkts-ipc-rpc-iremoteobject-c.md)[] | Yes | **IRemoteObject** array to read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match;4.The length of the array passed when reading is not equal to the length passed when writing to the array. |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    // Process services based on the actual service logic.
    return true;
  }
}

try {
  let a = [new TestRemoteObject("testObject1"), new TestRemoteObject("testObject2"), new TestRemoteObject("testObject3")];
  let data = rpc.MessageSequence.create();
  data.writeRemoteObjectArray(a);
  let b: Array<rpc.IRemoteObject> = new Array(3);
  data.readRemoteObjectArray(b);
  hilog.info(0x0000, 'testTag', 'readRemoteObjectArray is ' + b);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readremoteobjectarray-1"></a>
## readRemoteObjectArray

```TypeScript
readRemoteObjectArray(): IRemoteObject[]
```

Reads the **IRemoteObject** array from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readRemoteObjectArray(): IRemoteObject[]--><!--Device-MessageSequence-readRemoteObjectArray(): IRemoteObject[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| [IRemoteObject](arkts-ipc-rpc-iremoteobject-c.md)[] | The **IRemoteObject** array is returned. If an empty array is written, **null** is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    // Process services based on the actual service logic.
    return true;
  }
}

try {
  let a = [new TestRemoteObject("testObject1"), new TestRemoteObject("testObject2"), new TestRemoteObject("testObject3")];
  let data = rpc.MessageSequence.create();
  let b = data.readRemoteObjectArray();
  hilog.info(0x0000, 'testTag', 'readRemoteObjectArray is ' + b);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readshort"></a>
## readShort

```TypeScript
readShort(): number
```

Reads the short integer from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readShort(): int--><!--Device-MessageSequence-readShort(): int-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Short integer read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeShort(8);
  let ret = data.readShort();
  hilog.info(0x0000, 'testTag', 'readShort is ' + ret);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readshortarray"></a>
## readShortArray

```TypeScript
readShortArray(dataIn: number[]): void
```

Reads the short array from this **MessageSequence** object and writes it to the created empty array.

**Since:** 9

<!--Device-MessageSequence-readShortArray(dataIn: int[]): void--><!--Device-MessageSequence-readShortArray(dataIn: int[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | number[] | Yes | Short array to read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match. |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeShortArray([11, 12, 13]);
  let array: Array<number> = new Array(3);
  data.readShortArray(array);
  hilog.info(0x0000, 'testTag', 'readShortArray is  ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readshortarray-1"></a>
## readShortArray

```TypeScript
readShortArray(): number[]
```

Reads the short array from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readShortArray(): int[]--><!--Device-MessageSequence-readShortArray(): int[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Short array read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeShortArray([11, 12, 13]);
  let array = data.readShortArray();
  hilog.info(0x0000, 'testTag', 'readShortArray is ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readstring"></a>
## readString

```TypeScript
readString(): string
```

Reads the string from this **MessageSequence** object.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MessageSequence-readString(): string--><!--Device-MessageSequence-readString(): string-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | String read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeString('abc');
  let ret = data.readString();
  hilog.info(0x0000, 'testTag', 'readString is ' + ret);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readstringarray"></a>
## readStringArray

```TypeScript
readStringArray(dataIn: string[]): void
```

Reads the string array from this **MessageSequence** object and writes it to the created empty array.

**Since:** 9

<!--Device-MessageSequence-readStringArray(dataIn: string[]): void--><!--Device-MessageSequence-readStringArray(dataIn: string[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | string[] | Yes | String array to read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match. |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeStringArray(["abc", "def"]);
  let array: Array<string> = new Array(2);
  data.readStringArray(array);
  hilog.info(0x0000, 'testTag', 'readStringArray is ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="readstringarray-1"></a>
## readStringArray

```TypeScript
readStringArray(): string[]
```

Reads the string array from this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-readStringArray(): string[]--><!--Device-MessageSequence-readStringArray(): string[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| string[] | String array read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeStringArray(["abc", "def"]);
  let array = data.readStringArray();
  hilog.info(0x0000, 'testTag', 'readStringArray is ' + array);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="reclaim"></a>
## reclaim

```TypeScript
reclaim(): void
```

Reclaims the **MessageSequence** object that is no longer used.

**Since:** 9

<!--Device-MessageSequence-reclaim(): void--><!--Device-MessageSequence-reclaim(): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let reply = rpc.MessageSequence.create();
  reply.reclaim();
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="rewindread"></a>
## rewindRead

```TypeScript
rewindRead(pos: number): void
```

Moves the read pointer to the specified position.

**Since:** 9

<!--Device-MessageSequence-rewindRead(pos: int): void--><!--Device-MessageSequence-rewindRead(pos: int): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pos | number | Yes | Position from which data is to read. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900010](../errorcode-rpc.md#1900010-failed-to-read-data-from-messagesequence) | Failed to read data from the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeInt(12);
  data.writeString("sequence");
  let number = data.readInt();
  hilog.info(0x0000, 'testTag', 'number is ' + number);
  data.rewindRead(0);
  let number2 = data.readInt();
  hilog.info(0x0000, 'testTag', 'rewindRead is ' + number2);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="rewindwrite"></a>
## rewindWrite

```TypeScript
rewindWrite(pos: number): void
```

Moves the write pointer to the specified position.

**Since:** 9

<!--Device-MessageSequence-rewindWrite(pos: int): void--><!--Device-MessageSequence-rewindWrite(pos: int): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pos | number | Yes | Position from which data is to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeInt(4);
  data.rewindWrite(0);
  data.writeInt(5);
  let number = data.readInt();
  hilog.info(0x0000, 'testTag', 'rewindWrite is: ' + number);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="setcapacity"></a>
## setCapacity

```TypeScript
setCapacity(size: number): void
```

Sets the storage capacity of this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-setCapacity(size: int): void--><!--Device-MessageSequence-setCapacity(size: int): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Storage capacity of the **MessageSequence** object to set, in bytes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |
| [1900011](../errorcode-rpc.md#1900011-memory-allocation-failed) | Memory allocation failed. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.setCapacity(100);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="setsize"></a>
## setSize

```TypeScript
setSize(size: number): void
```

Sets the size of the data contained in this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-setSize(size: int): void--><!--Device-MessageSequence-setSize(size: int): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Data size to set, in bytes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeString('Hello World');
  data.setSize(16);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writearraybuffer"></a>
## writeArrayBuffer

```TypeScript
writeArrayBuffer(buf: ArrayBuffer, typeCode: TypeCode): void
```

Writes data of the ArrayBuffer type to this **MessageSequence** object.

**Since:** 12

<!--Device-MessageSequence-writeArrayBuffer(buf: ArrayBuffer, typeCode: TypeCode): void--><!--Device-MessageSequence-writeArrayBuffer(buf: ArrayBuffer, typeCode: TypeCode): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buf | ArrayBuffer | Yes | Data to write. |
| typeCode | [TypeCode](arkts-ipc-rpc-typecode-e.md) | Yes | TypedArray type of the ArrayBuffer data.<br>The underlying write mode is determined based on the enum value of **TypeCode** passed by the service. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match;4.The obtained value of typeCode is incorrect;5.Failed to obtain arrayBuffer information. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
// In this example, the value of TypeCode is Int16Array.
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  let buffer = new ArrayBuffer(10);
  let int16View = new Int16Array(buffer);
  for (let i = 0; i < int16View.length; i++) {
    int16View[i] = i * 2 + 1;
  }
  data.writeArrayBuffer(buffer, rpc.TypeCode.INT16_ARRAY);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writeashmem"></a>
## writeAshmem

```TypeScript
writeAshmem(ashmem: Ashmem): void
```

Writes an anonymous shared object to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeAshmem(ashmem: Ashmem): void--><!--Device-MessageSequence-writeAshmem(ashmem: Ashmem): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ashmem | [Ashmem](arkts-ipc-rpc-ashmem-c.md) | Yes | Anonymous shared object to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter is not an instance of the Ashmem object. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let sequence = rpc.MessageSequence.create();
  let ashmem = rpc.Ashmem.create("ashmem", 1024);
  // Write data to ashmem.
  let buffer = new ArrayBuffer(1024);
  let int32View = new Int32Array(buffer);
  for (let i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2 + 1;
  }
  let size = buffer.byteLength;
  ashmem.mapReadWriteAshmem();
  ashmem.writeDataToAshmem(buffer, size, 0);
  // Write the ashmem object to the messageSequence object.
  sequence.writeAshmem(ashmem);
  // Write the size of the transferred data to this MessageSequence object.
  sequence.writeInt(size);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writeboolean"></a>
## writeBoolean

```TypeScript
writeBoolean(val: boolean): void
```

Writes a Boolean value to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeBoolean(val: boolean): void--><!--Device-MessageSequence-writeBoolean(val: boolean): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | boolean | Yes | Boolean value to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeBoolean(false);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writebooleanarray"></a>
## writeBooleanArray

```TypeScript
writeBooleanArray(booleanArray: boolean[]): void
```

Writes a Boolean array to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeBooleanArray(booleanArray: boolean[]): void--><!--Device-MessageSequence-writeBooleanArray(booleanArray: boolean[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| booleanArray | boolean[] | Yes | Boolean array to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match;4.The element does not exist in the array. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeBooleanArray([false, true, false]);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writebyte"></a>
## writeByte

```TypeScript
writeByte(val: number): void
```

Writes a byte value to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeByte(val: int): void--><!--Device-MessageSequence-writeByte(val: int): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | number | Yes | Byte value to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeByte(2);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writebytearray"></a>
## writeByteArray

```TypeScript
writeByteArray(byteArray: number[]): void
```

Writes a byte array to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeByteArray(byteArray: int[]): void--><!--Device-MessageSequence-writeByteArray(byteArray: int[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteArray | number[] | Yes | Byte array to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match;4.The element does not exist in the array.5.The type of the element in the array is incorrect. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  let ByteArrayVar = [1, 2, 3, 4, 5];
  data.writeByteArray(ByteArrayVar);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writechar"></a>
## writeChar

```TypeScript
writeChar(val: number): void
```

Writes a character to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeChar(val: int): void--><!--Device-MessageSequence-writeChar(val: int): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | number | Yes | **Char** value to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeChar(97);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writechararray"></a>
## writeCharArray

```TypeScript
writeCharArray(charArray: number[]): void
```

Writes a character array to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeCharArray(charArray: int[]): void--><!--Device-MessageSequence-writeCharArray(charArray: int[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| charArray | number[] | Yes | Character array to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match;4.The element does not exist in the array. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeCharArray([97, 98, 88]);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writedouble"></a>
## writeDouble

```TypeScript
writeDouble(val: number): void
```

Writes a double value to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeDouble(val: double): void--><!--Device-MessageSequence-writeDouble(val: double): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | number | Yes | Double value to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeDouble(10.2);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writedoublearray"></a>
## writeDoubleArray

```TypeScript
writeDoubleArray(doubleArray: number[]): void
```

Writes a double array to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeDoubleArray(doubleArray: double[]): void--><!--Device-MessageSequence-writeDoubleArray(doubleArray: double[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| doubleArray | number[] | Yes | Double array to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match;4.The element does not exist in the array;5.The type of the element in the array is incorrect. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeDoubleArray([11.1, 12.2, 13.3]);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writefiledescriptor"></a>
## writeFileDescriptor

```TypeScript
writeFileDescriptor(fd: number): void
```

Writes a file descriptor to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeFileDescriptor(fd: int): void--><!--Device-MessageSequence-writeFileDescriptor(fd: int): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let sequence = rpc.MessageSequence.create();
  let filePath = "path/to/file";
  let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
  sequence.writeFileDescriptor(file.fd);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writefloat"></a>
## writeFloat

```TypeScript
writeFloat(val: number): void
```

Writes a double value to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeFloat(val: double): void--><!--Device-MessageSequence-writeFloat(val: double): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | number | Yes | Double value to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeFloat(1.2);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writefloatarray"></a>
## writeFloatArray

```TypeScript
writeFloatArray(floatArray: number[]): void
```

Writes a double array to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeFloatArray(floatArray: double[]): void--><!--Device-MessageSequence-writeFloatArray(floatArray: double[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| floatArray | number[] | Yes | Double array to write. The system processes float data as that of the double type. Therefore, the total number of bytes occupied by a float array must be calculated as the double type. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match;4.The element does not exist in the array;5.The type of the element in the array is incorrect. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeFloatArray([1.2, 1.3, 1.4]);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writeint"></a>
## writeInt

```TypeScript
writeInt(val: number): void
```

Writes an integer to this **MessageSequence** object.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MessageSequence-writeInt(val: int): void--><!--Device-MessageSequence-writeInt(val: int): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | number | Yes | Integer to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeInt(10);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writeintarray"></a>
## writeIntArray

```TypeScript
writeIntArray(intArray: number[]): void
```

Writes an integer array to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeIntArray(intArray: int[]): void--><!--Device-MessageSequence-writeIntArray(intArray: int[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| intArray | number[] | Yes | Integer array to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match;4.The element does not exist in the array;5.The type of the element in the array is incorrect. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeIntArray([100, 111, 112]);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writeinterfacetoken"></a>
## writeInterfaceToken

```TypeScript
writeInterfaceToken(token: string): void
```

Writes an interface token to this **MessageSequence** object. The remote object can use this interface token to verify the communication.

**Since:** 9

<!--Device-MessageSequence-writeInterfaceToken(token: string): void--><!--Device-MessageSequence-writeInterfaceToken(token: string): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| token | string | Yes | Interface token to write. The length of the string must be less than 40960. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match;3.The string length is greater than or equal to 40960;4.The number of bytes copied to the buffer is different from the length of the obtained string. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeInterfaceToken("aaa");
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writelong"></a>
## writeLong

```TypeScript
writeLong(val: number): void
```

Writes a long integer to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeLong(val: long): void--><!--Device-MessageSequence-writeLong(val: long): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | number | Yes | Long integer to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeLong(10000);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writelongarray"></a>
## writeLongArray

```TypeScript
writeLongArray(longArray: number[]): void
```

Writes a long array to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeLongArray(longArray: long[]): void--><!--Device-MessageSequence-writeLongArray(longArray: long[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| longArray | number[] | Yes | Long array to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match;4.The element does not exist in the array;5.The type of the element in the array is incorrect. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeLongArray([1111, 1112, 1113]);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writenoexception"></a>
## writeNoException

```TypeScript
writeNoException(): void
```

Writes information to this **MessageSequence** object indicating that no exception occurred.

**Since:** 9

<!--Device-MessageSequence-writeNoException(): void--><!--Device-MessageSequence-writeNoException(): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    if (code === 1) {
      hilog.info(0x0000, 'testTag', 'RpcServer: onRemoteMessageRequest called');
      try {
        reply.writeNoException();
      } catch (error) {
        let e: BusinessError = error as BusinessError;
        hilog.error(0x0000, 'testTag', 'rpc write no exception fail, errorCode ' + e.code);
        hilog.error(0x0000, 'testTag', 'rpc write no exception fail, errorMessage ' + e.message);
      }
      return true;
    } else {
      hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
      return false;
    }
  }
}

```

<a id="writeparcelable"></a>
## writeParcelable

```TypeScript
writeParcelable(val: Parcelable): void
```

Writes a **Parcelable** object to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeParcelable(val: Parcelable): void--><!--Device-MessageSequence-writeParcelable(val: Parcelable): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | [Parcelable](arkts-ipc-rpc-parcelable-i.md) | Yes | **Parcelable** object to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class MyParcelable implements rpc.Parcelable {
  num: number = 0;
  str: string = '';
  constructor( num: number, str: string) {
    this.num = num;
    this.str = str;
  }
  marshalling(messageSequence: rpc.MessageSequence): boolean {
    messageSequence.writeInt(this.num);
    messageSequence.writeString(this.str);
    return true;
  }
  unmarshalling(messageSequence: rpc.MessageSequence): boolean {
    this.num = messageSequence.readInt();
    this.str = messageSequence.readString();
    return true;
  }
}

try {
  let parcelable = new MyParcelable(1, "aaa");
  let data = rpc.MessageSequence.create();
  data.writeParcelable(parcelable);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writeparcelablearray"></a>
## writeParcelableArray

```TypeScript
writeParcelableArray(parcelableArray: Parcelable[]): void
```

Writes the **Parcelable** array to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeParcelableArray(parcelableArray: Parcelable[]): void--><!--Device-MessageSequence-writeParcelableArray(parcelableArray: Parcelable[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| parcelableArray | [Parcelable](arkts-ipc-rpc-parcelable-i.md)[] | Yes | **Parcelable** array to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match;4.The element does not exist in the array. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class MyParcelable implements rpc.Parcelable {
  num: number = 0;
  str: string = '';
  constructor(num: number, str: string) {
    this.num = num;
    this.str = str;
  }
  marshalling(messageSequence: rpc.MessageSequence): boolean {
    messageSequence.writeInt(this.num);
    messageSequence.writeString(this.str);
    return true;
  }
  unmarshalling(messageSequence: rpc.MessageSequence): boolean {
    this.num = messageSequence.readInt();
    this.str = messageSequence.readString();
    return true;
  }
}

try {
  let parcelable = new MyParcelable(1, "aaa");
  let parcelable2 = new MyParcelable(2, "bbb");
  let parcelable3 = new MyParcelable(3, "ccc");
  let a = [parcelable, parcelable2, parcelable3];
  let data = rpc.MessageSequence.create();
  data.writeParcelableArray(a);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'rpc write parcelable array fail, errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'rpc write parcelable array fail, errorMessage ' + e.message);
}

```

<a id="writerawdata"></a>
## writeRawData

```TypeScript
writeRawData(rawData: number[], size: number): void
```

Writes raw data to this **MessageSequence** object.

> **NOTE**  
>  
> - This API cannot be called for multiple times in one parcel communication.  
>  
> - When the data volume is large (greater than 32 KB), the shared memory is used to transmit data. In this case,  
> pay attention to the SELinux configuration.

**Since:** 9

**Deprecated since:** 11

**Substitutes:** [writeRawDataBuffer(rawData:](arkts-ipc-rpc-messagesequence-c.md#writerawdatabuffer-1)

<!--Device-MessageSequence-writeRawData(rawData: number[], size: number): void--><!--Device-MessageSequence-writeRawData(rawData: number[], size: number): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rawData | number[] | Yes | Raw data to write. The size cannot exceed 128 MB. |
| size | number | Yes | Size of the raw data, in bytes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match;4.The transferred size cannot be obtained;5.The transferred size is less than or equal to 0;6.The element does not exist in the array;7.Failed to obtain typedArray information;8.The array is not of type int32;9.The length of typedarray is smaller than the size of the original data sent. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let sequence = rpc.MessageSequence.create();
  let arr = [1, 2, 3, 4, 5];
  sequence.writeRawData(arr, arr.length);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writerawdatabuffer"></a>
## writeRawDataBuffer

```TypeScript
writeRawDataBuffer(rawData: ArrayBuffer, size: number): void
```

Writes raw data to this **MessageSequence** object.

> **NOTE**  
>  
> - This API cannot be called for multiple times in one parcel communication.  
>  
> - When the data volume is large (greater than 32 KB), the shared memory is used to transmit data. In this case,  
> pay attention to the SELinux configuration.

**Since:** 11

<!--Device-MessageSequence-writeRawDataBuffer(rawData: ArrayBuffer, size: int): void--><!--Device-MessageSequence-writeRawDataBuffer(rawData: ArrayBuffer, size: int): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rawData | ArrayBuffer | Yes | Raw data to write. The size cannot exceed 128 MB. |
| size | number | Yes | Size of the raw data, in bytes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match;3.Failed to obtain arrayBuffer information;4.The transferred size cannot be obtained;5.The transferred size is less than or equal to 0;6.The transferred size is greater than the byte length of ArrayBuffer. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let buffer = new ArrayBuffer(64 * 1024);
  let int32View = new Int32Array(buffer);
  for (let i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2 + 1;
  }
  let size = buffer.byteLength;
  let sequence = rpc.MessageSequence.create();
  sequence.writeRawDataBuffer(buffer, size);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writeremoteobject"></a>
## writeRemoteObject

```TypeScript
writeRemoteObject(obj: IRemoteObject): void
```

Serializes the remote object and writes it to the [MessageSequence](arkts-ipc-rpc-messagesequence-c.md) object.

**Since:** 9

<!--Device-MessageSequence-writeRemoteObject(obj: IRemoteObject): void--><!--Device-MessageSequence-writeRemoteObject(obj: IRemoteObject): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| obj | [IRemoteObject](arkts-ipc-rpc-iremoteobject-c.md) | Yes | Remote object to serialize and write to the **MessageSequence** object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900008](../errorcode-rpc.md#1900008-invalid-ipc-object) | The proxy or remote object is invalid. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    // Process services based on the actual service logic.
    return true;
  }
}

try {
  let data = rpc.MessageSequence.create();
  let testRemoteObject = new TestRemoteObject("testObject");
  data.writeRemoteObject(testRemoteObject);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writeremoteobjectarray"></a>
## writeRemoteObjectArray

```TypeScript
writeRemoteObjectArray(objectArray: IRemoteObject[]): void
```

Writes an **IRemoteObject** array to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeRemoteObjectArray(objectArray: IRemoteObject[]): void--><!--Device-MessageSequence-writeRemoteObjectArray(objectArray: IRemoteObject[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| objectArray | [IRemoteObject](arkts-ipc-rpc-iremoteobject-c.md)[] | Yes | **IRemoteObject** array to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match;4.The element does not exist in the array;5.The obtained remoteObject is null. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteMessageRequest(code: number, data: rpc.MessageSequence, reply: rpc.MessageSequence,
    option: rpc.MessageOption): boolean | Promise<boolean> {
    // Process services based on the actual service logic.
    return true;
  }
}

try {
  let a = [new TestRemoteObject("testObject1"), new TestRemoteObject("testObject2"), new TestRemoteObject("testObject3")];
  let data = rpc.MessageSequence.create();
  data.writeRemoteObjectArray(a);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writeshort"></a>
## writeShort

```TypeScript
writeShort(val: number): void
```

Writes a short integer to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeShort(val: int): void--><!--Device-MessageSequence-writeShort(val: int): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | number | Yes | Short integer to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeShort(8);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writeshortarray"></a>
## writeShortArray

```TypeScript
writeShortArray(shortArray: number[]): void
```

Writes a short array to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeShortArray(shortArray: int[]): void--><!--Device-MessageSequence-writeShortArray(shortArray: int[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shortArray | number[] | Yes | Short array to write. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match;4.The element does not exist in the array;5.The type of the element in the array is incorrect. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeShortArray([11, 12, 13]);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writestring"></a>
## writeString

```TypeScript
writeString(val: string): void
```

Writes a string to this **MessageSequence** object.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-MessageSequence-writeString(val: string): void--><!--Device-MessageSequence-writeString(val: string): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | string | Yes | String to write. The length of the string must be less than 40960. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The number of parameters is incorrect;2.The parameter type does not match;3.The string length is greater than or equal to 40960;4.The number of bytes copied to the buffer is different from the length of the obtained string. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeString('abc');
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

<a id="writestringarray"></a>
## writeStringArray

```TypeScript
writeStringArray(stringArray: string[]): void
```

Writes a string array to this **MessageSequence** object.

**Since:** 9

<!--Device-MessageSequence-writeStringArray(stringArray: string[]): void--><!--Device-MessageSequence-writeStringArray(stringArray: string[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| stringArray | string[] | Yes | String array to write. The length of a single element in the array must be less than 40960. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:1.The parameter is an empty array;2.The number of parameters is incorrect;3.The parameter type does not match;4.The string length is greater than or equal to 40960;5.The number of bytes copied to the buffer is different from the length of the obtained string. |
| [1900009](../errorcode-rpc.md#1900009-failed-to-write-data-to-messagesequence) | Failed to write data to the message sequence. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let data = rpc.MessageSequence.create();
  data.writeStringArray(["abc", "def"]);
} catch (error) {
  let e: BusinessError = error as BusinessError;
  hilog.error(0x0000, 'testTag', 'errorCode ' + e.code);
  hilog.error(0x0000, 'testTag', 'errorMessage ' + e.message);
}

```

