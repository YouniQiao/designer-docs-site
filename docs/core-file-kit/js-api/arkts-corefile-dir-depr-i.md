# Dir

Manages directories. Before calling a method of the **Dir** class, use the **opendir()** method synchronously or asynchronously to create a **Dir** instance.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

## close

```TypeScript
close(): Promise<void>
```

Closes a directory. This API uses a promise to return the result. After a directory is closed, the file descriptor in **Dir** will be released and no directory entry can be read from **Dir**.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | return Promise |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
dir.close().then(() => {
  console.info("close dir successfully");
});

```

## close

```TypeScript
close(callback: AsyncCallback<void>): void
```

Closes a directory. This API uses an asynchronous callback to return the result. After a directory is closed, the file descriptor in **Dir** will be released and no directory entry can be read from **Dir**.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void&gt; | Yes | callback. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
dir.close((err: BusinessError) => {
  console.info("close dir successfully");
});

```

## closeSync

```TypeScript
closeSync(): void
```

Closes a directory. After a directory is closed, the file descriptor in **Dir** will be released and no directory entry can be read from **Dir**.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Example**

```TypeScript
dir.closeSync();

```

## read

```TypeScript
read(): Promise<Dirent>
```

Reads the next directory entry. This API uses a promise to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Dirent&gt; | Promise that returns the next directory entry. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
dir.read().then((dirent: fileio.Dirent) => {
  console.info("read succeed, the name of dirent is " + dirent.name);
}).catch((err: BusinessError) => {
  console.error("read failed with error:" + err);
});

```

## read

```TypeScript
read(callback: AsyncCallback<Dirent>): void
```

Reads the next directory entry. This API uses an asynchronous callback to return the result.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Dirent&gt; | Yes | Callback invoked when the next directory entry is asynchronouslyread. |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
dir.read((err: BusinessError, dirent: fileio.Dirent) => {
  if (dirent) {
    // Do something.
    console.info("read succeed, the name of file is " + dirent.name);
  }
});

```

## readSync

```TypeScript
readSync(): Dirent
```

Reads the next directory entry. This API returns the result synchronously.

**Since:** 6

**Deprecated since:** 9

**Substitutes:** [fs:listFile](arkts-corefile-file-fs-listfile-f.md#listfile-1)

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| Dirent | Directory entry read. |

**Example**

```TypeScript
let dirent = dir.readSync();

```

