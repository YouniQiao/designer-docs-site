# open

## open

```TypeScript
declare function open(path: string, flags?: number, mode?: number): Promise<number>
```

打开文件，使用Promise异步回调。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:open

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
| Promise&lt;number> | Promise对象。返回打开文件的文件描述符。 |

## open

```TypeScript
declare function open(path: string, callback: AsyncCallback<number>): void
```

打开文件，使用callback异步回调。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:open

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 待打开文件的应用沙箱路径。 |
| callback | AsyncCallback&lt;number> | 是 |  |

## open

```TypeScript
declare function open(path: string, flags: number, callback: AsyncCallback<number>): void
```

打开文件，使用callback异步回调。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:open

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 待打开文件的应用沙箱路径。 |
| flags | number | 是 |  |
| callback | AsyncCallback&lt;number> | 是 |  |

## open

```TypeScript
declare function open(path: string, flags: number, mode: number, callback: AsyncCallback<number>): void
```

打开文件，使用callback异步回调。

**起始版本：** 7

**废弃版本：** 9

**替代接口：** @ohos.file.fs:open

**系统能力：** SystemCapability.FileManagement.File.FileIO

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | 待打开文件的应用沙箱路径。 |
| flags | number | 是 |  |
| mode | number | 是 |  |
| callback | AsyncCallback&lt;number> | 是 |  |

