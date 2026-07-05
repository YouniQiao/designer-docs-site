# Dir

管理目录，在调用Dir的方法前，需要先通过opendir方法（同步或异步）来构建一个Dir实例。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:listFile

**System capability:** SystemCapability.FileManagement.File.FileIO

## close

```TypeScript
close(): Promise<void>
```

异步关闭目录，使用promise形式返回结果。目录被关闭后，Dir中持有的文件描述将被释放，后续将无法从Dir中读取目录项。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:listFile

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | return Promise |

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

异步关闭目录，使用callback形式返回结果。目录被关闭后，Dir中持有的文件描述将被释放，后续将无法从Dir中读取目录项。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:listFile

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes |  |

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

用于关闭目录。目录被关闭后，Dir中持有的文件描述将被释放，后续将无法从Dir中读取目录项。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:listFile

**System capability:** SystemCapability.FileManagement.File.FileIO

**Example**

```TypeScript
dir.closeSync();

```

## read

```TypeScript
read(): Promise<Dirent>
```

读取下一个目录项，使用Promise异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:listFile

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Dirent> | Promise对象。返回表示异步读取目录项的结果。 |

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

读取下一个目录项，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:listFile

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Dirent> | Yes |  |

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

同步读取下一个目录项。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:listFile

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| Dirent | 表示一个目录项。 |

**Example**

```TypeScript
let dirent = dir.readSync();

```

