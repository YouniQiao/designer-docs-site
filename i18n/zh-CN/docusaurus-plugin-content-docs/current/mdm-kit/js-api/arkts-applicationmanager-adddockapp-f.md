# addDockApp

## addDockApp

```TypeScript
function addDockApp(admin: Want, bundleName: string, abilityName: string, index?: number): void
```

根据位置索引添加应用到PC/2in1设备的底部快捷栏，添加后用户可以通过点击快捷栏的应用图标直接启动应用，应用图标为应用在桌面上显示的默认图标。 > **说明：** > > 1.若位置0或1上已存在“应用中心”或“任务中心”，则尝试向该位置添加应用会返回错误码9201019；若该位置为其他应用，则可正常添加。 > > 2.以下应用不可通过本接口添加到快捷栏：“应用中心”、“任务中心”、“文件管理”、“回收站”。 > > 3.仅支持添加具有应用程序入口（即有图标）的应用，无图标的应用不支持添加。 > > 4.仅支持配置当前用户下的快捷栏，每个用户的快捷栏最多可容纳100个应用。 > > 5.在已有应用的位置插入新应用时，新应用将直接占用该位置，原应用及其后的应用依次向后顺移一位。 > > 6.若不传index参数，或传入的index值大于快捷栏当前应用数量，则新应用默认追加到快捷栏末尾。 > > 7.通过本接口添加应用到快捷栏后，用户可以手动移除或调整应用的位置。

**起始版本：** 24

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| bundleName | string | 是 | 应用的包名。 |
| abilityName | string | 是 | 应用的Ability名称，仅支持应用程序入口Ability。 |
| index | number | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | Parameter verification failed. |
| 9200015 | The ability does not exist. |
| 9201013 | The number of applications in the Dock has reached the maximum. |
| 9201014 | The application is already in the Dock. |
| 9201015 | The application is not installed. |
| 9201018 | The application is inoperable. |
| 9201019 | The location is inoperable. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 801 | Capability not supported.  Failed to call the API due to limited device capabilities. |

**示例：**

```TypeScript
import { applicationManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // 需根据实际情况进行替换
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // 需根据实际情况进行替换
  let bundleName: string = 'com.example.exampleapplication';
  let abilityName: string = 'EntryAbility';
  applicationManager.addDockApp(wantTemp, bundleName, abilityName, 3);
  console.info('Succeeded in adding dock app.');
} catch(err) {
  console.error(`Failed to add dock app. Code: ${err.code}, message: ${err.message}`);
}

```

