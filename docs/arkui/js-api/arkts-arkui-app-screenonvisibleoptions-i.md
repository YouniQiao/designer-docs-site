# ScreenOnVisibleOptions

Defines the options of the visible interface on the screen.

**Since:** 3

<!--Device-unnamed-export interface ScreenOnVisibleOptions--><!--Device-unnamed-export interface ScreenOnVisibleOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { AppResponse, ScreenOnVisibleOptions, RequestFullWindowOptions } from '@kit.ArkUI';
```

## complete

```TypeScript
complete?: () => void
```

Called when the API call is complete.

**Type:** () => void

**Since:** 3

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScreenOnVisibleOptions-complete?: () => void--><!--Device-ScreenOnVisibleOptions-complete?: () => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Callback upon failure.

**Type:** (data: string, code: number) => void

**Since:** 3

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScreenOnVisibleOptions-fail?: (data: string, code: number) => void--><!--Device-ScreenOnVisibleOptions-fail?: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## success

```TypeScript
success?: () => void
```

Callback upon success.

**Type:** () => void

**Since:** 3

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScreenOnVisibleOptions-success?: () => void--><!--Device-ScreenOnVisibleOptions-success?: () => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## visible

```TypeScript
visible?: boolean
```

Whether to keep the application visible. The default value is **false**.

**Type:** boolean

**Since:** 3

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-ScreenOnVisibleOptions-visible?: boolean--><!--Device-ScreenOnVisibleOptions-visible?: boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

