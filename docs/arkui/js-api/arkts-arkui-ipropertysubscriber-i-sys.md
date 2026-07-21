# IPropertySubscriber (System API)

Provides an interface for attribute subscribers.

**Since:** 7

<!--Device-unnamed-interface IPropertySubscriber--><!--Device-unnamed-interface IPropertySubscriber-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

<a id="abouttobedeleted"></a>
## aboutToBeDeleted

```TypeScript
aboutToBeDeleted(owningView?: IPropertySubscriber): void
```

Called when the object is about to be destroyed.

**Since:** 7

<!--Device-IPropertySubscriber-aboutToBeDeleted(owningView?: IPropertySubscriber): void--><!--Device-IPropertySubscriber-aboutToBeDeleted(owningView?: IPropertySubscriber): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| owningView | [IPropertySubscriber](arkts-arkui-ipropertysubscriber-i-sys.md) | No | Component that owns the current property. |

<a id="id"></a>
## id

```TypeScript
id(): number
```

Obtains the ID.

**Since:** 7

<!--Device-IPropertySubscriber-id(): number--><!--Device-IPropertySubscriber-id(): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| number | Variable ID obtained. |

