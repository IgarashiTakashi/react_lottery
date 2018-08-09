//部署智能合约到真实的rankeby网络
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');
const web3 = new Web3(ganache.provider());

deploy =async ()=>{
    const accounts = await web3.eth.getAccounts();
    //0x81F152eB36d1CE8De59e729f389c28e9b59A44fc
    console.log(accounts[0]);
    const result =await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data:bytecode
        }).send({
            from:accounts[0],
            gas:'3000000'
        });
    console.log('address:'+result.options.address);
};
deploy();