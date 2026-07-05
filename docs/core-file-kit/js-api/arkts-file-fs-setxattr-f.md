# setxattr

## setxattr

```TypeScript
declare function setxattr(path: string, key: string, value: string): Promise<void>
```

设置文件或目录的扩展属性。使用promise异步回调。

**Since:** 12

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 文件或目录的应用沙箱路径。 |
| key | string | Yes | 扩展属性的key。仅支持前缀为“user.”的字符串，且长度需小于256字节。 |
| value | string | Yes | 扩展属性的value。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13900002 | No such file or directory |
| 13900011 | Out of memory |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 13900025 | No space left on device |
| 13900031 | Function not implemented |
| 13900038 | Value too large for defined data type |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

