const data = {
    assets: require('../model/assets.json'),
    setAssets: function (data) { this.assets = data }
}

const getAllAssets = (req, res) => {
    res.json(data.assets);
}

const createNewAsset = (req, res) => {
    const newAsset = {
        id: data.assets?.length ? data.assets[data.assets.length - 1].id + 1 : 1,
        name: req.body.name,
        symbol: req.body.symbol,
        price: Math.random() * 1000, // generate a random price between 0 and 1000
        volume: Math.random() * 1000, // generate a random volume between 0 and 1000
    }
    if (!newAsset.name || !newAsset.symbol) {
        return res.status(400).json({ 'message': 'Name and Symbol are required.' });
    }

    data.setAssets([...data.assets, newAsset]);
    res.status(201).json(data.assets);
}


module.exports = {
    getAllAssets,
    createNewAsset
}