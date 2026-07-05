# getLocalName

## getLocalName

```TypeScript
function getLocalName(): string
```

Obtains the Bluetooth local name of a device.

**Since:** 8

**Deprecated since:** 9

**Substitute:** ohos.bluetoothManager/bluetoothManager.getLocalName

**Required permissions:** 

 ohos.permission.USE_BLUETOOTH

**System capability:** SystemCapability.Communication.Bluetooth.Core

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the name the device. |

**Example**

```TypeScript
let localName : string = bluetooth.getLocalName();

```

