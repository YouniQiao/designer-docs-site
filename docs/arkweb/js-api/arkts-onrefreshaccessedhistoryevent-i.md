# OnRefreshAccessedHistoryEvent

定义导航完成时触发。

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## isRefreshed

```TypeScript
isRefreshed: boolean
```

true表示该页面是被重新加载的（调用[refresh]./../../../@ohos.web.webview:webview.WebviewController#refresh()接口 ），false表示该页面是新加载的。

**Type:** boolean

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## url

```TypeScript
url: string
```

访问的url。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## isMainFrame

```TypeScript
isMainFrame?: boolean
```

是否是主文档触发。 true表示是主文档触发，false表示不是主文档触发。

**Type:** boolean

**Since:** 22

**System capability:** SystemCapability.Web.Webview.Core

