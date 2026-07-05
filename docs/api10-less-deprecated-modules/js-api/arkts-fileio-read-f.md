# read

## read

```TypeScript
declare function read(
  fd: number,
  buffer: ArrayBuffer,
  options?: {
    offset?: number;
    length?: number;
    position?: number;
  }
): Promise<ReadOut>
```

从文件读取数据，使用Promise异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:read

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待读取文件的文件描述符。 |
| buffer | ArrayBuffer | Yes | 用于保存读取到的文件数据的缓冲区。 |
| options | {
    offset?: number;
    length?: number;
    position?: number;
  } | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ReadOut> |  |

## read

```TypeScript
declare function read(fd: number, buffer: ArrayBuffer, callback: AsyncCallback<ReadOut>): void
```

从文件读取数据，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:read

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待读取文件的文件描述符。 |
| buffer | ArrayBuffer | Yes | 用于保存读取到的文件数据的缓冲区。 |
| callback | AsyncCallback&lt;ReadOut> | Yes |  |

## read

```TypeScript
declare function read(
  fd: number,
  buffer: ArrayBuffer,
  options: {
    offset?: number;
    length?: number;
    position?: number;
  },
  callback: AsyncCallback<ReadOut>
): void
```

从文件读取数据，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:read

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fd | number | Yes | 待读取文件的文件描述符。 |
| buffer | ArrayBuffer | Yes | 用于保存读取到的文件数据的缓冲区。 |
| options | {
    offset?: number;
    length?: number;
    position?: number;
  } | Yes |  |
| callback | AsyncCallback&lt;ReadOut> | Yes |  |

