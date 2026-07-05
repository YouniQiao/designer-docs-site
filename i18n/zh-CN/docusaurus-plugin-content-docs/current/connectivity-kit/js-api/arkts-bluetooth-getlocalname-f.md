# getLocalName

## getLocalName

```TypeScript
function getLocalName(): string
```

Obtains the Bluetooth local name of a device.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** ohos.bluetoothManager/bluetoothManager.getLocalName

**需要权限：** 

 ohos.permission.USE_BLUETOOTH

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns the name the device. |

**示例：**

```TypeScript
let localName : string = bluetooth.getLocalName();

```

