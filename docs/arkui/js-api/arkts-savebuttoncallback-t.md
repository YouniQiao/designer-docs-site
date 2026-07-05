# SaveButtonCallback

```TypeScript
type SaveButtonCallback = (event: ClickEvent, result: SaveButtonOnClickResult, error?: BusinessError<void>) => void
```

点击保存控件触发该回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | ClickEvent | Yes | 点击事件对象，包含点击的位置、时间戳、输入设备等信息。 |
| result | SaveButtonOnClickResult | Yes | 授权结果。  返回SUCCESS表示当前保存动作已获得临时授权，可继续访问媒体库接口；返回TEMPORARY_AUTHORIZATION_FAILED时，不应继续执行后续保存动作。返回CANCELED_BY_USER时，表示用户在授权弹窗中主动取消授权，该结果仅在调用[userCancelEvent](arkts-savebuttonattribute-c.md#userCancelEvent)并设置参数为true时才会返回；若未设置userCancelEvent(true)，用户取消授权时将返回TEMPORARY_AUTHORIZATION_FAILED。 |
| error | BusinessError&lt;void> | no |  |

