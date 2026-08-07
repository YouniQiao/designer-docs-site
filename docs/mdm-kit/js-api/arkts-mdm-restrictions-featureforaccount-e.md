# FeatureForAccount

Enumerates the features that can be disabled or enabled for a specified user.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

<!--Device-restrictions-enum FeatureForAccount--><!--Device-restrictions-enum FeatureForAccount-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## MULTI_WINDOW

```TypeScript
MULTI_WINDOW = 0
```

System multi-window. Currently, this feature is available only on phones and tablets. Once disabled, the system multi-window feature (split-screen, one-click split-screen, Multi-Window, and floating window) cannot be used. If the feature is currently active, the current usage remains unaffected. However, it cannot be used once closed.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-FeatureForAccount-MULTI_WINDOW = 0--><!--Device-FeatureForAccount-MULTI_WINDOW = 0-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## DISTRIBUTED_TRANSMISSION

```TypeScript
DISTRIBUTED_TRANSMISSION = 1
```

\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_.Once disabled, functions such as discovery, authentication, query, and listening in the distributed device management service cannot be used.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-FeatureForAccount-DISTRIBUTED_TRANSMISSION = 1--><!--Device-FeatureForAccount-DISTRIBUTED_TRANSMISSION = 1-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## SUPER_HUB

```TypeScript
SUPER_HUB = 2
```

SuperHub. Currently, this feature is available only on phones and tablets. Once disabled, the SuperHub feature cannot be used. If SuperHub is currently active, the current usage remains unaffected. However, it cannot be used once closed.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-FeatureForAccount-SUPER_HUB = 2--><!--Device-FeatureForAccount-SUPER_HUB = 2-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## FINGERPRINT

```TypeScript
FINGERPRINT = 3
```

Device fingerprint authentication capability. Currently, this feature is supported only on PCs/2-in-1 devices.The rules for using this capability are as follows:

1. After the device fingerprint authentication capability ([FeatureForDevice.FINGERPRINT]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_)is disabled, disabling this capability for a specific user will result in a policy conflict.2. After the device fingerprint authentication capability is disabled or enabled for a specific user, disabling this capability ([FeatureForDevice.FINGERPRINT]\_\_\_JSDOC\_LINK\_DESC\_USD\_1\_\_\_) globally will override the user-specific policy. Subsequently, re-enabling this capability ([FeatureForDevice.FINGERPRINT]\_\_\_JSDOC\_LINK\_DESC\_USD\_2\_\_\_)globally will allow all users to use device fingerprint authentication.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-FeatureForAccount-FINGERPRINT = 3--><!--Device-FeatureForAccount-FINGERPRINT = 3-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## PRINT

```TypeScript
PRINT = 4
```

Device printing capability. If the device printing capability is disabled for a specific user, it remains disabled for that user even if the device printing capability (  
[FeatureForDevice.PRINTER]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_) capability is enabled globally.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-FeatureForAccount-PRINT = 4--><!--Device-FeatureForAccount-PRINT = 4-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## MTP_CLIENT

```TypeScript
MTP_CLIENT = 5
```

MTP client capability (including read and write capabilities). Currently, it is supported only on PC/2-in-1devices. MTP allows users to linearly access media files on mobile devices. After the device MTP client capability ([FeatureForDevice.MTP\_CLIENT]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_) is disabled, disabling the MTP client write capability for a specific user will result in a policy conflict.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-FeatureForAccount-MTP_CLIENT = 5--><!--Device-FeatureForAccount-MTP_CLIENT = 5-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## USB_STORAGE_DEVICE_WRITE

```TypeScript
USB_STORAGE_DEVICE_WRITE = 6
```

USB storage device write capability. Currently, it is supported only on enterprise PCs/2-in-1 devices.

Disabling the USB storage device write capability for a specific user in any of the following scenarios will result in a policy conflict:

1. The device USB capability ([FeatureForDevice.USB]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_) has been disabled.2. USB storage device access policy has been set to read-only or disabled via the setUsbStorageDeviceAccessPolicy API.3. Storage USB devices have been disabled via the addDisallowedUsbDevices API.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-FeatureForAccount-USB_STORAGE_DEVICE_WRITE = 6--><!--Device-FeatureForAccount-USB_STORAGE_DEVICE_WRITE = 6-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## DISK_RECOVERY_KEY

```TypeScript
DISK_RECOVERY_KEY = 7
```

\_\_\_MD\_LINK\_DESC\_USD\_0\_\_\_ recovery capability. Currently, it is supported only on PCs/2-in-1 devices.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-FeatureForAccount-DISK_RECOVERY_KEY = 7--><!--Device-FeatureForAccount-DISK_RECOVERY_KEY = 7-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## SUDO

```TypeScript
SUDO = 8
```

superuser do (execution with superuser privileges). Currently, it is supported only on PCs/2-in-1 devices. If this feature is disabled, neither enterprise spaces nor personal spaces can perform operations with superuser privileges.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-FeatureForAccount-SUDO = 8--><!--Device-FeatureForAccount-SUDO = 8-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## DISTRIBUTED_TRANSMISSION_OUTGOING

```TypeScript
DISTRIBUTED_TRANSMISSION_OUTGOING = 9
```

Distributed one-way data transmission between devices (only data transmission to other devices is supported).Disabling distributed one-way data transmission capability between devices after the distributed management service ([DISTRIBUTED\_TRANSMISSION]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_) has been disabled will result in a policy conflict.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-FeatureForAccount-DISTRIBUTED_TRANSMISSION_OUTGOING = 9--><!--Device-FeatureForAccount-DISTRIBUTED_TRANSMISSION_OUTGOING = 9-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## OPEN_FILE_BOOST

```TypeScript
OPEN_FILE_BOOST = 10
```

File open acceleration capability, providing applications with the ability to sense the file open acceleration status. By integrating the corresponding APIs, apps can detect the acceleration status of files, and further implement features such as displaying unique UI identifiers for accelerated files, thereby optimizing user experience of file opening. Currently, this feature is supported only on PCs/2-in-1 devices.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Dyn only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-FeatureForAccount-OPEN_FILE_BOOST = 10--><!--Device-FeatureForAccount-OPEN_FILE_BOOST = 10-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

