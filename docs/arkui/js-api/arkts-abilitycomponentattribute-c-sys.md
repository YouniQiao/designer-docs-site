# AbilityComponentAttribute

Define the attribute functions of ability component.

**Inheritance:** AbilityComponentAttributeextends: CommonMethod<AbilityComponentAttribute>.

**Since:** 9

**Deprecated since:** 10

**Substitute:** UIExtensionComponentAttribute

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## onConnect

```TypeScript
onConnect(callback: () => void)
```

Called when the component is connected to ability.

**Since:** 9

**Deprecated since:** 10

**Substitute:** UIExtensionComponent#onRemoteReady

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () => void | Yes | A callback instance used when connected. |

## onDisconnect

```TypeScript
onDisconnect(callback: () => void)
```

Called when the component is disconnected.

**Since:** 9

**Deprecated since:** 10

**Substitute:** UIExtensionComponent#onRelease

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | () => void | Yes | A callback instance used when disconnected. |

