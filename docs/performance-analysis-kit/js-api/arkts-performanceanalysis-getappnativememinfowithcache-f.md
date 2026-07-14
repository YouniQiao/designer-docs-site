# getAppNativeMemInfoWithCache

## Modules to Import

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
```

## getAppNativeMemInfoWithCache

```TypeScript
function getAppNativeMemInfoWithCache(forceRefresh?: boolean): NativeMemInfo
```

Obtains the memory information of the application process. This API uses the cache mechanism and has higher performance than the **getAppNativeMemInfo** API. The cache is valid for 5 minutes. > **NOTE** > > Reading **\/proc/{pid}/smaps_rollup** is time-consuming. Therefore, you are advised not to use this API in the > main thread. You can use [@ohos.taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md) or [@ohos.worker](../../apis-arkts/arkts-apis/arkts-worker.md) to > enable asynchronous threads to avoid application frame freezing.

**Since:** 20

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| forceRefresh | boolean | No | Whether to ignore the cache validity and forcibly update the cache value. Thedefault value is **false**.<br>The value **true** means to directly obtain the current memory data and updatethe cache value.<br>The value **false** means to directly return the cache value if the cache is valid andobtain the current memory data and update the cache value if the cache is invalid. |

**Return value:**

| Type | Description |
| --- | --- |
| NativeMemInfo | Memory information of the application process. |

**Example**

```TypeScript
let nativeMemInfo: hidebug.NativeMemInfo = hidebug.getAppNativeMemInfoWithCache();
console.info(`pss: ${nativeMemInfo.pss}, vss: ${nativeMemInfo.vss}, rss: ${nativeMemInfo.rss}, ` +
  `sharedDirty: ${nativeMemInfo.sharedDirty}, privateDirty: ${nativeMemInfo.privateDirty}, ` +
  `sharedClean: ${nativeMemInfo.sharedClean}, privateClean: ${nativeMemInfo.privateClean}`);

```

