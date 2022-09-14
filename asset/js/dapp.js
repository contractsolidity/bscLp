
App = {
    index: 0,
    web3Provider: null,
    contracts: {
      investContract: null
    },
    currentAddress: '',
    // investAddress: '0x39A8bEcDf5d94950D9f8DC03fC63db3e77172A9D',
    investAddress: '0x622f3f4aCd8780d3B5215a5A93cc4b0a923CDBbE',
    
    rootAddress: '0xE9bFf9Ddd0479EDBc00E0EfAb6f50B67D60E7b18',
    investAbi:[
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "intro",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          }
        ],
        "name": "BindIntroLog",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "recordId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "investIncome",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "stakeReward",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "endTime",
            "type": "uint256"
          }
        ],
        "name": "GrantRecordLog",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "productId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "investAmount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "recordId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "dayReward",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
          }
        ],
        "name": "InvestLog",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_productId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_mainToken",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_deputyToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_investAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_stakeRate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_investRate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_limitAmount",
            "type": "uint256"
          }
        ],
        "name": "addProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_productId",
            "type": "uint256"
          }
        ],
        "name": "deleteProduct",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "directRate",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getAllProductStruct",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "mainToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "deputyToken",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "mainTokenSympol",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "deputyTokenSympol",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "investAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "stakeRate",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "investRate",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "limitAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "poolAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "totalInvestAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "totalPayAmount",
                "type": "uint256"
              }
            ],
            "internalType": "struct BscLpPro2.Product[]",
            "name": "productArr",
            "type": "tuple[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_productId",
            "type": "uint256"
          }
        ],
        "name": "getChainLength",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "getETH",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_productId",
            "type": "uint256"
          }
        ],
        "name": "getProduct",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "mainToken",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "deputyToken",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "mainTokenSympol",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "deputyTokenSympol",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "investAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "stakeRate",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "investRate",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "limitAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "poolAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "totalInvestAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "totalPayAmount",
                "type": "uint256"
              }
            ],
            "internalType": "struct BscLpPro2.Product",
            "name": "product",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_rate",
            "type": "uint256"
          }
        ],
        "name": "getRateAmount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_orderId",
            "type": "uint256"
          }
        ],
        "name": "getRecord",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "investor",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "dayRewardAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "productId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "isSettle",
                "type": "bool"
              }
            ],
            "internalType": "struct BscLpPro2.Record",
            "name": "record",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_user",
            "type": "address"
          }
        ],
        "name": "getUserInfo",
        "outputs": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "intro",
                "type": "address"
              },
              {
                "internalType": "address[]",
                "name": "children",
                "type": "address[]"
              },
              {
                "internalType": "uint256[]",
                "name": "userRecords",
                "type": "uint256[]"
              },
              {
                "internalType": "uint256",
                "name": "investAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "backAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "incomeAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "directReward",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "indirectReward",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "stakeRewards",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "lastInvestTime",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "isExist",
                "type": "bool"
              }
            ],
            "internalType": "struct BscLpPro2.User",
            "name": "user",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "indirectRate",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_productId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "_intro",
            "type": "address"
          }
        ],
        "name": "invest",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "limitTime",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "orderId",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "periodTime",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "platformRate",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "platformRewards",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "rootAddress",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_directRate",
            "type": "uint256"
          }
        ],
        "name": "setDirectRateRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_indirectRate",
            "type": "uint256"
          }
        ],
        "name": "setIndirectRateRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_limitTime",
            "type": "uint256"
          }
        ],
        "name": "setLimitTime",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_periodTime",
            "type": "uint256"
          }
        ],
        "name": "setPeriodTime",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_platformRate",
            "type": "uint256"
          }
        ],
        "name": "setPlatformRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_receiveAddress",
            "type": "address"
          }
        ],
        "name": "setReceiveAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalInvestUser",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "userInfo",
        "outputs": [
          {
            "internalType": "address",
            "name": "intro",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "investAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "backAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "incomeAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "directReward",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "indirectReward",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "stakeRewards",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastInvestTime",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isExist",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "userProducts",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "investAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "historyAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "incomeAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "introReward",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "stakeRewards",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "lastInvestTime",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    initWeb3: async function () {
      if (window.ethereum) {
        App.web3Provider = window.ethereum
        web3 = new Web3(App.web3Provider);
        try {
          // await App.changeNetwork()
          await ethereum.enable()
        } catch (error) {
        }
      } else {
        if (window.web3) {
          App.web3Provider = web3.currentProvider
          web3 = new Web3(App.web3Provider);
        } else {
          App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
          web3 = new Web3(App.web3Provider);
        }
      }
      web3.eth.getAccounts((err, accounts) => {
        if (err) {
          return
        }
        App.currentAddress = accounts[0]
        $('.account__address').text(App.currentAddress.substring(0, 4) + '.'.repeat(4) + App.currentAddress.substring(App.currentAddress.length - 4, App.currentAddress.length));
        return App.initContract();
      });
    },
    initContract: () => {
      App.contracts.investContract = new web3.eth.Contract(App.investAbi, App.investAddress);
      App.initData()
    },
    initData: () => {
      App.getBalance()
      App.getProduct()
      App.getIntro()
      App.getLink()
      App.getUserData()
      App.getTotalUser()
    },
    getLink: () => {
      let link = `${window.location.origin}/?intro=${App.currentAddress}`
      $('#link').val(link)
    },
    getBalance: async () => {
      let balance = await web3.eth.getBalance(App.currentAddress);
      balance = new BigNumber(balance).dividedBy(10 ** 18).toFixed(4)
      $('.account__balance').text(balance)
    },
    addProduct: async () => {
      await App.contracts.investContract.methods.addProduct('1', 
      '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
      '0x14ec6EE23dD1589ea147deB6c41d5Ae3d6544893', 
      '2' + '0'.repeat(16),
      '1000',
      '1000',
      '2' + '0'.repeat(17)
      ).send({from: App.currentAddress})
    },
    getProduct: async () => {
      let products = await App.contracts.investContract.methods.getAllProductStruct().call()
      console.log(products)
      let productHtml = ''
      let total = 0
      let totalNum = 0
      let userTotal = 0
      let userTotalNum = 0
      $.ajaxSettings.async = false
      for(let i=0; i < products.length;i++) {
        let userProduct = await App.contracts.investContract.methods.userProducts(App.currentAddress, products[i].id).call()
        let investAmount = new BigNumber(products[i].investAmount).dividedBy(10**18).toFixed(4)
        let limitAmount = new BigNumber(products[i].limitAmount).dividedBy(10**18).toFixed(4)
        let poolAmount = new BigNumber(products[i].poolAmount).dividedBy(10**18).toFixed(4)
        let userInvestAmount = new BigNumber(userProduct.investAmount).dividedBy(10**18).toFixed(4)
        let userIntroReward = new BigNumber(userProduct.introReward).dividedBy(10**18).toFixed(4)
        total += Number(products[i].totalInvestAmount)
        userTotal += Number(userProduct.historyAmount)
        totalNum += parseInt(products[i].totalInvestAmount/products[i].investAmount)
        userTotalNum += parseInt(userProduct.historyAmount/products[i].investAmount)
        // let userStakeRewards = new BigNumber(userProduct.stakeRewards).dividedBy(10**18).toFixed(4)
        let userIncomeAmount = new BigNumber(userProduct.incomeAmount).dividedBy(10**18).toFixed(4)
        productHtml += `<div class="i-liquidity__group">
        <div class="i-liquidity__group1">
          <div class="i-liquidity__group1-block1">
            <img src="${App.tokenLogo(products[i].mainToken)}" alt="" class="i-liquidity__icon"/> <img style="margin-left: -8px" src="${App.tokenLogo(products[i].deputyToken)}" alt="" class="i-liquidity__icon"/>&nbsp;&nbsp;BNB - ${products[i].deputyTokenSympol} <a href="" target="_blank"><img src="/asset/image/index/liquidity_linker.png" alt="LINK" class="i-liquidity__linker"/></a>
          </div>
          <div class="i-liquidity__group1-block2">
            <span class="count"><strong>${investAmount}</strong> BNB</span>
          </div>
          <div class="i-liquidity__group1-block3">
            <div class="i-liquidity__today">
               Today <span class="count"><strong>${poolAmount}</strong></span>
            </div>
            <div class="i-liquidity__total">
               Total flow pool <span class="count"><strong>${limitAmount}</strong></span>
            </div>
            <div class="i-liquidity__range">
              <div class="i-liquidity__rangebar" style="left: ${poolAmount/limitAmount * 100}%;">
                <span class="sr">Data Range</span>
              </div>
            </div>
          </div>
        </div>
        <div class="i-liquidity__group2">
          <div class="i-liquidity__group2-block1">
            <div class="i-liquidity__estimate">
               Expected earning annual rate is <br><br> <strong>168~380</strong><span>%</span>
            </div>
            <a href="javaScript:;" onclick="App.invest(${products[i].id},${products[i].investAmount})" class="i-liquidity__start">Liquidity mining</a>
          </div>
          <div class="i-liquidity__group2-block2">
            <ul class="i-liquidity_chart">
              <li class="i-liquidity_chart-item">
              <div class="i-liquidity_chart-title">
                 Liquidity donationn
              </div>
              <div class="i-liquidity_chart-data">
                <strong>${userInvestAmount}</strong> BNB
              </div>
              </li>
              <li class="i-liquidity_chart-item">
              <div class="i-liquidity_chart-title">
                 Completed mining Reward
              </div>
              <div class="i-liquidity_chart-data">
                <strong>${userIncomeAmount}</strong> BNB
              </div>
              </li>
              <li class="i-liquidity_chart-item">
              <div class="i-liquidity_chart-title">
                 Recommended mining Reward 
              </div>
              <div class="i-liquidity_chart-data">
                <strong>${userIntroReward}</strong> BNB
              </div>
              </li>
            </ul>
          </div>
        </div>
      </div>`   
      }
      $('#product-box').html(productHtml)
      $('.total').text(new BigNumber(total).dividedBy(10**18).toFixed(4))
      $('.totalNum').text(totalNum)
      $('.user-total').text(new BigNumber(userTotal).dividedBy(10**18).toFixed(4))
      $('.user-totalNum').text(userTotalNum)
    },
    getUserData: async () => {
      let userInfo = await App.contracts.investContract.methods.getUserInfo(App.currentAddress).call()
      let incomeAmount = new BigNumber(userInfo.incomeAmount).dividedBy(10**18).toFixed(4)
      let investAmount = new BigNumber(userInfo.investAmount).dividedBy(10**18).toFixed(4)
      let indirectReward = new BigNumber(userInfo.indirectReward).dividedBy(10**18).toFixed(4)
      let directReward = new BigNumber(userInfo.directReward).dividedBy(10**18).toFixed(4)
      let stakeRewards = new BigNumber(userInfo.stakeRewards).dividedBy(10**18).toFixed(4)
      $('#user-total').text(new BigNumber(directReward).plus(indirectReward).plus(incomeAmount).plus(stakeRewards).toFixed(4))
      $('#user-Completed').text(incomeAmount)
      $('#user-mining-Reward').text(stakeRewards)
      $('#intro-reward').text(new BigNumber(directReward).plus(indirectReward).toFixed(4))
      $('#direct-reward').text(directReward)
      $('#indirect-reward').text(indirectReward)
    },
    getTotalUser: async () => {
      let num = await App.contracts.investContract.methods.totalInvestUser().call()
      $('.totalPeople').text(num)
    },
    invest: async (productId, amount) => {
      let intro = localStorage.getItem('intro') || App.rootAddress
      let userProduct = await App.contracts.investContract.methods.userProducts(App.currentAddress, productId).call()
      let limitTime = await App.contracts.investContract.methods.limitTime().call()
      let blockInfo = await web3.eth.getBlock('latest')
      if(Number(userProduct.lastInvestTime) + Number(limitTime) > Number(blockInfo.timestamp)) {
        layer.open({
          content: "The cooling time has not expired",
          skin: 'msg',
          time: 2 //2秒后自动关闭
        });
        return
      }
      let gas = await App.contracts.investContract.methods.invest(productId, intro).estimateGas({from: App.currentAddress, value: amount})
      App.index = layer.open({
        type: 2
        ,content: 'investing.....'
      });
      await App.contracts.investContract.methods.invest(productId, intro).send({from: App.currentAddress, value: amount})
      layer.close(App.index)
      layer.open({
        content: "invest success",
        skin: 'msg',
        time: 2 //2秒后自动关闭
      });
      App.initData()
    },
    getIntro: () => {
      let href = window.location.href.replace(/#/g, '')
      if (href.includes('?')) {
        var search = href.slice(href.indexOf('?') + 1, href.length)
        var params = App.queryParse(search)
        var intro = String(params.intro).trim()
        if (intro && web3.utils.isAddress(intro)) {
          localStorage.setItem('intro', intro)
        }
      }
  },
    queryParse: (str) => {
      if (!str || str === '0') {
        return {}
      }
      let dataArr = decodeURIComponent(str).split('&')
      let params = {}
      dataArr.forEach(query => {
        let queryItem = query.split('=')
        if (queryItem.length === 1) {
          params.id = queryItem[0]
        } else {
          params[queryItem[0]] = queryItem[1]
        }
      })
      return params
    }, 
    tokenLogo:(address) => {
      return ''
    },
    createContract: () => {
      let agreement = $('#agreement').prop('checked')
      let code = $('#code').val()
      let email = $('#email').val()
      let contractAddress = $('#contractAddress').val()
      if(!agreement) {
        layer.open({
          content: "Please agree to the disclaimer first",
          skin: 'msg',
          time: 2 //2秒后自动关闭
        });
        return
      }
      if (!code) {
        layer.open({
          content: "Please fill code in first",
          skin: 'msg',
          time: 2 //2秒后自动关闭
        });
        return
      }
      if (!email) {
        layer.open({
          content: "Please fill email in first",
          skin: 'msg',
          time: 2 //2秒后自动关闭
        });
        return
      }
      if (!contractAddress) {
        layer.open({
          content: "Please fill contractAddress in first",
          skin: 'msg',
          time: 2 //2秒后自动关闭
        });
        return
      }
    }
  };
  
  (function () {
     App.initWeb3();
  })();
  
  