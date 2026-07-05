# @ohos.enterprise.deviceInfo

本模块提供企业设备信息管理能力，包括获取设备序列号、设备名称等。 > **说明：** > > 本模块接口仅可在Stage模型下使用。 > > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。

**起始版本：** 10

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

## 导入模块

```TypeScript
import { deviceInfo } from '@kit.MDMKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getDeviceInfo](arkts-deviceinfo-getdeviceinfo-f.md#getDeviceInfo-1) | 获取设备信息。 |
| <!--DelRow-->[getDeviceName](arkts-deviceinfo-getdevicename-f-sys.md#getDeviceName-1) | 获取设备名称，使用callback异步回调。 |
| <!--DelRow-->[getDeviceName](arkts-deviceinfo-getdevicename-f-sys.md#getDeviceName-2) | 获取设备名称，使用Promise异步回调。 |
| <!--DelRow-->[getDeviceSerial](arkts-deviceinfo-getdeviceserial-f-sys.md#getDeviceSerial-1) | 获取设备序列号，使用callback异步回调。 |
| <!--DelRow-->[getDeviceSerial](arkts-deviceinfo-getdeviceserial-f-sys.md#getDeviceSerial-2) | 获取设备序列号，使用Promise异步回调。 |
| <!--DelRow-->[getDisplayVersion](arkts-deviceinfo-getdisplayversion-f-sys.md#getDisplayVersion-1) | 获取设备版本号，使用callback异步回调。 |
| <!--DelRow-->[getDisplayVersion](arkts-deviceinfo-getdisplayversion-f-sys.md#getDisplayVersion-2) | 获取设备版本号，使用Promise异步回调。 |

