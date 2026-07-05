# evictModuleFilePages

## evictModuleFilePages

```TypeScript
function evictModuleFilePages(moduleNames: Array<string>): Promise<void>
```

向系统发出释放指定模块的文件页缓存请求，系统会根据当前内存状况决定是否真正执行释放，不保证一定释放成功。 系统会读取对应模块中的memory_optimizer.json配置文件，获取evictFilePages数组，然后对数组中的文件执行文件页缓存释放操作。 配置文件路径：{模块目录}/src/main/resources/rawfile/memory_optimizer.json 配置文件中evictFilePages数组里的文件名必须以 .so、.hap 或 .hsp 结尾。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| moduleNames | Array&lt;string> | Yes | 需要释放文件页缓存的模块名数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | 非系统应用。 |
| 16000163 | 文件类型错误。配置文件中evictFilePages数组中的文件名未以.so、.hap或.hsp 结尾。 |
| 16000164 | 解析配置文件失败。 |

