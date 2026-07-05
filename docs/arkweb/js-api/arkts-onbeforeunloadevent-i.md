# OnBeforeUnloadEvent

Defines the triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## result

```TypeScript
result: JsResult
```

通知Web组件用户操作行为。

**Type:** JsResult

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## isReload

```TypeScript
isReload?: boolean
```

页面是否刷新。<br>当页面因刷新即将离开时，isReload参数被设置为true；当页面因关闭即将离开时，isReload参数被设置为false。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## message

```TypeScript
message: string
```

弹窗中显示的信息。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## url

```TypeScript
url: string
```

当前显示弹窗所在网页的URL。

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

