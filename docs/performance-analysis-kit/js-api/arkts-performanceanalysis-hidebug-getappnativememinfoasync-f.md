# getAppNativeMemInfoAsync

## Modules to Import

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
```

## getAppNativeMemInfoAsync

```TypeScript
function getAppNativeMemInfoAsync(): Promise<NativeMemInfo>
```

Obtains the memory information of application processes by reading the data of the **\/proc/{pid}/smaps_rollup** and **\/proc/{pid}/statm** nodes. This API uses a promise to return the result.

**Since:** 20

<!--Device-hidebug-function getAppNativeMemInfoAsync(): Promise<NativeMemInfo>--><!--Device-hidebug-function getAppNativeMemInfoAsync(): Promise<NativeMemInfo>-End-->

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<NativeMemInfo> | Promise used to return the application process memory information. |

**Example**

```TypeScript
hidebug.getAppNativeMemInfoAsync().then((nativeMemInfo: hidebug.NativeMemInfo)=>{
  console.info(`pss: ${nativeMemInfo.pss}, vss: ${nativeMemInfo.vss}, rss: ${nativeMemInfo.rss}, ` +
    `sharedDirty: ${nativeMemInfo.sharedDirty}, privateDirty: ${nativeMemInfo.privateDirty}, ` +
    `sharedClean: ${nativeMemInfo.sharedClean}, privateClean: ${nativeMemInfo.privateClean}`);
});

```

