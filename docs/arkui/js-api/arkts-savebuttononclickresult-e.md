# SaveButtonOnClickResult

```TypeScript
declare enum SaveButtonOnClickResult
```

保存控件点击后的授权结果。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## SUCCESS

```TypeScript
SUCCESS = 0
```

保存控件点击后权限授权成功。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## TEMPORARY_AUTHORIZATION_FAILED

```TypeScript
TEMPORARY_AUTHORIZATION_FAILED = 1
```

保存控件点击后权限授权失败。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## CANCELED_BY_USER

```TypeScript
CANCELED_BY_USER = 2
```

保存控件点击后，弹窗中用户取消授权。仅在调用[userCancelEvent](arkts-savebuttonattribute-c.md#userCancelEvent)并设置参数为true时，回调结果中才会返回该值。

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

