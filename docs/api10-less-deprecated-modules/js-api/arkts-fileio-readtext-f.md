# readText

## readText

```TypeScript
declare function readText(
  filePath: string,
  options?: {
    position?: number;
    length?: number;
    encoding?: string;
  }
): Promise<string>
```

基于文本方式读取文件（即直接读取文件的文本内容），使用Promise异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:readText

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filePath | string | Yes | 待读取文件的应用沙箱路径。 |
| options | {
    position?: number;
    length?: number;
    encoding?: string;
  } | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象。返回读取文件的内容。 |

## readText

```TypeScript
declare function readText(
  filePath: string,
  options: {
    position?: number;
    length?: number;
    encoding?: string;
  },
  callback: AsyncCallback<string>
): void
```

基于文本方式读取文件（即直接读取文件的文本内容），使用callback异步回调。

**Since:** 7

**Deprecated since:** 9

**Substitute:** @ohos.file.fs:readText

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filePath | string | Yes | 待读取文件的应用沙箱路径。 |
| options | {
    position?: number;
    length?: number;
    encoding?: string;
  } | Yes |  |
| callback | AsyncCallback&lt;string> | Yes |  |

