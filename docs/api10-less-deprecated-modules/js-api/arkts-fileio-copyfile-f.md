# copyFile

## copyFile

```TypeScript
declare function copyFile(src: string | number, dest: string | number, mode?: number): Promise<void>
```

复制文件，使用Promise异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:copyFile

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | string \| number | Yes | 待复制文件的路径或待复制文件的描述符。 |
| dest | string \| number | Yes | 目标文件路径或目标文件描述符。 |
| mode | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

## copyFile

```TypeScript
declare function copyFile(src: string | number, dest: string | number, callback: AsyncCallback<void>): void
```

copyFile.

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:copyFile

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | string \| number | Yes | 待复制文件的路径或待复制文件的描述符。 |
| dest | string \| number | Yes | 目标文件路径或目标文件描述符。 |
| callback | AsyncCallback&lt;void> | Yes |  |

## copyFile

```TypeScript
declare function copyFile(
  src: string | number,
  dest: string | number,
  mode: number,
  callback: AsyncCallback<void>
): void
```

复制文件，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:copyFile

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | string \| number | Yes | 待复制文件的路径或待复制文件的描述符。 |
| dest | string \| number | Yes | 目标文件路径或目标文件描述符。 |
| mode | number | Yes |  |
| callback | AsyncCallback&lt;void> | Yes |  |

