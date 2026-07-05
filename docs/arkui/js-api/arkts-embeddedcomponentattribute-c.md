# EmbeddedComponentAttribute

Define the attribute functions of EmbeddedComponent.

**Inheritance:** EmbeddedComponentAttributeextends: CommonMethod<EmbeddedComponentAttribute>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDrawReady

```TypeScript
onDrawReady(callback: Callback<void>)
```

Callback called when the EmbeddedUIExtensionAbility draw the first frame.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes |  |

## onError

```TypeScript
onError(callback: import('../api/@ohos.base').ErrorCallback)
```

Called when some error occurred.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').ErrorCallback | Yes |  |

## onTerminated

```TypeScript
onTerminated(callback: import('../api/@ohos.base').Callback<TerminationInfo>)
```

Called when the provider of the embedded UI is terminated.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').Callback&lt;TerminationInfo> | Yes |  |

