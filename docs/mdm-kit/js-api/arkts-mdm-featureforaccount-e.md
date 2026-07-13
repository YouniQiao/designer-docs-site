# FeatureForAccount

Enumerates the features that can be disabled or enabled for a specified user.

**Since:** 26.0.0

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## MULTI_WINDOW

```TypeScript
MULTI_WINDOW = 0
```

System multi-window. Currently, this feature is available only on phones and tablets. Once disabled, the system
multi-window feature (split-screen, one-click split-screen, Multi-Window, and floating window) cannot be used. If
the feature is currently active, the current usage remains unaffected. However, it cannot be used once closed.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## DISTRIBUTED_TRANSMISSION

```TypeScript
DISTRIBUTED_TRANSMISSION = 1
```

Distributed transmission.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## SUPER_HUB

```TypeScript
SUPER_HUB = 2
```

SuperHub. Currently, this feature is available only on phones and tablets. Once disabled, the SuperHub feature
cannot be used. If SuperHub is currently active, the current usage remains unaffected. However, it cannot be used
once closed.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## FINGERPRINT

```TypeScript
FINGERPRINT = 3
```

Device fingerprint authentication capability

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## PRINT

```TypeScript
PRINT = 4
```

Device printing capability.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## MTP_CLIENT

```TypeScript
MTP_CLIENT = 5
```

Media Transfer Protocol (MTP) client capability (write only).

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## USB_STORAGE_DEVICE_WRITE

```TypeScript
USB_STORAGE_DEVICE_WRITE = 6
```

USB storage device write capability.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## DISK_RECOVERY_KEY

```TypeScript
DISK_RECOVERY_KEY = 7
```

Recovery key export capability.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## SUDO

```TypeScript
SUDO = 8
```

Superuser do (execution with superuser privileges).

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## DISTRIBUTED_TRANSMISSION_OUTGOING

```TypeScript
DISTRIBUTED_TRANSMISSION_OUTGOING = 9
```

One-way data transmission between devices (only data transmission to other devices is supported).

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## OPEN_FILE_BOOST

```TypeScript
OPEN_FILE_BOOST = 10
```

File opening acceleration capability.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

