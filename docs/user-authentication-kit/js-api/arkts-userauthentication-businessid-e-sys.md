# BusinessId (System API)

A service ID uniquely identifies a service scenario supported by the companion device. The supported service scenarios vary with the authentication security of companion devices. For example, a smart watch as a companion device can unlock the screen, unlock the application, and execute voice commands on the lock screen, while a headset as a companion device can only execute voice commands on the lock screen. The companion device relationships of different service IDs are independent of each other and do not interfere with each other. They can be added, deleted, and authenticated independently. Currently, the services of the companion device module include the default services of OpenHarmony, screen unlocking, application unlocking, and identity authentication before voice commands are executed on the lock screen. Adding services has requirements on the scenarios supported by the server device. For example, the multi-screen collaboration service requires that the server device support the agency authentication scenario.

**Since:** 23

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## DEFAULT

```TypeScript
DEFAULT = 0
```

Default service ID.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

## VENDOR_BEGIN

```TypeScript
VENDOR_BEGIN = 10000
```

Start value of the service ID defined by the vendor. The actual value must be greater than or equal to 10000 to avoid conflicts with the reserved values of the system.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.UserIAM.UserAuth.CompanionDeviceAuth

**System API:** This is a system API.

