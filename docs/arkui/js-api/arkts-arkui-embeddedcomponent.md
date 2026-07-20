# EmbeddedComponent

Defines EmbeddedComponent Component.


## EmbeddedComponent

```TypeScript
EmbeddedComponent(
    loader: import('../api/type: EmbeddedType
  )
```

Construct the EmbeddedComponent.<br/>Called when the EmbeddedComponent is used.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-EmbeddedComponentInterface-(
    loader: import('../api/type: EmbeddedType
  ): EmbeddedComponentAttribute--><!--Device-EmbeddedComponentInterface-(
    loader: import('../api/type: EmbeddedType
  ): EmbeddedComponentAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| loader | import('../api/@ohos.app.ability.Want').default | Yes | indicates initialization parameter |
| type | EmbeddedType | Yes | indicates type of the EmbeddedComponent |

## EmbeddedComponent

```TypeScript
EmbeddedComponent(
    loader: import('../api/type: EmbeddedType,
    options?: EmbeddedOptions
  )
```

Construct the EmbeddedComponent.<br/>Called when the EmbeddedComponent is used.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-EmbeddedComponentInterface-(
    loader: import('../api/type: EmbeddedType,
    options?: EmbeddedOptions
  ): EmbeddedComponentAttribute--><!--Device-EmbeddedComponentInterface-(
    loader: import('../api/type: EmbeddedType,
    options?: EmbeddedOptions
  ): EmbeddedComponentAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| loader | import('../api/@ohos.app.ability.Want').default | Yes | indicates initialization parameter |
| type | EmbeddedType | Yes | indicates type of the EmbeddedComponent |
| options | EmbeddedOptions | No | construction configuration of EmbeddedComponent |

## Summary

- [EmbeddedOptions](arkts-arkui-embeddedcomponent-embeddedoptions-i.md)
- [TerminationInfo](arkts-arkui-embeddedcomponent-terminationinfo-i.md)
- [EmbeddedDpiFollowStrategy](arkts-arkui-embeddedcomponent-embeddeddpifollowstrategy-e.md)
- [EmbeddedWindowModeFollowStrategy](arkts-arkui-embeddedcomponent-embeddedwindowmodefollowstrategy-e.md)
