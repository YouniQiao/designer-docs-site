# EmbeddedComponent properties/events

Define the attribute functions of EmbeddedComponent.

**Inheritance/Implementation:** EmbeddedComponentAttribute extends [CommonMethod<EmbeddedComponentAttribute>](CommonMethod<EmbeddedComponentAttribute>)

**Since:** 12

<!--Device-unnamed-declare class EmbeddedComponentAttribute extends CommonMethod<EmbeddedComponentAttribute>--><!--Device-unnamed-declare class EmbeddedComponentAttribute extends CommonMethod<EmbeddedComponentAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDrawReady

```TypeScript
onDrawReady(callback: Callback<void>)
```

Callback called when the EmbeddedUIExtensionAbility draw the first frame.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EmbeddedComponentAttribute-onDrawReady(callback: Callback<void>): EmbeddedComponentAttribute--><!--Device-EmbeddedComponentAttribute-onDrawReady(callback: Callback<void>): EmbeddedComponentAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)<void> | Yes |  |

## onError

```TypeScript
onError(callback: import('../api/@ohos.base').ErrorCallback)
```

Called when some error occurred.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-EmbeddedComponentAttribute-onError(callback: import('../api/@ohos.base').ErrorCallback): EmbeddedComponentAttribute--><!--Device-EmbeddedComponentAttribute-onError(callback: import('../api/@ohos.base').ErrorCallback): EmbeddedComponentAttribute-End-->

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

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-EmbeddedComponentAttribute-onTerminated(callback: import('../api/@ohos.base').Callback<TerminationInfo>): EmbeddedComponentAttribute--><!--Device-EmbeddedComponentAttribute-onTerminated(callback: import('../api/@ohos.base').Callback<TerminationInfo>): EmbeddedComponentAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | import('../api/@ohos.base').Callback<TerminationInfo> | Yes |  |

