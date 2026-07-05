# utimes

## utimes

```TypeScript
declare function utimes(path: string, mtime: number): void
```

更改文件上次修改该文件的时间。

**Since:** 11

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 文件的应用沙箱路径。 |
| mtime | number | Yes | 待更新的时间戳。自1970年1月1日起至目标时间的毫秒数。仅支持更改上次修改该文件的时间属性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900002 | No such file or directory |
| 13900012 | Permission denied |
| 13900020 | Invalid argument |
| 13900027 | Read-only file system |
| 13900042 | Unknown error |

