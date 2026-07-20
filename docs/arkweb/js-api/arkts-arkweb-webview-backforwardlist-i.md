# BackForwardList

Provides back and forward history list information method. related to {@link HistoryItem}.

**Since:** 9

<!--Device-webview-interface BackForwardList--><!--Device-webview-interface BackForwardList-End-->

**System capability:** SystemCapability.Web.Webview.Core

## Modules to Import

```TypeScript
import { webview } from '@kit.ArkWeb';
```

## getItemAtIndex

```TypeScript
getItemAtIndex(index: number): HistoryItem
```

Get history entry at given index.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-BackForwardList-getItemAtIndex(index: number): HistoryItem--><!--Device-BackForwardList-getItemAtIndex(index: number): HistoryItem-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Index of back forward list entry. |

**Return value:**

| Type | Description |
| --- | --- |
| [HistoryItem](arkts-arkweb-webview-historyitem-i.md) | HistoryItem at given index in back forward list. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2. Incorrect parameter types. 3.Parameter verification failed. |

## currentIndex

```TypeScript
currentIndex: number
```

Current index in BackForwardList.

**Type:** number

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-BackForwardList-currentIndex: number--><!--Device-BackForwardList-currentIndex: number-End-->

**System capability:** SystemCapability.Web.Webview.Core

## size

```TypeScript
size: number
```

Size of in BackForwardList.

**Type:** number

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-BackForwardList-size: number--><!--Device-BackForwardList-size: number-End-->

**System capability:** SystemCapability.Web.Webview.Core

