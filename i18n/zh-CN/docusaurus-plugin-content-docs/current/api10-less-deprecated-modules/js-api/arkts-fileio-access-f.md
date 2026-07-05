# access

## access

```TypeScript
declare function access(path: string, mode?: number): Promise<void>
```

检查当前进程是否可访问某文件，使用Promise异步回调。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.file.fs:access

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 待访问文件的应用沙箱路径。 |
| mode | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

## access

```TypeScript
declare function access(path: string, callback: AsyncCallback<void>): void
```

检查当前进程是否可访问某文件，使用callback异步回调。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.file.fs:access

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 待访问文件的应用沙箱路径。 |
| callback | AsyncCallback&lt;void> | 是 |  |

## access

```TypeScript
declare function access(path: string, mode: number, callback: AsyncCallback<void>): void
```

检查当前进程是否可访问某文件，使用callback异步回调。

**起始版本：** 6

**废弃版本：** 9

**替代接口：** @ohos.file.fs:access

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 待访问文件的应用沙箱路径。 |
| mode | number | 是 |  |
| callback | AsyncCallback&lt;void> | 是 |  |

