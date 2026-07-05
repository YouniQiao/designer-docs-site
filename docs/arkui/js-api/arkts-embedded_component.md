# embedded_component

Defines EmbeddedComponent Component instance.

## embedded_component

```TypeScript
embedded_component(
    loader: import('../api/type: EmbeddedType
  )
```

Construct the EmbeddedComponent.<br/> Called when the EmbeddedComponent is used.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| loader | import('../api/@ohos.app.ability.Want').default | Yes | indicates initialization parameter |
| type | EmbeddedType | Yes | indicates type of the EmbeddedComponent |

```TypeScript
embedded_component(
    loader: import('../api/type: EmbeddedType,
    options?: EmbeddedOptions
  )
```

Construct the EmbeddedComponent.<br/> Called when the EmbeddedComponent is used.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| loader | import('../api/@ohos.app.ability.Want').default | Yes | indicates initialization parameter |
| type | EmbeddedType | Yes | indicates type of the EmbeddedComponent |
| options | EmbeddedOptions | No | construction configuration of EmbeddedComponent |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [EmbeddedComponentAttribute](arkts-embeddedcomponentattribute-c.md) | Define the attribute functions of EmbeddedComponent. |

### Interfaces

| Name | Description |
| --- | --- |
| [EmbeddedComponentInterface](arkts-embeddedcomponentinterface-i.md) | Provide an interface for the EmbeddedComponent, which is used <br/>to render UI asynchronously |
| [EmbeddedOptions](arkts-embeddedoptions-i.md) | This interface is used to set the options for EmbeddedComponentAttribute during construction |
| [TerminationInfo](arkts-terminationinfo-i.md) | Indicates the information when the provider of the embedded UI is terminated. |

### Enums

| Name | Description |
| --- | --- |
| [EmbeddedDpiFollowStrategy](arkts-embeddeddpifollowstrategy-e.md) | Enumeration of different types of EmbeddedDpiFollowStrategy. |
| [EmbeddedWindowModeFollowStrategy](arkts-embeddedwindowmodefollowstrategy-e.md) | Enumeration of different types of EmbeddedWindowModeFollowStrategy. |

### Constants

| Name | Description |
| --- | --- |
| [EmbeddedComponent](arkts-embedded-component-con.md#EmbeddedComponent) | Defines EmbeddedComponent Component. |
| [EmbeddedComponentInstance](arkts-embedded-component-con.md#EmbeddedComponentInstance) | Defines EmbeddedComponent Component instance. |

