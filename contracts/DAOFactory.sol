pragma solidity 0.8.11;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./Treasury.sol";

contract DAOFactory is Ownable {
    uint256 public constant SCALE = 100;

    uint256 public protocolFee;
    uint256 public organisationFee;
    uint256 public organisationCount;
    address public tokenRewardsModuleAddress;
    address public protocolWalletAddress;

    struct Organisation {
        uint256 organisationFee;
        address walletAddress; // wallet address given by organization
        address centralTreasury;
        address[] contractsDeployed;
    }

    mapping(uint256 => Organisation) public organisation;
    // organisationID => bool
    mapping(uint256 => bool) public treasuryExist;

    // --------------------------------------------------------------
    // EVENTS
    // --------------------------------------------------------------

    event OrganizationCreated(uint256 id, address walletAddress);
    event NewModuleAdded(uint256 organisationID);
    event TreasuryModuleAdded(uint256 organisationID);

    // --------------------------------------------------------------
    // CUSTOM ERRORS
    // --------------------------------------------------------------

    error FeeOutOfRange();
    error NoZeroAddressAllowed();
    error OnlyOneTreasuryPerOrganisation();
    error NeedToCreateTreasuryFirst();

    // --------------------------------------------------------------
    // CONSTRUCTOR
    // --------------------------------------------------------------

    constructor() {}

    // --------------------------------------------------------------
    // PUBLIC FUNCTIONS
    // --------------------------------------------------------------

    function createOrganization(Organisation memory _organisation)
        public
        returns (uint256)
    {
        if (_organisation.organisationFee > SCALE) revert FeeOutOfRange();

        if (_organisation.walletAddress == address(0))
            revert NoZeroAddressAllowed();
        organisationCount++;
        organisation[organisationCount] = _organisation;
        emit OrganizationCreated(
            organisationCount,
            _organisation.walletAddress
        );
        return organisationCount;
    }

    function addTreasuryModule(
        uint256 organisationID,
        address USDC,
        address aUSDC,
        address aaveIncentivesController,
        address lendingPool
    ) public returns (address treasuryModuleAddress) {
        if (treasuryExist[organisationID] == true)
            revert OnlyOneTreasuryPerOrganisation();

        treasuryExist[organisationID] = true;
        TreasuryModule _treasuryModule = new TreasuryModule(
            USDC,
            aUSDC,
            aaveIncentivesController,
            lendingPool,
            address(this),
            msg.sender
        );
        treasuryModuleAddress = address(_treasuryModule);

        organisation[organisationID].centralTreasury = treasuryModuleAddress;

        emit TreasuryModuleAdded(organisationID);
    }

    //   function addNewModule(
    //     uint256 organisationID,
    //     address _usdc,
    //     address _forwarder
    //   ) public returns (address moduleAddress) {
    //     if (!treasuryExist[organisationID]) revert NeedToCreateTreasuryFirst();
    //     Module _module = new Module();
    //     moduleAddress = address(_raffleModule);

    //     // register deployed contract with organization

    //     address[] storage organisationContracts = organisation[organisationID]
    //       .contractsDeployed;
    //     organisationContracts.push(moduleAddress);

    //     emit ModuleAdded(organisationID);
    //   }

    // --------------------------------------------------------------
    // ONLY OWNER FUNCTIONS
    // --------------------------------------------------------------

    function setProtocolWalletAddress(address _protocolWalletAddress)
        public
        onlyOwner
        returns (address)
    {
        protocolWalletAddress = _protocolWalletAddress;
    }

    function setTokenRewardsCalculationAddress(
        address _tokenRewardsModuleAddress
    ) public onlyOwner returns (address) {
        tokenRewardsModuleAddress = _tokenRewardsModuleAddress;
    }

    function setProtocolFee(uint256 _protocolFee)
        public
        onlyOwner
        returns (uint256)
    {
        if (_protocolFee > SCALE) revert FeeOutOfRange();

        protocolFee = _protocolFee;
        return protocolFee;
    }

    // --------------------------------------------------------------
    // VIEW FUNCTIONS
    // --------------------------------------------------------------

    function getProtocolWalletAddress() public view returns (address) {
        return protocolWalletAddress;
    }

    function getTokenRewardsCalculationAddress() public view returns (address) {
        return tokenRewardsModuleAddress;
    }

    function getOrgaisationWalletAddess(uint256 organisationID)
        public
        view
        returns (address)
    {
        return organisation[organisationID].walletAddress;
    }

    function getTreasuryAddress(uint256 organisationID)
        public
        view
        returns (address)
    {
        return organisation[organisationID].centralTreasury;
    }

    function getDeployedContracts(uint256 organisationID)
        public
        view
        returns (address[] memory)
    {
        return organisation[organisationID].contractsDeployed;
    }

    function getProtocolFee() public view returns (uint256) {
        return protocolFee;
    }

    function getOrganisationFee(uint256 organisationID)
        public
        view
        returns (uint256)
    {
        return organisation[organisationID].organisationFee;
    }
}
