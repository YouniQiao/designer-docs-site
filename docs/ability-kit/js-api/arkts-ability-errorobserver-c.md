# ErrorObserver

The ErrorObserver module defines an observer to listen for application errors. It can be used as an input parameter
in
[ErrorManager.on](arkts-ability-on-f.md#on-1)
to listen for errors that occur in the current application.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## onException

```TypeScript
onException?(errObject: Error): void
```

Called when the application encounters an exception and reports it to the JavaScript layer.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| errObject | Error | Yes | Event name, message, and error stack of the exception. |

## onUnhandledException

```TypeScript
onUnhandledException(errMsg: string): void
```

Called when an uncaught exception occurs in the application.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| errMsg | string | Yes | Message and error stack trace about the exception. |

