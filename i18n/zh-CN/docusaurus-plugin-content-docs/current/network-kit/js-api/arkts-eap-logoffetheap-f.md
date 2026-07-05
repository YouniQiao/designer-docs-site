# logOffEthEap

## logOffEthEap

```TypeScript
function logOffEthEap(netId: number): void
```

Check whether the specified network is active.

**起始版本：** 20

**需要权限：** 

 ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.NetManager.Eap

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| netId | number | 是 | Indicates the eth network id to log off EAP authentication. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 33200001 | Invalid netId |
| 33200002 | Log off fail |
| 33200009 | netmanager stop |
| 33200010 | invalid eth state |
| 33200099 | internal error |

**示例：**

```TypeScript
import {eap} from '@kit.NetworkKit';
let netId = 100;    
try{
  eap.logOffEthEap(netId);
  console.info("logOffEthEap success");
} catch (err) {
  console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
}

```

