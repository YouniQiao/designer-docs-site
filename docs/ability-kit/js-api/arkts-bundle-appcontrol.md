# @ohos.bundle.appControl

本模块提供应用拦截能力。对应用设置处置状态后，应用会被禁止运行；用户点击桌面图标时，会根据应用的处置状态，跳转到对应的页面。本模块支持对应用的处置状态进行设置、获取、删除。 > **说明：** > > 本模块为系统接口。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.AppControl

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { appControl } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[deleteDisposedStatus](arkts-appcontrol-deletedisposedstatus-f-sys.md#deleteDisposedStatus-1) | 删除应用的处置状态。使用callback异步回调，成功返回null，失败返回对应错误信息。 |
| <!--DelRow-->[deleteDisposedStatus](arkts-appcontrol-deletedisposedstatus-f-sys.md#deleteDisposedStatus-2) | 删除应用的处置状态。使用promise异步回调，成功返回null，失败返回对应错误信息。 |
| <!--DelRow-->[deleteDisposedStatusSync](arkts-appcontrol-deletedisposedstatussync-f-sys.md#deleteDisposedStatusSync-1) | 以同步方法删除指定应用或分身应用的处置状态。成功返回null，失败抛出对应异常。 |
| <!--DelRow-->[deleteUninstallDisposedRule](arkts-appcontrol-deleteuninstalldisposedrule-f-sys.md#deleteUninstallDisposedRule-1) | 删除指定应用或分身应用的卸载处置规则。 |
| <!--DelRow-->[getAllDisposedRules](arkts-appcontrol-getalldisposedrules-f-sys.md#getAllDisposedRules-1) | 获取当前用户下已设置的所有拦截规则。 |
| <!--DelRow-->[getDisposedRule](arkts-appcontrol-getdisposedrule-f-sys.md#getDisposedRule-1) | 获取指定应用或分身应用已设置的拦截规则。 |
| <!--DelRow-->[getDisposedRulesByBundle](arkts-appcontrol-getdisposedrulesbybundle-f-sys.md#getDisposedRulesByBundle-1) | 获取指定应用程序包设置的所有拦截规则。 |
| <!--DelRow-->[getDisposedStatus](arkts-appcontrol-getdisposedstatus-f-sys.md#getDisposedStatus-1) | 获取指定应用的处置状态。使用callback异步回调，成功返回应用的处置状态，失败返回对应错误信息。 |
| <!--DelRow-->[getDisposedStatus](arkts-appcontrol-getdisposedstatus-f-sys.md#getDisposedStatus-2) | 获取指定应用已设置的处置状态。使用Promise异步回调，成功返回应用的处置状态，失败返回对应错误信息。 |
| <!--DelRow-->[getDisposedStatusSync](arkts-appcontrol-getdisposedstatussync-f-sys.md#getDisposedStatusSync-1) | 以同步方法获取指定应用已设置的处置状态。成功返回应用的处置状态，失败抛出对应异常。 |
| <!--DelRow-->[getUninstallDisposedRule](arkts-appcontrol-getuninstalldisposedrule-f-sys.md#getUninstallDisposedRule-1) | 获取指定应用或分身应用已设置的优先级最高的卸载处置规则。 |
| <!--DelRow-->[setDisposedRule](arkts-appcontrol-setdisposedrule-f-sys.md#setDisposedRule-1) | 设置指定应用或分身应用的拦截规则。 |
| <!--DelRow-->[setDisposedRules](arkts-appcontrol-setdisposedrules-f-sys.md#setDisposedRules-1) | 批量设置指定应用或分身应用的拦截规则。 |
| <!--DelRow-->[setDisposedStatus](arkts-appcontrol-setdisposedstatus-f-sys.md#setDisposedStatus-1) | 设置应用的处置状态。使用callback异步回调。成功返回null，失败返回对应错误信息。 |
| <!--DelRow-->[setDisposedStatus](arkts-appcontrol-setdisposedstatus-f-sys.md#setDisposedStatus-2) | 设置应用的处置状态。使用Promise异步回调。成功返回null，失败返回对应错误信息。 |
| <!--DelRow-->[setDisposedStatusSync](arkts-appcontrol-setdisposedstatussync-f-sys.md#setDisposedStatusSync-1) | 以同步方法设置应用的处置状态。成功返回null，失败抛出对应异常。 |
| <!--DelRow-->[setUninstallDisposedRule](arkts-appcontrol-setuninstalldisposedrule-f-sys.md#setUninstallDisposedRule-1) | 设置指定应用或分身应用的卸载处置规则。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[DisposedRule](arkts-appcontrol-disposedrule-i-sys.md) | 标识拦截规则。 |
| <!--DelRow-->[DisposedRuleConfiguration](arkts-appcontrol-disposedruleconfiguration-i-sys.md) | 标识批量设置拦截规则的配置。 |
| <!--DelRow-->[UninstallDisposedRule](arkts-appcontrol-uninstalldisposedrule-i-sys.md) | 标识卸载处置规则。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[ComponentType](arkts-appcontrol-componenttype-e-sys.md) | 标识功能组件类型。 |
| <!--DelRow-->[ControlType](arkts-appcontrol-controltype-e-sys.md) | 标识拦截指定应用程序的不同策略。 |
| <!--DelRow-->[DisposedType](arkts-appcontrol-disposedtype-e-sys.md) | 标识拦截应用程序的方式，例如禁用应用的全部能力、禁用应用的指定能力、或者不禁用。 |
| <!--DelRow-->[UninstallComponentType](arkts-appcontrol-uninstallcomponenttype-e-sys.md) | 标识卸载时功能组件类型。 |

