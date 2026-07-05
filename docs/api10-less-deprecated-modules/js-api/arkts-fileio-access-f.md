# access

## access

```TypeScript
declare function access(path: string, mode?: number): Promise<void>
```

检查当前进程是否可访问某文件，使用Promise异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:access

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待访问文件的应用沙箱路径。 |
| mode | number | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

## access

```TypeScript
declare function access(path: string, callback: AsyncCallback<void>): void
```

检查当前进程是否可访问某文件，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:access

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待访问文件的应用沙箱路径。 |
| callback | AsyncCallback&lt;void> | Yes |  |

## access

```TypeScript
declare function access(path: string, mode: number, callback: AsyncCallback<void>): void
```

检查当前进程是否可访问某文件，使用callback异步回调。

**Since:** 6

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:access

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待访问文件的应用沙箱路径。 |
| mode | number | Yes |  |
| callback | AsyncCallback&lt;void> | Yes |  |

