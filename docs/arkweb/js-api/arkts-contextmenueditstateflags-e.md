# ContextMenuEditStateFlags

```TypeScript
declare enum ContextMenuEditStateFlags
```

支持以按位或的方式使用此枚举。例如，如果需要同时支持CAN_CUT、CAN_COPY和CAN_SELECT_ALL，可使用CAN_CUT | CAN_COPY | CAN_SELECT_ALL或11。

**Since:** 9

**System capability:** SystemCapability.Web.Webview.Core

## NONE

```TypeScript
NONE = 0
```

不可编辑。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## CAN_CUT

```TypeScript
CAN_CUT = 1 << 0
```

支持剪切。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## CAN_COPY

```TypeScript
CAN_COPY = 1 << 1
```

支持拷贝。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## CAN_PASTE

```TypeScript
CAN_PASTE = 1 << 2
```

支持粘贴。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

## CAN_SELECT_ALL

```TypeScript
CAN_SELECT_ALL = 1 << 3
```

支持全选。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Web.Webview.Core

