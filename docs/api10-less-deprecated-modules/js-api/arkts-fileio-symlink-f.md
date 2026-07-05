# symlink

## symlink

```TypeScript
declare function symlink(target: string, srcPath: string): Promise<void>
```

基于文件路径创建符号链接，使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:symlink

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | string | Yes | 目标文件的应用沙箱路径。 |
| srcPath | string | Yes | 符号链接文件的应用沙箱路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

## symlink

```TypeScript
declare function symlink(target: string, srcPath: string, callback: AsyncCallback<void>): void
```

基于文件路径创建符号链接，使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:symlink

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| target | string | Yes | 目标文件的应用沙箱路径。 |
| srcPath | string | Yes | 符号链接文件的应用沙箱路径。 |
| callback | AsyncCallback&lt;void> | Yes |  |

