# readSync

## readSync

```TypeScript
declare function readSync(
  fd: number,
  buffer: ArrayBuffer,
  options?: {
    offset?: number;
    length?: number;
    position?: number;
  }
): number
```

以同步方法从文件读取数据。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.file.fs:readSync

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| fd | number | 是 | 待读取文件的文件描述符。 |
| buffer | ArrayBuffer | 是 | 用于保存读取到的文件数据的缓冲区。 |
| options | {
    offset?: number;
    length?: number;
    position?: number;
  } | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 实际读取的长度，单位为Byte。 |

