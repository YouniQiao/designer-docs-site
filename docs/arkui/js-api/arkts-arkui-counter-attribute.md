# Counter properties/events

In addition to the [universal attributes](docroot://reference/apis-arkui/arkui-ts/ts-component-general-attributes.md), the following attributes are supported.

In addition to the [universal events](docroot://reference/apis-arkui/arkui-ts/ts-component-general-events.md), the following events are supported.

**Inheritance/Implementation:** CounterAttribute extends [CommonMethod<CounterAttribute>](CommonMethod<CounterAttribute>)

**Since:** 7

<!--Device-unnamed-declare class CounterAttribute extends CommonMethod<CounterAttribute>--><!--Device-unnamed-declare class CounterAttribute extends CommonMethod<CounterAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="enabledec"></a>
## enableDec

```TypeScript
enableDec(value: boolean)
```

Sets whether to enable the decrement button.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CounterAttribute-enableDec(value: boolean): CounterAttribute--><!--Device-CounterAttribute-enableDec(value: boolean): CounterAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to enable the decrement button.<br>Default value: **true**. The value **true** means to enable the decrement button, and the value **false** means the opposite. |

<a id="enableinc"></a>
## enableInc

```TypeScript
enableInc(value: boolean)
```

Sets whether to enable the increment button.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CounterAttribute-enableInc(value: boolean): CounterAttribute--><!--Device-CounterAttribute-enableInc(value: boolean): CounterAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to enable the increment button.<br>Default value: **true**. The value **true** means to enable the increment button, and the value **false** means the opposite. |

<a id="ondec"></a>
## onDec

```TypeScript
onDec(event: VoidCallback)
```

Invoked when the value decreases.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CounterAttribute-onDec(event: VoidCallback): CounterAttribute--><!--Device-CounterAttribute-onDec(event: VoidCallback): CounterAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [VoidCallback](../arkts-apis/arkts-arkui-voidcallback-t.md) | Yes | Callback invoked when the value decreases.<br>**Since:** 18 |

<a id="oninc"></a>
## onInc

```TypeScript
onInc(event: VoidCallback)
```

Invoked when the value increases.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CounterAttribute-onInc(event: VoidCallback): CounterAttribute--><!--Device-CounterAttribute-onInc(event: VoidCallback): CounterAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [VoidCallback](../arkts-apis/arkts-arkui-voidcallback-t.md) | Yes | Callback invoked when the value increases.<br>**Since:** 18 |

