# TLSSecureOptions

Defines TLS security options. The CA certificate is mandatory, and other parameters are optional.

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## 导入模块

```TypeScript
import { socket } from '@kit.NetworkKit';
```

## isBidirectionalAuthentication

```TypeScript
isBidirectionalAuthentication?: boolean
```

Used to set up bidirectional authentication. The default value is false.

**类型：** boolean

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## password

```TypeScript
password?: string
```

Password of the private key

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## cert

```TypeScript
cert?: string | Array<string>
```

Certificate proving the identity of the client

**类型：** string | Array<string>

**起始版本：** 24

**系统能力：** SystemCapability.Communication.NetStack

## signatureAlgorithms

```TypeScript
signatureAlgorithms?: string
```

<P>Supported signature algorithms. This string can contain summary algorithms(SHA256,MD5,etc),Public key algorithm(RSA-PSS,ECDSA,etc), Combination of the two(For example 'RSA+SHA384') or TLS v1.3 Scheme name(For example rsa_pss_pss_sha512)</P>

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## useRemoteCipherPrefer

```TypeScript
useRemoteCipherPrefer?: boolean
```

default is false, use local cipher.

**类型：** boolean

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## cipherSuite

```TypeScript
cipherSuite?: string
```

Crypto suite specification

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## protocols

```TypeScript
protocols?: Protocol | Array<Protocol>
```

TLS protocol version

**类型：** Protocol | Array<Protocol>

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## key

```TypeScript
key?: string
```

Private key of client certificate

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Communication.NetStack

## ca

```TypeScript
ca?: string | Array<string>
```

Certificate used to verify the identity of the server, if it is not set, use system ca.

**类型：** string | Array<string>

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NetStack

