# @ohos.configPolicy

配置策略提供按系统预定义的定制配置层级获取对应目录和文件路径的能力。

**Since:** 8

**System capability:** SystemCapability.Customization.ConfigPolicy

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { configPolicy } from '@kit.BasicServicesKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[getCfgDirList](arkts-configpolicy-getcfgdirlist-f-sys.md#getCfgDirList-1) | 获取配置层级目录列表，按优先级从低到高。使用callback异步回调。 |
| <!--DelRow-->[getCfgDirList](arkts-configpolicy-getcfgdirlist-f-sys.md#getCfgDirList-2) | 获取配置层级目录列表，按优先级从低到高。使用Promise异步回调。 |
| <!--DelRow-->[getCfgDirListSync](arkts-configpolicy-getcfgdirlistsync-f-sys.md#getCfgDirListSync-1) | 获取配置层级目录列表，按优先级从低到高。 |
| <!--DelRow-->[getCfgFiles](arkts-configpolicy-getcfgfiles-f-sys.md#getCfgFiles-1) | 获取指定文件名的所有文件列表，按优先级从低到高。使用callback异步回调。 例如，config.xml在设备中的路径按优先级升序排列为：/system/etc/config.xml、/sys_pod/etc/config.xml。 最终返回的是：/system/etc/config.xml, /sys_pod/etc/config.xml。 |
| <!--DelRow-->[getCfgFiles](arkts-configpolicy-getcfgfiles-f-sys.md#getCfgFiles-2) | 根据提供的跟随模式获取指定文件名所有的文件列表，按优先级从低到高。使用callback异步回调。 例如，config.xml在设备中的路径按优先级升序排列为：/system/etc/config.xml、/sys_pod/etc/config.xml、 /sys_pod/etc/carrier/46060/etc/config.xml。设备默认卡opkey为46060，设置的followMode为 configPolicy.FollowXMode.SIM_DEFAULT。最终返回的是：/system/etc/config.xml, /sys_pod/etc/config.xml, /sys_pod/etc/carrier/46060/etc/config.xml。 |
| <!--DelRow-->[getCfgFiles](arkts-configpolicy-getcfgfiles-f-sys.md#getCfgFiles-3) | 根据提供的跟随模式获取指定文件名所有的文件列表，按优先级从低到高。使用callback异步回调。 例如，config.xml在设备中的路径按优先级升序排列为：/system/etc/config.xml、/sys_pod/etc/config.xml、 /sys_pod/etc/carrier/46060/etc/config.xml。设备卡1的opkey为46060，设置的followMode为 configPolicy.FollowXMode.USER_DEFINED，自定义跟随规则为"etc/carrier/${telephony.sim.opkey0}"。 最终返回的是：/system/etc/config.xml, /sys_pod/etc/config.xml, /sys_pod/etc/carrier/46060/etc/config.xml。 |
| <!--DelRow-->[getCfgFiles](arkts-configpolicy-getcfgfiles-f-sys.md#getCfgFiles-4) | 获取指定文件名的所有文件列表，按优先级从低到高。使用Promise异步回调。 |
| <!--DelRow-->[getCfgFiles](arkts-configpolicy-getcfgfiles-f-sys.md#getCfgFiles-5) | 根据提供的跟随模式获取指定文件名所有的文件列表，按优先级从低到高。使用Promise异步回调。 |
| <!--DelRow-->[getCfgFilesSync](arkts-configpolicy-getcfgfilessync-f-sys.md#getCfgFilesSync-1) | 根据提供的跟随模式获取指定文件名所有的文件列表，按优先级从低到高。 |
| <!--DelRow-->[getOneCfgFile](arkts-configpolicy-getonecfgfile-f-sys.md#getOneCfgFile-1) | 获取指定文件名优先级最高的配置文件路径。使用callback异步回调。 例如，config.xml在设备中的路径按优先级升序排列为：/system/etc/config.xml、/sys_pod/etc/config.xml， 最终返回优先级最高的是：/sys_pod/etc/config.xml。 |
| <!--DelRow-->[getOneCfgFile](arkts-configpolicy-getonecfgfile-f-sys.md#getOneCfgFile-2) | 根据提供的跟随模式获取指定文件名优先级最高的配置文件路径。使用callback异步回调。 例如，config.xml在设备中的路径按优先级升序排列为：/system/etc/config.xml、/sys_pod/etc/config.xml、 /sys_pod/etc/carrier/46060/etc/ config.xml。设备默认卡opkey为46060，设置的followMode为configPolicy.FollowXMode.SIM_DEFAULT。最终返回的是： /sys_pod/etc/carrier/46060/etc/config.xml。 |
| <!--DelRow-->[getOneCfgFile](arkts-configpolicy-getonecfgfile-f-sys.md#getOneCfgFile-3) | 根据跟随模式获取指定文件优先级最高的配置文件路径。使用callback异步回调。 例如，config.xml在设备中的路径按优先级升序排列为：/system/etc/config.xml、/sys_pod/etc/config.xml、 /sys_pod/etc/carrier/46060/etc/config.xml。设备卡1的opkey为46060，设置的followMode为 configPolicy.FollowXMode.USER_DEFINED，自定义跟随规则为"etc/carrier/${telephony.sim.opkey0}"。 最终返回的是：/sys_pod/etc/carrier/46060/etc/config.xml。 |
| <!--DelRow-->[getOneCfgFile](arkts-configpolicy-getonecfgfile-f-sys.md#getOneCfgFile-4) | 获取指定文件名优先级最高的配置文件路径。使用Promise异步回调。 |
| <!--DelRow-->[getOneCfgFile](arkts-configpolicy-getonecfgfile-f-sys.md#getOneCfgFile-5) | 根据提供的跟随模式，获取指定文件名优先级最高的配置文件路径。使用Promise异步回调。 |
| <!--DelRow-->[getOneCfgFileSync](arkts-configpolicy-getonecfgfilesync-f-sys.md#getOneCfgFileSync-1) | 根据提供的跟随模式，获取指定文件名优先级最高的配置文件路径。 |

### Enums

| Name | Description |
| --- | --- |
| <!--DelRow-->[FollowXMode](arkts-configpolicy-followxmode-e-sys.md) |  |

