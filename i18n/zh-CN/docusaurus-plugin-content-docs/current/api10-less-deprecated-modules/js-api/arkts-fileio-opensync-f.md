# openSync

## openSync

```TypeScript
declare function openSync(path: string, flags?: number, mode?: number): number
```

以同步方法打开文件。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.file.fs:openSync

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 待打开文件的应用沙箱路径。 |
| flags | number | 否 |  |
| mode | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | 打开文件的文件描述符。 |

