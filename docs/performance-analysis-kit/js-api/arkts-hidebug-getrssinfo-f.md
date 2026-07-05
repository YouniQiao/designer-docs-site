# getRssInfo

## getRssInfo

```TypeScript
function getRssInfo(): RssInfo
```

Obtains the physical memory information of application process. This API is implemented by reading data from the /proc/{pid}/status node.

**Since:** 24

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Return value:**

| Type | Description |
| --- | --- |
| RssInfo | Returns the Rss information. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

let rssInfo: hidebug.RssInfo = hidebug.getRssInfo();
console.info(`rss: ${rssInfo.rss}, swapRss: ${rssInfo.swapRss}`);

```

