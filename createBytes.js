const ethers = require ('ethers');

async function createBytes(args) {

    const name =  args[0];
    const bytes = ethers.utils.formatBytes32String(name);
    console.log('name: ', bytes)
}

createBytes(process.argv.slice(2));
