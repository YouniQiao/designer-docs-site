# PanelAttribute

Pane Attribute.

**继承实现关系：** PanelAttribute继承自：CommonMethod<PanelAttribute>。

**起始版本：** 11

**废弃版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## backgroundMask

```TypeScript
backgroundMask(color: ResourceColor)
```

Called when the panel background mask is requested.

**起始版本：** 11

**废弃版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | ResourceColor | 是 |  |

## customHeight

```TypeScript
customHeight(value: Dimension | PanelHeight)
```

Sets the height. It is valid only when PanelType is set to Custom.

**起始版本：** 11

**废弃版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Dimension \| PanelHeight | 是 | value - Content height to set. |

## dragBar

```TypeScript
dragBar(value: boolean)
```

Called when determining whether dragbar exists.

**起始版本：** 11

**废弃版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 |  |

## fullHeight

```TypeScript
fullHeight(value: number | string)
```

Called when the height in the full state is specified.

**起始版本：** 11

**废弃版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| string | 是 |  |

## halfHeight

```TypeScript
halfHeight(value: number | string)
```

Called when the height in the half state is specified.

**起始版本：** 11

**废弃版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| string | 是 |  |

## miniHeight

```TypeScript
miniHeight(value: number | string)
```

Called when the height in the mini state is specified.

**起始版本：** 11

**废弃版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number \| string | 是 |  |

## mode

```TypeScript
mode(value: PanelMode)
```

Called when the initial state of the slidable panel is set.

**起始版本：** 11

**废弃版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | PanelMode | 是 |  |

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

**起始版本：** 11

**废弃版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| event | (
    /**
     * Width of content area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Width of content area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 12
     */
      width: number,

    /**
     * Height of content area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Height of content area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 12
     */
      height: number,

    /**
     * Initial state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Initial state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @FaAndStageModel
     * @atomicservice
     * @since 11 dynamiconly
     * @deprecated since 12
     */
      mode: PanelMode,
    ) => void | 是 |  |

## onHeightChange

```TypeScript
onHeightChange(callback: (value: number) => void)
```

Called when height of the panel is changed

**起始版本：** 11

**废弃版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | (value: number) => void | 是 |  |

## show

```TypeScript
show(value: boolean)
```

Called when the panel slidable panel pops up.

**起始版本：** 11

**废弃版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 |  |

## showCloseIcon

```TypeScript
showCloseIcon(value: boolean)
```

Called when the panel show close icon.

**起始版本：** 11

**废弃版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | used to set whether to display the close icon. |

## type

```TypeScript
type(value: PanelType)
```

Called when the slidable panel type is set.

**起始版本：** 11

**废弃版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | PanelType | 是 |  |

