# mkdir

## mkdir

```TypeScript
declare function mkdir(path: string, mode?: number): Promise<void>
```

创建目录，使用Promise异步回调。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.file.fs:mkdir

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 待创建目录的应用沙箱路径。 |
| mode | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

## mkdir

```TypeScript
declare function mkdir(path: string, callback: AsyncCallback<void>): void
```

创建目录，使用callback异步回调。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.file.fs:mkdir

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 待创建目录的应用沙箱路径。 |
| callback | AsyncCallback&lt;void> | 是 |  |

## mkdir

```TypeScript
declare function mkdir(path: string, mode: number, callback: AsyncCallback<void>): void
```

创建目录，使用callback异步回调。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.file.fs:mkdir

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 待创建目录的应用沙箱路径。 |
| mode | number | 是 |  |
| callback | AsyncCallback&lt;void> | 是 |  |

