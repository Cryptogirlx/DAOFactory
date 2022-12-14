/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "DAOFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DAOFactory__factory>;
    getContractFactory(
      name: "IAaveIncentivesController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAaveIncentivesController__factory>;
    getContractFactory(
      name: "IAToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAToken__factory>;
    getContractFactory(
      name: "ILendingPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILendingPool__factory>;
    getContractFactory(
      name: "IScaledBalanceToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IScaledBalanceToken__factory>;
    getContractFactory(
      name: "IWrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWrapper__factory>;
    getContractFactory(
      name: "TreasuryModule",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TreasuryModule__factory>;

    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "DAOFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DAOFactory>;
    getContractAt(
      name: "IAaveIncentivesController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAaveIncentivesController>;
    getContractAt(
      name: "IAToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAToken>;
    getContractAt(
      name: "ILendingPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILendingPool>;
    getContractAt(
      name: "IScaledBalanceToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IScaledBalanceToken>;
    getContractAt(
      name: "IWrapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWrapper>;
    getContractAt(
      name: "TreasuryModule",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TreasuryModule>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
