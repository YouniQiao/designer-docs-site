# getRssInfo

## Modules to Import

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
```

## getRssInfo

```TypeScript
function getRssInfo(): RssInfo
```

Obtains the physical memory information of application process. This API is implemented by reading data from the/proc/{pid}/status node.

**Since:** 24

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-hidebug-function getRssInfo(): RssInfo--><!--Device-hidebug-function getRssInfo(): RssInfo-End-->

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Return value:**

| Type | Description |
| --- | --- |
| [RssInfo](arkts-performanceanalysis-hidebug-rssinfo-i.md) | Returns the Rss information. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

let rssInfo: hidebug.RssInfo = hidebug.getRssInfo();
console.info(`rss: ${rssInfo.rss}, swapRss: ${rssInfo.swapRss}`);

```

