# LoadCommittedDetails

提供已提交跳转的网页的详细信息。

**Since:** 11

**System capability:** SystemCapability.Web.Webview.Core

## isSameDocument

```TypeScript
isSameDocument: boolean
```

是否在不更改文档的情况下进行的网页跳转。 在同文档跳转的示例：1.参考片段跳转；2.pushState或replaceState触发的跳转；3.同一页面历史跳转。

**Type:** boolean

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## navigationType

```TypeScript
navigationType: WebNavigationType
```

网页跳转的类型。

**Type:** WebNavigationType

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## url

```TypeScript
url: string
```

当前跳转网页的URL。

**Type:** string

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## didReplaceEntry

```TypeScript
didReplaceEntry: boolean
```

true表示提交的新节点替换了已有的节点。 另外在一些子文档跳转的场景，虽然没有实际替换已有节点，但是有一些属性发生了变更。

**Type:** boolean

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## isMainFrame

```TypeScript
isMainFrame: boolean
```

是否是主文档。

**Type:** boolean

**Since:** 11

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

