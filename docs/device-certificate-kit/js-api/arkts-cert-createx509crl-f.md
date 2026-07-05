# createX509Crl

## createX509Crl

```TypeScript
function createX509Crl(inStream: EncodingBlob, callback: AsyncCallback<X509Crl>): void
```

表示创建X509证书吊销列表的对象。使用Callback异步回调。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃，建议使用 > [cert.createX509CRL()]cert.createX509CRL(inStream: EncodingBlob, callback: AsyncCallback<X509CRL>)替代。

**Since:** 9

**Deprecated since:** 11

**Substitute:** ohos.security.cert#createX509CRL

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inStream | EncodingBlob | Yes | 表示证书吊销列表序列化数据。 |
| callback | AsyncCallback&lt;X509Crl> | Yes | 回调函数。当创建X509证书吊销列表对象成功时，err为undefined，data为获取到的  X509Crl实例；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数校验失败。 |
| 801 | 不支持该操作。 |
| 19020001 | 内存错误。 |

**Example**

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';

// Convert the string into a Uint8Array.
function stringToUint8Array(str: string): Uint8Array {
  let arr: Array<number> = [];
  for (let i = 0, j = str.length; i < j; i++) {
    arr.push(str.charCodeAt(i));
  }
  return new Uint8Array(arr);
}

let crlData = '-----BEGIN X509 CRL-----\n' +
  'MIHzMF4CAQMwDQYJKoZIhvcNAQEEBQAwFTETMBEGA1UEAxMKQ1JMIGlzc3VlchcN\n' +
  'MTcwODA3MTExOTU1WhcNMzIxMjE0MDA1MzIwWjAVMBMCAgPoFw0zMjEyMTQwMDUz\n' +
  'MjBaMA0GCSqGSIb3DQEBBAUAA4GBACEPHhlaCTWA42ykeaOyR0SGQIHIOUR3gcDH\n' +
  'J1LaNwiL+gDxI9rMQmlhsUGJmPIPdRs9uYyI+f854lsWYisD2PUEpn3DbEvzwYeQ\n' +
  '5SqQoPDoM+YfZZa23hoTLsu52toXobP74sf/9K501p/+8hm4ROMLBoRT86GQKY6g\n' +
  'eavsH0Q3\n' +
  '-----END X509 CRL-----\n';

// Binary data of the CRL, which needs to match your case.
let encodingBlob: cert.EncodingBlob = {
  data: stringToUint8Array(crlData),
  // Assign a value based on the encodingData format. FORMAT_PEM and FORMAT_DER are supported.
  encodingFormat: cert.EncodingFormat.FORMAT_PEM
};

cert.createX509Crl(encodingBlob, (error, x509Crl) => {
  if (error) {
    console.error(`createX509Crl failed, errCode: ${error.code}, errMsg: ${error.message}`);
  } else {
    console.info('createX509Crl result: success.');
  }
});

```

## createX509Crl

```TypeScript
function createX509Crl(inStream: EncodingBlob): Promise<X509Crl>
```

表示创建X509证书吊销列表的对象。使用Promise方式返回结果。 > **说明：** > > 从API version 9开始支持，从API version 11开始废弃，建议使用 > [cert.createX509CRL()]cert.createX509CRL(inStream: EncodingBlob)替代。

**Since:** 9

**Deprecated since:** 11

**Substitute:** ohos.security.cert#createX509CRL

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inStream | EncodingBlob | Yes | 表示证书吊销列表序列化数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;X509Crl> | Promise对象，返回创建的X509Crl实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数校验失败。 |
| 801 | 不支持该操作。 |
| 19020001 | 内存错误。 |

**Example**

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

// Convert the string into a Uint8Array.
function stringToUint8Array(str: string): Uint8Array {
  let arr: Array<number> = [];
  for (let i = 0, j = str.length; i < j; i++) {
    arr.push(str.charCodeAt(i));
  }
  return new Uint8Array(arr);
}

let crlData = '-----BEGIN X509 CRL-----\n' +
  'MIHzMF4CAQMwDQYJKoZIhvcNAQEEBQAwFTETMBEGA1UEAxMKQ1JMIGlzc3VlchcN\n' +
  'MTcwODA3MTExOTU1WhcNMzIxMjE0MDA1MzIwWjAVMBMCAgPoFw0zMjEyMTQwMDUz\n' +
  'MjBaMA0GCSqGSIb3DQEBBAUAA4GBACEPHhlaCTWA42ykeaOyR0SGQIHIOUR3gcDH\n' +
  'J1LaNwiL+gDxI9rMQmlhsUGJmPIPdRs9uYyI+f854lsWYisD2PUEpn3DbEvzwYeQ\n' +
  '5SqQoPDoM+YfZZa23hoTLsu52toXobP74sf/9K501p/+8hm4ROMLBoRT86GQKY6g\n' +
  'eavsH0Q3\n' +
  '-----END X509 CRL-----\n';

// Binary data of the CRL, which needs to match your case.
let encodingBlob: cert.EncodingBlob = {
  data: stringToUint8Array(crlData),
  // Assign a value based on the encodingData format. FORMAT_PEM and FORMAT_DER are supported.
  encodingFormat: cert.EncodingFormat.FORMAT_PEM
};

cert.createX509Crl(encodingBlob).then(x509Crl => {
  console.info('createX509Crl result: success.');
}).catch((error: BusinessError) => {
  console.error(`createX509Crl failed, errCode: ${error.code}, errMsg: ${error.message}`);
});

```

