# xcomponent

Defines XComponent Component instance.

## xcomponent

```TypeScript
xcomponent(value: { id: string; type: string; libraryname?: string; controller?: XComponentController })
```

Constructor parameters

**Since:** 8

**Deprecated since:** 12

**Substitute:** (value:

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | { id: string; type: string; libraryname?: string; controller?: XComponentController } | Yes | Indicates the options of the xcomponent. |

```TypeScript
xcomponent(value: { id: string; type: XComponentType; libraryname?: string; controller?: XComponentController })
```

Constructor parameters

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | { id: string; type: XComponentType; libraryname?: string; controller?: XComponentController } | Yes | Indicates the options of the xcomponent. |

```TypeScript
xcomponent(options: XComponentOptions)
```

Constructor parameters

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | XComponentOptions | Yes | Indicates the options of the xcomponent. |

```TypeScript
xcomponent(params: NativeXComponentParameters)
```

Constructor parameters

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | NativeXComponentParameters | Yes | Indicates the constructor parameters of the xcomponent for native developing. |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [XComponentAttribute](arkts-xcomponentattribute-c.md) | Defines XComponentAttribute. |
| [XComponentController](arkts-xcomponentcontroller-c.md) | Defines the controller of the XComponent. You can bind the controller to the XComponent to call the component APIs through the controller. |

### Interfaces

| Name | Description |
| --- | --- |
| [NativeXComponentParameters](arkts-nativexcomponentparameters-i.md) | Defines the native xcomponent parameters. |
| [SurfaceConfig](arkts-surfaceconfig-i.md) | Surface config. |
| [SurfaceRect](arkts-surfacerect-i.md) | Surface Rectangle information. |
| [SurfaceRotationOptions](arkts-surfacerotationoptions-i.md) | Surface rotation options. |
| [XComponentInterface](arkts-xcomponentinterface-i.md) | Defines XComponent. |
| [XComponentOptions](arkts-xcomponentoptions-i.md) | Defines the xcomponent options. |

### Enums

| Name | Description |
| --- | --- |
| [HdrType](arkts-hdrtype-e.md) | Sets the HDR type of the XComponent. |

### Types

| Name | Description |
| --- | --- |
| [OnNativeLoadCallback](arkts-onnativeloadcallback-t.md) | Triggered after the surface held by the XComponent is created. |

### Constants

| Name | Description |
| --- | --- |
| [XComponent](arkts-xcomponent-con.md#XComponent) | Defines XComponent Component. |
| [XComponentInstance](arkts-xcomponent-con.md#XComponentInstance) | Defines XComponent Component instance. |

