# DynamicComponentAttribute

Define the attribute functions of DynamicComponent.

**Inheritance:** DynamicComponentAttributeextends: CommonMethod<DynamicComponentAttribute>.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## onError

```TypeScript
onError(
        callback: ErrorCallback
    )
```

Called when the dynamic component is error.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ErrorCallback | Yes | called when some error occurred except disconnected from DynamicAbility. |

