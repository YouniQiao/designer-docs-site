# UIExtensionProxy (System API)

This interface is used for send data to the UIExtensionAbility.<br/>It is returned from onRemoteReady callback of UIExtensionComponent<br/>when UIExtensionAbility connects successfully

**Since:** 10

<!--Device-unnamed-declare interface UIExtensionProxy--><!--Device-unnamed-declare interface UIExtensionProxy-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## off('asyncReceiverRegister')

```TypeScript
off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void
```

Deregisters the listener that watches for async data receiver callback being registered by UIExtensionAbility.AnonyMous Object Rectification

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIExtensionProxy-off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void--><!--Device-UIExtensionProxy-off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'asyncReceiverRegister' | Yes | Type of the listened event. |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;UIExtensionProxy&gt; | No | Callback of the listened event. |

## off('syncReceiverRegister')

```TypeScript
off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void
```

Deregisters the listener that watches for sync data receiver callback being registered by UIExtensionAbility.AnonyMous Object Rectification

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIExtensionProxy-off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void--><!--Device-UIExtensionProxy-off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'syncReceiverRegister' | Yes | Type of the listened event. |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;UIExtensionProxy&gt; | No | Callback of the listened event. |

## on('asyncReceiverRegister')

```TypeScript
on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void
```

Register the listener that watches for async data receiver callback being registered by UIExtensionAbility.AnonyMous Object Rectification

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIExtensionProxy-on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void--><!--Device-UIExtensionProxy-on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'asyncReceiverRegister' | Yes | Indicates the type of event. |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;UIExtensionProxy&gt; | Yes | Callback of the listened event. |

## on('syncReceiverRegister')

```TypeScript
on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void
```

Register the listener that watches for sync data receiver callback being registered by UIExtensionAbility.AnonyMous Object Rectification

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIExtensionProxy-on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void--><!--Device-UIExtensionProxy-on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'syncReceiverRegister' | Yes | Indicates the type of event. |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;UIExtensionProxy&gt; | Yes | Callback of the listened event. |

## send

```TypeScript
send(data: Record<string, Object>): void
```

This function is for sending data to the UIExtensionAbility.AnonyMous Object Rectification

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIExtensionProxy-send(data: Record<string, Object>): void--><!--Device-UIExtensionProxy-send(data: Record<string, Object>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)&lt;string, Object&gt; | Yes |  |

## sendSync

```TypeScript
sendSync(data: Record<string, Object>): Record<string, Object>
```

This function is for sending data to the UIExtensionAbility and waiting the result in blocking mode.AnonyMous Object Rectification

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-UIExtensionProxy-sendSync(data: Record<string, Object>): Record<string, Object>--><!--Device-UIExtensionProxy-sendSync(data: Record<string, Object>): Record<string, Object>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)&lt;string, Object&gt; | Yes | Data send to the UIExtensionAbility. |

**Return value:**

| Type | Description |
| --- | --- |
| [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)&lt;string, Object&gt; | data - Data transferred from the UIExtensionAbility. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100011](../errorcode-uiextension.md#100011-no-synchronous-callback-registered) | No callback has been registered to respond to this request. |
| [100012](../errorcode-uiextension.md#100012-data-transfer-failure) | Transferring data failed. |

