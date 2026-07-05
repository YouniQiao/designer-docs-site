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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:readText

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filePath | string | 是 | 待读取文件的应用沙箱路径。 |
| options | {
    position?: number;
    length?: number;
    encoding?: string;
  } | 否 |  |

**返回值：**

| 类型 | 说明 |
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

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:readText

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| filePath | string | 是 | 待读取文件的应用沙箱路径。 |
| options | {
    position?: number;
    length?: number;
    encoding?: string;
  } | 是 |  |
| callback | AsyncCallback&lt;string> | 是 |  |

