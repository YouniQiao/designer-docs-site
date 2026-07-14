# @ohos.enterprise.dateTimeManager

The **dateTimeManager** module provides APIs for system time management. > **NOTE** > > The APIs of this module can be used only in the stage model. > > The APIs of this module can be called only by a > [device administrator application](../../../../mdm/mdm-kit-term.md#mdm-application-device-administrator-application) > that is > [enabled](arkts-mdm-enableadmin-f-sys.md#enableadmin-3) > . > > The APIs provided by this module are system APIs.

**Since:** 9

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dateTimeManager } from '@kit.MDMKit';
```

## Summary

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [disallowModifyDateTime](arkts-mdm-disallowmodifydatetime-f-sys.md#disallowmodifydatetime-1) | Disallows the device to modify the system time. This API uses an asynchronous callback to return the result. |
| [disallowModifyDateTime](arkts-mdm-disallowmodifydatetime-f-sys.md#disallowmodifydatetime-2) | Disallows the device to modify the system time. This API uses a promise to return the result. |
| [isModifyDateTimeDisallowed](arkts-mdm-ismodifydatetimedisallowed-f-sys.md#ismodifydatetimedisallowed-1) | Queries whether the system time of a device can be modified. This API uses an asynchronous callback to return the result. |
| [isModifyDateTimeDisallowed](arkts-mdm-ismodifydatetimedisallowed-f-sys.md#ismodifydatetimedisallowed-2) | Queries whether the system time of a device can be modified. This API uses a promise to return the result. |
| [setDateTime](arkts-mdm-setdatetime-f-sys.md#setdatetime-1) | Sets the system time. This API uses an asynchronous callback to return the result. |
| [setDateTime](arkts-mdm-setdatetime-f-sys.md#setdatetime-2) | Sets the system time. This API uses a promise to return the result. |
<!--DelEnd-->

