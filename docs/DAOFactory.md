# DAOFactory









## Methods

### SCALE

```solidity
function SCALE() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### addTreasuryModule

```solidity
function addTreasuryModule(uint256 organisationID, address USDC, address aUSDC, address aaveIncentivesController, address lendingPool) external nonpayable returns (address treasuryModuleAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| organisationID | uint256 | undefined
| USDC | address | undefined
| aUSDC | address | undefined
| aaveIncentivesController | address | undefined
| lendingPool | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| treasuryModuleAddress | address | undefined

### createOrganization

```solidity
function createOrganization(DAOFactory.Organisation _organisation) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _organisation | DAOFactory.Organisation | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getDeployedContracts

```solidity
function getDeployedContracts(uint256 organisationID) external view returns (address[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| organisationID | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[] | undefined

### getOrgaisationWalletAddess

```solidity
function getOrgaisationWalletAddess(uint256 organisationID) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| organisationID | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### getOrganisationFee

```solidity
function getOrganisationFee(uint256 organisationID) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| organisationID | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getProtocolFee

```solidity
function getProtocolFee() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getProtocolWalletAddress

```solidity
function getProtocolWalletAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### getTokenRewardsCalculationAddress

```solidity
function getTokenRewardsCalculationAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### getTreasuryAddress

```solidity
function getTreasuryAddress(uint256 organisationID) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| organisationID | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### organisation

```solidity
function organisation(uint256) external view returns (uint256 organisationFee, address walletAddress, address centralTreasury)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| organisationFee | uint256 | undefined
| walletAddress | address | undefined
| centralTreasury | address | undefined

### organisationCount

```solidity
function organisationCount() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### organisationFee

```solidity
function organisationFee() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### protocolFee

```solidity
function protocolFee() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### protocolWalletAddress

```solidity
function protocolWalletAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### setProtocolFee

```solidity
function setProtocolFee(uint256 _protocolFee) external nonpayable returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _protocolFee | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### setProtocolWalletAddress

```solidity
function setProtocolWalletAddress(address _protocolWalletAddress) external nonpayable returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _protocolWalletAddress | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### setTokenRewardsCalculationAddress

```solidity
function setTokenRewardsCalculationAddress(address _tokenRewardsModuleAddress) external nonpayable returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenRewardsModuleAddress | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### tokenRewardsModuleAddress

```solidity
function tokenRewardsModuleAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined

### treasuryExist

```solidity
function treasuryExist(uint256) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined



## Events

### NewModuleAdded

```solidity
event NewModuleAdded(uint256 organisationID)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| organisationID  | uint256 | undefined |

### OrganizationCreated

```solidity
event OrganizationCreated(uint256 id, address walletAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| id  | uint256 | undefined |
| walletAddress  | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### TreasuryModuleAdded

```solidity
event TreasuryModuleAdded(uint256 organisationID)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| organisationID  | uint256 | undefined |



## Errors

### FeeOutOfRange

```solidity
error FeeOutOfRange()
```






### NeedToCreateTreasuryFirst

```solidity
error NeedToCreateTreasuryFirst()
```






### NoZeroAddressAllowed

```solidity
error NoZeroAddressAllowed()
```






### OnlyOneTreasuryPerOrganisation

```solidity
error OnlyOneTreasuryPerOrganisation()
```







