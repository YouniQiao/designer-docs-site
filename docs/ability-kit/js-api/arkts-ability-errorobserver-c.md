# ErrorObserver

The ErrorObserver module defines an observer to listen for application errors. It can be used as an input parameter in [ErrorManager.on](./../@ohos.app.ability.errorManager:errorManager.on(type: 'error', observer: ErrorObserver))to listen for errors that occur in the current application.

**Since:** 9

<!--Device-unnamed-export default class ErrorObserver--><!--Device-unnamed-export default class ErrorObserver-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

<a id="onexception"></a>
## onException

```TypeScript
onException?(errObject: Error): void
```

Called when the application encounters an exception and reports it to the JavaScript layer.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ErrorObserver-onException?(errObject: Error): void--><!--Device-ErrorObserver-onException?(errObject: Error): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| errObject | Error | Yes | Event name, message, and error stack of the exception. |

<a id="onunhandledexception"></a>
## onUnhandledException

```TypeScript
onUnhandledException(errMsg: string): void
```

Called when an uncaught exception occurs in the application.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ErrorObserver-onUnhandledException(errMsg: string): void--><!--Device-ErrorObserver-onUnhandledException(errMsg: string): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| errMsg | string | Yes | Message and error stack trace about the exception. |

