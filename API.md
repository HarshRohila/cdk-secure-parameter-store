# Secure Parameter Store

## Why

AWS CDK not having a way to create secure parameter store, and it recommends secret manager, which is costly.
This construct provides a way to create secure parameter store using CDK Custom Resource

## Usage

Similar to how other CDK constructs are used

```typescript
new SecureParameterStore(stack, 'MySecureParameterStore', {
  name: 'ParameterName',
  value: 'Parameter Value',
});
```

## How it works

This construt creates a [Lambda backed Custom Resource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources-lambda.html), the lambda is using AWS SDK to create and delete parameter store, whenever Custom Resource is created and destroyed

For more info refer aws [docs](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html)

## For Contributors

### Build

- `npx projen build`

### Deploy

- `yarn dev:deploy`

### Destroy

- `npx cdk destroy --app='./lib/integ.default.js'`

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureParameterStore <a name="SecureParameterStore" id="cdk-secure-parameter-store.SecureParameterStore"></a>

#### Initializers <a name="Initializers" id="cdk-secure-parameter-store.SecureParameterStore.Initializer"></a>

```typescript
import { SecureParameterStore } from 'cdk-secure-parameter-store'

new SecureParameterStore(scope: Construct, id: string, props: ISecureParameterStoreProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-secure-parameter-store.SecureParameterStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-secure-parameter-store.SecureParameterStore.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-secure-parameter-store.SecureParameterStore.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-secure-parameter-store.ISecureParameterStoreProps">ISecureParameterStoreProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-secure-parameter-store.SecureParameterStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-secure-parameter-store.SecureParameterStore.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-secure-parameter-store.SecureParameterStore.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-secure-parameter-store.ISecureParameterStoreProps">ISecureParameterStoreProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-secure-parameter-store.SecureParameterStore.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-secure-parameter-store.SecureParameterStore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-secure-parameter-store.SecureParameterStore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-secure-parameter-store.SecureParameterStore.isConstruct"></a>

```typescript
import { SecureParameterStore } from 'cdk-secure-parameter-store'

SecureParameterStore.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="cdk-secure-parameter-store.SecureParameterStore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-secure-parameter-store.SecureParameterStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-secure-parameter-store.SecureParameterStore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---




## Protocols <a name="Protocols" id="Protocols"></a>

### ISecureParameterStoreProps <a name="ISecureParameterStoreProps" id="cdk-secure-parameter-store.ISecureParameterStoreProps"></a>

- *Implemented By:* <a href="#cdk-secure-parameter-store.ISecureParameterStoreProps">ISecureParameterStoreProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-secure-parameter-store.ISecureParameterStoreProps.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-secure-parameter-store.ISecureParameterStoreProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-secure-parameter-store.ISecureParameterStoreProps.property.resourceNamesPrefix">resourceNamesPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-secure-parameter-store.ISecureParameterStoreProps.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-secure-parameter-store.ISecureParameterStoreProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceNamesPrefix`<sup>Optional</sup> <a name="resourceNamesPrefix" id="cdk-secure-parameter-store.ISecureParameterStoreProps.property.resourceNamesPrefix"></a>

```typescript
public readonly resourceNamesPrefix: string;
```

- *Type:* string

---

