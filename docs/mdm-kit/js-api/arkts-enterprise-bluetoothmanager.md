# @ohos.enterprise.bluetoothManager

The **bluetoothManager** module provides Bluetooth management capabilities, including setting and obtaining Bluetooth
information.

> **NOTE**
>
> The APIs of this module can be used only in the stage model.
>
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see
> [MDM Kit Development](../../../../mdm/mdm-kit-guide.md).
>
> The global restriction policies are provided by **restrictions**. To disable Bluetooth globally, see
> [@ohos.enterprise.restrictions](arkts-enterprise-restrictions.md).

**Since:** 11

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { bluetoothManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addAllowedBluetoothDevices](arkts-mdm-addallowedbluetoothdevices-f.md#addallowedbluetoothdevices-1) | Adds Bluetooth devices to the trustlist. After adding devices to this list, the current device will only be allowedto connect to Bluetooth devices in the list. Since API version 22, the MAC addresses in the array must comply withthe Bluetooth MAC address specifications (for example, 00:1A:2B:3C:4D:5E). Invalid MAC addresses will be removedand only valid MAC addresses will be added.A policy conflict is reported when this API is called in the following scenarios:1. Bluetooth has been disabled by calling [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1).You can resolve the conflict by enabling the Bluetooth through [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1).2. Disallowed Bluetooth devices have been added by calling [addDisallowedBluetoothDevices](arkts-mdm-adddisallowedbluetoothdevices-f.md#adddisallowedbluetoothdevices-1).You can resolve the conflict by removing disallowed Bluetooth devices through [removeDisallowedBluetoothDevices](arkts-mdm-removedisallowedbluetoothdevices-f.md#removedisallowedbluetoothdevices-1). |
| [addDisallowedBluetoothDevices](arkts-mdm-adddisallowedbluetoothdevices-f.md#adddisallowedbluetoothdevices-1) | Adds Bluetooth devices to the blocklist. The current device cannot connect to the disallowed Bluetooth devices.Since API version 22, the MAC addresses in the array must comply with the Bluetooth MAC address specifications (forexample, 00:1A:2B:3C:4D:5E). Invalid MAC addresses will be removed and only valid MAC addresses will be added.A policy conflict is reported when this API is called in the following scenarios:1. Bluetooth has been disabled by calling [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1).You can resolve the conflict by enabling the Bluetooth through [setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1).2. Allowed Bluetooth devices have been added by calling [addAllowedBluetoothDevices](arkts-mdm-addallowedbluetoothdevices-f.md#addallowedbluetoothdevices-1).You can resolve the conflict by removing allowed Bluetooth devices through [removeAllowedBluetoothDevices](arkts-mdm-removeallowedbluetoothdevices-f.md#removeallowedbluetoothdevices-1). |
| [addDisallowedBluetoothProtocols](arkts-mdm-adddisallowedbluetoothprotocols-f.md#adddisallowedbluetoothprotocols-1) | Adds disallowed Bluetooth protocols. Specified users cannot use the disallowed Bluetooth protocols to send files toother devices. This API is used to disable the GATT or SPP protocol, which does not take effect for system servicesand system applications. |
| [addDisallowedBluetoothProtocols](arkts-mdm-adddisallowedbluetoothprotocols-f.md#adddisallowedbluetoothprotocols-2) | Adds protocols to the list of bluetooth server that are disallowed to use. |
| [getAllowedBluetoothDevices](arkts-mdm-getallowedbluetoothdevices-f.md#getallowedbluetoothdevices-1) | Obtains allowed Bluetooth devices. |
| [getBluetoothInfo](arkts-mdm-getbluetoothinfo-f.md#getbluetoothinfo-1) | Obtains device Bluetooth information. |
| [getDisallowedBluetoothDevices](arkts-mdm-getdisallowedbluetoothdevices-f.md#getdisallowedbluetoothdevices-1) | Obtains disallowed Bluetooth devices. |
| [getDisallowedBluetoothProtocols](arkts-mdm-getdisallowedbluetoothprotocols-f.md#getdisallowedbluetoothprotocols-1) | Obtains the disallowed Bluetooth protocols of a specified user. |
| [getDisallowedBluetoothProtocols](arkts-mdm-getdisallowedbluetoothprotocols-f.md#getdisallowedbluetoothprotocols-2) | Gets protocols from the list of bluetooth server that are disallowed to use. |
| [removeAllowedBluetoothDevices](arkts-mdm-removeallowedbluetoothdevices-f.md#removeallowedbluetoothdevices-1) | Removes allowed Bluetooth devices. |
| [removeDisallowedBluetoothDevices](arkts-mdm-removedisallowedbluetoothdevices-f.md#removedisallowedbluetoothdevices-1) | Removes disallowed Bluetooth devices. If some Bluetooth devices are removed from the disallowed list, the currentdevice cannot connect to the remaining ones; if all Bluetooth devices are removed, the current device can connectto any Bluetooth device. |
| [removeDisallowedBluetoothProtocols](arkts-mdm-removedisallowedbluetoothprotocols-f.md#removedisallowedbluetoothprotocols-1) | Removes disallowed Bluetooth protocols. After removing some protocols, the user is still restricted by theremaining disallowed protocols; after removing all protocols, the user can use any protocol; removing non-existentprotocols results in a successful API call but no actual change. |
| [removeDisallowedBluetoothProtocols](arkts-mdm-removedisallowedbluetoothprotocols-f.md#removedisallowedbluetoothprotocols-2) | Removes protocol from the list of bluetooth server that are disallowed to use. |
| [turnOffBluetooth](arkts-mdm-turnoffbluetooth-f.md#turnoffbluetooth-1) | Disables Bluetooth. After Bluetooth is disabled, the user can manually enable it. |
| [turnOnBluetooth](arkts-mdm-turnonbluetooth-f.md#turnonbluetooth-1) | Enables Bluetooth. After Bluetooth is enabled, the user can manually disable it. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [isBluetoothDisabled](arkts-mdm-isbluetoothdisabled-f-sys.md#isbluetoothdisabled-1) | Queries whether Bluetooth is disabled. |
| [setBluetoothDisabled](arkts-mdm-setbluetoothdisabled-f-sys.md#setbluetoothdisabled-1) | Sets the policy for disabling Bluetooth. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [BluetoothInfo](arkts-mdm-bluetoothinfo-i.md) | Represents the device Bluetooth information. |

### Enums

| Name | Description |
| --- | --- |
| [Protocol](arkts-mdm-protocol-e.md) | Represents the Bluetooth protocol type. |
| [TransferPolicy](arkts-mdm-transferpolicy-e.md) | The transfer policy. |

