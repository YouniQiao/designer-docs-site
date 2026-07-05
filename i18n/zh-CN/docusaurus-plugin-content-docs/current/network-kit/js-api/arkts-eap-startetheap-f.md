# startEthEap

## startEthEap

```TypeScript
function startEthEap(netId: number, profile: EthEapProfile): void
```

Set the specified network interface parameters.

**起始版本：** 20

**需要权限：** 

 ohos.permission.MANAGE_ENTERPRISE_WIFI_CONNECTION

**系统能力：** SystemCapability.Communication.NetManager.Eap

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| netId | number | 是 | Indicates the eth network id to start EAP authentication. |
| profile | EthEapProfile | 是 | Indicates the eap profile. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 33200001 | Invalid netId |
| 33200003 | Invalid profile |
| 33200009 | netmanager stop |
| 33200010 | invalid eth state |
| 33200099 | internal error |

**示例：**

```TypeScript
import {eap} from '@kit.NetworkKit';
let netId = 100;
let profile: eap.EthEapProfile = {
  eapMethod: eap.EapMethod.EAP_TTLS,
  phase2Method: eap.Phase2Method.PHASE2_AKA_PRIME,
  identity: "identity",
  anonymousIdentity: "anonymousIdentity",
  password: "password",
  caCertAliases: "caCertAliases",
  caPath: "caPath",
  clientCertAliases: "clientCertAliases",
  certEntry: new Uint8Array([5,6,7,8,9,10]),
  certPassword: "certPassword",
  altSubjectMatch: "altSubjectMatch",
  domainSuffixMatch: "domainSuffixMatch",
  realm: "realm",
  plmn: "plmn",
  eapSubId: 1
};
    
try {
  eap.startEthEap(netId, profile);
  console.info('startEthEap success');
} catch (err) {
  console.error('errCode: ' + err.code + ', errMessage: ' + err.message);
}

```

