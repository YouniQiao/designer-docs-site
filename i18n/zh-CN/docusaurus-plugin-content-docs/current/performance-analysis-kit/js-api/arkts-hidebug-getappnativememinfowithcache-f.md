# getAppNativeMemInfoWithCache

## getAppNativeMemInfoWithCache

```TypeScript
function getAppNativeMemInfoWithCache(forceRefresh?: boolean): NativeMemInfo
```

Obtains the memory information of the application process. This API uses the cache mechanism and has higher performance than the **getAppNativeMemInfo** API. The cache is valid for 5 minutes. > **NOTE** > > Reading **\/proc/{pid}/smaps_rollup** is time-consuming. Therefore, you are advised not to use this API in the > main thread. You can use [@ohos.taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md#taskpool) or [@ohos.worker]@ohos.worker to > enable asynchronous threads to avoid application frame freezing.

**起始版本：** 20

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| forceRefresh | boolean | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| NativeMemInfo | Memory information of the application process. |

**示例：**

```TypeScript
let nativeMemInfo: hidebug.NativeMemInfo = hidebug.getAppNativeMemInfoWithCache();
console.info(`pss: ${nativeMemInfo.pss}, vss: ${nativeMemInfo.vss}, rss: ${nativeMemInfo.rss}, ` +
  `sharedDirty: ${nativeMemInfo.sharedDirty}, privateDirty: ${nativeMemInfo.privateDirty}, ` +
  `sharedClean: ${nativeMemInfo.sharedClean}, privateClean: ${nativeMemInfo.privateClean}`);

```

