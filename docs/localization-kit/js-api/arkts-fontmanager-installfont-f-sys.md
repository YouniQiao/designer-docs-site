# installFont

## installFont

```TypeScript
function installFont(path: string): Promise<int>
```

安装指定路径下的字体，使用promise异步回调。

**Since:** 19

**Required permissions:** 

 ohos.permission.UPDATE_FONT

**System capability:** SystemCapability.Global.FontManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 安装字体文件路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | 返回安装结果。返回为0表示安装成功，否则安装失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system application. |
| 31100101 | Font does not exist. |
| 31100102 | Font is not supported. |
| 31100103 | Font file copy failed. |
| 31100104 | Font file installed. |
| 31100105 | Exceeded maximum number of installed files. |
| 31100106 | Other error. |

