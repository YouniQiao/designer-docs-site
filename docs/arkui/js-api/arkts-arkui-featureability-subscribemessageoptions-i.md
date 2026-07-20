# SubscribeMessageOptions

**Since:** 5

**Deprecated since:** 8

<!--Device-unnamed-export interface SubscribeMessageOptions--><!--Device-unnamed-export interface SubscribeMessageOptions-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

## fail

```TypeScript
fail?: (data: string, code: number) => void
```

Called when the messages fail to be sent.

**Type:** (data: string, code: number) => void

**Since:** 5

**Deprecated since:** 8

<!--Device-SubscribeMessageOptions-fail?: (data: string, code: number) => void--><!--Device-SubscribeMessageOptions-fail?: (data: string, code: number) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

## success

```TypeScript
success?: (data: SubscribeMessageResponse) => void
```

Called when the messages are sent successfully.

**Type:** (data: SubscribeMessageResponse) => void

**Since:** 5

**Deprecated since:** 8

<!--Device-SubscribeMessageOptions-success?: (data: SubscribeMessageResponse) => void--><!--Device-SubscribeMessageOptions-success?: (data: SubscribeMessageResponse) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Lite

