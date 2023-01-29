const ethers = require ('ethers');

async function parseBytes(args) {
    
    const bytes =  args[0];
    const name = ethers.utils.parseBytes32String(bytes);
    console.log('bytes: ', name)
}

parseBytes(process.argv.slice(2));
