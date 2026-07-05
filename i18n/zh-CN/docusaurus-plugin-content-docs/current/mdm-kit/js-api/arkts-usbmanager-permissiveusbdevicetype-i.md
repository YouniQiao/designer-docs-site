# PermissiveUsbDeviceType

Permissive USB device Type.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

## 导入模块

```TypeScript
import { usbManager } from '@kit.MDMKit';
```

## protocol

```TypeScript
protocol?: number
```

The protocol in USB class code information. The value must be an integer within [0,255].

**类型：** number

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

## subClass

```TypeScript
subClass?: number
```

The subclass in USB class code information. The value must be an integer within [0,255].

**类型：** number

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

## baseClass

```TypeScript
baseClass: number
```

The base class in USB class code information. The value must be an integer within [0,255].

**类型：** number

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

## descriptor

```TypeScript
descriptor?: Descriptor
```

The descriptor that the class code is used in.

**类型：** Descriptor

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

