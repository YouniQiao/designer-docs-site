# SubscribaleAbstract (System API)

Defines the Subscribale base class.

**Since:** 7

<!--Device-unnamed-declare abstract class SubscribaleAbstract--><!--Device-unnamed-declare abstract class SubscribaleAbstract-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

<a id="addowningproperty"></a>
## addOwningProperty

```TypeScript
public addOwningProperty(subscriber: IPropertySubscriber): void
```

Adds a subscriber to the list of owned properties.

**Since:** 7

<!--Device-SubscribaleAbstract-public addOwningProperty(subscriber: IPropertySubscriber): void--><!--Device-SubscribaleAbstract-public addOwningProperty(subscriber: IPropertySubscriber): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriber | [IPropertySubscriber](arkts-arkui-ipropertysubscriber-i-sys.md) | Yes | Subscriber. |

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

Constructor.

**Since:** 7

<!--Device-SubscribaleAbstract-constructor()--><!--Device-SubscribaleAbstract-constructor()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

<a id="notifypropertyhaschanged"></a>
## notifyPropertyHasChanged

```TypeScript
protected notifyPropertyHasChanged(propName: string, newValue: any): void
```

Notify subscribers that a property value has changed.

**Since:** 7

<!--Device-SubscribaleAbstract-protected notifyPropertyHasChanged(propName: string, newValue: any): void--><!--Device-SubscribaleAbstract-protected notifyPropertyHasChanged(propName: string, newValue: any): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| propName | string | Yes | Property name. |
| newValue | any | Yes | New value after the change. |

<a id="removeowningproperty"></a>
## removeOwningProperty

```TypeScript
public removeOwningProperty(property: IPropertySubscriber): void
```

Removes a subscriber from the list of owned properties.

**Since:** 7

<!--Device-SubscribaleAbstract-public removeOwningProperty(property: IPropertySubscriber): void--><!--Device-SubscribaleAbstract-public removeOwningProperty(property: IPropertySubscriber): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| property | [IPropertySubscriber](arkts-arkui-ipropertysubscriber-i-sys.md) | Yes | Subscriber to remove. |

<a id="removeowningpropertybyid"></a>
## removeOwningPropertyById

```TypeScript
public removeOwningPropertyById(subscriberId: number): void
```

Removes a subscriber from the list of owned properties by ID.

**Since:** 7

<!--Device-SubscribaleAbstract-public removeOwningPropertyById(subscriberId: number): void--><!--Device-SubscribaleAbstract-public removeOwningPropertyById(subscriberId: number): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| subscriberId | number | Yes | ID of the subscriber to remove. |

## owningProperties_

```TypeScript
private owningProperties_: Set<number>
```

A set of property IDs that this instance owns.

**Type:** Set&lt;number&gt;

**Since:** 7

<!--Device-SubscribaleAbstract-private owningProperties_: Set<number>--><!--Device-SubscribaleAbstract-private owningProperties_: Set<number>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

