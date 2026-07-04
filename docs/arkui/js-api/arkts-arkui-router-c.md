# Router

Defines the Router interface.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** router

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

## Modules to Import

```TypeScript
import { BackRouterOptions, DisableAlertBeforeBackPageOptions, RouterOptions, RouterState, EnableAlertBeforeBackPageOptions } from '@system.router';
```

## back

```TypeScript
static back(options?: BackRouterOptions): void
```

Returns to the previous page or a specified page.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** back

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | BackRouterOptions | No | Options. |

## clear

```TypeScript
static clear(): void
```

Clears all historical pages and retains only the current page at the top of the stack.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** clear

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## disableAlertBeforeBackPage

```TypeScript
static disableAlertBeforeBackPage(options?: DisableAlertBeforeBackPageOptions): void
```

cancel enableAlertBeforeBackPage

**Since:** 6

**Deprecated since:** 8

**Substitutes:** hideAlertBeforeBackPage

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | DisableAlertBeforeBackPageOptions | No | Options. |

## enableAlertBeforeBackPage

```TypeScript
static enableAlertBeforeBackPage(options: EnableAlertBeforeBackPageOptions): void
```

Pop up dialog to ask whether to back

**Since:** 6

**Deprecated since:** 8

**Substitutes:** showAlertBeforeBackPage

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | EnableAlertBeforeBackPageOptions | Yes | Options. |

## getLength

```TypeScript
static getLength(): string
```

Obtains the number of pages in the current stack.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** getLength

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | Number of pages in the stack. The maximum value is 32. |

## getParams

```TypeScript
static getParams(): ParamsInterface
```

Obtains information about the current page params.

**Since:** 7

**Deprecated since:** 8

**Substitutes:** getParams

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| ParamsInterface | Page params. |

## getState

```TypeScript
static getState(): RouterState
```

Obtains information about the current page state.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** getState

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| RouterState | Page state. |

## push

```TypeScript
static push(options: RouterOptions): void
```

Navigates to a specified page in the application based on the page URL and parameters.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** push

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RouterOptions | Yes | Options. |

## replace

```TypeScript
static replace(options: RouterOptions): void
```

Replaces the current page with another one in the application. The current page is destroyed after replacement.

**Since:** 3

**Deprecated since:** 8

**Substitutes:** replace

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | RouterOptions | Yes | Options. |

