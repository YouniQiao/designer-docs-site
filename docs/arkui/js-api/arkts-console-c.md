# console

Defines the console info.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## assert

```TypeScript
static assert(value?: Object, ...arguments: Object[]): void
```

Prints a message if value is false or omitted.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Object | No |  |
| arguments | Object[] | Yes | Used as error message to print. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## count

```TypeScript
static count(label?: string): void
```

Maintains an internal counter specific to label and print the number of times console.count() has been called with the given label.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| label | string | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## countReset

```TypeScript
static countReset(label?: string): void
```

Reset the internal counter specific to label.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| label | string | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## debug

```TypeScript
static debug(message: string, ...arguments: any[]): void
```

Prints "debug" logs.

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | string | Yes | Text to print. |
| arguments | any[] | Yes |  |

## dir

```TypeScript
static dir(dir?: Object): void
```

Prints properties of the specified JavaScript object.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dir | Object | No |  |

## dirxml

```TypeScript
static dirxml(...arguments: Object[]): void
```

This method calls console.log() passing it the arguments received. This method does not produce any XML formatting.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arguments | Object[] | Yes | Text to print. |

## error

```TypeScript
static error(message: string, ...arguments: any[]): void
```

Prints "error" logs.

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | string | Yes | Text to print. |
| arguments | any[] | Yes |  |

## group

```TypeScript
static group(...arguments: Object[]): void
```

Creates a new inline group, causing any subsequent console messages to be indented by an additional level.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arguments | Object[] | Yes | messages to print first. |

## groupCollapsed

```TypeScript
static groupCollapsed(...arguments: Object[]): void
```

Same as console.group()

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arguments | Object[] | Yes | messages to print first. |

## groupEnd

```TypeScript
static groupEnd(): void
```

Exit current inline group.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## info

```TypeScript
static info(message: string, ...arguments: any[]): void
```

Prints "info" logs.

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | string | Yes | Text to print. |
| arguments | any[] | Yes |  |

## log

```TypeScript
static log(message: string, ...arguments: any[]): void
```

Prints "log" logs.

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | string | Yes | Text to print. |
| arguments | any[] | Yes |  |

## table

```TypeScript
static table(tableData?: Object): void
```

Prints tabular data as a table.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tableData | Object | No |  |

## time

```TypeScript
static time(label?: string): void
```

Start a timer.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| label | string | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## timeEnd

```TypeScript
static timeEnd(label?: string): void
```

End a timer and print time duration.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| label | string | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## timeLog

```TypeScript
static timeLog(label?: string, ...arguments: Object[]): void
```

Print the elapsed time and other data arguments.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| label | string | No |  |
| arguments | Object[] | Yes | Text to print. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## trace

```TypeScript
static trace(...arguments: Object[]): void
```

Prints stack information for the current code location.

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| arguments | Object[] | Yes | message to print. |

## traceHybridStack

```TypeScript
static traceHybridStack(): void
```

Prints information about the current hybrid stack of the calling thread in the main thread or worker thread.

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Utils.Lang

## warn

```TypeScript
static warn(message: string, ...arguments: any[]): void
```

Prints "warn" logs.

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | string | Yes | Text to print. |
| arguments | any[] | Yes |  |

