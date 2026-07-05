# SecurityUIExtensionProxy

This interface is used for send data to the UIExtensionAbility.<br/> It is returned from onRemoteReady callback of UIExtensionComponent<br/> when UIExtensionAbility connects successfully

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

## off('asyncReceiverRegister')

```TypeScript
off(type: 'asyncReceiverRegister', callback?: Callback<UIExtensionProxy>): void
```

Deregisters the listener that watches for async data receiver callback being registered by UIExtensionAbility.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'asyncReceiverRegister' | 是 | type of the listened event. |
| callback | Callback&lt;UIExtensionProxy> | 否 |  |

## off('syncReceiverRegister')

```TypeScript
off(type: 'syncReceiverRegister', callback?: Callback<UIExtensionProxy>): void
```

Deregisters the listener that watches for sync data receiver callback being registered by UIExtensionAbility.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'syncReceiverRegister' | 是 | type of the listened event. |
| callback | Callback&lt;UIExtensionProxy> | 否 |  |

## on('asyncReceiverRegister')

```TypeScript
on(type: 'asyncReceiverRegister', callback: Callback<UIExtensionProxy>): void
```

Register the listener that watches for async data receiver callback being registered by UIExtensionAbility.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'asyncReceiverRegister' | 是 | Indicates the type of event. |
| callback | Callback&lt;UIExtensionProxy> | 是 | callback of the listened event. |

## on('syncReceiverRegister')

```TypeScript
on(type: 'syncReceiverRegister', callback: Callback<UIExtensionProxy>): void
```

Register the listener that watches for sync data receiver callback being registered by UIExtensionAbility.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'syncReceiverRegister' | 是 | Indicates the type of event. |
| callback | Callback&lt;UIExtensionProxy> | 是 | callback of the listened event. |

## send

```TypeScript
send(data: Record<string, Object>): void
```

This function is for sending data to the UIExtensionAbility.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | Record&lt;string, Object> | 是 |  |

## sendSync

```TypeScript
sendSync(data: Record<string, Object>): Record<string, Object>
```

This function is for sending data to the UIExtensionAbility and waiting the result in blocking mode.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | Record&lt;string, Object> | 是 | data send to the UIExtensionAbility |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Record&lt;string, Object> | data - data transferred from the UIExtensionAbility |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 100011 | No callback has been registered to response this request. |
| 100012 | Transferring data failed. |

