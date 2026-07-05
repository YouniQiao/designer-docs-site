# ConsoleMessage

Encompassed message information as parameters to {@link onConsole} method.

**Since:** 8

**System capability:** SystemCapability.Web.Webview.Core

## constructor

```TypeScript
constructor(message: string, sourceId: string, lineNumber: number, messageLevel: MessageLevel)
```

Constructor.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.web.ConsoleMessage#constructor

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | string | Yes | ConsoleMessage的日志输出信息。 |
| sourceId | string | Yes | 网页源文件的路径和文件名。 |
| lineNumber | number | Yes | ConsoleMessage的行号。 |
| messageLevel | MessageLevel | Yes | ConsoleMessage的日志级别。 |

## constructor

```TypeScript
constructor()
```

ConsoleMessage的构造函数。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## getLineNumber

```TypeScript
getLineNumber(): number
```

获取ConsoleMessage的行数。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回ConsoleMessage的行数。 |

## getMessage

```TypeScript
getMessage(): string
```

获取ConsoleMessage的日志信息。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回ConsoleMessage的日志信息。 |

## getMessageLevel

```TypeScript
getMessageLevel(): MessageLevel
```

获取ConsoleMessage的信息级别。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| MessageLevel | 返回ConsoleMessage的信息级别。 |

## getSource

```TypeScript
getSource() : ConsoleMessageSource
```

获取ConsoleMessage的日志来源。

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| ConsoleMessageSource | 返回ConsoleMessage的日志来源。 |

## getSourceId

```TypeScript
getSourceId(): string
```

获取网页源文件路径和文件名。

**Since:** 8

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回网页源文件路径和文件名。 |

