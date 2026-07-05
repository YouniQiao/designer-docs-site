# rename

## rename

```TypeScript
declare function rename(oldPath: string, newPath: string): Promise<void>
```

重命名文件，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:rename

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oldPath | string | Yes | 目标文件的当前应用沙箱路径。 |
| newPath | string | Yes | 目标文件的新应用沙箱路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

## rename

```TypeScript
declare function rename(oldPath: string, newPath: string, callback: AsyncCallback<void>): void
```

重命名文件，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:rename

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| oldPath | string | Yes | 目标文件的当前应用沙箱路径。 |
| newPath | string | Yes | 目标文件的新应用沙箱路径。 |
| callback | AsyncCallback&lt;void> | Yes |  |

