# OnBeforeUnloadEvent

Defines the triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.

**Since:** 12

**System capability:** SystemCapability.Web.Webview.Core

## isReload

```TypeScript
isReload?: boolean
```

The isReload parameter is set to true when the page is refreshed; otherwise, it remains false. Default is false.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Web.Webview.Core

## message

```TypeScript
message: string
```

The message of confirm dialog.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## result

```TypeScript
result: JsResult
```

Handle the user's JavaScript result.

**Type:** JsResult

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

## url

```TypeScript
url: string
```

The url of the page.

**Type:** string

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Web.Webview.Core

