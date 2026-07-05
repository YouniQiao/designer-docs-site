# getAppNativeMemInfo

## getAppNativeMemInfo

```TypeScript
function getAppNativeMemInfo(): NativeMemInfo
```

Obtains the memory information of the application process. This API is implemented by reading data from the **\/proc/{pid}/smaps_rollup and /proc/{pid}/statm** node. > **NOTE** > > Reading the **\/proc/{pid}/smaps_rollup** node takes a long time. You are advised to use the asynchronous API > [hidebug.getAppNativeMemInfoAsync]hidebug.getAppNativeMemInfoAsync to avoid frame loss or frame freezing. > > You are advised to use the [hidebug.getRssInfo]hidebug.getRssInfo API to obtain the RSS information of an > application.

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Return value:**

| Type | Description |
| --- | --- |
| NativeMemInfo | Memory information of the application process. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

let nativeMemInfo: hidebug.NativeMemInfo = hidebug.getAppNativeMemInfo();
console.info(`pss: ${nativeMemInfo.pss}, vss: ${nativeMemInfo.vss}, rss: ${nativeMemInfo.rss}, ` +
  `sharedDirty: ${nativeMemInfo.sharedDirty}, privateDirty: ${nativeMemInfo.privateDirty}, ` +
  `sharedClean: ${nativeMemInfo.sharedClean}, privateClean: ${nativeMemInfo.privateClean}`);

```

