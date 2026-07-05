# evictFilePages

## evictFilePages

```TypeScript
function evictFilePages(fileNames: Array<string>): Promise<void>
```

向系统发出释放指定文件的文件页缓存请求，系统会根据当前内存状况决定是否真正执行释放，不保证一定释放成功。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fileNames | Array&lt;string> | Yes | 需要释放文件页缓存的文件名数组，文件名必须以.so、.hap 或.hsp结尾。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | 非系统应用。 |
| 16000163 | 文件类型错误。文件名未以.so、.hap或.hsp结尾。 |

