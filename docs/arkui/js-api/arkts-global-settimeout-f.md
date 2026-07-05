# setTimeout

## setTimeout

```TypeScript
export declare function setTimeout(handler: Function | string, delay?: number, ...arguments: any[]): number
```

Sets a timer for the system to call a function after the timer goes off. The timer is automatically deleted after callback execution, or you may manually delete it via the **clearTimeout()** API.

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | Function \| string | Yes | When the type is function, this parameter specifies the callback function to  be invoked upon the timer's expiration. When the type is string, error information is printed with no  additional processing. |
| delay | number | No |  |
| arguments | any[] | Yes | Additional parameters that are passed to handler only when handler is of the  function type. If the number of arguments is less than that of the handler function parameters, the  parameters that are not overwritten by arguments are set to undefined. If the number of arguments exceeds  that of the handler function parameters, the excess arguments will be ignored. However, they can still be  accessed via the built-in arguments object within the handler function. [since 7 - 10] |

**Return value:**

| Type | Description |
| --- | --- |
| number | ID of the timer. The timer ID is shared by processes and is an integer starting from 0 in  ascending order. |

