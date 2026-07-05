# uninstallFont

## uninstallFont

```TypeScript
function uninstallFont(fullName: string): Promise<int>
```

卸载指定名称的字体，使用promise异步回调。

**Since:** 19

**Required permissions:** 

 ohos.permission.UPDATE_FONT

**System capability:** SystemCapability.Global.FontManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fullName | string | Yes | 需要卸载的字体名称，字体名称可通过打开.ttf或.ttc字体文件获取。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | 返回卸载结果。返回为0表示卸载成功，否则卸载失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system application. |
| 31100107 | Font file does not exist. |
| 31100108 | Font file delete error. |
| 31100109 | Other error. |

