# FormComponentAttribute

**Inheritance:** FormComponentAttributeextends: CommonMethod<FormComponentAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## allowUpdate

```TypeScript
allowUpdate(value: boolean)
```

Indicates whether to allow card update.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes |  |

## colorMode

```TypeScript
colorMode(value: FormColorMode)
```

Set the color mode of the card.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | FormColorMode | Yes | The form color mode to set. |

## dimension

```TypeScript
dimension(value: FormDimension)
```

Set the card size.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | FormDimension | Yes |  |

## moduleName

```TypeScript
moduleName(value: string)
```

Card module name.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes |  |

## onAcquired

```TypeScript
onAcquired(callback: Callback<FormCallbackInfo>)
```

This function is triggered after card information is obtained. For details about the form information, see the definition of the original capability subsystem.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;FormCallbackInfo> | Yes | [since 7 - 11] |

## onError

```TypeScript
onError(callback: Callback<ErrorInformation>)
```

Card loading error. Anonymous Object Rectification

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ErrorInformation> | Yes | [since 7 - 17] |

## onLoad

```TypeScript
onLoad(callback: VoidCallback)
```

Card to be loaded. Anonymous Object Rectification

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | VoidCallback | Yes | [since 10 - 17] |

## onRouter

```TypeScript
onRouter(callback: Callback<object>)
```

Card to be redirected. Anonymous Object Rectification

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;object> | Yes | [since 7 - 17] |

## onUninstall

```TypeScript
onUninstall(callback: Callback<FormCallbackInfo>)
```

Uninstall Card.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;FormCallbackInfo> | Yes | [since 7 - 11] |

## onUpdate

```TypeScript
onUpdate(callback: Callback<FormCallbackInfo>)
```

Card has been updated.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;FormCallbackInfo> | Yes |  |

## size

```TypeScript
size(formSize: FormSize)
```

Sets the display area size of the card. Anonymous Object Rectification

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| formSize | FormSize | Yes | The size of Form. [since 18] |

## visibility

```TypeScript
visibility(value: Visibility)
```

Whether the card is visible.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Visibility | Yes |  |

