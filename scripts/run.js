const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log("Contract addy: ", waveContract.address);

  let songCount;
  songCount = await waveContract.getSongLink();
  console.log(songCount.toNumber());

  let songTxn = await waveContract.song("A song!");
  await songTxn.wait(); //Wait for transaction to be mined.

  const[_, randomPerson] = await hre.ethers.getSigners();
  songTxn = await waveContract.connect(randomPerson).song("Another song!");
  await songTxn.wait() //wait for transaction to be mined

  let allSongs = await waveContract.getAllSongs();
  console.log(allSongs);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();
// const main = async () => {
//     const[owner, randomPerson] = await hre.ethers.getSigners();
//     const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
//     const waveContract = await waveContractFactory.deploy();
//     await waveContract.deployed();
//     console.log("Contract deployed to: ", waveContract.address);
//     console.log("Contract deployed by: ", owner.address);

//     let waveCount;
//     waveCount = await waveContract.getTotalWaves();

//     let songTxn = await waveContract.wave();
//     await songTxn.wait();

//     waveCount = await waveContract.getTotalWaves();
//   };
  
//   const runMain = async () => {
//     try {
//       await main();
//       process.exit(0); // exit Node process without error
//     } catch (error) {
//       console.log(error);
//       process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
//     }
//     // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
//   };
  
//   runMain();