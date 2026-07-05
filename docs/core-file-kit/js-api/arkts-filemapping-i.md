# FileMapping

文件映射对象，在调用FileMapping的方法前，需要先通过mmap()方法（同步或异步）构建一个FileMapping实例。

**Since:** 26.0.0

**System capability:** SystemCapability.FileManagement.File.FileIO

## Modules to Import

```TypeScript
import { Options,ReaderIteratorResult,Watcher,ReadTextOptions,WatchEventListener,TaskSignal,WriteOptions,ListFileExtOptions,DfsListeners,Filter,ReadOptions,ListFileOptions,WatchEvent,FileFilter,ConflictFiles } from '@kit.CoreFileKit';
```

## capacity

```TypeScript
capacity(): number
```

获取文件映射区的容量，单位为Byte。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| number | - Size of the file mapping area, in bytes. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |
| 13900052 | Mmap buffer released |

## flip

```TypeScript
flip(): void
```

模式翻转。即将 limit 属性设置为当前 position，再将当前 position 设置为0。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |
| 13900052 | Mmap buffer released |

## getLimit

```TypeScript
getLimit(): number
```

获取文件映射区可读写区域的上界。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| number | - 当前可读写区域上界值，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |
| 13900052 | Mmap buffer released |

## getPosition

```TypeScript
getPosition(): number
```

获取文件映射区的当前位置，单位为Byte。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| number | - Current location of the file mapping area. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |
| 13900052 | Mmap buffer released |

## msync

```TypeScript
msync(): Promise<void>
```

将整个文件映射区的脏页数据同步到磁盘文件，使用promise异步回调。 注意：如果文件不在本地设备上，调用此接口不保证所有更改都已持久化存储。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Promise对象。无返回值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900011 | Out of memory |
| 13900014 | Device or resource busy |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |
| 13900052 | Mmap buffer released |
| 13900055 | Mmap operation not supported |

## msync

```TypeScript
msync(position: number, length: number): Promise<void>
```

将文件映射区指定范围内的脏页数据同步到磁盘文件，使用promise异步回调。 注意：如果文件不在本地设备上，调用此接口不保证所有更改都已持久化存储。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | number | Yes | 期望同步的起始位置，单位为Byte。 |
| length | number | Yes | 期望同步的数据长度，单位为Byte。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Promise对象。无返回值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900011 | Out of memory |
| 13900014 | Device or resource busy |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |
| 13900052 | Mmap buffer released |
| 13900055 | Mmap operation not supported |

## msyncSync

```TypeScript
msyncSync(): void
```

以同步方法将整个文件映射区的脏页数据同步到磁盘文件。 注意：如果文件不在本地设备上，调用此接口不保证所有更改都已持久化存储。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900011 | Out of memory |
| 13900014 | Device or resource busy |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |
| 13900052 | Mmap buffer released |
| 13900055 | Mmap operation not supported |

## msyncSync

```TypeScript
msyncSync(position: number, length: number): void
```

以同步方法将文件映射区指定范围内的脏页数据同步到磁盘文件。 注意：如果文件不在本地设备上，调用此接口不保证所有更改都已持久化存储。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | number | Yes | 期望同步的起始位置，单位为Byte。 |
| length | number | Yes | 期望同步的数据长度，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900011 | Out of memory |
| 13900014 | Device or resource busy |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |
| 13900052 | Mmap buffer released |
| 13900055 | Mmap operation not supported |

## read

```TypeScript
read(buffer: ArrayBuffer, length?: number): number
```

从当前位置读取数据，并将位置后移实际读取的字节数。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| buffer | ArrayBuffer | Yes | 用于保存读取到的文件数据的缓冲区。 |
| length | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | - 返回实际读取的数据长度，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |
| 13900051 | Buffer read/write out of bounds |
| 13900052 | Mmap buffer released |
| 13900054 | Mmap buffer is inaccessible |

## read

```TypeScript
read(position: number, buffer: ArrayBuffer, length?: number): number
```

从指定位置读取数据，不影响当前位置。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | number | Yes | 期望读取的起始位置。 |
| buffer | ArrayBuffer | Yes | 用于保存读取到的文件数据的缓冲区。 |
| length | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | - 返回实际读取的数据长度，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |
| 13900051 | Buffer read/write out of bounds |
| 13900052 | Mmap buffer released |
| 13900054 | Mmap buffer is inaccessible |

## remaining

```TypeScript
remaining(): number
```

获取从当前位置（pisition）到可读写区域的上界（limit）之间的剩余字节数。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| number | - 剩余可读或可写的字节数，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |
| 13900052 | Mmap buffer released |

## setLimit

```TypeScript
setLimit(limit: number): void
```

设置文件映射区可读写区域的上界。该上界不会超过映射区的总容量（0 ≤ limit ≤ capacity）。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| limit | number | Yes | 要设置的可读写区域上界值，单位为Byte。如果当前位置大于新上界，则会被自动调整为 limit。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |
| 13900052 | Mmap buffer released |

## setPosition

```TypeScript
setPosition(position: number): void
```

设置文件映射区的当前位置。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | number | Yes | 期望设置的目标位置，单位为Byte。必须为非负数且不大于当前可读写上限（limit）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |
| 13900052 | Mmap buffer released |

## unmap

```TypeScript
unmap(): Promise<void>
```

释放文件映射区，使用promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | - Promise对象。无返回值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |

## unmapSync

```TypeScript
unmapSync(): void
```

以同步方法释放文件映射区。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |

## write

```TypeScript
write(data: ArrayBuffer, length?: number): number
```

从当前位置写入数据，并将位置后移实际写入的字节数。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | ArrayBuffer | Yes | 待写入文件的缓冲区数据。 |
| length | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | - 返回实际写入的长度，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |
| 13900051 | Buffer read/write out of bounds |
| 13900052 | Mmap buffer released |
| 13900053 | Read-only mmap buffer |
| 13900054 | Mmap buffer is inaccessible |

## write

```TypeScript
write(position: number, data: ArrayBuffer, length?: number): number
```

从指定位置写入数据，不影响当前位置。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| position | number | Yes | 期望写入的起始位置，单位为Byte。 |
| data | ArrayBuffer | Yes | 待写入文件的缓冲区数据。 |
| length | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | - 返回实际写入的长度，单位为Byte。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 13900050 | Internal resource error |
| 13900051 | Buffer read/write out of bounds |
| 13900052 | Mmap buffer released |
| 13900053 | Read-only mmap buffer |
| 13900054 | Mmap buffer is inaccessible |

