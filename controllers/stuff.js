const Thing = require('../models/Thing');

exports.createThing = (req, res, next) => {
  delete req.body._id;
  const thing = new Thing({
    ...req.body
  });
  thing.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllThings = (req, res, next) => {
  Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
  // const stuff = [
  //   {
  //     _id: 'oeihfzeoi',
  //     title: 'Mon premier objet',
  //     description: 'Les infos de mon premier objet',
  //     imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
  //     price: 4900,
  //     userId: 'qsomihvqios',
  //   },
  //   {
  //     _id: 'oeihfzeomoihi',
  //     title: 'Mon deuxième objet',
  //     description: 'Les infos de mon deuxième objet',
  //     imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
  //     price: 2900,
  //     userId: 'qsomihvqios',
  //   },
  // ];
  // res.status(200).json(stuff);
};

exports.getOneThing = (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
};

exports.modifyThing = (req, res, next) => {
  Thing.updateOne({ _id: req.params.id}, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteThing = (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch(error => res.status(400).json({ error }));
};