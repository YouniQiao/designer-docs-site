# MessageParcel

Provides APIs for reading and writing data in specific format. During RPC, the sender can use the **write()** method provided by **MessageParcel** to write data in specific format to a **MessageParcel** object. The receiver can use the **read()** method provided by **MessageParcel** to read data in specific format from a **MessageParcel** object. The data formats include basic data types and arrays, IPC objects, interface tokens,and custom sequenceable objects.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [MessageSequence](arkts-ipc-rpc-messagesequence-c.md)

<!--Device-rpc-class MessageParcel--><!--Device-rpc-class MessageParcel-End-->

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

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [closeFileDescriptor(fd:](arkts-ipc-rpc-messagesequence-c.md#closefiledescriptor-1)

<!--Device-MessageParcel-static closeFileDescriptor(fd: number): void--><!--Device-MessageParcel-static closeFileDescriptor(fd: number): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor to close. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let filePath = "path/to/file";
  let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
  rpc.MessageParcel.closeFileDescriptor(file.fd);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="containfiledescriptors"></a>
## containFileDescriptors

```TypeScript
containFileDescriptors(): boolean
```

Checks whether this **MessageParcel** object contains file descriptors.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [containFileDescriptors()](arkts-ipc-rpc-messagesequence-c.md#containfiledescriptors-1)

<!--Device-MessageParcel-containFileDescriptors(): boolean--><!--Device-MessageParcel-containFileDescriptors(): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the **MessageParcel** object contains file descriptors; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let parcel = new rpc.MessageParcel();
  let filePath = "path/to/file";
  let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
  let writeResult = parcel.writeFileDescriptor(file.fd);
  hilog.info(0x0000, 'testTag', 'parcel writeFd result is ' + writeResult);
  let containFD = parcel.containFileDescriptors();
  hilog.info(0x0000, 'testTag', 'parcel after write fd containFd result is ' + containFD);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="create"></a>
## create

```TypeScript
static create(): MessageParcel
```

Creates a **MessageParcel** object. This method is a static method.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [create()](arkts-ipc-rpc-messagesequence-c.md#create-1)

<!--Device-MessageParcel-static create(): MessageParcel--><!--Device-MessageParcel-static create(): MessageParcel-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| [MessageParcel](arkts-ipc-rpc-messageparcel-c.md) | **MessageParcel** object created. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  hilog.info(0x0000, 'testTag', 'data is ' + data);

  // When the MessageParcel object is no longer used, the service calls the reclaim method to release resources.
  data.reclaim();
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="dupfiledescriptor"></a>
## dupFileDescriptor

```TypeScript
static dupFileDescriptor(fd: number): number
```

Duplicates a file descriptor. This API is a static method.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [dupFileDescriptor(fd:](arkts-ipc-rpc-messagesequence-c.md#dupfiledescriptor-1)

<!--Device-MessageParcel-static dupFileDescriptor(fd: number): number--><!--Device-MessageParcel-static dupFileDescriptor(fd: number): number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor to duplicate. |

**Return value:**

| Type | Description |
| --- | --- |
| number | New file descriptor. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let filePath = "path/to/file";
  let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
  rpc.MessageParcel.dupFileDescriptor(file.fd);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="getcapacity"></a>
## getCapacity

```TypeScript
getCapacity(): number
```

Obtains the capacity of this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [getCapacity()](arkts-ipc-rpc-messagesequence-c.md#getcapacity-1)

<!--Device-MessageParcel-getCapacity(): number--><!--Device-MessageParcel-getCapacity(): number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | **MessageParcel** capacity obtained, in bytes. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.getCapacity();
  hilog.info(0x0000, 'testTag', 'capacity is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="getrawdatacapacity"></a>
## getRawDataCapacity

```TypeScript
getRawDataCapacity(): number
```

Obtains the maximum amount of raw data that can be held by this **MessageParcel** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getRawDataCapacity()](arkts-ipc-rpc-messagesequence-c.md#getrawdatacapacity-1)

<!--Device-MessageParcel-getRawDataCapacity(): number--><!--Device-MessageParcel-getRawDataCapacity(): number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Maximum amount of raw data that **MessageParcel** can hold, that is, 128 MB. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let parcel = new rpc.MessageParcel();
  let result = parcel.getRawDataCapacity();
  hilog.info(0x0000, 'testTag', 'parcel get RawDataCapacity result is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="getreadposition"></a>
## getReadPosition

```TypeScript
getReadPosition(): number
```

Obtains the read position of this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [getReadPosition()](arkts-ipc-rpc-messagesequence-c.md#getreadposition-1)

<!--Device-MessageParcel-getReadPosition(): number--><!--Device-MessageParcel-getReadPosition(): number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Current read position of the **MessageParcel** object. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let readPos = data.getReadPosition();
  hilog.info(0x0000, 'testTag', 'readPos is ' + readPos);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="getreadablebytes"></a>
## getReadableBytes

```TypeScript
getReadableBytes(): number
```

Obtains the readable capacity of this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [getReadableBytes()](arkts-ipc-rpc-messagesequence-c.md#getreadablebytes-1)

<!--Device-MessageParcel-getReadableBytes(): number--><!--Device-MessageParcel-getReadableBytes(): number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | **MessageParcel** object readable capacity, in bytes. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  data.writeInt(1);
  let result = data.getReadableBytes();
  hilog.info(0x0000, 'testTag', 'RpcServer: getReadableBytes is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="getsize"></a>
## getSize

```TypeScript
getSize(): number
```

Obtains the data size of this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [getSize()](arkts-ipc-rpc-messagesequence-c.md#getsize-1)

<!--Device-MessageParcel-getSize(): number--><!--Device-MessageParcel-getSize(): number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Size of the **MessageParcel** object obtained, in bytes. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  data.writeInt(1);
  let size = data.getSize();
  hilog.info(0x0000, 'testTag', 'size is ' + size);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="getwritablebytes"></a>
## getWritableBytes

```TypeScript
getWritableBytes(): number
```

Obtains the writable capacity of this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [getWritableBytes()](arkts-ipc-rpc-messagesequence-c.md#getwritablebytes-1)

<!--Device-MessageParcel-getWritableBytes(): number--><!--Device-MessageParcel-getWritableBytes(): number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | **MessageParcel** writable capacity obtained, in bytes. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  data.writeInt(1);
  let getWritableBytes = data.getWritableBytes();
  hilog.info(0x0000, 'testTag', 'RpcServer: getWritableBytes is ' + getWritableBytes);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="getwriteposition"></a>
## getWritePosition

```TypeScript
getWritePosition(): number
```

Obtains the write position of this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [getWritePosition()](arkts-ipc-rpc-messagesequence-c.md#getwriteposition-1)

<!--Device-MessageParcel-getWritePosition(): number--><!--Device-MessageParcel-getWritePosition(): number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Current write position of the **MessageParcel** object. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  data.writeInt(10);
  let bwPos = data.getWritePosition();
  hilog.info(0x0000, 'testTag', 'bwPos is ' + bwPos);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readashmem"></a>
## readAshmem

```TypeScript
readAshmem(): Ashmem
```

Reads the anonymous shared object from this **MessageParcel** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [readAshmem()](arkts-ipc-rpc-messagesequence-c.md#readashmem-1)

<!--Device-MessageParcel-readAshmem(): Ashmem--><!--Device-MessageParcel-readAshmem(): Ashmem-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Ashmem](arkts-ipc-rpc-ashmem-c.md) | Anonymous share object obtained. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let parcel = new rpc.MessageParcel();
  let ashmem = rpc.Ashmem.createAshmem("ashmem", 1024);
  let isWriteSuccess = parcel.writeAshmem(ashmem);
  hilog.info(0x0000, 'testTag', 'write ashmem to result is ' + isWriteSuccess);
  let readAshmem = parcel.readAshmem();
  hilog.info(0x0000, 'testTag', 'read ashmem to result is ' + readAshmem);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readboolean"></a>
## readBoolean

```TypeScript
readBoolean(): boolean
```

Reads the Boolean value from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readBoolean()](arkts-ipc-rpc-messagesequence-c.md#readboolean-1)

<!--Device-MessageParcel-readBoolean(): boolean--><!--Device-MessageParcel-readBoolean(): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Boolean value read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeBoolean(false);
  hilog.info(0x0000, 'testTag', 'writeBoolean is ' + result);
  let ret = data.readBoolean();
  hilog.info(0x0000, 'testTag', 'readBoolean is ' + ret);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readbooleanarray"></a>
## readBooleanArray

```TypeScript
readBooleanArray(dataIn: boolean[]): void
```

Reads the Boolean array from this **MessageParcel** object and writes it to the created empty array.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readBooleanArray(dataIn:](arkts-ipc-rpc-messagesequence-c.md#readbooleanarray-1)

<!--Device-MessageParcel-readBooleanArray(dataIn: boolean[]): void--><!--Device-MessageParcel-readBooleanArray(dataIn: boolean[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | boolean[] | Yes | Boolean array to read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeBooleanArray([false, true, false]);
  hilog.info(0x0000, 'testTag', 'writeBooleanArray is ' + result);
  let array: Array<boolean> = new Array(3);
  data.readBooleanArray(array);
  hilog.info(0x0000, 'testTag', 'readBooleanArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readbooleanarray-1"></a>
## readBooleanArray

```TypeScript
readBooleanArray(): boolean[]
```

Reads the Boolean array from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readBooleanArray()](arkts-ipc-rpc-messagesequence-c.md#readbooleanarray-1)

<!--Device-MessageParcel-readBooleanArray(): boolean[]--><!--Device-MessageParcel-readBooleanArray(): boolean[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean[] | Boolean array read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeBooleanArray([false, true, false]);
  hilog.info(0x0000, 'testTag', 'writeBooleanArray is ' + result);
  let array = data.readBooleanArray();
  hilog.info(0x0000, 'testTag', 'readBooleanArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readbyte"></a>
## readByte

```TypeScript
readByte(): number
```

Reads the byte value from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readByte()](arkts-ipc-rpc-messagesequence-c.md#readbyte-1)

<!--Device-MessageParcel-readByte(): number--><!--Device-MessageParcel-readByte(): number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Byte value read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeByte(2);
  hilog.info(0x0000, 'testTag', 'writeByte is ' + result);
  let ret = data.readByte();
  hilog.info(0x0000, 'testTag', 'readByte is ' + ret);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readbytearray"></a>
## readByteArray

```TypeScript
readByteArray(dataIn: number[]): void
```

Reads the byte array from this **MessageParcel** object and writes it to the created empty array.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readByteArray(dataIn:](arkts-ipc-rpc-messagesequence-c.md#readbytearray-1)

<!--Device-MessageParcel-readByteArray(dataIn: number[]): void--><!--Device-MessageParcel-readByteArray(dataIn: number[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | number[] | Yes | Byte array to read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let ByteArrayVar = [1, 2, 3, 4, 5];
  let result = data.writeByteArray(ByteArrayVar);
  let array: Array<number> = new Array(5);
  data.readByteArray(array);
  hilog.info(0x0000, 'testTag', 'readByteArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readbytearray-1"></a>
## readByteArray

```TypeScript
readByteArray(): number[]
```

Reads the byte array from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readByteArray()](arkts-ipc-rpc-messagesequence-c.md#readbytearray-1)

<!--Device-MessageParcel-readByteArray(): number[]--><!--Device-MessageParcel-readByteArray(): number[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Byte array read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let ByteArrayVar = [1, 2, 3, 4, 5];
  let result = data.writeByteArray(ByteArrayVar);
  hilog.info(0x0000, 'testTag', 'writeByteArray is ' + result);
  let array = data.readByteArray();
  hilog.info(0x0000, 'testTag', 'readByteArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readchar"></a>
## readChar

```TypeScript
readChar(): number
```

Reads the single character value from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readChar()](arkts-ipc-rpc-messagesequence-c.md#readchar-1)

<!--Device-MessageParcel-readChar(): number--><!--Device-MessageParcel-readChar(): number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | **Char** value read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeChar(97);
  hilog.info(0x0000, 'testTag', 'writeChar is ' + result);
  let ret = data.readChar();
  hilog.info(0x0000, 'testTag', 'readChar is ' + ret);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readchararray"></a>
## readCharArray

```TypeScript
readCharArray(dataIn: number[]): void
```

Reads the character array from this **MessageParcel** object and writes it to the created empty array.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readCharArray(dataIn:](arkts-ipc-rpc-messagesequence-c.md#readchararray-1)

<!--Device-MessageParcel-readCharArray(dataIn: number[]): void--><!--Device-MessageParcel-readCharArray(dataIn: number[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | number[] | Yes | Character array to read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeCharArray([97, 98, 99]);
  hilog.info(0x0000, 'testTag', 'writeCharArray is ' + result);
  let array: Array<number> = new Array(3);
  data.readCharArray(array);
  hilog.info(0x0000, 'testTag', 'writeCharArray is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readchararray-1"></a>
## readCharArray

```TypeScript
readCharArray(): number[]
```

Reads the single character array from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readCharArray()](arkts-ipc-rpc-messagesequence-c.md#readchararray-1)

<!--Device-MessageParcel-readCharArray(): number[]--><!--Device-MessageParcel-readCharArray(): number[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Character array read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeCharArray([97, 98, 99]);
  hilog.info(0x0000, 'testTag', 'writeCharArray is ' + result);
  let array = data.readCharArray();
  hilog.info(0x0000, 'testTag', 'readCharArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readdouble"></a>
## readDouble

```TypeScript
readDouble(): number
```

Reads the double value from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readDouble()](arkts-ipc-rpc-messagesequence-c.md#readdouble-1)

<!--Device-MessageParcel-readDouble(): number--><!--Device-MessageParcel-readDouble(): number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Double value read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeDouble(10.2);
  hilog.info(0x0000, 'testTag', 'writeDouble is ' + result);
  let ret = data.readDouble();
  hilog.info(0x0000, 'testTag', 'readDouble is ' + ret);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readdoublearray"></a>
## readDoubleArray

```TypeScript
readDoubleArray(dataIn: number[]): void
```

Reads the double array from this **MessageParcel** object and writes it to the created empty array.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readDoubleArray(dataIn:](arkts-ipc-rpc-messagesequence-c.md#readdoublearray-1)

<!--Device-MessageParcel-readDoubleArray(dataIn: number[]): void--><!--Device-MessageParcel-readDoubleArray(dataIn: number[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | number[] | Yes | Double array to read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeDoubleArray([11.1, 12.2, 13.3]);
  hilog.info(0x0000, 'testTag', 'writeDoubleArray is ' + result);
  let array: Array<number> = new Array(3);
  data.readDoubleArray(array);
  hilog.info(0x0000, 'testTag', 'readDoubleArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readdoublearray-1"></a>
## readDoubleArray

```TypeScript
readDoubleArray(): number[]
```

Reads the double array from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readDoubleArray()](arkts-ipc-rpc-messagesequence-c.md#readdoublearray-1)

<!--Device-MessageParcel-readDoubleArray(): number[]--><!--Device-MessageParcel-readDoubleArray(): number[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Double array read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeDoubleArray([11.1, 12.2, 13.3]);
  hilog.info(0x0000, 'testTag', 'writeDoubleArray is ' + result);
  let array = data.readDoubleArray();
  hilog.info(0x0000, 'testTag', 'readDoubleArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readexception"></a>
## readException

```TypeScript
readException(): void
```

Reads the exception information from this **MessageParcel** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [readException()](arkts-ipc-rpc-messagesequence-c.md#readexception-1)

<!--Device-MessageParcel-readException(): void--><!--Device-MessageParcel-readException(): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

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

The proxy object in the onConnect callback can be assigned a value only after the ability is connected asynchronously. Then, sendRequest() of the proxy object is called to send a message.

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try { 
  let option = new rpc.MessageOption();
  let data = rpc.MessageParcel.create();
  let reply = rpc.MessageParcel.create();
  data.writeNoException();
  data.writeString('hello');
  if (proxy != undefined) {
    let a = proxy.sendRequest(1, data, reply, option) as Object;
    let b = a as Promise<rpc.SendRequestResult>;
    b.then((result: rpc.SendRequestResult) => {
      if (result.errCode === 0) {
        hilog.info(0x0000, 'testTag', 'sendRequest got result');
        result.reply.readException();
        let msg = result.reply.readString();
        hilog.info(0x0000, 'testTag', 'reply msg: ' + msg);
      } else {
        hilog.error(0x0000, 'testTag', 'sendRequest failed, errCode: ' + result.errCode);
      }
    }).catch((e: Error) => {
      hilog.error(0x0000, 'testTag', 'sendRequest got exception: ' + JSON.stringify(e));
    }).finally (() => {
      hilog.info(0x0000, 'testTag', 'sendRequest ends, reclaim parcel');
      data.reclaim();
      reply.reclaim();
    });
  }
} catch (error) { 
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readfiledescriptor"></a>
## readFileDescriptor

```TypeScript
readFileDescriptor(): number
```

Reads the file descriptor from this **MessageParcel** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [readFileDescriptor()](arkts-ipc-rpc-messagesequence-c.md#readfiledescriptor-1)

<!--Device-MessageParcel-readFileDescriptor(): number--><!--Device-MessageParcel-readFileDescriptor(): number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | File descriptor read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let parcel = new rpc.MessageParcel();
  let filePath = "path/to/file";
  let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
  parcel.writeFileDescriptor(file.fd);
  let readFD = parcel.readFileDescriptor();
  hilog.info(0x0000, 'testTag', 'parcel read fd is ' + readFD);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readfloat"></a>
## readFloat

```TypeScript
readFloat(): number
```

Reads the double value from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readFloat()](arkts-ipc-rpc-messagesequence-c.md#readfloat-1)

<!--Device-MessageParcel-readFloat(): number--><!--Device-MessageParcel-readFloat(): number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Double value read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeFloat(1.2);
  hilog.info(0x0000, 'testTag', 'writeFloat is ' + result);
  let ret = data.readFloat();
  hilog.info(0x0000, 'testTag', 'readFloat is ' + ret);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readfloatarray"></a>
## readFloatArray

```TypeScript
readFloatArray(dataIn: number[]): void
```

Reads the double array from this **MessageParcel** object and writes it to the created empty array.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readFloatArray(dataIn:](arkts-ipc-rpc-messagesequence-c.md#readfloatarray-1)

<!--Device-MessageParcel-readFloatArray(dataIn: number[]): void--><!--Device-MessageParcel-readFloatArray(dataIn: number[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | number[] | Yes | Double array to read. The system processes float data as that of the double type.Therefore, the total number of bytes occupied by a float array must be calculated as the double type. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeFloatArray([1.2, 1.3, 1.4]);
  hilog.info(0x0000, 'testTag', 'writeFloatArray is ' + result);
  let array: Array<number> = new Array(3);
  data.readFloatArray(array);
  hilog.info(0x0000, 'testTag', 'readFloatArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readfloatarray-1"></a>
## readFloatArray

```TypeScript
readFloatArray(): number[]
```

Reads the double array from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readFloatArray()](arkts-ipc-rpc-messagesequence-c.md#readfloatarray-1)

<!--Device-MessageParcel-readFloatArray(): number[]--><!--Device-MessageParcel-readFloatArray(): number[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Double array read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeFloatArray([1.2, 1.3, 1.4]);
  hilog.info(0x0000, 'testTag', 'writeFloatArray is ' + result);
  let array = data.readFloatArray();
  hilog.info(0x0000, 'testTag', 'readFloatArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readint"></a>
## readInt

```TypeScript
readInt(): number
```

Reads the integer from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readInt()](arkts-ipc-rpc-messagesequence-c.md#readint-1)

<!--Device-MessageParcel-readInt(): number--><!--Device-MessageParcel-readInt(): number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Integer read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeInt(10);
  hilog.info(0x0000, 'testTag', 'writeInt is ' + result);
  let ret = data.readInt();
  hilog.info(0x0000, 'testTag', 'readInt is ' + ret);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readintarray"></a>
## readIntArray

```TypeScript
readIntArray(dataIn: number[]): void
```

Reads the integer array from this **MessageParcel** object and writes it to the created empty array.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readIntArray(dataIn:](arkts-ipc-rpc-messagesequence-c.md#readintarray-1)

<!--Device-MessageParcel-readIntArray(dataIn: number[]): void--><!--Device-MessageParcel-readIntArray(dataIn: number[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | number[] | Yes | Integer array to read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeIntArray([100, 111, 112]);
  hilog.info(0x0000, 'testTag', 'writeIntArray is ' + result);
  let array: Array<number> = new Array(3);
  data.readIntArray(array);
  hilog.info(0x0000, 'testTag', 'readIntArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readintarray-1"></a>
## readIntArray

```TypeScript
readIntArray(): number[]
```

Reads the integer array from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readIntArray()](arkts-ipc-rpc-messagesequence-c.md#readintarray-1)

<!--Device-MessageParcel-readIntArray(): number[]--><!--Device-MessageParcel-readIntArray(): number[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Integer array read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeIntArray([100, 111, 112]);
  hilog.info(0x0000, 'testTag', 'writeIntArray is ' + result);
  let array = data.readIntArray();
  hilog.info(0x0000, 'testTag', 'readIntArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readinterfacetoken"></a>
## readInterfaceToken

```TypeScript
readInterfaceToken(): string
```

Reads the interface token from this **MessageParcel** object. The interface token is read in the sequence in which it is written to the **MessageParcel** object. The local object can use it to verify the communication.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readInterfaceToken()](arkts-ipc-rpc-messagesequence-c.md#readinterfacetoken-1)

<!--Device-MessageParcel-readInterfaceToken(): string--><!--Device-MessageParcel-readInterfaceToken(): string-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Interface token obtained. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeInterfaceToken("aaa");
  let interfaceToken = data.readInterfaceToken();
  hilog.info(0x0000, 'testTag', 'RpcServer: interfaceToken is ' + interfaceToken);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readlong"></a>
## readLong

```TypeScript
readLong(): number
```

Reads the long int value from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readLong()](arkts-ipc-rpc-messagesequence-c.md#readlong-1)

<!--Device-MessageParcel-readLong(): number--><!--Device-MessageParcel-readLong(): number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Long integer read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeLong(10000);
  hilog.info(0x0000, 'testTag', 'writeLong is ' + result);
  let ret = data.readLong();
  hilog.info(0x0000, 'testTag', 'readLong is ' + ret);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readlongarray"></a>
## readLongArray

```TypeScript
readLongArray(dataIn: number[]): void
```

Reads the long array from this **MessageParcel** object and writes it to the created empty array.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readLongArray(dataIn:](arkts-ipc-rpc-messagesequence-c.md#readlongarray-1)

<!--Device-MessageParcel-readLongArray(dataIn: number[]): void--><!--Device-MessageParcel-readLongArray(dataIn: number[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | number[] | Yes | Long array to read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeLongArray([1111, 1112, 1113]);
  hilog.info(0x0000, 'testTag', 'writeLongArray is ' + result);
  let array: Array<number> = new Array(3);
  data.readLongArray(array);
  hilog.info(0x0000, 'testTag', 'readLongArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readlongarray-1"></a>
## readLongArray

```TypeScript
readLongArray(): number[]
```

Reads the long array from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readLongArray()](arkts-ipc-rpc-messagesequence-c.md#readlongarray-1)

<!--Device-MessageParcel-readLongArray(): number[]--><!--Device-MessageParcel-readLongArray(): number[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Long array read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeLongArray([1111, 1112, 1113]);
  hilog.info(0x0000, 'testTag', 'writeLongArray is ' + result);
  let array = data.readLongArray();
  hilog.info(0x0000, 'testTag', 'readLongArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readrawdata"></a>
## readRawData

```TypeScript
readRawData(size: number): number[]
```

Reads raw data from this **MessageParcel** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [readRawDataBuffer(size:](arkts-ipc-rpc-messagesequence-c.md#readrawdatabuffer-1)

<!--Device-MessageParcel-readRawData(size: number): number[]--><!--Device-MessageParcel-readRawData(size: number): number[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Size of the raw data to read. |

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Raw data obtained, in bytes. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let parcel = new rpc.MessageParcel();
  let arr = [1, 2, 3, 4, 5];
  let isWriteSuccess = parcel.writeRawData(arr, arr.length);
  hilog.info(0x0000, 'testTag', 'parcel write raw data result is ' + isWriteSuccess);
  let result = parcel.readRawData(5);
  hilog.info(0x0000, 'testTag', 'parcel read raw data result is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readremoteobject"></a>
## readRemoteObject

```TypeScript
readRemoteObject(): IRemoteObject
```

Reads the remote object from this **MessageParcel** object. You can use this method to deserialize the **MessageParcel** object to generate an **IRemoteObject**. The remote objects are read in the order in which they are written to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readRemoteObject()](arkts-ipc-rpc-messagesequence-c.md#readremoteobject-1)

<!--Device-MessageParcel-readRemoteObject(): IRemoteObject--><!--Device-MessageParcel-readRemoteObject(): IRemoteObject-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| [IRemoteObject](arkts-ipc-rpc-iremoteobject-c.md) | Remote object obtained. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel,
    option: rpc.MessageOption): boolean {
    // Process services based on the actual service logic.
    return true;
  }
}

try {
  let data = rpc.MessageParcel.create();
  let testRemoteObject = new TestRemoteObject("testObject");
  data.writeRemoteObject(testRemoteObject);
  let proxy = data.readRemoteObject();
  hilog.info(0x0000, 'testTag', 'readRemoteObject is ' + proxy);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readremoteobjectarray"></a>
## readRemoteObjectArray

```TypeScript
readRemoteObjectArray(objects: IRemoteObject[]): void
```

Reads the **IRemoteObject** array from this **MessageParcel** object and writes it to the created empty array.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [readRemoteObjectArray(objects:](arkts-ipc-rpc-messagesequence-c.md#readremoteobjectarray-1)

<!--Device-MessageParcel-readRemoteObjectArray(objects: IRemoteObject[]): void--><!--Device-MessageParcel-readRemoteObjectArray(objects: IRemoteObject[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| objects | [IRemoteObject](arkts-ipc-rpc-iremoteobject-c.md)[] | Yes | **IRemoteObject** array to read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel,
    option: rpc.MessageOption): boolean {
    // The specific processing is determined by the service.
    return true;
  }
}

try {
  let a = [new TestRemoteObject("testObject1"), new TestRemoteObject("testObject2"),
    new TestRemoteObject("testObject3")];
  let data = rpc.MessageParcel.create();
  data.writeRemoteObjectArray(a);
  let b: Array<rpc.IRemoteObject> = new Array(3);
  data.readRemoteObjectArray(b);
  hilog.info(0x0000, 'testTag', 'readRemoteObjectArray is ' + b);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readremoteobjectarray-1"></a>
## readRemoteObjectArray

```TypeScript
readRemoteObjectArray(): IRemoteObject[]
```

Reads the **IRemoteObject** array from this **MessageParcel** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [readRemoteObjectArray(objects:](arkts-ipc-rpc-messagesequence-c.md#readremoteobjectarray-1)

<!--Device-MessageParcel-readRemoteObjectArray(): IRemoteObject[]--><!--Device-MessageParcel-readRemoteObjectArray(): IRemoteObject[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| [IRemoteObject](arkts-ipc-rpc-iremoteobject-c.md)[] | **IRemoteObject** object array obtained. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel,
    option: rpc.MessageOption): boolean {
    // The specific processing is determined by the service.
    return true;
  }
}

try {
  let a = [new TestRemoteObject("testObject1"), new TestRemoteObject("testObject2"),
    new TestRemoteObject("testObject3")];
  let data = rpc.MessageParcel.create();
  let result = data.writeRemoteObjectArray(a);
  hilog.info(0x0000, 'testTag', 'readRemoteObjectArray is ' + result);
  let b = data.readRemoteObjectArray();
  hilog.info(0x0000, 'testTag', 'readRemoteObjectArray is ' + b);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readsequenceable"></a>
## readSequenceable

```TypeScript
readSequenceable(dataIn: Sequenceable): boolean
```

Reads member variables from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readParcelable(dataIn:](arkts-ipc-rpc-messagesequence-c.md#readparcelable-1)

<!--Device-MessageParcel-readSequenceable(dataIn: Sequenceable): boolean--><!--Device-MessageParcel-readSequenceable(dataIn: Sequenceable): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | [Sequenceable](arkts-ipc-rpc-sequenceable-i.md) | Yes | Object that reads member variables from the **MessageParcel** object. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MySequenceable implements rpc.Sequenceable {
  num: number = 0;
  str: string = '';
  constructor(num: number, str: string) {
    this.num = num;
    this.str = str;
  }
  marshalling(messageParcel: rpc.MessageParcel): boolean {
    messageParcel.writeInt(this.num);
    messageParcel.writeString(this.str);
    return true;
  }
  unmarshalling(messageParcel: rpc.MessageParcel): boolean {
    this.num = messageParcel.readInt();
    this.str = messageParcel.readString();
    return true;
  }
}

try {
  let sequenceable = new MySequenceable(1, "aaa");
  let data = rpc.MessageParcel.create();
  let result = data.writeSequenceable(sequenceable);
  hilog.info(0x0000, 'testTag', 'writeSequenceable is ' + result);
  let ret = new MySequenceable(0, "");
  let result2 = data.readSequenceable(ret);
  hilog.info(0x0000, 'testTag', 'readSequenceable is ' + result2);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readsequenceablearray"></a>
## readSequenceableArray

```TypeScript
readSequenceableArray(sequenceableArray: Sequenceable[]): void
```

Reads the **Sequenceable** array from this **MessageParcel** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [readParcelableArray(parcelableArray:](arkts-ipc-rpc-messagesequence-c.md#readparcelablearray-1)

<!--Device-MessageParcel-readSequenceableArray(sequenceableArray: Sequenceable[]): void--><!--Device-MessageParcel-readSequenceableArray(sequenceableArray: Sequenceable[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sequenceableArray | [Sequenceable](arkts-ipc-rpc-sequenceable-i.md)[] | Yes | **Sequenceable** array to read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MySequenceable implements rpc.Sequenceable {
  num: number = 0;
  str: string = '';
  constructor(num: number, str: string) {
    this.num = num;
    this.str = str;
  }
  marshalling(messageParcel: rpc.MessageParcel): boolean {
    messageParcel.writeInt(this.num);
    messageParcel.writeString(this.str);
    return true;
  }
  unmarshalling(messageParcel: rpc.MessageParcel): boolean {
    this.num = messageParcel.readInt();
    this.str = messageParcel.readString();
    return true;
  }
}

try {
  let sequenceable = new MySequenceable(1, "aaa");
  let sequenceable2 = new MySequenceable(2, "bbb");
  let sequenceable3 = new MySequenceable(3, "ccc");
  let a = [sequenceable, sequenceable2, sequenceable3];
  let data = rpc.MessageParcel.create();
  let result = data.writeSequenceableArray(a);
  hilog.info(0x0000, 'testTag', 'writeSequenceableArray is ' + result);
  let b = [new MySequenceable(0, ""), new MySequenceable(0, ""), new MySequenceable(0, "")];
  data.readSequenceableArray(b);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readshort"></a>
## readShort

```TypeScript
readShort(): number
```

Reads the short integer from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readShort()](arkts-ipc-rpc-messagesequence-c.md#readshort-1)

<!--Device-MessageParcel-readShort(): number--><!--Device-MessageParcel-readShort(): number-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Short integer read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeShort(8);
  hilog.info(0x0000, 'testTag', 'writeShort is ' + result);
  let ret = data.readShort();
  hilog.info(0x0000, 'testTag', 'readShort is ' + ret);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readshortarray"></a>
## readShortArray

```TypeScript
readShortArray(dataIn: number[]): void
```

Reads the short array from this **MessageParcel** object and writes it to the created empty array.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readShortArray(dataIn:](arkts-ipc-rpc-messagesequence-c.md#readshortarray-1)

<!--Device-MessageParcel-readShortArray(dataIn: number[]): void--><!--Device-MessageParcel-readShortArray(dataIn: number[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | number[] | Yes | Short array to read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeShortArray([11, 12, 13]);
  hilog.info(0x0000, 'testTag', 'writeShortArray is ' + result);
  let array: Array<number> = new Array(3);
  data.readShortArray(array);
  hilog.info(0x0000, 'testTag', 'readShortArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readshortarray-1"></a>
## readShortArray

```TypeScript
readShortArray(): number[]
```

Reads the short array from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readShortArray()](arkts-ipc-rpc-messagesequence-c.md#readshortarray-1)

<!--Device-MessageParcel-readShortArray(): number[]--><!--Device-MessageParcel-readShortArray(): number[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| number[] | Short array read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeShortArray([11, 12, 13]);
  hilog.info(0x0000, 'testTag', 'writeShortArray is ' + result);
  let array = data.readShortArray();
  hilog.info(0x0000, 'testTag', 'readShortArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readstring"></a>
## readString

```TypeScript
readString(): string
```

Reads the string from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readString()](arkts-ipc-rpc-messagesequence-c.md#readstring-1)

<!--Device-MessageParcel-readString(): string--><!--Device-MessageParcel-readString(): string-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | String read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeString('abc');
  hilog.info(0x0000, 'testTag', 'writeString is ' + result);
  let ret = data.readString();
  hilog.info(0x0000, 'testTag', 'readString is ' + ret);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readstringarray"></a>
## readStringArray

```TypeScript
readStringArray(dataIn: string[]): void
```

Reads the string array from this **MessageParcel** object and writes it to the created empty array.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readStringArray(dataIn:](arkts-ipc-rpc-messagesequence-c.md#readstringarray-1)

<!--Device-MessageParcel-readStringArray(dataIn: string[]): void--><!--Device-MessageParcel-readStringArray(dataIn: string[]): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataIn | string[] | Yes | String array to read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeStringArray(["abc", "def"]);
  hilog.info(0x0000, 'testTag', 'writeStringArray is ' + result);
  let array: Array<string> = new Array(2);
  data.readStringArray(array);
  hilog.info(0x0000, 'testTag', 'readStringArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="readstringarray-1"></a>
## readStringArray

```TypeScript
readStringArray(): string[]
```

Reads the string array from this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [readStringArray()](arkts-ipc-rpc-messagesequence-c.md#readstringarray-1)

<!--Device-MessageParcel-readStringArray(): string[]--><!--Device-MessageParcel-readStringArray(): string[]-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Return value:**

| Type | Description |
| --- | --- |
| string[] | String array read. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeStringArray(["abc", "def"]);
  hilog.info(0x0000, 'testTag', 'writeStringArray is ' + result);
  let array = data.readStringArray();
  hilog.info(0x0000, 'testTag', 'readStringArray is ' + array);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="reclaim"></a>
## reclaim

```TypeScript
reclaim(): void
```

Reclaims the **MessageParcel** object that is no longer used.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [reclaim()](arkts-ipc-rpc-messagesequence-c.md#reclaim-1)

<!--Device-MessageParcel-reclaim(): void--><!--Device-MessageParcel-reclaim(): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let reply = rpc.MessageParcel.create();
  reply.reclaim();
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="rewindread"></a>
## rewindRead

```TypeScript
rewindRead(pos: number): boolean
```

Moves the read pointer to the specified position.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [rewindRead(pos:](arkts-ipc-rpc-messagesequence-c.md#rewindread-1)

<!--Device-MessageParcel-rewindRead(pos: number): boolean--><!--Device-MessageParcel-rewindRead(pos: number): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pos | number | Yes | Position from which data is to read. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the read position changes; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  data.writeInt(12);
  data.writeString("parcel");
  let number = data.readInt();
  hilog.info(0x0000, 'testTag', 'number is ' + number);
  data.rewindRead(0);
  let number2 = data.readInt();
  hilog.info(0x0000, 'testTag', 'rewindRead is ' + number2);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="rewindwrite"></a>
## rewindWrite

```TypeScript
rewindWrite(pos: number): boolean
```

Moves the write pointer to the specified position.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [rewindWrite(pos:](arkts-ipc-rpc-messagesequence-c.md#rewindwrite-1)

<!--Device-MessageParcel-rewindWrite(pos: number): boolean--><!--Device-MessageParcel-rewindWrite(pos: number): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pos | number | Yes | Position from which data is to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the write position changes; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  data.writeInt(4);
  data.rewindWrite(0);
  data.writeInt(5);
  let number = data.readInt();
  hilog.info(0x0000, 'testTag', 'rewindWrite is ' + number);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="setcapacity"></a>
## setCapacity

```TypeScript
setCapacity(size: number): boolean
```

Sets the storage capacity of this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [setCapacity(size:](arkts-ipc-rpc-messagesequence-c.md#setcapacity-1)

<!--Device-MessageParcel-setCapacity(size: number): boolean--><!--Device-MessageParcel-setCapacity(size: number): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Storage capacity to set, in bytes. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.setCapacity(100);
  hilog.info(0x0000, 'testTag', 'setCapacity is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="setsize"></a>
## setSize

```TypeScript
setSize(size: number): boolean
```

Sets the size of data contained in this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [setSize(size:](arkts-ipc-rpc-messagesequence-c.md#setsize-1)

<!--Device-MessageParcel-setSize(size: number): boolean--><!--Device-MessageParcel-setSize(size: number): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | number | Yes | Data size to set, in bytes. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let setSize = data.setSize(16);
  hilog.info(0x0000, 'testTag', 'setSize is ' + setSize);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writeashmem"></a>
## writeAshmem

```TypeScript
writeAshmem(ashmem: Ashmem): boolean
```

Writes an anonymous shared object to this **MessageParcel** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [writeAshmem(ashmem:](arkts-ipc-rpc-messagesequence-c.md#writeashmem-1)

<!--Device-MessageParcel-writeAshmem(ashmem: Ashmem): boolean--><!--Device-MessageParcel-writeAshmem(ashmem: Ashmem): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ashmem | [Ashmem](arkts-ipc-rpc-ashmem-c.md) | Yes | Anonymous shared object to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let parcel = new rpc.MessageParcel();
  let ashmem = rpc.Ashmem.createAshmem("ashmem", 1024);
  let isWriteSuccess = parcel.writeAshmem(ashmem);
  hilog.info(0x0000, 'testTag', 'write ashmem to result is ' + isWriteSuccess);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writeboolean"></a>
## writeBoolean

```TypeScript
writeBoolean(val: boolean): boolean
```

Writes a Boolean value to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeBoolean(val:](arkts-ipc-rpc-messagesequence-c.md#writeboolean-1)

<!--Device-MessageParcel-writeBoolean(val: boolean): boolean--><!--Device-MessageParcel-writeBoolean(val: boolean): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | boolean | Yes | Boolean value to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeBoolean(false);
  hilog.info(0x0000, 'testTag', 'writeBoolean is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writebooleanarray"></a>
## writeBooleanArray

```TypeScript
writeBooleanArray(booleanArray: boolean[]): boolean
```

Writes a Boolean array to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeBooleanArray(booleanArray:](arkts-ipc-rpc-messagesequence-c.md#writebooleanarray-1)

<!--Device-MessageParcel-writeBooleanArray(booleanArray: boolean[]): boolean--><!--Device-MessageParcel-writeBooleanArray(booleanArray: boolean[]): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| booleanArray | boolean[] | Yes | Boolean array to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeBooleanArray([false, true, false]);
  hilog.info(0x0000, 'testTag', 'writeBooleanArray is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writebyte"></a>
## writeByte

```TypeScript
writeByte(val: number): boolean
```

Writes a Byte value to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeByte(val:](arkts-ipc-rpc-messagesequence-c.md#writebyte-1)

<!--Device-MessageParcel-writeByte(val: number): boolean--><!--Device-MessageParcel-writeByte(val: number): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | number | Yes | Byte value to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeByte(2);
  hilog.info(0x0000, 'testTag', 'writeByte is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writebytearray"></a>
## writeByteArray

```TypeScript
writeByteArray(byteArray: number[]): boolean
```

Writes a byte array to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeByteArray(byteArray:](arkts-ipc-rpc-messagesequence-c.md#writebytearray-1)

<!--Device-MessageParcel-writeByteArray(byteArray: number[]): boolean--><!--Device-MessageParcel-writeByteArray(byteArray: number[]): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| byteArray | number[] | Yes | Byte array to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let ByteArrayVar = [1, 2, 3, 4, 5];
  let result = data.writeByteArray(ByteArrayVar);
  hilog.info(0x0000, 'testTag', 'writeByteArray is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writechar"></a>
## writeChar

```TypeScript
writeChar(val: number): boolean
```

Writes a single character value to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeChar(val:](arkts-ipc-rpc-messagesequence-c.md#writechar-1)

<!--Device-MessageParcel-writeChar(val: number): boolean--><!--Device-MessageParcel-writeChar(val: number): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | number | Yes | **Char** value to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeChar(97);
  hilog.info(0x0000, 'testTag', 'writeChar is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writechararray"></a>
## writeCharArray

```TypeScript
writeCharArray(charArray: number[]): boolean
```

Writes a single character array to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeCharArray(charArray:](arkts-ipc-rpc-messagesequence-c.md#writechararray-1)

<!--Device-MessageParcel-writeCharArray(charArray: number[]): boolean--><!--Device-MessageParcel-writeCharArray(charArray: number[]): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| charArray | number[] | Yes | Character array to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeCharArray([97, 98, 88]);
  hilog.info(0x0000, 'testTag', 'writeCharArray is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writedouble"></a>
## writeDouble

```TypeScript
writeDouble(val: number): boolean
```

Writes a double value to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeDouble(val:](arkts-ipc-rpc-messagesequence-c.md#writedouble-1)

<!--Device-MessageParcel-writeDouble(val: number): boolean--><!--Device-MessageParcel-writeDouble(val: number): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | number | Yes | Double value to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeDouble(10.2);
  hilog.info(0x0000, 'testTag', 'writeDouble is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writedoublearray"></a>
## writeDoubleArray

```TypeScript
writeDoubleArray(doubleArray: number[]): boolean
```

Writes a double array to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeDoubleArray(doubleArray:](arkts-ipc-rpc-messagesequence-c.md#writedoublearray-1)

<!--Device-MessageParcel-writeDoubleArray(doubleArray: number[]): boolean--><!--Device-MessageParcel-writeDoubleArray(doubleArray: number[]): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| doubleArray | number[] | Yes | Double array to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeDoubleArray([11.1, 12.2, 13.3]);
  hilog.info(0x0000, 'testTag', 'writeDoubleArray is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writefiledescriptor"></a>
## writeFileDescriptor

```TypeScript
writeFileDescriptor(fd: number): boolean
```

Writes a file descriptor to this **MessageParcel** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [writeFileDescriptor(fd:](arkts-ipc-rpc-messagesequence-c.md#writefiledescriptor-1)

<!--Device-MessageParcel-writeFileDescriptor(fd: number): boolean--><!--Device-MessageParcel-writeFileDescriptor(fd: number): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | File descriptor to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { fileIo } from '@kit.CoreFileKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let parcel = new rpc.MessageParcel();
  let filePath = "path/to/file";
  let file = fileIo.openSync(filePath, fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
  let writeResult = parcel.writeFileDescriptor(file.fd);
  hilog.info(0x0000, 'testTag', 'parcel writeFd result is ' + writeResult);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writefloat"></a>
## writeFloat

```TypeScript
writeFloat(val: number): boolean
```

Writes a double value to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeFloat(val:](arkts-ipc-rpc-messagesequence-c.md#writefloat-1)

<!--Device-MessageParcel-writeFloat(val: number): boolean--><!--Device-MessageParcel-writeFloat(val: number): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | number | Yes | Double value to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeFloat(1.2);
  hilog.info(0x0000, 'testTag', 'writeFloat is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writefloatarray"></a>
## writeFloatArray

```TypeScript
writeFloatArray(floatArray: number[]): boolean
```

Writes a double array to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeFloatArray(floatArray:](arkts-ipc-rpc-messagesequence-c.md#writefloatarray-1)

<!--Device-MessageParcel-writeFloatArray(floatArray: number[]): boolean--><!--Device-MessageParcel-writeFloatArray(floatArray: number[]): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| floatArray | number[] | Yes | Double array to write. The system processes float data as that of the double type. Therefore, the total number of bytes occupied by a float array must be calculated as the double type. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeFloatArray([1.2, 1.3, 1.4]);
  hilog.info(0x0000, 'testTag', 'writeFloatArray is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writeint"></a>
## writeInt

```TypeScript
writeInt(val: number): boolean
```

Writes an int value to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeInt(val:](arkts-ipc-rpc-messagesequence-c.md#writeint-1)

<!--Device-MessageParcel-writeInt(val: number): boolean--><!--Device-MessageParcel-writeInt(val: number): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | number | Yes | Integer to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeInt(10);
  hilog.info(0x0000, 'testTag', 'writeInt is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writeintarray"></a>
## writeIntArray

```TypeScript
writeIntArray(intArray: number[]): boolean
```

Writes an integer array to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeIntArray(intArray:](arkts-ipc-rpc-messagesequence-c.md#writeintarray-1)

<!--Device-MessageParcel-writeIntArray(intArray: number[]): boolean--><!--Device-MessageParcel-writeIntArray(intArray: number[]): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| intArray | number[] | Yes | Integer array to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeIntArray([100, 111, 112]);
  hilog.info(0x0000, 'testTag', 'writeIntArray is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writeinterfacetoken"></a>
## writeInterfaceToken

```TypeScript
writeInterfaceToken(token: string): boolean
```

Writes an interface token to this **MessageParcel** object. The remote object can use this interface token to verify the communication.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeInterfaceToken(token:](arkts-ipc-rpc-messagesequence-c.md#writeinterfacetoken-1)

<!--Device-MessageParcel-writeInterfaceToken(token: string): boolean--><!--Device-MessageParcel-writeInterfaceToken(token: string): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| token | string | Yes | Interface token to write. The length of the string must be less than 40960. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeInterfaceToken("aaa");
  hilog.info(0x0000, 'testTag', 'RpcServer: writeInterfaceToken is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writelong"></a>
## writeLong

```TypeScript
writeLong(val: number): boolean
```

Writes a long int value to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeLong(val:](arkts-ipc-rpc-messagesequence-c.md#writelong-1)

<!--Device-MessageParcel-writeLong(val: number): boolean--><!--Device-MessageParcel-writeLong(val: number): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | number | Yes | Long int value to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeLong(10000);
  hilog.info(0x0000, 'testTag', 'writeLong is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writelongarray"></a>
## writeLongArray

```TypeScript
writeLongArray(longArray: number[]): boolean
```

Writes a long array to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeLongArray(longArray:](arkts-ipc-rpc-messagesequence-c.md#writelongarray-1)

<!--Device-MessageParcel-writeLongArray(longArray: number[]): boolean--><!--Device-MessageParcel-writeLongArray(longArray: number[]): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| longArray | number[] | Yes | Long array to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeLongArray([1111, 1112, 1113]);
  hilog.info(0x0000, 'testTag', 'writeLongArray is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writenoexception"></a>
## writeNoException

```TypeScript
writeNoException(): void
```

Writes information to this **MessageParcel** object indicating that no exception occurred.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [writeNoException()](arkts-ipc-rpc-messagesequence-c.md#writenoexception-1)

<!--Device-MessageParcel-writeNoException(): void--><!--Device-MessageParcel-writeNoException(): void-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MyDeathRecipient implements rpc.DeathRecipient {
  onRemoteDied() {
    hilog.info(0x0000, 'testTag', 'server died');
  }
}
class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }

onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel, option: rpc.MessageOption): boolean {
    if (code === 1) {
      hilog.info(0x0000, 'testTag', 'RpcServer: onRemoteRequest called');
      reply.writeNoException();
      return true;
    } else {
      hilog.error(0x0000, 'testTag', 'RpcServer: unknown code: ' + code);
      return false;
    }
  }
}

```

<a id="writerawdata"></a>
## writeRawData

```TypeScript
writeRawData(rawData: number[], size: number): boolean
```

Writes raw data to this **MessageParcel** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [writeRawDataBuffer(rawData:](arkts-ipc-rpc-messagesequence-c.md#writerawdatabuffer-1)

<!--Device-MessageParcel-writeRawData(rawData: number[], size: number): boolean--><!--Device-MessageParcel-writeRawData(rawData: number[], size: number): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rawData | number[] | Yes | Raw data to write. The size cannot exceed 128 MB. |
| size | number | Yes | Size of the raw data, in bytes. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let parcel = new rpc.MessageParcel();
  let arr = [1, 2, 3, 4, 5];
  let isWriteSuccess = parcel.writeRawData(arr, arr.length);
  hilog.info(0x0000, 'testTag', 'parcel write raw data result is ' + isWriteSuccess);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writeremoteobject"></a>
## writeRemoteObject

```TypeScript
writeRemoteObject(object: IRemoteObject): boolean
```

Serializes a remote object and writes it to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeRemoteObject(obj:](arkts-ipc-rpc-messagesequence-c.md#writeremoteobject-1)

<!--Device-MessageParcel-writeRemoteObject(object: IRemoteObject): boolean--><!--Device-MessageParcel-writeRemoteObject(object: IRemoteObject): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| object | [IRemoteObject](arkts-ipc-rpc-iremoteobject-c.md) | Yes | Remote object to serialize and write to the **MessageParcel** object. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the operation is successful; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel, option: rpc.MessageOption): boolean {
    // Process services based on the actual service logic.
    return true;
  }
}

try {
  let data = rpc.MessageParcel.create();
  let testRemoteObject = new TestRemoteObject("testObject");
  data.writeRemoteObject(testRemoteObject);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writeremoteobjectarray"></a>
## writeRemoteObjectArray

```TypeScript
writeRemoteObjectArray(objectArray: IRemoteObject[]): boolean
```

Writes an **IRemoteObject** array to this **MessageParcel** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [writeRemoteObjectArray(objectArray:](arkts-ipc-rpc-messagesequence-c.md#writeremoteobjectarray-1)

<!--Device-MessageParcel-writeRemoteObjectArray(objectArray: IRemoteObject[]): boolean--><!--Device-MessageParcel-writeRemoteObjectArray(objectArray: IRemoteObject[]): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| objectArray | [IRemoteObject](arkts-ipc-rpc-iremoteobject-c.md)[] | Yes | **IRemoteObject** array to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class TestRemoteObject extends rpc.RemoteObject {
  constructor(descriptor: string) {
    super(descriptor);
  }
  onRemoteRequest(code: number, data: rpc.MessageParcel, reply: rpc.MessageParcel,
    option: rpc.MessageOption): boolean {
    // The specific processing is determined by the service.
    return true;
  }
}

try {
  let a = [new TestRemoteObject("testObject1"), new TestRemoteObject("testObject2"), new TestRemoteObject("testObject3")];
  let data = rpc.MessageParcel.create();
  let result = data.writeRemoteObjectArray(a);
  hilog.info(0x0000, 'testTag', 'writeRemoteObjectArray is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writesequenceable"></a>
## writeSequenceable

```TypeScript
writeSequenceable(val: Sequenceable): boolean
```

Writes a **Sequenceable** object to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeParcelable(val:](arkts-ipc-rpc-messagesequence-c.md#writeparcelable-1)

<!--Device-MessageParcel-writeSequenceable(val: Sequenceable): boolean--><!--Device-MessageParcel-writeSequenceable(val: Sequenceable): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | [Sequenceable](arkts-ipc-rpc-sequenceable-i.md) | Yes | **Sequenceable** object to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MySequenceable implements rpc.Sequenceable {
  num: number = 0;
  str: string = '';
  constructor(num: number, str: string) {
    this.num = num;
    this.str = str;
  }
  marshalling(messageParcel: rpc.MessageParcel): boolean {
    messageParcel.writeInt(this.num);
    messageParcel.writeString(this.str);
    return true;
  }
  unmarshalling(messageParcel: rpc.MessageParcel): boolean {
    this.num = messageParcel.readInt();
    this.str = messageParcel.readString();
    return true;
  }
}

try {
  let sequenceable = new MySequenceable(1, "aaa");
  let data = rpc.MessageParcel.create();
  let result = data.writeSequenceable(sequenceable);
  hilog.info(0x0000, 'testTag', 'writeSequenceable is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writesequenceablearray"></a>
## writeSequenceableArray

```TypeScript
writeSequenceableArray(sequenceableArray: Sequenceable[]): boolean
```

Writes a **Sequenceable** array to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeParcelableArray(parcelableArray:](arkts-ipc-rpc-messagesequence-c.md#writeparcelablearray-1)

<!--Device-MessageParcel-writeSequenceableArray(sequenceableArray: Sequenceable[]): boolean--><!--Device-MessageParcel-writeSequenceableArray(sequenceableArray: Sequenceable[]): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sequenceableArray | [Sequenceable](arkts-ipc-rpc-sequenceable-i.md)[] | Yes | **Sequenceable** array to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

class MySequenceable implements rpc.Sequenceable {
  num: number = 0;
  str: string = '';
  constructor(num: number, str: string) {
    this.num = num;
    this.str = str;
  }
  marshalling(messageParcel: rpc.MessageParcel): boolean {
    messageParcel.writeInt(this.num);
    messageParcel.writeString(this.str);
    return true;
  }
  unmarshalling(messageParcel: rpc.MessageParcel): boolean {
    this.num = messageParcel.readInt();
    this.str = messageParcel.readString();
    return true;
  }
}

try {
  let sequenceable = new MySequenceable(1, "aaa");
  let sequenceable2 = new MySequenceable(2, "bbb");
  let sequenceable3 = new MySequenceable(3, "ccc");
  let a = [sequenceable, sequenceable2, sequenceable3];
  let data = rpc.MessageParcel.create();
  let result = data.writeSequenceableArray(a);
  hilog.info(0x0000, 'testTag', 'writeSequenceableArray is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writeshort"></a>
## writeShort

```TypeScript
writeShort(val: number): boolean
```

Writes a short int value to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeShort(val:](arkts-ipc-rpc-messagesequence-c.md#writeshort-1)

<!--Device-MessageParcel-writeShort(val: number): boolean--><!--Device-MessageParcel-writeShort(val: number): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | number | Yes | Short integer to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeShort(8);
  hilog.info(0x0000, 'testTag', 'writeShort is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writeshortarray"></a>
## writeShortArray

```TypeScript
writeShortArray(shortArray: number[]): boolean
```

Writes a short array to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeShortArray(shortArray:](arkts-ipc-rpc-messagesequence-c.md#writeshortarray-1)

<!--Device-MessageParcel-writeShortArray(shortArray: number[]): boolean--><!--Device-MessageParcel-writeShortArray(shortArray: number[]): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shortArray | number[] | Yes | Short array to write. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeShortArray([11, 12, 13]);
  hilog.info(0x0000, 'testTag', 'writeShortArray is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writestring"></a>
## writeString

```TypeScript
writeString(val: string): boolean
```

Writes a string to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeString(val:](arkts-ipc-rpc-messagesequence-c.md#writestring-1)

<!--Device-MessageParcel-writeString(val: string): boolean--><!--Device-MessageParcel-writeString(val: string): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| val | string | Yes | String to write. The length of the string must be less than 40960. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeString('abc');
  hilog.info(0x0000, 'testTag', 'writeString is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

<a id="writestringarray"></a>
## writeStringArray

```TypeScript
writeStringArray(stringArray: string[]): boolean
```

Writes a string array to this **MessageParcel** object.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [writeStringArray(stringArray:](arkts-ipc-rpc-messagesequence-c.md#writestringarray-1)

<!--Device-MessageParcel-writeStringArray(stringArray: string[]): boolean--><!--Device-MessageParcel-writeStringArray(stringArray: string[]): boolean-End-->

**System capability:** SystemCapability.Communication.IPC.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| stringArray | string[] | Yes | String array to write. The length of a single element in the array must be less than 40960. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the data is written successfully; returns **false** otherwise. |

**Example**

```TypeScript
import { rpc } from '@kit.IPCKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  let data = rpc.MessageParcel.create();
  let result = data.writeStringArray(["abc", "def"]);
  hilog.info(0x0000, 'testTag', 'writeStringArray is ' + result);
} catch (error) {
  hilog.error(0x0000, 'testTag', 'error ' + error);
}

```

