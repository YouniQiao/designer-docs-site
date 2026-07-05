# getUserDataDir

## getUserDataDir

```TypeScript
function getUserDataDir(): Promise<string>
```

异步方法获取公共文件根目录，使用promise异步回调。

**起始版本：** 8

**系统能力：** SystemCapability.FileManagement.File.Environment

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | 返回公共文件根目录。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The caller is not a system application |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

## getUserDataDir

```TypeScript
function getUserDataDir(callback: AsyncCallback<string>): void
```

异步方法获取公共文件根目录，使用callback异步回调。

**起始版本：** 8

**系统能力：** SystemCapability.FileManagement.File.Environment

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | 是 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The caller is not a system application |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

