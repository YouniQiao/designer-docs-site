# getxattr

## getxattr

```TypeScript
declare function getxattr(path: string, key: string): Promise<string>
```

获取文件或目录的扩展属性。使用promise异步回调。

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 文件或目录的应用沙箱路径。 |
| key | string | Yes | 扩展属性的key。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象。返回扩展属性的value。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13900002 | No such file or directory |
| 13900007 | Arg list too long |
| 13900012 | Permission denied |
| 13900031 | Function not implemented |
| 13900037 | No data available |
| 13900038 | Value too large for defined data type |
| 13900042 | Unknown error |

