# BundleStorageStats

应用的存储占用信息。

**Since:** 26.0.0

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.MDMKit';
```

## dataSize

```TypeScript
dataSize: number
```

应用的本地数据、分布式数据和数据库数据大小，单位为Byte。 本地文件保存在以下目录（注意缓存文件目录为以下目录的子目录）： /data/storage/${el1-el5}/base 分布式文件保存在以下目录： /data/storage/el2/distributedfiles 数据库文件保存在以下目录： /data/storage/${el1-el5}/database **说明**：${el1-el5}指的是[el1，el2，el3，el4，el5目录](docroot://file-management/app-sandbox-directory.md#应用文件目录与应用文件路径)。

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## bundleName

```TypeScript
bundleName: string
```

应用的包名。

**Type:** string

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## appSize

```TypeScript
appSize: number
```

应用安装文件大小，单位为Byte。 应用安装文件保存在以下目录： /data/storage/el1/bundle

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

