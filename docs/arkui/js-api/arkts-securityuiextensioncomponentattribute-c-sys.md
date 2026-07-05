# SecurityUIExtensionComponentAttribute

Define the attribute functions of UIExtensionComponent.

**Inheritance:** SecurityUIExtensionComponentAttributeextends: CommonMethod<SecurityUIExtensionComponentAttribute>.

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## onError

```TypeScript
onError(
    callback: import('../api/)
```

called when some error occurred except disconnected from UIExtensionAbility.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').ErrorCallback | Yes | called when some error occurred except disconnected from UIExtensionAbility. |

## onReceive

```TypeScript
onReceive(
    callback: import('../api/)
```

called when data received from UIExtensionAbility.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').Callback&lt;{ [key: string]: Object }> | Yes | called when data received from UIExtensionAbility. |

## onRemoteReady

```TypeScript
onRemoteReady(
    callback: import('../api/)
```

callback called when remote UIExtensionAbility object is <br/>ready for receive data

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').Callback&lt;SecurityUIExtensionProxy> | Yes | When the remote UIExtensionAbility object is ready to receive data |

## onTerminated

```TypeScript
onTerminated(callback: Callback<TerminationInfo>)
```

Called when the provider of the embedded UI is terminated.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;TerminationInfo> | Yes |  |

