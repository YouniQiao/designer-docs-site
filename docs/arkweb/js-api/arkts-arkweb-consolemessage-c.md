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

**Substitutes:** constructor

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | string | Yes | The console message. |
| sourceId | string | Yes | The Web source file's path and name. |
| lineNumber | number | Yes | The line number of the console message. |
| messageLevel | MessageLevel | Yes | The console log level. |

## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

## getLineNumber

```TypeScript
getLineNumber(): number
```

Gets the line number of a console message.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Return the line number of a console message. |

## getMessage

```TypeScript
getMessage(): string
```

Gets the message of a console message.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the message of a console message. |

## getMessageLevel

```TypeScript
getMessageLevel(): MessageLevel
```

Gets the message level of a console message.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| MessageLevel | Return the message level of a console message, which can be {@link MessageLevel}. |

## getSource

```TypeScript
getSource(): ConsoleMessageSource
```

Gets the source of a console message.

**Since:** 23

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| ConsoleMessageSource | Return the source of a console message. |

## getSourceId

```TypeScript
getSourceId(): string
```

Gets the Web source file's path and name of a console message.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the Web source file's path and name of a console message. |

