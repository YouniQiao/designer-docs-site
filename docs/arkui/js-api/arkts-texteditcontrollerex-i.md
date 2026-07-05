# TextEditControllerEx

文本扩展编辑控制器。 继承自[TextBaseController](arkts-textbasecontroller-i.md#TextBaseController)。

**Inheritance:** TextEditControllerExextends: TextBaseController.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getCaretOffset

```TypeScript
getCaretOffset(): number
```

返回当前光标所在位置。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | 当前光标所在位置。 |

## getPreviewText

```TypeScript
getPreviewText?(): PreviewText
```

获取预上屏信息。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| PreviewText | 预上屏信息。 |

## isEditing

```TypeScript
isEditing(): boolean
```

获取当前富文本的编辑状态。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| boolean | true为编辑态，false为非编辑态。 |

## setCaretOffset

```TypeScript
setCaretOffset(offset: number): boolean
```

设置光标偏移位置。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| offset | number | Yes | 光标偏移位置。超出所有内容范围时，设置失败。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 光标是否设置成功。 true表示光标设置成功，false表示设置失败。 |

## stopEditing

```TypeScript
stopEditing(): void
```

退出编辑态。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

