# BackForwardList

Provides back and forward history list information method. related to {@link HistoryItem}.

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## getItemAtIndex

```TypeScript
getItemAtIndex(index: number): HistoryItem
```

获取历史列表中指定索引的历史记录项信息。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | 指定历史列表中的索引。 |

**Return value:**

| Type | Description |
| --- | --- |
| HistoryItem | 历史记录项。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3.Parameter verification failed. |

## size

```TypeScript
size: number
```

历史列表中索引的数量，最多保存50条，超过时起始记录会被覆盖。

**Type:** number

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## currentIndex

```TypeScript
currentIndex: number
```

当前在页面历史列表中的索引。

**Type:** number

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

