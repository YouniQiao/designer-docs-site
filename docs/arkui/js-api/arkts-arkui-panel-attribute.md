# Panel properties/events

Pane Attribute.

**Inheritance/Implementation:** PanelAttribute extends [CommonMethod<PanelAttribute>](CommonMethod<PanelAttribute>)

**Since:** 11

**Deprecated since:** 12

<!--Device-unnamed-declare class PanelAttribute extends CommonMethod<PanelAttribute>--><!--Device-unnamed-declare class PanelAttribute extends CommonMethod<PanelAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundMask

```TypeScript
backgroundMask(color: ResourceColor)
```

Called when the panel background mask is requested.

**Since:** 11

**Deprecated since:** 12

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanelAttribute-backgroundMask(color: ResourceColor): PanelAttribute--><!--Device-PanelAttribute-backgroundMask(color: ResourceColor): PanelAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes |  |

## customHeight

```TypeScript
customHeight(value: Dimension | PanelHeight)
```

Sets the height. It is valid only when PanelType is set to Custom.

**Since:** 11

**Deprecated since:** 12

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanelAttribute-customHeight(value: Dimension | PanelHeight): PanelAttribute--><!--Device-PanelAttribute-customHeight(value: Dimension | PanelHeight): PanelAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Dimension \| PanelHeight | Yes | value - Content height to set. |

## dragBar

```TypeScript
dragBar(value: boolean)
```

Called when determining whether dragbar exists.

**Since:** 11

**Deprecated since:** 12

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanelAttribute-dragBar(value: boolean): PanelAttribute--><!--Device-PanelAttribute-dragBar(value: boolean): PanelAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes |  |

## fullHeight

```TypeScript
fullHeight(value: number | string)
```

Called when the height in the full state is specified.

**Since:** 11

**Deprecated since:** 12

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanelAttribute-fullHeight(value: number | string): PanelAttribute--><!--Device-PanelAttribute-fullHeight(value: number | string): PanelAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes |  |

## halfHeight

```TypeScript
halfHeight(value: number | string)
```

Called when the height in the half state is specified.

**Since:** 11

**Deprecated since:** 12

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanelAttribute-halfHeight(value: number | string): PanelAttribute--><!--Device-PanelAttribute-halfHeight(value: number | string): PanelAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes |  |

## miniHeight

```TypeScript
miniHeight(value: number | string)
```

Called when the height in the mini state is specified.

**Since:** 11

**Deprecated since:** 12

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanelAttribute-miniHeight(value: number | string): PanelAttribute--><!--Device-PanelAttribute-miniHeight(value: number | string): PanelAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes |  |

## mode

```TypeScript
mode(value: PanelMode)
```

Called when the initial state of the slidable panel is set.

**Since:** 11

**Deprecated since:** 12

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanelAttribute-mode(value: PanelMode): PanelAttribute--><!--Device-PanelAttribute-mode(value: PanelMode): PanelAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [PanelMode](arkts-arkui-panel-panelmode-e.md) | Yes |  |

## onChange

```TypeScript
onChange(
    event: (
    /**
     * Width of content area.
     *
     ***/
    /**
     * Width of content area.
     *
     ******/
      width: number,

    /**
     * Height of content area.
     *
     ***/
    /**
     * Height of content area.
     *
     ******/
      height: number,

    /**
     * Initial state.
     *
     ***/
    /**
     * Initial state.
     *
     ******/
      mode: PanelMode,
    ) => void,
  )
```

Called when the state of the slidable panel changes.

**Since:** 11

**Deprecated since:** 12

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanelAttribute-onChange(
    event: (
    /**
     * Width of content area.
     *
     ***/
    /**
     * Width of content area.
     *
     ******/
      width: number,

    /**
     * Height of content area.
     *
     ***/
    /**
     * Height of content area.
     *
     ******/
      height: number,

    /**
     * Initial state.
     *
     ***/
    /**
     * Initial state.
     *
     ******/
      mode: PanelMode,
    ) => void,
  ): PanelAttribute--><!--Device-PanelAttribute-onChange(
    event: (
    /**
     * Width of content area.
     *
     ***/
    /**
     * Width of content area.
     *
     ******/
      width: number,

    /**
     * Height of content area.
     *
     ***/
    /**
     * Height of content area.
     *
     ******/
      height: number,

    /**
     * Initial state.
     *
     ***/
    /**
     * Initial state.
     *
     ******/
      mode: PanelMode,
    ) => void,
  ): PanelAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (     /**      * Width of content area.      *      * @syscap SystemCapability.ArkUI.ArkUI.Full      * @since 7      */     /**      * Width of content area.      *      * @syscap SystemCapability.ArkUI.ArkUI.Full      * @FaAndStageModel      * @atomicservice      * @since 11 dynamiconly      * @deprecated since 12      */       width: number,      /**      * Height of content area.      *      * @syscap SystemCapability.ArkUI.ArkUI.Full      * @since 7      */     /**      * Height of content area.      *      * @syscap SystemCapability.ArkUI.ArkUI.Full      * @FaAndStageModel      * @atomicservice      * @since 11 dynamiconly      * @deprecated since 12      */       height: number,      /**      * Initial state.      *      * @syscap SystemCapability.ArkUI.ArkUI.Full      * @since 7      */     /**      * Initial state.      *      * @syscap SystemCapability.ArkUI.ArkUI.Full      * @FaAndStageModel      * @atomicservice      * @since 11 dynamiconly      * @deprecated since 12      */       mode: PanelMode,     ) => void | Yes |  |

## onHeightChange

```TypeScript
onHeightChange(callback: (value: number) => void)
```

Called when height of the panel is changed

**Since:** 11

**Deprecated since:** 12

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanelAttribute-onHeightChange(callback: (value: number) => void): PanelAttribute--><!--Device-PanelAttribute-onHeightChange(callback: (value: number) => void): PanelAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (value: number) => void | Yes |  |

## show

```TypeScript
show(value: boolean)
```

Called when the panel slidable panel pops up.

**Since:** 11

**Deprecated since:** 12

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanelAttribute-show(value: boolean): PanelAttribute--><!--Device-PanelAttribute-show(value: boolean): PanelAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes |  |

## showCloseIcon

```TypeScript
showCloseIcon(value: boolean)
```

Called when the panel show close icon.

**Since:** 11

**Deprecated since:** 12

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanelAttribute-showCloseIcon(value: boolean): PanelAttribute--><!--Device-PanelAttribute-showCloseIcon(value: boolean): PanelAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | used to set whether to display the close icon. |

## type

```TypeScript
type(value: PanelType)
```

Called when the slidable panel type is set.

**Since:** 11

**Deprecated since:** 12

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-PanelAttribute-type(value: PanelType): PanelAttribute--><!--Device-PanelAttribute-type(value: PanelType): PanelAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [PanelType](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-selectioninput-selectionpanel-paneltype-e-sys.md) | Yes |  |

