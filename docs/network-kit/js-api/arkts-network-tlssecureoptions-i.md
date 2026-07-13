# TLSSecureOptions

Defines TLS security options. The CA certificate is mandatory, and other parameters are optional.

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## Modules to Import

```TypeScript
import { socket } from '@kit.NetworkKit';
```

## ca

```TypeScript
ca?: string | Array<string>
```

Certificate used to verify the identity of the server, if it is not set, use system ca.

**Type:** string | Array<string>

**Since:** 12

**System capability:** SystemCapability.Communication.NetStack

## cert

```TypeScript
cert?: string | Array<string>
```

Certificate proving the identity of the client

**Type:** string | Array<string>

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## cipherSuite

```TypeScript
cipherSuite?: string
```

Crypto suite specification

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## isBidirectionalAuthentication

```TypeScript
isBidirectionalAuthentication?: boolean
```

Used to set up bidirectional authentication. The default value is false.

**Type:** boolean

**Since:** 24

**System capability:** SystemCapability.Communication.NetStack

## key

```TypeScript
key?: string
```

Private key of client certificate

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## password

```TypeScript
password?: string
```

Password of the private key

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## protocols

```TypeScript
protocols?: Protocol | Array<Protocol>
```

TLS protocol version

**Type:** Protocol | Array<Protocol>

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## signatureAlgorithms

```TypeScript
signatureAlgorithms?: string
```

<P>Supported signature algorithms. This string can contain summary algorithms(SHA256,MD5,etc),Public key algorithm(RSA-PSS,ECDSA,etc),
Combination of the two(For example 'RSA+SHA384') or TLS v1.3 Scheme name(For example rsa_pss_pss_sha512)</P>

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

## useRemoteCipherPrefer

```TypeScript
useRemoteCipherPrefer?: boolean
```

default is false, use local cipher.

**Type:** boolean

**Since:** 10

**System capability:** SystemCapability.Communication.NetStack

