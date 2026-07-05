# EffectComponentAttribute

支持通用属性，目前仅支持对backgroundBlurStyle属性做绘制合并优化。 不支持通用事件。

**Inheritance:** EffectComponentAttributeextends: CommonMethod<EffectComponentAttribute>.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## alwaysSnapshot

```TypeScript
alwaysSnapshot(enable: boolean)
```

Use snapshot when Effect Component have no visual effect.

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

