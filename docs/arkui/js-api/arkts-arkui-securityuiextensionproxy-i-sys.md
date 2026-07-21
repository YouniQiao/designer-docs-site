# SecurityUIExtensionProxy (System API)

This interface is used for send data to the UIExtensionAbility.<br/>It is returned from onRemoteReady callback of UIExtensionComponent<br/>when UIExtensionAbility connects successfully

**Since:** 26.0.0

<!--Device-unnamed-declare interface SecurityUIExtensionProxy--><!--Device-unnamed-declare interface SecurityUIExtensionProxy-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

<a id="off"></a>
## off('asyncReceiverRegister')

```TypeScript
off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void
```

Deregisters the listener that watches for async data receiver callback being registered by UIExtensionAbility.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SecurityUIExtensionProxy-off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void--><!--Device-SecurityUIExtensionProxy-off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'asyncReceiverRegister' | Yes | type of the listened event. |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;UIExtensionProxy&gt; | No | callback of the listened event. |

<a id="off-1"></a>
## off('syncReceiverRegister')

```TypeScript
off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void
```

Deregisters the listener that watches for sync data receiver callback being registered by UIExtensionAbility.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SecurityUIExtensionProxy-off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void--><!--Device-SecurityUIExtensionProxy-off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'syncReceiverRegister' | Yes | type of the listened event. |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;UIExtensionProxy&gt; | No | callback of the listened event. |

<a id="on"></a>
## on('asyncReceiverRegister')

```TypeScript
on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void
```

Register the listener that watches for async data receiver callback being registered by UIExtensionAbility.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SecurityUIExtensionProxy-on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void--><!--Device-SecurityUIExtensionProxy-on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'asyncReceiverRegister' | Yes | Indicates the type of event. |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;UIExtensionProxy&gt; | Yes | callback of the listened event. |

<a id="on-1"></a>
## on('syncReceiverRegister')

```TypeScript
on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void
```

Register the listener that watches for sync data receiver callback being registered by UIExtensionAbility.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SecurityUIExtensionProxy-on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void--><!--Device-SecurityUIExtensionProxy-on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'syncReceiverRegister' | Yes | Indicates the type of event. |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;UIExtensionProxy&gt; | Yes | callback of the listened event. |

<a id="send"></a>
## send

```TypeScript
send(data: Record<string, Object>): void
```

This function is for sending data to the UIExtensionAbility.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SecurityUIExtensionProxy-send(data: Record<string, Object>): void--><!--Device-SecurityUIExtensionProxy-send(data: Record<string, Object>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)&lt;string, Object&gt; | Yes |  |

<a id="sendsync"></a>
## sendSync

```TypeScript
sendSync(data: Record<string, Object>): Record<string, Object>
```

This function is for sending data to the UIExtensionAbility and waiting the result in blocking mode.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-SecurityUIExtensionProxy-sendSync(data: Record<string, Object>): Record<string, Object>--><!--Device-SecurityUIExtensionProxy-sendSync(data: Record<string, Object>): Record<string, Object>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)&lt;string, Object&gt; | Yes | data send to the UIExtensionAbility |

**Return value:**

| Type | Description |
| --- | --- |
| [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)&lt;string, Object&gt; | data - data transferred from the UIExtensionAbility |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [100011](../errorcode-uiextension.md#100011-no-synchronous-callback-registered) | No callback has been registered to response this request. |
| [100012](../errorcode-uiextension.md#100012-data-transfer-failure) | Transferring data failed. |

