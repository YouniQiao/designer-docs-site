# rmdir

## rmdir

```TypeScript
declare function rmdir(path: string): Promise<void>
```

删除目录，使用Promise异步回调。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:rmdir

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 待删除目录的应用沙箱路径。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

## rmdir

```TypeScript
declare function rmdir(path: string, callback: AsyncCallback<void>): void
```

删除目录，使用callback异步回调。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:rmdir

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 待删除目录的应用沙箱路径。 |
| callback | AsyncCallback&lt;void> | 是 |  |

