# SecurityUIExtensionProxy

This interface is used for send data to the UIExtensionAbility.<br/> It is returned from onRemoteReady callback of UIExtensionComponent<br/> when UIExtensionAbility connects successfully

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## off('asyncReceiverRegister')

```TypeScript
off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void
```

Deregisters the listener that watches for async data receiver callback being registered by UIExtensionAbility.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'asyncReceiverRegister' | Yes | type of the listened event. |
| callback | Callback&lt;UIExtensionProxy> | No |  |

## off('syncReceiverRegister')

```TypeScript
off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void
```

Deregisters the listener that watches for sync data receiver callback being registered by UIExtensionAbility.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'syncReceiverRegister' | Yes | type of the listened event. |
| callback | Callback&lt;UIExtensionProxy> | No |  |

## on('asyncReceiverRegister')

```TypeScript
on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void
```

Register the listener that watches for async data receiver callback being registered by UIExtensionAbility.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'asyncReceiverRegister' | Yes | Indicates the type of event. |
| callback | Callback&lt;UIExtensionProxy> | Yes | callback of the listened event. |

## on('syncReceiverRegister')

```TypeScript
on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void
```

Register the listener that watches for sync data receiver callback being registered by UIExtensionAbility.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'syncReceiverRegister' | Yes | Indicates the type of event. |
| callback | Callback&lt;UIExtensionProxy> | Yes | callback of the listened event. |

## send

```TypeScript
send(data: Record<string, Object>): void
```

This function is for sending data to the UIExtensionAbility.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | Record&lt;string, Object> | Yes |  |

## sendSync

```TypeScript
sendSync(data: Record<string, Object>): Record<string, Object>
```

This function is for sending data to the UIExtensionAbility and waiting the result in blocking mode.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | Record&lt;string, Object> | Yes | data send to the UIExtensionAbility |

**Return value:**

| Type | Description |
| --- | --- |
| Record&lt;string, Object> | data - data transferred from the UIExtensionAbility |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 100011 | No callback has been registered to response this request. |
| 100012 | Transferring data failed. |

