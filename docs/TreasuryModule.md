# TreasuryModule









## Methods

### AaveIncentivesController

```solidity
function AaveIncentivesController() external view returns (contract IAaveIncentivesController)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IAaveIncentivesController | undefined

### AaveLendingPool

```solidity
function AaveLendingPool() external view returns (contract ILendingPool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ILendingPool | undefined

### USDC

```solidity
function USDC() external view returns (contract IERC20)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined

### USDCAddress

```solidity
function USDCAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### aaveLendingPoolAddress

```solidity
function aaveLendingPoolAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### amUSDC

```solidity
function amUSDC() external view returns (contract IAToken)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IAToken | undefined

### approveRaffleContract

```solidity
function approveRaffleContract(address raffleContractAddress) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| raffleContractAddress | address | undefined

### claimAaveRewards

```solidity
function claimAaveRewards(address[] _assets, uint256 _amountToClaim) external nonpayable
```

claims rewards earned in Aave



#### Parameters

| Name | Type | Description |
|---|---|---|
| _assets | address[] | asset of the reward
| _amountToClaim | uint256 | amount to withdraw

### depositToAave

```solidity
function depositToAave(uint256 amount) external nonpayable
```

depositing funds to Aave



#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | amount to withdraw

### getTotalDonationsPerRaffle

```solidity
function getTotalDonationsPerRaffle(address raffleContractAddress, uint256 raffleID) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| raffleContractAddress | address | undefined
| raffleID | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getUSDCFromTreasury

```solidity
function getUSDCFromTreasury() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getUSDCInAave

```solidity
function getUSDCInAave() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### organisationFeeBalance

```solidity
function organisationFeeBalance() external view returns (uint256)
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

### processDonationFromRaffle

```solidity
function processDonationFromRaffle(uint256 raffleID, uint256 amount, uint256 organisationID, address raffleContractAddress) external nonpayable
```

this function get&#39;s called by the Raffle externally after every donation



#### Parameters

| Name | Type | Description |
|---|---|---|
| raffleID | uint256 | id of raffle donation is made to
| amount | uint256 | amount of donation
| organisationID | uint256 | id of organisation
| raffleContractAddress | address | address of raffle contract

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined

### withdrawFromAave

```solidity
function withdrawFromAave(uint256 amount) external nonpayable
```

withdraw funds from Aave to treasury



#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | amount to withdraw

### withdrawFundsToOrganisationWallet

```solidity
function withdrawFundsToOrganisationWallet(uint256 amount, uint256 organisationID) external nonpayable
```

withdraws function to organisation wallet address that was set in wrapper



#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | amount to withdraw
| organisationID | uint256 | id of organisation

### wrapperContract

```solidity
function wrapperContract() external view returns (contract IWrapper)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IWrapper | undefined



## Events

### DonationReceivedFromRaffle

```solidity
event DonationReceivedFromRaffle(uint256 raffleID, uint256 amount, address raffleContract)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| raffleID  | uint256 | undefined |
| amount  | uint256 | undefined |
| raffleContract  | address | undefined |

### FundsDepositedToAave

```solidity
event FundsDepositedToAave(uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount  | uint256 | undefined |

### FundsWithdrawnFromAave

```solidity
event FundsWithdrawnFromAave(uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount  | uint256 | undefined |

### FundsWithdrawnToOrganisationWallet

```solidity
event FundsWithdrawnToOrganisationWallet(uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount  | uint256 | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### ProtocolFeesPaidOnDonation

```solidity
event ProtocolFeesPaidOnDonation(uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount  | uint256 | undefined |



## Errors

### InsufficentFunds

```solidity
error InsufficentFunds()
```






### NoZeroDeposits

```solidity
error NoZeroDeposits()
```






### NoZeroWithDrawals

```solidity
error NoZeroWithDrawals()
```






### ZeroAddressNotAllowed

```solidity
error ZeroAddressNotAllowed()
```







