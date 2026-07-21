# ConsoleMessage

Encompassed message information as parameters to {@link onConsole} method.

**Since:** 8

<!--Device-unnamed-declare class ConsoleMessage--><!--Device-unnamed-declare class ConsoleMessage-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="constructor"></a>
## constructor

```TypeScript
constructor(message: string, sourceId: string, lineNumber: number, messageLevel: MessageLevel)
```

Constructor.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** constructor

<!--Device-ConsoleMessage-constructor(message: string, sourceId: string, lineNumber: number, messageLevel: MessageLevel)--><!--Device-ConsoleMessage-constructor(message: string, sourceId: string, lineNumber: number, messageLevel: MessageLevel)-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | string | Yes | The console message. |
| sourceId | string | Yes | The Web source file's path and name. |
| lineNumber | number | Yes | The line number of the console message. |
| messageLevel | [MessageLevel](arkts-arkweb-messagelevel-e.md) | Yes | The console log level. |

<a id="constructor-1"></a>
## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ConsoleMessage-constructor()--><!--Device-ConsoleMessage-constructor()-End-->

**System capability:** SystemCapability.Web.Webview.Core

<a id="getlinenumber"></a>
## getLineNumber

```TypeScript
getLineNumber(): number
```

Gets the line number of a console message.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ConsoleMessage-getLineNumber(): number--><!--Device-ConsoleMessage-getLineNumber(): number-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| number | Return the line number of a console message. |

<a id="getmessage"></a>
## getMessage

```TypeScript
getMessage(): string
```

Gets the message of a console message.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ConsoleMessage-getMessage(): string--><!--Device-ConsoleMessage-getMessage(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the message of a console message. |

<a id="getmessagelevel"></a>
## getMessageLevel

```TypeScript
getMessageLevel(): MessageLevel
```

Gets the message level of a console message.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ConsoleMessage-getMessageLevel(): MessageLevel--><!--Device-ConsoleMessage-getMessageLevel(): MessageLevel-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [MessageLevel](arkts-arkweb-messagelevel-e.md) | Return the message level of a console message, which can be {@link MessageLevel}. |

<a id="getsource"></a>
## getSource

```TypeScript
getSource(): ConsoleMessageSource
```

Gets the source of a console message.

**Since:** 23

<!--Device-ConsoleMessage-getSource(): ConsoleMessageSource--><!--Device-ConsoleMessage-getSource(): ConsoleMessageSource-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| [ConsoleMessageSource](arkts-arkweb-consolemessagesource-e.md) | Return the source of a console message. |

<a id="getsourceid"></a>
## getSourceId

```TypeScript
getSourceId(): string
```

Gets the Web source file's path and name of a console message.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ConsoleMessage-getSourceId(): string--><!--Device-ConsoleMessage-getSourceId(): string-End-->

**System capability:** SystemCapability.Web.Webview.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Return the Web source file's path and name of a console message. |

