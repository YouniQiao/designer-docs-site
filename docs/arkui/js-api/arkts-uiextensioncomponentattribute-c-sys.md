# UIExtensionComponentAttribute

Define the attribute functions of UIExtensionComponent.

**Inheritance:** UIExtensionComponentAttributeextends: CommonMethod<UIExtensionComponentAttribute>.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## onDrawReady

```TypeScript
onDrawReady(callback: Callback<void>)
```

Callback called when the UIExtensionAbility draw the first frame.

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes |  |

## onError

```TypeScript
onError(
    callback: import('../api/)
```

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').ErrorCallback | Yes | - called when some error occurred except disconnected from UIExtensionAbility. |

## onReceive

```TypeScript
onReceive(callback: ReceiveCallback)
```

AnonyMous Object Rectification

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ReceiveCallback | Yes | Called when data received from UIExtensionAbility |

## onRelease

```TypeScript
onRelease(
    callback: import('../api/)
```

**Since:** 10

**Deprecated since:** 12

**Substitute:** UIExtensionComponentAttribute#onTerminated

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').Callback&lt;number> | Yes | - number returned from callback function if disconnected from UIExtensionAbility, 0 means the  UIExtensionAbility is terminate by itself, otherwise the connect is broken abnormal. |

## onRemoteReady

```TypeScript
onRemoteReady(
    callback: import('../api/)
```

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').Callback&lt;UIExtensionProxy> | Yes | - callback called when remote UIExtensionAbility object is  ready for receive data |

## onResult

```TypeScript
onResult(
    callback: import('../api/code: number;
      want?: import('../api/}>
  )
```

**Since:** 10

**Deprecated since:** 12

**Substitute:** UIExtensionComponentAttribute#onTerminated

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').Callback&lt;{
      code: number;
      want?: import('../api/@ohos.app.ability.Want').default;
    }> | Yes | - called when the UIExtensionAbility is terminated with result data. |

## onTerminated

```TypeScript
onTerminated(callback: Callback<TerminationInfo>)
```

Called when the provider of the embedded UI is terminated.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;TerminationInfo> | Yes |  |

