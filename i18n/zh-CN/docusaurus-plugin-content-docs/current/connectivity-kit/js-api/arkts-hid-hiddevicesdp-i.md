# HidDeviceSdp

Describe the HID device capability fields of this endpoint being queried.

**起始版本：** 23

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## 导入模块

```TypeScript
import { hid } from '@kit.ConnectivityKit';
```

## descriptors

```TypeScript
descriptors: Uint8Array
```

descriptors identifies the descriptors associated with the bluetooth hid device.

**类型：** Uint8Array

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## provider

```TypeScript
provider: string
```

provider of this Bluetooth hid device. Maximum length is 50 bytes.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## subclass

```TypeScript
subclass: Subclass
```

Subclass of this Bluetooth HID device. Subclass represents the specific HID device type.

**类型：** Subclass

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## name

```TypeScript
name: string
```

name of this Bluetooth hid device. Maximum length is 50 bytes.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

## description

```TypeScript
description: string
```

description for this Bluetooth hid device. Maximum length is 50 bytes.

**类型：** string

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

