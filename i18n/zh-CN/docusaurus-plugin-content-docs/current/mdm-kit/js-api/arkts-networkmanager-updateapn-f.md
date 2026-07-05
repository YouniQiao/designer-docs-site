# updateApn

## updateApn

```TypeScript
function updateApn(admin: Want, apnInfo: Record<string, string>, apnId: string): void
```

更新APN。

**起始版本：** 20

**需要权限：** 

 ohos.permission.ENTERPRISE_MANAGE_APN

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Customization.EnterpriseDeviceManager

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| admin | Want | 是 | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| apnInfo | Record&lt;string, string> | 是 | 需要更新的APN参数信息。 - apnName：APN配置的名称标识符，可选。 - mcc：3位数字的移动国家代码，可选。- mnc：2-3位数字的移动网络代码，可选。 - APN：接入点名称，可选。 - type：APN的服务类型，可选。 - user：APN身份验证的用户名，可选。 -  password：APN身份验证的密码，可选。 - proxy：普通数据连接的代理服务器地址，可选。 - mmsproxy：彩信服务的专用代理地址，可选。 - authType：APN的认证协议类型  ，可选。 |
| apnId | string | 是 | 需要更新的APN ID。可以通过  [networkManager.queryApn]networkManager.queryApn(admin: Want, apnInfo: Record)获取设备信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |

**示例：**

```TypeScript
import { Want } from '@kit.AbilityKit';
import { networkManager } from '@kit.MDMKit';

let wantTemp: Want = {
  // 需根据实际情况进行替换
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility',
};
let apnInfo: Record<string, string> = {
  // 需根据实际情况进行替换
  "apnName": "CTNET",
  "apn": "CTNET",
  "mnc": "11",
  "mcc": "460",
};
let apnId: string = "1"; // 需根据实际情况进行替换
try {
  networkManager.updateApn(wantTemp, apnInfo, apnId);
  console.info(`Succeeded in updating apn.`);
} catch (err) {
  console.error(`Failed to update apn. Code: ${err.code}, message: ${err.message}`);
}

```

