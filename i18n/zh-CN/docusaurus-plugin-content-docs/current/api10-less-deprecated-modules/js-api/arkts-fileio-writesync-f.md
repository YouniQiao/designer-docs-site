# writeSync

## writeSync

```TypeScript
declare function writeSync(
  fd: number,
  buffer: ArrayBuffer | string,
  options?: {
    offset?: number;
    length?: number;
    position?: number;
    encoding?: string;
  }
): number
```

以同步方法将数据写入文件。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.file.fs:writeSync

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fd | number | 是 | 待写入文件的文件描述符。 |
| buffer | ArrayBuffer \| string | 是 | 待写入文件的数据，可来自缓冲区或字符串。 |
| options | {
    offset?: number;
    length?: number;
    position?: number;
    encoding?: string;
  } | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 实际写入的长度，单位为Byte。 |

