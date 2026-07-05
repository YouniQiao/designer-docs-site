# getRssInfo

## getRssInfo

```TypeScript
function getRssInfo(): RssInfo
```

Obtains the physical memory information of application process. This API is implemented by reading data from the /proc/{pid}/status node.

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RssInfo | Returns the Rss information. |

**示例：**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

let rssInfo: hidebug.RssInfo = hidebug.getRssInfo();
console.info(`rss: ${rssInfo.rss}, swapRss: ${rssInfo.swapRss}`);

```

