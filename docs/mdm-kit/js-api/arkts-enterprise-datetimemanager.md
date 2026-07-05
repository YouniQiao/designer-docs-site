# @ohos.enterprise.dateTimeManager

本模块提供系统时间管理能力。 > **说明**： > > 本模块接口仅可在Stage模型下使用。 > > 本模块接口仅对[设备管理应用](docroot://mdm/mdm-kit-term.md#mdm应用设备管理应用)开放，需将 > [设备管理应用激活]{@link @ohos.enterprise.adminManager:adminManager.enableAdmin(admin: Want, enterpriseInfo: EnterpriseInfo, type: AdminType, userId?: number)} > 后调用。 > > 本模块接口均为系统接口。

**Since:** 9

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dateTimeManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[disallowModifyDateTime](arkts-datetimemanager-disallowmodifydatetime-f-sys.md#disallowModifyDateTime-1) | 禁止设备修改系统时间。使用callback异步回调。 |
| <!--DelRow-->[disallowModifyDateTime](arkts-datetimemanager-disallowmodifydatetime-f-sys.md#disallowModifyDateTime-2) | 禁止设备修改系统时间。使用Promise异步回调。 |
| <!--DelRow-->[isModifyDateTimeDisallowed](arkts-datetimemanager-ismodifydatetimedisallowed-f-sys.md#isModifyDateTimeDisallowed-1) | 查询设备是否允许修改系统时间。使用callback异步回调。 |
| <!--DelRow-->[isModifyDateTimeDisallowed](arkts-datetimemanager-ismodifydatetimedisallowed-f-sys.md#isModifyDateTimeDisallowed-2) | 查询设备是否允许修改系统时间。使用Promise异步回调。 |
| <!--DelRow-->[setDateTime](arkts-datetimemanager-setdatetime-f-sys.md#setDateTime-1) | 设置系统时间。使用callback异步回调。 |
| <!--DelRow-->[setDateTime](arkts-datetimemanager-setdatetime-f-sys.md#setDateTime-2) | 设置系统时间。使用Promise异步回调。 |

