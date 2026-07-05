# xcomponent

Defines XComponent Component instance.

## xcomponent

```TypeScript
xcomponent(value: { id: string; type: string; libraryname?: string; controller?: XComponentController })
```

Constructor parameters

**起始版本：** 8

**废弃版本：** 12

**替代接口：** (value:

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | { id: string; type: string; libraryname?: string; controller?: XComponentController } | 是 | Indicates the options of the xcomponent. |

```TypeScript
xcomponent(value: { id: string; type: XComponentType; libraryname?: string; controller?: XComponentController })
```

Constructor parameters

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | { id: string; type: XComponentType; libraryname?: string; controller?: XComponentController } | 是 | Indicates the options of the xcomponent. |

```TypeScript
xcomponent(options: XComponentOptions)
```

Constructor parameters

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | XComponentOptions | 是 | Indicates the options of the xcomponent. |

```TypeScript
xcomponent(params: NativeXComponentParameters)
```

Constructor parameters

**起始版本：** 19

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | NativeXComponentParameters | 是 | Indicates the constructor parameters of the xcomponent for native developing. |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [XComponentAttribute](arkts-xcomponentattribute-c.md) | Defines XComponentAttribute. |
| [XComponentController](arkts-xcomponentcontroller-c.md) | Defines the controller of the XComponent. You can bind the controller to the XComponent to call the component APIs through the controller. |

### 接口

| 名称 | 描述 |
| --- | --- |
| [NativeXComponentParameters](arkts-nativexcomponentparameters-i.md) | Defines the native xcomponent parameters. |
| [SurfaceConfig](arkts-surfaceconfig-i.md) | Surface config. |
| [SurfaceRect](arkts-surfacerect-i.md) | Surface Rectangle information. |
| [SurfaceRotationOptions](arkts-surfacerotationoptions-i.md) | Surface rotation options. |
| [XComponentInterface](arkts-xcomponentinterface-i.md) | Defines XComponent. |
| [XComponentOptions](arkts-xcomponentoptions-i.md) | Defines the xcomponent options. |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [HdrType](arkts-hdrtype-e.md) | Sets the HDR type of the XComponent. |

### 类型

| 名称 | 描述 |
| --- | --- |
| [OnNativeLoadCallback](arkts-onnativeloadcallback-t.md) | Triggered after the surface held by the XComponent is created. |

### 常量

| 名称 | 描述 |
| --- | --- |
| [XComponent](arkts-xcomponent-con.md#XComponent) | Defines XComponent Component. |
| [XComponentInstance](arkts-xcomponent-con.md#XComponentInstance) | Defines XComponent Component instance. |

