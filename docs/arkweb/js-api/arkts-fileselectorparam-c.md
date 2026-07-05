# FileSelectorParam

封装消息信息，作为 {@link onFileSelectorShow} 方法的入参。

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## constructor

```TypeScript
constructor()
```

FileSelectorParam的构造函数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## getAcceptableFileTypes

```TypeScript
getAcceptableFileTypes(): Array<Array<AcceptableFileType>>
```

获取网页文件的已选类型数组。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Array&lt;AcceptableFileType>> | Return an array of selected types for web page files. |

## getAcceptType

```TypeScript
getAcceptType(): Array<string>
```

获取可接受的MIME类型数组。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | Return an array of acceptable MIME type. |

## getDefaultPath

```TypeScript
getDefaultPath(): string
```

获取拉起选择器时默认打开的路径。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return to the default path opened when pulling up the selector. |

## getDescriptions

```TypeScript
getDescriptions(): Array<string>
```

获取文件类型的描述信息数组。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | Return an array of description of the file type. |

## getMimeTypes

```TypeScript
getMimeTypes(): Array<string>
```

获取原始可接受 MIME 类型数组。

**Since:** 18

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | Return an array of raw acceptable MIME type. |

## getMode

```TypeScript
getMode(): FileSelectorMode
```

获取当前文件选择器的选择模式。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| FileSelectorMode | Return the FileSelectorMode of this file selector. |

## getSuggestedName

```TypeScript
getSuggestedName(): string
```

获取推荐文件名列表。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the suggested file names. |

## getTitle

```TypeScript
getTitle(): string
```

获取此文件选择器的标题。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the title of this file selector. |

## isAcceptAllOptionExcluded

```TypeScript
isAcceptAllOptionExcluded(): boolean
```

获取是否过滤完全匹配的文件类型。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Return whether to filter all matching file types. |

## isCapture

```TypeScript
isCapture(): boolean
```

获取此文件选择器是否使用实时媒体拍摄所得内容。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Return {@code true} if captured media; return {@code false} otherwise. |

