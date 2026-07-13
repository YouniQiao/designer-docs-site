# OnRefreshAccessedHistoryEvent

Callback triggered when the navigation is complete.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## isMainFrame

```TypeScript
isMainFrame?: boolean
```

Whether the event is triggered by the main frame.
The value **true** indicates that the event is triggered by the main frame, and **false** indicates the opposite.

**Type:** boolean

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

## isRefreshed

```TypeScript
isRefreshed: boolean
```

Whether the page is reloaded. The value **true** means that the page is reloaded by invoking the
[refresh](../arkts-apis/arkts-arkweb-webviewcontroller-c.md#refresh-1) API, and **false**
means the opposite.

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## url

```TypeScript
url: string
```

URL to be accessed.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

