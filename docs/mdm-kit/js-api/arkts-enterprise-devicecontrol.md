# @ohos.enterprise.deviceControl

本模块提供设备控制能力。 > **说明**： > > 本模块接口仅可在Stage模型下使用。 > > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。

**Since:** 10

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { deviceControl } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[lockScreen](arkts-devicecontrol-lockscreen-f-sys.md#lockScreen-1) | 使设备屏幕锁定。设置之后设备立即锁屏。 |
| [operateDevice](arkts-devicecontrol-operatedevice-f.md#operateDevice-1) | 允许管理员操作设备。 |
| <!--DelRow-->[reboot](arkts-devicecontrol-reboot-f-sys.md#reboot-1) | 使设备重启。 |
| <!--DelRow-->[resetFactory](arkts-devicecontrol-resetfactory-f-sys.md#resetFactory-1) | 使设备恢复出厂设置。使用callback异步回调。 |
| <!--DelRow-->[resetFactory](arkts-devicecontrol-resetfactory-f-sys.md#resetFactory-2) | 使设备恢复出厂设置。使用Promise异步回调。 |
| <!--DelRow-->[shutdown](arkts-devicecontrol-shutdown-f-sys.md#shutdown-1) | 使设备关机。 |

